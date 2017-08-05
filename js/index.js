!(function() {
	$(window).scroll(function(event) {
		// console.log($('.banner').height())
		var banner_height = $('.banner').height();
		var scroll_height = $(window).scrollTop();
		if (scroll_height > banner_height) {
			$('nav').show()
		} else {
			$('nav').hide()
		}
	});
	// 回到头部
	$('.fix_block_r').on('click','.gotop',function(){
			var timer=null;
			timer=setInterval(function(){
				$(window).scrollTop(Math.floor($(window).scrollTop() * 0.8));
				// console.log($(window).scrollTop())
				if($(window).scrollTop()==0){
					clearInterval(timer)
					
				}
			},10)
	})
	$(window).scroll(function(event) {
		// if($(window).scrollTop()==0)
		$(window).scrollTop()==0?$('.fix_block_r').hide():$('.fix_block_r').show()
	});
})();

$('.banner').swipeUp(function(event) {
	alert()
});

