module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Reactify
    reactify: {
      'app': 'source/components/main.jsx'
    },
    // Copy Configuration
    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['source/img/*'], dest: 'app/img/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['source/*.html'], dest: 'app/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['source/vendor/js/*'], dest: 'app/vendor/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['source/vendor/css/*'], dest: 'app/vendor/css/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['source/vendor/fonts/*'], dest: 'app/vendor/fonts/', filter: 'isFile'},
          //{expand: true, flatten: true, src: ['source/css/font-awesome/css/*.css'], dest: 'app/css/font-awesome/css/', filter: 'isFile'},
          //{expand: true, flatten: true, src: ['source/css/font-awesome/fonts/*'], dest: 'app/css/font-awesome/fonts/', filter: 'isFile'}
        ]
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-reactify')
  grunt.loadNpmTasks('grunt-contrib-copy')

  // Default task(s).
  grunt.registerTask('default', ['copy', 'reactify'])

}