/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 555,
            suffix: "_medium",
            quality: 80
          }, {
            width: 1110,
            suffix: "_large_2x",
            quality: 30
          }]
        },


        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },

    // webp: {
    //   files: {
    //     expand: true,
    //     cwd: '.',
    //     src: 'images_src/*.{gif,jpg,png}',
    //     dest: 'images/webp/'
    //   },
    //   options: {
    //     binpath: require('webp-bin').path,
    //     preset: 'photo',
    //     verbose: true,
    //     quality: 50,
    //     alphaQuality: 80,
    //     compressionMethod: 3,
    //     segments: 4,
    //     psnr: 42,
    //     sns: 50,
    //     filterStrength: 40,
    //     filterSharpness: 3,
    //     simpleFilter: true,
    //     partitionLimit: 50,
    //     analysisPass: 6,
    //     multiThreading: true,
    //     lowMemory: false,
    //     alphaMethod: 0,
    //     alphaFilter: 'best',
    //     alphaCleanup: true,
    //     noAlpha: false,
    //     lossless: false
    //   }
    // }

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  // grunt.loadNpmTasks('grunt-webp');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
