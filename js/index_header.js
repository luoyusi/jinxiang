/**
 * Created by hxsd on 2016/7/18.
 */
function header(){
    aLi=document.getElementsByClassName('header-right')[0].getElementsByTagName('ul')[0].children;
    search=document.getElementsByClassName('header-search')[0];
    aNav=document.getElementById('logo');
    nav_a=aNav.getElementsByTagName('a');
   /* phonenav=document.getElementById('phonenav');*/

    aLi[0].onclick=function(){
        document.getElementById('search_btn').className="ac";
        search.style.width="190px";
        search.parentNode.style.width="190px";
        for(var i=1;i<nav_a.length;i++){
            nav_a[i].style.marginRight="5px";
        }
        search.getElementsByTagName('input')[0].onblur=function(){
            search.style.width="0px";
            search.parentNode.style.width="54px";
            for(var i=1;i<nav_a.length;i++){
                nav_a[i].style.marginRight="32px";

            }
            setTimeout(function(){
                document.getElementById('search_btn').className="";
            },980);


        }
    }
    //------------------滚动---------------
    window.onscroll=function(ev){
        var t=document.documentElement.scrollTop||document.body.scrollTop;
        if(t>250) document.getElementsByClassName('header')[0].style.opacity="1";
        else document.getElementsByClassName('header')[0].style.opacity="0.5"
    }
    //-----------------点击手机子菜单--------------
    var sub_toggle=0;
 /* phonenav.onclick=function(){
        if(sub_toggle==0){
            phonenav.children[0].style.color="#40dba2";
            document.getElementsByClassName('subnav')[0].className='ashow subnav';
            sub_toggle=1;
        }else{
            phonenav.children[0].style.color="#fff";
            document.getElementsByClassName('subnav')[0].className='subnav';
            sub_toggle=0;
        }

    }*/
}