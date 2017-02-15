
//首先
//function slide(){
//	//轮播图代码
//	var states = [
//	{ZIndex:1,width:120,height:150,top:69,left:134,Zopacity:0.2},
//	{ZIndex:2,width:130,height:170,top:59,left:0,Zopacity:0.5},
//	{ZIndex:3,width:170,height:218,top:35,left:110,Zopacity:0.7},
//	{ZIndex:4,width:224,height:288,top:0,left:263,Zopacity:1},
//	{ZIndex:3,width:170,height:218,top:35,left:470,Zopacity:0.7},
//	{ZIndex:2,width:130,height:170,top:59,left:620,Zopacity:0.5},
//	{ZIndex:1,width:120,height:150,top:69,left:500,Zopacity:0.2}
//];
//
//var lis = $('#box li');
//
//function move(){
//	lis.each(function(index,ele){
//		var state = states[index];
//		$(ele).css('z-index',state.ZIndex).finish().animate(state,1000).find('img').css('opacity',state.Zopacity);
//	});
//}
//
//move();
//
//
////点下一张轮播图发生偏移
//function next(){
//	//原理：把数组最后一个元素移到数组第一位
//	states.unshift(states.pop());
//	move();
//}
//
////上一张
//function prev(){
//	//原理：把数组第一个元素移到数组最后一位
//	states.push(states.shift());
//	move();
//}
//
//
////点击下一张
//$('#box .next').click(function(){
//	next();
//});
//
////点击上一张 
//$('#box .prev').click(function(){
//	prev();
//});
//
////自动轮播
//var intervar = null;
//function autoPlay(){
//	intervar = setInterval(function(){
//		next();
//	},2000);
//}
//
//autoPlay();
//
////停止轮播
//$('#box li').add('#box section').hover(function(){
//	clearInterval(intervar);
//},function(){
//	autoPlay();
//});
//}
//使用全局变量 slide
//slide();

//function a(){
//	console.log(123);
//}
//a();
/*
 * 变量的作用域问题
 * 1：全局域[window]：从页面被打开之后到页面被关闭之前始终存在的。
 * 2：函数域（function域）：存在于函数调用的一瞬间（也不一定，要考虑闭包的存在）。
 * 3：block域
 * 
 * 闭包的理解
 * 闭包的作用：可以保留函数的作用域（要不然闭包里的函数 move 就不能使用 slide 函数域里面的变量：states，lis 等）
 * 闭包产生的必要条件：函数里面套函数（内层函数要使用外层函数里面的变量）
 * 
 * 全局变量会产生闭包吗？
 * 不会。因为全局变量存在全局域里 
 */

//自运行的匿名函数
//(function(){
//	
//})()




/*
 * 想一想，我们的轮播图能封装成插件吗？会产生什么问题
 * 1，插件中最好不要使用 id .原因：插件是能够被重复使用的，也就是说在同一个页面中可能会多次使用这个插件造成冲突
 * 2，变量的命名和方法的命名有可能和自己写的js文件的命名冲突
 * 3，标签 class 的值的问题：prev，next 这些 class 太大众化了 势必起冲突
 * 4，插件文件名命名问题：index.js  index.css 命名大众化  比如这样修改：jQuery.ZYSlide.js
 * 
 */
(function(){
//轮播图代码
	var states = [
	{ZIndex:1,width:120,height:150,top:69,left:134,Zopacity:0.2},
	{ZIndex:2,width:130,height:170,top:59,left:0,Zopacity:0.5},
	{ZIndex:3,width:170,height:218,top:35,left:110,Zopacity:0.7},
	{ZIndex:4,width:224,height:288,top:0,left:263,Zopacity:1},
	{ZIndex:3,width:170,height:218,top:35,left:470,Zopacity:0.7},
	{ZIndex:2,width:130,height:170,top:59,left:620,Zopacity:0.5},
	{ZIndex:1,width:120,height:150,top:69,left:500,Zopacity:0.2}
];

var lis = $('#box li');

function move(){
	lis.each(function(index,ele){
		var state = states[index];
		$(ele).css('z-index',state.ZIndex).finish().animate(state,1000).find('img').css('opacity',state.Zopacity);
	});
}

move();


//点下一张轮播图发生偏移
function next(){
	//原理：把数组最后一个元素移到数组第一位
	states.unshift(states.pop());
	move();
}

//上一张
function prev(){
	//原理：把数组第一个元素移到数组最后一位
	states.push(states.shift());
	move();
}


//点击下一张
$('#box .next').click(function(){
	next();
});

//点击上一张 
$('#box .prev').click(function(){
	prev();
});

//自动轮播
var intervar = null;
function autoPlay(){
	intervar = setInterval(function(){
		next();
	},2000);
}

autoPlay();

//停止轮播
$('#box li').add('#box section').hover(function(){
	clearInterval(intervar);
},function(){
	autoPlay();
});
})()