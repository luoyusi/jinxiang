// JavaScript Document

function menu(id){
	var aWind=document.getElementsByClassName('windows');     //获取所有的窗口
	var oUl=document.getElementById(id);
	//console.log(oUl);
	var aLi=oUl.children;       //获取所有的li
	//console.log(aLi.length); 
	//console.log(aWind.length); 
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