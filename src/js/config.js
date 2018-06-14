window.$config = {
    token: "",
    host: function(){
        var baseUrl = '/index.php?';
        return 'http://h5.oeeee.com' + baseUrl
    },
    // 检查是否在app内
    isNdApp : function(){
        return this.getCookie('isndapp') || (typeof ndapp !== 'undefined' && ndapp.installed === 1) || (typeof ndapp !== 'undefined' && ndapp.isndapp === 1)
    },
    //拿COOKIE
    getCookie :function (c_name) {
        if (document.cookie.length>0) {
            var c_start=document.cookie.indexOf(c_name + "=")
            if (c_start!=-1)
            {
                c_start=c_start + c_name.length+1
                var c_end=document.cookie.indexOf(";",c_start)
                if (c_end==-1) c_end=document.cookie.length
                return unescape(document.cookie.substring(c_start,c_end))
            }
        }
        return ""
    },
    //地址栏信息
    GetQueryString:function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    },
    // 检查手机格式
    isPhone: function(val){
        var PhoneReg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/
        return PhoneReg.test($.trim(val))
    },
    
    debounce: function(fn) {
        var timeout = null;
        return function () {
            clearTimeout(timeout);
            var _this = this;
            timeout = setTimeout(function () {
                fn.apply(_this, arguments);
            }, 100);
        }
    }
}
