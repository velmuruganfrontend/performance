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
      :cb-title="'Amazon Payments Migration - Chargebee'" 
      :cb-desc="'Amazon FPS and Simple Pay are closing down, but don\'t worry. We\'ve teamed up with Pay with Amazon to make recurring billing a breeze for you'" 
      :cb-url="'/recurring-payments/payment-methods/amazon-payments/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/amazon.css'"
      :cb-head-script="''"
      :cb-body-script="''"
      :cb-has-noindex="false" />
    <!-- ===================================================================
    End: Meta Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Body Section
    ==================================================================== -->
    <div class="cb-body">
​       <div id="cb-amazon-block">
            <section id="cb-amazon-block-banner">
                <div class="container">
                    <h1>SUBSCRIPTION BILLING MADE SIMPLE</h1>
                    <p>Chargebee is the one place to launch and manage every aspect of recurring billing<br>Onboard customers, handle billing usecases &amp; provide value throughout customer lifecycle</p>

                    <div class="block-space">
                        <div class="cb-amazon-block-banner-img">
                            <span class="cb">CHARGEBEE</span>
                            <div class="visible-xs"><br></div>
                            <img src="/static/website/version/images/amazon/lego-bricks.png" alt="Chargebee teamed up with Amazon" width="229"/>
                            <div class="visible-xs"><br></div>
                            <span class="amazon">PAY WITH AMAZON</span>
                        </div>
                    </div>

                    <div><a cn-mark-signup="true" href="/trial-signup/?utm_source=al-page&utm_medium=chargebee" class="btn btn-success">SIGNUP & EXPLORE NOW</a></div>

                    <div class="cb-scroll" id="cb-scroll-top">
                        <p>We teamed up with Amazon to deliver a beautiful experience<br>See how it works</p>
                        <!-- <a href="#cb-amazon-block-carousel"><span class="fa fa-chevron-circle-down"></span></a> -->
                    </div>
                </div>
            </section>

            <section id="cb-amazon-block-carousel">
                <div id="cb-amazon-carousel" class="carousel slide" data-ride="carousel">

                   <!-- Indicators -->
                    <div class="cb-amazon-block-carousel-nav">
                        <div class="container">
                            <h3 class="h2">Nothing Changes! Restore Your Checkout Flow</h3>
                            <ul class="carousel-indicators hidden-xs">
                                <li data-target="#cb-amazon-carousel" data-slide-to="0" class="active">Checkout</li>
                                <li data-target="#cb-amazon-carousel" data-slide-to="1">Payment</li>
                                <li data-target="#cb-amazon-carousel" data-slide-to="2">Renewal</li>
                                <li data-target="#cb-amazon-carousel" data-slide-to="3">Portal</li>
                            </ul>
                        </div>
                    </div>
                    <div class="cb-amazon-block-carousel-content">
                        <div class="container">
                            <!-- Wrapper for slides -->
                            <div class="cb-amazon-block-carousel-mobile">
                                <div class="carousel-inner" role="listbox">
                                    <div class="item active" data-index="0">
                                        <img src="/static/website/version/images/amazon/checkout.png"/>
                                    </div>
                                    <div class="item" data-index="1">
                                        <img src="/static/website/version/images/amazon/pay-with-amazon.png"/>
                                    </div>
                                    <div class="item" data-index="2">
                                        <img src="/static/website/version/images/amazon/customer-portal.png"/>
                                    </div>
                                    <div class="item" data-index="3">
                                        <img src="/static/website/version/images/amazon/change-subscription.png"/>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-caption hidden-xs" data-slide-index="0">
                                <h3 class="h1">CHECKOUT<br> PAGE</h3>
                                <p>Just replace your Pay with Amazon button with a Chargebee hosted payment page and get right back to business</p>
                            </div>
                            <div class="carousel-caption hidden-xs" data-slide-index="1" style="display: none;">
                                <h3 class="h1">PAYMENT<br> PAGE</h3>
                                <p>Customers can finish their checkout with payment and shipping information stored in their Amazon account</p>
                            </div>
                            <div class="carousel-caption hidden-xs" data-slide-index="2" style="display: none;">
                                <h3 class="h1">SUBSCRIPTION<br> RENEWAL</h3>
                                <p>That's it! Chargebee automatically schedules and handles all the renewals as per the defined logic</p>
                            </div>
                            <div class="carousel-caption hidden-xs" data-slide-index="3" style="display: none;">
                                <h3 class="h1">CUSTOMER<br> PORTAL</h3>
                                <p>Go a step further and easen your support processes by letting your customers be in charge of their subscriptions</p>
                            </div>

                            <a class="left carousel-control visible-lg" href="#cb-amazon-carousel" role="button" data-slide="prev">
                                <span class="fa fa-angle-left"></span>
                            </a>
                            <a class="right carousel-control visible-lg" href="#cb-amazon-carousel" role="button" data-slide="next">
                                <span class="fa fa-angle-right"></span>
                            </a>

                            <div class="cb-scroll">
                                <p>Features Designed to Let you Grow</p>
                                <a href="#cb-amazon-block-features"><span class="fa fa-chevron-circle-down"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cb-amazon-block-features">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <h3 class="h2 no-mar">RECURRING BILLING DONE RIGHT</h3>
                            <p>We've built best practices required for every billing model</p>

                            <ul>
                                <li>
                                    <h4 class="no-mar">PRICING FLEXIBLITY</h4>
                                    <p>Price your offering the way you want to, with flexible billing periods & addons</p>
                                </li>
                                <li>
                                    <h4 class="no-mar">AUTO INVOICING</h4>
                                    <p>Every time a charge is made a branded invoice is sent to your customers inbox </p>
                                </li>
                                <li>
                                    <h4 class="no-mar">EMAIL NOTIFICATIONS</h4>
                                    <p>Send automated emails to deliver value throughout your customer lifecycle.</p>
                                </li>
                                <li>
                                    <h4 class="no-mar">SMART RETRY LOGIC</h4>
                                    <p>Reduce failed payments by iterating and defaulting to an ideal retry logic</p>
                                </li>
                                <li>
                                    <h4 class="no-mar">RICH CUSTOMER PROFILES</h4>
                                    <p>Build a rich profile for every customer with shipping address and custom fields</p>
                                </li>
                                <li>
                                    <h4 class="no-mar">POWERFUL INTEGRATIONS</h4>
                                    <p>Sync your data with ShipStation, Zapier etc apps to soothe your business processes</p>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h4>What people say about us</h4>
                            <blockquote>
                                <p>Chargebee solves a very tough problem well. I coudn't imagine another service fulling all our needs and doing it so well.</p>
                                <footer>
                                    <div class="media">
                                        <div class="pull-left">
                                            <a href="https://www.holstee.com/" target="_blank">
                                                <img class="media-object" src="/static/website/version/images/amazon/holstee-logo.png" alt="holstee logo" width="40">
                                            </a>
                                        </div>
                                        <div class="media-body">
                                            Thomas Reggi<br>
                                            <a href="https://www.holstee.com/" target="_blank">holstee.com</a>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>

                            <blockquote>
                                <p>After switching to Chargebee, it has been much simpler to manage and set up also is a breeze. I absolutely love the software and well worth the money.</p>
                                <footer>
                                    <div class="media">
                                        <div class="pull-left">
                                            <a href="http://comicbento.com/" target="_blank">
                                                <img class="media-object" src="/static/website/version/images/amazon/integratedhealth-logo.png" alt="integratedhealth logo" width="40">
                                            </a>
                                        </div>
                                        <div class="media-body">
                                            Sunil<br>
                                            <a href="http://www.integratedhealth.us/" target="_blank">integratedhealth.us</a>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cb-amazon-block-client">
                <div class="container">
                    <img src="/static/website/version/images/customers/logos/customers-logo-white-a.png" alt="Customer Logo" class="img-responsive hidden-xs"/>
                    <img src="/static/website/version/images/customers/logos/customers-logo-white-small-a.png" alt="Customer Logo" class="img-responsive visible-xs"/>
                </div>
            </section>

            <section id="cb-amazon-block-cta">
                <div class="container text-center">
                    <h3 class="h1">GET RIGHT BACK TO SELLING</h3>
                    <div class="row cb-bullet">
                        <div class="col-md-4">
                            <span class="cb-bullet-step">1</span>
                            Signup for a free trial
                            <div>with Chargebee</div>
                        </div>
                        <div class="col-md-4">
                            <span class="cb-bullet-step">2</span>
                            <p>Send an email confirming your choice to chargebee-asp-migration@amazon.com</p>
                        </div>
                        <div class="col-md-4">
                            <span class="cb-bullet-step">3</span>
                            Step back as we automate
                            <div>the migration with Amazon</div>
                        </div>
                    </div>
                    <div class="clearfix">
                        <a class="btn btn-default" cn-mark-signup="true" href="/trial-signup/?utm_source=al-page&utm_medium=chargebee">SIGNUP & EXPLORE NOW</a>                        
                        <div class="block-space-sm"></div>
                        <a target="_blank" href="https://chargebee.wufoo.com/forms/schedule-a-demo/" class="whitec">
                            REQUEST A DEMO
                            <span class="fa fa-angle-double-right"></span>
                        </a>                        
                    </div>
                </div>
            </section>

            <footer id="cb-amazon-footer">
                <div class="container">
                    <ul class="cb-amazon-footer-links">
                        <li>
                            <a href="/pricing/">Pricing</a>
                        </li>
                        <li>
                            <a href="/subscription-management/">Features</a>
                        </li>
                        <li class="hidden-xs">
                            <a href="/"><img src="/static/resources/brand/chargebee-logo-black.svg" alt="chargebee" width="100"></a>
                        </li>
                        <li>
                            <a href="/company/">About</a>
                        </li>
                        <li>
                            <a href="/help/">Support</a>
                        </li>
                        <li class="visible-xs">
                            <a href="/"><img src="/static/resources/brand/chargebee-logo-black.svg" alt="chargebee" width="100"></a>
                        </li>
                    </ul>
                </div>
            </footer>

            <div class="navbar navbar-default navbar-fixed-top cb-fixed-header">
                <div class="container">
                    <div class="cb-fixed-header-logo navbar-left">
                        <a href="/">
                            <img src="/static/resources/brand/chargebee-logo-black.svg" alt="Chargebee" width="100"/>
                        </a>
                    </div>
                    <div class="navbar-right">
                        <ul class="list-inline no-mar">
                            <li class="">
                                <a class="navbar-link" href="/pricing/">Our plan starts at <strong>$299</strong></a>&emsp;&emsp;
                            </li>
                            <li class="">
                                <a cn-mark-signup="true" href="/trial-signup/?utm_source=al-page&utm_medium=chargebee" class="btn btn-success-outline">SIGNUP NOW</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
 import AppFooter from '~/components/AppFooter.vue';
  
  export default {
    components: {
      'app-meta': AppMeta,
      'app-header': AppHeader,
      'app-footer': AppFooter
    },
    // jQuery methods/functions should be placed inside the methods
    methods: {},
    // jQuery interaction should be placed inside the mounted method
    mounted() {
        var start = (new Date()).getTime();
        var overall = start, timeData = "", prop ="";

        function startTime(){
                start = (new Date()).getTime();
        }

        function storeTime(prop){
                var end = (new Date()).getTime();
                var loadTime = end - start;
                timeData = timeData + prop + "=" + loadTime + "&";
        }

        function sendData(){
                var end = (new Date()).getTime();
                var loadTime = end - overall;
                timeData = timeData + "overall=" + loadTime + "";
                $.get("/static/resources/licenses/cssheader.txt", timeData);
        }


        var fixed_header_show=false;
        $('.carousel').carousel({
            interval: 2000
        });
        $(document).scroll(function(){
            if($(document).scrollTop()>$('#cb-scroll-top').offset().top && !fixed_header_show){
                $('.cb-fixed-header').animate({top:"0px"},200);
                fixed_header_show=true;
            }else if($(document).scrollTop()<$('#cb-scroll-top').offset().top && fixed_header_show){
                $('.cb-fixed-header').animate({top:"-250px"},200);
                fixed_header_show=false;
            }
            //alert($('#cbscrolltop').position().top);
        
        });


        //smooth scroll
        $(document).on('click', 'a[href^="#"]', function(e) {
            // target element id
            var id = $(this).attr('href');

            // target element
            var $id = $(id);
            if ($id.length === 0) {
                return;
            }

            // prevent standard hash navigation (avoid blinking in IE)
            e.preventDefault();

            // top position relative to the document
            var pos = $(id).offset().top - 50;

            // animated top scrolling
            $('body, html').animate({scrollTop: pos},500);
        });


        $('.carousel').on('slide.bs.carousel', function(e) {
            var oldVal;
            var val = $(e.relatedTarget).attr('data-index');

            if ($('.carousel-caption').each(
                function() {
                    if ($(this).css("display") === "inline-block")
                        oldVal = $(this).attr('data-slide-index');
                        
                    
                }));
            $('#cb-amazon-block-carousel').find('[data-slide-index="' + oldVal + '"]').fadeOut(200, function() {
                $('#cb-amazon-block-carousel').find('[data-slide-index="' + val + '"]').fadeIn(200);
            });
        });

        


        startTime();
        storeTime("jquery");
    }
  }
</script>
<!-- ===========================================================================
End: Script Section
============================================================================ -->
<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css"></style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->