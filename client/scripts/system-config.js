SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        // plugins
        'plugin-babel': './libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './libs/systemjs-plugin-babel/systemjs-babel-browser.js',
        
        // app
        'main': './scripts/main.js',
        'templatesCompiler': './scripts/templates-compiler.js',
        'requester': './scripts/requester.js',
        'db':'./scripts/db.js',
        'toastrConfig': './scripts/toastr-config.js',
        
        // models
        'userModel': './models/user-model.js',
        
        // controllers
        'blogController': './controllers/blog-controller.js',
        'homeController': './controllers/home-controller.js',
        'usersController': './controllers/users-controller.js',
        'galleryController': './controllers/gallery-controller.js',
        
        //libraries
        'jquery': './libs/jquery.js',
        'navigo': './libs/navigo/lib/navigo.js',
        'handlebars': './libs/handlebars.js',
        'bootstrap': './libs/bootstrap/dist/js/bootstrap.js',
        'toastr': './libs/toastr/build/toastr.min.js'
    }
});

System.import('main');