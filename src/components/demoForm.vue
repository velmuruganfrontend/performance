<template>
    <div>
        <div class="cc-demo">
            <div class="cc-demo__card">
                <div class="cc-demo__form"></div>
            </div>
        </div>
        <div class="cc-thankyou">
            <div class="cc-thankyou__container">
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
</template>
<!-- ===========================================================================
End: Main Template
============================================================================ -->
<!-- ===========================================================================
Start: Scripts Section
============================================================================ -->
<script>
    const axios = require('axios');
    export default {
        props: ['pageName'],
        data: function() {
            return {
                tags: '',
                employeesRange: '',
                employees: '',
                estimatedAnnualRevenue: '',
                country: '',
                name: ''
            }
        },
        // jQuery methods/functions should be placed inside the methods
        methods: {},
        // jQuery interaction should be placed inside the mounted method
        mounted() {
            let self = this

            // ChiliPiper.scheduling("chargebee", "demo-test-router", { title: "Thanks! What time works best for a quick call?", titleStyle: "Roboto 22px #EA5938" })

            axios.get('https://reveal.clearbit.com/v1/companies/reveal?authorization=pk_df70c67c148371c07dceee61f0c496d8')
            .then(function (response) {
                var company = response.data.company
                if(company){
                    self.name = company.name ? company.name : '';
                    self.tags = company.tags ? company.tags.includes("SAAS") ? 'SAAS' : '' : '';
                    if(company.metrics){
                        self.employeesRange = company.metrics.employeesRange ? company.metrics.employeesRange : '';
                        self.employees = company.metrics.employees ? company.metrics.employees : '';
                        self.estimatedAnnualRevenue = company.metrics.estimatedAnnualRevenue ? company.metrics.estimatedAnnualRevenue : '';
                    }
                    if(company.geo){
                        self.country = company.geo.country ? company.geo.country : '';
                    }
                }
            })


            // Start HS form Script
            // var scriptTag = document.createElement("script");
            // scriptTag.type = "text/javascript";
            // var hsScript = document.createTextNode('var data;hbspt.forms.create({portalId: "3732359",formId: "5a55ee7b-b4f4-479d-8918-18827e2c1153",onFormSubmitted: function($form) {var formDataArray = $form.serializeArray();data = objectifyForm(formDataArray);$(".cc-demo").hide();$(".cc-thankyou").show();function objectifyForm(formDataArray){var returnArray = {};for (var i = 0; i < formDataArray.length; i++){returnArray[formDataArray[i]["name"]] = formDataArray[i]["value"];}return returnArray;}}});$(".cc-thankyou button").on("click",function(){ChiliPiper.submit("chargebee","demo-test-router", {lead:data});});');
            // scriptTag.appendChild(hsScript);

            var hsFormScript='<script "text/javascript">var data;hbspt.forms.create({portalId: "3732359",formId: "5a55ee7b-b4f4-479d-8918-18827e2c1153",onFormSubmitted: function($form) {var formDataArray = $form.serializeArray();data = objectifyForm(formDataArray);$(".cc-demo").hide();$(".cc-thankyou").show();function objectifyForm(formDataArray){var returnArray = {};for (var i = 0; i < formDataArray.length; i++){returnArray[formDataArray[i]["name"]] = formDataArray[i]["value"];}return returnArray;}}});$(".cc-thankyou button").on("click",function(){ChiliPiper.submit("chargebee","demo-test-router", {lead:data});});';
            hsFormScript+="<";
            hsFormScript+="/script>";

            $( window ).load(function() {
                if( $('.cc-demo__form').is(':empty') ) {
                    // var frForm = document.getElementsByClassName('cc-demo__form')[0];
                    // frForm.appendChild(scriptTag);

                    $('.cc-demo__form').append(hsFormScript);
                }
            });
            window.addEventListener('message', event => {
                if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
                    ChiliPiper.scheduling("chargebee", "demo-test-router", { title: "Thanks! What time works best for a quick call?", titleStyle: "Roboto 22px #EA5938" })
                    // console.log("Hi Ayyasamy HS form Loaded");

                    $('input[name="clearbit_reveal_company_name"]').val(self.name)
                    $('input[name="clearbit_reveal_company_tags"]').val(self.tags)
                    $('input[name="clearbit_reveal_company_employee_range"]').val(self.employeesRange)
                    $('input[name="clearbit_reveal_total_employees"]').val(self.employees)
                    $('input[name="clearbit_reveal_company_estimated_annual_revenue"]').val(self.estimatedAnnualRevenue)
                    $('input[name="clearbit_reveal_company_country"]').val(self.country)
                    
                    var calendlySource = self.pageName ? self.pageName : 'demo-website';
                    $('input[name="calendly_source_fs_"]').val(calendlySource)

                    var ip_address = sessionStorage.getItem("ip_add") ? sessionStorage.getItem("ip_add") : '';
                    $('input[name="ip_address"]').val(ip_address)

                    axios.get('https://freegeoip.live/json/')
                    .then(function (response) {
                        var countryName = response.data.country_name;
                        $('input[name="ip_country_fs_"]').val(countryName)
                    })

                    var tysource = sessionStorage.getItem("tysource") ? sessionStorage.getItem("tysource") : '';
                    $('input[name="utm_source_cbwebsite"]').val(tysource)

                    var tymedium = sessionStorage.getItem("tymedium") ? sessionStorage.getItem("tymedium") : '';
                    $('input[name="utm_medium_cbwebsite"]').val(tymedium)

                    var campaign = localStorage.getItem('campaign') ? localStorage.getItem('campaign') : '';
                    $('input[name="utm_campaign_cbwebsite"]').val(campaign)

                    var utm_term = localStorage.getItem('utm_term') ? localStorage.getItem('utm_term') : '';
                    $('input[name="utm_keyword_cbwebsite"]').val(utm_term)

                    var utm_content = localStorage.getItem('utm_content') ? localStorage.getItem('utm_content') : '';
                    $('input[name="utm_content_cbwebsite"]').val(utm_content)

                    var gclid = localStorage.getItem('gclid') ? localStorage.getItem('gclid') : '';
                    $('input[name="utm_gclid"]').val(gclid)
                }
            })
            // End HS form Script
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
.cc-thankyou {
    display: none;
}

.cc-thankyou__card {
    border-radius: 9px;
    background-color: #ffffff;
    box-shadow: 0 1px 9px 0 #CAD3E6;
    padding: 120px 60px;
    text-align: center;
}

@media (max-width: 767px) {
    .cc-thankyou__card {
        padding: 30px 15px;
    }
}

.cc-thankyou__card img,
.cc-thankyou__card .cc-thankyou__desc {
    margin-left: auto;
    margin-right: auto;
}

@media (min-width: 992px) {
    .cc-thankyou__content {
        display: grid;
        grid-gap: 30px;
    }

    .cc-thankyou__content .cc-thankyou__footer {
        align-self: end;
    }
}

.cc-thankyou__title {
    color: #00000A;
    font-family: basis-grotesque, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 24px;
    font-weight: bold;
    letter-spacing: -0.4px;
    line-height: 32px;
    margin-bottom: 12px;
}

.cc-thankyou__desc {
    color: #00000A;
    font-family: basis-grotesque, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    line-height: 24px;
    max-width: 420px;
}

.cc-thankyou__action {
    border-radius: 4px;
    background-color: #6450F0;
    box-shadow: 0 2px 10px 0 rgba(0, 4, 48, 0.08), 0 12px 21px 0 rgba(0, 4, 48, 0.24);
    padding: 14px 24px;
    color: #ffffff;
    font-family: basis-grotesque, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    margin-top: 30px;
    transition: .3s ease;
}

.cc-thankyou__action:hover {
    transition: .3s ease;
    background-color: rgba(100, 80, 240, 0.9);
}

.cc-thankyou__action:hover:after {
    transform: translateX(4px);
}

.cc-thankyou__action:after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 14px;
    margin-left: 8px;
    background: url("/static/website/version/images/home/jan-2019/arrow/button-arrow.svg") center/contain no-repeat;
    transition: .3s ease;
}

