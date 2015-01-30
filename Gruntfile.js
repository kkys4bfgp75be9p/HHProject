// Generated on 2014-10-15 using generator-bootstrap-less 3.2.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load npm plugins to provide necessary tasks
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-shell');

  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // show elapsed time at the end
  require('time-grunt')(grunt);

  // configurable paths
  var yeomanConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      coffee: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
        tasks: ['coffee']
      },
      less: {
        files: [
          // '<%= yeoman.app %>/styles/{,*/}*.less',
          '<%= yeoman.app %>/styles/**/*.less'
        ],
        tasks: ['less']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          // '<%= yeoman.app %>/*.html',
          // '<%= yeoman.app %>/html/**/*.html',
          '<%= yeoman.app %>/templates/{,*/}*.hbs',
          '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
          '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        tasks: ['assemble:pages']
      },
      assemble: {
        files: [
          '<%= yeoman.app %>/templates/layouts/*.hbs',
          '<%= yeoman.app %>/templates/pages/*.hbs',
          '<%= yeoman.app %>/templates/partials/*.hbs'
        ],
        tasks: ['assemble:server']
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>',
          livereload: false
        }
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js',
        '!<%= yeoman.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },

    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://localhost:<%= connect.test.options.port %>/index.html']
        }
      }
    },

    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/scripts',
          src: '{,*/}*.coffee',
          dest: '<%= yeoman.app %>/scripts',
          ext: '.js'
        }]
      }
    },

    less: {
      dist: {
        files: {
          '<%= yeoman.app %>/styles/main.css': ['<%= yeoman.app %>/styles/main.less']
        },
        options: {
          sourceMap: true,
          sourceMapFilename: '<%= yeoman.app %>/styles/main.css.map',
          sourceMapBasepath: '<%= yeoman.app %>/',
          sourceMapRootpath: '/'
        }
      }
    },

    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dist: {}
    },*/

    // not enabled since usemin task does concat and uglify
    // check index.html to edit your build targets
    // enable this task if you prefer defining your build targets here
    /*uglify: {
      dist: {}
    },*/

    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= yeoman.dist %>/fonts/{,*/}*.*',
            '<%= yeoman.dist %>/html/{,*/}*.html'
          ]
        }
      }
    },

    // https://github.com/Hypercubed/assemble-bootstrap-template/blob/master/Gruntfile.js
    // https://gist.github.com/ErikEvenson/717dc4f77df9d0ba457b
    assemble: {
      options: {
        flatten: true,
        layoutdir: '<%= yeoman.app %>/templates/layouts',
        partials: ['<%= yeoman.app %>/templates/partials/*.hbs'],
        data: '<%= yeoman.app %>/data/*.json'
      },
      pages: {
        options: {
          layout: 'default-layout.hbs',
          partials: ['<%= yeoman.app %>/templates/partials/*.hbs']
        },
        files: {
          // '<%= yeoman.dist %>/' : ['<%= yeoman.app %>/templates/pages/*.hbs']
          '.tmp/': ['<%= yeoman.app %>/templates/pages/*.hbs']
        }
      },
      server: {
        files: {
          '.tmp/': ['<%= yeoman.app %>/templates/pages/*.hbs']
        }
      }
    },

    useminPrepare: {
      html: '.tmp/index.html',
      options: {
        root: '<%= yeoman.app %>',
        dest: '<%= yeoman.dist %>'
      }
    },

    // https://github.com/yeoman/grunt-usemin
    usemin: {
      options: {
        dirs: ['<%= yeoman.dist %>']
      },
      html: [
        // '<%= yeoman.dist %>/{,*/}*.html',
        '.tmp/{,*/}*.html'
      ],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    // https://github.com/gruntjs/grunt-contrib-cssmin
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/styles/main.css': [
            '.tmp/styles/{,*/}*.css',
            '<%= yeoman.app %>/styles/{,*/}*.css'
          ]
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: '*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // https://github.com/gruntjs/grunt-contrib-copy
    copy: {
      dist: {
        files: [
          {
            expand: true,
            // http://gruntjs.com/configuring-tasks#files
            dot: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.dist %>',
            src: [
              // '*.{ico,png,txt}',
              '*.{ico,png}',
              'fonts/{,*/}*.*',
              // '.htaccess',
              'images/{,*/}*.{webp,gif}',
              // '{,*/}*.html'
            ]
          },
          // Copy generated files from tmp-directory to dist folder!
          {
            expand: true,
            dot: true,
            cwd: '.tmp/',
            dest: '<%= yeoman.dist %>',
            src: [
              '{,*/}*.html'
            ]
          },
        ]
      },
      server: {

      }
    },

    compress: {
      main: {
        options: {
          archive: 'dist.zip',
          mode: 'zip'
        },
        expand: true,
        cwd: 'dist/',
        src: ['**/*'],
        dest: '<%= yeoman.app %>/deliverables/'
      }
    },

    shell: {
      options: {
        stderr: false
      },
      target: {
        // Get the latest Git tag
        command: 'git describe --abbrev=0 --tags'
      }
    },

    concurrent: {
      dist: [
        'coffee',
        'less',
        'imagemin',
        'svgmin'
        // 'htmlmin'
      ]
    }

  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'assemble',
      'coffee',
      'less',
      'copy',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('test', [
    'clean:server',
    'coffee',
    'less',
    // 'copy:server',
    'connect:test',
    // 'mocha'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'assemble',
    'useminPrepare',
    'concurrent:dist',
    'cssmin',
    'concat',
    'uglify',
    // 'rev',
    'usemin',
    'copy',
  ]);

  grunt.registerTask('zipit', [
    'build',
    'compress'
  ]);

  grunt.registerTask('shellit', [
    'shell',
    'compress'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
