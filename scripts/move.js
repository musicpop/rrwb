// JavaScript Document

<!--个人微博循环滚动-->
var movetop1=0;
var movetop2=100;
var movetop3=200;
var movetop4=300;
var movetop5=400;
function move(){
	//第一个图片的滚动
	var weibo1=document.getElementById("weibo1");
	movetop1++;
	if(movetop1>500){
		movetop1=0;
	}
	weibo1.style.top=movetop1+"px";
	//第二个图片的滚动
	var weibo2=document.getElementById("weibo2");
	movetop2++;
	if(movetop2>500){
		movetop2=0;
	}
	weibo2.style.top=movetop2+"px";
	//第三个图片的滚动
	var weibo3=document.getElementById("weibo3");
	movetop3++;
	if(movetop3>500){
		movetop3=0;
	}
	weibo3.style.top=movetop3+"px";
	//第四个图片的滚动
	var weibo4=document.getElementById("weibo4");
	movetop4++;
	if(movetop4>500){
		movetop4=0;
	}
	weibo4.style.top=movetop4+"px";
	//第五个图片的滚动
	var weibo5=document.getElementById("weibo5");
	movetop5++;
	if(movetop5>500){
		movetop5=0;
	}
	weibo5.style.top=movetop5+"px";
    setTimeout("move()",30);
}
//加载函数
window.onload=function(){
	//move();
}
