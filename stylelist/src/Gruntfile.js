module.exports = function(grunt) {

  grunt.initConfig({
    cssmin: {
		compress:{
            files: {'min.css':['css/*.css']},
		},
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin']);

};