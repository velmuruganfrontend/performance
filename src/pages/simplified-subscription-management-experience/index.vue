<!-- ===========================================================================
Start: Main Template
============================================================================ -->
<template>
  <div>
    <!-- ===================================================================
    Start: Meta Section
    ==================================================================== -->
    <app-meta 
      :cb-title="'Designed to streamline your subscription operations | Chargebee'" 
      :cb-desc="'Subscription workflows are harder than they need to be. So we set out to simplify them with a completely re-engineered user experience.'" 
      :cb-url="'/simplified-subscription-management-experience/'" 
      :cb-image="'/static/resources/og/leap/og.png'"
      :cb-style="'/static/website/version/styles/product.css'"
      :cb-head-script="''"
      :cb-body-script="'https://cdnjs.cloudflare.com/ajax/libs/rellax/1.7.1/rellax.min.js'"
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
    <!-- ===================================================================
    Start: Website Hero
    ==================================================================== -->
    <section class="cp-hero">
        <div class="cp-hero__container cp-hero__container--xs">
            <div class="cp-hero__body">
                <div class="cp-hero__header" style="max-width: 620px">
                    <h1 class="cp-hero__title" style="color: #00000A">
                       Leap UI: <br class="visible-xs"><span class="cp-hero__highlight">The Experience of You</span>
                    </h1>
                    <p class="cp-hero__desc">
                        Faster navigation. Quicker search. Smoother workflows. <br class="visible-lg">And a hundred little things to optimize <i>your</i> operational experience.
                    </p>
                </div>
            </div>


            <div class="cp-hero__footer">
                <a data-video="https://www.youtube.com/embed/Lp2jMdtTbw8" data-toggle="modal" data-target="#videoModal" class="cp-hero__video cp-modal__video">
                    <img src="/static/website/version/images/product/leapui/hero-dashboard.png" alt="Subscription Management Dashboard" class="img-responsive">
                    <div class="cp-hero__vbtn"> </div>
                </a>


                <!-- <div class="cp-hero__panels">
                    <div class="cp-hero__panel">
                        <strong>Noticing small details makes a big difference. </strong> <br> <a href="" class="cp-link cp-link--icon">The inside story</a>
                    </div>
                    <div class="cp-hero__panel">
                         <strong>We power thousands of global businesses.</strong> <br> <a href="" class="cp-link cp-link--icon">The inside story</a>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
    <!-- ====================================================================
    End: Website Hero
    ===================================================================== -->

    
    <!-- -------------------------------------------------------------------
    Start: Hero Banner
    -------------------------------------------------------------------  -->
    <section class="cp-hero cp-hero--rp" style="min-height: auto">
        <!-- ------------------------------------------------------------
        Shape Animation
        ------------------------------------------------------------- -->
        <div class="cp-shape cp-shape--three hidden-xs">
            <div class="cp-circle cp-circle--1" style="display: none;"></div>
            <div class="cp-circle cp-circle--2" style="top: 40px;"></div>
            <div class="cp-circle cp-circle--3 hidden-xs" style="top: 160px"></div>
            <div class="cp-circle cp-circle--5" style="top: 180px;"></div>

            <div class="cp-dot cp-dot--1 hidden-xs" style="top: 370px"></div>

            <div class="cp-wavys hidden-sm" style="top: 320px">
                <div class="cp-wavy cp-wavy--1">
                    <svg enable-background="new 0 0 188.3 9.1" version="1.1" viewBox="0 0 188.3 9.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                        <style type="text/css">
                            .st0{fill:#29d495;}
                        </style>
                        <path class="st0" d="m144.2 9.1c-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1-0.9-2.2-1.4-3.5-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-2.5 2.5-0.7-0.7 2.5-2.5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c1.1-1.1 2.6-1.7 4.1-1.7s3 0.6 4.1 1.7l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c1.1-1.1 2.5-1.7 4.1-1.7s3 0.6 4.1 1.7l2.5 2.5-0.7 0.7-2.5-2.5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-0.8-0.9-2-1.4-3.3-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.6 1.7-4.1 1.7z"/>
                    </svg>
                </div>
                <div class="cp-wavy cp-wavy--1">
                    <svg enable-background="new 0 0 188.3 9.1" version="1.1" viewBox="0 0 188.3 9.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                        <style type="text/css">
                            .st0{fill:#29d495;}
                        </style>
                        <path class="st0" d="m144.2 9.1c-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1-0.9-2.2-1.4-3.5-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-2.5 2.5-0.7-0.7 2.5-2.5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c1.1-1.1 2.6-1.7 4.1-1.7s3 0.6 4.1 1.7l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c1.1-1.1 2.5-1.7 4.1-1.7s3 0.6 4.1 1.7l2.5 2.5-0.7 0.7-2.5-2.5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-0.8-0.9-2-1.4-3.3-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.6 1.7-4.1 1.7z"/>
                    </svg>
                </div>
                <div class="cp-wavy cp-wavy--1">
                    <svg enable-background="new 0 0 188.3 9.1" version="1.1" viewBox="0 0 188.3 9.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                        <style type="text/css">
                            .st0{fill:#29d495;}
                        </style>
                        <path class="st0" d="m144.2 9.1c-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7-1.5 0-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1-0.9-2.2-1.4-3.5-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-2.3 2.3-5.9 2.3-8.2 0l-5-5c-1.9-1.9-4.9-1.9-6.8 0l-2.5 2.5-0.7-0.7 2.5-2.5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c1.1-1.1 2.6-1.7 4.1-1.7s3 0.6 4.1 1.7l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c1.9 1.9 4.9 1.9 6.8 0l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c2.3-2.3 5.9-2.3 8.2 0l5 5c0.9 0.9 2.1 1.4 3.4 1.4s2.5-0.5 3.4-1.4l5-5c1.1-1.1 2.5-1.7 4.1-1.7s3 0.6 4.1 1.7l2.5 2.5-0.7 0.7-2.5-2.5c-1.9-1.9-4.9-1.9-6.8 0l-5 5c-1.1 1.1-2.5 1.7-4.1 1.7s-3-0.6-4.1-1.7l-5-5c-0.8-0.9-2-1.4-3.3-1.4s-2.5 0.5-3.4 1.4l-5 5c-1.1 1.1-2.6 1.7-4.1 1.7z"/>
                    </svg>
                </div>
            </div>

            <div class="cp-triangle cp-triangle--1" style="top: 20px;"></div>
            <div class="cp-triangle cp-triangle--2" style="top: 270px"></div>
        </div>
        <!-- ------------------------------------------------------------
        Shape Animation
        ------------------------------------------------------------- -->
        <div class="cp-hero__container cp-hero__container--footer">
            <div class="cp-hero__body">
                <div class="cp-hero__header" style="max-width: 700px;">
                    <h1 class="cp-hero__title">
                        Designed to Drive Efficiency in <br class="visible-lg">Your Everyday Operations
                    </h1>
                    <p class="cp-hero__desc">
                        The first step to optimizing your subscription workflow is to make it less intimidating.  Leap UI doesn’t stop with just the first step. It lets you take a giant leap forward.
                    </p>
                </div>
                <div class="cp-hero__actions">
                    <div class="cp-hero__action">
                        <a href="/trial-signup/" class="cp-btn">Sign up for free</a>
                    </div>
                    <div class="cp-hero__action">
                        <a href="/schedule-a-demo/" class="cp-btn cp-btn--ghost">Schedule a demo</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- -------------------------------------------------------------------
    End: Hero Banner
    -------------------------------------------------------------------  -->



    <!-- -------------------------------------------------------------------
    Start: Article
    -------------------------------------------------------------------  -->
    <section class="cp-product__article">
        <div class="container">
            <div class="row">
                <div class="col-sm-5 col-sm-offset-1">
                    <div class="cp-article__body" style="margin-top: 50px; margin-bottom: 24px;">
                        <div class="cp-article__header">
                            <h3 class="cp-article__title cp-article__title--alt">
                                There’s No UI <br class="visible-lg visible-md">Without You
                            </h3>
                        </div>
                        <div class="cp-article__content">
                            <p class="cp-article__desc">
                                Leap UI is designed to look beautiful, and work beautiful-er. But, more importantly, it’s designed with you and your usage behavior at its heart. With quick peeks, instant search, and one-click quick actions, Leap UI is built so you spend less time “interfacing” and more time “doing”.
                            </p>
                        </div>
                    </div>

                    <div class="cp-slider">
                        <div class="cp-slider__body">
                            <div class="cp-slider__container">
                                <div class="cp-slider__item" get_url="/static/website/version/images/product/leapui/quick-peak.png">
                                    <div class="cp-slider__progress">
                                        <div class="cp-slider__heading">
                                            Faster, Snappier, Prettier
                                        </div>
                                        <p class="cp-slider__desc">Built for speed. Because nobody likes waiting.</p>
                                    </div>
                                    <div class="cp-slider__sep"></div>
                                </div>
                                <div class="cp-slider__item" get_url="/static/website/version/images/product/leapui/filter.png">
                                    <div class="cp-slider__progress">
                                        <div class="cp-slider__heading">
                                            Smart Filters
                                        </div>
                                        <p class="cp-slider__desc">Get the details you need. The moment you need it.</p>
                                    </div>
                                    <div class="cp-slider__sep"></div>
                                </div>
                                <div class="cp-slider__item" get_url="/static/website/version/images/product/leapui/quick-actions.png">
                                    <div class="cp-slider__progress">
                                        <div class="cp-slider__heading">
                                            Quick Actions
                                        </div>
                                        <p class="cp-slider__desc">Stop clicking, start doing. Actions where you want them.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 hidden-xs">
                    <div class="cp-slider__figure">
                        <img set_url src="" alt="" class="img-responsive" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- -------------------------------------------------------------------
    End: Article
    -------------------------------------------------------------------  -->


    <!-- -------------------------------------------------------------------
    Start: Article
    -------------------------------------------------------------------  -->
    <section class="cp-product__article" with_in_this_section>
        <div class="container">
            <div class="row">

                <div class="col-sm-7">
                    <div move_this>
                        <div class="cp-article__figure cp-article__figure--transf">
                            <img src="/static/website/version/images/product/leapui/smart-workflows-for-swift-work.png" alt="Smart Subscription Workflows" class="img-responsive">
                        </div>
                    </div>
                </div>

                <div class="col-sm-5">
                    <div class="cp-article__body">
                        <div class="cp-article__header">
                            <h3 class="cp-article__title cp-article__title--alt">
                                Smart Workflows <br class="visible-lg visible-md">for Swift Work
                            </h3>
                        </div>
                        <div class="cp-article__content">
                             <div move_here></div>
                            <p class="cp-article__desc">
                                80% of everyday operational tasks are repetitive. Leap UI surfaces the obvious pieces of your workflow in Chargebee, so you spend less effort on that 80%. And when you have an exceptional scenario to handle, Advanced Workflows let you dive into the details.
                            </p>

                            <ul class="cp-article__list" style="margin-top: 36px;">
                                <li class="cp-article__item" style="margin-bottom: 6px;">
                                    Customizable Layout
                                </li>
                                <li class="cp-article__item" style="margin-bottom: 6px;">
                                    Contextual Suggestions
                                </li>
                                <li class="cp-article__item" style="margin-bottom: 6px;">
                                    Advanced Actions
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- -------------------------------------------------------------------
    End: Article
    -------------------------------------------------------------------  -->



    <!-- -------------------------------------------------------------------
    Start: Article
    -------------------------------------------------------------------  -->
    <section class="cp-product__article" style="background-color: #170824;">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="cp-article cp-article--center" style="margin-top: 90px; margin-bottom: 60px">
                        <div class="cp-article__body">
                            <div class="cp-article__header">
                                <h3 class="cp-article__title cp-article__title--alt" style="color: #fff">
                                    Beautiful. Fast. <br class="visible-lg">And Actually Smart!
                                </h3>
                            </div>
                            <div class="cp-article__content">
                                <p class="cp-article__desc" style="color: rgba(255, 255, 255, 0.7)">
                                    Leap UI does more than just look and act good. Contextual actions understand the intent behind your navigation and “suggest” actions you’re most likely to take. 
                                </p>
                            </div>
                            <div class="cp-article__actions" style="margin-top: 36px">
                                <div class="cp-article__action">
                                    <a href="/trial-signup/" class="cp-btn">Sign up for free</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-12">
                    <img src="/static/website/version/images/product/leapui/next-with-leap.png" alt="" class="img-responsive">
                </div>
            </div>
        </div>
    </section>
    <!-- -------------------------------------------------------------------
    End: Article
    -------------------------------------------------------------------  -->


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
    <div id="videoModal" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="z-index: 99999;">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-body" style="padding: 0;">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>


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

        mounted() {
            // For Slider in page
            $('.cp-slider__item:first-child').addClass('cp-slider__item-active');
            $('[set_url]').attr('src',$('.cp-slider__item-active').attr('get_url')).removeClass('cp-slider__animate').addClass('cp-slider__animate');
            var activeItem;
            function slider(){
                activeItem = $('.cp-slider__item-active').next('.cp-slider__item');
                if(activeItem.length){
                    $('.cp-slider__item').removeClass('cp-slider__item-active');
                    $(activeItem).addClass('cp-slider__item-active');
                }else{
                    $('.cp-slider__item').removeClass('cp-slider__item-active');
                    $('.cp-slider__item:first-child').addClass('cp-slider__item-active');
                }
                $('[set_url]').attr('src',$('.cp-slider__item-active').attr('get_url')).removeClass('cp-slider__animate').addClass('cp-slider__animate');
            }
            var startSlider = setInterval(slider, 4000);
            $('.cp-slider__item .cp-slider__heading').on('click', function(){
                clearInterval(startSlider);
                $('.cp-slider__item .cp-slider__heading').parents('.cp-slider__item').removeClass('cp-slider__item-active');
                $(this).parents('.cp-slider__item').addClass('cp-slider__item-active').find('.cp-slider__progress').addClass('cp-slider__progress--hide');
                //startSlider = setInterval(slider, 4000);
                $('[set_url]').attr('src',$('.cp-slider__item-active').attr('get_url')).removeClass('cp-slider__animate').addClass('cp-slider__animate');
            })

            // For youtube video embed
            if($('.cp-modal__video')) {
                $('.cp-modal__video').click(function () {
                      var theModal = $(this).data("target"),
                    videoSRC = $(this).attr("data-video"),
                    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&autoplay=1";
                    $(theModal + ' iframe').attr('src', videoSRCauto);
                    $(theModal).click(function () {
                      $(theModal + ' iframe').attr('src', videoSRC);
                    });
                });
            } 
            // For Slider and animation
            $(window).on('load', function(){
                setTimeout(function(){
                    $('.cp-hero__highlight').addClass('cp-hero__highlight--active')
                }, 750)
            })
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
    #ch-js-header-cloned{
        display: none;
    }
    .cp-btn{
        background-color: #420092;
    }
    .cp-btn--ghost{
        background-color: transparent;
        box-shadow: 0px 0px 0px 1px #420092 inset;
        color: #420092;
    }
    .cp-btn--ghost:after{
        background: url("/static/website/version/images/home/jan-2019/arrow/button-arrow-purple.svg") center/contain no-repeat;
    }
    .cp-btn--ghosta:hover,
    .cp-btn--ghosta:focus{
        color: #420092;
    }
    .modal-backdrop.in{
        z-index: 99998;
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->