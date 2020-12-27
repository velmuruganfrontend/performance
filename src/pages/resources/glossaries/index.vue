<!-- ===========================================================================
// cb-title     =   Page Level Titles (Title, Twitter, OG)
// cb-desc      =   Page Level Descriptions (Description, Twitter, OG)
// cb-image     =   Page Level Images (Twitter, OG)
// cb-style     =   Page level External Styles
​
​
** External Styles and Scripts **
If you want to add multiple styles or scripts use comma(',') to seperate url's
​
// cb-head-script   =   Page Level Head Script. Using this tag to put head level scripts
// cb-body-script   =   Page Level Body Script. Using this tag to put Scripts in end of footer or above the </body> tag
// cb-has-noindex   =   Using this tag to add noindex, nofollow meta to head. Use "True" to enable this meta.
​

** Page Styles **
// Use <style> tag to include page level styles after the Page script

​
** Header and Footer **
// app-header       =   App header will add header to the page. Need a white header in page use :hasInvert="true" attribute
// app-footer       =   App footer will add footer to the page.
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
            :cb-title="'Chargebee Glossaries - A SaaS Learning Center'" 
            :cb-desc="'Learn everything that falls under the umbrella of SaaS and subscriptions! From SaaS metrics, SaaS pricing to churn and revenue recognition. Definitions, examples and more.'" 
            :cb-url="'/resources/glossaries/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/glossaries.css'"
            :cb-head-script="''"
            :cb-body-script="''"
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
        <div id='before-affix'></div><!-- leave this empty -->
        <!-- ===================================================================
		Start: Body Section
		==================================================================== -->
        <app-body>
            <div class="cg-row">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-lg-3 hidden-sm hidden-xs">
                            <div data-affix-after="#before-affix" id="cg-leftnav__affix" class="cg-grid">
                                <div class="cg-nav-quote">
                                    <div class="cg-nav-quote__title">Chargebee</div>
                                    <div class="cg-nav-quote__desc">Glossaries</div>
                                    <a href="/resources/" class="cg-link" style="margin-top: 24px;display: block;">← See all Resources</a>
                                </div>
                                <div class="cg-leftnav">
                                    <ul class="nav cg-leftnav__list">
                                        <li class="cg-leftnav__item active">
                                            <a href="#subscription_management">
                                                Subscription Management
                                            </a>
                                        </li>
                                        <li class="cg-leftnav__item">
                                            <a href="#recurring_billing">
                                                Recurring Billing
                                            </a>
                                        </li>
                                        <li class="cg-leftnav__item">
                                            <a href="#accounting_and_taxes">
                                                Accounting and Taxes
                                            </a>
                                        </li>
                                        <li class="cg-leftnav__item">
                                            <a href="#compliance_security">
                                                Compliance & Security
                                            </a>
                                        </li>
                                        <li class="cg-leftnav__item">
                                            <a href="#saas_metrics">
                                                SaaS Metrics
                                            </a>
                                        </li>
                                        <li class="cg-leftnav__item">
                                            <a href="#pricing">
                                                Pricing
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-9 col-sm-offset-1 col-md-offset-0 col-md-8 col-lg-7">
                            <div id="subscription_management" class="cg-row--inner">
                                <div class="cg-actions">
                                    <div class="cg-action__label">Subscription Management</div>
                                    <div class="cg-action__cotent">
                                        <div class="cg-action__groups" v-for="(subscription_management_data, index) in subscription_management" :key="index">
                                            <a :href="`/resources/glossaries/${subscription_management_data.fields.slug}/`" class="cg-action__group">
                                                <div class="cg-action__title">
                                                    {{ subscription_management_data.fields.title.split("|")[0].trim() +" "+ subscription_management_data.fields.title.split("|")[1].trim() + subscription_management_data.fields.title.split("|")[2].trim() }}
                                                </div>

                                                <div class="cg-action__desc">
                                                    {{ subscription_management_data.fields.description }}
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="recurring_billing" class="cg-row--inner">
                                <div class="cg-actions">
                                    <div class="cg-action__label">Recurring Billing</div>
                                    <div class="cg-action__cotent">
                                        <div class="cg-action__groups" v-for="(recurring_billing_data, index) in recurring_billing" :key="index">
                                            <a :href="`/resources/glossaries/${recurring_billing_data.fields.slug}/`" class="cg-action__group">
                                                <div class="cg-action__title">
                                                    {{ recurring_billing_data.fields.title.split("|")[0].trim() +" "+ recurring_billing_data.fields.title.split("|")[1].trim() + recurring_billing_data.fields.title.split("|")[2].trim() }}
                                                </div>

                                                <div class="cg-action__desc">
                                                    {{ recurring_billing_data.fields.description }}
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="accounting_and_taxes" class="cg-row--inner">
                                <div class="cg-actions">
                                    <div class="cg-action__label">Accounting and Taxes</div>
                                    <div class="cg-action__cotent">
                                        <div class="cg-action__groups" v-for="(accounting_and_taxes_data, index) in accounting_and_taxes" :key="index">
                                            <a :href="`/resources/glossaries/${accounting_and_taxes_data.fields.slug}/`" class="cg-action__group">
                                                <div class="cg-action__title">
                                                    {{ accounting_and_taxes_data.fields.title.split("|")[0].trim() +" "+ accounting_and_taxes_data.fields.title.split("|")[1].trim() + accounting_and_taxes_data.fields.title.split("|")[2].trim() }}
                                                </div>

                                                <div class="cg-action__desc">
                                                    {{ accounting_and_taxes_data.fields.description }}
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="compliance_security" class="cg-row--inner">
                                <div class="cg-actions">
                                    <div class="cg-action__label">Compliance & Security</div>
                                    <div class="cg-action__cotent">
                                        <div class="cg-action__groups" v-for="(compliance_security_data, index) in compliance_security" :key="index">
                                            <a :href="`/resources/glossaries/${compliance_security_data.fields.slug}/`" class="cg-action__group">
                                                <div class="cg-action__title">
                                                    {{ compliance_security_data.fields.title.split("|")[0].trim() +" "+ compliance_security_data.fields.title.split("|")[1].trim() + compliance_security_data.fields.title.split("|")[2].trim() }}
                                                </div>

                                                <div class="cg-action__desc">
                                                    {{ compliance_security_data.fields.description }}
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="saas_metrics" class="cg-row--inner">
                                <div class="cg-actions">
                                    <div class="cg-action__label">SaaS Metrics</div>
                                    <div class="cg-action__cotent">
                                        <div class="cg-action__heading">
                                            Acquisition
                                        </div>
                                        <div class="cg-action__groups" v-for="(acquisition_data, index) in acquisition" :key="index">
                                            <a :href="`/resources/glossaries/${acquisition_data.fields.slug}/`" class="cg-action__group">
                                                <div class="cg-action__title">
                                                    {{ acquisition_data.fields.title.split("|")[0].trim() +" "+ acquisition_data.fields.title.split("|")[1].trim() + acquisition_data.fields.title.split("|")[2].trim() }}
                                                </div>

                                                <div class="cg-action__desc">
                                                    {{ acquisition_data.fields.description }}
                                                </div>
                                            </a>
                                        </div>
                                        <div class="cg-action__heading">
                                            Finance
                                        </div>
                                        <div class="cg-action__groups" v-for="(finance_data, index) in finance" :key="index">
                                            <a :href="`/resources/glossaries/${finance_data.fields.slug}/`" class="cg-action__group">
                                                <div class="cg-action__title">
                                                    {{ finance_data.fields.title.split("|")[0].trim() +" "+ finance_data.fields.title.split("|")[1].trim() + finance_data.fields.title.split("|")[2].trim() }}
                                                </div>

                                                <div class="cg-action__desc">
                                                    {{ finance_data.fields.description }}
                                                </div>
                                            </a>
                                        </div>
                                        <div class="cg-action__heading">
                                            Retention
                                        </div>
                                        <div class="cg-action__groups" v-for="(retention_data, index) in retention" :key="index">
                                            <a :href="`/resources/glossaries/${retention_data.fields.slug}/`" class="cg-action__group">
                                                <div class="cg-action__title">
                                                    {{ retention_data.fields.title.split("|")[0].trim() +" "+ retention_data.fields.title.split("|")[1].trim() + retention_data.fields.title.split("|")[2].trim() }}
                                                </div>

                                                <div class="cg-action__desc">
                                                    {{ retention_data.fields.description }}
                                                </div>
                                            </a>
                                        </div>
                                        <div class="cg-action__heading">
                                            Revenue
                                        </div>
                                        <div class="cg-action__groups" v-for="(revenue_data, index) in revenue" :key="index">
                                            <a :href="`/resources/glossaries/${revenue_data.fields.slug}/`" class="cg-action__group">
                                                <div class="cg-action__title">
                                                    {{ revenue_data.fields.title.split("|")[0].trim() +" "+ revenue_data.fields.title.split("|")[1].trim() + revenue_data.fields.title.split("|")[2].trim() }}
                                                </div>

                                                <div class="cg-action__desc">
                                                    {{ revenue_data.fields.description }}
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="pricing" class="cg-row--inner">
                                <div class="cg-actions">
                                    <div class="cg-action__label">Pricing</div>
                                    <div class="cg-action__cotent">
                                        <div class="cg-action__groups" v-for="(pricing_data, index) in pricing" :key="index">
                                            <a :href="`/resources/glossaries/${pricing_data.fields.slug}/`" class="cg-action__group">
                                                <div class="cg-action__title">
                                                    {{ pricing_data.fields.title.split("|")[0].trim() +" "+ pricing_data.fields.title.split("|")[1].trim() + pricing_data.fields.title.split("|")[2].trim() }}
                                                </div>

                                                <div class="cg-action__desc">
                                                    {{ pricing_data.fields.description }}
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </app-body>
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

    import {createClient} from '~/plugins/contentful.js';
    const client = createClient()
  
  export default {
    asyncData ({ env, params }) {
        return Promise.all([
            client.getEntries({
                'content_type': env.CTF_GLOSSARIES_ID,
                'fields.category[in]': 'Subscription Management'
            }),
            client.getEntries({
                'content_type': env.CTF_GLOSSARIES_ID,
                'fields.category[in]': 'Recurring Billing'
            }),
            client.getEntries({
                'content_type': env.CTF_GLOSSARIES_ID,
                'fields.category[in]': 'Accounting and Taxes'
            }),
            client.getEntries({
                'content_type': env.CTF_GLOSSARIES_ID,
                'fields.category[in]': 'Compliance & Security'
            }),
            client.getEntries({
                'content_type': env.CTF_GLOSSARIES_ID,
                'fields.category[in]': 'Acquisition'
            }),
            client.getEntries({
                'content_type': env.CTF_GLOSSARIES_ID,
                'fields.category[in]': 'Finance'
            }),
            client.getEntries({
                'content_type': env.CTF_GLOSSARIES_ID,
                'fields.category[in]': 'Retention'
            }),
            client.getEntries({
                'content_type': env.CTF_GLOSSARIES_ID,
                'fields.category[in]': 'Revenue'
            }),
            client.getEntries({
                'content_type': env.CTF_GLOSSARIES_ID,
                'fields.category[in]': 'Pricing'
            })
        ]).then(([subscription_management,recurring_billing,accounting_and_taxes,compliance_security,acquisition,finance,retention,revenue,pricing]) => {
            return {
                subscription_management: subscription_management.items,
                recurring_billing: recurring_billing.items,
                accounting_and_taxes: accounting_and_taxes.items,
                compliance_security: compliance_security.items,
                acquisition: acquisition.items,
                finance: finance.items,
                retention: retention.items,
                revenue: revenue.items,
                pricing: pricing.items
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
        window.addEventListener('load', (event) => {
            $('body').scrollspy({ target: '#cg-leftnav__affix'});
            // Affix onclick to show the section
            $("#cg-leftnav__affix .cg-leftnav__item a[href^='#']").on('click', function(e) {
                // prevent default anchor click behavior
                e.preventDefault();

                // store hash
                var hash = this.hash;

                // animate
                $('html, body').animate({
                    scrollTop: $(this.hash).offset().top
                    }, 1000, function(){

                    // when done, add hash to url
                    // (default click behaviour)
                    window.location.hash = hash;
                });
            });
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
                            top: prev.offset().top + prev.outerHeight(true),
                            bottom: function () {
                                return (this.bottom = $('#cb-affix-footer').outerHeight(true) + 50)
                            }
                        }
                    });
                };

                resizeFn();
                $(window).resize(resizeFn);
            });
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
    #ch-js-header {
        background-color: #fff
    }

    .ch-js-header-cloned {
        display: none
    }

    .affix-bottom {
        position: absolute
    }

    .affix {
        top: 0
    }

    .cg-row--inner:first-child {
        margin-top: 80px
    }

    .cg-grid>:first-child {
        margin-top: 100px
    }

    .cg-leftnav__item:not(:last-child) {
        margin-bottom: 16px
    }

    .cg-leftnav__item a {
        font-size: 16px;
        line-height: 18px
    }

    .cg-leftnav__item.active a {
        color: #000ff0;
        font-weight: 700
    }

    .cb-cookie {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 30px;
        position: fixed;
        bottom: 20px;
        left: 0;
        right: 0;
        z-index: 999999;
        background-color: #fff;
        padding: 8px 12px;
        font-size: 14px;
        align-items: center;
        justify-content: center;
        border: 1px solid #dde2e9;
        max-width: 710px;
        margin: auto;
        border-radius: 4px;
        box-shadow: 0 1px 1px 0 rgba(90, 122, 190, .1), 0 8px 16px 0 rgba(90, 122, 190, .2)
    }

    .cb-cookie__desc {
        max-width: 1024px
    }

    .cb-cookie__btn {
        cursor: pointer;
        font-weight: 700;
        font-size: 14px;
        background-color: #3a008c;
        color: #fff;
        border-radius: 3px;
        display: grid;
        height: 100%;
        text-align: center;
        align-items: center;
        width: 100%;
        padding: 4px 8px
    }
    .cg-action__groups + .cg-action__heading {
        margin-top: 40px;
    }
    @media (max-width:767px) {
        .cb-cookie {
            border-radius: 0;
            border: none;
            border-top: 1px solid #dde2e9;
            bottom: 0
        }
        .cb-cookie__btn {
            height: auto
        }
    }
    @media (min-width: 992px) {
        .cg-action__desc{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .cg-action__groups + .cg-action__heading {
            margin-top: 60px;
        }
    }
    .cg-action__heading {
        font-size: 16px;
        margin-bottom: 8px;
        font-weight: 500;
        color: #666678;
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->