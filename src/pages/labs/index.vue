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
      :cb-title="'Chargebee Labs'" 
      :cb-desc="'Collaborate with us on emerging ideas'" 
      :cb-url="'/labs/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
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
        <section class="cb-grey cb-int">
            <div class="container">
                <!-- ====================================================================
                And so much more starts
                ===================================================================== -->
                <div class="row">
                <!-- =================================================== 
                Aside start 
                ==================================================== -->
                    <div class="col-sm-5 col-md-4">
                        <div id="affix-nav" data-js-affix="true">
                            <aside class="cb-int__aside" style="margin-top: 50px;">
                                <h1 class="cb-int__title">
                                    <img src="/static/website/version/images/labs/chargebee-labs.svg" alt="Chargebee Labs Logo" width="240">
                                </h1>
                            </aside>
                        </div>
                    </div>
                <!-- =================================================== 
                Aside End 
                ==================================================== -->
                <!-- =================================================== 
                Main start
                ==================================================== -->
                    <div class="col-sm-7 col-md-8">
                        <div class="row">
                            <!-- =================================================== 
                            Card start
                            ==================================================== -->
                            <div class="col-sm-12">
                            <section class="hero-sec" style="margin-top: 20px; margin-bottom: 80px;">
                                <article style="margin-left: 0;">
                                    <h1>Be the first to explore new ideas with us</h1>
                                    <p class="p">
                                        Every subscription business is unique. This means a vast potential for innovation, lots of learning, and experimenting. At Chargebee Labs, understanding these nuances is what makes us tick. We’d love for you to be a part of our research and show you some of our emerging ideas and features. Together, we can shape successful subscription billing journeys everyday.
                                    </p>
                                    <p class="p">
                                        Want to help?
                                    </p>
                                    <div class="cb-int__actions">
                                        <div class="cb-int__action">
                                            <a href="https://chargebee.typeform.com/to/P1NwpT" class="btn btn-brand btn-block btn-sm" target="_blank" style="max-width: 240px; color: #fff;">Let's Connect</a>
                                        </div>
                                    </div>
                                </article>
                            </section>

                            <div class="row">
                                    <div class="col-sm-12">
                                        <h2 class="tpmain-content__title" style="font-size: 21px; margin-bottom: 20px;">
                                            As a member of Chargebee Labs you can:
                                        </h2>
                                    </div>
                                    <div class="col-sm-9 col-md-5">
                                        <div class="media tpmain-media">
                                            <div class="media-left tpmain-media__figure"> 
                                                <img src="/static/website/version/images/labs/idea.svg" alt="" width="36px">
                                            </div> 
                                            <div class="media-body"> 
                                                <h4 class="media-heading tpmain-media__heading" style="margin-bottom: 3px;">Ideate</h4> 
                                                <p class="tpmain-media__text">
                                                    Discuss new ideas with our product teams as they are being formalised
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-9 col-sm-offset-0 col-md-5 col-md-offset-1">
                                        <div class="media tpmain-media">
                                            <div class="media-left tpmain-media__figure"> 
                                                <img src="/static/website/version/images/labs/input.svg" alt="" width="36px">
                                            </div> 
                                            <div class="media-body"> 
                                                <h4 class="media-heading tpmain-media__heading" style="margin-bottom: 3px;">Participate</h4> 
                                                <p class="tpmain-media__text">
                                                    Give your inputs as a user and take part in research activities
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-9 col-md-5">
                                        <div class="media tpmain-media">
                                            <div class="media-left tpmain-media__figure"> 
                                                <img src="/static/website/version/images/labs/design.svg" alt="" width="36px">
                                            </div> 
                                            <div class="media-body"> 
                                                <h4 class="media-heading tpmain-media__heading" style="margin-bottom: 3px;">Explore</h4> 
                                                <p class="tpmain-media__text">
                                                    Let us know what you think about our designs before they are built
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-9 col-sm-offset-0 col-md-5 col-md-offset-1">
                                        <div class="media tpmain-media">
                                            <div class="media-left tpmain-media__figure"> 
                                                <img src="/static/website/version/images/labs/test-drive.svg" alt="" width="36px">
                                            </div> 
                                            <div class="media-body"> 
                                                <h4 class="media-heading tpmain-media__heading" style="margin-bottom: 3px;">Evaluate</h4> 
                                                <p class="tpmain-media__text"> 
                                                    Try out new features ahead of release
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-sm-9">
                                        <div class="ce-media__item">
                                            <div class="ce-article" style="margin-top: 90px;">
                                                <div class="ce-article__header" style="">
                                                    <p class="ce-article__heading" style="font-weight: normal; color: #767676; font-size: 14px;">
                                                        You can opt out or change your preferences at any time.<br class="hidden-xs" /> Let us know at <a href="mailto:research-team@chargebee.com" class="cf-link">research-team@chargebee.com</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- =================================================== 
                            Card End
                            ==================================================== -->
                        </div>
                    </div>
                <!-- =================================================== 
                Main end
                ==================================================== -->
                </div>
            </div>
        </section>
        <!-- ========================================================================
        Content part  end
        ========================================================================= -->
    </div>
    <!-- ===================================================================
    End: Body Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Footer Section
    ==================================================================== -->
    <div id="cb-bottomsection" class="cb-affix-footer" style="padding-top: 40px;">
        <app-footer />
    </div>
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
        $('#affix-nav').affix({
            offset: {
                top: 140,
                bottom: function() {
                    return (this.bottom = $('#cb-bottomsection').outerHeight(true) + 400);
                }
            }
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
<style type="text/css">
    #ch-js-header-cloned {
        display: none;
    }
    .tpmain-media{
        margin-bottom: 50px;
    }
    @media (min-width: 1024px) {
        .hero-sec h1{
            font-size: 30px;
            margin-bottom: 21px;
        }
    }

    .cb-int {
        padding-bottom: 40px
    }
    
    @media (max-width: 1024px) {
        .affix {
            position: static!important;
        }
    }
    @media (max-width: 767px) {
        .cb-affix-footer{
            padding-top: 0;
        }
        .l-footer{
            border-top-width: 0;
        }
        .btn-outline-brand{
            display: inline-block;
            width: auto;
            height: 42px;
            padding: 9px 24px;
        }
        .btn-brand{
            margin: auto !important;
        }
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
