require.config({
	baseUrl:"../script/",
	paths:{
		"jquery":"../libs/jQuery/jquery.min.js"
	},
	shim:{
		jquery: {
		            exports: "jQuery"
		        }
	}
})；

require(['main'])