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
      :cb-title="'Sync customer contacts into your favourite cloud application from Chargebee, using PieSync'" 
      :cb-desc="'Boost your productivity by seamlessly integrating the 2-way contact sync feature, with Chargebee and PieSync'" 
      :cb-url="'/press/piesync-chargebee-integration/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
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
        <!-- ===========================================================================
        Banner Part Start 
        ============================================================================ -->
        <section class="hero hero--invert" style="background-image: none; background-color: #1C1D2F; padding-top: 150px; padding-bottom: 40px">
             <div class="container">
                <div class="row">
                    <div class="col-sm-7 col-md-7 col-md-offset-1"> 
                        <h1 style="color: #fff">
                            Sync Customer Contacts into Your Favorite Cloud Application from Chargebee, Using Piesync
                        </h1>
                    </div>
                </div>
             </div>
        </section>
        <!-- ===========================================================================
        Banner Part End 
        ============================================================================ -->
        <section class="container">
            <div class="row">
                <div class="col-sm-7 col-md-6 col-md-offset-1">
                <!-- ===============================================================
                Top image Part Start 
                ================================================================ -->   
                    <article class="cb-factor">
                        <img src="/static/website/version/images/integrations/piesync/piesync-chargebee.png" alt="" class="img-responsive">
                    </article>
                <!-- ===============================================================
                Top image Part Start 
                ================================================================ --> 
                <!-- ===============================================================
                Content set 1 Part Start 
                ================================================================ --> 
                    <article class="cb-factor" id="introduction">
                        <p class="cb-factor__desc">
                            Chargebee, a secure billing and subscription management solution, has recently partnered with PieSync, a platform providing two-way contact sync for cloud applications. The integration enables businesses to sync their customer data in Chargebee with any other cloud application in real-time, and vice versa, using PieSync. This eliminates manual import or export of data and also helps increase productivity, by avoiding time consuming manual entries.
                        </p>
                        <p class="cb-factor__desc">
                            An average small to medium business runs <a href="https://www.bettercloud.com/monitor/wp-content/uploads/sites/3/2017/05/2017stateofthesaaspoweredworkplace-report-1.pdf" target="_blank">16 different cloud applications</a> at a time. With an unprecedented rise in the use of multiple cloud applications, it gets challenging but crucial to manage data across all of them simultaneously. The <a href="https://www.chargebee.com/integrations/piesync/" target="_blank">Chargebee - PieSync partnership</a> makes it flexible for businesses to maintain a uniform database across Chargebee and other connected cloud applications like MailChimp, Salesforce, Shopify and Zendesk to name a few.
                        </p>
                    </article>
                <!-- ===============================================================
                Content set 1 Part End 
                ================================================================ -->
                <!-- ===============================================================
                Content set 2 Part Start 
                ================================================================ --> 
                    <article class="cb-factor" id="integration-glance">
                        <h2 class="cb-factor__title">
                            The Integration at a Glance
                        </h2>
                        <p class="cb-factor__desc">
                            Let’s consider an example of a business which uses Chargebee for subscription billing and HubSpot CRM for marketing. The business is likely to have different customer databases on both these cloud applications. To ensure that the business has consistent customer touch points, it becomes vital to sync the contact list in both the apps. 
                        </p>
                        <p class="cb-factor__desc">
                            With the Chargebee - Piesync integration, each time  a contact is added or updated in Chargebee, the changes will be auto - synced to HubSpot. Similarly, if the contact list is updated in HubSpot, the changes will get auto updated in Chargebee’s database.This helps keep customer data consistent and accurate across the suite of tools and applications used by the business.
                        </p>
                    </article>
                <!-- ===============================================================
                Content set 2 Part End 
                ================================================================ -->
                <!-- ===============================================================
                Content set 3 Part Start 
                ================================================================ --> 
                    <article class="cb-factor" id="integration-helps">
                        <h2 class="cb-factor__title">
                            How the integration helps
                        </h2>

                        <ul class="cb-factor__list">
                            <li class="cb-factor__item">
                                <div class="cb-factor__item-title">Sync Both Ways</div>
                                <div>
                                    The integration allows a bidirectional push of customer data from Chargebee into the cloud applications supported by PieSync. The integration also offers a unidirectional sync, based on business needs.
                                </div>
                            </li>
                            <li class="cb-factor__item">
                                <div class="cb-factor__item-title">Improve Efficiency</div>
                                <div>
                                    Maintaining consistent customer contacts between applications takes a lot of time and effort, involving manual exports and imports of data.The PieSync integration automates the syncing process in real-time. Chargebee users can use it to enable a two-way sync and synchronize data in real time, across all their connected cloud applications. This eliminates the need for manual extraction of data and deletion of duplicates. 
                                </div>
                            </li>
                            <li class="cb-factor__item">
                                <div class="cb-factor__item-title">Customize with Ease</div>
                                <div>
                                    Users can customize the integration between Chargebee and other connected cloud applications by specifying which fields and categories to merge.
                                </div>
                            </li>
                            <li class="cb-factor__item">
                                <div class="cb-factor__item-title">Increase Productivity</div>
                                <div>
                                    When data is siloed across departments, it prevents the organisation from working collectively as a unit. The integration will help prevent data silos by keeping contacts synced, across all the cloud applications used by various teams in the organisation, from sales to product.
                                </div>
                            </li>
                            <li class="cb-factor__item">
                                <div class="cb-factor__item-title">Ensure Data Accuracy</div>
                                <div>
                                    The two-way sync will help consolidate customer data across Chargebee and other cloud applications, making the data more accurate, providing deeper insights and facilitating data driven decisions. 
                                </div>
                            </li>
                        </ul>


                        <p class="cb-factor__highlight"> 
                            <span style="color: #787882;">The native integration with Chargebee gives users a simple, robust way to keep their sales, marketing, and other business platforms aligned” said <strong>Ewout Meyns, PieSync CEO</strong>. “B2B and B2C business owners use multiple applications and it is a struggle to keep customer contact data consistent between them. PieSync overcomes this issue with intelligent two-way syncing to synchronize contact history between apps,</span> he added.
                        </p>
                        <p class="cb-factor__desc">
                            Learn how to sync Chargebee contacts two-way in real time through PieSync <a href="https://www.youtube.com/watch?v=7OIpRyHKxrM" alt="" target=")blank">here</a>.
                        </p>
                    </article>
                <!-- ===============================================================
                Content set 3 Part End 
                ================================================================ --> 
                </div>
                <!-- ===============================================================
                Content Part End
                ================================================================ --> 
                <!-- ===============================================================
                Nav Part Start 
                ================================================================ --> 
                <div class="col-sm-4 col-sm-offset-1 col-md-3 col-md-offset-2 hidden-xs" style="padding-top: 100px;">
                    <div id="affix-nav" class="cb-affix">
                        <ul class="nav cb-affix__list">
                            <li class="cb-affix__title">
                                PieSync Integration
                            </li>
                            <li class="cb-affix__item active">
                                <a href="#introduction">
                                    Introduction
                                </a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#integration-glance">
                                    The Integration at a Glance
                                </a>
                            </li>
                            <li class="cb-affix__item"> 
                                <a href="#integration-helps">
                                    How the integration helps
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- ===============================================================
                Nav Part End 
                ================================================================ --> 
            </div>
        </section>
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
  
  export default {
    components: {
      'app-meta': AppMeta,
      'app-header': AppHeader,
      'app-footer': AppFooter
    },
    // jQuery methods/functions should be placed inside the methods
    methods: {},
    // jQuery interaction should be placed inside the mounted method
    mounted() {
        $('body').scrollspy({ target: '#affix-nav' })
        $('#affix-nav').affix({
            offset: {
              top: 400,
              bottom: function () {
                return (this.bottom = $('#cb-affix-footer').outerHeight(true) + 50)
            }
        }})
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
    .cb-factor__item-title{
        color: #212121;
        font-weight: bold;
        margin-bottom: 9px;
    }
    #ch-js-header-cloned{
        display: none;
    }
    @media (max-width: 767px){
        .affix{
            position: static!important;
        }
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->