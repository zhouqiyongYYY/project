jQuery(function(){
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal', // 垂直切换选项
	    autoplay:true,
	    loop:true,
	     // 循环模式选项	    
	     // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',      
	    },
	    pagination: {
	      el: '.swiper-pagination',
	    },
	})
})