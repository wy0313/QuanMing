angular.module("QMSX").config(function($stateProvider,$urlRouterProvider){
	
	$urlRouterProvider.when("", "/home");

	$stateProvider
	.state("home",{
		url:"/home",
		templateUrl:"./controllers/home/home.html",
		controller:"homeCtrl"
	})
	.state("juben",{
		url:"/juben",
		templateUrl:"./controllers/juben/juben.html",
		controller:"jubenCtrl"
	})
	.state("qiang",{
		url:"/qiang",
		templateUrl:"./controllers/qiang/qiang.html",
		controller:"qiangCtrl"
	})
	.state("mine",{
		url:"/mine",
		templateUrl:"./controllers/mine/mine.html",
		controller:"mineCtrl"
	})
})