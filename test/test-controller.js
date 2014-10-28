/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('spa-water:controller', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../controller'))
      .inDir(path.join(os.tmpdir(), './temp-test'), function(dir){
        fs.copySync(path.join(__dirname, '../templates/index.html'), dir)
      })
      .withArguments('name', '--force')
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'somefile.js'
    ]);
  });
});
