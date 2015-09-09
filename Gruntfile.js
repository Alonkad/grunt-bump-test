'use strict';

module.exports = function (grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

  // Project Configuration
  grunt.initConfig({
      bump: {
          options: {
              files: ['package.json'],
              updateConfigs: [],
              commit: true,
              commitMessage: 'Release v%VERSION%',
              commitFiles: ['package.json'],
              createTag: true,
              tagName: 'v%VERSION%',
              tagMessage: 'Version %VERSION%',
              push: true,
              pushTo: 'origin', //'upstream',
              gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
              globalReplace: false,
              prereleaseName: false,
              regExp: false
          }
      },
      changelog: {
          release: {
              options: {
                  version: 'next'
              }
          }
      }
  });


  //Default task(s).
  grunt.registerTask('release', [
      'bump-only:minor',
      'changelog',
      'bump-commit'
  ]);
};
