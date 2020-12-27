$( document ).ready(function() {
    // Current URL
    var url_string = window.location.href

    // Current URL Detailed
    var url = new URL(url_string);

    // Target URL
    var targetURL = url.searchParams.get("forward_url") ? url.searchParams.get("forward_url") : '';

    // Target URL Should not be an empty and
    if(targetURL){
        var isCalendlyURL = targetURL.indexOf("calendly.com");
        var isThisAppURL = targetURL.indexOf("chargebee.com");
        if(isCalendlyURL > -1){
            targetURL = targetURL.replace('<u>', '');
            targetURL = targetURL.replace('</u>', '');
            $('.dynamicValue').attr('href',targetURL);
        }
        if(isThisAppURL > -1){
            $('.dynamicValue').attr('href',targetURL);
        }
    }
});