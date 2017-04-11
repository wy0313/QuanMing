angular.module("QMSX").directive("footDirective",function(){
	return{
		templateUrl:"./components/footer/footer.html",
		restrict:"E",
		replace:true,
		controller:function($scope){

		}
	}
})