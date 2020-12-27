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
  <div class="body">
    <!-- ===================================================================
    Start: Meta Section
    ==================================================================== -->
    <app-meta
      :cb-title="'Summary of updates to Terms of Service and Privacy Notice - Chargebee Inc'"
      :cb-desc="'Summary of updates to Terms of Service and Privacy Notice'"
      :cb-url="'/privacy/tos-pn-summary/'"
      :cb-image="''"
      :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
      :cb-head-script="''"
      :cb-body-script="''"
      :cb-has-noindex="true" />
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
        <!-- ===============================================================
                            Start Banner Part
        ===============================================================-->
        <section class="hero hero--invert" style="background-image: none; background-color: #7864FF; padding-top: 150px; padding-bottom: 60px">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <h1 style="color: #fff; font-weight: 400">Summary of updates to <br class="visible-lg"><strong style="color: #fff;">Terms of Service</strong></h1>
                    </div>
                </div>
            </div>
        </section>
        <!-- ================= End Banner part =================  -->
        <!-- ===============================================================
                            Start Content Part
        ===============================================================-->
        <section class="container">
            <div class="row">
                <div class="col-sm-7 col-md-6 col-md-offset-3">
                    <!-- ===============================================================
                     Section 1
                     ===============================================================-->
                    <article class="cb-factor">
                        <h1 class="cb-factor__title">
                            Hello there,
                        </h1>
                        <p class="cb-factor__desc">
                            We have updated our <a href="/company/terms/">Terms of Service</a>. The revised Terms of Service will take effect on 20 January 2020.
                        </p>

                        <p class="cb-factor__desc">
                            We encourage you to read the entire Terms of Service to know everything about our updates as we have only highlighted the primary changes to our prior Terms of Service below. The summary below is intended to help you take note of the significant changes. Reading this is not a substitute for reading the revised Terms of Service. If you do not agree to the revised Terms of Service, you may terminate your use of our services or request us to terminate the provision of our services to you. By continuing to use our services after the effective date of the revised Terms of Service, you are agreeing to be bound by the revised Terms of Service.
                        </p>

                        <p class="cb-factor__desc">
                            While our Terms of Service has always been straightforward; we have now restructured it for easy consumption. So, visually, this is a striking change. You will now see a preamble followed by titled sections with section numbers. Certain clauses in the revised Terms of Service relate to use of our websites and these clauses will not materially affect how you use the Services.
                        </p>

                        <ul class="cb-factor__list cb-factor__list--alt">
                            <li class="cb-factor__item">
                                <p class="cb-factor__desc">
                                    We have introduced a new section “<i>Definitions</i>” to help you understand better the capitalized terms used in the Terms of Service, most of which you may already be familiar with. Some of the significant definitions introduced are <i>Group Companies</i> (us and our affiliates), <i>Users</i> (your users), <i>End-Customers</i> (your customers), <i>Pricing Agreement</i> (authorised paperwork containing your subscription details and signed by both of us), <i>Plan</i> (our pricing plans) and <i>Service Data</i> (previously <i>Customer Data</i>, i.e., data you submit to our services, without <i>Sensitive Data</i>).
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <p class="cb-factor__desc">
                                    Section <i>License</i> is now replaced with “<i>Rights to use the Services</i>” where we clarify that, as a SaaS provider, we grant you (our customer) the right to access and use our services.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <p class="cb-factor__desc">
                                    We talk about our ownership of IPR in our services and websites under “<i>Intellectual Property Rights</i>”. This also gives us a right to use any feedback you choose to give us, in our services and websites. We also tell you how to opt out if you do not want us to use your logo on our website identifying you as our customer.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <p class="cb-factor__desc">
                                    We have added standard don’ts under “<i>Your Conduct</i>” most of which are usually prescribed under legal and regulatory frameworks (such as, do not use the services in violation of applicable export control laws or to sell controlled substances).
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <p class="cb-factor__desc">
                                    To offer more clarity on third party products and services used in/along with our services, we have added “<i>Sub-processors, Other Services and Third-Party Content</i>”. If we use a vendor on your behalf, we will take responsibility for them but where you choose to independently enable third party services, you are solely responsible for it.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <p class="cb-factor__desc">
                                    Sections <i>Fees</i> and <i>Termination</i> are now restructured as “<i>Billing and Payments</i>” and “<i>Term, Termination and Suspension</i>” respectively. While the substance of these sections remains essentially the same, we have added operational aspects to them (such as how the fees become payable from soon after you subscribe to a pricing plan or shift between plans and relevant payment due dates, penalties we may levy for late payments). Similarly, we call out that your subscriptions will renew automatically until terminated and we list each of our suspension/termination rights and their consequences. Your right to terminate the Services for convenience remains the same.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <p class="cb-factor__desc">
                                    Section “<i>Confidentiality</i>” remains the same except that we have called out that this section will prevail over any prior non-disclosure agreements between us.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <p class="cb-factor__desc">
                                    We have introduced a new section “<i>Data Security and Privacy</i>” which primarily addresses the different roles that each of us plays with respect to personal data and our respective rights and obligations. We now have a <a href="/privacy/dpa/">Data Processing Addendum</a> stemming from the Terms of Service and forming a contract between us. We request you to read this in detail carefully.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <p class="cb-factor__desc">
                                    From an operational point of view, we have amended sections “<i>Updates</i>” (we may upgrade or modify the services and you have the right to terminate use of the services if they do not suit you), “<i>Data Retention Period</i>” (how long we will retain your data once your Chargebee account is terminated) and introduced “Data Migration” (on your request, we will help you migrate your data to your Chargebee account).
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <p class="cb-factor__desc">
                                    A significant inclusion is the section “<i>Indemnification</i>”. While we will defend and indemnify you for third party intellectual property infringement claims, we expect you to indemnify us for your breach of the Terms of Service.
                                </p>
                            </li>
                        </ul>

                        <p class="cb-factor__desc">
                            Apart from the above, there are other changes to better state the terms and conditions under which we currently provide our services to you. Again, we encourage you to read the revised Terms of Service in detail. 
                        </p>

                        <p class="cb-factor__desc">
                            If you need help or have any questions, please reach out to us at <a href="mailto:support@chargebee.com">support@chargebee.com</a>. We are always here to help.
                        </p>

                        <p class="cb-factor__desc">
                            Thank you,<br />
                            <strong>
                                <i>The Chargebee Team</i>
                            </strong>
                        </p>

                    </article>

                </div>
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
    .hero--invert{
        padding-bottom: 100px;
    }
    .term-anchor{
        color: #7864FF
    }
    .cb-affix__item{
        margin-bottom: 9px;
        margin-top: 9px;
    }
    /*Fixed header hide*/
    #ch-js-header-cloned{
        display: none;
    }
    @media(max-width:767px){
        .hero--invert{
            padding-bottom: 40px;
        }
    }
    @media (max-width: 767px){
        .affix{
            position: static!important;
        }
    }
    @media (min-width: 992px){
        .num-aside{
            display: inline-block;
            margin-left: -26px;
            margin-right: 6px;
            min-width: 20px;
        }
    }
    .cb-factor__list--alt .cb-factor__item:before{
        display: none
    }
    .cb-factor__list{
        list-style: disc;
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
