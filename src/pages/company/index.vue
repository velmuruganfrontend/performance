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
// app-header 		=	App header will add header to the page. Need a white header in page use :hasInvert="true" attribute
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
      :cb-title="'About Us - Our Team & The Story behind Chargebee'"
      :cb-desc="'We are a band of makers, tinkerers and dreamers, an informal bunch that loves solving business problems, and has a lot of fun along the way.'"
      :cb-url="'/company/'"
      :cb-image="''"
      :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/pages/company.css'"
      :cb-head-script="''"
      :cb-body-script="''"
      :cb-has-noindex="false" />
    <!-- ===================================================================
    End: Meta Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Header Section
    ==================================================================== -->
    <app-header :hasInvert="false" />
    <!-- ===================================================================
    End: Header Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Body Section
    ==================================================================== -->
    <div class="cb-body">
        <main class="l-main">
            <section class="cw-section sectionA __home">
                <div class="container">
                    <div class="row">
                        <div class="cw-home-section__bg hidden-xs">
                            <img src="/static/resources/brand/chargebee-icon-black.svg" class="img-responsive" width="320"  style="opacity: 0.08" />
                        </div>
                        <div class="col-sm-8 col-sm-push-1">
                            <h1 class="cw-page-title cw-mB-s">
                                The relationship between <br>
                                your business and your customer <br>
                                is no longer transactional<span class="dot"></span>
                            </h1>
                        </div>

                        <div class="col-sm-6 col-sm-push-1 col-md-5">
                            <p class="cw-mB-l">
                                It is continuous. This makes the relationship
                                a constant work-in-progress.
                            </p>

                            <p>
                                This continuous relationship is built with your core offering - product or service - as the foundation of your business. But there are additional components that are critical - like billing. That’s where we come in.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- One -->

            <section class="cw-section sectionB">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-sm-push-3 col-md-5">
                            <h2 class="cw-mB-xs">
                                Making Revenue Management <br>Frictionless<span class="dot"></span>
                            </h2>

                            <p>
                                At Chargebee, we deeply understand subscriptions, compliance, security and payments. We bring simplicity to a complex, everyday, problem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Two -->

            <!-- <section class="cw-section sectionC">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 col-sm-push-1 visible-xs">
                            <figure class="img-wrap cw-mB-l">
                                <img class="img-responsive" style="max-width: 170px; margin: auto;" src="/static/website/version/images/company/gandalf.png" />
                            </figure>
                        </div>

                        <div class="col-sm-6 col-sm-push-1">
                            <div class="cw-blockquote">
                                <p>
                                    .. we never had to choose between Chargebee and another provider. Chargebee was the clear winner. There were other enterprise solutions which weren't consumer focussed and that was a strict no for us.
                                </p>
                                <strong class="author">Fred Stutzman, CEO | Freedom</strong>
                            </div>
                        </div>

                        <div class="col-sm-4 col-sm-push-1 hidden-xs">
                            <figure class="img-wrap max">
                                <img class="img-responsive" src="/static/website/version/images/company/gandalf-graphic.png" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section> -->
             <!-- =======================================
                Section -- Start
                ======================================= -->
                <section class="cw-section cw-Mb-l">
                    <!-- =======================================
                    Section - Inwrap -- Start
                    ======================================= -->
                    <div class="cw-section__inwrap">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-7 col-sm-offset-1 col-md-4 col-md-offset-0">
                                    <!-- =======================================
                                    Lead -- Start
                                    ======================================= -->
                                    <div class="cw-lead">
                                        <!-- =======================================
                                        Lead - Content -- Start
                                        ======================================= -->
                                        <div class="cw-lead__content">
                                            <p class="cw-lead__heading">Like any clan, tribe or team,we have a unique set of qualities that describe us:</p>
                                        </div>
                                        <!-- =======================================
                                        Lead - Content -- End
                                        ======================================= -->
                                    </div>
                                    <!-- =======================================
                                    Lead -- End
                                    ======================================= -->
                                    <div class="cw-Mb-xxs visible-xs visible-sm"></div>
                                </div>
            
                                <div class="col-sm-10 col-sm-offset-1 col-md-7">
                                    <!-- =======================================
                                    Features -- Start
                                    ======================================= -->
                                    <div class="cw-features">
                                        <!-- =======================================
                                        Feature Item -- Start
                                        ======================================= -->
                                        <div class="cw-feature__item">
                                            <div class="cw-feature">
                                                <div class="cw-feature__icon">
                                                    <img class="img-responsive" src="/static/website/version/images/careers/icon/curiosity.svg" />
                                                </div>
                                                <div class="cw-feature__content">
                                                    <div class="cw-feature__name">Curiosity</div>
                                                    <div class="cw-feature__desc">Curiosity is, quite simply, the desire to know more. It keeps us on our toes, making us open unknown doors and leading us down new paths.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- =======================================
                                        Feature Item -- End
                                        ======================================= -->
            
                                        <!-- =======================================
                                        Feature Item -- Start
                                        ======================================= -->
                                        <div class="cw-feature__item">
                                            <div class="cw-feature">
                                                <div class="cw-feature__icon">
                                                    <img class="img-responsive" src="/static/website/version/images/careers/icon/bias-for-action.svg" />
                                                </div>
                                                <div class="cw-feature__content">
                                                    <div class="cw-feature__name">Bias for Action</div>
                                                    <div class="cw-feature__desc">Bias for action looks like motion and speed. Not just in doing, but in making and communicating decisions.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- =======================================
                                        Feature Item -- End
                                        ======================================= -->
            
                                        <!-- =======================================
                                        Feature Item -- Start
                                        ======================================= -->
                                        <div class="cw-feature__item">
                                            <div class="cw-feature">
                                                <div class="cw-feature__icon">
                                                    <img class="img-responsive" src="/static/website/version/images/careers/icon/empathy.svg" />
                                                </div>
                                                <div class="cw-feature__content">
                                                    <div class="cw-feature__name">Empathy</div>
                                                    <div class="cw-feature__desc">Empathy is the awareness of another person’s situation from their point of view, and the capacity to feel and share their emotions.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- =======================================
                                        Feature Item -- End
                                        ======================================= -->
            
                                        <!-- =======================================
                                        Feature Item -- Start
                                        ======================================= -->
                                        <div class="cw-feature__item">
                                            <div class="cw-feature">
                                                <div class="cw-feature__icon">
                                                    <img class="img-responsive" src="/static/website/version/images/careers/icon/customer-centricity.svg" />
                                                </div>
                                                <div class="cw-feature__content">
                                                    <div class="cw-feature__name">Customer Centricity</div>
                                                    <div class="cw-feature__desc">Customer centricity is prioritising the needs of our customers, over simply selling our products or expanding our market share.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- =======================================
                                        Feature Item -- End
                                        ======================================= -->
            
                                    </div>
                                    <!-- =======================================
                                    Features -- End
                                    ======================================= -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- =======================================
                    Section - Inwrap -- End
                    ======================================= -->
                </section>
                <!-- =======================================
                Section -- End
                ======================================= -->
            <!-- Three -->

            <section class="cw-section sectionD">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-7 col-sm-push-3">
                            <!-- <h2 class="cw-mB-s">Serving <span class="totalCustomer"></span> customers in 50+ countries. Powered by 100+ billing experts. Backed by 4 amazing Investors<span class="dot"></span></h2> -->

                            <h2 class="cw-mB-s">Serving 15000+ customers in 50+ countries. Powered by 450+ revenue experts. Backed by 4 amazing Investors<span class="dot"></span></h2>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Four -->

            <section class="cw-section sectionE">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-7 col-sm-push-4 col-md-6">
                            <figure class="cw-mB-xs img-wrap max">
                                <img class="img-responsive" src="/static/website/version/images/company/chargebee-founders.jpg">
                            </figure>
                            <figcaption style="margin-left: 24px; color: #9F9CA6;"><strong>Founders:</strong>  Rajaraman, Thiyagu, Saravanan KP(CTO), <br>Krish Subramaniam (CEO)</figcaption>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Five -->

            <section class="cw-section sectionF">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-7 col-sm-push-1 col-md-5">
                            <h2 class="cw-mB-s">Our Story<span class="dot"></span></h2>

                            <p class="cw-mB-m">
                                Four friends - Rajaraman, KPS, Krish, and Thiyagu - started Chargebee in a room in Rajaraman's apartment in Chennai, India in June 2011. The goal was to build a company together.
                            </p>

                            <p class="cw-mB-m">
                                They took a while, but finally found their calling in subscription management. By January 2013, the first customers had started using the Chargebee billing platform.
                            </p>

                            <p class="cw-mB-m">Today, we are a global team of truth-seeking problem-solvers. We’re fearless idealists who believe that we can change the world. Read more about who-we-are and why-subscriptions on our <a href="/careers">careers page.</a></p>

                            <p>
                                We received investment from Accel in January 2014. Tiger backed us in March 2015. 2017 was a year of incredible growth for Chargebee - we crossed 5000 customers in June. In March 2018, Insight Partners invested in us. Since then, we more than doubled our revenue and headcount in 2019. In August 2019, Steadview Capital came on board with our Series D funding
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Six -->

            <section class="cw-section sectionG">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-5 col-sm-push-1 col-md-3">
                            <h4 class="cw-mB-xxs">US Offices</h4>
                            <p class="cw-address">
                                Chargebee Inc.<br>44 Montgomery St,<br>San Francisco, CA, 94104, USA
                            </p>


                            <h4 class="cw-mB-xxs" style="margin-top: 30px;">
                                Netherlands Office
                            </h4>

                            <p class="cw-address cw-mB-m">
                                TQ,<br> 3rd Floor, Singel 542, <br>1017 AZ Amsterdam
                            </p>

                           <!--  <p class="cw-address">Showplace Square,<br>350 Rhode Island, Suite 240, South Building, SF, 94103</p>

                            <p class="cw-address">
                                <span style="font-weight: 500;">Registered office:</span><br> 340 S Lemon Ave #1537 Walnut, CA, 91789, USA </p> -->

                            <h4 class="cw-mB-xxs" style="margin-top: 30px;">
                                India Office
                            </h4>

                            <p class="cw-address cw-mB-m">
                            Unit No.301, 3rd Floor, <br>Indiqube Brigade Vantage, <br>Old Mahabalipuram Road, Kandanchavadi, <br>Chennai, TN, 600096, India
                            </p>

                            <div class="cw-address">
                                <!-- <strong>Phone :</strong><a href="tel:+18779001818"> +1 (877) 900 1818</a><br/> -->
                                <strong>Email :</strong> <a href="mailto:support@chargebee.com">support@chargebee.com</a>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-push-2 col-md-7">
                            <div class="cw-ventures">
                                <h5 style="color: #A6A6AC; font-weight: bold;" class="cw-ventures__heading" >Investors</h5>

                                <ul class="cw-ventures-list">
                                    <li>
                                        <a href="https://www.accel.com/companies" target="_blank">
                                            <img style="max-height: 28px;" src="/static/website/version/images/company/accel.svg">
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.crunchbase.com/organization/tiger-global/investments/investments_list#section-investments" target="_blank">
                                            <img style="max-height: 50px; margin-bottom: -5px;" src="/static/website/version/images/company/tiger-global-management.png">
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.insightpartners.com/portfolio/" target="_blank">
                                            <img style="max-height: 30px;" src="/static/website/version/images/company/insight-venture-partners.png">
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.crunchbase.com/organization/steadview-capital" target="_blank">
                                            <img style="max-height: 34px;" src="/static/website/version/images/company/steadview-capital.png">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Seven -->

            <section class="cw-section sectionG">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-push-1">
                            <div>
                                <a href="https://careers.chargebee.com/jobs/" target="_blank" class="cw-card">
                                    <div class="cw-card__title">
                                        We're a distributed company, hiring <span>across the globe.</span>
                                    </div>
                                    <div class="cw-card__cta">
                                        See open positions <span style="color: #ff9c03">&rarr;</span>
                                    </div>
                                    <div class="cw-card__figure">
                                        <img src="/static/website/version/images/careers/chargebee-office.svg" class="img-responsive" alt="Chargebee Office">
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <!-- =========================================================================================
        Content Part End
        ========================================================================================== -->
    </div>
    <!-- ===================================================================
    End: Body Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Footer Section
    ==================================================================== -->
    <app-footer />
    <!-- ===================================================================
    End: Footer Section
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
        // window.animationActive = false;
        // window.animationTimeout = null;
        // $('.team-block-list').kinetic({

        //     filterTarget: function(target, e) {
        //         if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        //             if (!/touchstart/.test(e.type)) {
        //                 return !(/img/i.test(target.tagName));
        //             }
        //         }
        //     },
        //     moved: function() {
        //         window.animationActive = true;
        //         clearTimeout(window.animationTimeout);
        //         window.animationTimeout = setTimeout(function() {
        //             window.animationActive = false;
        //         }, 300);
        //     },
        //     stopped: function() {
        //         window.animationActive = false;
        //     }
        // });

        // $(".team-block-item").on('click', function() {
        //     var _this = this;
        //     setTimeout(function() {
        //         if (!window.animationActive) {
        //             if ($(_this).hasClass("active")) {
        //                 $(_this).removeClass("active");
        //             } else {
        //                 $(".team-block-item.active").removeClass("active");
        //                 $(_this).addClass("active");
        //             }
        //         }
        //     }, 50);
        // });

        // $(".left2right").mousedown(function(){
        //     $('.team-block-list').kinetic('start', { velocity: 30 });
        // });

        // $(".right2left").mousedown(function(){
        //     $('.team-block-list').kinetic('start', { velocity: -30 });
        // });

        // $(".left2right,.right2left").mouseup(function(){
        //     $('.team-block-list').kinetic('stop');
        //     $('.scrollHelp').css('visibility','visible');
        //     setTimeout(function(){ $('.scrollHelp').css('visibility','hidden'); }, 1000);
        // });



        // var cards = $(".team-block-item");
        // for(var i = 0; i < cards.length; i++){
        //     var target = Math.floor(Math.random() * cards.length -1) + 1;
        //     var target2 = Math.floor(Math.random() * cards.length -1) +1;
        //     cards.eq(target).before(cards.eq(target2));
        // }

        // /* Team video size fixed using JS */
        // $('#cb-team-vid').coverVid(1770, 620);
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
