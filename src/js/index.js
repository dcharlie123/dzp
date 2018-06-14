// 报名
// $(document).on("click", "#submit", function () {
//     var name = $.trim( $("#name").val() );
//     var mobile = $.trim( $("#phone").val() );
    
//     if (!name) {
//         showAlert('请输入您的姓名');
//         return;
//     }
//     if (!mobile || !$config.isPhone(mobile)) {
//         showAlert('请输入正确的手机号码');
//         return;
//     }
//     if(!$config.token){
//         showAlert('请先登录');
//         ndapp.follow();
//         return;
//     }
    
//     $.ajax({
//         url: $config.host() + "m=Turntable&a=apply",
//         type: "POST",
//         data: {
//             'token' : $config.token,
//             'mobile': mobile,
//             'name': name
//         },
//         success: function (data) {
//             if(data.errcode == 0){
//                 getLotteryNum();
    
//                 showAlert('报名成功!');
//                 setTimeout(function(){
//                     $('.lottery').show();
//                     $('.index').hide();
//                 },500);
//             }else{
//                 if(data.errmsg == '已申请'){
//                     showAlert('您已报名过了');
//                     getLotteryNum();
//                     setTimeout(function(){
//                         $('.lottery').show();
//                         $('.index').hide();
//                     },500);
//                     return;
//                 }
//                 if(data.errmsg == '未登录'){
//                     ndapp.follow();
//                     return;
//                 }
//                 showAlert(data.errmsg);
//             }
//         }
//     });
// });

// $('.quiz-wrapper input').focus(function () {
//     if(!$config.token){
//         ndapp.follow();
//     }
// });

// // 检查是否已报名
// function isApply(){
//     $.ajax({
//         url: $config.host() + "m=Turntable&a=apply",
//         type: "post",
//         data:{
//             token: $config.token
//         },
//         success: function (data) {
//             if (data.errcode === 2) {
//                 $('.lottery').show();
//                 $('.index').hide();
//                 getLotteryNum();
//             }else{
//                 $('.lottery').hide();
//                 $('.index').show();
//             }
//             $('.loading').hide();
//         }
//     });
// }

// 弹窗
function showAlert(text){
    layer.open({
        content: text,
        btn: '确定'
    });
}
$(function(){
    getLotteryNum();
})