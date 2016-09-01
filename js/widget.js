// JavaScript Document
//--------------------------------------------------- -----------子菜单-----------------------------------------------------------------------------------

var widget={
	
//-------------------------------------------------------------------------------modal模态组件-------------------------------------------------------------------
"modal_layer":function (){
	var modal=document.createElement('div');
	modal.id="black_modal";
	modal.className="modal";
	document.body.appendChild(modal);
},


//-------------------------------------------------------------------------错误提示组件------------------------------------------------------------------------------
"popBox_error":function (text,delayTime){
	var t=delayTime || 2000;
	var errDiv=document.createElement('div');
	var timer=null;
	errDiv.className="popBox_error";
	errDiv.innerHTML=text;
	document.body.appendChild(errDiv);
	tools.popShow(errDiv);
	
	function delay_del(){
		document.body.removeChild(errDiv);	
	};
	timer=setTimeout(function(){
		delay_del();
	},t);
	errDiv.onmouseover=function(){
		clearTimeout(timer);
	};
	errDiv.onmouseout=function(){
		delay_del()
	}
},

//----------------------------------------------------------------------登录框---------------------------------------------------------------------
"logon_box":function (){
	//创建模态层
	widget.modal_layer();
	var modal=document.getElementById('black_modal');
	
	//创建弹框
	var oDiv=document.createElement('div');
	oDiv.id="logon_box";
	oDiv.className="popBox popBox_logon";
	
	var html='<h4>用户登录</h4>'+
	'<a id="closeBtn" href="javascript:;">×</a>'+
	'<p><label>用户名：<input type="text"></label></p>'+
	'<p><label>密　码：<input type="password"></label></p>'+
	'<p><button class="logonBtn" type="button">登录</button></p>';
	
	//oDiv内部插入其他元素
	oDiv.innerHTML=html;
	
	document.body.appendChild(oDiv);//插入到页面
	
	var closeBtn=document.getElementById('closeBtn');
	var title=oDiv.getElementsByTagName('h4')[0];
	var input=document.getElementsByTagName('input');
	
	input[0].onmousedown=function(ev){//输入框阻止冒泡，可以输入文字
		var oEv=ev ||window.event;
		oEv.cancelBubble=true;
	};
	input[1].onmousedown=function(ev){//输入框阻止冒泡，可以输入文字
		var oEv=ev ||window.event;
		oEv.cancelBubble=true;
	}
	
	modal.style.display="block";//显示模态层
	
	tools.popShow(oDiv);//居中显示
	tools.drag(oDiv,title);//可以拖拽
	
	//关闭弹框
	closeBtn.onclick=function(){
		document.body.removeChild(modal);
		document.body.removeChild(oDiv);
	};
},

//-------------------------------------------------------------轮播图-------------------------------------------------------------------------------
"slide":function(id,showNum){
	var sld=document.getElementById(id);
	var ol=sld.getElementsByTagName('ol')[0];
	var oUl=sld.getElementsByTagName('ul')[0];
	var aLi=oUl.children;
	
	var prevBtn=sld.children[0];
	var nextBtn=sld.children[1];
	
	//ol插li
	for(var i=0; i<aLi.length; i++){
		var li=document.createElement('li');
		li.innerHTML=i+1;
		if(showNum) li.innerHTML=i+1;
		if(i==0) li.className="ac";
		ol.appendChild(li);
	};
	
	var numBtn=ol.children;
	
	
	var show_num=0;//当前图片的索引
	
	
	//点击数字按钮 滚动图片
	//数字按钮切换
	var li_w=tools.getStyle(aLi[0], 'width')//取li的宽度
	
	oUl.style.width=li_w*aLi.length+'px';
	
	
	for(var i=0; i<numBtn.length; i++){
		numBtn[i].index=i;//发牌照
		
		numBtn[i].onclick=function(){
			for(var j=0; j<numBtn.length; j++){
				numBtn[j].className='';
			};
			this.className='ac';
			
			show_num=this.index;
			
			//图片移动
			tools.move(oUl,'left',-li_w*show_num,500)
		}
	};
	
	//左右按钮滚动图片
	//左滚
	prevBtn.onclick=function(){
		show_num--;
		if(show_num>=aLi.length-1) show_num=aLi.length-1;
		tools.move(oUl,'left',-li_w*show_num,500)
		if(show_num<=0) show_num=0;
		tools.move(oUl,'left',-li_w*show_num,500)
		
		for(var j=0; j<numBtn.length; j++){
			numBtn[j].className='';
		};
		
		numBtn[show_num].className='ac';
	};
	nextBtn.onclick=function(){
		show_num++;
		if(show_num<=0) show_num=0;
		tools.move(oUl,'left',-li_w*show_num,500)
		
		if(show_num>=aLi.length-1) show_num=aLi.length-1;
		tools.move(oUl,'left',-li_w*show_num,500)
		for(var j=0; j<numBtn.length; j++){
			numBtn[j].className='';
		};
		console.log(show_num);
		console.log(numBtn[show_num]);
		numBtn[show_num].className='ac';
		console.log(numBtn[show_num]);
	}
}



}






