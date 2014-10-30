'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');
var ScriptBase = require('./../ScriptBase');

var SpaWaterGenerator = yeoman.generators.NamedBase.extend({
  writing: function() {
    var src = 'js/directives/' + this.name + '.js';
    this.template('directive.js', src);
    this.writeScriptTag(src);
  }
});


module.exports = SpaWaterGenerator;
