"use strict";function tabs(){var e=$(".tabs__links"),n=e.find("a"),i=$(".tabs__contents__item");n.eq(0).add(i.eq(0)).addClass("active"),e.on("click","a",function(){var e=$(this),n=e.index();e.add(i.eq(n)).addClass("active").siblings().removeClass("active")})}!function(){function e(){$("#slider").nivoSlider({effect:"fold",controlNav:!0,pauseTime:5e3,pauseOnHover:!1})}setTimeout(function(){e()},22e3);var n=$("#menu"),i=$("#nav"),o=$("#year"),t=$(".telefono"),a=$(window).width();a>768&&t.removeAttr("href"),console.log(t+"/"+a),tabs(),o.html("&copy "+(new Date).getFullYear()+" ");var s=function(){n.slideToggle()};i.on("click",s)}(),$("#one")&&!function(){var e=$("#one"),n=$("#two"),i=$(".imagenes-prod"),o=$(".hide");e.on("click",function(){var e=$(this);e.hide(),i.show()}),n.on("click",function(){var e=$(this);e.hide(),o.show()})}();