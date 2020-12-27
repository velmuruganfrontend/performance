$(window).load(function() {
	// FIX PAGEtabs
	var pagePos = $('.cw-pagetabs').offset().top;

  function fixPageTabs() {
    if ($(window).scrollTop() > pagePos) {
      $('.cw-pagetabs').addClass('sticky')
    }
    else {
      $('.cw-pagetabs').removeClass('sticky')
    }
  }

  $(window).on('scroll',fixPageTabs);


  // OnClick Open -- Video
  if($('.cw-modal__video')) {
	  $('.cw-modal__video').click(function () {
	      var theModal = $(this).data("target"),
	    videoSRC = $(this).attr("data-video"),
	    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&autoplay=1";
	    $(theModal + ' iframe').attr('src', videoSRCauto);
	    $(theModal).click(function () {
	      $(theModal + ' iframe').attr('src', videoSRC);
	    });
	  });
  } 
})