<template>
    <div>
        <app-meta
            :cb-title="'List of supported Payment Gateway providers - Chargebee'"
            :cb-desc="'Chargebee integrates with leading payment gateways, spanning 50+ countries. Receive secure recurring payments online and process multiple currencies, easily.'"
            :cb-url="'/payment-gateways/'"
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css,https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.8.0/css/flag-icon.min.css,/static/website/version/styles/pages/payment-gateways.css'"
            :cb-head-script="''"
            :cb-body-script="'/static/website/version/scripts/product.js'"
            :cb-has-noindex="false"
            :cb-region-list="''"
            :cb-region-url="''" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <div id="loading-line" style="display:none;position:fixed;width:100%;z-index: 9999">
                <div class="progress"><div class="indeterminate"></div> </div>
            </div>
            <!-- Start Main Body Content -->
            <div class="flexrow mobile-menu--expanded">
                <div class="mobile-menu__close" id="close-mobile-menu" onclick="hideMobileNav()">
                    <img src="/static/website/version/images/product/icon/mobile-menu-close.svg" />
                </div>
                <a class="menu-items" href="/subscription-management/">
                    Subscription
                    <br />Management
                </a>
                <a class="menu-items" href="/recurring-billing-invoicing/">
                    Billing
                    <br /> & Invoicing
                </a>
                <a class="menu-items" href="/recurring-payments/">
                    Payments
                    <br /> & Invoicing
                </a>
                <a class="menu-items" href="/saas-reporting/">
                    Reporting
                    <br /> & Analytics
                </a>
                <a class="menu-items" href="/payment-gateways/">
                    Reporting
                    <br /> & Analytics
                </a>
                <a class="menu-items" href="/developers/">
                    For
                    <br /> developers
                </a>
            </div>
            <section class="pWrap">
                <div class="pWrap__greybox">
                    <div class="p-carousel carousel slide container" data-wrap="false" id="p-carousel" data-interval="false">
                        <a href="/saas-reporting/" class="p-carousel__arrow--left hidden-xs hidden-sm" role="button">
                            <!-- <?xml version="1.0" encoding="UTF-8"?> -->
                            <svg width="24px" height="14px" viewBox="0 0 24 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="mockup-for-html" transform="translate(-60.000000, -259.000000)">
                                        <g id="banner" transform="translate(0.000000, 90.000000)">
                                            <polygon id="Rectangle-3-Copy" fill="#F0F0F5" points="1.13686838e-13 1.70530257e-13 1440 1.70530257e-13 1440 466 0 466"></polygon>
                                            <g id="Group-9" transform="translate(42.000000, 99.000000)" fill="#B4B4BE">
                                                <g id="Long-Arrow-Right-Copy" transform="translate(30.000000, 77.000000) scale(-1, 1) translate(-30.000000, -77.000000) translate(18.000000, 70.000000)">
                                                    <polygon id="Shape" points="17.1875 0.282751335 15.78125 1.72792482 20.0625 6.03202847 0 6.03202847 0 8.04270463 20.0625 8.04270463 15.78125 12.3468083 17.1875 13.7919818 23.1875 7.75995329 23.90625 7.03736655 23.1875 6.3147798"></polygon>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a href="/developers/" class="p-carousel__arrow--right hidden-xs hidden-sm" role="button">
                            <!-- <?xml version="1.0" encoding="UTF-8"?> -->
                            <svg width="24px" height="14px" viewBox="0 0 24 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="mockup-for-html" transform="translate(-60.000000, -259.000000)">
                                        <g id="banner" transform="translate(0.000000, 90.000000)">
                                            <polygon id="Rectangle-3-Copy" fill="#F0F0F5" points="1.13686838e-13 1.70530257e-13 1440 1.70530257e-13 1440 466 0 466"></polygon>
                                            <g id="Group-9" transform="translate(42.000000, 99.000000)" fill="#B4B4BE">
                                                <g id="Long-Arrow-Right-Copy" transform="translate(30.000000, 77.000000) scale(-1, 1) translate(-30.000000, -77.000000) translate(18.000000, 70.000000)">
                                                    <polygon id="Shape" points="17.1875 0.282751335 15.78125 1.72792482 20.0625 6.03202847 0 6.03202847 0 8.04270463 20.0625 8.04270463 15.78125 12.3468083 17.1875 13.7919818 23.1875 7.75995329 23.90625 7.03736655 23.1875 6.3147798"></polygon>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <div class="carousel-inner p-carousel__inner animated" role="listbox">
                            <div class="p-carousel__content item active animated">
                                <div class="p-carousel__label">Payment Gateways</div>
                                <h1 class="p-carousel__title">
                                    Leading payment gateway providers <br /> supported by Chargebee.
                                </h1>
                                <a cn-mark-signup="true" href="/trial-signup/" class="p-carousel__signup-button">
                                    Sign up for free
                                </a>
                                <span class="p-carousel__signup-subtext">
                                    <a href="/schedule-a-demo/" class="btn-flat btn-flat__alter" style="font-weight: normal;">Schedule a Demo</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="container container--offset">
                    <!-- blue navbar -->
                    <div class="p-menu-parent">
                        <div class="hidden-sm hidden-xs">
                            <div class="p-menu animated" id="p-menu-fixed">
                                <div class="p-menu__container">
                                    <a href="/" class="p-menu__logo">
                                        <img src="/static/resources/brand/chargebee-icon-black.svg" alt="Chargebee Logo" width="30">
                                    </a>
                                    <div class="p-menu__content">
                                        <a href="/subscription-management/" class="p-menu__tab">
                                            Subscription<br />
                                            Management
                                        </a>
                                        <a href="/recurring-billing-invoicing/" class="p-menu__tab">
                                            Billing <br />
                                            & Invoicing
                                        </a>
                                        <a href="/recurring-payments/" class="p-menu__tab">
                                            Payments <br />
                                            & Accounting
                                        </a>
                                        <a href="/saas-reporting/" class="p-menu__tab">
                                            Reporting <br />
                                            & Analytics
                                        </a>
                                        <a href="/payment-gateways/" class="p-menu__tab p-menu__tab--active">
                                            Payment <br />
                                            Gateways
                                        </a>
                                        <a href="/developers/" class="p-menu__tab">
                                            For <br />
                                            Developers
                                        </a>
                                    </div>
                                    <div class="p-menu__action">
                                        <a cn-mark-signup="true" href="/trial-signup/" class="p-menu__signup">Sign up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="visible-xs visible-sm">
                            <div class="p-menu p-menu--mobile">
                                <div class="selected-menu" id="selected-menu">
                                    Reporting
                                    <br /> & Analytics
                                </div>
                                <div class="show-menu" id="show-menu">
                                    <img src="/static/website/version/images/product/icon/mobile-menu-group.svg" width="28px" height="28px" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="gaussian-blur"></div>
                    <div class="loading-bar">Loading..</div>

                    <!-- Main content -->
                    <section class="ajax-canvas"></section>
                </section>
                <payment-gateway />
                
            </section>
            <!-- End Main Body Content -->
        </div>
        <app-footer />
    </div>
</template>

<script>
    import AppMeta from '~/components/AppMeta.vue';
    import AppHeader from '~/components/AppHeader.vue';
    import AppFooter from '~/components/AppFooter.vue';
    import paymentGateway from '~/components/paymentGateway.vue';

	export default {
		components: {
			'app-meta': AppMeta,
			'app-header': AppHeader,
            'app-footer': AppFooter,
            'payment-gateway': paymentGateway
        },
        mounted() {
            window.addEventListener("load", function(event) {
                $('.pr-tab__plan-inv').tooltip({
                    'show': true,
                    'placement': 'bottom'
                });
            })
        }
	}
</script>
<style>
    @media (min-width: 992px){
        #payment-gateways{
            padding-top: 120px !important;
        }
    }
</style>