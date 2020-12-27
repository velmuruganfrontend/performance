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
        :cb-title="'Chargebee Webinars'"
        :cb-desc="'Explore our ever-expanding product capabilities and actionable best practices on subscription billing and management. Join us on one of our upcoming webinars or watch our past webinars on demand.'"
        :cb-url="'/webinars/'"
        :cb-image="'/static/resources/og/webinars/og.png'"
        :cb-style="'/static/website/version/styles/main.css,/static/website/version/styles/webinar.css'"
        :cb-head-script="''"
        :cb-body-script="''"
        :cb-has-noindex="false" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Header Section
        ==================================================================== -->
        <app-header :hasInvert="true" />
        <!-- ===================================================================
        End: Header Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Body Section
        ==================================================================== -->
        <div class="cb-body">
            <main class="l-main">
                <!-- ===========================================================================================
                Banner Part Start
                ============================================================================================ -->
                <div class="cw-hero">
                    <!-- ===========================================================================================
                    Banner Head Part Start
                    ============================================================================================ -->
                    <div class="cw-hero__row">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-11 col-sm-offset-1">
                                    <div class="cw-banner">
                                        <div class="cw-banner__container">
                                            <div class="cw-banner__aside">
                                                <div class="cw-banner__logo">Chargebee</div>
                                                <div class="cw-banner__label">Webinars</div>
                                            </div>
                                            <div class="cw-banner__main">
                                                <div class="cw-banner__text  animate fadeInLeft">
                                                    Explore our ever-expanding product capabilities and actionable best practices on subscription billing and management.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ===========================================================================================
                    Banner head Part Start
                    ============================================================================================ -->
                    <!-- ===========================================================================================
                    Upcoming Part Start
                    ============================================================================================ -->
                    <div class="cw-hero__row" v-if="upComing">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-1">
                                    <div class="cw-ads">
                                        <div class="cw-ads__title">
                                            {{ upComing.fields.upcomingWebinarLabel }}
                                            <!-- Featured -->
                                        </div>

                                        <div class="cw-ads__container">
                                            <!-- ====================================================================
                                            Ad Part Start
                                            ===================================================================== -->
                                            <div class="cw-ad animate fadeInUp">
                                                <!-- Glow animation -->
                                                <div class="cw-glow">
                                                    <div class="cw-glow__flash"></div>
                                                </div>
                                                <!-- Glow animation --> 
                                                <a :href="upComing.fields.ctaTargetUrl" target="_blank" class="cw-ad__container">
                                                    <div class="cw-ad__row cw-ad__row--fix">
                                                        <!--<div class="cw-ad__label">
                                                            Live Webinar and AMA
                                                        </div>--> 
                                                    </div>
                                                    <div class="cw-ad__row" style="margin-bottom: 32px;">
                                                        <div class="cw-ad__body">
                                                            <div class="cw-ad__main">
                                                                <div class="cw-ad__title">
                                                                    {{ upComing.fields.webinarTitle }}
                                                                </div>
                                                                <div class="cw-ad__company" v-if="upComing.fields.webinarLogo" style="margin-top: 20px;">
                                                                    <img :src="upComing.fields.webinarLogo.fields.file.url" alt="" class="img-responsive" style="max-width: 120px">
                                                                </div>
                                                            </div>
                                                            <div class="cw-ad__aside">
                                                                <div class="cw-ad__speaker">
                                                                    <div class="cw-ad__speaker-icon">
                                                                        <img :src="upComing.fields.speakerImage.fields.file.url" alt="" class="img-responsive">
                                                                    </div>
                                                                    <div class="cw-ad__speaker-title">
                                                                        {{ upComing.fields.speakerName }}<br>
                                                                        <small style="font-weight: normal">{{ upComing.fields.speakerDesignation }}</small>
                                                                    </div><br>
                                                                    <div class="cw-ad__speaker-desc" v-if="upComing.fields.upcomingWebinarLabel == 'Upcoming'">
                                                                        {{ upComing.fields.webinarDateAndTime }}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="cw-ad__row">
                                                        <div class="cw-ad__action" v-if="upComing.fields.upcomingWebinarLabel == 'Upcoming'">
                                                            Register now →
                                                        </div>
                                                        <div class="cw-ad__action" v-if="upComing.fields.upcomingWebinarLabel == 'Featured'">
                                                            Watch now →
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <!-- ====================================================================
                                            Ad Part End
                                            ===================================================================== -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ===========================================================================================
                    Upcoming Part End
                    ============================================================================================ -->
                </div>
                <!-- ===========================================================================================
                Banner Part End
                ============================================================================================ -->
                <!-- ===========================================================================================
                Body Part Start
                ============================================================================================ -->
                <div class="cw-body">
                    <div class="container">
                        <div class="row">
                            <!-- ===============================================================================
                            Affix left Part Start
                            ================================================================================ -->
                            <div class="col-sm-5 col-sm-offset-1">
                                <div data-affix-after='#before-affix' id="ca-nav-affix" class="cw-affix hidden-xs">
                                    <div style="position: relative; z-index: 10">
                                        <div class="cw-article" style="max-width: 320px;">
                                            <div class="cw-article__title">
                                                On-Demand Webinars
                                            </div>
                                            <div class="cw-article__desc">
                                                Deep-dive into our product and specific features directly from the makers. Check out our product walkthroughs, benefit-driven capabilities, tips and tricks to boost your subscription game, and more.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ===============================================================================
                            Affix left Part End
                            ================================================================================ -->
                            <!-- ===============================================================================
                            Affix Right Part Start
                            ================================================================================ -->
                            <div class="col-sm-6">
                                <div class="cw-article visible-xs" style="max-width: 320px;">
                                    <div class="cw-article__title">
                                        On-Demand Webinars
                                    </div>
                                    <div class="cw-article__desc">
                                        Deep-dive into our product and specific features directly from the makers. Check out our product walkthroughs, benefit-driven capabilities, tips and tricks to boost your subscription game, and more.
                                    </div>
                                </div>
                                <div class="cw-cards">
                                    <!-- =======================================================================
                                    Card Part Start
                                    ======================================================================== -->
                                    <div class="cw-card" v-for="(webinar, index) in allWebinar" :key="index">
                                        <a :href="webinar.fields.ctaTargetUrl" target="_blank" class="cw-card__container">
                                            <!-- ===============================================================
                                            Header Part Start
                                            ================================================================ -->
                                            <div class="cw-card__header">
                                                <div class="cw-card__duration">
                                                    {{ webinar.fields.webinarDuration }}
                                                </div>
                                                <div class="cw-card__title">
                                                    {{ webinar.fields.webinarTitle }}
                                                </div>
                                                <div class="cw-card__desc">
                                                    {{ webinar.fields.webinarDescription }}
                                                </div>
                                            </div>
                                            <!-- ===============================================================
                                            Footer Part Start
                                            ================================================================ -->
                                            <div class="cw-card__footer">
                                                <span class="cw-card__btn">Watch now</span>
                                                <div class="cw-card__speaker">
                                                    <div class="cw-card__speaker-icon">
                                                        <img v-bind:src="webinar.fields.speakerImage.fields.file.url" alt="" class="img-responsive">
                                                    </div>
                                                    <div class="cw-card__speaker-title">
                                                        {{ webinar.fields.webinarDescription }}
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- ===============================================================
                                            Footer Part End
                                            ================================================================ -->
                                        </a>
                                    </div>
                                    <!-- =======================================================================
                                    Card Part End
                                    ======================================================================== -->
                                </div>
                            </div>
                            <!-- ===============================================================================
                            Affix Right Part End
                            ================================================================================ -->
                        </div>
                    </div>
                </div>
                <!-- ===========================================================================================
                Body Part End
                ============================================================================================ -->
            </main>
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

