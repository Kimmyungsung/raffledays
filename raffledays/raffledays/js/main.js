$(function(){
  
   //주메뉴에 마우스를 올리면 서브메뉴와 서브배경 보이게
   $('.gnb').hover(function() {
    
    //마우스 들어갔을때
    $('.sub-bg').stop().show();
    $('.gnb-subright').show();
    
  }, function(){
    //마우스 나갔을때
    $('.sub-bg').stop().hide();
    $(' .gnb-subright').hide();
  });//hover end



  //스와이퍼 라이브러리
  var mainSlider = new Swiper(".main-slider", {
    //자동재생
    autoplay: {
    //자동재생시간
    delay: 3500,
    //동그라미버튼이나 좌우버튼을 클릭하면 자동재생 멈춤
    disableOnInteraction: true,
    },
    //동그라미 버튼
    pagination: {
      el: ".m-pager",
      //버튼을 클릭하면 해당 슬라이드 이동
      clickable: true,
    },
    //3번이미지에서 1번으로 바로 넘어가게 함
    loop:true,
  });
  
  //ootd (스와이퍼)
  var ootdslider = new Swiper(".ootd-slider", {
    slidesPerView: 6,
    spaceBetween: 20,
    pagination: {
      el: ".b-pager",
      clickable: true,
    },
    navigation: {
      nextEl: ".b-next",
      prevEl: ".b-prev",
    },
  });

  //winning (스와이퍼)
  var ootdslider = new Swiper(".winning-slider", {
    slidesPerView: 6,
    spaceBetween: 20,
    pagination: {
      el: ".i-pager",
      clickable: true,
    },
    navigation: {
      nextEl: ".i-next",
      prevEl: ".i-prev",
    },
  });

  //스와이퍼 라이브러리
  var mainSlider = new Swiper(".ad-slider", {
    //자동재생
    autoplay: {
    //자동재생시간
    delay: 3500,
    //동그라미버튼이나 좌우버튼을 클릭하면 자동재생 멈춤
    disableOnInteraction: true,
    },
    //동그라미 버튼
    pagination: {
      el: ".m-pager",
      //버튼을 클릭하면 해당 슬라이드 이동
      clickable: true,
    },
    //3번이미지에서 1번으로 바로 넘어가게 함
    loop:true,
  });

    //스와이퍼 라이브러리
    var mainSlider = new Swiper(".ad-slider", {
      //자동재생
      autoplay: {
      //자동재생시간
      delay: 3500,
      //동그라미버튼이나 좌우버튼을 클릭하면 자동재생 멈춤
      disableOnInteraction: true,
      },
      //3번이미지에서 1번으로 바로 넘어가게 함
      loop:true,
    });

});//로딩함수

