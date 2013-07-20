// Require.js allows us to configure shortcut alias
require.config({
	  paths: {
	    // Major libraries
		zepto: "libs/zepto",
		json2: "libs/json2",
	    underscore: "libs/underscore", // https://github.com/amdjs
	    backbone: "libs/backbone", // https://github.com/amdjs
	    backbone_layoutmanager: "libs/backbone/backbone.layoutmanager",
	    handlebars: "libs/handlebars"
	  },
	//Shims (enable libraries to be used by requireJS + handle dependencies)
	shim: {
		handlebars: {
	      exports: "Handlebars"
	    },
	    underscore: {
		      exports: "_"
		},	    
	    backbone: {
	      deps: ["underscore", "zepto"],
	      exports: "Backbone"
	    },
	    "backbone_layoutmanager": ["backbone"]
	}

});


// Let"s kick off the application

define([
	"zepto", 
	"underscore", 
	"backbone", 
	"json2"
	], 
function($, _, Backbone){
	
	Backbone.history.start();
	
	console.log("test 2");

});