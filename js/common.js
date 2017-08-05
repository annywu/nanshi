
    /* JS动态媒体查询设置根字号 */
    ;(function(n) {
        var e = n.document , t = e.documentElement , 
            i = 640 ,                   // 设计稿大小
            d = i / 50 ,                // 根字号比例      750/50=15
            o = "orientationchange" in n ? "orientationchange" : "resize", 
            a = function() {
            var n = t.clientWidth || 320; 
            n > 640 && (n = 640),       // 设计稿大小
            t.style.fontSize = n / d + "px"
        };
        e.addEventListener && (n.addEventListener(o, a, !1),
        e.addEventListener("DOMContentLoaded", a, !1))
    })(window);

    // ;(function(window,document){
    //     //获取html
    //     var oHtml=document.getElementsByTagName('html')[0];
    //     //getBoundingClientRect返回一个对象,取当前设备的屏幕大小
    //     var width=oHtml.getBoundingClientRect().width;
    //     //限制最大宽度
    //     if(width>640){
    //         width=640;
    //         //将页面分割成16份,设置html的根字号大小
    //     }
    //     oHtml.style.fontSize=width/16+'px';
    // })(window,document)

    function setCookie(name,value,expireHours){
        var cookieString=name+"="+escape(value)+";path=/";
        if(expireHours>0){
            var date=new Date();
            date.setTime(date.getTime()+expireHours*60*60*1000);
            cookieString=cookieString+";expires="+date.toGMTString();
        }   
        document.cookie=cookieString;
    };
    function getCookie(name){
        var strCookie=document.cookie;
        var arrCookie=strCookie.split("; ");
        for(var i=0;i<arrCookie.length;i++){
            var arr=arrCookie[i].split("=");
            if(arr[0]==name)return unescape(arr[1]);
        }
        return null;
    };
    function delCookie(name){
        var date=new Date();
        date.setTime(date.getTime()-1);
        var cval=getCookie(name);
        if(cval!=null)document.cookie=name+'='+cval+";path=/;expires="+date.toGMTString();
    }
    
    

// 阻止网页左右滑动
// document.addEventListener('touchmove', function (event) {
//     event.preventDefault();
// }, false);
$('body').swipe(function(){
    alert()
})
