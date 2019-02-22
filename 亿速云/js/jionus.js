window.onload=function(){
	// 百度地图API功能
		var map = new BMap.Map("allmap");    // 创建Map实例
		var point = new BMap.Point(113.333259, 23.124417); // 初始化地图,设置中心点坐标和地图级别
		map.centerAndZoom(point, 18);
		var marker = new BMap.Marker(point);  // 创建标注
		map.addOverlay(marker);              // 将标注添加到地图中
		var label = new BMap.Label("广州亿速云计算有限公司",{offset:new BMap.Size(20,-10)});
		marker.setLabel(label);
		//添加地图类型控件
		map.addControl(new BMap.MapTypeControl({
			mapTypes:[
	            BMAP_NORMAL_MAP,
	            BMAP_HYBRID_MAP
	        ]}));	  
			
			  // 添加带有定位的导航控件
	  var navigationControl = new BMap.NavigationControl({
	    // 靠左上角位置
	    anchor: BMAP_ANCHOR_TOP_LEFT,
	    // LARGE类型
	    type: BMAP_NAVIGATION_CONTROL_LARGE,
	    // 启用显示定位
	    enableGeolocation: true
	  });
	  map.addControl(navigationControl);
	  // 添加定位控件
	  var geolocationControl = new BMap.GeolocationControl();
	  geolocationControl.addEventListener("locationSuccess", function(e){
	    // 定位成功事件
	    var address = '';
	    address += e.addressComponent.province;
	    address += e.addressComponent.city;
	    address += e.addressComponent.district;
	    address += e.addressComponent.street;
	    address += e.addressComponent.streetNumber;
	    alert("当前定位地址为：" + address);
	  });
	  geolocationControl.addEventListener("locationError",function(e){
	    // 定位失败事件
	    alert(e.message);
	  });
	  map.addControl(geolocationControl);
			
		map.setCurrentCity("广州");          // 设置地图显示的城市 此项是必须设置的
		map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

	var oNav = document.getElementById('nav');
	var oA = oNav.getElementsByTagName("a")

	var divT = oNav.offsetTop;
	window.onscroll = function() {
		navTop();
	}

	function navTop() {
		// 获取当前页面的滚动条纵坐标位置 （依次为火狐谷歌、safari、IE678）
		var scrollT = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		console.log(scrollT)
		if (scrollT >= divT) {
			if (window.navigator.userAgent.indexOf('MSIE 6.0') != -1) {
				// 兼容IE6代码
				oNav.style.position = 'absolute';
				oNav.style.top = scrollT + 'px';
				oNav.style.left = 74.5 + 'px';
			} else {
				// 正常浏览器代码
				oNav.style.position = 'fixed';
				oNav.style.top = 0+'px';
				oNav.style.left =  74.5+'px';
			}
			if (scrollT > 0) {
				for (var i = 0; i < oA.length; i++) {
					oA[i].style.borderLeftColor = 'transparent';
					oA[i].style.color = '#555555'
				}
				oA[0].style.borderLeftColor = '#FF6666';
				oA[0].style.color = '#FF6666'
			}
			if (scrollT > divT + 618) {
				for (var i = 0; i < oA.length; i++) {
					oA[i].style.borderLeftColor = 'transparent';
					oA[i].style.color = '#555555'
				}
				oA[1].style.borderLeftColor = '#FF6666';
				oA[1].style.color = '#FF6666'
			}
			if(scrollT>divT+618+600){
				for(var i=0;i<oA.length;i++){
					oA[i].style.borderLeftColor='transparent';
					oA[i].style.color='#555555'
				}
				oA[2].style.borderLeftColor='#FF6666';
				oA[2].style.color='#FF6666'
			}
			if(scrollT>divT+618+600+700){
				for(var i=0;i<oA.length;i++){
					oA[i].style.borderLeftColor='transparent';
					oA[i].style.color='#555555'
				}
				oA[3].style.borderLeftColor='#FF6666';
				oA[3].style.color='#FF6666'
			}
			if(scrollT>divT+618+600+700+657){
				for(var i=0;i<oA.length;i++){
					oA[i].style.borderLeftColor='transparent';
					oA[i].style.color='#555555'
				}
				oA[4].style.borderLeftColor='#FF6666';
				oA[4].style.color='#FF6666'
			}
			if(scrollT>divT+618+600+700+657+600){
				for(var i=0;i<oA.length;i++){
					oA[i].style.borderLeftColor='transparent';
					oA[i].style.color='#555555'
				}
				oA[5].style.borderLeftColor='#FF6666';
				oA[5].style.color='#FF6666'
			}
		} else {
			oNav.style.position = 'absolute';
			oNav.style.top = 890 + "px";
			oNav.style.left = 74.5 + "px";
		}
	}
}