.cc-thankyou__logo {
    margin-bottom: 20px;
}

.cc-demo__card {
    border-radius: 9px;
    background-color: #ffffff;
    box-shadow: 0 1px 9px 0 #CAD3E6;
    padding: 50px 40px;
    text-align: center;
}

@media (max-width: 767px) {
    .cc-demo__card {
        padding: 30px 15px;
    }
}

.cc-demo__card img,
.cc-demo__card .cc-thankyou__desc {
    margin-left: auto;
    margin-right: auto;
}

.cc-demo__form {
    text-align: left;
}

.cc-demo__form .actions {
    border-radius: 4px;
    background-color: #6450F0;
    box-shadow: 0 2px 10px 0 rgba(0, 4, 48, 0.08), 0 12px 21px 0 rgba(0, 4, 48, 0.24);
    color: #ffffff;
    font-family: basis-grotesque, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    transition: .3s ease;
    display: inline-block;
    position: relative;
    margin-top: 20px;
}

.cc-demo__form .actions:hover {
    transition: .3s ease;
    background-color: rgba(100, 80, 240, 0.9);
}

.cc-demo__form .actions:hover:after {
    right: 16px;
}

.cc-demo__form .actions:after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 100%;
    background: url("/static/website/version/images/home/jan-2019/arrow/button-arrow.svg") center/contain no-repeat;
    transition: .3s ease;
    position: absolute;
    right: 20px;
}

