module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        emberTemplates: {
            compile: {
                options: {
                    templateBasePath: './webapp/templates/'
                },
                files: {
                    "./webapp/js/precompiled_templates.js": ["./webapp/templates/*.handlebars"],
                }
            }
        }
    });

    // Load the plugin for compiling ember templates
    grunt.loadNpmTasks('grunt-ember-templates');

    // Default task(s).
    grunt.registerTask('default', ['emberTemplates']);
};