const test = require("ava")
const unicodeChars = require(".")

test("main", (t) => {
	t.true(Array.isArray(unicodeChars()))
})
