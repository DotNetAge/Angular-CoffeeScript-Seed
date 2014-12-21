// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-11-15 using
// generator-karma 0.8.3

module.exports = function (config) {
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        preprocessors: {
            '**/*.coffee': ['coffee','coverage']
            //,'**/*.tpl.html':['ng-html2js']
        },

        coffeePreprocessor: {
            // options passed to the coffee compiler
            options: {
                bare: true,
                sourceMap: true
            },
            // transforming the filenames
            transformPath: function (path) {
                return path.replace(/\.coffee$/, '.js');
            }
        },

        /*
         ngHtml2JsPreprocessor: {
         moduleName: 'df.ui.templates'
         },*/

        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        reporters: ['story'],

        // the default configuration
        junitReporter: {
            outputFile: 'test-results.xml',
            suite: ''
        },

        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },
        // list of files / patterns to load in the browser
        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-bootstrap/ui-bootstrap.js',
            'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-animate/angular-animate.js',
            'app/bower_components/angular-cookies/angular-cookies.js',
            'app/bower_components/angular-resource/angular-resource.js',
            'app/bower_components/angular-ui-router/release/angular-ui-router.js',
            'app/bower_components/angular-ui-select/dist/select.js',
            'app/bower_components/angular-ui-sortable/sortable.js',
            'app/bower_components/angular-sanitize/angular-sanitize.js',
            'app/bower_components/angular-touch/angular-touch.js',
            'app/bower_components/highlightjs/highlight.pack.js',
            'app/bower_components/jquery/dist/jquery.js',
            'app/bower_components/underscore/underscore.js',
            'app/bower_components/chance/chance.js',

            'app/scripts/**/*.coffee',
            'test/spec/**/{,*/}*.coffee',
            'test/mock/**/*.coffee'
        ],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 5002,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'Chrome'
        ],


        // Which plugins to enable
        plugins: [
            'karma-coffee-preprocessor',
            'karma-jasmine',
            'karma-requirejs',
            'karma-junit-reporter',
            'karma-story-reporter',
            'karma-coverage',
            'karma-chrome-launcher',
            //'karma-safari-launcher',
            //'karma-firefox-launcher',
            'karma-phantomjs-launcher'
        ],
        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO

        // Uncomment the following lines if you are using grunt's server to run the tests
        //proxies: {
        //  '/': 'http://localhost:9000/'
        // }
        // URL root prevent conflicts with the site root
        // urlRoot: '_karma_'
    });
};
