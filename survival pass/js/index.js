$('.top-2-ul li').mouseenter(function(){
    $(this).find('div').css('background','gray');
    $(this).css('border-color','yellow');
    $(this).animate()
});
$('.top-2-ul li').mouseleave(function(){
    $(this).find('div').css('background','transparent');
    $(this).css('border-color','transparent');

});

//第一个轮播图的左右按钮

//右
//定义一个索引
var index = 0;
$('#adBtnRight').click(function(){
    // $('.banner-box').children().eq(index).fadeOut(500);
    $('.banner-box').children().children().eq(index).fadeOut(1000);
    index++;
    if(index>$('.banner-box').children().children().length-1){
     index = 0;
    }
    $('.banner-box').children().children().eq(index).fadeIn(1000); 
    $('.banner .banner-btn').children().eq(index).css('background','gold').siblings().css('background','skyblue');
});

//左
//左按钮轮播上一项
$('#adBtnLeft').click(function() {
    $('.banner-box').children().children().eq(index).fadeOut(1000);
    index--;
    if(index<0){
        index =$('.banner-box').children().children().length-1;
    }
    $('.banner-box').children().children().eq(index).fadeIn(1000); 
});

//自动轮播
 var timerOne;
 function autoPlay() {
     timerOne = setInterval(function(){
        $('#adBtnRight').click();
     },2000);
 }
 autoPlay();

 //鼠标放上去暂停轮播
 $('.banner').mouseenter(function(){
     clearInterval(timerOne);
 });
 $('.banner').mouseleave(function(){
     autoPlay();
});

//给小按钮添加事件
$('.banner-btn a').click(function(){
    $(this).css('background','gold').siblings().css('background','skyblue');
    var sBtn = $(this).index();
    $('.banner-box').children().children().eq(sBtn).fadeIn(1000).siblings().fadeOut(1000); 
});



// 通过豪华生存通行证获得专属奖励 



$('.jcarousel')
  .jcarousel({
    // 实现无缝滚动的配置
    // wrap:'both'
    wrap: 'circular'
  })    
  // 实现自动轮播
//   .jcarouselAutoscroll({
//     interval: 1000,
//     target: '+=1',
//     autostart: true
//   });
// 点击上一个按钮
$('.prev')
  .on('jcarouselcontrol:active', function () {
    $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function () {
    $(this).addClass('inactive');
  })
  .jcarouselControl({
    target: '-=1'
  });
// 点击下一个按钮
$('.next')
  .on('jcarouselcontrol:active', function () {
    $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function () {
    $(this).addClass('inactive');
  })
  .jcarouselControl({
    target: '+=1'
  });
  var x = 0;
$('.next').click(function(){
    
    x++;
    var $LI = $('.jcarousel img').eq(x).attr('src');
    $('.jcarousel li').eq(x).css('display','none');
    $('.banner-img img').attr('src',$LI);
    
});






// 查看每个等级的豪华通行证奖励
$('.jiangli-nav').children().children().mouseenter(function(){
    var item = $(this).parent().index();
    $('.item').eq(item).css('display','block').siblings('div').css('display','none');
});





//faq
//给li 中的span中的a添加事件，点击显示div盒子
var flag = true;
$('.faq-box ul span').find('a').click(function(){
    
    if(flag){
        flag = false;
        $(this).parent().next().slideDown(500);
        $(this).text('☝');
        $(this).parent().parent().siblings().find('div').css('display','none');
    }else {
        flag = true;
        $(this).parent().next().slideUp(500);
        $(this).text('☟');
        // $(this).parent().parent().siblings().find('div').css('display','none');
    }
});




