import { Position, Range, Uri, WorkspaceEdit, window, workspace } from 'vscode';

import { access, existsSync, mkdirSync, open, writeFile } from 'fs';
import { dirname, join } from 'path';
import { ExtensionConfig } from '../configs';

/**
 * The FilesController class.
 *
 * @class
 * @classdesc The class that represents the list files controller.
 * @export
 * @public
 * @property {ExtensionConfig} config - The configuration object
 * @example
 * const controller = new FilesController(config);
 */
export class FilesController {
  // -----------------------------------------------------------------
  // Constructor
  // -----------------------------------------------------------------

  /**
   * Constructor for the FilesController class
   *
   * @constructor
   * @param {ExtensionConfig} config - The configuration object
   * @public
   * @memberof FilesController
   */
  constructor(readonly config: ExtensionConfig) {}

  // -----------------------------------------------------------------
  // Methods
  // -----------------------------------------------------------------

  // Public methods

  /**
   * The createBarrel method.
   *
   * @function createBarrel
   * @param {Uri} [path] - The path to the folder
   * @public
   * @async
   * @memberof FilesController
   * @example
   * controller.createBarrel();
   *
   * @returns {Promise<void>} - The promise with no return value
   */
  public async createBarrel(path?: Uri): Promise<void> {
    // Get the relative path
    const folderPath: string = path
      ? await workspace.asRelativePath(path.path)
      : '';

    // If the folder is not valid, return
    if (!folderPath) {
      return;
    }

    const content = await this.getContent(folderPath);

    const ext = this.config.defaultLanguage === 'typescript' ? 'ts' : 'js';
    const filename = `index.${ext}`;

    if (content) {
      this.saveFile(folderPath, filename, content);
    }
  }

  /**
   * The updateBarrel method.
   *
   * @function updateBarrel
   * @param {Uri} [file] - The path to the folder
   * @public
   * @async
   * @memberof FilesController
   * @example
   * controller.updateBarrel();
   *
   * @returns {Promise<void>} - The promise with no return value
   */
  async updateBarrel(path?: Uri): Promise<void> {
    const targetFile = path ? path.fsPath : '';

    // Get the relative path
    const folderPath: string = path
      ? await workspace.asRelativePath(path.path)
      : '';

    // If the file is not valid, return
    if (!folderPath) {
      return;
    }

    const content = await this.getContent(
      folderPath.replace(/\/index\.(ts|js)/, ''),
    );

    if (content) {
      const document = await workspace.openTextDocument(targetFile);

      const edit = new WorkspaceEdit();
      const start = new Position(0, 0);
      const end = new Position(document.lineCount, 0);
      const range = new Range(start, end);

      edit.replace(document.uri, range, content);
      workspace.applyEdit(edit);

      window.showInformationMessage('Successfully updated the file!');
    }
  }

  // Private methods

  /**
   * The getContent method.
   *
   * @function getContent
   * @param {string} folderPath - The folder path
   * @private
   * @async
   * @memberof FilesController
   * @example
   * controller.getContent();
   *
   * @returns {Promise<string | undefined>} - The promise with the content
   */
  private async getContent(folderPath: string): Promise<string | undefined> {
    const include = `${folderPath}/**/*.{${this.config.includeExtensionOnExport.join(',')}}`;

    // Get the files in the folder
    const files = await this.directoryMap({
      extensions: [include],
      ignore: this.config.ignoreFilePathPatternOnExport,
      maxResults: Number.MAX_SAFE_INTEGER,
    });

    if (files.length === 0) {
      window.showErrorMessage('No files found in the folder!');
      return;
    }

    const paths = [];

    for (const file of files) {
      const relativePath = await workspace.asRelativePath(file.path);
      paths.push(relativePath.replace(folderPath, ''));
    }

    const quote = this.config.useSingleQuotes ? "'" : '"';
    const semi = this.config.excludeSemiColonAtEndOfLine;
    const keepExtension = this.config.keepExtensionOnExport;

    return paths
      .map((path) => {
        if (!keepExtension) {
          path = path.replace(/\.[^/.]+$/, '');
        }

        return `export * from ${quote}.${path}${quote}${semi ? '' : ';'}\n`;
      })
      .join('');
  }

  /**
   * The directoryMap method.
   *
   * @function directoryMap
   * @param {Object} [options] - The options object
   * @param {string[]} [options.extensions] - The extensions
   * @param {string[]} [options.ignore] - The ignore
   * @param {number} [options.maxResults] - The maximum number of results
   * @private
   * @async
   * @memberof FilesController
   * @example
   * controller.directoryMap();
   *
   * @returns {Promise<Uri[]>} - The promise with the list of URIs
   */
  private async directoryMap(options?: {
    extensions?: string[];
    ignore?: string[];
    maxResults?: number;
  }): Promise<Uri[]> {
    let include = '';
    let exclude = '';

    if (options && options.extensions && options.extensions.length) {
      include = `${options.extensions.join(',')}`;
    }

    if (options && options.ignore && options.ignore.length) {
      exclude = `{${options.ignore.join(',')}}`;
    }

    return workspace.findFiles(include, exclude, options?.maxResults);
  }

  /**
   * The saveFile method.
   *
   * @function saveFile
   * @param {string} path - The path
   * @param {string} filename - The filename
   * @param {string} data - The data
   * @private
   * @async
   * @memberof FilesController
   * @example
   * controller.saveFile('path', 'filename', 'data');
   *
   * @returns {Promise<void>} - The promise with no return value
   */
  private async saveFile(
    path: string,
    filename: string,
    data: string,
  ): Promise<void> {
    let folder: string = '';

    if (workspace.workspaceFolders) {
      folder = workspace.workspaceFolders[0].uri.fsPath;
    } else {
      window.showErrorMessage('The file has not been created!');
      return;
    }

    const file = join(folder, path, filename);

    if (!existsSync(dirname(file))) {
      mkdirSync(dirname(file), { recursive: true });
    }

    access(file, (err: any) => {
      if (err) {
        open(file, 'w+', (err: any, fd: any) => {
          if (err) {
            throw err;
          }

          writeFile(fd, data, 'utf8', (err: any) => {
            if (err) {
              throw err;
            }

            const openPath = Uri.file(file);

            workspace.openTextDocument(openPath).then((filename) => {
              window.showTextDocument(filename);
            });
          });
        });

        window.showInformationMessage('Successfully created the file!');
      } else {
        window.showWarningMessage('Name already exist!');
      }
    });
  }
}