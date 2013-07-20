({
    //appDir: "./app",
    baseUrl: "./app",
    dir: "./app-build",
    // paths: {
    //     zepto: "libs/zepto",
    //     backbone: "libs/backbone",
	   //  backbone_layoutmanager: 'libs/backbone.layoutmanager',
    //     underscore: "libs/underscore",
	   //  handlebars: 'libs/handlebars'
    // },
    removeCombined: true,
    findNestedDependencies: true,
    mainConfigFile: './app/app.js',    
    modules: [
        {
            name: "app"
        }
    ]
})