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
            :cb-title="'Get a Free Demo of Chargebee\'s Recurring Billing Automation'"
            :cb-desc="'Request a demo to find out how Chargebee lets you automate routine tasks, manage subscriptions at scale and access metrics that matter.'"
            :cb-url="'/schedule-a-demo/'"
            :cb-image="''"
            :cb-style="'/static/website/version/styles/schedule-a-demo-v1.css'"
            :cb-head-script="''"
            :cb-body-script="'/static/website/version/scripts/email-validator.js,https://js.chilipiper.com/marketing.js,https://js.hsforms.net/forms/v2.js'"
            :cb-has-noindex="false" />
            <!-- /static/website/version/scripts/intlTelInput.js -->
        <!-- ===================================================================
		End: Meta Section
		==================================================================== -->
        <app-header :hasInvert="false" :hideMiddleMenu="true" />
        <!-- ===================================================================
		Start: Body Section
		==================================================================== -->
        <app-body>
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1">
                        <div class="cc-banner">
                            <div class="cc-banner__desc">
                                It looks like your email id is invalid at the moment. Kindly schedule a call with us to get started
                            </div>
                        </div>
                        <div class="cc-demo">
                            <div class="cc-demo__container">
                                <div class="cc-demo__content">
                                    <div class="cc-demo__header hidden-xs hidden-sm">
                                        <h2 class="cc-demo__title">
                                            Subscription Billing <br>and Management Simplified.
                                        </h2>
                                        <p class="cc-demo__desc" style="line-height: 18px;">
                                            <small>See how you can streamline your subscription billing operations with Chargebee.</small>
                                        </p>
                                        <br>
                                        <p class="cc-demo__desc">
                                            <b>Talk to us today. We are just a form fill away. </b>
                                        </p>
                                    </div>

                                    <div class="cc-demo__header visible-xs visible-sm">
                                        <h2 class="cc-demo__title">
                                            Get a Chargebee Demo!
                                        </h2>
                                        <p class="cc-demo__desc" style="line-height: 18px;">
                                            <small>A quick 10-minute call with our product consultants to identify the challenges in your billing workflow and see how Chargebee can help fix it.</small>
                                        </p>
                                        <br>
                                        <p class="cc-demo__desc" style="line-height: 18px;">
                                            <strong>What you'll get from this call</strong>
                                        </p>
                                        <ul style="padding: 0 0 0 20px;">
                                            <li class="cc-demo__desc" style="margin-bottom: 8px; line-height: 18px;">
                                                <small>Identify the pain points in your current subscription billing process.</small>
                                            </li>
                                            <li class="cc-demo__desc" style="margin-bottom: 8px; line-height: 18px;">
                                                <small>Explore how Chargebee can fit into your existing workflow.</small>
                                            </li>
                                            <li class="cc-demo__desc" style="margin-bottom: 8px; line-height: 18px;">
                                                <small>Map the vast set of capabilities offered by Chargebee, to your pains and needs.</small>
                                            </li>
                                            <li class="cc-demo__desc" style="margin-bottom: 8px; line-height: 18px;">
                                                <small>Access to a Chargebee test account to play around with our product!</small>
                                            </li>
                                        </ul><br>
                                        <p class="cc-demo__desc">
                                            <b>Talk to us today, we are just a form fill away.</b>
                                        </p>
                                    </div>
                                </div>
                                <div class="cc-demo__card">
                                    <div class="cc-demo__form"></div>
                                    <div class="cc-demo__label" style="margin-top: 18px; margin-bottom: 9px; font-size: 12px; color: #7f7f7f; text-align: left">
                                        By clicking on Schedule a Demo, you acknowledge having read our <a href="/privacy/" class="cc-link">Privacy Notice</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cc-thankyou">
                            <div class="cc-thankyou__container">
                                <div class="cc-thankyou__content">
                                    <div class="cc-thankyou__header">
                                        <img src="/static/website/version/images/product/common/creation.svg" width="39" alt="" class="img-responsive cc-thankyou__logo" />
                                        <h2 class="cc-thankyou__title">
                                            Thanks for contacting Chargebee.
                                        </h2>
                                        <p class="cc-thankyou__desc">
                                            One of our product experts will be reaching out to you to discuss your subscription billing needs
                                        </p>
                                    </div>
                                    <div class="cc-thankyou__footer hidden-xs hidden-sm">
                                        <p class="cc-thankyou__desc">
                                            Join 1000+ Customers who use Chargebee
                                        </p>
                                        <ul class="cc-customer__list">
                                            <li class="cc-customer__item">
                                                <img src="/static/website/version/images/case-study/codacy-logo-black.svg" width="120" alt="" class="img-responsive" />
                                            </li>
                                            <li class="cc-customer__item">
                                                <img src="/static/website/version/images/compare-competitors/logos/livestorm-logo-black.svg" width="110" alt="" class="img-responsive" />
                                            </li>
                                            <li class="cc-customer__item">
                                                <img src="/static/website/version/images/compare-competitors/logos/freshworks-logo-black.png" width="120" alt="" class="img-responsive" />
                                            </li>
                                            <li class="cc-customer__item">
                                                <img src="/static/website/version/images/compare-competitors/logos/riddle-logo-black.svg" width="100" alt="" class="img-responsive" />
                                            </li>
                                            <li class="cc-customer__item">
                                                <img src="/static/website/version/images/compare-competitors/logos/doodle-logo-black.svg" width="85" alt="" class="img-responsive" />
                                            </li>
                                            <li class="cc-customer__item">
                                                <small><i>and more</i></small>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="cc-thankyou__card">
                                    <img src="/static/website/version/images/icon/calendar.svg" width="90" alt="" class="img-responsive cc-thankyou__logo" />
                                    <h2 class="cc-thankyou__title">
                                        Hate waiting?
                                    </h2>
                                    <p class="cc-thankyou__desc">
                                        Skip the queue and directly book a demo with our product experts.
                                    </p>
                                    <button class="cc-thankyou__action">Book a Call</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ===================================================================
            Start: For VWO Testing
            ==================================================================== -->
            <div class="container" style="display: none">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1">
                        <div class="cc-demo">
                            <div class="cc-demo__container">
                                <div class="cc-demo__content">
                                    <div class="cc-demo__header visible-xs visible-sm">
                                        <p class="cc-demo__desc" style="line-height: 18px;">
                                            <strong>What you'll get from this call</strong>
                                        </p>
                                        <ul style="padding: 0 0 0 20px;">
                                            <li class="cc-demo__desc" style="margin-bottom: 8px; line-height: 18px;">
                                                <small>Identify the pain points in your current subscription billing process.</small>
                                            </li>
                                            <li class="cc-demo__desc" style="margin-bottom: 8px; line-height: 18px;">
                                                <small>Explore how Chargebee can fit into your existing workflow.</small>
                                            </li>
                                            <li class="cc-demo__desc" style="margin-bottom: 8px; line-height: 18px;">
                                                <small>Map the vast set of capabilities offered by Chargebee, to your pains and needs.</small>
                                            </li>
                                            <li class="cc-demo__desc" style="margin-bottom: 8px; line-height: 18px;">
                                                <small>Access to a Chargebee test account to play around with our product!</small>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ===================================================================
            End: For VWO Testing
            ==================================================================== -->

            <div class="cc-footer__bg">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-2 col-md-5 col-md-offset-1 col-lg-4 col-lg-offset-1">
                            <div class="cc-demo__footer">
                                <img src="/static/website/version/images/case-study/getaccept/ga-logo-black.png" width="140" alt="" class="img-responsive cc-demo__logo" />
                                <p class="cc-demo__desc">
                                    Chargebee is a fantastic solution that really meets the needs of any SaaS business. I have had my experience with many platforms both as a leader and as a consultant, and Chargebee is certainly the best.
                                </p>
                                <p class="cc-demo__desc text-right" style="margin-top: 20px;">
                                    <b>- Dailius Wilson, VP Sales and Growth</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </app-body>
        <!-- ===================================================================
		End: Body Section
		==================================================================== -->
    <cookie-banner />
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
    import cookieBanner from '~/components/cookieBanner.vue';
    const axios = require('axios');
    var clearbit = require('clearbit')('sk_aef477c04904e679852167ea2bf6582c');
    
    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
            'cookie-banner': cookieBanner
        },
        // jQuery methods/functions should be placed inside the methods
        methods: {},
        // jQuery interaction should be placed inside the mounted method
        mounted() {
            var user_email_id_val = sessionStorage.getItem("user_email_id") ? sessionStorage.getItem("user_email_id") : '';
            var emailReg = /[a-zA-Z0-9!#$%&'*+//=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+//=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;
            if(user_email_id_val){
                if (emailReg.test(user_email_id_val)) {
                    if(isFreeEmail(user_email_id_val.toLowerCase())){
                        user_email_id_val = ''
                    }
                }else{
                    user_email_id_val = ''
                }
            }
            // Start HS form Script
            var scriptTag = document.createElement("script");
            scriptTag.type = "text/javascript";
            var hsScript = document.createTextNode('hbspt.forms.create({portalId: "3732359",formId: "5a55ee7b-b4f4-479d-8918-18827e2c1153",translations: {en: {forbiddenEmailDomain: "Apologies, we do not accept free emails. Please enter your business email to schedule a call."}}});');
            scriptTag.appendChild(hsScript);

            var frForm = document.getElementsByClassName('cc-demo__form')[0];
            frForm.appendChild(scriptTag);
            var formData;
            window.addEventListener('message', event => {
                if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
                    if(user_email_id_val){
                        $('input[name="email"]').val(user_email_id_val).change();
                        clearbit.Enrichment.find({
                            email: user_email_id_val, 
                            stream: true
                        })
                        .then(function (response) {
                            // console.log(response.data)
                            sessionStorage.removeItem("user_email_id");
                            var person = response.person
                            var company = response.company
                            if(company){
                                var name = company.name ? company.name : '';
                                $('input[name="clearbit_reveal_company_name"]').val(name).change()

                                var tags = company.tags ? company.tags.includes("SAAS") ? 'SAAS' : '' : '';
                                $('input[name="clearbit_reveal_company_tags"]').val(tags).change()

                                var domain = company.domain ? company.domain : '';
                                $('input[name="website"]').val(domain).change()

                                if(company.metrics){
                                    var employeesRange = company.metrics.employeesRange ? company.metrics.employeesRange : '';
                                    $('input[name="clearbit_reveal_company_employee_range"]').val(employeesRange).change()

                                    var employees = company.metrics.employees ? company.metrics.employees : '';
                                    $('input[name="clearbit_reveal_total_employees"]').val(employees).change()

                                    var estimatedAnnualRevenue = company.metrics.estimatedAnnualRevenue ? company.metrics.estimatedAnnualRevenue : '';
                                    $('input[name="clearbit_reveal_company_estimated_annual_revenue"]').val(estimatedAnnualRevenue).change()
                                }
                                if(company.geo){
                                    var country = company.geo.country ? company.geo.country : '';
                                    $('input[name="clearbit_reveal_company_country"]').val(country).change()
                                }
                            }
                            if(person){
                                var firstName = person.name.givenName ? person.name.givenName : '';
                                $('input[name="firstname"]').val(firstName).change()
                            }
                            $('input[name="calendly_source_fs_"]').val('inline-demo').change()
                        })
                    }else{
                        axios.get('https://reveal.clearbit.com/v1/companies/reveal?authorization=pk_df70c67c148371c07dceee61f0c496d8')
                        .then(function (response) {
                            // console.log(response.data)
                            var company = response.data.company
                            if(company){
                                var name = company.name ? company.name : '';
                                $('input[name="clearbit_reveal_company_name"]').val(name).change()

                                var tags = company.tags ? company.tags.includes("SAAS") ? 'SAAS' : '' : '';
                                $('input[name="clearbit_reveal_company_tags"]').val(tags).change()

                                var domain = company.domain ? company.domain : '';
                                $('input[name="website"]').val(domain).change()

                                if(company.metrics){
                                    var employeesRange = company.metrics.employeesRange ? company.metrics.employeesRange : '';
                                    $('input[name="clearbit_reveal_company_employee_range"]').val(employeesRange).change()

                                    var employees = company.metrics.employees ? company.metrics.employees : '';
                                    $('input[name="clearbit_reveal_total_employees"]').val(employees).change()

                                    var estimatedAnnualRevenue = company.metrics.estimatedAnnualRevenue ? company.metrics.estimatedAnnualRevenue : '';
                                    $('input[name="clearbit_reveal_company_estimated_annual_revenue"]').val(estimatedAnnualRevenue).change()
                                }
                                if(company.geo){
                                    var country = company.geo.country ? company.geo.country : '';
                                    $('input[name="clearbit_reveal_company_country"]').val(country).change()
                                }
                            }
                            $('input[name="calendly_source_fs_"]').val('demo-website').change()
                        })
                    }

                    var ip_address = sessionStorage.getItem("ip_add") ? sessionStorage.getItem("ip_add") : '';
                    $('input[name="ip_address"]').val(ip_address).change()

                    axios.get('https://freegeoip.live/json/')
                    .then(function (response) {
                        var countryName = response.data.country_name;
                        $('input[name="ip_country_fs_"]').val(countryName).change()
                    })

                    var tysource = sessionStorage.getItem("tysource") ? sessionStorage.getItem("tysource") : '';
                    $('input[name="utm_source_cbwebsite"]').val(tysource).change()

                    var tymedium = sessionStorage.getItem("tymedium") ? sessionStorage.getItem("tymedium") : '';
                    $('input[name="utm_medium_cbwebsite"]').val(tymedium).change()

                    var campaign = localStorage.getItem('campaign') ? localStorage.getItem('campaign') : '';
                    $('input[name="utm_campaign_cbwebsite"]').val(campaign).change()

                    var utm_term = localStorage.getItem('utm_term') ? localStorage.getItem('utm_term') : '';
                    $('input[name="utm_keyword_cbwebsite"]').val(utm_term).change()

                    var utm_content = localStorage.getItem('utm_content') ? localStorage.getItem('utm_content') : '';
                    $('input[name="utm_content_cbwebsite"]').val(utm_content).change()

                    var gclid = localStorage.getItem('gclid') ? localStorage.getItem('gclid') : '';
                    $('input[name="utm_gclid"]').val(gclid).change()
                }
                if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
                    // console.log(event.data.data)
                    var formDataArray = event.data.data;
                    function objectifyForm(formDataArray){
                        var returnArray = {};
                        for (var i = 0; i < formDataArray.length; i++){
                            returnArray[formDataArray[i]["name"]] = formDataArray[i]["value"];
                        }
                        return returnArray;
                    };
                    formData = objectifyForm(formDataArray);
                    // console.log(formData)
                }
                if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
                    // console.log(formData)
                    $(".cc-demo,.cc-footer__bg").hide();
                    $(".cc-thankyou").show();
                    $(".cc-thankyou button").on("click",function(){
                        ChiliPiper.submit("chargebee","demo-test-router", {map: true, lead:formData});
                    });
                    ChiliPiper.submit("chargebee","demo-test-router", {map: true, lead:formData});
                }
            })
            // End HS form Script
        
            // Current URL
            var url_string = window.location.href

            // Current URL Detailed
            var url = new URL(url_string);

            // Target URL
            var isThisRedirected = url.searchParams.get("forwarded-from");
            if(isThisRedirected && isThisRedirected  == 'trial-signup'){
                $('.cc-banner').show();
            }
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
    #ch-js-burger{
        display: none;
    }
    .cc-banner {
        display: none;
        z-index: 999999;
        background-color: #ffffff;
        padding: 8px 12px;
        font-size: 14px;
        border: 1px solid #dde2e9;
        width: 100%;
        max-width: 640px;
        margin: auto;
        margin-bottom: 30px;
        margin-top: -30px;
        border-radius: 4px;
        box-shadow: 0 1px 1px 0 rgba(90, 122, 190, 0.1), 0 8px 16px 0 rgba(90, 122, 190, 0.2)
    }
    @media (max-width: 991px) {
        .cc-banner{
            margin-top: 0;
        }
    }
    @media (min-width: 1200px) {
        .cc-banner{
            margin-bottom: 70px;
            margin-top: -100px;
        }
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