import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
    asyncData ({ env, params }) {
        return Promise.all([
            client.getEntries({
                'content_type': env.CTF_WEBINARS_ID,
                'fields.upcomingWebinarLabel[in]': 'Upcoming,Featured'
            }),
            client.getEntries({
                'content_type': env.CTF_WEBINARS_ID,
                'fields.upcomingWebinarLabel[nin]': 'Upcoming,Featured'
            })
        ]).then(([upComing, allWebinar]) => {
            return {
                upComing: upComing.items[0],
                allWebinar: allWebinar.items
            }
        }).catch(console.error)
    },
    components: {
        'app-meta': AppMeta,
        'app-header': AppHeader,
        'app-footer': AppFooter
    },
    // jQuery methods/functions should be placed inside the methods
    methods: {},
    // jQuery interaction should be placed inside the mounted method
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

        //Scrollspy
        $('body').scrollspy({ target: '#ca-nav-affix'});

        //Affix scroll
        $('[data-affix-after]').each( function() {
            var elem = $(this);
            var parent_panel = elem.parent();
            var prev = $( elem.data('affix-after') );

            if( prev.length != 1 ) {
            /* Create a new element immediately before. */
            prev = elem.before( '<div></div>' ).prev();
            }

            var resizeFn = function() {
            /* Set the width to it's natural width in the parent. */
            var sideBarNavWidth = parent_panel.width()
                - parseInt(elem.css('paddingLeft'))
                - parseInt(elem.css('paddingRight'))
                - parseInt(elem.css('marginLeft'))
                - parseInt(elem.css('marginRight'))
                - parseInt(elem.css('borderLeftWidth'))
                - parseInt(elem.css('borderRightWidth'));
            elem.css('width', sideBarNavWidth);

            elem.affix({
                offset: {
                    top: prev.offset().top + prev.outerHeight(true) - 46,
                    bottom: function () {
                        return (this.bottom = $('#cb-affix-footer').innerHeight(true) -100)
                    }
                }
            });
            };

            resizeFn();
                $(window).resize(resizeFn);
        });


        // var card = $(".cw-ad");

        // $('.cw-ads__container').on("mousemove",function(e) {
        //   var currentX = Math.round(event.pageX - card.offset().left),
        //   currentY = Math.round(event.pageY - card.offset().top),
        //   ax = -( $(this).innerWidth() / 2 - currentX)/40,
        //   ay = ( $(this).innerHeight() / 2 - currentY)/20;

        //   card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
        // });

        // $('.cw-ads__container').on("mouseleave", function(e) {
        //     card.attr("style", "transform: rotateY(0deg) rotateX(0deg);-webkit-transform: rotateY(0deg) rotateX(0deg);-moz-transform: rotateY(0deg) rotateX(0deg)");
        // });

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
    @media (min-width: 768px){
        .affix { top: 50px; }
        .affix-bottom { position: absolute; }
    }
    @media (max-width: 991px){
        .affix { top: 120px; }
    }
    @media (max-width: 767px){
        .affix{
            position: static !important;
        }
    }

    .cw-ads__container {
        perspective: 1000px;
        transform-style: preserve-3d;
    }

    .cw-ad, .cw-ad__container {
        transition: all 0.3s ease-out;
    }
    .l-footer {
        position: relative;
        overflow: hidden;
        background-color: #fff;
    }
    .cw-ad__title {
        font-size: 30px;
        line-height: 38px;
    }
    @media (max-width: 1024px) and (min-width: 768px){
        .cw-ad__title {
            font-size: 24px;
            line-height: 34px;
        }
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
