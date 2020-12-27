<template>
    <div class="body">
        <app-meta 
            :cb-title="'Implement Price Optimization for Subscription Businesses | Chargebee'" 
            :cb-desc="'Find the pricing sweet spot for your subscription business with easy to implement price optimization solutions. Launch & experiment in minutes not months.'" 
            :cb-url="'/partners/directory/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/strategy-bundle.css'"
            :cb-head-script="''"
            :cb-body-script="''"
			:disable-bootstrap-css="true"
            :cb-has-noindex="false" />
        <app-header :hasInvert="true" />
        <div class="sb-body sb-body--pd">
            <!-- ===================================================================
            Start: Hero
            ==================================================================== -->
            <div class="sb-row">
                <div class="sb-hero">
                    <div class="sb-hero__shadow">
                        <div class="sb-hero__media hidden-xs hidden-sm">
                            <div></div>
                            <div>
                                <img src="/static/website/version/images/referral-program/referral-hero-pd.svg" class="img img-responsive" />
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-1 col-lg-offset-0 col-md-6 col-lg-6 animate fadeInUp">
                                <!-- <h1 class="sb-hero__label">
                                    Roll New Pricing
                                </h1> -->
                                <div class="sb-hero__title">
                                    Our Partners
                                </div>
                                <!-- <div class="sb-hero__desc">
                                    There are over 2,000 ways a credit card transaction can fail. When a decline is the result, it costs your business significant churn and lost revenue.
                                </div> -->
                                <div class="sb-actions">
                                    <!-- <a href="/schedule-a-demo/" class="sb-action">Contact sales</a> -->
                                    <a href="/trial-signup/" class="sb-action">Sign up for free</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ===================================================================
            End: Hero
            ==================================================================== -->
            <!-- ===================================================================
            Start: Article
            ==================================================================== -->
            <div class="sb-row">
                <div class="sb-article">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1">
                                <ul class="sb-logos__list">
                                    <li>
                                        <img src="/static/website/version/images/partners-directory/aptitude-8-logo.png" alt="" class="img-responsive" />
                                    </li>
                                    <li>
                                        <img src="/static/website/version/images/partners-directory/bizvisory-logo.png" alt="" class="img-responsive" width="220" />
                                    </li>
                                    <li>
                                        <img src="/static/website/version/images/partners-directory/flashpoint-logo.png" alt="" class="img-responsive" width="200" />
                                    </li>
                                    <li>
                                        <img src="/static/website/version/images/partners-directory/hawkemedia-logo.png" alt="" class="img-responsive" width="200" />
                                    </li>
                                    <li>
                                        <img src="/static/website/version/images/partners-directory/ion–logo.png" alt="" class="img-responsive size-xs" width="90" />
                                    </li>
                                    <li>
                                        <img src="/static/website/version/images/partners-directory/launchpad-logo.svg" alt="" class="img-responsive" width="220" />
                                    </li>
                                    <li>
                                        <img src="/static/website/version/images/partners-directory/mirketa-logo.svg" alt="" class="img-responsive" width="160" />
                                    </li>
                                    <li>
                                        <img src="/static/website/version/images/partners-directory/neonetworks-logo.png" alt="" class="img-responsive" width="220" />
                                    </li>
                                    <li>
                                        <img src="/static/website/version/images/partners-directory/process-pro-consulting.svg" alt="" class="img-responsive" />
                                    </li>
                                    <li>
                                        <img src="/static/website/version/images/partners-directory/wolox-logo.png" alt="" class="img-responsive" />
                                    </li>
                                    <li>
                                        <img src="/static/website/version/images/partners-directory/xfive-logo.png" alt="" class="img-responsive size-xs" width="120" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sb-row" style="background-color: #041b32;">
                <div class="sb-article">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1">
                                <div class="sb-page__footer">
                                    <div class="sb-page__footer__title">
                                        Become a Chargebee Partner today
                                    </div>
                                    <div class="sb-actions">
                                        <a href="/schedule-a-demo/" class="sb-action">Contact sales</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ===================================================================
            End: Article
            ==================================================================== -->
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
        methods: {

        },
        mounted() {
            
        }
    }
</script>
<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css">
    #ch-js-header-cloned{
        display: none;
    }
    @media (min-width: 992px){
        .sb-hero__shadow .img {
            transform: rotate(10deg) translate(0, 15%);
        }
        .sb-hero__shadow .sb-hero__media {
            grid-template-columns: 75% 36%;
        }
        .sb-hero__shadow{
            padding-right: 210px;
        }
    }
    body{
        background-color: #eff5fa;
    }
    .sb-logos__list{
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        list-style: none;
        align-items: center;
        margin-bottom: 40px;
    }
    .sb-logos__list li{
        background-color: #fff;
        height: 100%;
        display: grid;
        align-items: center;
        min-height: 100px;
        padding: 15px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
        justify-content: center;
    }
    .sb-page__footer {
        display: grid;
        align-items: center;
        justify-content: center;
        grid-gap: 20px;
    }
    .cb-footer__signup{
        display: none !important;
    }
    .cb-footer,.cb-footer__seprater{
        padding-top: 0 !important;
        margin-top: 0 !important;
    }
    .sb-page__footer__title {
        font-size: 20px;
        font-weight: 700;
        line-height: 1.5;
        color: #fff;
    }
    @media (max-width: 767px) {
        .sb-logos__list li img {
            width: 80%;
            margin: auto;
        }
        .sb-logos__list li .size-xs{
            width: 60%;
        }
    }
    @media (min-width: 768px){
        .sb-logos__list{
            grid-template-columns: minmax(220px, 360px) minmax(220px, 360px);
            grid-gap: 60px;
        }
        .sb-logos__list li{
            min-height: 180px;
            padding: 30px 60px;
        }
        .sb-page__footer{
            grid-template-columns: auto auto;
            grid-gap: 40px;
        }
        .sb-page__footer__title {
            font-size: 36px;
            line-height: 42px;
        }
    }
    @media (min-width: 992px){
        .sb-row:last-child {
            padding-bottom: 70px;
        }
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->