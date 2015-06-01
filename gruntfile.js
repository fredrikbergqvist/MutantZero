module.exports = function(grunt) {

    grunt.initConfig({
        "babel": {
            options: {
                sourceMap: true,
                    modules: "amd"
            },
            dist: {
                files: [{
                    "expand": true,
                    "cwd": "../MutantZero/",
                    "src": ["**/*.jsx"],
                    "dest": "dist/",
                    "ext": ".js"
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');

    // Task to run default
    grunt.registerTask('default', [
        'babel'
    ]);
};