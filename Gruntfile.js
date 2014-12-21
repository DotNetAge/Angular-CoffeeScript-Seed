// Generated on 2014-11-29 using generator-chromeapp 0.2.14
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths
    var config = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist',
        tmp: '.tmp',
        tasks: grunt.cli.tasks
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['bowerInstall']
            },
            html2js: {
                files: ['<%= config.app %>/scripts/**/*.tpl.html'],
                tasks: ['newer:html2js:main']
            },
            coffee: {
                files: ['<%= config.app %>/scripts/{,*/}*.{coffee,litcoffee,coffee.md}'],
                tasks: ['newer:coffeelint:all', 'coffee:dist'],
                options: {
                    livereload: true
                }
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.{coffee,litcoffee,coffee.md}'],
                tasks: ['newer:coffeelint:test', 'karma:unit']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            less: {
                files: ['<%= config.app %>/styles/{,*/}*.less'],
                tasks: ['newer:less:server']
            },
            styles: {
                files: ['<%= config.app %>/styles/{,*/}*.css'],
                tasks: [],
                options: {
                    livereload: true
                }
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '.tmp/styles/{,*/}*.css',
                    '.tmp/scripts/{,*/}*.js',
                    '<%= config.app %>/**/*.html',
                    '<%= config.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // Grunt server and debug server settings
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost',
                open: true
            },
            server: {
                options: {
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use('/bower_components', connect.static('./bower_components')),
                            connect.static(config.app)
                        ];
                    }
                }
            },
            e2e: {
                options: {
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use('/bower_components', connect.static('./bower_components')),
                            connect.static(config.app)
                        ];
                    },
                    open: false
                }
            },
            test: {
                options: {
                    open: false,
                    base: [
                        'test',
                        '<%= config.app %>'
                    ]
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            server: '.tmp',
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            '<%= config.dist %>/*',
                            '!<%= config.dist %>/.git*'
                        ]
                    }
                ]
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            dist: [
                'Gruntfile.js',
                '<%= config.dist %>/scripts/{,*/}*.js'
            ],
            test: [
                'karma.conf.js',
                'protractor.conf.js',
                '.tmp/spec/{,*/}*.js'
            ]
        },


        html2js: {
            options: {
                base: 'app',
                target: 'coffee',
                module: 'df.ui.templates',
                singleModule: true,
                useStrict: true,
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                }
            },
            main: {
                src: ['<%= config.app %>/scripts/**/*.tpl.html'],
                dest: '<%= config.app %>/scripts/templates.coffee'
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },

        //E2E test
        protractor: {
            options: {
                keepAlive: true, // If false, the grunt process stops when the test fails.
                configFile: "protractor.conf.js"
            },
            all: {

            }
        },

        coffeelint: {
            options: {
                configFile: 'coffeelint.json'
            },
            all: ['<%= config.app %>/scripts/**/*.coffee'],
            test: {
                files: {
                    src: ['tests/**/*.coffee']
                }
            }
        },

        // Compiles CoffeeScript to JavaScript
        coffee: {
            options: {
                bare: false,
                sourceMap: true,
                sourceRoot: ''
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.app %>/scripts',
                        src: '{,*/}*.{coffee,litcoffee,coffee.md}',
                        dest: '.tmp/scripts',
                        ext: '.js'
                    },
                    {
                        src: '<%= config.app %>/scripts/main.coffee',
                        dest: '<%= config.app %>/scripts/main.js'
                    }
                ]
            },
            test: {
                files: [
                    {
                        expand: true,
                        cwd: 'test/spec',
                        src: '{,*/}*.coffee',
                        dest: '.tmp/spec',
                        ext: '.js'
                    },
                    {
                        expand: true,
                        cwd: 'test/e2e',
                        src: '{,*/}*.coffee',
                        dest: '.tmp/e2e',
                        ext: '.js'
                    }
                ]
            }
        },

        //Compiles Less to CSS
        less: {
            all: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        cwd: '<%= config.app %>/styles',
                        src: ['{,*/}*.less'],
                        dest: '.tmp/styles',
                        ext: '.css'
                    }
                ]
            },
            server: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        cwd: '<%= config.app %>/styles',
                        src: ['{,*/}*.less'],
                        dest: '.tmp/styles',
                        ext: '.css'
                    }
                ]
            }
        },

        // Automatically inject Bower components into the HTML file
        bowerInstall: {
            app: {
                src: ['<%= config.app %>/index.html'],
                ignorePath: '<%= config.app %>/'
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: [
                '<%= config.app %>/index.html'
            ]
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: [
                    '<%= config.dist %>',
                    '<%= config.dist %>/images'
                ]
            },
            html: ['<%= config.dist %>/{,*/}*.html'],
            css: ['<%= config.dist %>/styles/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.app %>/images',
                        src: '{,*/}*.{gif,jpeg,jpg,png}',
                        dest: '<%= config.dist %>/images'
                    }
                ]
            }
        },

        svgmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.app %>/images',
                        src: '{,*/}*.svg',
                        dest: '<%= config.dist %>/images'
                    }
                ]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    customAttrAssign: [/\?=/],
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.dist %>',
                        src: ['{,*/}*.html', 'views/{,*/}*.html', 'templates/{,*/}*.html'],
                        dest: '<%= config.dist %>'
                    }
                ]
            }
        },



        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '.tmp/concat/scripts',
                        src: ['*.js', '!oldieshim.js'],
                        dest: '.tmp/concat/scripts'
                    }
                ]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= config.app %>',
                        dest: '<%= config.dist %>',
                        src: [
                            '*.{ico,png,txt}',
                            'images/{,*/}*.{webp,gif}',
                            '{,*/}*.html',
                            'views/{,*/}*.html',
                            'templates/{,*/}*.html',
                            'fonts/{,*/}*.*'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '.tmp/images',
                        dest: '<%= config.dist %>/images',
                        src: ['generated/*']
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist',
                        src: 'fonts/*',
                        dest: '<%= config.dist %>'
                    }
                ]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= config.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                'html2js:main',
                'coffee:dist',
                'less:all',
                'copy:styles'
            ],

            dist: [
                'html2js:main',
                'coffee:dist',
                'less:all',
                'copy:styles',
                'imagemin',
                'svgmin'
            ],
            test: [
                'html2js:main',
                'coffee',
                'less:all',
                'copy:styles'
            ]
        },


        ngdocs: {
            options: {
                dest: 'docs',
                html5Mode: true,
                startPage: '/api',
                imageLink: "http://localhost:9000",
                titleLink: "/api",
                bestMatch: true
            },
            all: {
                title: 'API Documentation',
                src: ['.tmp/scripts/**/*.js']
            }

        }

    });

    grunt.registerTask('debug', function (platform) {
        var watch = grunt.config('watch');
        platform = platform || 'chrome';


        grunt.task.run([
            'build',
            'connect:' + platform,
            'watch'
        ]);
    });

    grunt.registerTask('test', function (_type_) {
        var _tasks = [];

        if (_type_ === 'e2e') {
            _tasks.push('connect:e2e');
            _tasks.push('protractor');
        }
        else {
            _tasks.push('connect:test');
            _tasks.push('karma');
            _tasks.push('watch');
        }
        grunt.task.run(_tasks);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'chromeManifest:dist',
        'useminPrepare',
        'concurrent:dist',
        'ngdocs',
        'concat',
        'ngAnnotate',
        'cssmin',
        'uglify',
        'copy',
        'usemin',
        'htmlmin',
        'compress'
    ]);

    grunt.registerTask('default', [
        'debug:server'
    ]);

};
