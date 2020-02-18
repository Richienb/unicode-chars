"use strict"

const chars = require("unicode/category")
const _ = require("lodash")

module.exports = ({ categories, omitCategories, pickedProperty = "symbol" } = {}) => {
	let usedChars
	if (Array.isArray(categories)) usedChars = _.pick(chars, categories)
	else if (Array.isArray(omitCategories)) usedChars = _.omit(chars, categories)
	else usedChars = chars

	const values = Object.values(usedChars)

	const charsToUse = Object.assign(...values)
	const symbols = _.map(charsToUse, pickedProperty)

	return symbols
}
