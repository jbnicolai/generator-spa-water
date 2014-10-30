'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var SpaWaterGenerator = yeoman.generators.Base.extend({

  initializing: function() {

    this.pkg = require('../package.json');

    this.appname = path.basename(process.cwd());
    this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));

  },

  prompting: function() {

    var done = this.async();

    this.log(yosay(
      'Welcome to the spa water generator!'
    ));

    done();

  },

  writing: {

    app: function() {

      // Create empty folders
      this.dest.mkdir('img');
      this.dest.mkdir('css');
      this.dest.mkdir('js');
      this.dest.mkdir('js/controllers');
      this.dest.mkdir('js/directives');
      this.dest.mkdir('js/constants');
      this.dest.mkdir('js/libraries');
      this.dest.mkdir('js/services');
      this.dest.mkdir('templates');

      // Move files across
      this.directory('less', 'less');
      this.src.copy('js/libraries/parse.1.3.1.min.js', 'js/libraries/parse.1.3.1.min.js');

      // Compile and copy
      // templates
      this.template('_bower.json', 'bower.json');
      this.template('index.html', 'index.html');
      this.template('js/app.js', 'js/app.js');
      this.template('js/config.js', 'js/config.js');
      this.template('js/constants/SETTINGS.js', 'js/constants/SETTINGS.js');
      this.template('js/services/Parse.js', 'js/services/Parse.js');

    },

    projectfiles: function() {

      this.src.copy('bowerrc', '.bowerrc');
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');

    }

  },

  end: function() {
    this.bowerInstall();
  }

});

module.exports = SpaWaterGenerator;
