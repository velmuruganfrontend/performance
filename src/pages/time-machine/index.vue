<template>
    <div>
        <app-meta 
            :cb-title="'Simulate your Subscription Lifecycle with Chargebee\'s Time Machine'" 
            :cb-desc="'Chargebee\’s Time Machine lets you test your billing and subscription workflows with ease. Hop onto the DeLorean and give our Time Machine a spin.'" 
            :cb-url="'/time-machine/'" 
            :cb-image="'/static/resources/og/time-machine/time-machine.png'"
            :cb-style="'/static/website/version/styles/main.css,/static/website/version/styles/timemachine.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="true" />
        <div class="cb-body">
            <!-- =========================================================================================
            Content Part Start 
            ========================================================================================== -->
            <main class="l-main">
                <!-- =====================================================================================
                Banner Part Start 
                ====================================================================================== -->
                <section class="l-main__banner">
                    <div class="container">
                        <div class="row">
                            <!-- =========================================================================
                            Title Part Start 
                            ========================================================================== -->
                            <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                <div class="cb-hero cb-hero--tm cb-hero--center">
                                    <h1 class="cb-hero__title animate fadeInDown">
                                        Does your billing system work<br class="visible-lg"> exactly as you intend it to?
                                    </h1>
                                    <p class="cb-hero__desc">
                                        Testing a future action is almost impossible. We faced this issue too. So we fixed it.
                                    </p>
                                    <div class="cb-divider"></div>
                                    <div class="cb-hero__figure">
                                        <img src="/static/website/version/images/time-machine/cb-timemachine.svg" width="740" alt="" class="img-responsive">      
                                    </div>
                                </div>
                            </div>
                            <!-- =========================================================================
                            Title Part end 
                            ========================================================================== -->
                        </div>
                    </div>
                </section>
                <div class="l-main__bg">
                    <img src="/static/website/version/images/time-machine/cb-timemachine.png" alt="" class="img-responsive"> 
                </div>
                <div class="cb-divider cb-divider--dark cb-divider--dark-lg"></div>
                <!-- =====================================================================================
                Banner Part end 
                ====================================================================================== -->
                <!-- =====================================================================================
                Content Part Start 
                ====================================================================================== -->
                <section class="l-main__content">
                <!-- =====================================================================================
                Left text right image start
                ====================================================================================== -->
                    <div class="l-main__row">
                        <div class="container">
                            <!-- =========================================================================
                            Article start
                            ========================================================================== -->
                            <div class="row">
                                <!-- =========================================================================
                                Article list start
                                ========================================================================== -->
                                <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                    <div class="cb-article cb-article--lg cb-article--center">
                                        <h2 class="cb-article__title">
                                            The Subscription Time Machine lets you instantly test and visualize scheduled subscription behavior 
                                        </h2>
                                        <div style="margin-bottom: 100px;">
                                            <a cn-mark-signup="true" href="/trial-signup/" class="cb-btn cb-btn--lg cb-btn--primary cb-btn--shadow cb-btn--suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">
                                                <strong style="text-transform: uppercase;">Sign up for free</strong>
                                            </a>
                                        </div>
                                        <p class="cb-article__desc" style="max-width: 500px; margin: 0 auto">
                                            Say you want to bill your customers on the <br class="visible-lg"><strong>9th of every month</strong>, irrespective of when they sign up. Worried about double invoicing or proration? Test your configuration in seconds. 
                                        </p>
                                    </div>
                                </div>
                                <!-- =========================================================================
                                Article list end
                                ========================================================================== -->
                            </div>
                            <!-- =========================================================================
                            Article End
                            ========================================================================== -->
                        </div>
                        <div class="cb-divider cb-divider--dark" style="max-height: 120px;"></div>
                    </div>
                <!-- =====================================================================================
                Left text right image End
                ====================================================================================== -->
                <!-- =====================================================================================
                right text left image start
                ====================================================================================== -->
                    <div class="l-main__row">
                        <div class="container">
                            <!-- =========================================================================
                            Article start
                            ========================================================================== -->
                            <div class="row">
                                <!-- =========================================================================
                                Article list start
                                ========================================================================== -->
                                <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
                                    <div class="cb-article cb-article--center">
                                        <div class="cb-article__label">1</div>
                                        <h2 class="cb-article__subtitle">
                                            Select your billing date
                                        </h2>
                                        <p class="cb-article__subdesc">
                                            Pick a date when you want to bill your customers, and configure your proration rules.
                                        </p>

                                        <div class="cb-article__img revealOnScroll" data-animate='fadeInUp'>
                                            <img src="/static/website/version/images/time-machine/cb-billing-date.png" alt="" class="img-responsive" width="650"> 
                                        </div>
                                    </div>
                                </div>
                                <!-- =========================================================================
                                Article list end
                                ========================================================================== -->
                            </div>
                            <!-- =========================================================================
                            Article End
                            ========================================================================== -->
                        </div>
                        <div class="cb-divider cb-divider--dark" style="max-height: 120px;"></div>
                    </div>
                <!-- =====================================================================================
                right text left image End
                ====================================================================================== -->
                <!-- =====================================================================================
                Center text image start
                ====================================================================================== -->
                    <div class="l-main__row">
                        <div class="container">
                            <!-- =========================================================================
                            Article start
                            ========================================================================== -->
                            <div class="row">
                                <!-- =========================================================================
                                Article list start
                                ========================================================================== -->
                                <div class="col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1">
                                    <div class="cb-article cb-article--center">
                                        <div class="cb-article__label">2</div>
                                        <h2 class="cb-article__subtitle">
                                            Create subscriptions and simulate
                                        </h2>
                                        <p class="cb-article__subdesc">
                                            Create subscriptions across different states, different dates, different customers.
                                        </p>

                                        <div class="cb-article__img">
                                            <img src="/static/website/version/images/time-machine/cb-subscriptions-desktop.png" alt="" width="1000" class="img-responsive hidden-xs hidden-sm"> 

                                            <img src="/static/website/version/images/time-machine/cb-subscriptions-mobile.png" alt="" class="img-responsive visible-xs visible-sm"> 

                                            <div class="row" style="margin-top: 20px;">
                                                <div class="col-sm-12">
                                                    <div class="revealOnScroll" data-animate='fadeInRight'>
                                                        <img src="/static/website/version/images/time-machine/cb-subcard-desktop.png" alt=""  class="img-responsive hidden-xs hidden-sm">

                                                        <img src="/static/website/version/images/time-machine/cb-subcard-mobile.png" alt=""  class="img-responsive visible-xs visible-sm">
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <!-- =========================================================================
                                Article list end
                                ========================================================================== -->
                            </div>
                            <!-- =========================================================================
                            Article End
                            ========================================================================== -->
                        </div>
                        <div class="cb-divider cb-divider--dark" style="max-height: 120px;"></div>
                    </div>
                <!-- =====================================================================================
                Center text image End
                ====================================================================================== -->
                <!-- =====================================================================================
                Center text image start
                ====================================================================================== -->
                    <div class="l-main__row">
                        <div class="container">
                            <!-- =========================================================================
                            Article start
                            ========================================================================== -->
                            <div class="row">
                                <!-- =========================================================================
                                Article list start
                                ========================================================================== -->
                                <div class="col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1">
                                    <div class="cb-article cb-article--center">
                                        <div class="cb-article__label">3</div>
                                        <h2 class="cb-article__subtitle">
                                            Run the Subscription Time Machine
                                        </h2>
                                        <p class="cb-article__subdesc">
                                            Move the Subscription Time Machine to a future date, <br class="visible-lg">sit back, and relax.
                                        </p>

                                        <div class="cb-article__img">
                                            <img src="/static/website/version/images/time-machine/cb-runtimeline-desktop.png" alt="" class="img-responsive hidden-xs hidden-sm" width="1000"> 

                                            <img src="/static/website/version/images/time-machine/cb-runtimeline-mobile.png" alt="" class="img-responsive visible-xs visible-sm" width="1000"> 

                                            
                                            <div style="max-width: 400px; margin: 40px auto 0;">
                                                <img src="/static/website/version/images/time-machine/cb-delorean.gif" alt=""  class="img-responsive" width="400">
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <!-- =========================================================================
                                Article list end
                                ========================================================================== -->
                            </div>
                            <!-- =========================================================================
                            Article End
                            ========================================================================== -->
                        </div>
                        <div class="cb-divider cb-divider--dark" style="max-height: 120px;"></div>
                    </div>
                <!-- =====================================================================================
                Center text image End
                ====================================================================================== -->
                <!-- =====================================================================================
                Center text image start
                ====================================================================================== -->
                    <div class="l-main__row">
                        <div class="container">
                            <!-- =========================================================================
                            Article start
                            ========================================================================== -->
                            <div class="row">
                                <!-- =========================================================================
                                Article list start
                                ========================================================================== -->
                                <div class="col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1">
                                    <div class="cb-article cb-article--center">
                                        <div class="cb-article__label">4</div>
                                        <h2 class="cb-article__subtitle">
                                            Observe the changes
                                        </h2>
                                        <p class="cb-article__subdesc">
                                            Watch subscription and invoice changes unravel themselves, as the Subscription Time Machine works its magic
                                        </p>

                                        <div class="cb-article__img revealOnScroll" data-animate='fadeInRight'>
                                            <img src="/static/website/version/images/time-machine/cb-changes-desktop.png" alt="" width="800" class="img-responsive hidden-xs"> 
                                            <img src="/static/website/version/images/time-machine/cb-changes-mobile.png" alt="" class="img-responsive visible-xs"> 
                                        </div>
                                    </div>
                                </div>
                                <!-- =========================================================================
                                Article list end
                                ========================================================================== -->
                            </div>
                            <!-- =========================================================================
                            Article End
                            ========================================================================== -->
                        </div>
                    </div>
                <!-- =====================================================================================
                Center text image End
                ====================================================================================== -->
                <!-- =====================================================================================
                Center text image start
                ====================================================================================== -->
                    <div class="l-main__row">
                        <div class="container">
                            <!-- =========================================================================
                            Article start
                            ========================================================================== -->
                            <div class="row">
                                <!-- =========================================================================
                                Article list start
                                ========================================================================== -->
                                <div class="col-sm-6 col-sm-offset-3 col-md-5 col-md-offset-6">
                                    <div class="cb-article">
                                        <h2 class="cb-article__subtitle">
                                            What can you do with the Subscription Time Machine?
                                        </h2>
                                        <ul class="cb-article__list" style="max-width: 360px">
                                            <li class="cb-article__item">
                                                Test billing integration code with Chargebee’s APIs and webhooks.
                                            </li>
                                            <li class="cb-article__item">
                                                Simulate simple as well as complex billing rules across your subscription lifecycle.
                                            </li>
                                            <li class="cb-article__item">
                                                Train your team on how Chargebee works to handle your billing and subscriptions.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- =========================================================================
                                Article list end
                                ========================================================================== -->
                            </div>
                            <!-- =========================================================================
                            Article End
                            ========================================================================== -->
                        </div>
                    </div>
                <!-- =====================================================================================
                Center text image End
                ====================================================================================== -->
                <!-- =====================================================================================
                Center text image start
                ====================================================================================== -->
                    <div class="l-main__row">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-9 col-md-7 col-lg-5">
                                     <h2 class="cb-article__subtitle" style="opacity: 0.7; font-weight: normal;">
                                        Test more scenarios with the <br class="visible-lg"> Subscription Time Machine:
                                    </h2>
                                </div>
                            </div>
                            <!-- =========================================================================
                            Article start
                            ========================================================================== -->
                            <div class="row">
                                <!-- =========================================================================
                                Article list start
                                ========================================================================== -->
                                <div class="col-sm-5">
                                    <div class="cb-article" style="margin-top: 60px;">
                                        <ul class="cb-article__list cb-article__list--arrow">
                                            <li class="cb-article__item">
                                                <div class="cb-article__item-title">Changes in Subscription State</div>
                                                <div>Trials to Activations, Renewals to Cancellations, you can test if subscription states change correctly over time. </div>
                                            </li>
                                            <li class="cb-article__item">
                                                <div class="cb-article__item-title">Configurable Billing and Proration Rules</div>
                                                <div>Evaluate billing configurations, subscription alignment, charges and proration, invoice generation, and more.</div>
                                            </li>
                                            <li class="cb-article__item">
                                                <div class="cb-article__item-title">Dunning Management</div>
                                                <div>Assess timely payment retries and contextual retry emails, for every failed attempt to charge a card.</div>
                                            </li>
                                            <li class="cb-article__item">
                                                <div class="cb-article__item-title">Invoice and Credit Actions</div>
                                                <div>Is the right invoice generated at the right time? Check if the invoice state changes correctly during various events.</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-sm-offset-1" style="margin-top: 60px;">
                                    <div class="revealOnScroll" data-animate='fadeInRight'>
                                        <img src="/static/website/version/images/time-machine/cb-tm-include-desktop.png" alt="" width="600" class="img-responsive hidden-xs hidden-sm"> 
                                        <img src="/static/website/version/images/time-machine/cb-tm-include-mobile.png" alt="" class="img-responsive visible-xs visible-sm" width="400"> 
                                    </div>
                                </div>
                                <!-- =========================================================================
                                Article list end
                                ========================================================================== -->
                            </div>
                            <!-- =========================================================================
                            Article End
                            ========================================================================== -->
                        </div>
                    </div>
                <!-- =====================================================================================
                Center text image End
                ====================================================================================== -->
                <!-- =====================================================================================
                Center text image start
                ====================================================================================== -->
                    <div class="l-main__row l-main__row--lg">
                        <div class="container">
                            <!-- =========================================================================
                            Article start
                            ========================================================================== -->
                            <div class="row">
                                <!-- =========================================================================
                                Article list start
                                ========================================================================== -->
                                <div class="col-sm-8 col-sm-offset-1 col-md-6 col-md-offset-1">
                                    <div class="cb-testimonial">
                                        <div class="cb-testimonial__content">
                                            It was great for development and testing aspects such as trial ending and charges declined, how the invoice looks during different times, what happens when customers are no longer eligible for free trials, etc., to verify that it was doing as expected.
                                        </div>
                                        <div class="cb-testimonial__footer">
                                            <div class="cb-testimonial__author">Jon Gabrielson</div>
                                            <div class="cb-testimonial__role">Systems Admin, Direct Freight</div>
                                        </div>
                                    </div>
                                </div>
                                <!-- =========================================================================
                                Article list end
                                ========================================================================== -->
                            </div>
                            <!-- =========================================================================
                            Article End
                            ========================================================================== -->
                        </div>
                    </div>
                <!-- =====================================================================================
                Center text image End
                ====================================================================================== -->
                <!-- =====================================================================================
                Left footer start
                ====================================================================================== -->
                    <div class="l-main__row l-main__row--lg">
                        <div class="container">
                            <!-- =========================================================================
                            Article start
                            ========================================================================== -->
                            <div class="row">
                                <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                    <div class="cb-hero cb-hero--alt cb-hero--center">
                                        <h2 class="cb-hero__title">
                                            Your billing component should not embarrass you. It should work. <br class="visible-lg">Under any circumstance. At any time.
                                        </h2>
                                        <p class="cb-hero__desc">
                                            Get into the DeLorean and give our Subscription Time Machine a spin
                                        </p>

                                        <div style="margin-top: 60px;">
                                            <div>
                                                <a cn-mark-signup="true" href="/trial-signup/" class="cb-btn cb-btn--lg cb-btn--primary cb-btn--shadow cb-btn--suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">
                                                    <strong style="text-transform: uppercase;">Sign up for free</strong>
                                                </a>
                                            </div>
                                            <div style="font-size: 18px; margin-top: 12px; display: inline-block;">
                                                <a href="https://www.chargebee.com/docs/time-machine.html" target="_blank">Learn more →</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- =========================================================================
                            Article End
                            ========================================================================== -->
                        </div>
                    </div>
                <!-- =====================================================================================
                Left footer End
                ====================================================================================== -->
                </section>
                <!-- =====================================================================================
                Content Part end 
                ====================================================================================== -->
            </main>
            <!-- =====================================================================================
            Body Part end 
            ====================================================================================== -->
        </div>
        <app-footer></app-footer>
    </div>
</template>
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
        methods: {},
        mounted() {
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

            //Fullstory 
            window['_fs_debug'] = false;
            window['_fs_host'] = 'fullstory.com';
            window['_fs_org'] = 'A7EM7';
            window['_fs_namespace'] = 'FS';
            (function(m,n,e,t,l,o,g,y){
                if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
                g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
                o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
                y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
                g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
                y="rec";g.shutdown=function(i,v){g(y,!1)};g.restart=function(i,v){g(y,!0)};
                g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
                g.clearUserCookie=function(){};
            })(window,document,window['_fs_namespace'],'script','user');
        }
    }
</script>