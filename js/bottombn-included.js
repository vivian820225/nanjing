(function ($) {
    var ad1_m = "https://www.hiyes.tw/util/_resources/images/ad/_bottom/bonusY20-m.jpg"; //麗寶跨年
    var ad2_m = "https://www.hiyes.tw/util/_resources/images/ad/_bottom/earlynews-m.jpg"; //早鳥

    var ad1 = ""; //麗寶跨年
    var ad2 = "https://www.hiyes.tw/util/_resources/images/ad/_bottom/earlynews.jpg"; //早鳥
   
    var link_bonusY20 = "https://pse.is/38xjyh";
    var link_m_bonusY20 = "https://pse.is/39mflh";
    var link_early = "https://lin.ee/3HpqN27";

    var link_officialsite = "https://www.hiyes.tw/?utm_source=hiyesdata&utm_medium=fixedicon&utm_content=cases";

    var stylesheet = `<style>
                    #myBtn{border-radius: 50px;width: 55px;height: 55px;right: 3px;bottom:145px}
                    #officialsiteBtn{width: 55px;height: 55px;position: fixed;bottom: 80px;right: 3px;z-index: 9999;border: none;outline: none;background-color: #5f91c2;color: #fff;cursor: pointer;padding: 8px;border-radius: 50px;font-size: 1rem;}
                    #officialsiteBtn>img{width: 55px;position: fixed;bottom: 80px;right: 3px;}
                    @media screen and (max-width: 767px){#myBtn{bottom:245px}#officialsiteBtn{bottom:180px}#officialsiteBtn>img{bottom:180px}}
                    </style>`;

    //輪播
    // var carousel = `<div id="bottonCarousel" class="carousel slide" data-interval="2500" data-ride="carousel">
    //                     <div class="carousel-inner">
    //                         <div class="carousel-item active">
    //                             <a href="${link_m_bonusY20}" target="_blank"><img class="img-fluid mx-auto w-100 mw-100" src="${ad1_m}"></a>
    //                         </div>
    //                         <div class="carousel-item">
    //                             <a href="${link_early}" target="_blank"><img class="img-fluid mx-auto w-100 mw-100" src="${ad2_m}"></a>
    //                         </div>
    //                     </div>
    //                 </div>`;
    var carousel = `<div id="bottonCarousel" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <a href="${link_m_bonusY20}" target="_blank"><img class="img-fluid mx-auto w-100 mw-100" src="${ad1_m}"></a>
                            </div>
                        </div>
                    </div>`;
    var carouselstylesheet = `<style>
                            .fixed-bottom {position: fixed; right: 0; bottom: 0; left: 0;z-index: 1030;}
                            </style>`;

    // go to Hiyes
    var oficonhtml = `<a id="officialsiteBtn" href="${link_officialsite}" target="_blank" alt="前往海悅官方網站">
                    <img src="https://www.hiyes.tw/util/_resources/images/logo/hiyes_ads_white.png">
                    </a>`;

    // subcases page template1
    var html = `<div class="col-12 text-center d-md-none">${carousel}</div>`;

    // subcases page template2
    var html2 = `<div class="mb-2" style="margin-top:-0.5em;">${carousel}</div >`;

    // subcases page template3 (full-page)
    var html3 = `<div class="navbar fixed-bottom col-12 no-gutters d-md-none p-0">
                <div class="col-12 text-center d-md-none">${carousel}</div>
                </div>`

    // thanku page
    var pattern = `<div id="bottonCarousel" class="carousel slide hidden-xs" data-interval="2500" data-ride="carousel">
                        <div class="carousel-inner">
                            
                            <div class="item active">
                                <a href="${link_early}" target="_blank"><img class="img-fluid mx-auto" src="${ad2}"></a>
                            </div>
                        </div>
                        
                    </div>
                    <div id="bottonCarousel" class="carousel slide visible-xs" data-interval="2500" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="item active">
                                <a href="${link_m_bonusY20}" target="_blank"><img class="img-fluid mx-auto" src="${ad1_m}"></a>
                            </div>
                            <div class="item">
                                <a href="${link_early}" target="_blank"><img class="img-fluid mx-auto" src="${ad2_m}"></a>
                            </div>
                        </div>
                    </div>`;

    // fixed-right icon
    $("head").append(stylesheet);
    if($("#easychat-floating-button").length == 0){
        if($("footer").length == 0) $("body script").first().before(oficonhtml);
        else $("footer").after(oficonhtml);
    }else{
        $("#easychat-floating-button").prepend(oficonhtml);
    }
    
    // ad-banner
    if ($(".navbar.fixed-bottom").length > 0 ){
        // template1
        $(".navbar.fixed-bottom").prepend(html);
    }else if($("#navbar-b").length > 0){
        // template2
        $("#navbar-b").prepend(html2);
    }else{
         //thanku
        if ($(".sticky.mt").length > 0){
            $(".sticky.mt").prepend(pattern);
        }else if(("#bn-bottom_ref").length > 0){
            $("#bn-bottom_ref").prepend(pattern);
        }else{
            // template3
            $("body").append(html3);
            $("head").append(carouselstylesheet);
        }
    }

    $('#bottonCarousel').carousel({
        interval: 2500
    })

})(jQuery);

