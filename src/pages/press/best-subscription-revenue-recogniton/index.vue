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
      :cb-title="'Chargebee Unveils Features to Improve Revenue Recognition and Optimize Revenue Operations for Subscription-Based Businesses'" 
      :cb-desc="'New Additions to Industry-Leading Subscription Management Platform Include Revenue Recognition, Optimization and Visibility, Customer Acquisition Tools, Enhanced Usability and New Security Features'" 
      :cb-url="'/press/best-subscription-revenue-recogniton/'" 
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
                    <div class="col-sm-9 col-md-10 col-md-offset-1"> 
                        <h1 style="color: #fff">
                            Chargebee Unveils Features to Improve Revenue Recognition and Optimize Revenue Operations for Subscription-Based Businesses
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
                    <!-- <article class="cb-factor">
                        <img src="/static/website/version/images/press/card-abandonment/cb-card-abandonment.png" alt="" class="img-responsive">
                    </article> -->
                    <!-- ===============================================================
                    Top image Part Start 
                    ================================================================ --> 
                    <!-- ===============================================================
                    Content set 1 Part Start 
                    ================================================================ --> 
                    <article class="cb-factor" id="introduction">
                        <p class="cb-factor__desc">
                            <i>New Additions to Industry-Leading Subscription Management Platform Include Revenue Recognition, Optimization and Visibility, Customer Acquisition Tools, Enhanced Usability and New Security Features</i>
                        </p>
                    </article>
                    <article class="cb-factor" id="main-content">
                        <h2 class="cb-factor__title">
                            SAN FRANCISCO, CA -- May 21, 2019
                        </h2>
                        <p class="cb-factor__desc">
                            Chargebee, an emerging leader in SaaS subscription management and recurring billing solutions with more than 1,700 global customers, today announced its summer 2019 release focusing on agility, revenue operations optimization, usability and security across the Chargebee Subscription Management Platform. The release further powers the needs of high-growth subscription-based businesses with a higher level of automation and business intelligence. 
                        </p>
                        <p class="cb-factor__desc">
                            Other new features include the introduction of Subscription Time Machine, an industry first that allows businesses to easily test and simulate new and complex configurations, billing rules and scheduled subscription lifecycle workflows to optimize sales and streamline the customer experience. Other new additions include enhanced customer acquisition tools, new pricing models, account hierarchy, enhanced Salesforce integration, new integrations with Netsuite and Intacct ERP, upgraded usability with a redesigned user interface (UI) and upgraded security, including single sign-on (SSO) and multi-factor authentication (MFA) functionality.
                        </p>
                        <p class="cb-factor__desc">
                            Subscription-based businesses need a platform that can handle real-time changes based on customer demands throughout the subscription lifecycle. Revenue recognition is an example of one complex process for subscription companies, where usage, billing and revenue by default occur on different schedules. Improperly managed accounting rules can become a risk to the business, and the new revenue recognition rule ASC 606 has made it even more challenging. Chargebee's new platform enhancements address these needs by automating revenue management and revenue allocation in compliance with ASC 606 regulations, allowing businesses to choose from various templates and recognition methods that suit their business.
                        </p>
                        <p class="cb-factor__desc">
                            “Managing subscription-based business is complex, as customer demands are dynamic and businesses need agility to respond to these requests in real-time,” said Omar Nawaz, chief product officer (CPO) at Chargebee. “Chargebee is focused on applying automation to optimize revenue operations from order-to-revenue, helping businesses maximize their revenue, at scale.”
                        </p>
                        <p class="cb-factor__desc">
                            The advancements to the Chargebee subscription billing platform provide organizations with a new level of control to further improve the overall experience for their end users. The additions make the platform an even more complete and robust end-to-end solution that allows for quick and intelligent business decisions in real time and the ability to optimize the user experience across the entire customer lifecycle, from order to revenue. New features include:
                        </p>
                    </article>
                    <!-- ===============================================================
                    Content set 1 Part End 
                    ================================================================ -->
                    <!-- ===============================================================
                    Content set 2 Part Start 
                    ================================================================ --> 
                    <article class="cb-factor" id="feature-1">
                        <h2 class="cb-factor__title">
                            Subscription Time Machine
                        </h2>
                        <p class="cb-factor__desc">
                            A first-of-its-kind tool allowing organizations to test and visualize complex billing rules across the subscription lifecycle so real configurations work exactly as wanted when they are deployed. Subscription businesses can face many changes across the sales ecosystem, including new pricing and plan models, shifts in global tax regulations, new currencies and new payment methods. Subscription Time Machine allows businesses to simulate any and all of these changes as appropriate so they can be implemented with no surprises, improving the customer experience by avoiding unexpected payment transactions or incorrect notifications.
                        </p>
                    </article>
                    <article class="cb-factor" id="feature-2">
                        <h2 class="cb-factor__title">
                            Improved revenue recognition and optimization
                        </h2>
                        <p class="cb-factor__desc">
                            A partnership with revenue management software leader <a href="https://www.softrax.com/" target="_blank">Softrax</a> allows customers to easily and automatically optimize revenue recognition under the new ASC 606 accounting standards. The partnership empowers our customers with out-of-the-box support for complex financial arrangements inherent to their subscription-based businesses.
                        </p>
                    </article>
                    <article class="cb-factor" id="feature-3">
                        <h2 class="cb-factor__title">
                            Account hierarchy
                        </h2>
                        <p class="cb-factor__desc">
                            Customer organizational structures can be complex, but Chargebee's new account hierarchy makes it simple for subscription-based businesses to sell into multiple subsidiaries of a company, business units across geographies, or even multiple departments within the organization, without losing sight of the big picture. The feature allows businesses to roll up invoices for multiple units into one parent invoice, or directly invoice each unit.
                        </p>
                    </article>
                    <article class="cb-factor" id="feature-4">
                        <h2 class="cb-factor__title">
                            Enhanced Salesforce integration
                        </h2>
                        <p class="cb-factor__desc">
                            Get accurate sales and revenue forecasts and eliminate manual price calculations by adding Chargebee plans and add-ons with any pricing model directly into Salesforce. Sales teams can now manage subscriptions and get a unified view of customers with multiple sites from within Salesforce.
                        </p>
                    </article>
                    <article class="cb-factor" id="feature-5">
                        <h2 class="cb-factor__title">
                            Improved security features
                        </h2>
                        <p class="cb-factor__desc">
                            Organizations can now enable single sign-on (SSO) for Chargebee in order to meet corporate security compliance using the SAML 2.0 XML-based protocol. Businesses can also enable multi-factor authentication (MFA) through third parties such as Google.
                        </p>
                    </article>
                    <article class="cb-factor" id="feature-6">
                        <h2 class="cb-factor__title">
                            Modernized user interface
                        </h2>
                        <p class="cb-factor__desc">
                            Chargebee now features a responsive user interface (UI) that is intuitive to use and allows for seamless access on mobile devices. Customers can now improve their back office team efficiency by customizing their views to see all the important information in a single page and optimize their workflows, allowing them to focus on revenue growth.
                        </p>
                        <br>
                        <p class="cb-factor__desc">
                            For more information on Chargebee and its new product features, visit <a href="/">www.chargebee.com.</a>
                        </p>
                    </article>
                    <article class="cb-factor" id="about-chargebee">
                        <h2 class="cb-factor__title">
                            About Chargebee
                        </h2>
                        <p class="cb-factor__desc">
                            Chargebee automates revenue operations of high-growth subscription-based business. Its SaaS platform helps businesses manage and grow their revenue by automating subscriptions, billing, invoicing, payments and revenue recognition processes and it provides key reports, metrics and insights into their subscription business. Founded in 2011, Chargebee is used by over 1,700 companies in 50 countries using more than 120 currencies. For more information, visit <a href="http://cts.businesswire.com/ct/CT?id=smartlink&url=http%3A%2F%2Fwww.chargebee.com&esheet=51775261&newsitemid=20180320005567&lan=en-US&anchor=www.chargebee.com&index=1&md5=4fe4c098c95485b5338960297747a086" target="_blank">www.chargebee.com</a> or follow us on Twitter <a href="" target="_blank">@chargebee</a>.
                        </p>
                    </article>
                    <article class="cb-factor" id="contact">
                        <h2 class="cb-factor__title">
                            Contact
                        </h2>
                        <p class="cb-factor__desc">
                            <a href="mailto:media@chargebee.com">media@chargebee.com</a>
                        </p>
                    </article>
                    <!-- ===============================================================
                    Content set 2 Part End 
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
                            <!-- <li class="cb-affix__title">
                                SAN FRANCISCO, CA -- May 21, 2019
                            </li> -->
                            <li class="cb-affix__item active">
                                <a href="#introduction">
                                    Introduction
                                </a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#main-content">
                                    SAN FRANCISCO, CA -- May 21, 2019
                                </a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#feature-1">
                                    Subscription Time Machine
                                </a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#feature-2">
                                    Improved revenue recognition and optimization
                                </a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#feature-3">
                                    Account hierarchy
                                </a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#feature-4">
                                    Enhanced Salesforce integration
                                </a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#feature-5">
                                    Improved security features
                                </a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#feature-6">
                                    Modernized user interface
                                </a>
                            </li>
                            <li class="cb-affix__item"> 
                                <a href="#about-chargebee">
                                    About Chargebee
                                </a>
                            </li>
                            <li class="cb-affix__item"> 
                                <a href="#contact">
                                    Contact
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