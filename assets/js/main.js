$(function () {

  $(".header__btn-wrap").click(function () {
    $(".header-sp").toggleClass("active"); //ボタン自身に activeクラスを付与し
  });




  // ヘッダー隠れる動き

  let startPos = 0;
  let winScrollTop = 0;
  const Header = $('.header');
  $(window).on('scroll', function () {
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos && winScrollTop > 100) { // ここにコードを追加
      $(Header).addClass('is-hide');
    } else {
      $(Header).removeClass('is-hide');
    }
    startPos = winScrollTop;
  });


  $(".top-to-js").click(function () {
    $("body,html").animate({
        scrollTop: 0 //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。
    return false; //親要素へのイベント伝播を止める
  });


  // メインビジュアル
  $(".main-visual-js").slick({
    autoplay: true,
    arrows: false,
    fade: true,
    speed: 3000,
    asNavFor: ".main-thumbnail-js",
  });
  $(".main-thumbnail-js").slick({
    slidesToShow: 4,
    asNavFor: ".main-visual-js",
    focusOnSelect: true,
  });



  $(".top-info-js").slick({
    autoplay: false,
    dots: true,
    arrows: true,
    slidesToShow: 4,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          arrows: false,

        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ],
  });

  // 客室詳細
  $slide = $('.room-main-js');
  $navigation = $('.room-main__bottom-img');

  $slide.slick({ //slickスライダー作成
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: true,
  });
  $navigation.each(function (index) { //サムネイルに連番付与属性
    $(this).attr('data-number', index);
  });
  $navigation.eq(0).addClass('current'); //1枚をオーバーレイ

  $navigation.on('click', function () { //サムネイルクリック時イベント
    var number = $(this).attr('data-number');
    $slide.slick('slickGoTo', number, true);
    $(this).siblings().removeClass('current');
    $(this).addClass('current');
  });


  function checkBreakPoint() {
    w = $(window).width();
    if (w <= 600) {
      // スマホ向け（767px以下のとき）
      $('.top-plan-js').not('.slick-initialized').slick({
        //スライドさせる
        autoplay: false,
        dots: true,
        arrows: false,
        slidesToShow: 1,
      });
    } else {
      // PC向け
      $('.top-plan-js.slick-initialized').slick('unslick');
    }
  }
  // ウインドウがリサイズする度にチェック
  $(window).resize(function () {
    checkBreakPoint();
  });
  // 初回チェック
  checkBreakPoint();

  //フェードイン
  $(window).scroll(function () {
    const windowHeight = $(window).height(); //ウィンドウの高さ
    const scroll = $(window).scrollTop(); //スクロール量

    $(".fade-in-js").each(function () {
      const targetPosition = $(this).offset().top; //要素の上からの距離
      if (scroll > targetPosition - windowHeight + 50) {
        $(this).addClass("action");
      }
    });
  });
})

// パララックス

var image = document.getElementsByClassName('sub-top-js');
new simpleParallax(image, {
  scale: 1.2,
});