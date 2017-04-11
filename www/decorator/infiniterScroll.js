angular.module("lotourApp").directive("infiniterScroll",function(){
	return{
		scope:{
			infiniterLoad :"&",
			infiniterFlg:"="
		},
		controller:function($scope,$window){
			var content=angular.element($window);

			function getScroll(scroll){
				var bodyHeight=document.body.offsetHeight,
					winHeight=window.innerHeight,
					ifBottom=false;
					
					// console.log(bodyHeight)

				if(bodyHeight-scrollY<=winHeight+50){
					ifBottom=true;
				}else{
					ifBottom=false;
				}

				return ifBottom;
			}

			content.on("scroll",function(){
				// console.log("Y")
				
				if(!$scope.infiniterFlg) return false;

				if(getScroll(this.scrollY)){
					$scope.infiniterLoad();
				}
			})
		}
	}
})