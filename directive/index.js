'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');

var SpaWaterGenerator = yeoman.generators.NamedBase.extend({
  writing: function() {
    var src = 'js/directives/' + this.name + '.js';
    this.template('directives.js', src);
    this.writeScriptTag(src);
  }
});


module.exports = SpaWaterGenerator;
