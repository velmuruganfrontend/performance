// Scrollspy plugin is used in JD pages
var HighlightModel = (function() {
    var init = function() {
        var menu = document.querySelectorAll("[data-sidebar-fixed]")[0];
        menu.style['width'] = menu.parentElement.offsetWidth + "px";
    }
    var removeRepetition = function(){
        var tempItem = document.querySelectorAll(".cb-scrollspy__item--active");
        var tempContent = document.querySelectorAll(".cb-scrollspy__content--active");
        if (tempItem && tempContent && tempItem.length > 1 && tempContent.length > 1) {
            tempItem[0].classList.remove("cb-scrollspy__item--active");
            tempContent[0].classList.remove("cb-scrollspy__content--active");
        }
    }
    var highlightElements = function() {
        var sidebar = document.querySelectorAll("[data-sidebar-fixed]")[0];
        var menuItems = document.querySelectorAll("[data-sidebar-item]")[0].children;
        var content = document.querySelectorAll("[data-nav-content]")[0];
        var contentItems = document.querySelectorAll("[data-nav-content]")[0].children;
        var prev, count = 0;
        if (sidebar.classList.contains("cb-scrollspy__header--fixed")) {
            for (var i = contentItems.length - 1; i >= 0; i--) {
                var x1 = menuItems[i].getBoundingClientRect().top;
                var x2 = x1 + menuItems[i].offsetHeight;
                var y1 = contentItems[i].getBoundingClientRect().top;
                var y2 = y1 + contentItems[i].offsetHeight;
                var diff = x1 - y2;
                if (y1 <= x2 && diff <= y2) {
                    menuItems[i].classList.add("cb-scrollspy__item--active");
                    contentItems[i].classList.add("cb-scrollspy__content--active");
                } else {
                    menuItems[i].classList.remove("cb-scrollspy__item--active");
                    contentItems[i].classList.remove("cb-scrollspy__content--active");
                }
                removeRepetition();
            }
        } else {
            var tempItem = document.querySelectorAll(".cb-scrollspy__item--active");
            var tempContent = document.querySelectorAll(".cb-scrollspy__content--active");
            if (tempItem && tempContent && tempItem.length > 1 && tempContent.length > 1) {
                tempItem[tempItem.length-1].classList.remove("cb-scrollspy__item--active");
                tempContent[tempItem.length-1].classList.remove("cb-scrollspy__content--active");
            }
            menuItems[0].classList.add("cb-scrollspy__item--active");
            contentItems[0].classList.add("cb-scrollspy__content--active");
        }
    }
    return {
        init: init,
        highlightElements: highlightElements
    }
})();
window.onload = function() {
    if (document.readyState === 'complete') {
        if (window.innerWidth > 1024) {
            HighlightModel.init();
        }
    }
}
window.onscroll = function() {
    if (window.innerWidth > 1024) {
        var windowTop = window.scrollY;
        var container = document.querySelectorAll("[data-parent]")[0];
        var menu = document.querySelectorAll("[data-sidebar-fixed]")[0];
        var menuItem = document.querySelectorAll("[data-sidebar-item]")[0];
        var menuItemLast = menuItem.lastElementChild;
        var content = document.querySelectorAll("[data-nav-content]")[0];
        var contentItemLast = content.lastElementChild;
        var style = window.getComputedStyle(contentItemLast, null);
        var contentItemLastHeight = contentItemLast.offsetHeight - parseInt(style.getPropertyValue("padding-top"), 10);
        var endOffset = content.offsetTop + contentItemLast.offsetTop + contentItemLast.offsetHeight/2 - menuItemLast.offsetTop ;
        if (windowTop > container.offsetTop && windowTop < (container.offsetTop + endOffset) && !menu.classList.contains("cb-scrollspy__header--fixed")) {
            var diff = menu.parentElement.offsetTop - windowTop;
            diff = diff > 0 ? diff : -diff;
            menu.classList.add("cb-scrollspy__header--fixed");
            menu.style['width'] = menu.parentElement.offsetWidth + "px";
            menu.style['top'] = diff + "px";
        }
        else if((windowTop > (container.offsetTop + endOffset)) && menu.classList.contains("cb-scrollspy__header--fixed")){
            var diff = contentItemLast.getBoundingClientRect().top + contentItemLast.offsetHeight/2 - menuItemLast.offsetTop;
            menu.style['top'] =  diff + "px";
        }
        else if(windowTop < container.offsetTop && menu.classList.contains("cb-scrollspy__header--fixed")){
            menu.classList.remove("cb-scrollspy__header--fixed");
        }
        HighlightModel.highlightElements();
    }
};
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};
