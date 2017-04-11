angular.module('lotourApp').directive('scrollTop',function(){
	     return {	     	   
	     	    controller:function($scope,$element,$window){
                   var  top=$element[0].offsetTop  

                   var  window = angular.element($window);
                        
                    window.on('scroll',function(){
                   	    var scrollY=this.scrollY
                        if(scrollY>top){
                        	$element.css({'position':'fixed','top':"45px",'z-index':6,'background':'#fff'})
                        }else{
                        	$element.css({'position':'inherit'})
                        }                   
                   })
	     	    } 
	     }      
})