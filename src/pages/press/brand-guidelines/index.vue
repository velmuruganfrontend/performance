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
  <div class="body">
    <!-- ===================================================================
    Start: Meta Section
    ==================================================================== -->
    <app-meta 
      :cb-title="'Press Resources - Chargebee'" 
      :cb-desc="'Read the latest press releases from Chargebee, milestones, and event announcements.'" 
      :cb-url="'/press/brand-guidelines/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/new.css'"
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
        <!-- Start Main Body Content -->
        <section class="hero-sec">
            <div class="container text-center">
                <article>
                    <h1 class="ff-brandon">Brand Resources</h1>
                    <div class="mar-y-md">
                        <img src="/static/website/version/images/press/brand-guidelines/hero-mediakit.svg" alt="" class="img-responsive center-block">
                    </div>
                    <div  class="mar-t-sm"><a href="/static/press/chargebee-press-resources.zip" class="btn btn-sec btn-primary btn-primary-sec btn-md btn-suffix">Download Complete Kit</a></div>
                </article>
            </div>
        </section>

        <section class="blk-mediatype">
            <article class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="row">
                            <div class="col-sm-6 col-md-7">
                                <div class="blk-logo-animation">
                                    <img src="/static/resources/brand/chargebee-logo-animation.gif" alt="Chargebee Logo" class="img-responsive">
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-5">
                                <div class="blk-description">
                                    <h2 class="h2-text">What we're about</h2>
                                    <div class="mar-y-xs">If you ever eavesdrop on the conversations of pedometers and clocks, you’d learn about the miles one has to walk in customers’ shoes and the countless hours one has to put in to ship something remarkable, again and again. Chargebee lets SaaS and other subscriptions based companies build more of that remarkable, by removing billing complexities and automating all mundane tasks that are involved in running a recurring revenue business.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="text-center mar-t-lg">
                            <h2 class="h2-text">Our logo and logotype</h2>
                            <div class="mar-y-xs max-width-xs center-block">Two symbols that represent what we stand for. And a few words about using them.</div>
                            <div class="mar-t-sm">
                                <a href="/static/press/chargebee-logo-and-logotype.zip" class="btn btn-ghost-secondary">Download All</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
       
        <section class="blk-brandicon blk-primary-color blk-spacing">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 blk-logo-img">
                        <img src="/static/resources/brand/chargebee-icon-white.svg" alt="Chargebee Logo Mark" class="icon-white">
                        <img src="/static/resources/brand/chargebee-icon-brand.svg" alt="Chargebee Logo Mark" class="icon-orange">
                    </div>
                    <div class="col-md-3 col-md-offset-3 blk-logo-btn">
                        <div class="blk-logo">
                            <div class="blk-logo-active"></div>
                            <div class="blk-logo-description">
                                <h6>Chargebee orange</h6>
                            is our primary color and used most often
                            </div>
                        </div>
                        <div class="blk-logo selected">
                            <div class="blk-logo-active"></div>
                            <div class="blk-logo-description">
                                <h6>Chargebee white</h6>
                            is used on darker backgrounds
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="blk-section-description">
            <div class="container">
                Thanks for not editing, changing, distorting, recoloring, or reconfiguring the logo.
            </div>
        </section>
        <section class="blk-logo-type blk-spacing">
            <div class="container">
                <img src="/static/resources/brand/chargebee-logo-black.svg" alt="Chargebee Logo" class="img-responsive center-block">
            </div>
        </section>
        <section class="blk-section-description">
            <div class="container">
                Thanks for not embellishing on the logotype with shadows, patterns, intricate backgrounds, or elaborate gold jewelry.
            </div>
        </section>
        <section class="blk-color-palette blk-spacing">
            <div class="container">
                <div>
                    <img src="/static/website/version/images/press/brand-guidelines/color-palette.svg" alt="" class="img-responsive center-block">
                </div>
                <div class="max-width-sm blk-palette-description">
                    <h2 class="h2-text">Chargebee colors</h2>
                    <div>Two hero colors. Five sidekicks. That’s our palette. Together, they’re capable of pulling off illustrations of wondrous kinds.</div>
                </div>

                <div class="blk-pri-color-pattern">
                    <div class="max-width-xs text-center center-block blk-color-title">
                        PRIMARY COLORS
                    </div>
                    <div class="max-width-sm center-block text-center">
                        <div class="blk-color-plate">
                            <div>Chargebee <br>Orange</div>
                            <div class="blk-color-codes">
                                <!-- Pantone 1645 C --><br> CMYK 0, 57, 78, 0<br> #FF6C36
                            </div>
                        </div>

                        <!-- <div class="blk-color-plate blk-color-plate-green">
                            <div>Chargebee <br>green</div>
                            <div class="blk-color-codes">
                                Pantone 3262 C<br> CMYK 100, 0, 4, 26<br> #00BCB4
                            </div>
                        </div> -->

                        <div class="blk-color-plate blk-color-plate-martinique">
                            <div>Chargebee <br>Purple</div>
                            <div class="blk-color-codes">
                                <!-- Pantone 276 C --><br> CMYK 58, 67, 0, 6<br> #6450f0
                            </div>
                        </div>
                    </div>

                    <div class="max-width-xs text-center center-block blk-color-title">
                        SHADES OF GREY
                    </div>
                    <div class="center-block text-center">
                        <div class="blk-shade-plate">
                            Black
                        </div>

                        <div class="blk-shade-plate blk-shade-dark">
                            87% Black
                        </div>

                        <div class="blk-shade-plate blk-shade-light">
                            54% Black
                        </div>

                        <div class="blk-shade-plate blk-shade-lightest">
                            24% Black
                        </div>

                        <div class="blk-shade-plate blk-shade-white">
                            White
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section class="blk-spacing-consideration">
            <div class="container">
                 <div class="max-width-sm blk-sc-part center-block text-center">
                    <h2 class="h2-text">Spacing considerations</h2>
                    <div>As with any other form of expression, symbols breathe. So, err on the side of whitespaces, every time. Specifics illustrated below.</div>
                </div>
                <div class="mar-y-lg">
                    <img src="/static/website/version/images/press/brand-guidelines/chargebee-icon-spacing.svg" alt="Chargebee Logo Mark Spacing" class="img-responsive center-block">
                </div>
                <div class="mar-y-lg">
                    <img src="/static/website/version/images/press/brand-guidelines/chargebee-logo-spacing.svg" alt="Chargebee Logo Spacing" class="img-responsive center-block">
                </div>
            </div>
        </section>
        <section class="blk-section-description">
            <div class="container">
                Thanks for not adding a tagline or motto to our logo.
            </div>
        </section>
        <section id="how-to-write">
            <div class="container">
                <div class="blk-logo-spell">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                             <h2 class="h2-text">In writing</h2>
                            <div class="row">
                                <div class="col-sm-4 col-md-4">
                                    <div class="blk-logo-spell-detail">
                                        <div class="blk-logo-spell-title">Chargebee 
                                            <img src="/static/website/version/images/icon/jan2019/check-circle.svg" alt="">
                                        </div>
                                        <p>The "b" in Chargebee is always lowercase and the "C" is always capitalized</p>
                                    </div>
                                </div>

                                <div class="col-sm-4 col-md-4">
                                  <ul class="list-group-logo-spell blk-logo-spell-detail">
                                      <li>ChargeBee 
                                            <img src="/static/website/version/images/icon/jan2019/close-circle.svg" alt="">
                                      </li>
                                      <li>Charge bee 
                                            <img src="/static/website/version/images/icon/jan2019/close-circle.svg" alt="">
                                      </li>
                                  </ul>
                                </div>

                                <div class="col-sm-4 col-md-4">
                                  <ul class="list-group-logo-spell blk-logo-spell-detail">
                                      <li>chargeBee 
                                            <img src="/static/website/version/images/icon/jan2019/close-circle.svg" alt="">
                                      </li>
                                      <li>chargebee 
                                            <img src="/static/website/version/images/icon/jan2019/close-circle.svg" alt="">
                                      </li>
                                  </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="blk-section-description mar-t-sm">
            <div class="container">
                Write Chargebee in plain text rather than embedding the logo into text
            </div>
        </section>
        <section class="blk-app-screen">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1">
                        <div class="row">
                        <div class="col-sm-7 col-sm-push-5">
                                <div class="blk-screen-slider">
                                    <div class="carousel slide" data-ride="carousel" data-interval="false" id="carousel-slide">
                                      <!-- Indicators -->
                                      <ol class="carousel-indicators">
                                        <li data-target="#carousel-slide" data-slide-to="0" class="active"></li>
                                        <li data-target="#carousel-slide" data-slide-to="1"></li>
                                        <li data-target="#carousel-slide" data-slide-to="2"></li>
                                        <li data-target="#carousel-slide" data-slide-to="3"></li>
                                        <li data-target="#carousel-slide" data-slide-to="4"></li>
                                        <li data-target="#carousel-slide" data-slide-to="5"></li>
                                      </ol>

                                      <!-- Wrapper for slides -->
                                      <div class="carousel-inner" role="listbox">
                                        <div class="item active">
                                          <img src="/static/website/version/images/press/chargebee-dashboard.png" alt="Chargebee Dashboard" class="img-responsive">
                                        </div>
                                        <div class="item">
                                          <img src="/static/website/version/images/press/chargebee-modal-window.png" alt="..." class="img-responsive">
                                        </div>
                                        <div class="item">
                                          <img src="/static/website/version/images/press/chargebee-checkout.png" alt="..." class="img-responsive">
                                        </div>
                                        <div class="item">
                                          <img src="/static/website/version/images/press/chargebee-product-configurations.png" alt="..." class="img-responsive">
                                        </div>
                                        <div class="item">
                                          <img src="/static/website/version/images/press/subscription-email-notifications.png" alt="..." class="img-responsive">
                                        </div>
                                        <div class="item">
                                          <img src="/static/website/version/images/press/trial-management.png" alt="..." class="img-responsive">
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-5 col-sm-pull-7">
                                <div class="blk-screen-des">
                                    <h2 class="h2-text">Chargebee screenshots</h2>
                                    <div>Here are a handful of screenshots, at your service, to see how things work inside Chargebee. They change when the product changes, they’re sort of spellbound that way. Any kind of tinkering might break the spell.</div>
                                    <div class="mar-t-sm">
                                        <a href="/static/press/chargebee-screenshots.zip" class="btn btn-ghost-secondary">Download Screenshots </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="blk-founder">
            <div class="blk-founder-img">
                <ul>
                    <li><img src="/static/website/version/images/founder/krish.jpg" alt="Krish Subramanian, Co-founder and CEO" title="Krish Subramanian, Co-founder and CEO" class="img-responsive" width="340"></li>
                    <li><img src="/static/website/version/images/founder/kps.jpg" alt="Saravanan(KPS), Co-founder and CTO" title="Saravanan(KPS), Co-founder and CTO" class="img-responsive" width="340"></li>
                    <li><img src="/static/website/version/images/founder/rr.jpg" alt="Rajaraman, Co-founder" title="Rajaraman, Co-founder" class="img-responsive" width="340"></li>
                    <li><img src="/static/website/version/images/founder/thiyagu.jpg" alt="Thiyagarajan T, Co-founder" title="Thiyagarajan T, Co-founder" class="img-responsive" width="340"></li>
                </ul>
            </div>

            <div class="blk-founder-description">
                <h2 class="h2-text mar-y-md text-center">Our Founders</h2>
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1 ">
                            <div class="row">
                                <div class="col-sm-5 col-sm-offset-1">
                                    <div class="blk-founder-detail">
                                        <div><strong>Krish Subramanian, Co-founder and CEO</strong></div>
                                        Krish has more than 18 years of experience and expertise in the software technology and development business. Prior to co-founding Chargebee, Krish started his career as a software engineer at MatexNet Pvt Ltd, and then went on to become the Technology Lead and Project Manager at TCS and Cognizant Technology Solutions.
                                    </div>
                                </div>
                                <div class="col-sm-5 col-sm-offset-1">
                                    <div class="blk-founder-detail">
                                        <div><strong>Rajaraman, Co-founder</strong></div>
                                        Rajaraman has more than 18 years of experience in the tech world. He was a Product Manager at Zoho Corporation, where he wrote and developed code for a wide range of product offerings and services. Throughout his career, Rajaraman has been a product guy, starting with Network Management Systems and later on with a range of SaaS products.

                                    </div>
                                </div>
                                <div class="col-sm-5 col-sm-offset-1">
                                    <div class="blk-founder-detail">
                                        <div><strong>Saravanan(KPS), Co-founder and CTO</strong></div>
                                        Saravanan comes with a track record of over 20 years in the tech industry, where he was a Technical Architect at Zoho Corporation for more than 12 years in the very early days. He has touched most products at Zoho at some level, as both a full stack developer and specialist in security & scalability of applications.
                                    </div>
                                </div>
                                <div class="col-sm-5 col-sm-offset-1">
                                    <div class="blk-founder-detail">
                                        <div><strong>Thiyagarajan T, Co-founder</strong></div>
                                        Thiyagu brings 18 years of industry experience and was formerly a Technical Lead at Zoho Corporation, where he spearheaded initiatives to build integration frameworks of various products, including the Zoho Office suite of applications.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-12">
                            <div class="mar-t-md text-center">
                                <a href="/static/press/founder-headshots.zip" class="btn btn-ghost-secondary">Download Executive Photos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="col-md-6 col-md-offset-3">
                    <div class="blk-legal-info">
                        <h2 class="h2-text">Legal information</h2>
                        <div class="mar-y-xs">It could be tempting to “borrow” or “get inspired” by our graphics ;). But here’s a friendly reminder that these graphics are proprietary and protected under intellectual property laws. So here are a few don’ts to keep in mind:</div>

                        <div class="mar-t-md text-danger-section">Please don’t</div>
                            <ul>
                                <li>Do not use the graphics to imply endorsements or affiliation by Chargebee to any business, service or product without consent.</li>
                                <li>Do not replicate these graphics to depict your business, service or product</li>
                                <li>Do not alter these graphics without the express consent of Chargebee</li>
                            </ul>
                        </div>
                        <p>For more details of our terms of service, please visit <a href="https://www.chargebee.com/company/terms/">https://www.chargebee.com/company/terms/</a></p>
                </div>
            </div>
        </section>
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
        $(".blk-logo").click(function(){
            $(this).addClass("selected").siblings().removeClass("selected");
            $(".blk-brandicon").toggleClass("blk-white-color").toggleClass("blk-primary-color");
        });
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