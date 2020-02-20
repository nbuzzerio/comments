grunt.initConfig({


  aws: grunt.file.readJSON( 'aws-keys.json' ),

  aws_s3: {
      options: {
          accessKeyId: '<%= aws.AWSAccessKeyId %>',
          secretAccessKey: '<%= aws.AWSSecretKey %>'
      },
      dist: {
          options: {
            bucket: 'fec-soundcloud-comments'
          },
          files: [
            {
                expand: true,
                cwd: 'client/dist/',
                src: [ '**' ],
                dest: '/'
            }
        ]
      }
  }


});

grunt.loadNpmTasks('grunt-aws-s3')
grunt.registerTask( 'deploy', 'aws_s3:dist' );