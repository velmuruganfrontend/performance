<template>
    <div>
        <app-meta
            :cb-title="'Recurring Billing Integrations - Chargebee'"
            :cb-desc="'Sync & streamline your data with apps and integrations built for your favorite platforms and applications.'"
            :cb-url="'/integrations/'"
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <!-- Int = Integrations -->
            <section class="cb-grey cb-int">
                <div class="container">
                    <!-- Article start -->
                    <div class="row">
                        <!-- ===================================================
                            Aside start
                            ==================================================== -->
                        <div class="col-sm-5 col-md-4">
                            <div id="affix-nav" data-js-affix="true">
                                <aside class="cb-int__aside">
                                    <h1 class="cb-int__title">
                                            Chargebee Integrations
                                        </h1>
                                    <div class="cb-int__lists hidden-xs" data-list="true">
                                        <div class="cb-int__list cb-int__list--active" id="all-apps">
                                            <span class="cb-int__item">All Apps</span>
                                        </div>
                                        <div class="cb-int__list" data-int-list="sales" hash-data="crm">
                                            <span class="cb-int__item">Sales</span>
                                        </div>
                                        <div class="cb-int__list" data-int-list="customer_support" hash-data="helpdesk">
                                            <span class="cb-int__item">Customer Support and Success</span>
                                        </div>
                                        <div class="cb-int__list" data-int-list="finance" hash-data="finance">
                                            <span class="cb-int__item">Finance</span>
                                        </div>
                                        <div class="cb-int__list" data-int-list="marketing" hash-data="marketing-automation">
                                            <span class="cb-int__item">Marketing</span>
                                        </div>
                                        <div class="cb-int__list" data-int-list="reporting_analytics" hash-data="reporting-analytics">
                                            <span class="cb-int__item">Reporting & Analytics</span>
                                        </div>
                                        <div class="cb-int__list" data-int-list="collaboration" hash-data="communication-collaboration">
                                            <span class="cb-int__item">Collaboration</span>
                                        </div>
                                        <div class="cb-int__list" data-int-list="ecommerce" hash-data="ecommerce">
                                            <span class="cb-int__item">eCommerce</span>
                                        </div>
                                    </div>
                                    <div class="cb-int__actions">
                                        <div class="cb-int__action hidden-sm">
                                            <a href="https://share.hsforms.com/1y0KxlgAFRXycHjlakIxT2Q27zwn" class="btn btn-outline-brand btn-block" target="_blank">Wish to integrate?</a>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <!-- ===================================================
                            Main start
                            ==================================================== -->
                        <div class="col-sm-7 col-md-8">
                            <div class="row">
                                <!-- ===================================================
                                Card start
                                ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="sales">
                                    <a href="/integrations/pipedrive/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/pipedrive/pipedrive-icon.svg" alt="" class="img-responsive" style="max-width: 54px;margin-top: -12px;">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Pipedrive</h3>
                                                <p class="cb-int__about">Sales</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Pipedrive is a cloud based sales management tool that helps growing sales teams manage, track and control their sales process
                                            </p>
                                        </div>
                                        <!-- <div class="cb-int__label">New</div> -->
                                    </a>
                                </div>
                                <!-- ===================================================
                                Card end
                                ==================================================== -->
                                <!-- ===================================================
                                Card start
                                ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="reporting_analytics">
                                    <a href="/integrations/stitch/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/stitch/stitch-logo--yellow.svg" alt="" class="img-responsive" style="max-width: 42px;margin-top: -2px;">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Stitch Data</h3>
                                                <p class="cb-int__about">Analytics</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Stitch is an ETL service that connects the most popular SaaS tools and brings in raw data to a data warehouse.
                                            </p>
                                        </div>
                                        <!-- <div class="cb-int__label">New</div> -->
                                    </a>
                                </div>
                                <!-- ===================================================
                                Card end
                                ==================================================== -->
                                <!-- ===================================================
                                Card start
                                ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="marketing">
                                    <a href="/integrations/activecampaign/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/active-campaign/active-campaign.png" alt="" class="img-responsive" style="max-width: 28px;margin-top: -7px;">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Active Campaign</h3>
                                                <p class="cb-int__about">Marketing</p>
                                            </div>
                                            <p class="cb-int__content">
                                                ActiveCampaign is a marketing automation platform that helps businesses launch email campaigns and manage leads effectively
                                            </p>
                                        </div>
                                        <!-- <div class="cb-int__label">New</div> -->
                                    </a>
                                </div>
                                <!-- ===================================================
                                Card end
                                ==================================================== -->
                                <!-- ===================================================
                                Card start
                                ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="finance">
                                    <a href="/integrations/taxjar/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/taxjar/taxjar-glyph.png" alt="" class="img-responsive" style="max-width: 50px; margin-top: -10px;">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">TaxJar</h3>
                                                <p class="cb-int__about">Finance</p>
                                            </div>
                                            <p class="cb-int__content">
                                                TaxJar is a technology solution designed for businesses to manage sales tax compliance
                                            </p>
                                        </div>
                                        <!-- <div class="cb-int__label">New</div> -->
                                    </a>
                                </div>
                                <!-- ===================================================
                                Card end
                                ==================================================== -->
                                 <!-- ===================================================
                                Card start
                                ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="marketing,sales">
                                    <a href="/integrations/hubspot/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/hubspot/sprocket-web-color.svg" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">HubSpot</h3>
                                                <p class="cb-int__about">Marketing & Sales</p>
                                            </div>
                                            <p class="cb-int__content">
                                                HubSpot is a full platform of marketing, sales and customer service software that helps companies attract visitors, convert leads, and support customers.
                                            </p>
                                        </div>
                                        <!-- <div class="cb-int__label">New</div> -->
                                    </a>
                                </div>
                                <!-- ===================================================
                                Card end
                                ==================================================== -->
                                <!-- ===================================================
                                Card start
                                ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="reporting_analytics">
                                    <a href="/integrations/baremetrics/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/icon/baremetrics.png" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Baremetrics</h3>
                                                <p class="cb-int__about">Analytics</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Baremetrics provides insightful metrics and analytics to help SaaS businesses grow.
                                            </p>
                                        </div>
                                        <!-- <div class="cb-int__label">New</div> -->
                                    </a>
                                </div>
                                <!-- ===================================================
                                Card end
                                ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="finance">
                                    <a href="/integrations/sage-intacct/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/icon/sage-intacct.png" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Sage Intacct</h3>
                                                <p class="cb-int__about">Finance</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Sage Intacct is an accounting and revenue management software that accelerates and streamlines complex finance processes and delivers operational insights.
                                            </p>
                                        </div>
                                        <!-- <div class="cb-int__label">New</div> -->
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card end
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="finance">
                                    <a href="/integrations/oracle-netsuite/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/icon/oracle-netsuite.png" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Oracle NetSuite</h3>
                                                <p class="cb-int__about">Finance</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Oracle-NetSuite is an enterprise-grade revenue management and accounting tool that streamlines your accounting process and helps you stay compliant with the new revenue standards.
                                            </p>
                                        </div>
                                        <!-- <div class="cb-int__label">New</div> -->
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card end
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="customer_support">
                                    <a href="/integrations/freshdesk-helpdesk/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/icon/freshdesk.svg" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Freshdesk</h3>
                                                <p class="cb-int__about">Helpdesk</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Freshdesk makes customer happiness refreshingly easy, by enabling you to deliver exceptional customer service.
                                            </p>
                                        </div>
                                        <!-- <div class="cb-int__label">New</div> -->
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card end
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="customer_support">
                                    <a href="/integrations/zendesk-helpdesk/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/icon/zendesk.svg" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Zendesk</h3>
                                                <p class="cb-int__about">Helpdesk</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Zendesk offers a beautifully simple system for tracking, prioritizing, and solving customer support tickets.
                                            </p>
                                        </div>
                                        <!-- <div class="cb-int__label">New</div> -->
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="customer_support">
                                    <a href="/integrations/groove-helpdesk/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/icon/groove.svg" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Groove</h3>
                                                <p class="cb-int__about">Helpdesk</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Groove is a simple helpdesk software that helps you to delight your online customers with awesome, personal support.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="finance">
                                    <a href="/integrations/quickbooks/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/icon/quickbooks.svg" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">QuickBooks Online</h3>
                                                <p class="cb-int__about">Finance</p>
                                            </div>
                                            <p class="cb-int__content">
                                                QuickBooks Online is an easy to use accounting software that assists you to manage business finances.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="sales">
                                    <a href="/integrations/salesforce" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/icon/salesforce.svg" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Salesforce</h3>
                                                <p class="cb-int__about">Sales</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Salesforce is a cloud-based customer relationship management (CRM) software solution that lets you keep track of the leads generated, deals closed, and new customers acquired by your business.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="finance">
                                    <a href="/integrations/xero-recurring-billing/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/icon/xero.svg" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Xero</h3>
                                                <p class="cb-int__about">Finance</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Forget your accounting troubles - sync your invoices, payments, credit notes, taxes, etc. from Chargebee to Xero.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="marketing">
                                    <a href="/integrations/zapier/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/icon/zapier.svg" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Zapier</h3>
                                                <p class="cb-int__about">Productivity</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Zapier lets you connect Chargebee with hundreds of web apps and services.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="finance">
                                    <a href="/integrations/avalara/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/icon/avalara.svg" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Avalara</h3>
                                                <p class="cb-int__about">Finance</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Avalara makes sales tax compliance smooth and automatic for businesses of all sizes.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="marketing">
                                    <a href="/integrations/refersion/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/icon/refersion.png" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Refersion</h3>
                                                <p class="cb-int__about">Productivity</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Create an affiliate program that works for your subscription business. Recruit Affiliates, reward referrals and track end-to-end.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="marketing">
                                    <a href="/integrations/mailchimp/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/icon/mailchimp.svg" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">MailChimp</h3>
                                                <p class="cb-int__about">Email Marketing</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Sync your subscribers with MailChimp to create tailored campaigns.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="reporting_analytics">
                                    <a href="/integrations/chartmogul/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/chartmogul/chartmogul-logo-mainpage.png" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">ChartMogul</h3>
                                                <p class="cb-int__about">Analytics</p>
                                            </div>
                                            <p class="cb-int__content">
                                                ChartMogul consolidates your billing data from Chargebee and gives you powerful subscription analytics that help uncover critical insights about your subscription business. 
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="reporting_analytics">
                                    <a href="/integrations/google-analytics/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/icon/google-analytics.svg" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Google Analytics</h3>
                                                <p class="cb-int__about">Analytics</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Google Analytics enables you to track the visitors to your store, and generate reports that will help you with your marketing.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="marketing">
                                    <a href="/integrations/referralcandy-referral-marketing" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/referralcandy/referralcandy.png" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">ReferralCandy</h3>
                                                <p class="cb-int__about">Referral Program</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Supercharge your customer acquisition with Chargebee’s integration with ReferralCandy, for a strong and effective referral program.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="marketing">
                                    <a href="/integrations/friendbuy-referral-marketing/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/friendbuy/friendbuy.svg" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Friendbuy</h3>
                                                <p class="cb-int__about">Referral Program</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Empower your customers to refer more people to your business, and boost your sales with Chargebee’s integration with Friendbuy.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="collaboration">
                                    <a href="/integrations/moxtra/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/icon/moxtra.jpeg" alt="Slack" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Moxtra</h3>
                                                <p class="cb-int__about">Collaboration</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Benefit from easy collaboration with your customers and your subscription business, with Chargebee and Moxtra.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="marketing">
                                    <a href="/integrations/leaddyno-affiliate-marketing/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/leaddyno/leaddyno-logo.jpg" alt="leaddyno" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">LeadDyno</h3>
                                                <p class="cb-int__about">Affiliate Marketing</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Boost Sales for your Subscription Business with Chargebee and LeadDyno for your Affiliate Marketing Program.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <!-- <div class="col-sm-12 col-md-6" data-int-list-content="sales">
                                    <a href="https://marketplace.zoho.com/crm/chargebee" target="_blank" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/zoho/zoho.png" alt="Zoho CRM" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Zoho CRM</h3>
                                                <p class="cb-int__about">Sales</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Drive valuable conversations based on your customer’s subscription information from Chargebee in Zoho CRM, and boost customer acquisition and retention.
                                            </p>
                                        </div>
                                    </a>
                                </div> -->
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="customer_support">
                                    <a href="https://support.natero.com/hc/en-us/articles/222641648" target="_blank" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/natero/natero.png" alt="Natero" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Natero</h3>
                                                <p class="cb-int__about">Customer Success</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Empower your customer success, sales and marketing team to unearth actionable insights from customers’ subscription data and nurture them to use your product, with Chargebee and Natero.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                    Card End
                                    ==================================================== -->
                                <!-- ===================================================
                                    Card start
                                    ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="collaboration">
                                    <a href="/integrations/slack-integration/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/slack/slack-icon.svg" alt="Slack" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Slack</h3>
                                                <p class="cb-int__about">Collaboration</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Never miss an alert related to your subscriptions and payments, thanks to Chargebee's integration with Slack.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                Card End
                                ==================================================== -->
                                <!-- ===================================================
                                Card start
                                ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="marketing">
                                    <a href="https://help.klaviyo.com/hc/en-us/articles/115005082247-Integrate-with-Chargebee" class="cb-int__card" target="_blank">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/klaviyo/klaviyo-logo.png" alt="klaviyo" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Klaviyo</h3>
                                                <p class="cb-int__about">Email Marketing</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Send relevant and personalized emails based on invoice and payment data from your customers.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                Card End
                                ==================================================== -->
                                <!-- ===================================================
                                Card start
                                ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="reporting_analytics">
                                    <a  href="/integrations/profitwell-saas-metrics/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/profitwell/profitwell.png" alt="profitwell" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">ProfitWell</h3>
                                                <p class="cb-int__about">Analytics</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Stay on top of your subscription business, with accurate financial metrics to improve monetization and retention.
                                            </p>
                                        </div>
                                        <!-- <div class="cb-int__label">Coming Soon</div> -->
                                    </a>
                                </div>
                                <!-- ===================================================
                                Card End
                                ==================================================== -->
                                <!-- ===================================================
                                Card start
                                ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="collaboration">
                                    <a  href="/integrations/piesync/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/piesync/piesync.png" alt="PieSync" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">PieSync</h3>
                                                <p class="cb-int__about">Collaboration</p>
                                            </div>
                                            <p class="cb-int__content">
                                                PieSync works in the background and integrates your contacts two-way and real-time between your favorite cloud apps
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                Card End
                                ==================================================== -->
                                <!-- ===================================================
                                Card start
                                ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="collaboration">
                                    <a  href="/integrations/intercom/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/intercom/intercom.png" alt="Intercom" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Intercom</h3>
                                                <p class="cb-int__about">Collaboration</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Personalize customer communication and add context to your customer's journey through your product with Chargebee & Intercom.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                Card End
                                ==================================================== -->
                                <!-- ===================================================
                                Card start
                                ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="collaboration">
                                    <a  href="/integrations/intercom-inbox/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/intercom/intercom.png" alt="Intercom" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Intercom Inbox</h3>
                                                <p class="cb-int__about">Collaboration</p>
                                            </div>
                                            <p class="cb-int__content">
                                                With the Chargebee for Intercom Inbox app, respond faster to customers, close leads quicker, and improve your teams’ performance by taking instant subscription actions within a single tab.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                Card End
                                ==================================================== -->
                                <!-- ===================================================
                                Card start
                                ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="marketing">
                                    <a href="/integrations/firstpromoter/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/firstpromoter/icon.png" alt="FirstPromoter" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">FirstPromoter</h3>
                                                <p class="cb-int__about">Affiliate marketing</p>
                                            </div>
                                            <p class="cb-int__content">
                                                FirstPromoter is the first affordable affiliate tracking and management tool, designed and built exclusively for subscription businesses.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                Card End
                                ==================================================== -->
                                <!-- ===================================================
                                Card start
                                ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="ecommerce">
                                    <a href="/integrations/shipstation/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/shipstation/icon.svg" alt="Shipstation" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Shipstation</h3>
                                                <p class="cb-int__about">Fulfillment platform</p>
                                            </div>
                                            <p class="cb-int__content">
                                                ShipStation is a web-based shipping and fulfillment software that helps in automating fulfillment of orders, managing inventory, and printing labels.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                Card End
                                ==================================================== -->
                                <!-- ===================================================
                                Card start
                                ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="finance">
                                    <a href="/integrations/softrax/" class="cb-int__card">
                                        <div class="cb-int__figure">
                                            <img src="/static/website/version/images/integrations/softrax/softrax-icon.png" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">Softrax</h3>
                                                <p class="cb-int__about">Finance</p>
                                            </div>
                                            <p class="cb-int__content">
                                                Softrax is a leading provider of revenue recognition software, helping enterprise level companies comply with the new standards, ASC 606 and IFRS 15.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                Card End
                                ==================================================== -->
                                <!-- ===================================================
                                Card start
                                ==================================================== -->
                                <div class="col-sm-12 col-md-6" data-int-list-content="sales"> 
                                    <a href="/integrations/getaccept/" class="cb-int__card"> 
                                        <div class="cb-int__figure" style="width: 46px;height: 38px;">
                                            <img src="/static/website/version/images/integrations/getaccept/getaccept-logo.png" alt="" class="img-responsive">
                                        </div>
                                        <div class="cb-int__body">
                                            <div class="cb-int__header">
                                                <h3 class="cb-int__name">GetAccept</h3>
                                                <p class="cb-int__about">sales</p> 
                                            </div>
                                            <p class="cb-int__content">
                                                GetAccept is an online sales enablement and contract management platform that enhances the capabilities of B2B sales teams
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <!-- ===================================================
                                Card End
                                ==================================================== -->
                            </div>
                        </div>
                        <!-- ===================================================
                            Main end
                            ==================================================== -->
                    </div>
                    <!-- Article end -->
                </div>
            </section>
            <div id="cb-bottomsection" class="cb-affix-footer">
                <!-- Testimonial Part start -->
                <section class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                            <a href="/customers/freshdesk/" class="cu-casestudy-sec">
                                
                                <div class="cu-casestudy-sec__header">
                                    <img src="/static/website/version/images/case-study/freshdesk/fd-wall.jpg" alt="" class="img-responsive">
                                </div>
                                <!-- case study content -->
                                <div class="cu-casestudy-sec__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-sec__logo">
                                        <img src="/static/website/version/images/customers/logos/transparent/freshdesk.png" alt="" width="160" class="img-responsive">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-sec__disp">
                                        From 500 to 80,000 Customers: <br class="hidden-xs">
                                        How Freshdesk Unlocked Massive Scale
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-sec__actions">
                                        <div class="cu-casestudy-sec__action cu-animate">Read the story 
                                            <span class="cu-animate__icon">&rarr;</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <!-- Testimonial Part end -->
                <app-footer />
            </div>
        </div>
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
        created() {

        },
        mounted() {
            //Default affix js
            $('#affix-nav').affix({
                offset: {
                    top: 140,
                    bottom: function() {
                        return (this.bottom = $('#cb-bottomsection').outerHeight(true) + 400);
                    }
                }
            });

            // Onclick sidebar to remove affix
            $('[data-int-list]').each(function(index) {
                $(this).click(function() {

                    //Removing affix function
                    $(window).off('.affix');
                    $("#affix-nav")
                        .removeClass("affix affix-top affix-bottom")
                        .removeData("bs.affix");

                    //Removing affix function
                    var tag = $(this).attr("data-int-list");
                    $("[data-int-list-content]").each(function(index, el) {
                        var tagArray = $(el).attr("data-int-list-content").split(',');
                        if(tagArray.length > 1){
                            el.style.display = tagArray[0] == tag || tagArray[1] == tag ? "block" : "none";
                        }else{
                            el.style.display = $(el).attr("data-int-list-content") == tag ? "block" : "none";
                        }
                    });
                    $(this).addClass('cb-int__list--active').siblings().removeClass('cb-int__list--active');

                    // animated top scrolling
                    $('body, html').animate({scrollTop: 0}, 500);
                });

            });

            //Click all to active affix
            $("#all-apps").click(function() {
                window.location.hash = '';
                $('#affix-nav').affix({
                    offset: {
                        top: 140,
                        bottom: function() {
                            return (this.bottom = $('#cb-bottomsection').outerHeight(true) + 400);
                        }
                    }
                });
                $(this).addClass('cb-int__list--active').siblings().removeClass('cb-int__list--active');
                $("[data-int-list-content]").each(function(index, el) {
                    el.style.display = "block";
                });
            });

            // Add Hastag to current URL
            $('[hash-data]').on('click', function(){
                var hashVal = $(this).attr('hash-data');
                if(hashVal){
                    window.location.hash = hashVal;
                }
            })
            var curHashVal = window.location.hash.substr(1);
            if(curHashVal){
                $('[hash-data='+curHashVal+']').trigger('click');
            }
        }
    }
</script>
<style type="text/css">
#ch-js-header-cloned {
    display: none;
}

@media (max-width: 1024px) {
    .affix {
        position: static!important;
    }
}
@media (max-width: 767px) {
    .cb-affix-footer{
        padding-top: 0;
    }
    .l-footer{
        border-top-width: 0;
    }
    .btn-outline-brand{
        display: inline-block;
        width: auto;
        height: 42px;
        padding: 9px 24px;
    }
}
.cu-casestudy-sec{
    margin-left: auto;
    margin-right: auto;
}
@media (max-width: 767px) {
    .cu-casestudy-sec__content{
        min-width: auto;
        margin-right: 0;
    }
}
</style>
