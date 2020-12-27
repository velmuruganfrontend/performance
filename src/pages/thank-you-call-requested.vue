<!-- ===========================================================================
// cb-title     =   Page Level Titles (Title, Twitter, OG)
// cb-desc      =   Page Level Descriptions (Description, Twitter, OG)
// cb-image     =   Page Level Images (Twitter, OG)
// cb-style     =   Page level External Styles
​
​
** External Styles and Scripts **
If you want to add multiple styles or scripts use comma(',') to seperate url's
​
// cb-head-script   =   Page Level Head Script. Using this tag to put head level scripts
// cb-body-script   =   Page Level Body Script. Using this tag to put Scripts in end of footer or above the </body> tag
// cb-has-noindex   =   Using this tag to add noindex, nofollow meta to head. Use "True" to enable this meta.
​

** Page Styles **
// Use <style> tag to include page level styles after the Page script

​
** Header and Footer **
// app-header       =   App header will add header to the page. Need a white header in page use :hasInvert="true" attribute
// app-footer       =   App footer will add footer to the page.
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
            :cb-title="'Get a Free Demo of Chargebee\'s Recurring Billing Automation'"
            :cb-desc="'Request a demo to find out how Chargebee lets you automate routine tasks, manage subscriptions at scale and access metrics that matter.'"
            :cb-url="'/thank-you-call-requested/'"
            :cb-image="''"
            :cb-style="'/static/website/version/styles/schedule-a-demo-v1.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="true" />
            <!-- /static/website/version/scripts/intlTelInput.js -->
        <!-- ===================================================================
		End: Meta Section
		==================================================================== -->
        <app-header :hasInvert="false" />
        <!-- ===================================================================
		Start: Body Section
		==================================================================== -->
        <app-body>
            <div class="cc-thankyou" style="display: block;">
                <div class="cc-thankyou__header">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                <img src="/static/website/version/images/product/common/creation.svg" width="39" alt="" class="img-responsive cc-thankyou__logo" />
                                <h2 class="cc-thankyou__title">
                                    Thanks for scheduling a call with us.
                                </h2>
                                <p class="cc-thankyou__desc">
                                    Our product expert team will be reaching out to you to learn about your subscription billing requirements and suggest the best way to solving those with Chargebee.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cc-thankyou__footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                                <p class="cc-thankyou__desc" style="font-weight: 500;">
                                    Join 1000+ Customers who use Chargebee
                                </p>
                                <ul class="cc-customer__list">
                                    <li class="cc-customer__item">
                                        <img src="/static/website/version/images/case-study/codacy-logo-black.svg" width="120" alt="" class="img-responsive" />
                                    </li>
                                    <li class="cc-customer__item">
                                        <img src="/static/website/version/images/compare-competitors/logos/livestorm-logo-black.svg" width="110" alt="" class="img-responsive" />
                                    </li>
                                    <li class="cc-customer__item">
                                        <img src="/static/website/version/images/compare-competitors/logos/freshworks-logo-black.png" width="120" alt="" class="img-responsive" />
                                    </li>
                                    <li class="cc-customer__item">
                                        <img src="/static/website/version/images/compare-competitors/logos/riddle-logo-black.svg" width="100" alt="" class="img-responsive" />
                                    </li>
                                    <li class="cc-customer__item">
                                        <img src="/static/website/version/images/compare-competitors/logos/doodle-logo-black.svg" width="85" alt="" class="img-responsive" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </app-body>
        <!-- ===================================================================
		End: Body Section
		==================================================================== -->
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
    import AppHeader from '~/components/AppHeader.vue';
    const axios = require('axios');
    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader
        },
        mounted() {
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
<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css">
    div.cc-thankyou__container {
        grid-template-columns: 1fr;
    }
    .cc-thankyou__desc{
        max-width: 520px;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
    }
    .cc-thankyou__footer {
        background: #EEF0F2;
        padding: 80px 0;
        margin-top: 80px;
    }
    @media (min-width: 768px) {
        .cc-customer__list,.cc-thankyou__desc,.cc-thankyou__title{
            text-align: center;
        }
        .cc-thankyou__logo{
            margin-left: auto;
            margin-right: auto;
        }
        .cc-thankyou__footer {
            padding: 120px 0;
            margin-top: 120px;
        }
    }
    @media (min-width: 992px){
        .cc-thankyou {
            margin-bottom: 0;
        }
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
