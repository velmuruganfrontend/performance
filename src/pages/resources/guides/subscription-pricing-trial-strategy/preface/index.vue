<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta 
            :cb-title="'An Introduction to SaaS Trials and Pricing'" 
            :cb-desc="'If you\'re a SaaS business, you\'ll constantly find yourself restrategizing your pricing and trials. Here\'s something that can set you off on the right path.'" 
            :cb-url="'/resources/guides/subscription-pricing-trial-strategy/preface/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/guidev2.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false"/>
        <app-header :hasInvert="false" />
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Hero
        ==================================================================== -->
        <section class="cg-hero">
            <div class="cg-hero__container">
                <div class="cg-hero__content">
                    <div class="cg-hero__label">
                        Preface
                    </div>
                    <h1 class="cg-hero__title">                        
                        The Trial and Pricing Playbook for <br class="visible-lg visible-md">Subscription Businesses
                    </h1>
                </div>
                <div class="cg-hero__actions hidden-xs">
                    <a href="/resources/guides/subscription-pricing-trial-strategy/" class="cg-hero__action">
                        Prologue
                    </a>
                    <div class="cg-hero__actiona">
                        Click to Read
                    </div>
                    <a href="/resources/guides/subscription-pricing-trial-strategy/find-the-right-pricing-model/" class="cg-hero__action">
                        Next Chapter
                    </a>
                </div>
            </div>
        </section>
        <!-- ===================================================================
        End: Website Hero
        ==================================================================== -->
        <!-- ===================================================================
        Start: Article
        ==================================================================== -->
        <section class="cg-article">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                            
                        <p class="cg-article__desc cg-article__fl">
                            As exciting as starting your own subscription business can be, many disconcerting questions usually engulf those bouts of excitement. Leaving you to question if it’s exciting at all. How many plans should I have, to go after each of my target customer segments? How should I price these plans? Should I offer free or paid trials? Monthly vs. Annual Billing &mdash; which will work better for me?
                        </p>
                        <p class="cg-article__desc">
                            And even if you were to analyse thousands of subscription businesses, condense all the learnings and assumptions derived from their journeys into lessons, you'd still be unable to pick that one rule that will just work.
                        </p>
                        <p class="cg-article__desc">
                            That’s because you will keep discovering new assumptions that will challenge and uproot your existing notions, along the way.
                        </p>
                        <p class="cg-article__desc">
                            This guide will be your ideal travel companion for this journey. The chapters in this guide will:
                        </p>

                        <ul class="cg-article__list">
                            <li class="cg-article__item">
                                Walk you through some useful pricing and trial strategies
                            </li>
                            <li class="cg-article__item">
                                Give you a holistic view of all the pricing models and how they’re used
                            </li>
                            <li class="cg-article__item">
                                Highlight the pros and cons of choosing different billing periods
                            </li>
                            <li class="cg-article__item">
                                Enable you with tips of how and when Chargebee can help
                            </li>
                            <li class="cg-article__item">
                                Point you towards the right resources (and some good reads)
                            </li>
                        </ul>

                        <p class="cg-article__desc">
                            This guide is definitely not the be-all and end-all of how you should approach your pricing and trial strategy. Even if it serves as a mere catalyst that gets you started at the right point in your growth trajectory, we'll consider our job here is done.
                        </p>

                    </div>
                </div>
            </div>
        </section>
        <!-- ===================================================================
        End: Article
        ==================================================================== -->
        <section class="cg-footer" style="margin-top: 90px; margin-bottom: 50px;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-sm-offset-3">
                        <div class="cg-racks__content">
                            <a href="/resources/guides/subscription-pricing-trial-strategy/find-the-right-pricing-model/" class="cg-rack cg-link cg-link--icon" style="border-bottom-width: 0; border-left: 4px solid; padding-left: 40px; max-width: 380px;">
                                <span class="cg-rack--label">Next Chapter</span>
                                Pricing and why it’s super important to get it right
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===================================================================
        Start: Website Footer
        ==================================================================== -->
        <app-footer />
        <!-- ===================================================================
        End: Website Footer
        ==================================================================== -->
    </div>
</template>
<!-- ===========================================================================
End: Template
============================================================================ -->
<!-- ===========================================================================
Start: Scripts
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
            $('.cg-hero__actiona').on('click', function(){
                $('html, body').animate({
                    scrollTop: $(".cg-article").offset().top - 150
                }, 500);
            })
        }
    }
</script>
<!-- ===========================================================================
End: Scripts
============================================================================ -->
<!-- ===========================================================================
Start: Style
============================================================================ -->
<style type="text/css">
    @media (min-width: 992px){
        .cg-hero__container {
            min-height: 480px;
        }
        .cg-hero {
            background-position: center;
        }
        .cg-hero__actiona{
            display: none;
        }
    }
</style>
<!-- ===========================================================================
End: Style
================================================================================