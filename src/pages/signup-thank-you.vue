<!-- ===========================================================================
// cb-title		=	Page Level Titles (Title, Twitter, OG)
// cb-desc		=	Page Level Descriptions (Description, Twitter, OG)
// cb-image		=	Page Level Images (Twitter, OG)
// cb-style		=	Page level External Styles
​
​
** External Styles and Scripts **
If you want to add multiple styles or scripts use comma(',') to seperate url's
​
// cb-head-script	=	Page Level Head Script. Using this tag to put head level scripts
// cb-body-script	=	Page Level Body Script. Using this tag to put Scripts in end of footer or above the </body> tag
// cb-has-noindex	=	Using this tag to add noindex, nofollow meta to head. Use "True" to enable this meta.
​

** Page Styles **
// Use <style> tag to include page level styles after the Page script

​
** Header and Footer **
// app-header 		=	App header will add header to the page. 
//                  Need a white header in page use :hasInvert="true" attribute
//                  Need a basic header(without menu's) in page use :hasBasicHeader="true" attribute
// app-footer 		=	App footer will add footer to the page.
​
If you want to remove header or footer. Remove the "app-header" or "app-footer" tag, script url and components in scripts.
============================================================================ -->
<!-- ===========================================================================
Start: Main Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Meta Section
        ==================================================================== -->
        <app-meta 
        :cb-title="'Thank You - Chargebee'" 
        :cb-desc="'Chargebee - Affordable Subscription Billing & Recurring Billing Solution for online web apps.'" 
        :cb-url="'/signup-thank-you/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/signup-thank-you.css'"
        :cb-head-script="''"
        :cb-body-script="''"
        :cb-has-noindex="true"
        :disable-bootstrap-css="false"
        :disable-header-footer-css="false" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ============================================================================-->
        <!-- Start: Main Content-->
        <!-- ============================================================================-->
        <section class="cw-status">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-1">
                <div class="cw-status__body">
                  <div class="cw-status__logo">
                    <img src="/static/website/version/images/product/common/creation.svg" width="48" class="img-responsive"/>
                  </div>
                  <p class="cw-status__title">
                    Fast-track your onboarding<br class="visible-lg"> with a kick-off call.
                  </p>
                  <p class="cw-status__desc">
                    Make the most of your 14-day free trial. Use your sandbox account to explore Chargebee and simulate your billing scenarios. We have a dedicated onboarding team to help fast-track your evaluation. We recommend that you leverage the expertise of the team to map your business requirements with the capabilities of Chargebee. 
                  </p>
                  <p>
                    <strong>
                      Pick a time slot and schedule your kick-off call.
                    </strong>
                  </p>
                  <p class="cw-status__desc">
                    We’re on the other side of the calendar. &#128522;
                  </p>
                  <a href="" class="cw-link cw-link--icon cw-client__domain">Take me to the app</a>
                </div>
                <div class="cw-status__footer">
                  <p class="cw-status__label">
                    <i>Choose a date and time that works best for you!</i>
                  </p>
                  <div class="cw-status__pointer hidden-xs hidden-sm">
                    <img src="/static/website/version/images/signup/arrow.svg" width="100" class="img-responsive"/>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-5">
                <div class="cw-clendly-form">
                    <div class="calendly-inline-widget"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- ============================================================================-->
        <!-- End: Main Content-->
        <!-- ============================================================================-->
        <cookie-banner />
    </div>
</template>
<!-- ===========================================================================
End: Main Template
============================================================================ -->
<!-- ===========================================================================
Start: Scripts Section
============================================================================ -->
<script>
import AppMeta from '~/components/AppMeta.vue';
import cookieBanner from '~/components/cookieBanner.vue';

