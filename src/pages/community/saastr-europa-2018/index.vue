<template>
    <div>
        <app-meta 
            :cb-title="'SaaStr Europa 2018'" 
            :cb-desc="'Chargebee is sponsoring SaaStr Europa in Paris. Join us as we spread the SaaS spirit across Europe.'" 
            :cb-url="'/community/saastr-europa-2018/'" 
            :cb-image="''"
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
                                    <h1 class="ce-hero__title">SaaStr Europa, Paris</h1>
                                    <!-- <p class="ce-hero__desc">Chargebee and Sendgrid</p> -->
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
                                        <img src="/static/website/version/images/events/saastr-europa-2018/hero.jpeg" alt="SaaStr Europa, Paris" class="img-responsive">
                                    </div>
                                </div>

                                <div class="col-sm-4 col-md-4 col-lg-3">
                                    <div class="ce-welcome__desc">
                                        10,000+ SaaS enthusiasts, 40+ hours of content - SaaStr ‘18 in SF, was an event to remember. Now, they’re bringing the show to Paris, for the European SaaS community to experience. 
                                    </div> 
                                    <div class="ce-welcome__desc" style="margin-top: 18px;">
                                        Chargebee will be sponsoring alongside GoCardless, Voxbone, Looker and other SaaS leaders, and we’d love to see you there.
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
                                            Hosted at
                                        </h2>
                                        <p class="ce-hero__disp">InterContinental Paris - Le Grand</p>

                                        <div class="ce-hero__duration">15th June,  2018</div>
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
                    <div class="ce-content__row ce-content__row--lg">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-0">
                                    <div class="ce-media ce-media--secondary">
                                        <figure class="ce-media__figure">
                                            <img src="/static/website/version/images/events/saastr-europa-2018/saastr-europa-2018.png" alt="" class="img-responsive">
                                        </figure>
                                        <div class="ce-media__content">
                                            <p class="ce-media__desc">
                                                Join us for a day of awe-inspiring keynotes from the best speakers in the SaaS space.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-1">
                                    <div class="ce-article ce-article--mt-lg">
                                        <div class="ce-article__content">
                                            <p class="ce-article__desc">Brought to you by ...</p>
                                        </div>
                                        <div class="ce-article__logos">
                                            <div class="ce-article__logo">
                                                <img src="/static/resources/brand/chargebee-logo-black.svg" class="img-responsive" width="120" alt="">
                                            </div>
                                            <div class="ce-article__logo">
                                                <img src="/static/website/version/images/events/saastr-europa-2018/sendgrid.png" alt="" class="img-responsive" width="120">
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
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