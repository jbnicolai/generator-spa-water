angular
  .module('<%= appname %>')
  .service('Parse', function(SETTINGS){
    Parse.initialize(SETTINGS.PARSE_APP_ID, SETTINGS.PARSE_JAVASCRIPT_KEY);
    return Parse;
  });
