var InvoiceModel = (function() {
    var flag = false;
    var tooltip = false;
    var backIconTootltip = false;
    // Adding event listeners for hovering actions
    var init = function() {
        var columns = document.querySelectorAll(".main .column");
        for (var i = 0; i < columns.length; i++) {
            var column = columns[i];
            column.setAttribute('onmouseenter', 'InvoiceModel.dimBackground(this)');
            column.setAttribute('onmouseleave', 'InvoiceModel.removeDimEffect(this)');
            column.setAttribute('onclick', 'InvoiceModel.focusCard(this)');
        }
        var contentCards = document.querySelectorAll(".display-next-card");
        for (var i = 0; i < contentCards.length; i++) {
            var contentCard = contentCards[i];
            contentCard.setAttribute('onmouseenter', 'InvoiceModel.hoverNextCard()');
            contentCard.setAttribute('onmouseleave', 'InvoiceModel.removeHoverCard()');
            contentCard.setAttribute('onclick', 'InvoiceModel.playAnimation()');
        }
    }
    var startAnimation = function() {
            document.querySelectorAll("body")[0].classList.remove("hide-overflow");
            var main = document.querySelectorAll(".main")[0];
            var perspective = document.querySelectorAll(".perspective")[0];
            // animate the logo to the top of the screen
            document.querySelectorAll(".intro")[0].classList.add("translate-top");
            setTimeout(function() {
                main.classList.add("initial");
                main.classList.add("mouse-events");
                perspective.classList.add("initial");
                setTimeout(function() {
                    main.classList.add("dim");
                    main.classList.add("animate");
                    perspective.classList.add("animate");
                    // Ripple effect animation starts 
                    var rows = document.querySelectorAll(".column");
                    for (var i = (rows.length - 1); i >= 0; i--) {
                        if (i == 0) {
                            rows[i].style.animationDelay = (0.1 * (rows.length - i)) + "s";
                            rows[i].classList.add("bounce");
                        } else {
                            rows[i].classList.add("slide");
                            rows[i].style.animationDelay = (0.1 * (rows.length - i)) + "s";
                        }
                    }
                    // Ripple effect animation ends 
                    document.querySelectorAll(".footer")[0].classList.add("visible");
                    document.querySelectorAll(".header")[0].classList.add("visible");
                    setTimeout(function() {
                        for (var i = (rows.length - 1); i >= 0; i--) {
                            if (i == 0) {
                                rows[i].classList.remove("bounce");
                            } else {
                                rows[i].classList.remove("slide");
                            }
                        }
                        main.classList.remove("dim");
                        main.classList.remove("mouse-events");
                        main.classList.add("preserve-animation");
                        setTimeout(function() {
                            if (!tooltip) {
                                document.querySelectorAll(".hint")[0].classList.add("enter-tooltip");
                                setTimeout(function() {
                                    document.querySelectorAll(".hint")[0].classList.add("exit-tooltip");
                                }, 5000);
                            }
                        }, 3000);

                        init();
                    }, 2000);
                }, 1000);
            }, 600);
        }
        // Trigger the animation on clicking enter 
    var keyDownTextField = function(e) {
            if (e.keyCode == 13 && !document.querySelectorAll(".intro")[0].classList.contains("translate-top")) {
                InvoiceModel.startAnimation();
            }
        }
        // Function to determine whether there are any active transitions 
    var whichTransitionEvent = function() {
        var t,
            el = document.createElement("fakeelement");

        var transitions = {
            "transition": "transitionend",
            "OTransition": "oTransitionEnd",
            "MozTransition": "transitionend",
            "WebkitTransition": "webkitTransitionEnd"
        }

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }

    // Mouse enter animation 
    var dimBackground = function(element) {
        flag = false;
        tooltip = true;
        element.classList.add("hover");
        var transitionEvent = whichTransitionEvent();
        $(element).one(transitionEvent,
            function(event) {
                flag = true;
            });
    }

    // Mouse leave animation 
    var removeDimEffect = function(element) {
            var transitionEvent = whichTransitionEvent();
            // remove hover effect once the transition ends
            $(element).one(transitionEvent,
                function(event) {
                    element.classList.remove("hover");
                });
            if (flag) {
                element.classList.remove("hover");
            }
        }
        //Hide the header and footer in perspective view
    var hideHeaderAndFooter = function() {
        document.querySelectorAll(".intro")[0].classList.remove("hide-title");
        document.querySelectorAll(".footer")[0].classList.add("visible");
        document.querySelectorAll(".footer")[0].style.animationDelay = "0s";
        document.querySelectorAll(".header")[0].classList.add("visible");
        document.querySelectorAll(".header")[0].style.animationDelay = "0s";
    }
    var reverseAnimation = function(element) {
        var main = document.querySelectorAll(".main")[0];
        var perspective = document.querySelectorAll(".perspective")[0];
        main.classList.remove("zoom-index");
        document.querySelectorAll(".show-pop-up")[0].classList.remove("show-pop-up");
        document.querySelectorAll(".back-icon")[0].classList.remove("enter-tooltip");
        document.querySelectorAll(".back-icon")[0].classList.add("exit-tooltip");
        hideHeaderAndFooter();

        // move the main view to the center
        main.classList.remove("zoom-out");
        main.removeAttribute("onclick");
        // deactivate the perspective view
        document.querySelectorAll(".perspective .column")[0].classList.remove("position");
        document.querySelectorAll(".perspective .column")[0].classList.remove("shadow");
        perspective.classList.add("animate");
        setTimeout(function() {
            perspective.classList.remove("index");
        }, 700);

    }

    // Functionality to be executed on clicking the invoice card 
    var focusCard = function(element) {
        // create the column of the perspective element on click of the card
        tooltip = true;
        var perspectiveElement = element.cloneNode(true);
        perspectiveElement.style.left = element.offsetLeft - 15 + "px";
        perspectiveElement.style.top = element.parentElement.offsetTop - 50 + "px";
        perspectiveElement.removeAttribute("onmouseenter");
        perspectiveElement.removeAttribute("onmouseleave");
        perspectiveElement.classList.remove("hover");
        perspectiveElement.setAttribute('onclick', 'InvoiceModel.reverseAnimation(this)');
        element.classList.remove("hover");
        var perspective = document.querySelectorAll(".perspective")[0];
        var node = document.querySelectorAll(".perspective .column")[0];
        if (node)
            node.remove();
        perspective.appendChild(perspectiveElement);
        perspective.classList.add("index");
        document.querySelectorAll(".perspective .column")[0].classList.add("shadow");
        perspective.classList.remove("animate");
        document.querySelectorAll(".perspective .column")[0].classList.add("position");
        // move the main view to the corner
        document.querySelectorAll(".main")[0].classList.add("zoom-out");
        setTimeout(function() {
            //add attibute to trigger the animation back to normal view on clicking of the zoomed-out main view
            document.querySelectorAll(".zoom-out")[0].setAttribute('onclick', 'InvoiceModel.startPlayBack()');
            document.querySelectorAll(".zoom-out")[0].classList.add("zoom-index");
        }, 500);
        document.querySelectorAll("." + element.getAttribute("id"))[0].style.top = document.querySelectorAll(".perspective .column")[0].offsetHeight + 150 + "px";
        document.querySelectorAll("." + element.getAttribute("id"))[0].classList.add("show-pop-up");
        if (document.querySelectorAll(".hint")[0].classList.contains("enter-tooltip")){
            document.querySelectorAll(".hint")[0].classList.add("exit-tooltip");
        }
        var backIcon = document.querySelectorAll(".back-icon")[0];
        if (backIcon.classList.contains("exit-tooltip"))
            backIcon.classList.remove("exit-tooltip");
        if (!backIconTootltip) {
            backIconTootltip = true;
            backIcon.classList.add("enter-tooltip");
        }
        document.querySelectorAll(".intro")[0].classList.add("hide-title");
        document.querySelectorAll(".footer")[0].classList.remove("visible");
        document.querySelectorAll(".header")[0].classList.remove("visible");

    }
    //function to triiger the animation back to normal view on clicking of the zoomed-out main view
    var startPlayBack = function() {
        var main = document.querySelectorAll(".main")[0];
        main.classList.remove("zoom-out");
        var column = document.querySelectorAll(".perspective .column")[0];
        reverseAnimation(column);
    }

    // Functionality to be executed on clicking the next navigation link 
    var playAnimation = function() {
        var main = document.querySelectorAll(".main")[0];
        main.classList.remove("zoom-index");
        main.removeAttribute("onclick");
        hideHeaderAndFooter();
        var column = document.querySelectorAll(".perspective .column")[0];
        if (column == undefined) {
            var toBeAnimated = document.querySelectorAll(".main .column")[0];
            focusCard(toBeAnimated);
        } else {
            // predict the next element that is to be animated
            var flag = false;
            var name = column.getAttribute("id").split("-")[0];
            name = name.slice(1);
            var toBeAnimated = document.querySelectorAll(".main .column")[Number(name)];
            toBeAnimated.classList.remove("hover");
            if (column != undefined && !column.parentElement.classList.contains("animate")) {
                reverseAnimation(column);
                flag = true;
            }
            if (toBeAnimated != undefined && flag) {
                setTimeout(function() {
                    focusCard(toBeAnimated);
                }, 700);
            } else if (toBeAnimated != undefined && !flag) {
                focusCard(toBeAnimated);
            }
        }
    }

    // Enhance the next card that has to be shown on hovering the next navigation link
    var hoverNextCard = function() {
        var column = document.querySelectorAll(".perspective .column")[0];
        var name = column.getAttribute("id").split("-")[0];
        name = name.slice(1);
        var toBeAnimated = document.querySelectorAll(".main .column")[Number(name)];
        toBeAnimated.classList.add("hover");
    }

    // Remove the next card enhancement on mouse leave action of the next navigation link
    var removeHoverCard = function() {
            var column = document.querySelectorAll(".perspective .column")[0];
            var name = column.getAttribute("id").split("-")[0];
            name = name.slice(1);
            var toBeAnimated = document.querySelectorAll(".main .column")[Number(name)];
            toBeAnimated.classList.remove("hover");
        }
        //Trigger the reverse animation on click of back icon
    var triggerReverAnimation = function() {
        var column = document.querySelectorAll(".perspective .column")[0];
        reverseAnimation(column);
    }
    return {
        startAnimation: startAnimation,
        hoverNextCard: hoverNextCard,
        removeHoverCard: removeHoverCard,
        playAnimation: playAnimation,
        startPlayBack: startPlayBack,
        focusCard: focusCard,
        reverseAnimation: reverseAnimation,
        dimBackground: dimBackground,
        removeDimEffect: removeDimEffect,
        keyDownTextField: keyDownTextField,
        triggerReverAnimation: triggerReverAnimation
    }


})();

window.onload = function() {
    document.addEventListener("keydown", InvoiceModel.keyDownTextField, false);
    document.querySelectorAll("#start-exploring")[0].addEventListener("click", function(event) {
        InvoiceModel.startAnimation();
    });
};
