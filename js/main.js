function mediaCheck() {
  const sections = document.querySelectorAll(".section");
  const desktopGroupSlides = document.querySelectorAll(".group_slide");
  const mobileGroupSlides = document.querySelectorAll(".m_group_slide");

  sections.forEach((section) => {
    if (innerWidth < 768) {
      section.classList.add("fp-auto-height");
    } else {
      section.classList.remove("fp-auto-height");
    }
  });

  desktopGroupSlides.forEach((dGroupSlide) => {
    if (innerWidth < 768) {
      dGroupSlide.classList.remove("slide");
    } else {
      dGroupSlide.classList.add("slide");
    }
  });

  mobileGroupSlides.forEach((mGroupSlide) => {
    if (innerWidth < 768) {
      mGroupSlide.classList.add("slide");
    } else {
      mGroupSlide.classList.remove("slide");
    }
  });
}

function init() {
  $("#fullpage").fullpage({
    anchors: [
      "1stPage",
      "2ndPage",
      "3rdPage",
      "4thPage",
      "5thPage",
      "6thPage",
      "7thPage",
      "8thPage",
      "9thPage",
    ],
    slidesNavigation: true,
    loopHorizontal: false,
    autoScrolling: true,
    scrollHorizontally: true,
    normalScrollElements: "#google_map",
    navigation: true,
  });
}

function initMobile() {
  $("#fullpage").fullpage({
    anchors: [
      "1stPage",
      "2ndPage",
      "3rdPage",
      "4thPage",
      "5thPage",
      "6thPage",
      "7thPage",
      "8thPage",
      "9thPage",
    ],
    slidesNavigation: false,
    loopHorizontal: false,
    autoScrolling: false,
    scrollHorizontally: true,
    normalScrollElements: ["8thPage", "9thPage", "#google_map"],
    navigation: true,
    fitToSection: false,
  });
}

$(document).ready(function () {
  mediaCheck();

  if (innerWidth < 768) {
    initMobile();
  } else {
    init();
  }

  const resizeTimer = null;
  $(window).bind("resize", function () {
    if (resizeTimer) clearTimeout(resizeTimer);

    resizeTimer = setTimeout(function () {
      mediaCheck();
      $.fn.fullpage.destroy("all");
      if (innerWidth < 768) {
        initMobile();
      } else {
        init();
      }
    }, 500);
  });

  $(".panorama-view").panorama360({
    sliding_controls: false,
    bind_resize: true,
  });
});
