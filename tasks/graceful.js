/*
 * grunt-graceful
 * https://github.com/antiBaconMachine/grunt-graceful
 *
 * Copyright (c) 2014 Ollie Edwards
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerTask('graceful', 'Gracefully fail a grunt task', function(task) {
      try {
          grunt.task.run(task);
      } catch (e) {
          grunt.log.writeln('Gracefully failing: ', e);
      }
  });

};
