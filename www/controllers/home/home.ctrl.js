angular.module("QMSX").controller("homeCtrl",function($scope,$timeout,$ionicLoading,$http){
	var swiper=new Swiper(".banner",{
		pagination:".swiper-pagination",
		paginationClickable:true,
		autoplay: 2500
	})

	var swiper1 = new Swiper('.home-active', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1
        }
    });

    // 下拉刷新
    $scope.doRefresh=function(){
        $timeout(function() {
            $scope.$broadcast('scroll.refreshComplete');
        }, 1000);
    }

    // 加载刷新
    $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });
    $timeout(function () {
        $ionicLoading.hide();
        $scope.stooges = [{name: 'Moe'}, {name: 'Larry'}, {name: 'Curly'}];
    }, 2000);

    // 底部加载数据刷新
    $scope.loadMore = function() {
        $http.get('/more-items').success(function(items) {
            useItems(items);
            $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    };
    $scope.$on('stateChangeSuccess', function() {
        $scope.loadMore();
    });
    
})