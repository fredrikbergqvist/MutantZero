module.exports = function(grunt) {

    grunt.initConfig({
        "browserify": {
            dist: {options: {
                transform: [["babelify", { "stage": 0 }]]
            },
                files: {
                    //"diceBundle.js": "UtilityTools/DiceGenerator.js"
                    "monsterGeneratorBundle.js": "MonsterGenerator/GenerateMonster.js"
                    //".tmp/bundle.js": ".tmp/babel/**/*.js"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');

    // Task to run default
    grunt.registerTask('default', [
        'browserify'
    ]);
};