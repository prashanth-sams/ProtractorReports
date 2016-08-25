' use strict ';

module.exports = function(grunt) {

  grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      protractor: {
          // options: {
          //     configFile: "protractor-config.js",
          //     keepAlive: true, // If false, the grunt process stops when the test fails.
          //     noColor: false,
          //     args: {}
          //     // debug: true
          //   },
            e2e: {
              options: {
                configFile: "protractor-config.js",
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false,
                // files: ['app/js/**/*.js', 'test/e2e/*.js'],
                // tasks: ['protractor:continuous']
              }
            },
            debug: {
              options: {
                configFile: "protractor-config.js",
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false,
                debug: true,
                // debug: 5555
                // port: process.env.PORT || 5555
              }
            },
            // run: {}
      }
  });

  grunt.loadNpmTasks('grunt-protractor-runner');
  // grunt.registerTask( 'test', ['protractor:debug']);
  grunt.registerTask( 'test', ['protractor:e2e']);
};
