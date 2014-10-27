'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');
var ScriptBase = require('./../ScriptBase');

var SpaWaterGenerator = ScriptBase.extend({
  writing: function() {

    this.conflicter.force = true;
    this.template('controller.js', 'js/controllers/' + this.name + 'Ctrl.js');

    this.writeScriptTag('js/controllers/' + this.name + 'Ctrl.js');

  }
});

module.exports = SpaWaterGenerator;
