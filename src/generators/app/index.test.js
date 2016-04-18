import path from 'path'

import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import test from 'tape'

const options = {
  moduleName: 'test',
  moduleDescription: 'test',
  authorName: 'Test',
  authorEmail: 'test@test.com',
  keywords: 'awesome, module, test',
  repository: 'kkemple/test',
}

test('test', (t) => {
  helpers
    .run(path.resolve(__dirname, 'index.js'))
    .withOptions(options)
    .on('end', () => {
      try {
        assert.file([
          'src/index.js',
          'src/index.test.js',
          '.babelrc',
          '.eslintrc',
          '.eslintignore',
          '.gitignore',
          '.npmignore',
          '.codeclimate.yml',
          'circle.yml',
          'package.json',
          'README.md',
          'CHANGELOG.md',
          'LICENSE.md',
        ])
      } catch (err) {
        t.fail(err.message)
      }

      t.pass('all files found')
      t.end()
    })
})

test('test', (t) => {
  helpers
    .run(path.resolve(__dirname, 'index.js'))
    .withPrompts(options)
    .on('end', () => {
      try {
        assert.fileContent('src/index.js', 'return \'test\'')
      } catch (err) {
        t.fail(err.message)
      }

      t.pass('src/index.js has proper settings (moduleName)')
      t.end()
    })
})

test('test', (t) => {
  helpers
    .run(path.resolve(__dirname, 'index.js'))
    .withPrompts(options)
    .on('end', () => {
      try {
        assert.fileContent(
          'src/index.test.js',
          'assert.equal(myModule(), \'test\', \'should return module name\')'
        )
      } catch (err) {
        t.fail(err.message)
      }

      t.pass('src/index.test.js has proper settings (moduleName)')
      t.end()
    })
})

test('test', (t) => {
  helpers
    .run(path.resolve(__dirname, 'index.js'))
    .withPrompts(options)
    .on('end', () => {
      try {
        assert.fileContent('LICENSE.md', 'Test')
      } catch (err) {
        t.fail(err.message)
      }

      t.pass('LICENSE.md has proper settings (authorName)')
      t.end()
    })
})

test('test', (t) => {
  helpers
    .run(path.resolve(__dirname, 'index.js'))
    .withPrompts(options)
    .on('end', () => {
      try {
        assert.fileContent('package.json', '"name": "test"')
        assert.fileContent('package.json', '"description": "test"')
        assert.fileContent('package.json', '"url": "git+ssh://git@github.com/kkemple/test.git"')
        assert.fileContent('package.json', '"url": "https://github.com/kkemple/test/issues"')
        assert.fileContent('package.json', '"homepage": "https://github.com/kkemple/test#readme"')
        assert.fileContent('package.json', '"keywords": ["awesome", "module", "test"]')
        assert.fileContent('package.json', '"author": "Test <test@test.com>"')
      } catch (err) {
        t.fail(err.message)
      }

      /* eslint max-len: [0] */
      t.pass('package.json has proper settings (moduleName, moduleDescription, repository, authorName, authorEmail)')
      t.end()
    })
})

test('test', (t) => {
  helpers
    .run(path.resolve(__dirname, 'index.js'))
    .withPrompts(options)
    .on('end', () => {
      try {
        assert.fileContent('README.md', 'test')
        assert.fileContent('README.md', 'https://codeclimate.com/github/kkemple/test/badges/gpa.svg')
        assert.fileContent('README.md', 'https://codeclimate.com/github/kkemple/test/badges/coverage.svg')
        assert.fileContent('README.md', 'https://codeclimate.com/github/kkemple/test/badges/issue_count.svg')
        assert.fileContent('README.md', 'https://codeclimate.com/github/kkemple/test')
        assert.fileContent('README.md', 'https://circleci.com/gh/kkemple/test.svg?style=svg')
        assert.fileContent('README.md', '`npm install test`')
      } catch (err) {
        t.fail(err.message)
      }

      t.pass('README.md has proper settings (moduleName, moduleDescription, repository)')
      t.end()
    })
})
