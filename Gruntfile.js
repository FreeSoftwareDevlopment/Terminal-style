module.exports = function(grunt) {

  grunt.initConfig({
    cssmin: {
		compress:{
            files: {'compressed.css':['styles/*.css']},
		},
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin']);

};
