module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        requirejs: {
            compile: {
                options: {
                    baseUrl: "js",
                    mainConfigFile: "src/js/main.js",
                    name: "main",
                    optimize: "none",
                    //out: "main-built.js",
                    appDir: "src",
                    dir: "build",
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task(s).
    grunt.registerTask('default', ['requirejs']);

};