// Require.js allows us to configure shortcut alias
require.config({
	  paths: {
	    // Major libraries
	    jquery: "libs/jquery",
		json2: "libs/json2",
	    underscore: "libs/underscore", 
	    backbone: "libs/backbone",
	    backbone_layoutmanager: "libs/backbone.layoutmanager",
	    handlebars: "libs/handlebars"
	  },
	//Shims (enable libraries to be used by requireJS + handle dependencies)
	shim: {
		// handlebars: {
	 //      exports: "Handlebars"
	 //    },
	 //    underscore: {
		//       exports: "_"
		// },	    
	    backbone: {
	      deps: ["jquery", "underscore", "json2"],
	      exports: "Backbone"
	    },
	    backbone_layoutmanager: ["backbone"],
	    "layouts/main": ["backbone_layoutmanager"]
	}

});


// Let"s kick off the application

define([
	"jquery", 
	"underscore", 
	"backbone",
	"layouts/main",
	"backbone_layoutmanager"
	], 
function($, _, Backbone,appLayout){
	 Backbone.Layout.configure({
    	manage: true,
    });

	//$("#app-container").empty().append(appLayout.el);

	appLayout.$el.appendTo("#app-content");
	console.log(appLayout);
	appLayout.render();
	
	//Backbone.history.start();
	
	console.log("test 2");

});