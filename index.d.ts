import { MergeExclusive } from "type-fest"

/**
 * An array of all unicode characters.
 * @param options Options.
 * @example
 * ```
 * const unicodeChars = require("unicode-chars");
 *
 * unicodeChars();
 * //=> [ ' ', '!', '"', '#', '$', '%', '&',  "'", '(', ... ]
 * ```
*/
declare function unicodeChars(options?: MergeExclusive<{
	/* Specific categories to include. */
	categories?: string
}, {
	/** Specific categories to exclude. */
	omitCategories?: string
}> & {
	/** The property to extract for each character. */
	pickedProperty?: string
}): string[]

export = unicodeChars
