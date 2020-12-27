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
** Page Styles **
// Use <style> tag to include page level styles after the Page script
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
      :cb-title="'Plans and Pricing - Chargebee'" 
      :cb-desc="'Chargebee offers different levels of pricing to meet all the needs of businesses from small and large, with essential and advanced features.'" 
      :cb-url="'/pricing/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/pricingv2.css,/static/website/version/styles/schedule-a-demo-v1.css'"
      :cb-head-script="''"
      :cb-body-script="'/static/website/version/scripts/fixedHeader.js,https://js.chilipiper.com/marketing.js,https://js.hsforms.net/forms/v2.js'"
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
        <!-- =====================================================================================
        Content Part Start 
        ====================================================================================== -->
        <main class="l-main">
            <pricing :pageName="'Pricing'" />
            <section class="l-main__row schedule-a-demo section2"> 
                <!-- =================================================================================
                Schedule a demo section
                ================================================================================== -->
                <div class="schedule-a-demo">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7"><!--row-->
                                <div class="ct-testimonial__parent">
                                    <div class="ct-testimonial__top">
                                        <h1>
                                            Talk to us to find out the <br> best plan for your business 
                                        </h1>     
                                            <div class="cb-testimonial--secondary  ct-testimonial__content">  
                                            <p class="cb-testimonial__content ct-testimonial__para"> 
                                                We didn't have another choice, we never had to choose between Chargebee and another provider. Chargebee was the clear winner.
                                            </p>
                                            <div class="ct-content__figure">
                                                <div class="ct-figure__img">
                                                    <img src="/static/website/version/images/case-study/fred-stutzman-new.jpg" alt="" class="img-responsive">   
                                                </div>
                                                <div class="ct-figure__author">  
                                                    Fred Stutzman<br>  
                                                    <span class="ct-figure__role">CEO, Freedom</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cc-testimonial__bottom">
                                        <ul class="cc-testimonial__logos">
                                            <li>
                                                <img src="/static/website/version/images/customers/logos/freshworks-light-bg.png" alt="" class="img-responsive">
                                            </li>
                                            <li>
                                                <img src="/static/website/version/images/customers/logos/calendly-new.png" alt="" class="img-responsive">   
                                            </li>
                                            <li>
                                                <img class="img-responsive cloudguru-filter" src="/static/website/version/images/case-study/cloudguru/logo.svg" alt="">
                                            </li>
                                            <li>
                                                <img src="/static/website/version/images/customers/logos/study.png" alt="" class="img-responsive">  
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div><!--row-->
                            <div class="col-md-5"><!--row-->
                                <div class="cc-demo__card">
                                    <div class="cc-demo__form"></div>
                                    <div class="cc-demo__label" style="margin-top: 18px; margin-bottom: 9px; font-size: 12px; color: #7f7f7f; text-align: left">
                                        By clicking on Schedule a Demo, you acknowledge having read our <a href="/privacy/" class="cc-link">Privacy Notice</a>
                                    </div>
                                </div>
                            </div><!--row-->
                        </div>
                    </div>
                </div>       
                <!-- =================================================================================
                Schedule a demo section
                ================================================================================== -->
            
                <!-- =================================================================================
                Thank you page
                ================================================================================== -->   
                <div class="cc-thankyou">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1"> 
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
                <!-- =================================================================================
                Thank you page
                ================================================================================== -->
            </section> 


            <!-- =================================================================================
            Launch Part Start 
            ================================================================================== -->
            <section class="l-main__row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 col-md-9 col-md-offset-3">
                            <div class="cpr-launch">
                                <div class="cpr-launch__container">
                                    <div class="cpr-launch__label">
                                        <div class="cpr-launch__label-container">Get started for free</div>
                                    </div>
                                    <h2 class="cpr-launch__title">
                                        For Early Stage Startups
                                    </h2>
                                    <p class="cpr-launch__desc">
                                        Are you a newly launched business making less than USD 50K in revenue? Chargebee for Startups is meant for you. Focus on building and launching your product, while we take care of your billing.
                                    </p>

                                    <div class="cpr-launch__actions">
                                        <!-- <div class="cpr-launch__action">
                                            <a href="/trial-signup/?ref=pricingPage" class="cpr-link cpr-link--icon">Create account</a>
                                        </div> -->
                                        <div class="cpr-launch__action">
                                            <a href="/launch/?ref=pricingPage" class="cpr-link cpr-link--icon">Learn more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- =================================================================================
            Launch Part Start 
            ================================================================================== -->
            <!-- =============================================================================
            Testimonial and Faq Start 
            ============================================================================== -->
            <div class="l-main__row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="cpr-footer">
                                <div class="row">
                                    <!-- =====================================================
                                    Pricing Footer content Start 
                                    ====================================================== -->
                                    <div class="col-sm-5">
                                        <!-- =================================================
                                        Testimonial Start 
                                        ================================================== -->
                                        <div class="cpr-footer__content">
                                            <div class="cb-testimonial cb-testimonial--secondary">
                                                <div class="cb-testimonial__figure">
                                                    <img src="/static/website/version/images/customers/will-jennings.png" alt="" class="img-responsive">
                                                </div>
                                                <div class="cb-testimonial__content">
                                                    Being able to automatically reconcile Stripe payments, transfers and fees is a huge win and as with everything Chargebee does, <span class="cb-testimonial__mark">it's solid and feels like they've thought of everything.</span>
                                                </div>
                                                <div class="cb-testimonial__footer">
                                                    <div class="cb-testimonial__author">Will Jennings</div>
                                                    <div class="cb-testimonial__role">Managing Director, Countfire</div>
                                                </div>
                                            </div>
                                            <!-- =============================================
                                            Testimonial End 
                                            ============================================== -->
                                            <!-- =============================================
                                            Panel Start 
                                            ============================================== -->
                                            <div class="cpr-panel cpr-panel--mt-xl">
                                                <a href="/nonprofit/" class="cpr-panel__container">
                                                    <div class="cpr-panel__title">Not-for-Profit</div>
                                                    <div class="cpr-panel__desc">Rallying for a good cause? <span class="cpr-link cpr-link--icon">We’d love to help</span></div>
                                                </a>
                                            </div>
                                            <!-- =============================================
                                            Panel End 
                                            ============================================== -->
                                        </div>
                                    </div>
                                    <!-- =====================================================
                                    Pricing Footer content End 
                                    ====================================================== -->
                                    <!-- =====================================================
                                    FAQ Start 
                                    ====================================================== -->
                                    <div class="col-sm-6 col-sm-offset-1">
                                        <div class="cb-panels">
                                            <div class="cb-panels__title">
                                                Frequently Asked Questions
                                            </div>
                                            <div class="cb-panels__container">
                                                <!-- =============================================
                                                Panel Start 
                                                ============================================== -->
                                                <div class="cb-panel" data-panel="true">
                                                    <div class="cb-panel__bg"></div>
                                                    <div class="cb-panel__title">
                                                        Is your pricing model based on invoices or revenue?
                                                    </div>
                                                    <div class="cb-panel__desc" data-panel-desc="true">
                                                        Our default pricing model is based on revenue. But, if you believe invoice-based pricing suits your business better, let us know and we’ll be happy to accommodate it.
                                                    </div>
                                                </div>
                                                <!-- =============================================
                                                Panel End 
                                                ============================================== -->
                                                <!-- =============================================
                                                Panel Start 
                                                ============================================== -->
                                                <div class="cb-panel" data-panel="true">
                                                    <div class="cb-panel__bg"></div>
                                                    <div class="cb-panel__title">
                                                        What is counted as revenue?
                                                    </div>
                                                    <div class="cb-panel__desc" data-panel-desc="true">
                                                        The total value of invoices generated, excluding void invoices. 
                                                    </div>
                                                </div>
                                                <!-- =============================================
                                                Panel End 
                                                ============================================== -->
                                                <!-- =============================================
                                                Panel Start 
                                                ============================================== -->
                                                <!-- <div class="cb-panel" data-panel="true">
                                                    <div class="cb-panel__bg"></div>
                                                    <div class="cb-panel__title">
                                                        How do the overage charges work?
                                                    </div>
                                                    <div class="cb-panel__desc" data-panel-desc="true">
                                                        Depending on the pricing model you choose — invoice-based or revenue-based — a certain number of invoices or an amount of processed revenue is included in the base price. On exceeding this usage, the additional usage or overage, will be charged at a flat fee (for invoice-based pricing) or a percentage (for revenue-based pricing). For instance, on the Rise plan, until your monthly processed revenue remains under {{currencySymbol}}{{riseRevenue}}, there are no overages. Once you cross {{currencySymbol}}{{riseRevenue}}/<span v-if="isYearly">yr</span><span v-else>mo</span>, you'll be charged the <span v-if="!isYearly">base price plus</span> 0.6% of the overage.
                                                    </div>
                                                </div> -->
                                                <!-- =============================================
                                                Panel End 
                                                ============================================== -->
                                                <!-- =============================================
                                                Panel Start 
                                                ============================================== -->
                                                <div class="cb-panel" data-panel="true">
                                                    <div class="cb-panel__bg"></div>
                                                    <div class="cb-panel__title">
                                                        Will I have to pay separately for multiple sites with Chargebee?
                                                    </div>
                                                    <div class="cb-panel__desc" data-panel-desc="true">
                                                        We do not charge extra for the additional sites you create, and the charges will only be based on the total revenue (or number of invoices) generated across all your sites.
                                                    </div>
                                                </div>
                                                <!-- =============================================
                                                Panel End 
                                                ============================================== -->
                                                <!-- =============================================
                                                Panel Start 
                                                ============================================== -->
                                                <div class="cb-panel" data-panel="true">
                                                    <div class="cb-panel__bg"></div>
                                                    <div class="cb-panel__title">
                                                        Do I get a sandbox (test environment)?
                                                    </div>
                                                    <div class="cb-panel__desc" data-panel-desc="true">
                                                        Absolutely. We provide a free TEST environment with every domain signed-up with us. You may use it to explore, develop & test before you go LIVE.
                                                    </div>
                                                </div>
                                                <!-- =============================================
                                                Panel End 
                                                ============================================== -->
                                                <!-- =============================================
                                                Panel Start 
                                                ============================================== -->
                                                <div class="cb-panel" data-panel="true">
                                                    <div class="cb-panel__bg"></div>
                                                    <div class="cb-panel__title">
                                                        Are there any cancellation charges?
                                                    </div>
                                                    <div class="cb-panel__desc" data-panel-desc="true">
                                                        No, we do not have cancellation charges. And there are no data lock-ins. You are free to cancel your account anytime.
                                                    </div>
                                                </div>
                                                <!-- =============================================
                                                Panel End 
                                                ============================================== -->
                                                <!-- =============================================
                                                Panel Start 
                                                ============================================== -->
                                                <div class="cb-panel" data-panel="true">
                                                    <div class="cb-panel__bg"></div>
                                                    <div class="cb-panel__title">
                                                        Is EU VAT included in the pricing?
                                                    </div>
                                                    <div class="cb-panel__desc" data-panel-desc="true">
                                                        The Prices as applicable are exclusive of EU VAT to EU Merchants and shall be charged additionally for B2C merchants in accordance with EU VAT Rules.
                                                    </div>
                                                </div>
                                                <!-- =============================================
                                                Panel End 
                                                ============================================== -->
                                                <!-- =============================================
                                                Panel Start 
                                                ============================================== -->
                                                <div class="cb-panel" style="padding: 0;">
                                                    <a href="/faq/" class="cb-panel__link cpr-link cpr-link--icon">
                                                        Read more
                                                    </a>
                                                </div>
                                                <!-- =============================================
                                                Panel End 
                                                ============================================== -->
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =====================================================
                                    FAQ End 
                                    ====================================================== -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- =============================================================================
            Testimonial and Faq End 
            ============================================================================== -->
        </main>
        <!-- =======================================================================================
        Content Part End 
        ======================================================================================== -->
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
 import Pricing from '~/components/pricing.vue';
 const axios = require('axios');
  
  export default {
    components: {
      'app-meta': AppMeta,
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'pricing': Pricing
    },
    mounted() {
        // For Strikeout Animation
        $(window).on('load', function(){
            setTimeout(function(){
                $('.cpr-highlight').addClass('cpr-highlight--active')
            }, 750)
            //For Panel = FAQ list click
            $('[data-panel]').click(function() {
                $(this).toggleClass('cb-panel--active').siblings().removeClass('cb-panel--active');
            });
        })
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
                    $('input[name="calendly_source_fs_"]').val('demo-pricing').change()
                })

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
                $(".schedule-a-demo").hide();  
                $(".cc-thankyou").show();
                $(".cc-thankyou button").on("click",function(){
                    ChiliPiper.submit("chargebee","demo-test-router", {map: true, lead:formData});
                });
                ChiliPiper.submit("chargebee","demo-test-router", {map: true, lead:formData});
            }
        })
        // End HS form Script
    },
  }
