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
                    "dest": ".tmp/babel/",
                    "ext": ".js"
                }]
            }
        },

        "browserify": {
            dist: {
                files: {
                    ".tmp/browserify/GenerateMonster.js": ".tmp/babel/MonsterGenerator/GenerateMonster.jsx"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');

    // Task to run default
    grunt.registerTask('default', [
        'babel', 'browserify'
    ]);
};