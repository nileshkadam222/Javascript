module.exports = function(grunt){
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'dist/output.min.js': ['project/js/file1.js', 'project/js/file2.js']
        }
      }
    },
    javascript_obfuscator: {
      options: {
        debugProtection: true,
        debugProtectionInterval: true
      },
      main: {
        files: {
          'dist/obfuscated.js': ['dist/output.min.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-javascript-obfuscator');
  
    //grunt.loadNpmTasks('grunt-contrib-concat');
}