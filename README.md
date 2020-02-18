# Unicode Chars [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/unicode-chars/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/unicode-chars)

An array of all unicode characters.

[![NPM Badge](https://nodei.co/npm/unicode-chars.png)](https://npmjs.com/package/unicode-chars)

## Install

```sh
npm install unicode-chars
```

## Usage

```js
const unicodeChars = require("unicode-chars");

unicodeChars();
//=> [ ' ', '!', '"', '#', '$', '%', '&',  "'", '(', ... ]
```

## API

### unicodeChars(options?)

#### options

Type: `object`

##### categories or omitCategories

Type: `string[]`

Include or omit specific categories.

##### pickedProperty

Type: `string`\
Default: `symbol`

The property to extract for each character.
