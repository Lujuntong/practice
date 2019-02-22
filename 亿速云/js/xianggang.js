window.onload = function() {
	var oDiv = document.getElementById('bBox');
	var oListf = document.getElementById('listf');
	var oListr = document.getElementById("listr");
	var oList = document.getElementById("bList");
	var oA = oList.getElementsByTagName("a")

	var divT = oDiv.offsetTop;
	//console.log(divT);
	window.onscroll = function() {
		navTop();
	}

	function navTop() {
		// 获取当前页面的滚动条纵坐标位置 （依次为火狐谷歌、safari、IE678）
		var scrollT = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		if (scrollT >= divT) {
			if (window.navigator.userAgent.indexOf('MSIE 6.0') != -1) {
				// 兼容IE6代码
				oDiv.style.position = 'absolute';
				oDiv.style.top = scrollT + 'px';
				oDiv.style.left = 0 + 'px';
			} else {
				// 正常浏览器代码
				oDiv.style.position = 'fixed';
				oDiv.style.top = 0;
				oDiv.style.left = 0;
				oDiv.style.background = "rgb(50, 58, 69)";
				oListf.style.display = "block";
				oListr.style.display = "block";
			}
			if (scrollT > 0) {
				for (var i = 0; i < oA.length; i++) {
					oA[i].style.borderBottomColor = 'transparent';
					oA[i].style.color = '#fff'
				}
				oA[0].style.borderBottomColor = '#FF6666';
				oA[0].style.color = '#FF6666'
			}
			if (scrollT > divT + 638.5) {
				for (var i = 0; i < oA.length; i++) {
					oA[i].style.borderBottomColor = 'transparent';
					oA[i].style.color = '#fff'
				}
				oA[1].style.borderBottomColor = '#FF6666';
				oA[1].style.color = '#FF6666'
			}
			if(scrollT>divT+638.5+756){
				for(var i=0;i<oA.length;i++){
					oA[i].style.borderBottomColor='transparent';
					oA[i].style.color='#fff'
				}
				oA[2].style.borderBottomColor='#FF6666';
				oA[2].style.color='#FF6666'
			}
			if(scrollT>divT+638.5+756+834){
				for(var i=0;i<oA.length;i++){
					oA[i].style.borderBottomColor='transparent';
					oA[i].style.color='#fff'
				}
				oA[3].style.borderBottomColor='#FF6666';
				oA[3].style.color='#FF6666'
			}
			if(scrollT>divT+638.5+756+834+908){
				for(var i=0;i<oA.length;i++){
					oA[i].style.borderBottomColor='transparent';
					oA[i].style.color='#fff'
				}
				oA[4].style.borderBottomColor='#FF6666';
				oA[4].style.color='#FF6666'
			}
		} else {
			oDiv.style.position = 'absolute';
			oDiv.style.top = 402 + "px";
			oDiv.style.left = 0 + "px";
			oDiv.style.background = "transparent"
			oListf.style.display = "none";
			oListr.style.display = "none";
		}
		console.log(scrollT)

	}
}

$(function() {
	var bool = true
	$(".monitor-select").click(function() {
		if (bool) {
			$(".chi-con").slideUp()
		} else {
			$(".chi-con").slideDown()
		}
		bool = !bool
	})
})

// 他们在使用亿速云
$(function() {
	$(".user-list").find("a").mouseover(function() {
		$(".user-list").find("a").removeClass()
		$(this).addClass("circle")
		// $(".user-bigbox").find(".user-box").hide()
		$(".user-bigbox").find(".user-box").eq($(this).index()).show().siblings().hide()
	})
})