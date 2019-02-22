//轮播图
$(function() {
	var num = 0;

	function next() {
		aum = num;
		num++;
		$(".slides li").eq(aum).fadeOut(600)
		$(".slides li").eq(num).fadeIn(600)
		$(".slides-btn li a").removeClass("bg")
		$(".slides-btn li a").eq(num).addClass("bg")
		// console.log($(".firstBanner-pic"))
		if (num == 2) {
			num = -1;
		}
	}
	setInterval(next, 4000);

})
// 选项卡
$(function() {
	$(".product-item-title").click(function() {
		$(".product-item-title").find(".title-text").removeClass("bg1")
		$(this).find(".title-text").addClass("bg1")
		$(this).find(".title-img").css("backgroundPositionY", "-59px").parent().siblings().find(".title-img").css(
			"backgroundPositionY", "-133px")
		$(".bottom-line").animate({
			"left": 220 * ($(this).index())
		})
		console.log($(".bottom-line").css("left", "220*($(this).index())+px"))
		$(".product-kinds").hide().siblings().eq($(this).index()).show()
	})
})
// banner 底部
$(function() {
	var speed = 0;
	var timer;
	$(".banner-menu-list").click(function() {
		var _this = this
		timer = setInterval(function() {
			$(_this).find(".menu-list-left>div").css("backgroundPosition", "0px 0px")
			speed += 70;
			$(_this).find(".menu-list-left>div").css("backgroundPosition", "0px " + -speed + "px")
			if (speed == 2100) {
				speed = 0
				clearInterval(timer);
			}
		}, 30)
		// console.log(1)
	})
})
// 他们在使用亿速云
$(function() {
	var index1 = 0;
	var animateRunning = false;
	$(".swiper-slide .partner-des").clone(true).appendTo(".swiper-slide")
	var shu=2
	function swiperMove() {
		if (!animateRunning) {
			animateRunning = true;
			if (index1 < 10) {
				index1++
				$(".swiper-slide").animate({
						left: index1 * -240
					}, 300, function() {
						animateRunning = false;
					})
					
			} else {
				$(".swiper-slide").css("left", 0).animate({
					left: -240
				}, 300)
				index1 = 1;
				animateRunning = false;
				console.log($(".swiper-slide>div"))
			}
			shu++;
			if (shu>12) {
				shu=3
			}
			console.log(shu)
			$(".partner-des").eq(shu).siblings().find(".partner-company").css("color","#666578");
			$(".partner-des").eq(shu).find(".partner-company").css("color","#fff")
			$(".partner-des").eq(shu).siblings().find(".partner-name").css("color","#666578");
			$(".partner-des").eq(shu).find(".partner-name").css("color","#fff")
		}
		
	}
	var swiperTimer = setInterval(function() {
		swiperMove();
	},3500);

})
