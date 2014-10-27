'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var SpaWaterGenerator = yeoman.generators.NamedBase.extend({

  writing: function() {

    var src = this.name + '.less';
    var tag = '@import "styles/' + src + '";';
    var file = this.dest.read('less/main.less');
    var i = file.lastIndexOf('@import "styles.less";') + 22;

    this.template('style.less', 'less/styles/' + src);

    if (file.indexOf(tag) === -1) {
      this.conflicter.force = true;
      file = file.substring(0, i) + '\n' + tag + file.substring(i);
      this.dest.write('less/main.less', file);
    }

  }

});

module.exports = SpaWaterGenerator;
