SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        // plugins
        'plugin-babel': './libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './libs/systemjs-plugin-babel/systemjs-babel-browser.js',
        
        // app files
        'main': './scripts/main.js',
        'templatesCompiler': './scripts/templates-compiler.js',
        'requester': './scripts/requester.js',
        'homeController': './controllers/home-controller.js',
        
        //libraries files
        'jquery': './libs/jquery.js',
        'navigo': './libs/navigo/lib/navigo.js',
        'handlebars': './libs/handlebars.js',
        'bootstrap': './libs/bootstrap/dist/js/bootstrap.js',
    }
});

System.import('main');