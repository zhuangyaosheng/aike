var setCookie =function(name,value){
  var Days = 1;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days*60*60*1000);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
};
var getCookie = function (name) {
  var arr;
  var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
};
var delCookie = function(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)document.cookie= name + "="+cval+";expires="+exp.toGMTString();
};
$(function(){
  //根据url给激活头部导航
  switch(window.location.pathname){
      case "/Pages/product.html"://产品
      $(".menus>li a").removeClass("z-active");
      $(".menus>li a.product").addClass("z-active");
    break;
      case "/Pages/advantage.html"://优势
      $(".menus>li a").removeClass("z-active");
      $(".menus>li a.advantage").addClass("z-active");
    break;
      case "/Pages/case.html"://成功案例
      $(".menus>li a").removeClass("z-active");
      $(".menus>li a.case").addClass("z-active");
    break;
      case "/Pages/about.html"://关于我们
      $(".menus>li a").removeClass("z-active");
      $(".menus>li a.about").addClass("z-active");
    break;
      case "/Pages/news.html": //新闻动态
      $(".menus>li a").removeClass("z-active");
      $(".menus>li a.news").addClass("z-active");
    break;
      case "/Pages/join.html": //合作加盟
    $(".menus>li a").removeClass("z-active");
    $(".menus>li a.join").addClass("z-active");
  break;
    default://首页
      $(".menus>li a").removeClass("z-active");
      $(".menus>li a.home").addClass("z-active");
  };
  //回到顶部
  $(".back-top").click(function(){
    $('html,body').animate({ scrollTop: 0 }, 500);
  });
  // 导航锚点跳转
    $(".menus>li").click(function(){
      $(".menus>li a").removeClass("z-active");
      var s=$(this).children().attr("href");
      if (s.indexOf('#') == -1){
        $("#"+s).ScrollTo(500);
      }else if(s.indexOf('/') == 0){
        $(s.slice(1)).ScrollTo(500);
      }else{
        $(s).ScrollTo(500);
      };
      $(this).children().addClass("z-active");
    });
  var layoutScrollTo = function (id) {
    if(id==''){
      return false;
    }
    if (id.indexOf('#') == -1) id = '#' + id;
    $(id).ScrollTo(500);
    $(".menus>li a").each(function () {
      $(this).removeClass("z-active");
      if (this.hash == id) {
        $(this).addClass("z-active");
      }
    });
  };
  layoutScrollTo(window.location.hash || '');

  $('.counter').countUp();
  //百度统计
  var _hmt = _hmt || [];
  (function () {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?0771defb21401eba9317d3eba1de37f4";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
  })();

  //轮播
  //banner
  (function(){
    var t = s = 0;
    var bannerPlay = bannerSetInt = null;
    var bannerSlide = $(".banner-wrapper .banner__swiper-bg");
    s = bannerSlide.length;
    bannerPlay = function(){
      t++;
      if(t>s-1){
        t=0;
      }
      bannerSlide.eq(t).fadeIn(800).siblings().fadeOut(1000);
      $(".layer-banner_menus>ul>li").siblings().removeClass("z-active").eq(t).addClass("z-active");
    };
    bannerSetInt = setInterval(bannerPlay,4000);
    $(".banner-container,.layer-banner_menus").mousemove(function () {
      clearInterval(bannerSetInt);
    }).mouseleave(function () {
      bannerSetInt = setInterval(bannerPlay,4000);
    });
    $(".layer-banner_menus>ul>li").click(function(){
      var _menusLiIndex = $(this).index();
      t=_menusLiIndex;
      bannerSlide.eq(_menusLiIndex).fadeIn(800).siblings().fadeOut(1000);
      $(".layer-banner_menus>ul>li").siblings().removeClass("z-active").eq(_menusLiIndex).addClass("z-active");
    });
  })();

  //多元化营销工具
  $(".diversification-muen li").click(function(){
    var _index = $(this).index();
    $(this).addClass("z-index").siblings(".list").removeClass("z-index");
    $(".layer-container--slide").animate({top: '-'+_index*320+"px"},200);
  });

  // 我们的优势
  (function(){
    var advWrap = $(".advantage-swiper__wrapper");
    var advWrapSlide = $(".advantage-swiper__wrapper .advantage-wrapper__slide");
    var advWrapSlideHeight = advWrapSlide.height();
    var x= z = 0;
    var advWrapPlay,advWrapSetInt = null;
    var advOperator = $(".advantage-list");
    advWrap.append(advWrapSlide.eq(0).clone(true));
    z = $(".advantage-swiper__wrapper .advantage-wrapper__slide").length;
    for(var y =0 ;y<z-2;y++){
      if(y==0){
        advOperator.append("<span class='dot z-index'></span>");
      }
      advOperator.append("<span class='dot'></span>");
    };
    advWrap.width(advWrapSlideHeight*z+"px");
    advWrapPlay = function(){
      x=x+1;
      if(x>z-1){
          x=1;
          advWrap.css("top",0);
      }
      if(x==z-1){
        $(".advantage-list .dot").eq(0).addClass("z-index").siblings().removeClass("z-index");
      }else{
        $(".advantage-list .dot").eq(x).addClass("z-index").siblings().removeClass("z-index");
      };
      advWrap.animate({"top":-x * advWrapSlideHeight},800);
    };
    advWrapSetInt = setInterval(advWrapPlay,3000);
    $(".advantage-swiper").mousemove(function () {
      clearInterval(advWrapSetInt);
    }).mouseleave(function () {
      advWrapSetInt = setInterval(advWrapPlay,3000);
    });
    $(".advantage-list .dot").click(function(){
      var _advIndex = $(this).index();
      $(this).addClass("z-index").siblings().removeClass("z-index");
      x=_advIndex;
      advWrap.animate({"top":-_advIndex * advWrapSlideHeight},800);
    });
  })();

  //客户说轮播
  (function(){
    var cusWrap = $(".customer-wrapper");
    var cusWrapSlide = $(".customer-wrapper .customer-wrapper__slide");
    var cusWrapSlideWidth = cusWrapSlide.width();
    var i=l = 0;
    var cusWrapPlay,cusWrapSetInt = null;
    var cusOperator = $(".customer__operator");
    cusWrap.append(cusWrapSlide.eq(0).clone(true));
    l = $(".customer-wrapper .customer-wrapper__slide").length;
    for(var j =0 ;j<l-2;j++){
      if(j==0){
        cusOperator.append("<span class='dot z-index'></span>");
      }
      cusOperator.append("<span class='dot'></span>");
    };
    cusWrap.width(cusWrapSlideWidth*l+"px");
    cusWrapPlay = function(){
      i=i+1;
      if(i>l-1){
          i=1;
          cusWrap.css("left",0);
      }
      if(i==l-1){
        $(".customer__operator .dot").eq(0).addClass("z-index").siblings().removeClass("z-index");
      }else{
        $(".customer__operator .dot").eq(i).addClass("z-index").siblings().removeClass("z-index");
      };
      cusWrap.animate({"left":-i * cusWrapSlideWidth},800);
    };
    cusWrapSetInt = setInterval(cusWrapPlay,3000);
    $(".customer-container").mousemove(function () {
      clearInterval(cusWrapSetInt);
    }).mouseleave(function () {
      cusWrapSetInt = setInterval(cusWrapPlay,3000);
    });
    $(".customer__operator .dot").click(function(){
      var _dotIndex = $(this).index();
      $(this).addClass("z-index").siblings().removeClass("z-index");
      i=_dotIndex;
      cusWrap.animate({"left":-_dotIndex * cusWrapSlideWidth},800);
    });
  })();
  $(".telephoneHover").mouseenter(function(){
    $(".telephone").animate({"right":"45px"});
  }).mouseleave(function(){
    $(".telephone").animate({"right":"-300px"});
  });
  $(".markCodeHover").mouseenter(function(){
    $(".markCode").animate({"right":"45px"});
  }).mouseleave(function(){
    $(".markCode").animate({"right":"-300px"});
  });
  $(".consultHover").mouseenter(function(){
    $(".consult").animate({"right":"45px"});
  }).mouseleave(function(){
    $(".consult").animate({"right":"-300px"});
  });
});

