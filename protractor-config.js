// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  // if we are using protractor's webdriver-manager locally, you cannot use selenium Address
  // If the webdriver-manager needs to start a local server, you can use
  // selenium: 'http://localhost:12345/wd/hub',
  // seleniumPort: 12345, // Port matches the port above

  // seleniumServerJar: 'node_modules/grunt-protractor-runner/node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',
  // chromeDriver: 'node_modules/grunt-protractor-runner/node_modules/protractor/selenium/chromedriver_2.21',
  // seleniumArgs: ['-Dwebdriver.ie.driver=./node_modules/gulp-protractor/node_modules/protractor/selenium/IEDriverServer.exe'],

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    // shardTestFiles: true,
    // maxInstances: 2
  },

  // multiCapabilities: [{
  //   'browserName': 'chrome',
  // },{
  //   'browserName': 'firefox',
  // }],


  // Spec patterns are relative to the current working directly when
  // protractor is called.
  // specs: ['tests/specs/*.js'],
  specs: ['tests/specs/sample.js'],

  framework: 'jasmine',

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 300000
  },

  onPrepare: function () {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64');
        }, 'image/png')();
        done();
      });
    });
  },

  allScriptsTimeout: 200000
};
