<template>
    <div>
        <app-meta 
            :cb-title="'SaaS Happy Hour, Dreamforce'" 
            :cb-desc="'Celebrate Dreamforce day #2 over beers with fellow SaaS founders, CEOs and executives, at Chargebee & Lighter Capital’s Happy Hour.'" 
            :cb-url="'/community/saas-drinks-dreamforce/'" 
            :cb-image="'/static/resources/og/community/events/dreamforce.png'"
            :cb-style="'/static/website/version/styles/main.css,/static/website/version/styles/events.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" :hasCommunity="true" />
        <div class="cb-body">
            <!-- =========================================================================================
            Content Part Start 
            ========================================================================================== -->
                <section class="ce-main">
                <!-- =====================================================================================
                Site Banner Start
                ====================================================================================== -->
                <section class="ce-hero ce-hero--alt">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-9 col-md-10">
                                <div class="ce-hero__content animate fadeInLeft">
                                    <h1 class="ce-hero__title">Dreamforce <br class="visible-xs">Happy Hour</h1>
                                    <p class="ce-hero__desc">with Chargebee and Lighter Capital</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- =====================================================================================
                Site Banner Start
                ====================================================================================== -->
                <!-- =====================================================================================
                Site main Part Start
                ====================================================================================== -->
                <section class="ce-content">
                    <!-- =================================================================================
                    Welcome Part Start
                    ================================================================================== -->
                    <div class="ce-content__row" style="padding-top: 60px;">
                        <div class="container">
                            <div class="row ce-welcome ce-welcome--alt">
                                <div class="col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-1 col-lg-7 col-lg-offset-1">
                                    <div class="ce-welcome__figure">
                                        <img src="/static/website/version/images/events/saas-drinks-dreamforce/cb-hero.jpg" alt="SaaS Happy Hour, Dreamforce" class="img-responsive">
                                    </div>                        
                                </div>

                                <div class="col-sm-4 col-md-4 col-lg-4">
                                    <div class="ce-welcome__desc">
                                        Chargebee teamed up with Lighter Capital to celebrate Dreamforce 2017 over beers with the SaaS community, at our co-hosted Happy Hour. 
                                    </div> 
                                    <div class="ce-welcome__desc" style="margin-top: 18px;">
                                        With over 150,000 people attending, Dreamforce was power-packed with content for the software world. The Happy Hour, hosted at the Veranda bar in the Moscone Convention Center, was an opportunity to take a break from the conference chaos, and wind down with fellow SaaS entrepreneurs and execs.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- =================================================================================
                    Welcome Part End
                    ================================================================================== -->
                    <!-- =================================================================================
                    Page content Part End
                    ================================================================================== -->
                    <div class="ce-content__row ce-hero ce-hero--alt ce-hero--mt-sm">
                        <div class="container">
                            <div class="row"> 
                                <div class="col-sm-6 col-sm-offset-3">
                                    <div class="ce-hero__content">
                                        <h2 class="ce-hero__heading">
                                            Hosted at the Veranda Bar,
                                        </h2>
                                        <p class="ce-hero__disp">Yerba Buena Gardens, Moscone Convention Center</p>

                                        <div class="ce-hero__duration">05:30 PM, 07th November,  2017 </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- =================================================================================
                    Page content Part End
                    ================================================================================== -->
                    <!-- =================================================================================
                    Testimonial Part End
                    ================================================================================== -->

                    <!-- =================================================================================
                    Testimonial Part End
                    ================================================================================== -->
                    <!-- =================================================================================
                    Form Part End
                    ================================================================================== -->
                    <div class="ce-content__row ce-content__row--lg">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6 col-sm-offset-3">
                                    <div class="ce-form">
                                        <div class="ce-form__title">
                                            Join our community of <span class="ce-form__highlight">product, finance and operations leaders,</span> and be notified when we host in your city
                                        </div>
                                        <div class="ce-form__actions">
                                            <a href="https://chargebee.typeform.com/to/nZ1bOR" target="_blank" class="ce-form__action revealOnScroll" data-animate='scaleSmall'>Join the community</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- =================================================================================
                    Form Part End
                    ================================================================================== -->
                </section>
                <!-- =====================================================================================
                Site main Part End
                ====================================================================================== -->
                </section>
            <!-- =========================================================================================
            Content Part End 
            ========================================================================================== -->
        </div>
        <app-footer />
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
        mounted(){
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
        }
    }
</script>
<style type="text/css" media="screen">
    #ch-js-header-cloned{
        display: none;
    }
    .ce-welcome__desc {
        font-size: 15px;
        line-height: 22px;
        color: #575757;
        font-weight: normal;
    }
</style>
