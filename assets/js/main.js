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
    arrows: true,
    fade: true,
    speed: 3000,
    asNavFor: ".main-thumbnail-js",
    responsive: [{
      breakpoint: 600,
      settings: {
        dots: true,
      }
    }, ],
  });
  $(".main-thumbnail-js").slick({
    slidesToShow: 4,
    asNavFor: ".main-visual-js",
    focusOnSelect: true,
  });



  $(".top-news-js").slick({
    autoplay: false,
    dots: true,
    arrows: true,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 1200,
        settings: {
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