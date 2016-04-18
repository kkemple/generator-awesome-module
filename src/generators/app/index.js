var generators = require('yeoman-generator')
var mkdirp = require('mkdirp')

var prompts = [
  {
    type: 'input',
    name: 'moduleName',
    message: 'module name ...',
    default: 'awesome'
  },

  {
    type: 'input',
    name: 'moduleDescription',
    message: 'module description ...',
    default: 'An awesome module for awesome projects...'
  },

  {
    type: 'input',
    name: 'keywords',
    message: 'keywords ...',
    default: 'awesome, node module'
  },

  {
    type: 'input',
    name: 'authorName',
    message: 'author name ...',
    default: 'Some Person'
  },

  {
    type: 'input',
    name: 'authorEmail',
    message: 'author email ...',
    default: 'example@awesome-module.com'
  },

  {
    type: 'input',
    name: 'repository',
    message: 'repository ... (org/repo)',
    default: 'org/repo'
  },
]

module.exports = generators.Base.extend({
  prompting() {
    var done = this.async()

    this.prompt(prompts, (answers) => {
      this.moduleName = answers.moduleName
      this.moduleDescription = answers.moduleDescription
      this.authorName = answers.authorName
      this.authorEmail = answers.authorEmail
      this.keywords = answers.keywords
      this.repository = answers.repository
      done()
    })
  },

  scaffoldFolders() {
    mkdirp.sync('src')
  },

  writing() {
    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    )

    this.fs.copy(
      this.templatePath('.codeclimate.yml'),
      this.destinationPath('.codeclimate.yml')
    )

    this.fs.copy(
      this.templatePath('.eslintignore'),
      this.destinationPath('.eslintignore')
    )

    this.fs.copy(
      this.templatePath('.eslintrc'),
      this.destinationPath('.eslintrc')
    )

    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    )

    this.fs.copy(
      this.templatePath('.npmignore'),
      this.destinationPath('.npmignore')
    )

    this.fs.copy(
      this.templatePath('circle.yml'),
      this.destinationPath('circle.yml')
    )

    this.fs.copy(
      this.templatePath('CHANGELOG.md'),
      this.destinationPath('CHANGELOG.md')
    )

    this.fs.copyTpl(
      this.templatePath('LICENSE.md'),
      this.destinationPath('LICENSE.md'),
      { authorName: this.authorName }
    )

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {
        moduleName: this.moduleName,
        moduleDescription: this.moduleDescription,
        authorName: this.authorName,
        authorEmail: this.authorEmail,
        repository: this.repository,
        keywords: this.keywords
          .split(/,\s+/)
          .map((k) => `"${k}"`).join(', ')
      }
    )

    this.fs.copyTpl(
      this.templatePath('src/index.js'),
      this.destinationPath('src/index.js'),
      { moduleName: this.moduleName }
    )

    this.fs.copyTpl(
      this.templatePath('src/index.test.js'),
      this.destinationPath('src/index.test.js'),
      { moduleName: this.moduleName }
    )

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        moduleName: this.moduleName,
        moduleDescription: this.moduleDescription,
        authorName: this.authorName,
        authorEmail: this.authorEmail,
        repository: this.repository,
        keywords: this.keywords
          .split(/,\s+/)
          .map((k) => `"${k}"`).join(', ')
      }
    )
  },

  install() {
    this.installDependencies()
  },
})
