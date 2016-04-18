# Generator Node Module

Yeoman generator for creating awesome node modules with babel, codeclimate, circleci, eslint, tape, and istanbul.

[![Code Climate](https://codeclimate.com/github/kkemple/generator-awesome-module/badges/gpa.svg)](https://codeclimate.com/github/kkemple/generator-awesome-module)
[![Test Coverage](https://codeclimate.com/github/kkemple/generator-awesome-module/badges/coverage.svg)](https://codeclimate.com/github/kkemple/generator-awesome-module/coverage)
[![Issue Count](https://codeclimate.com/github/kkemple/generator-awesome-module/badges/issue_count.svg)](https://codeclimate.com/github/kkemple/generator-awesome-module)
[![Circle CI](https://circleci.com/gh/kkemple/generator-awesome-module.svg?style=svg)](https://circleci.com/gh/kkemple/generator-awesome-module)

___

## Opinions
- **Linting**: Eslint - Babel (es2015 plugin)
- **Testing**: Tape with tests next to source files
- **Coverage**: Istanbul
- **Transpiling**: Babel from `src` dir to `lib` dir
- **CI**: CircleCI
- **Integrations**:
  - **Code Climate**

## Usage

> Make sure you have `yo` installed!

First install the module

`npm install -g generator-awesome-module`

Then run yo

`yo awesome-module`

___

## Files Created
```bash
.
├── .babelrc
├── .codeclimate.yml
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .npmignore
├── CHANGELOG.md
├── LICENSE.md
├── package.json
├── readme.md
├── circle.yml
└── src
    ├── index.js
    └── index.test.js

```

___

## Modules Installed

```json
{
  "babel-cli": "^6.7.5",
  "babel-preset-es2015": "^6.6.0",
  "babel-register": "^6.7.2",
  "eslint": "^2.8.0",
  "eslint-config-airbnb": "^7.0.0",
  "eslint-plugin-jsx-a11y": "^0.6.2",
  "eslint-plugin-react": "^4.3.0",
  "istanbul": "^1.0.0-alpha.2",
  "rimraf": "^2.5.2",
  "sinon": "^1.17.3",
  "tape": "^4.5.1"
}
```

___

## Available NPM scripts

```json
{
  "test:ci": "npm run lint && npm run test:coverage",
  "test:coverage": "istanbul cover tape -- -r babel-register src/**/*.test.js",
  "test": "tape -r babel-register src/**/*.test.js",
  "lint": "eslint .",
  "compile": "rimraf lib && babel src --out-dir lib --source-maps inline"
}
```

> All source code should live in `src` dir. Compiles to `lib` dir.
