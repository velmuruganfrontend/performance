$(window).on('load', function(){
			$('body').scrollspy({ target: '#cj-scrollspy', offset: 50 });

			var movin = document.createElement("script");
			movin.type = "text/javascript";
			movin.src = "/static/website/version/scripts/movein-plugin.js";
			
			var animationHero = document.createElement("script");
			animationHero.type = "text/javascript";
			animationHero.src = "/static/website/version/scripts/hero-animation.js";
			
			var slickSlider = document.createElement("script");
			slickSlider.type = "text/javascript";
			slickSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js";

            var slickScript = document.createElement("script");
            slickScript.type = "text/javascript";
            var slickCodeSnippet = document.createTextNode(
				`$('.cj-slider__main').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 2000,
					arrows: false,
					dots: false,
					speed: 2000,
					pauseOnHover: false,
					responsive: [{
						breakpoint: 520,
						settings: {
							slidesToShow: 2
						}
					}]
				});
				$('.cj-medias').slick({
					initialSlide: 1,
					infinite: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					speed: 2000,
					centerMode: true,
  					centerPadding: '120px',
					pauseOnHover: false,
					responsive: [{
						breakpoint: 1200,
						settings: {
							centerPadding: '50px'
						}
					},{
						breakpoint: 992,
						settings: {
							centerPadding: '10px'
						}
                    }]
				});`
			);
			slickScript.appendChild(slickCodeSnippet);
			
			$("body").append(movin);
			function testMovin() {
				if (typeof lottie == 'object') {
					$("body").append(animationHero);
					window.clearInterval(movinInterval)
				}
			}
			var movinInterval = window.setInterval(testMovin, 300);

			$("body").append(slickSlider);

			function testSlick() {
				if (typeof $.fn.slick == 'function') {
					var targetSlider = $('.cj-medias');
					var activeSlider = '.slick-current';
					
					function addSlickCustomAnimation(){
                        targetSlider.find('.slick-slide').removeClass('cj-media--prev cj-media--next');
						targetSlider.find(activeSlider).prev('.slick-slide').addClass('cj-media--prev');
						targetSlider.find(activeSlider).next('.slick-slide').addClass('cj-media--next');
					}

                    // On Init
					targetSlider.on('init', function(){
						addSlickCustomAnimation()
						invokeAnimation()
					});
					
					$("body").append(slickScript);

					// After Change
					// targetSlider.on('afterChange', function(){
					// 	addSlickCustomAnimation()
                    // });
                    
					// On Click
					function invokeAnimation(){
						$('.slick-arrow').on('click', function(){
							addSlickCustomAnimation()
						})
					}
					
					$(window).on('resize orientationChange', function() {
						setTimeout(function(){
							invokeAnimation()
						}, 1000)
					});

					window.clearInterval(slickInterval)
				}
			}
			var slickInterval = window.setInterval(testSlick, 300);
			


			//For animation on scroll
            var $window           = $(window),
                win_height_padded = $window.height() * 1.1;
            function revealOnScroll() {
                var scrolled = $window.scrollTop(),
                    win_height_padded = $window.height() * 1.1;
                // Showed...
                $(".revealOnScroll:not(.animate)").each(function () {
					var $this     = $(this),
						offsetTop = $this.offset().top;
					if (scrolled + win_height_padded > offsetTop) {
						$this.addClass('animate ' + $this.attr('data-animate'));
					}
                });
            }
            $window.on('scroll', revealOnScroll);
})



/*Tab section fixed*/

document.addEventListener('scroll', function() { 
	 
	setInterval(() => {
		const tabLinks = document.querySelector('.cj-scrollspy__nav');
		const firstTabLink = [... tabLinks.children ];   
		firstTabLink.forEach(item => {
			let isThere = item.classList.contains('active');
			if(isThere === false){
				firstTabLink[0].classList.add('active'); 
			} 
		});   

		let original = [... document.querySelectorAll('.cj-scrollspy__nav .active')]
        let originalLen = original.length;  
        if(originalLen == 2){
			firstTabLink[0].classList.remove('active');  
		}

	}, 100);

}, false);


document.addEventListener('DOMContentLoaded', init);

function init(){
	let query = window.matchMedia("(min-width:992px)") 

	if(query.matches){ 
		document.addEventListener('scroll', function() { 
				let gradientColor = document.querySelector('.cj-blur-fixed')
				if(window.pageYOffset >= 1726 && window.pageYOffset <= 4262){ 
					gradientColor.classList.add('gradientfixed'); 
				}
				else{ 
					gradientColor.classList.remove('gradientfixed'); 
				}
		 })
	}
	else{}
}

/*Tab section fixed*/