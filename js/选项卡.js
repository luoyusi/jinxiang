// JavaScript Document
//---------------------------------------------------选项卡-------------------------------------------------------------------
function show(){
	var oUl=document.getElementsByClassName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var aItem=document.getElementsByClassName('cont-item');
	var i=0;
	var num=0;
	var timer=null;
	
		//function autoplay(){
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onclick=function(){
				//var self=this;
				for(var j=0;j<aLi.length;j++){
					aLi[j].className="";
					aItem[j].style.display="none";
				}
				this.className="ac";
				aItem[this.index].style.display="block";
				num=this.index;
			}
		} 

}
//---------------------------------------------------鼠标浮上去，图片向上移动-------------------------------------------------------------------
function run(){
	var pic=document.getElementsByClassName("pic");	
	var img=pic.children;	
	var p=pic.children;
	//alert(p.length)
	setTimeout(function(){
		for(var i=0;i<pic.length;i++){
			pic[i].onmouseover=function(){
				pic.style.top=pic.offsetTop-10+"px";
				p.style.display="block";
			}
			pic[i].onmouseout=function(){
				pic.style.top=pic.offsetTop+10+"px";
				p.style.display="none";
			}		
		}	
	},1000);
	
}