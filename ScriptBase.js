var generators = require('yeoman-generator');

module.exports = generators.NamedBase.extend({

  constructor: function() {

    generators.NamedBase.apply(this, arguments);

    this.writeScriptTag = function(src) {

      var tag = '<script src="' + src + '"></script>';
      var file = this.dest.read('index.html');
      var i = file.lastIndexOf('</script>') + 9;

      if (file.indexOf(tag) === -1) {
        this.conflicter.force = true;
        file = file.substring(0, i) + '\n  ' + tag + file.substring(i);
        this.dest.write('index.html', file);
      }

    }.bind(this);

  }

});
