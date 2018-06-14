var turnplate, rotateTimeOut, rotateFn,
    lotteryItem = [],
    defaultItem = [];
var 不是必中奖=true;
turnplate = {
    turnNum: 3,
    restaraunts: [], //大转盘奖品名称
    colors: [], //大转盘奖品区块对应背景颜色
    outsideRadius: 188, //大转盘外圆的半径
    textRadius: 158, //大转盘奖品位置距离圆心的距离
    insideRadius: 68, //大转盘内圆的半径
    startAngle: 0, //开始角度
    bRotate: false //false:停止;ture:旋转
};

// rotateTimeOut = function (){
//     $('#wheelcanvas').rotate({
//         angle:0,
//         animateTo:2160,
//         duration:8000,
//         callback:function (){
//             alert('网络超时，请检查您的网络设置！');
//         }
//     });
// };

//旋转转盘 item:奖品位置; txt：提示语;
// rotateFn = function (item, txt){
//     var angles = item * (360 / turnplate.restaraunts.length) - (360 / (turnplate.restaraunts.length*2));
//     var tips="";
//     if(angles<270){
//         angles = 270 - angles;
//     }else{
//         angles = 360 - angles + 270;
//     }
//     $('#wheelcanvas').stopRotate();
//     $('#wheelcanvas').rotate({
//         angle:0,
//         animateTo:angles+1800,
//         duration:8000,
//         callback:function (){
//             if (txt.indexOf('谢谢参与') == -1) {
//                 tips = '恭喜你获得：' + txt;
//             }else if (txt.indexOf('移动电话卡') >= 0) {
//                 tips = '恭喜你获得：' + txt + '(50元)';
//             } else {
//                 tips = txt;
//             }

//             if (txt.indexOf('谢谢参与') == -1) {
//                 layer.open({
//                     content: '<p style="line-height:25px;">'+tips+"</p><p style='font-size:14px;'>请到活动现场出示页面给工作人员兑换奖品</p>",
//                     btn: '确定'
//                 });
//             }else{
//                 layer.open({
//                     content: tips,
//                     btn: '确定'
//                 });
//             }

//             turnplate.bRotate = !turnplate.bRotate;
//         }
//     });
// };

// 抽奖
// $('.pointer').click(function (){
//     if (g.turnNum > 0) {
//         $.ajax({
//             url:$config.host() + 'm=Turntable&a=lottery',
//             type:'POST',
//             data: {
//                 token: g.token
//             },
//             dataType:'JSON',
//             success:function(data){
//                 var item;
//                 if (data.errcode == 0) {
//                     item = data.data.id;
//                     if(defaultItem % 2 == 0 && item > (lotteryItem.length/2)){
//                         item = item + 1;
//                     }
//                     item = item + 1;
//                 } else {
//                     item = lotteryItem.length;
//                 }

//                 if (turnplate.bRotate) return;
//                 turnplate.bRotate = !turnplate.bRotate;
//                 rotateFn(item, turnplate.restaraunts[item - 1]);
//                 g.turnNum = g.turnNum - 1;
//                 setTimeout(function () {
//                     $('#J_scorenum').html(g.turnNum);

//                     if(item != 8){
//                         $('#myrewardMain p').hide();
//                         $('#myrewardMain li').show();
//                         $('.reward-name').html(turnplate.restaraunts[item - 1]);
//                         $('.reward-date').html("兑换码："+data.data.code);
//                     }
//                 }, 5500)
//             },
//             error:function(){
//                 layer.open({
//                     content: '请重试!',
//                     btn: '确定'
//                 });
//             }
//         })
//     }else{
//         layer.open({
//             content: '<p style="line-height:25px;">没有抽奖数啦，明天再来吧！</p>' +
//             '<p style="font-size:14px;">每天都可获得抽奖机会。</p>',
//             btn: '确定'
//         });
//     }
// });



