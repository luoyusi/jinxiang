// JavaScript Document
var tools={

//---------------------------------------------------------------------居中显示弹框----------------------------------------------------------------------
"popShow":function (elm){
	elm.style.display="block";
	var l=(document.documentElement.clientWidth-elm.offsetWidth)/2;
	var t=(document.documentElement.clientHeight-elm.offsetHeight)/2;
	elm.style.left=l+'px';
	elm.style.top=t+'px';
},


//---------------------------------------------------------------------------拖拽-------------------------------------------------------------------------
	//拖拽组建
"drag":function(box,title){
	//当我传入1个参数box，拖拽box
	//当我传入2个参数，拖拽就在title
	var handle;
	title?handle=title:handle=box;
	//----------------------------------------
	//点击事件 title
	handle.onmousedown=function(ev){//按下时机  记录下鼠标的错位位置
		var oEv=ev || window.event;
		var disX=oEv.clientX-box.offsetLeft;//left方向
		var disY=oEv.clientY-box.offsetTop;// top 方向
	
		//鼠标移动的对象应该是document
		document.onmousemove=function(ev){//移动拖拽
			var oEv=ev || window.event;
			var l=oEv.clientX-disX;
			var t=oEv.clientY-disY;
			
			//判断屏幕范围
			if(l<0)l=0;
			if(t<0)t=0;
			if(l>document.documentElement.clientWidth-box.offsetWidth)l=document.documentElement.clientWidth-box.offsetWidth;
			if(t>document.documentElement.clientHeight-box.offsetHeight)t=document.documentElement.clientHeight-box.offsetHeight;
			
			//最后赋值
			box.style.left=l+'px';
			box.style.top=t+'px';
		};
		
		//释放鼠标move事件
		document.onmouseup=function(){
			document.onmouseup=document.onmousemove=null;
			if(box.releaseCapture)	box.releaseCapture();//取消获捕
		}
		if(box.setCapture)	box.setCapture();//设置捕获
		return false;
	};
},

//---------------------------------------------------------获取样式-----------------------------------------------------------------------------
"getStyle":function(obj,name){
			var value=obj.currentStyle? obj.currentStyle[name] : getComputedStyle(obj,false)[name];
			//------------------------兼容问题：IE：-------------------
			if(name=='opacity'){            
				value=Math.round(parseInt(value)*100);
			}
			else{
				value=parseInt(value);
			}
			return value;
		},
//---------------------------------------------------------------------运动框架----------------------------------------------------------------------------------
"move":function(obj,moveMode,end,stopTime){
		clearInterval(obj.timer);
		var start=tools.getStyle(obj,moveMode);
		//console.log(getStyle(obj,moveMode));
		var distance=end-start;
		var count=parseInt(stopTime/30);
		var n=0;
		obj.timer=setInterval(function(){
			n++;
			var a=1-(n/count);
			var step_distance=start+distance*(1-a*a*a);      //每步要走的距离=distance*a（a代表一个系数） 
			if(moveMode=='opacity'){
				obj.style.opacity=step_distance/100;        
				obj.style.filter='alpha(opacity:'+step_distance+')';      //IE浏览器的
			}
			else{
				obj.style[moveMode]=step_distance+"px";
				//console.log(step_distance);
			}
			if(n==count){
				clearInterval(obj.timer);
			}
		},30);
		
	},
	
//--------------------------------------------------- -----------子菜单-----------------------------------------------------------------------------------
"menu":function (li,window){
		var aWind=document.getElementsByClassName('wimdow');     //获取所有的窗口
		var aLi=document.getElementsByTagName('li');       //获取所有的li
	
		var timer1="";
		var timer2="";
		var timer3="";
		
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i; 
			aWind[i].index=i;                     //颁发牌照，用于寻找对象
			aLi[i].onmouseover=function(){         //当鼠标移入li的时候，绑定时间
				clearTimeout(timer2);              //清除鼠标移出li时的延时效果
				clearTimeout(timer3);              //清除鼠标移出右边窗口时的延时效果
				var self=this;                      //留住this
				
				timer1=setTimeout(function(){        //当鼠标移入li是需要时间停留才能出现右边的窗口
					
					for(var j=0;j<aLi.length;j++){
						aLi[j].className="";          //清除鼠标移入li时的效果
						aWind[self.index].style.display="block";      //鼠标移入li时，右边的窗口需要隐藏
					}
					
					aWind[self.index].style.display="block";        //鼠标移入li时，需要右边的窗口显示
					
				},200)
				
			}	
			aLi[i].onmouseout=function(){                      //清除鼠标移出li时，绑定事件
				clearTimeout(timer1);                          //清除鼠标移入li时的延时效果
				timer2=setTimeout(function(){                   //当鼠标移出li时，需要时间来隐藏右边的窗口
				for(var j=0;j<aLi.length;j++){
					aWind[j].style.display="none";}              //当鼠标移出li时，经过300毫秒后隐藏窗口
				},200)
			}
			
			
			aWind[i].onmouseover=function(){                   //当鼠标移入窗口时，绑定事件
				clearTimeout(timer2);                          //清除鼠标移出li时的延时效果
				clearTimeout(timer3);                          //清除鼠标移出右边窗口时的延时效果
				//var self=this;
				aWind[this.index].style.display="block";      //窗口一直显示
				
			}
			aWind[i].onmouseout=function(){                      //当鼠标移出窗口时，绑定事件
				var self=this;                                //留住this
				timer3=setTimeout(function(){                 //当鼠标由窗口移到li里面的时候，让抖动消失
					aWind[self.index].style.display="none";    //当鼠标移出窗口后，窗口在300毫秒后消失
				},200)
			}
		
		}
	}

}