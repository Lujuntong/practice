// 手风琴效果
$(function(){
	$(".document-nav-list ul li").click(function(){
		$(".nav-list-title").find("span").removeClass("active")
		$(this).find(".nav-list-title").find("span").addClass("active")
		$(".document-nav-list ul li").find(".nav-list-name>ul>li>a").hide()
		$(this).find(".nav-list-name>ul>li>a").show().siblings().eq($(this).index()).hide()
	})
})