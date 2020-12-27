// Scrollspy plugin is used in JD pages
var FixedHeaderLayout = (function() {
  var showHeader = function() {
    var windowTop = window.scrollY;
    var header = $("#cb-js-pricing-header");
    var tab = $('[data-pricing-table = true]');
    var tabHeader = $(tab).find('[data-pricing-table-header]')[0];
    var tabBody = $(tab).find('[data-pricing-table-body]')[0];
    var tabHeaderStartOffset = tabHeader.getBoundingClientRect().top + tabHeader.getBoundingClientRect().height;
    var tabBodyEndOffset = tabBody.getBoundingClientRect().top +tabBody.getBoundingClientRect().height - 200 //200 static visible area;
    if (tabHeaderStartOffset < 0 && tabBodyEndOffset > 0 && !$(header).hasClass("l-main__fixed--active")) {
      $(header).addClass("l-main__fixed--active");
    }
    else if($(header).hasClass("l-main__fixed--active") && tabBodyEndOffset < 0 || tabHeaderStartOffset > 0){
      $(header).removeClass("l-main__fixed--active");
    }
  }
  var showMobileHeader = function(){
    var windowTop = window.scrollY;
    var header = $("#cb-js-pricing-mheader");
    var tab = $('[data-pricing-table = true]')[0];
    var tabStartOffset = tab.getBoundingClientRect().top - 100;
    var tabEndOffset = tab.getBoundingClientRect().top +tab.getBoundingClientRect().height;
    var activeCard = $(".cpr-card--active")[0];//only if any of the pricing cards is open
    // var tabContent = $(".cpr-tab__content--active").attr("id");//only if tabcontent is grow
    // if (activeCard && tabContent == "grow" && tabStartOffset < 0 && tabEndOffset > 0 && !$(header).hasClass("l-main__mfixed--active")) {
    if (activeCard && tabStartOffset < 0 && tabEndOffset > 0 && !$(header).hasClass("l-main__mfixed--active")) {
      $(header).addClass("l-main__mfixed--active");
    }
    else if($(header).hasClass("l-main__mfixed--active") && tabEndOffset < 0 || tabStartOffset > 0){
      $(header).removeClass("l-main__mfixed--active");
    }
  }
  var reset = function(){
    $("#cb-js-pricing-mheader").removeClass("l-main__mfixed--active");
    $("#cb-js-pricing-header").removeClass("l-main__fixed--active");
  }
  return {
    showHeader: showHeader,
    showMobileHeader: showMobileHeader,
    reset: reset
  }
})();
window.onscroll = function() {
  if (document.readyState === 'complete') {
    if (window.innerWidth > 992) {
      FixedHeaderLayout.showHeader();
    }
    else if(window.innerWidth < 992){
      FixedHeaderLayout.showMobileHeader();
    }
  }
};
window.onresize = function(){
  FixedHeaderLayout.reset();
}