/*
*申请加盟
*/
//错误提示
var errTisp = function(txt){
  $("#cooperationForm .tisp").text(txt);
  $("#cooperationForm .tisp").show();
  setTimeout(function(){
    $("#cooperationForm .tisp").hide();
  },3500);
};
//提交申请加盟
var joinCooperation = function(a){
  var obj = {};
  $("#cooperationForm .form-row input").each(function(){
    if(!$(this).val()){
      $(this).parent().addClass("err");
    }else{
      $(this).parent().removeClass("err");
      obj[$(this).attr("name")]=$(this).val();
    };
  });
  return obj;
};
//验证输入内容是否正确
var verifyForm = function(el){
  var _phoneNumber =/^((1))[0-9]{10}$/;
  var _qq = /^[1-9][0-9]{4,9}$/;
  if($(el).attr("id")=="Contacts"){
    if (!$("#Contacts").val()) {
      $(el).parent().addClass("err");
      errTisp("请输入姓名");
      return false;
    }else{
      $(el).parent().removeClass("err");
    };
  }else if($(el).attr("id")=="PhoneNumber"){
    if (!_phoneNumber.test($("#PhoneNumber").val())) {
      errTisp("请输入正确的手机号码");
      $(el).parent().addClass("err");
      return false;
    }else{
      $(el).parent().removeClass("err");
    };
  }else if($(el).attr("id")=="QQNumber"){
    if (!_qq.test($("#QQNumber").val())) {
      errTisp("请输入正确的QQ号码");
      $(el).parent().addClass("err");
      return false;
    }else{
      $(el).parent().removeClass("err");
    };
  }else if($(el).attr("id")=="checkcode"){
    if(!$("#checkcode").val()){
      errTisp("请输入验证码");
      $(el).parent().addClass("err");
      return false;
    }else if($("#checkcode").val().length!=4){
      errTisp("请输入四位正确的验证码");
      $(el).parent().addClass("err");
      return false;
    }else{
      $(el).parent().removeClass("err");
    };;
  };
  return true;
};
$("#submitBtn").click(function(){
  var _data = joinCooperation();
  var _pass = verifyForm("#cooperationForm input");
  if(_pass == true){
    $.ajax({
      type: "POST",
      url: "/UserRegister/CustomerRequestEdit",
      data:_data,
      dataType: "json",
      success: function (suc) {
        if(suc.Status==1){
          $('#cooperationForm')[0].reset();
          $("#cooperationForm .mask").show();
          setTimeout(function(){$("#cooperationForm .mask").hide();},5000);
          $("#codeImg").attr({"src":'/UserRegister/keycode?'+Math.random()});
        }else{
          errTisp(suc.Message);
        }
      }, error: function (err) {console.log(err); }
    });
  }
});
$("#cooperationForm input").blur(function(){
  verifyForm(this);
});
$("#regBtn").click(function(){
  $("#cooperationForm").ScrollTo(500);
});
$(".join-flow").mouseenter(function(){
  $(".join-flow .icon-right-arrows-bg").css({"left":"-60px"});
  $(".join-flow .icon-right-arrows-bg").animate({"left":"15px"});
}).mouseleave(function(){
  $(".join-flow .icon-right-arrows-bg").animate({"left":"90px"});
});
$("#codeImg").click(function(){
  $(this).attr({"src":'/UserRegister/keycode?'+Math.random()});
});
//60统计
(function(b,a,e,h,f,c,g,s){b[h]=b[h]||function(){(b[h].c=b[h].c||[]).push(arguments)};
b[h].s=!!c;g=a.getElementsByTagName(e)[0];s=a.createElement(e);
s.src="//s.union.360.cn/"+f+".js";s.defer=!0;s.async=!0;g.parentNode.insertBefore(s,g)
})(window,document,"script","_qha",168240,false);
