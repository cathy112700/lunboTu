//自运行的匿名函数
//(function(){
//	
//})()

(function($) {
	//本函数每次调用只负责一个轮播图的功能
	//也就是说只会产生一个轮播图，这个函数的作用域只能分配给一个轮播图
	//所以要求在调用本函数的时候务必把当前轮播图的跟根标签传递过来
	//这里的形参 ele 就是某个轮播图的跟标签
	var slide = function(ele) {
		//转化为 jquery 对象
		var $ele = $(ele);
		//默认设置选项
		var setting = {
			//控制扎开的时间
			delay:3000,
			//控制轮播速度  控制interval的速度
			speed:2000
		};
		
		//规定好每张图片处于的位置和状态
		var states = [{
			ZIndex: 1,
			width: 120,
			height: 150,
			top: 69,
			left: 134,
			Zopacity: 0.2
		}, {
			ZIndex: 2,
			width: 130,
			height: 170,
			top: 59,
			left: 0,
			Zopacity: 0.5
		}, {
			ZIndex: 3,
			width: 170,
			height: 218,
			top: 35,
			left: 110,
			Zopacity: 0.7
		}, {
			ZIndex: 4,
			width: 224,
			height: 288,
			top: 0,
			left: 263,
			Zopacity: 1
		}, {
			ZIndex: 3,
			width: 170,
			height: 218,
			top: 35,
			left: 470,
			Zopacity: 0.7
		}, {
			ZIndex: 2,
			width: 130,
			height: 170,
			top: 59,
			left: 620,
			Zopacity: 0.5
		}, {
			ZIndex: 1,
			width: 120,
			height: 150,
			top: 69,
			left: 500,
			Zopacity: 0.2
		}];

		var lis = $ele.find('li');

		function move() {
			lis.each(function(index, value) {
				var state = states[index];
				$(value).css('z-index', state.ZIndex).finish().animate(state, setting.delay).find('img').css('opacity', state.Zopacity);
			});
		}

		move();

		//点下一张轮播图发生偏移
		function next() {
			//原理：把数组最后一个元素移到数组第一位
			states.unshift(states.pop());
			move();
		}

		//上一张
		function prev() {
			//原理：把数组第一个元素移到数组最后一位
			states.push(states.shift());
			move();
		}

		//点击下一张
		$ele.find('.zy-next').click(function() {
			next();
		});

		//点击上一张 
		$ele.find('.zy-prev').click(function() {
			prev();
		});

		//自动轮播
		var intervar = null;

		function autoPlay() {
			intervar = setInterval(function() {
				next();
			}, setting.speed);
		}

		autoPlay();

		//停止轮播
		$ele.find('section').add(lis).hover(function() {
			clearInterval(intervar);
		}, function() {
			autoPlay();
		});
	}

	//找到要轮播图的跟标签 ，调用slide方法
	$.fn.zySlide = function(){
		$(this).each(function(i,ele){
			slide(ele);
		})
	}
	

})(jQuery)


/*
 * 用jQuery封装插件的几种写法：
 * 插件类写法：
 * $.fn.customFun = function(){
 * 	//自定义插件的代码
 * }
 * 用法：
 * $('secletor').customFun()
 * 
 * 
 * 
 * 工具类写法：
 * $.customFun = function(){
 * 	//自定义工具类代码
 * }
 * 用法：
 * $.customFun()
 */