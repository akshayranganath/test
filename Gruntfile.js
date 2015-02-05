module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {      
      target: {
      files: {'css/style.min.js' : ['css/style.css']
      }
    	}
    },
    htmlmin: {                                     
    dist: {                                      
      options: {                                 
        removeComments: true,
        collapseWhitespace: true
      },
      files: {  'profile_page.min.html': 'profile_page.html'}
  	}
  }
  });
  
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin','htmlmin']);

};

