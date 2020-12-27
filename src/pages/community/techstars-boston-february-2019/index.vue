<template>
    <div>
        <app-meta 
            :cb-title="'Techstars Boston February 2019 | Chargebee'" 
            :cb-desc="'Join Chargebee and SaaStock as we build a community of SaaS radicalists around the globe.'" 
            :cb-url="'/community/techstars-boston-february-2019/'" 
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
                                        <h1 class="ce-hero__title">Techstars Boston</h1>
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
                                    <div class="col-md-6">
                                        <div class="ce-welcome__figure">
                                            <img src="/static/website/version/images/events/techstars-boston-february-2019/techstars-boston-february-2019.png" class="img-responsive" />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="ce-welcome__desc">
                                            <img src="/static/website/version/images/events/techstars-boston-february-2019/techstars.png" alt="" width="160" class="img-responsive animate fadeInLeft ce-welcome__logo" />
                                        </div>
                                        <div class="ce-welcome__desc">
                                            Chargebee will be mentoring fellow entrepreneurs for Office Hours.
                                        </div>
                                        <div class="ce-welcome__desc" style="margin-top: 24px;">
                                            <strong>About TechStars Boston</strong>
                                        </div>
                                        <div class="ce-welcome__desc" style="margin-top: 8px;">    
                                            Boston is home to countless category-shifting, deep tech creations & is viewed as a top innovation hub in a number of verticals. With a reputation for churning out hugely successful companies & disruptive technologies, the Techstars program in Boston attracts top talent from all over the world. Known for producing some of the best-funded classes across all of Techstars programs, Boston boasts an intensely active startup ecosystem that enables hundreds of companies & successful exits each year.
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