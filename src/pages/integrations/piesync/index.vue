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
      :cb-title="'2-way sync of contacts with Chargebee, using PieSync'" 
      :cb-desc="'Maintain consistency in your customer contacts with PieSync’s integration with Chargebee, that allows bidirectional real-time sync.'" 
      :cb-url="'/integrations/piesync/'" 
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
    <app-header :hasInvert="false" />
    <!-- ===================================================================
    End: Header Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Body Section
    ==================================================================== -->
    <div class="cb-body">
​
        <!-- Start Main Body Content -->
        <section class="container integration xero ff-acuminpro">
            <nav class="integration__breadcrumb">
                <a href="/integrations/">Integrations</a>
                /
                <span>PieSync</span>
            </nav>
            <section class="integration__right">
                <h1>
                    Sync contacts both ways between Chargebee and your favourite app real-time, with PieSync
                </h1>
                <div class="integration__intro">
                    <img class="img-responsive" src="/static/website/version/images/integrations/piesync/piesync-chargebee.png">
                    <br><br>
                    <p>Creating and storing customers in your cloud-based apps is a necessary first step. But if you were using several such apps to run your business, then that step becomes redundant. A lot of businesses use the time-wasting import/export method, but your app is never really up-to-date.</p>
                    <br>
                    <p>Chargebee’s suite of integrations now includes PieSync that allows you to sync customer contacts bidirectionally, between Chargebee and your favourite app real-time. </p>
                </div>    
            </section>
            <section class="integration__leftmenu hidden-xs">
                <div class="integration__logo hidden-xs">
                    <div class="integration__logo-box" style="background-color:#fff; border: 1px solid #eee;">
                        <img src="/static/website/version/images/integrations/piesync/piesync.png" alt="Piesync" />
                    </div>
                </div>
                <section class="integration__desc">
                    <p>
                        PieSync syncs your contacts 2-way and in real-time between your favorite cloud apps.
                    </p>
                </section>
                <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                <nav class="integration__nav hidden-xs">
                    <a href="/pricing/">Pricing</a>
                    <a href="https://help.piesync.com/connector-apps/chargebee">Documentation</a>
                    <a href="/company/terms/">Terms of Service</a>
                    <a href="/privacy/">Privacy Policy</a>
                    <a href="https://support.chargebee.com/">Support</a>
                    <a href="http://status.chargebee.com/">Status</a>
                </nav>
            </section>
            <div class="clearfix"></div>
            <section class="integration--row">
                <div class="cb-useguide__tab cb-useguide__tab-alt">
                    <div>
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active">
                                <a href="#tab1" role="tab" data-toggle="tab">Create contacts instantly</a>
                            </li>
                            <li role="presentation">
                                <a href="#tab2" role="tab" data-toggle="tab">Save time and boost productivity</a>
                            </li>
                            <li role="presentation">
                                <a href="#tab3" role="tab" data-toggle="tab">Get the most out of accurate data</a>
                            </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="tab1">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <img src="/static/website/version/images/integrations/piesync/create-contacts-instantly.png" class="img-responsive" width="750" />
                                    </div>
                                    <div class="col-sm-4">
                                        
                                        <p>On an average, small and medium businesses use 13+ cloud apps at the same time, for various tasks. Exporting and importing customer contacts for each of these apps can be cumbersome. With the PieSync integration, you can simply connect your apps, while the contacts are created and synced across different apps instantly.</p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="tab2">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <img src="/static/website/version/images/integrations/piesync/save-time-boost-productivity.png" class="img-responsive"  width="650" />
                                    </div>
                                    <div class="col-sm-4">
                                        
                                        <p>The sanity of contacts in your apps is maintained with a clean list, devoid of duplicates and incomplete data. PieSync transfers data and updates across the connected cloud apps, automatically, saving you time from manual data entry, and boosting your productivity</p>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="tab3">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <img src="/static/website/version/images/integrations/piesync/accurate-data.png" class="img-responsive" width="650" />
                                    </div>
                                    <div class="col-sm-4">
                                        
                                        <p>Siloed data across different teams and functions can lower the impact on business decision-making, with lack of available shared customer information. PieSync allows you to sync across accounting, sales, marketing, and customer success platforms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="integration--row  visible-xs">
                <!-- mobile only section -->
                <section class="integration__leftmenu clearfix">
                    <section class="integration__desc">
                        <p>
                            Visit <strong>PieSync</strong> to learn more about setting up this integration.
                        </p>
                        <p>
                            Chargebee’s suite of integrations now includes PieSync that allows you to sync customer contacts bidirectionally, between Chargebee and your favourite app real-time. 
                        </p>
                    </section>
                    <a cn-mark-signup="true" href="/trial-signup/?ref=integrations_page" class="btn btn-primary">Sign Up for Chargebee</a>
                </section>
                
            </section>
            <!-- other screens except mobile -->
            <div class="hidden-xs" style="margin-top: 120px;">
                <h2 class="integration__faqs__title">FAQs</h2>
                <section class="col-md-6 col-sm-6 nopadding" role="tab-list">
                    <section class="integration__faqs">
                        <ul class="faqlist">
                            <li class="active">
                                <a href="#sync-contact" role="tab" data-toggle="tab">Do I need a paid account in PieSync to sync contacts between Chargebee and another app?</a>
                            </li>
                            <li>
                                <a href="#chargebee-otherapp" role="tab" data-toggle="tab">How frequently does PieSync sync contacts between Chargebee and any other app?</a>
                            </li>
                            <li>
                                <a href="#sync-all" role="tab" data-toggle="tab">Can I sync Accounts, Organizations, Companies, Invoices, Deals, Tasks, Opportunities etc.?</a>
                            </li>
                            <li>
                                <a href="#custom-fields" role="tab" data-toggle="tab">Can I sync custom fields?</a>
                            </li>
                        </ul>
                    </section>
                </section>
                <section class="col-md-6 col-sm-6 integration__usage-limits tab-content">
                    <div id="sync-contact" role="tabpanel" class="tab-pane active">
                        <p>This integration is available across all plans in Chargebee, and you can sign up for our Launch Plan (that allows you to use Chargebee for free up to first $50K in your aggregate revenue).</p>
                    </div>
                    <div id="chargebee-otherapp" role="tabpanel" class="tab-pane">
                        <p>Chargebee syncs contacts real-time with your app using PieSync.</p>
                    </div>
                    <div id="sync-all" role="tabpanel" class="tab-pane">
                        <p>No, PieSync only syncs contacts between your apps and Chargebee. </p>
                    </div>
                    <div id="custom-fields" role="tabpanel" class="tab-pane">
                        <p>Yes. If PieSync supports custom fields for the apps you have connected, you can map them via custom mappings. More information on custom mappings here!</p>
                    </div>
                </section>
            </div>
        </section>
        <!-- End Main Body Content -->
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
        $('.pr-tab__plan-inv').tooltip({
            'show': true,
            'placement': 'bottom'
        });
    }
  }
</script>
<!-- ===========================================================================
End: Script Section
============================================================================ -->
<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css"></style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
