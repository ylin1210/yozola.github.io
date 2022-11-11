
var curindex=0;
var imgtxt=["A","B","C","D"];
var imgpath=["lunbo1.png","lunbo2.png","lunbo3.png","lunbo4.png"];

function b(x){
	curindex=x;
	document.getElementById("a").src=imgpath[curindex];
	document.getElementById("txt").innerHTML=imgtxt[curindex];
}
function l(){
	curindex=(curindex+3)%4;
	b(curindex);
}
function r(){
	curindex=(curindex+1)%4;
	b(curindex);
}


/*$('.carousel').carousel()({
	interval: 2000
})*/
