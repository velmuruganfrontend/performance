<template>
    <div>
        <app-meta 
            :cb-title="'Patriot Boot Camp Austin | Chargebee'" 
            :cb-desc="'Join Chargebee and SaaStock as we build a community of SaaS radicalists around the globe.'" 
            :cb-url="'/community/patriot-boot-camp-austin/'" 
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
                                        <h1 class="ce-hero__title">Patriot Boot Camp Austin</h1>
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
                                    <div class="col-md-6 col-lg-7">
                                        <div class="ce-welcome__figure">
                                            <iframe src="https://player.theplatform.com/p/1UFwgC/clmg-default/embed/select/media/1_NLxq3LdiuY?form=html" width="640" height="400" align="center" frameborder="0" seamless="seamless" allowfullscreen=""></iframe>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-5">
                                        <div class="ce-welcome__desc">
                                            <img src="/static/website/version/images/events/patriot-boot-camp-austin/patriot-boot-camp.png" alt="" width="160" class="img-responsive animate fadeInLeft ce-welcome__logo" />
                                        </div>
                                        <div class="ce-welcome__desc">
                                            Chargebee is proud to support Veterans and sponsoring this event.
                                        </div>
                                        <div class="ce-welcome__desc" style="margin-top: 18px;">
                                            Patriot Boot Camp is hosting its next technology entrepreneurship boot camp in Austin, TX from February 8-10. The program will welcome 50 military veteran and spouse entrepreneurs from around the country, who will participate in educational workshops, mentoring sessions with startup experts, and peer networking over the course of three intensive days. 
                                        </div>
                                        <div class="ce-welcome__desc" style="margin-top: 18px;">
                                            Our recent blog post, <a target="_blank" href="https://patriotbootcamp.org/blog/2019/1/22/how-to-prep-for-patriot-boot-camp-austin">“How to Prep for PBC Austin”</a> is live! Be sure and check it out.
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
                        <!-- <div class="ce-content__row ce-hero ce-hero--alt ce-hero--mt-sm">
                            <div class="container">
                                <div class="row"> 
                                    <div class="col-sm-6 col-sm-offset-3">
                                        <div class="ce-hero__content">
                                            <h1 class="ce-hero__heading">
                                                Hosted at
                                            </h1>
                                            <p class="ce-hero__disp">Paris, Kehoe’s, McDaids, Stag’s Head, The International
                Grogan’s</p>

                                            <div class="ce-hero__duration">18th September,  2017</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <!-- =================================================================================
                        Page content Part End
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