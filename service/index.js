'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');
var ScriptBase = require('./../ScriptBase');

var SpaWaterGenerator = yeoman.generators.NamedBase.extend({
  writing: function() {
    var src = 'js/services/' + this.name + '.js';
    this.template('service.js', src);
    this.writeScriptTag(src);
  }
});

module.exports = SpaWaterGenerator;
