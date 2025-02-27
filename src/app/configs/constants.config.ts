/**
 * EXTENSION_ID: The unique identifier of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_ID);
 *
 * @returns {string} - The unique identifier of the extension
 */
export const EXTENSION_ID: string = 'autoBarrel';

/**
 * EXTENSION_NAME: The repository ID of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_NAME);
 *
 * @returns {string} - The repository ID of the extension
 */
export const EXTENSION_NAME: string = 'vscode-auto-barrel';

/**
 * EXTENSION_DISPLAY_NAME: The name of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_DISPLAY_NAME);
 *
 * @returns {string} - The name of the extension
 */
export const EXTENSION_DISPLAY_NAME: string = 'Auto Barrel';

/**
 * USER_NAME: The ManuelGil of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(USER_NAME);
 *
 * @returns {string} - The ManuelGil of the extension
 */
export const USER_NAME: string = 'ManuelGil';

/**
 * USER_PUBLISHER: The publisher of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(USER_PUBLISHER);
 *
 * @returns {string} - The publisher of the extension
 */
export const USER_PUBLISHER: string = 'imgildev';

/**
 * REPOSITORY_URL: The documentation URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(REPOSITORY_URL);
 *
 * @returns {string} - The documentation URL of the extension
 */
export const REPOSITORY_URL: string = `https://github.com/${USER_NAME}/${EXTENSION_NAME}`;

/**
 * DEFAULT_LANGUAGE: The default language.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(DEFAULT_LANGUAGE);
 *
 * @returns {string} - The default language
 */
export const DEFAULT_LANGUAGE: 'TypeScript' | 'JavaScript' = 'TypeScript';

/**
 * RECURSIVE_BARRELLING: The flag to recursively barrel.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(RECURSIVE_BARRELLING);
 *
 * @returns {boolean} - The flag to recursively barrel
 */
export const DISABLE_RECURSIVE: boolean = false;

/**
 * INCLUDE: The files to include.
 * @type {string[]}
 * @public
 * @memberof Constants
 * @example
 * console.log(INCLUDE);
 *
 * @returns {string[]} - The files to include
 */
export const INCLUDE_EXTENSIONS: string[] = ['ts', 'tsx', 'vue'];

/**
 * EXCLUDE: The files to exclude.
 * @type {string[]}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXCLUDE);
 *
 * @returns {string[]} - The files to exclude
 */
export const EXCLUDE_PATTERNS: string[] = [
  '**/*.spec.*',
  '**/*.test.*',
  '**/*.e2e.*',
  '**/index.ts',
  '**/index.js',
];

/**
 * RECURSION_DEPTH: The recursion depth.
 * @type {number}
 * @public
 * @memberof Constants
 * @example
 * console.log(RECURSION_DEPTH);
 *
 * @returns {number} - The recursion depth
 */
export const RECURSION_DEPTH: number = 0;

/**
 * SUPPORTS_HIDDEN: The flag to support hidden files and directories (files that start with a dot).
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(SUPPORTS_HIDDEN);
 *
 * @returns {boolean} - The flag to support hidden files and directories
 */
export const SUPPORTS_HIDDEN: boolean = true;

/**
 * PRESERVE_GITIGNORE: The flag to preserve the .gitignore file.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(PRESERVE_GITIGNORE);
 *
 * @returns {boolean} - The flag to preserve the .gitignore file
 */
export const PRESERVE_GITIGNORE: boolean = false;

/**
 * KEEP_EXTENSION: The flag to keep the extension on export.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(KEEP_EXTENSION);
 *
 * @returns {boolean} - The flag to keep the extension on export
 */
export const KEEP_EXTENSION: boolean = false;

/**
 * DETECT_EXPORTS: The flag to detect exports.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(DETECT_EXPORTS);
 *
 * @returns {boolean} - The flag to detect exports
 */
export const DETECT_EXPORTS: boolean = false;

/**
 * USE_NAMED_EXPORTS: The flag to use named exports.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(USE_NAMED_EXPORTS);
 *
 * @returns {boolean} - The flag to use named exports
 */
export const USE_NAMED_EXPORTS: boolean = false;

/**
 * EXPORT_FILENAME: The filename to export the default export.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXPORT_FILENAME);
 *
 * @returns {string} - The filename to export the default export
 */
export const EXPORT_FILENAME: string = 'filename';

/**
 * DEFAULT_FILENAME: The default filename.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(DEFAULT_FILENAME);
 *
 * @returns {string} - The default filename
 */
export const DEFAULT_FILENAME: string = 'index';

/**
 * HEADER_COMMENT_TEMPLATE: The default header comment template.
 * @type {string[]}
 * @public
 * @memberof Constants
 * @example
 * console.log(HEADER_COMMENT_TEMPLATE);
 *
 * @returns {string[]} - The default header comment template
 */
export const HEADER_COMMENT_TEMPLATE = [];

/**
 * EXCLUDE_SEMICOLON: The flag to exclude a semicolon at the end of a line.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXCLUDE_SEMICOLON);
 *
 * @returns {boolean} - The flag to exclude a semicolon at the end of a line
 */
export const EXCLUDE_SEMICOLON: boolean = false;

/**
 * USE_SINGLE_QUOTES: The flag to use single quotes.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(USE_SINGLE_QUOTES);
 *
 * @returns {boolean} - The flag to use single quotes
 */
export const USE_SINGLE_QUOTES: boolean = true;

/**
 * END_OF_LINE: The end of line character.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(END_OF_LINE);
 *
 * @returns {string} - The end of line character
 */
export const END_OF_LINE: string = 'lf';

/**
 * INSERT_FINAL_NEWLINE: The flag to insert a final newline.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(INSERT_FINAL_NEWLINE);
 *
 * @returns {boolean} - The flag to insert a final newline
 */
export const INSERT_FINAL_NEWLINE: boolean = true;
