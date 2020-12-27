<template>
    <div>
        <app-meta
            :cb-title="'Guide to Streamlining Revenue Operations with Chargebee'"
            :cb-desc="'Supplement your subscription growth with this guide that summarizes ways you can use Chargebee to achieve key metrics in your Revenue Operations.'"
            :cb-url="'/bookkeeping/'"
            :cb-image="''"
            :cb-style="'/static/website/version/styles/steward.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="true" />
        <app-header :hasInvert="false" />
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <div class="sw-body">
            <div class="sw-row">
                <!-- -------------------------------------------------------------------
                Start: Main
                -------------------------------------------------------------------  -->
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 hidden-xs">
                            <figure class="sw-hero__figure">
                                <img src="/static/website/version/images/bookkeeping/saas-illustration.svg" width="520" class="img-responsive" alt="" />
                            </figure>
                        </div>
                        <div class="col-sm-6 col-md-5">
                            <div class="sw-hero">
                                <div class="sw-hero__content">
                                    <h1 class="sw-hero__title">
                                        Need Fast and Insightful SaaS Accounting?
                                    </h1>
                                    <div class="sw-hero__desc">
                                        Our SaaS accounting experts can close your books faster and provide insightful analysis that can supercharge your growth.
                                    </div>
                                    <div class="sw-hero__actions">
                                        <a class="sw-btn" href="https://calendly.com/vinay-chargebee/60min">Tell me more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sw-row">
                <!-- -------------------------------------------------------------------
                Start: Main
                -------------------------------------------------------------------  -->
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="sw-medias">
                                <div class="sw-media">
                                    <div class="sw-media__content">
                                        <figure class="sw-media__figure">
                                            <img src="/static/website/version/images/bookkeeping/expertise.svg" class="img-responsive" alt="" />
                                        </figure>
                                        <div class="sw-media__title">
                                            Get SaaS Expertise
                                        </div>
                                        <div class="sw-media__desc">
                                            With 8+ yrs of serving thousands of SaaS businesses, and SaaS accounting experts to boot, your books get the right perspectives and financial rigour.
                                        </div>
                                    </div>
                                </div>
                                <div class="sw-media">
                                    <div class="sw-media__content">
                                        <figure class="sw-media__figure">
                                            <img src="/static/website/version/images/bookkeeping/close-books-faster.svg" class="img-responsive" alt="" />
                                        </figure>
                                        <div class="sw-media__title">
                                            Close your books faster
                                        </div>
                                        <div class="sw-media__desc">
                                            Chargebee already automates invoicing, payments, and syncing with accounting platforms. All we need is your expenses to close your books much, much faster.
                                        </div>
                                    </div>
                                </div>
                                <div class="sw-media">
                                    <div class="sw-media__content">
                                        <figure class="sw-media__figure">
                                            <img src="/static/website/version/images/bookkeeping/growing.svg" class="img-responsive" alt="" />
                                        </figure>
                                        <div class="sw-media__title">
                                            Focus on growing
                                        </div>
                                        <div class="sw-media__desc">
                                            Your focus and attention are the most valuable asset when growing your business. We’ll take care of your books and provide the advice you need, so that you can take care of growing your business.
                                        </div>
                                    </div>
                                </div>
                                <div class="sw-media">
                                    <div class="sw-media__content">
                                        <figure class="sw-media__figure">
                                            <img src="/static/website/version/images/bookkeeping/insights.svg" class="img-responsive" alt="" />
                                        </figure>
                                        <div class="sw-media__title">
                                            Surface insights that matter
                                        </div>
                                        <div class="sw-media__desc">
                                            Financial metrics from your accounting system, and SaaS metrics from Chargebee sing a melody together that bubble up clear insights for your business.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- -------------------------------------------------------------------
                End: Main
                -------------------------------------------------------------------  -->
            </div>
            <div class="sw-row">
                <!-- -------------------------------------------------------------------
                Start: Content Footer
                -------------------------------------------------------------------  -->
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3">
                            <div class="sw-footer">
                                <div class="sw-footer__logo">
                                    <img src="/static/website/version/images/bookkeeping/c-logo.png" class="img-responsive" alt="" />
                                </div>
                                <div class="sw-footer__desc">
                                    We’re currently signing on customers for the Q2 2020 cohort. Talk with us and tell us what you’re looking for.
                                </div>
                                <div class="sw-footer__action">
                                    <a href="https://calendly.com/vinay-chargebee/60min" class="sw-link sw-link--icon">
                                        Talk to an expert
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- -------------------------------------------------------------------
                End: Content Footer
                -------------------------------------------------------------------  -->
            </div>
        </div>
        <app-footer />
        <!-- ===================================================================
        End: Website Footer
        ==================================================================== -->
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

        mounted() {
        }
    }
</script>
<style type="text/css">
    #ch-js-header-cloned{
        display: none;
    }
</style>
