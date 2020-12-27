// var cocHeroItem = [... document.querySelectorAll('.coc-hero-item')];
// cocHeroItem.forEach(function(items){
//     if (items.classList.contains('extradata')) { 
//         console.log('Yahhh! Class is found.');
//     } else {
        
//     }
// })


// for(var i = 0 ; i < cocHeroItem.length ; i++){
//        cocHeroItem[i].addEventListener('mouseover', function(){
//          var current = this;
//           current.classList.add('extradata') 
//        })
//        cocHeroItem[i].addEventListener('mouseout', function(){
//         var current = this;
//          current.classList.remove('extradata')
//       })
// }
 
    // setTimeout(function(){
    // var itemEight = `<div class="coc-hero-list item-eight-dynamic"><img src="./images/brian-kardon.png" alt="" class="img-responsive"><div class="moredata"><div class="data-parent"><p class="data-name">Brendan Schwartz 8</p><p class="data-logo">Wistia 8</p></div></div></div>`
    // var itemTwo = document.querySelector('.two');
    // var itemTwoInside = document.querySelector('.two .coc-hero-list');
    // itemTwoInside.style.display = 'none';
    // itemTwo.insertAdjacentHTML('afterbegin', itemEight);
    // }, 6000)  
     
    // setTimeout(function(){
    //     var itemNine = `<div class="coc-hero-list"><img src="./images/brian-kardon.png" alt="" class="img-responsive"><div class="moredata"><div class="data-parent"><p class="data-name">Brendan Schwartz 9</p><p class="data-logo">Wistia 9</p></div> </div></div>`
    //     var itemSix = document.querySelector('.six');
    //     var itemSixInside = document.querySelector('.six .coc-hero-list');
    //     itemSixInside.style.display = 'none';
    //     itemSix.insertAdjacentHTML('afterbegin', itemNine);
    // }, 10000)

    /*Onmouseover*/
    // var cocHeroItem = [... document.querySelectorAll('.coc-hero-item')]
    // cocHeroItem.forEach(function(item){
    //     var items = item 
    //     items.onmouseover = function(){
    //         var moreData = [... document.querySelectorAll('.moredata')]
    //         moreData.map(function(item){
    //             var items = item;
    //              items.classList.add('show')
    //           }) 
            
    //     }
     


    // var speakers = [
    //      {image: 'bill-macaitis.png', name: 'Vel', logo: 'bee'},
    //      {image: 'brendan-schwartz.png', name: 'Vel', logo: 'bee'},
    //      {image: 'tommi-forsstrom.png', name: 'Vel', logo: 'bee'},
    //      {image: 'brenden.png', name: 'Vel', logo: 'bee'},
    //      {image: 'mark-roberge.png', name: 'Vel', logo: 'bee'},
    //      {image: 'david-cancel.png', name: 'Vel', logo: 'bee'},
    //      {image: 'download.png', name: 'Vel', logo: 'bee'}, 
    //      {image: 'mark-roberge.png', name: 'Vel', logo: 'bee'},
    //      {image: '000000.png', name: 'Vel', logo: 'bee'},
    //      {image: '808080_.png', name: 'Vel', logo: 'bee'},
    //      {image: 'FFFFFF.png', name: 'Vel', logo: 'bee', alt:'last'}
    // ]

    // var speakerLen = speakers.length;
    
    // function getSpeakersContent(item){
    //     return `<div class="coc-hero-list">
    //     <img src="./images/${item.image}" alt="${item.alt}" class="img-responsive">
    //     <div class="moredata">
    //       <div class="data-parent">
    //           <p class="data-name">${item.name}</p>
    //           <p class="data-logo">${item.logo}</p> 
    //       </div>  
    //    </div>
    //   </div>`
    // }

    // speakers.forEach(function(item, index){
    //     if(index > 6){
    //         setTimeout(appendRandomSpeakers, 5000)
    //         return;
    //     }
    //    var appendData = getSpeakersContent(item)

    //    $('.coc-hero-speakers .coc-hero-item:nth-child('+(index+1)+')').html(appendData);
     
    // })


    // function getRandomArbitrary(min, max) {
    //     return Math.floor( Math.random() * (max - min) + min);
    // }
    // var currentSpeakers = 7;
    // function appendRandomSpeakers(){
    //   setInterval(() => {
    //       currentSpeakers+= 1;
    //       if(currentSpeakers > speakerLen){
    //           currentSpeakers = 1;
    //       }
    //       var appendData = getSpeakersContent(speakers[currentSpeakers - 1])
    //      console.log({ssss:getRandomArbitrary(0, speakerLen)})
    //      var itemNumber = getRandomArbitrary(0, speakerLen);
    //      itemNumber = itemNumber === 4 ? itemNumber + 1 : itemNumber; 
    //    $('.coc-hero-speakers .coc-hero-item:nth-child('+(itemNumber)+')').html(appendData); 
    //   }, 2000);
    // }



    /* Form Scripts */

    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
        if (window.hbspt) {
            $('.cb-hs__form').each(function(index){
                let randomSelector = 'cb-hs__form--'+index;
                let targetEle = '#'+randomSelector;
                $(this).attr('id', randomSelector)
                window.hbspt.forms.create({
                    portalId: "3732359",
                    formId: "ee21b36d-c107-4891-82f6-ecd7fa3f108e",
                    target: targetEle
                });
            })
        }
    });




// ==============================================
// Scroll animation for COC summit 
// ==============================================
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= $('.coc-panel').offset().top + $('.coc-panel').innerHeight() + 220) {
        $('.coc-session__item').each(function(i) {
    // The number at the end of the next line is how pany pixels you from the top you want it to activate.
            if ($(this).offset().top <= windscroll + 180) {
                $('.coc-cards .coc-card.active').removeClass('active');
                $('.coc-cards .coc-card').eq(i).addClass('active');

                $('.coc-session__list .coc-session__item.coc-session__item--active').removeClass('coc-session__item--active');
                $('.coc-session__list .coc-session__item').eq(i).addClass('coc-session__item--active');
            }
        });

    } else {

        $('.coc-cards .coc-card.active').removeClass('active');
        $('.coc-cards .coc-card:first').addClass('active');

        $('.coc-session__list .coc-session__item.coc-session__item--active').removeClass('coc-session__item--active');
        $('.coc-session__list .coc-session__item:first').addClass('coc-session__item--active');
    }

}).scroll();

// function getRandom(){
//     var classNames = ["coc-speaker--a", "coc-speaker--b", "coc-speaker--c", "coc-speaker--d", "coc-speaker--f", "coc-speaker--g", "coc-speaker--h", "coc-speaker--i"];
//     var randomElement = classNames[Math.floor(Math.random() * classNames.length)];
//     var randomClass = classNames[Math.floor(Math.random() * classNames.length)];
//     if(randomClass != randomElement){
//         $('.'+randomElement).addClass(randomClass).removeClass(randomElement);
//     }
// }

// setInterval(function(){
//     getRandom()
// }, 2000)

$('.coc-session__item').on('click', function(){
    var body = $("html, body");
    body.stop().animate({
        scrollTop: $(this).offset().top - 90
    }, 500, 'swing', function() { 
        // console.log("Finished animating");
    });
});