export default {
    components: {
    'app-meta': AppMeta,
    'cookie-banner': cookieBanner
    },
    // jQuery methods/functions should be placed inside the methods
    methods: {},
    // jQuery interaction should be placed inside the mounted method
    mounted() {

        // ==============================================
        // Start : Bing Code
        // ==============================================
        (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"26029709"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
        // ==============================================
        // End : Bing Code
        // ==============================================

        // ==============================================
        // Start : Capterra Pixcel Code
        // ==============================================
        var capterra_vkey = '6a10cd5a8826facdd2fe4868c4d18ca4',
        capterra_vid = '2092486',
        capterra_prefix = (('https:' == document.location.protocol) ? 'https://ct.capterra.com' : 'http://ct.capterra.com');

        (function() {
          var ct = document.createElement('script'); ct.type = 'text/javascript'; ct.async = true;
          ct.src = capterra_prefix + '/capterra_tracker.js?vid=' + capterra_vid + '&vkey=' + capterra_vkey;
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ct, s);
        })();
        // ==============================================
        // End : Capterra Pixcel Code
        // ==============================================

        // ==============================================
        // Start : Crozdesk Pixcel Code
        // ==============================================
        (function() {
          var cdx = document.createElement('script'); cdx.type = 'text/javascript'; cdx.async = true;
          cdx.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'trk.crozdesk.com/_yhRjdSGfEA62e_o3HiY';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(cdx,s);
        })();
        // ==============================================
        // End : Crozdesk Pixcel Code
        // ==============================================
        
        // Current URL
        var url_string = window.location.href

        // Current URL Detailed
        var url = new URL(url_string);

        // Target URL
        var targetURL = url.searchParams.get("forward_url") ? url.searchParams.get("forward_url") : '';

        // URL Regx
        var urlRegx = /^(http[s]?:\/\/){0,1}(your-site){1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}(\/){1}/;

        // Get Current Host Name
        var currentHostName = url_string.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];

        // Check Is This same Host Name
        var isSameAsCurrentHost = targetURL.includes(currentHostName);

        // Target URL Should not be an empty and
        // Trarget URL Should be URL format and
        // Current Hostname & Target Hostname should be same
        if(targetURL && urlRegx.test(targetURL) && isSameAsCurrentHost){
          $('.cw-client__domain').attr('href',targetURL);
        }else{
          window.location.href = '/';
        }
        // Start Global site tag (gtag.js) - Google Ads: 979719580
        // gtag('event', 'conversion', {'send_to': 'AW-979719580/GMY6CLSasgoQnKuV0wM'});
        // End Global site tag (gtag.js) - Google Ads: 979719580

        // Start Facebook Pixcel Code
        // fbq('track', 'Lead');
        // End Facebook Pixcel Code
        
        // ==============================================
        //  LinkedIn -- Start
        // ==============================================
        var _linkedin_partner_id = "110245";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);

        (function(){var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);})();
        // ==============================================
        //  LinkedIn -- End
        // ==============================================


        // ==============================================
        // G2Crowd -- Start
        // ==============================================
        (function (c, p, d, u, id, i) {
          id = ''; // Optional Custom ID for user in your system
          u = 'https://tracking.g2crowd.com/attribution_tracking/conversions/' + c + '.js?p=' + encodeURI(p) + '&e=' + id;
          i = document.createElement('script');
          i.type = 'application/javascript';
          i.src = u;
          d.getElementsByTagName('head')[0].appendChild(i);
        }("650", document.location.href, document));
        // ==============================================
        // G2Crowd -- End
        // ==============================================


        // ==============================================
        // Quora Pixel -- Start
        // ==============================================
        !function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');
        qp('init', '2c6faad1e50943c68c9081580a82f288');
        qp('track', 'ViewContent');
        // ==============================================
        // Quora Pixel -- End
        // ==============================================


        // ==============================================
        // Reddit -- Start
        // ==============================================
        !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','t2_23ua4atm');rdt('track', 'PageVisit');
        // ==============================================
        // Reddit -- End
        // ==============================================


        // ==============================================
        // Start : Twitter universal website tag code
        // ==============================================
        !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
        a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
        // Insert Twitter Pixel ID and Standard Event data below
        twq('init','nyirm');
        twq('track','PageView');
        // ==============================================
        // End : Twitter universal website tag code
        // ==============================================


        // ==============================================
        // Start : Facebook Pixcel Code
        // ==============================================
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '281962545856882');
        fbq('track', 'PageView');
        // ==============================================
        // End : Facebook Pixcel Code
        // ==============================================
    }
}
</script>
<!-- ===========================================================================
End: Script Section
============================================================================ -->
