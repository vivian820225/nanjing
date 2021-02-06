function mediaCheck() {
  const desktopGroupSlides = document.querySelectorAll(".group_slide");
  const mobileGroupSlides = document.querySelectorAll(".m_group_slide");
  const panoramaSection = document.querySelector('.panorama-container');

  if (innerWidth <= 768) {
    panoramaSection.innerHTML = `<img src="images/mobile/s1/sec1img01.jpg" data-width="901" data-height="1081" alt="Panorama">`
  } else {
    panoramaSection.innerHTML = `<img src="images/desktop/s1/sec1img01.jpg" data-width="1920" data-height="1080" alt="Panorama">`
  };
  
  desktopGroupSlides.forEach((dGroupSlide) => {
    if (innerWidth <= 768) {
      dGroupSlide.classList.remove("slide");
    } else {
      dGroupSlide.classList.add("slide");
    }
  });

  mobileGroupSlides.forEach((mGroupSlide) => {
    if (innerWidth <= 768) {
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
    scrollOverflow: true,
    normalScrollElements: "#google_map",
    navigation: true,
  });
}

$(document).ready(function () {
  mediaCheck();
  init();

  $(window).bind("resize", function () {
    location.reload();
  });

  $(".panorama-view").panorama360({
    sliding_controls: false,
    bind_resize: true,
  });
});