</script>
<!-- ===========================================================================
End: Script Section
============================================================================ -->
<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css">
    #ch-js-header-cloned {
        display: none;
    }
    /*Aniruth Experiment schedule-a-demo*/
    body{
        padding-top: 0; 
    }
    .schedule-a-demo{
        background: #EEF0F2;
        padding: 80px 0;  
    }
    .cc-testimonial__logos {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0px;
    padding-left: 0px;
    margin-bottom: 0; 
    flex-wrap: wrap; 
    width: 85%;  
    margin: 0 auto;  
    }
    .cc-testimonial__logos li {
        flex: 1;
        margin: 0px 5px;
    }
    .cc-testimonial__logos li img {
        max-width: 115px;    
        margin: 0 auto;  
    } 
    .cc-testimonial__bottom {
        margin-top: 65px; 
        position: relative;
        padding-top: 0px;   
    }
     .cc-testimonial__bottom:before {
         content: '';
         border-top: 1px solid  #E0E0E4;
         width: 650px;   
         position: absolute; 
         left: 40px;
         top: -23px; 
    }
    .cloudguru-filter{ 
        -webkit-filter: brightness(1) invert(1);
        filter: brightness(1) invert(1);
        max-width: 140px !important;  
    }
    .ct-testimonial__content {
    display: flex;
    align-items: center;    
    justify-content: space-between; 
    max-width: 500px; 
    margin: 0 auto;
    }
    .ct-testimonial__top h1 {
        font-size: 34px;
        text-align: center;
        font-weight: bold;
        font-family: basis-grotesque, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        letter-spacing: -1.28px;
        line-height: 40px;
        letter-spacing: -1.28px;
        margin-bottom: 68px;
    }
    .ct-testimonial__para {
        margin-bottom: 0px; 
        width: 66%; 
        font-size: 18px;
        position: relative;
        text-align: left; 
     }
    .ct-content__figure{
        flex: 0 0 160px; 
        text-align: center;  
        padding-left: 54px;
    }
    .ct-testimonial__parent { 
        margin: 0 auto;
        margin-top: 50px; 
    }
    .ct-figure__img img {
        max-width: 60px;
        border-radius: 50%;
        margin: 0 auto;
    }
    .ct-figure__author {
        font-size: 13px;
        font-weight: bold;
        margin-top: 15px;
        line-height: 20px;    
    } 
    @media only screen and (max-width: 1999px)  {  
       .cc-testimonial__logos{
            width: 100%; 
        } 
    }
     @media only screen and (max-width: 1024px)  {  
        .cc-testimonial__logos li img{
            width: 100%; 
            max-width: 130px; 
        }
    }
    @media only screen and (max-width: 991px) {
        .ct-testimonial__parent {
         margin-top: 0px;
        } 
        .ct-testimonial__top h1{
            font-size: 28px;
            line-height: 36px;
        }
        .ct-testimonial__parent {
            margin-top: 0px;
        }
        .ct-testimonial__content {
            display: block;
        }
        .ct-testimonial__para {
            width: 100%;
            text-align: center;
        }  
        .ct-content__figure {
            margin-top: 30px;
        }
        .cc-testimonial__logos li {
          margin-bottom: 15px;
        } 
        .ct-testimonial__top h1 br {
            display: none;
        } 
        .ct-content__figure{
            padding-left: 0; 
        }
    }
    @media only screen and (max-width: 768px) { 
         .cc-testimonial__bottom:before{ 
            width: 100%;
            left: auto; 
        }
        .schedule-a-demo{
            padding: 40px 0; 
        }
    }
    @media only screen and (max-width: 568px) { 
         .cc-testimonial__logos li {
            flex: 0 0 50%;
            margin: 10px 0px;
        }  
        .schedule-a-demo{
            padding: 40px 0;
        }
        .ct-testimonial__content {
             width: 100% !important;
       }
       .ct-content__figure .ct-figure__author {
            width: 100% !important;  
            text-align: center;
        }
    }
/*Aniruth Experiment schedule-a-demo*/

</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
