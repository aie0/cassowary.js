module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {            
            js: {
                src: [
                    'src/c.js',
                    'src/HashTable.js',
                    'src/HashSet.js',
                    'src/Error.js',
                    'src/SymbolicWeight.js',
                    'src/Strength.js',
                    'src/Variable.js',
                    'src/Point.js',
                    'src/Expression.js',
                    'src/Constraint.js',
                    'src/EditInfo.js',
                    'src/Tableau.js',
                    'src/SimplexSolver.js',
                    'src/Timer.js'
                ],
                dest: 'dist/cassowary-<%= pkg.version %>.js'
            }
        },
        uglify: {
            js: {
                files: {
                    'dist/cassowary-<%= pkg.version %>.min.js': ['dist/cassowary-<%= pkg.version %>.js']
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['concat:js', 'uglify:js']);
};