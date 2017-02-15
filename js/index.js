
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