.cc-demo__form .actions input[type="submit"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 14px 24px;
    padding-right: 42px;
    background: transparent;
    border: none;
    color: #ffffff;
    font-family: basis-grotesque, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;
}

.cc-demo__form input[type="text"],
.cc-demo__form input[type="email"],
.cc-demo__form input[type="tel"] {
    color: #00000A;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    line-height: 16px;
    border: 1px solid #DDE3EC;
    border-radius: 2px;
    background-color: #ffffff;
    padding: 12px 10px;
    width: 100%;
}

.cc-demo__form label {
    color: #00000A;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
}

.cc-demo__form .hs-form-field:not(:last-child) {
    margin-bottom: 24px;
}

.cc-demo__form .hs-error-msgs {
    padding: 0;
    margin: 0;
    list-style: none;
    margin-top: 4px;
}

.cc-demo__form .hs-error-msg {
    margin-bottom: 0;
    color: #fa6164;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
}

.cc-demo__form .inputs-list {
    padding: 0;
    margin: 0;
    list-style: none;
}

.cc-demo__form .input label.error,
.cc-demo__form .hs_error_rollup {
    display: none !important;
}

.cc-demo__form .multi-container {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 30px;
}

.cc-demo__form input[type="checkbox"]+span,
.cc-demo__form input[type="radio"]+span {
    margin-left: 8px;
    vertical-align: middle;
    font-weight: normal;
}

.cc-demo__form input[type="checkbox"],
.cc-demo__form input[type="radio"] {
    margin: 0;
}

@media (max-width: 1199px) {

    .cc-demo__form input[type="checkbox"],
    .cc-demo__form input[type="radio"] {
        vertical-align: middle;
    }
}

.cc-demo__form .hs-fieldtype-intl-phone select {
    height: 42px;
    background-color: transparent;
    box-shadow: none;
    border: 1px solid #DDE3EC;
}

.cc-demo__form input:focus,
.cc-demo__form select:focus {
    outline: none;
    box-shadow: none;
    border-color: #666678;
}

.cc-demo__form .hs-form-required {
    margin-left: 4px;
    color: #fc9091;
}
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->