// 获取抽奖次数和已获得奖励
function getLotteryNum() {
    // $.ajax({
    //     url: $config.host() + "m=Turntable&a=getLotteryNum",
    //     type: "POST",
    //     data:{
    //         token: $config.token
    //     },
    //     success: function (data) {
    //         if(data.errcode == 0) {
    //             var num = data.data.count > 0 ? data.data.count : 0;
    //             $('#J_scorenum').html(num);//获取抽奖次数
    //             if (data.data.prize) {//如果有获奖过
    //                 $('#myrewardMain p').hide();
    //                 $('#myrewardMain li').show();
    //                 $('.reward-name').html(data.data.prize);
    //                 $('.reward-date').html("兑换码："+data.data.code);
    //             }

    //             var colorVal = "#FFF4D6", colorArr = [];
    //             data.data.prize_date_arr.filter(function (item) {
    //                 defaultItem.push(item.prize);//储存奖品
    //                 lotteryItem.push(item.prize);//储存奖品
    //             })
    //             if(lotteryItem.length % 2 == 0){
    //                 var index = lotteryItem.length/2;
    //                 lotteryItem.splice(index,0,'神秘奖品X');
    //             }
    //             lotteryItem.push('谢谢参与');
    //             for(var i=0;i<lotteryItem.length;i++){
    //                 if(i%2==0) {
    //                     colorArr.push(colorVal);
    //                 }else{
    //                     colorArr.push('#fff');
    //                 }
    //             }

    //             //动态添加大转盘的奖品与奖品区域背景颜色
    //             turnplate.restaraunts = lotteryItem;
    //             turnplate.colors = colorArr;

    //             drawRouletteWheel();
    //             activityInit();
    //             g.turnNum = num;
    //         }
    //     },
    //     error: function () {

    //     }
    // });
    $(".lottery-title .title").html("惠州红花湖"); //设置抽奖标题
    $(".lottery-title .summary").html("南都"); //设置抽奖摘要
    $('#J_scorenum').html(turnplate.turnNum); //设置明天抽奖次数
    lotteryItem = ['1', '2', '3'];
    if (不是必中奖) {
        lotteryItem.push('谢谢参与');
    }
    //添加颜色
    var colorVal = "#FFF4D6",
        colorArr = [];
    for (var i = 0; i < lotteryItem.length; i++) {
        if (i % 2 == 0) {
            colorArr.push(colorVal);
        } else {
            colorArr.push('#fff');
        }
    }
    //将颜色和奖品添加到转盘设置
    turnplate.restaraunts = lotteryItem;
    turnplate.colors = colorArr;
    //绘制大转盘
    drawRouletteWheel();
    //展开获奖信息
    activityInit();
}

function drawRouletteWheel() {
    var canvas = document.getElementById("wheelcanvas");
    if (canvas.getContext) {
        //根据奖品个数计算圆周角度
        var arc = Math.PI / (turnplate.restaraunts.length / 2);
        var ctx = canvas.getContext("2d");
        //在给定矩形内清空一个矩形
        ctx.clearRect(0, 0, 422, 422);
        //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式  
        ctx.strokeStyle = "#FFBE04";
        //font 属性设置或返回画布上文本内容的当前字体属性
        ctx.font = '18px Microsoft YaHei';
        for (var i = 0; i < turnplate.restaraunts.length; i++) {
            var angle = turnplate.startAngle + i * arc;
            ctx.fillStyle = turnplate.colors[i];
            ctx.beginPath();
            //arc(x,y,r,起始角,结束角,绘制方向) 方法创建弧/曲线（用于创建圆或部分圆）
            ctx.arc(211, 211, turnplate.outsideRadius, angle, angle + arc, false);
            ctx.arc(211, 211, turnplate.insideRadius, angle + arc, angle, true);
            ctx.stroke();
            ctx.fill();
            //锁画布(为了保存之前的画布状态)
            ctx.save();

            //----绘制奖品开始----
            ctx.fillStyle = "#E5302F";
            var text = turnplate.restaraunts[i];
            var line_height = 17;
            //translate方法重新映射画布上的 (0,0) 位置
            ctx.translate(211 + Math.cos(angle + arc / 2) * turnplate.textRadius, 211 + Math.sin(angle + arc / 2) * turnplate.textRadius);

            //rotate方法旋转当前的绘图
            ctx.rotate(angle + arc / 2 + Math.PI / 2);

            ctx.fillText(text, -ctx.measureText(text).width / 2, 10);

            // if ((text.toString()).indexOf("移动电话卡") >= 0) {
            //     ctx.fillText("(50元)", -25, 30);
            // }

            if ((text.toString()).indexOf("谢谢参与") >= 0) {
                var img = document.getElementById("sorry-img");
                img.onload = function () {
                    ctx.drawImage(img, -15, 30);
                };
                ctx.drawImage(img, -15, 30);
            }
            //把当前画布返回（调整）到上一个save()状态之前
            ctx.restore();
            //----绘制奖品结束----
        }
    }
}

function activityInit() {
    //  我获得的奖励是否展开
    $('#arrow').bind('click', function () {
        var _this = $(this).find('.arrow');
        if (_this.data('status') == 'up') {
            _this.removeClass('up').addClass('down');
            _this.data('status', 'down');
            $('#myrewardMain').hide();
        } else {
            _this.removeClass('down').addClass('up');
            _this.data('status', 'up');
            $('#myrewardMain').show();
        }
    });
}