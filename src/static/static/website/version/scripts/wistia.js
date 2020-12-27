window.addEventListener('DOMContentLoaded', function () { 
    setTimeout(function(){  
        var vGallery = document.querySelector('.w-gallery-view__video-cards').children[0]; 
        var vButton = document.createElement("a");  
        vButton.textContent = "Take me to RevenueStory"; 
        vButton.classList.add('action-button'); 
        var vLink = window.location.search;  
        var urlParams = new URLSearchParams(vLink);
        const product = urlParams.get('forward_url') 
        if(product){  
            vGallery.appendChild(vButton);
            vButton.addEventListener('click', function(event){
                window.open(`https://${product}.revenuestory.io/`, '_blank');      
            })
        }    
        
        /*videos/revenuestory/how-risevision-uses-revenuestory */
        var bigButton = document.querySelector('.w-channel-big-button');
        var callToAction = document.createElement("a");  
        callToAction.textContent = "Take me to RevenueStory";  
        callToAction.classList.add('call-to-action'); 
        if(product){  
            bigButton.insertAdjacentElement('afterend',callToAction);      
            callToAction.addEventListener('click', function(event){  
                window.open(`https://${product}.revenuestory.io/`, '_blank');      
            })
        }  
        /*videos/revenuestory/how-risevision-uses-revenuestory */
    }, 1000)   
})




