var imgOne;
var imgTwo; 
var imgThree;

var categoryOne = document.querySelector('#category-one');
categoryOne.addEventListener('click', function(){
    imgOne = document.querySelector('#img-one'); 
    imgTwo = document.querySelector('#img-two'); 
    imgThree = document.querySelector('#img-three');
    imgOne.style.cssText = "display:block";  
    imgTwo.style.cssText = "display:none"; 
    imgThree.style.cssText = "display:none"; 
    var startingUp = document.querySelector('#startingup');
    startingUp.style.cssText = "padding-top:150px";  
})

var categoryTwo = document.querySelector('#category-two'); 
categoryTwo.addEventListener('click', function(e){
    imgOne = document.querySelector('#img-one'); 
    imgTwo = document.querySelector('#img-two'); 
    imgThree = document.querySelector('#img-three');
    imgOne.style.cssText = "display:none"; 
    imgTwo.style.cssText = "display:block";  
    imgThree.style.cssText = "display:none"; 
})

var categoryThree = document.querySelector('#category-three');
categoryThree.addEventListener('click', function(){
    imgOne = document.querySelector('#img-one'); 
    imgTwo = document.querySelector('#img-two'); 
    imgThree = document.querySelector('#img-three');
    imgOne.style.cssText = "display:none"; 
    imgTwo.style.cssText = "display:none"; 
    imgThree.style.cssText = "display:block"; 
})


var categoryOnee = document.querySelector("#category-onee");
categoryOnee.addEventListener('click', function(){
    imgOne = document.querySelector('#img-one'); 
    imgTwo = document.querySelector('#img-two'); 
    imgThree = document.querySelector('#img-three');
    imgOne.style.cssText = "display:block";  
    imgTwo.style.cssText = "display:none"; 
    imgThree.style.cssText = "display:none"; 
    var startingUp = document.querySelector('#startingup');
    startingUp.style.cssText = "padding-top:150px"; 

})

var categoryTwoo = document.querySelector("#category-twoo"); 
categoryTwoo.addEventListener('click', function(){ 
    imgOne = document.querySelector('#img-one'); 
    imgTwo = document.querySelector('#img-two'); 
    imgThree = document.querySelector('#img-three');
    imgTwo.style.cssText = "display:block"; 
    imgOne.style.cssText = "display:none";  
    imgThree.style.cssText = "display:none"; 
})

var categoryThreee = document.querySelector("#category-threee"); 
categoryThreee.addEventListener('click', function(){  
    imgOne = document.querySelector('#img-one'); 
    imgTwo = document.querySelector('#img-two'); 
    imgThree = document.querySelector('#img-three');
    imgThree.style.cssText = "display:block";    
    imgOne.style.cssText = "display:none";  
    imgTwo.style.cssText = "display:none";
}) 




setInterval(function(){ 
    var scrollOne = document.getElementById('scroll-one'); 
    var scrollTwo = document.getElementById('scroll-two');
    var scrollThree = document.getElementById('scroll-three');

    if ( scrollOne.classList[1] === "active"){    
        imgOne = document.querySelector('#img-one'); 
        imgTwo = document.querySelector('#img-two'); 
        imgThree = document.querySelector('#img-three');
        imgOne.style.cssText = "display:block";  
        imgTwo.style.cssText = "display:none";  
        imgThree.style.cssText = "display:none";   
    }
    if ( scrollTwo.classList[1] === "active"){    
        imgOne = document.querySelector('#img-one'); 
        imgTwo = document.querySelector('#img-two'); 
        imgThree = document.querySelector('#img-three');
        imgOne.style.cssText = "display:none";  
        imgTwo.style.cssText = "display:block";  
        imgThree.style.cssText = "display:none";    
    }
    if ( scrollThree.classList[1] === "active"){    
        imgOne = document.querySelector('#img-one'); 
        imgTwo = document.querySelector('#img-two'); 
        imgThree = document.querySelector('#img-three');
        imgOne.style.cssText = "display:none";  
        imgTwo.style.cssText = "display:none"; 
        imgThree.style.cssText = "display:block";    
    }
 }, 100);    


