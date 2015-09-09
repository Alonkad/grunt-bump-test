'use strict';

module.exports = function (grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    var getVersionFromPackageJSON = function () {
        var pJson = grunt.file.readJSON('package.json');
        return pJson.version;
    };


    // Project Configuration
    grunt.initConfig({
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['-a'],
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
                    version: getVersionFromPackageJSON()
                }
            }
        }
    });


    //Default task(s).
    grunt.registerTask('release', [
        'bump-only:patch',
        'changelog',
        'bump-commit'
    ]);
};
