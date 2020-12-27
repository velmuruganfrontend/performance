<template>
    <div>
        <app-meta 
            :cb-title="'Sign Up - Get Your Free Sandbox - Chargebee'" 
            :cb-desc="'Sign up for Chargebee and make recurring billing, a breeze. Create a free test account to explore all our power packed features. It\'s easy to register.'" 
            :cb-url="'/trial-signup/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/signup.css,/static/website/version/styles/intlTelInput.css'"
            :cb-head-script="''"
            :cb-body-script="'/static/website/version/scripts/intlTelInput.js,/static/website/version/scripts/email-validator.js,https://www.google.com/recaptcha/api.js?render=6LdFDa4UAAAAAAAFtnzPB9R4CuxPx9KV3xJBKDnM'"
            :cb-has-noindex="true" />
        <div class="cb-body">
            <!-- ===================================================================================
            Signup part start 
            ==================================================================================== -->
            <div class="cs-signup">
                <!-- ===================================================================================
                Header part start 
                ==================================================================================== -->
                <!-- ===================================================================================
                Mobile footer part start 
                ==================================================================================== -->
                <div class="cs-footer-mobile">
                    <div class="cs-footer__actions">
                        <div class="cs-footer__action">
                            <a href="/privacy/" class="cs-link">Privacy</a>
                        </div>
                        <div class="cs-footer__action">
                            <a href="/company/terms/" class="cs-link">Terms</a>
                        </div>
                    </div>
                </div>
                <!-- ===================================================================================
                Mobile footer part end 
                ==================================================================================== -->
                <header class="cs-header">
                    <div class="cs-header__nav">
                        <!-- ===========================================================================
                        Logo part start 
                        ============================================================================ -->
                        <div class="cs-header__brand">
                            <a href="/" class="cs-header__logo" tabindex="-1">
                                <img src="/static/resources/brand/chargebee-logo-black.svg" height="30" alt="chargebee">
                            </a>
                        </div>
                        <!-- ===========================================================================
                        Header action part start 
                        ============================================================================ -->
                        <div class="cs-header__action">
                            <span class="cs-header__action-txt">Already have an Account?</span>
                            <a href="https://app.chargebee.com/login" class="cs-header__action-btn">Login →</a>
                        </div>
                    </div>
                </header>
                <!-- ===================================================================================
                Header part end 
                ==================================================================================== -->
                <div class="cs-main">
                    <!-- ===================================================================================
                    Body part start - For main signup
                    ==================================================================================== -->
                    <div class="cs-body">
                        <!-- ===========================================================================
                        Body header part start 
                        ============================================================================ -->
                        <div class="cs-body__header">
                            <div class="cs-body__icon">
                                <img src="/static/resources/brand/chargebee-icon-white.svg" height="40" class="cs-body__icon-size" alt="chargebee">
                            </div>
                            <div class="cs-body__title">Create your account <br class="visible-md visible-lg">in 2 simple steps</div>
                            <div class="cs-body__desc">No credit card required.</div>
                        </div>

                        <!-- ===========================================================================
                        Body content part start 
                        ============================================================================ -->
                        <div class="cs-body__content">
                            <div class="cs-form">
                                <form id="users_create" name="users_create" method="post" action="https://app.chargebee.com/users/create" autocomplete="on" data-users-create-new="true">
                                    <!-- ================================================================
                                    Form part start 
                                    ================================================================= -->
                                    <div class="cs-form__group">
                                        <div class="cs-form__label">1. What's your work email address?</div>
                                        <div class="cs-form__field">
                                            <input type="text" class="cs-form__control" placeholder="(eg) john.m@company.com" id="user.email" name="user.email" autofocus="true" autocomplete="off" value="" validate="true">
                                            <span id="user.email-err" class="cs-form__error"></span>
                                            <span id="user.email-success" class="cs-form__success"></span>
                                        </div>
                                    </div>

                                    <!-- ================================================================
                                    Form phone number field start 
                                    ================================================================= -->
                                    <div class="cs-form__group">
                                        <div class="cs-form__label">2. What's your phone number?</div>
                                        <div class="cs-form__field">
                                            <input type="hidden" id="phone_no" name="phone_no">
                                            <input type="hidden" id="recaptcha_token" name="recaptcha_token">
                                            <input type="hidden" id="currency_code" name="currency_code" v-bind:value="currencyCode">
                                            <input type="tel" class="cs-form__control" id="user.phone" autofocus="true" autocomplete="off" value="" validate="true">
                                            <span id="user.phone-err" class="cs-form__error"></span>
                                            <span id="user.phone-success" class="cs-form__success"></span>
                                        </div>
                                    </div>

                                    <!-- ================================================================
                                    Select your Business start 
                                    ================================================================= -->
                                    <!-- <div class="cs-form__group">
                                        <div class="cs-form__label">3. What's your business type?</div>
                                        <div class="cs-form__field">
                                            <div class="cs-radio">
                                                <label class="cs-radio__label">
                                                    <input type="radio" class="cs-radio__element" name="cb-business-type" value="saas">
                                                    <span class="cs-radio__value">
                                                        Software as a Service
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="cs-radio">
                                                <label class="cs-radio__label">
                                                    <input type="radio" class="cs-radio__element" name="cb-business-type" value="ecommerce">
                                                    <span class="cs-radio__value">
                                                        Subscription Commerce
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="cs-radio">
                                                <label class="cs-radio__label">
                                                    <input type="radio" class="cs-radio__element" name="cb-business-type" value="services">
                                                    <span class="cs-radio__value">
                                                        Services, Media & Memberships
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="cs-radio">
                                                <label class="cs-radio__label">
                                                    <input type="radio" class="cs-radio__element" name="cb-business-type" value="not_known">
                                                    <span class="cs-radio__value">
                                                        Don't fit into any of these business types
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div> -->
                                    <!-- ================================================================
                                        Select your Business end 
                                    ================================================================= -->

                                    <!-- ================================================================
                                    Form website field start 
                                    ================================================================= -->
                                    <!-- <div class="cs-form__group">
                                        <div class="cs-form__label">4. What's your website address?</div>
                                        <div class="cs-form__field">
                                            <input type="text" class="cs-form__control cs-form__control--inline" placeholder="company.com" id="user.website" name="cf_website" autofocus="true" autocomplete="off" value="" validate="true">
                                            <span id="user.website-err" class="cs-form__error"></span>
                                            <span id="user.website-success" class="cs-form__success"></span>
                                            <span id="user.website-label" class="cs-form__label--inline">http(s)://</span>
                                        </div>
                                    </div> -->
                                    <!-- ================================================================
                                    Accept Terms and Conditions
                                    ================================================================= -->
                                    <div class="cs-form__group" style="margin-bottom: 16px;">
                                        <div class="cs-checkbox" id="accept-terms-container">
                                            <label class="cs-checkbox__label" id="cb-accept-terms" style="font-size: 12px;">
                                                <input id="consent_accepted" name="consent_accepted" type="checkbox" class="cs-checkbox__element" value="true">
                                                <span class="cs-checkbox__value">
                                                    I want to be notified about the awesome happenings<sup>*</sup> at Chargebee
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <!-- ================================================================
                                    Accept Terms and Conditions
                                    ================================================================= -->

                                    <div class="cs-form__actions" style="display: block;">
                                        <div class="cs-form__action">
                                            <div class="cs-form__field">
                                                <input id="sign-up-submit" type="submit" value="Complete Signup →" class="cs-form__btn" onclick="ga('send', 'event', 'website', 'signup-action', 'button-signup');" disabled>
                                            </div>

                                            <!-- ================================================================
                                            Accept Terms and Conditions
                                            ================================================================= -->
                                            <div class="cs-form__group" style="margin-top: 18px; margin-bottom: 9px; font-size: 12px; color: #7f7f7f;">
                                                By clicking on Complete Signup, you agree to our <a href="/company/terms/" target="_blank" style="color: #2f04ff; text-decoration: none;">Terms</a> and you acknowledge having read our <a href="/privacy/" target="_blank" style="color: #2f04ff; text-decoration: none;">Privacy Notice</a>
                                            </div>

                                            <div class="cs-form__group" style="font-size: 10px; margin-bottom: 0; color: #9f9ca6;">
                                                <sup>*</sup>This includes periodic newsletters, emails about usage tips, billing practices, and other communications. You can opt out anytime within the app.
                                            </div>
                                            <!-- ================================================================
                                            Accept Terms and Conditions
                                            ================================================================= -->
                                        </div>
                                    </div>
                                    <!-- ================================================================
                                    Form part end 
                                    ================================================================= -->
                                    <!-- <input type='hidden' name="cf_business_type" value="saas" /> -->
                                    <input type='hidden' name="cb_signedup_plan" value="" />
                                    <input type='hidden' name="cf_adwords_keyword" value="" />
                                    <input type='hidden' name="cf_adwords_campaign_id" value="" />
                                    <input type='hidden' name="cf_hubspotutk" id="cf_hubspotutk"  value="" />
                                    <input type='hidden' name="client_id" value="" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- ===================================================================================
                    Body part end - For main signup
                    ==================================================================================== -->
                    <!-- ===================================================================================
                    Body part start - For Language
                    ==================================================================================== -->
                    <div class="cs-body cs-hidden" id="locale_section" style="display: none;">
                        <!-- ===========================================================================
                        Body header part start 
                        ============================================================================ -->
                        <div class="cs-body__header">
                            <div class="cs-body__icon">
                                <img src="/static/resources/brand/chargebee-icon-brand.svg" height="36" alt="chargebee">
                            </div>
                            <div class="cs-body__title">One last thing!</div>
                            <div class="cs-body__desc">Choose your locale.</div>
                        </div>

                        <!-- ===========================================================================
                        Body content part start 
                        ============================================================================ -->
                        <div class="cs-body__content">
                            <div class="cs-form">
                                <form id="locale_form" method="post" action="https://app.chargebee.com/users/create">
                                    <!-- ================================================================
                                    Form part start 
                                    ================================================================= -->
                                    <div class="cs-form__group">
                                        <div class="cs-form__label cs-form__label--muted">
                                            We see that your browser language is <span class="language"></span>. Would you like your <span>customers</span> to see <span>invoices</span>, <span>checkout pages</span>, and <span>emails</span> in <span class="language"></span>?
                                        </div>

                                        <div class="cs-panels cs-panels--vertical">
                                            <div class="cs-panel" id="display_locale">
                                                Use <span class="language"></span>
                                                <span class="cs-panel__tick"></span>
                                            </div>
                                            <div class="cs-panel">
                                                Stick to English
                                                <span class="cs-panel__tick"></span>
                                            </div>
                                        </div>

                                    </div>

                                    <!-- ================================================================
                                    Complete setup button
                                    ================================================================= -->

                                    <div class="cs-form__group">
                                        <div class="cs-form__field">
                                            <input type="submit" value="Complete Setup" class="cs-form__btn">
                                        </div>
                                    </div>
                                    <!-- ================================================================
                                    Form part end 
                                    ================================================================= -->
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- ===================================================================================
                    Body part end - For main Language
                    ==================================================================================== -->
                    <!-- ===================================================================================
                    Footer
                    ==================================================================================== -->
                    <div class="cs-footer">
                        <div class="cs-footer__actions">
                            <div class="cs-footer__action">
                                <a href="/privacy/" class="cs-link">Privacy</a>
                            </div>
                            <div class="cs-footer__action">
                                <a href="/company/terms/" class="cs-link">Terms</a>
                            </div>
                        </div>
                    </div>
                    <!-- ===================================================================================
                    Footer
                    ==================================================================================== -->
                </div>
            </div>
            <!-- ===================================================================================
            Signup part end 
            ==================================================================================== -->
            <cookie-banner />
        </div>
    </div>
</template>
<script>
    import AppMeta from '~/components/AppMeta.vue';
    import AppHeader from '~/components/AppHeader.vue';
    import cookieBanner from '~/components/cookieBanner.vue';
    const axios = require('axios');
    
    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
            'cookie-banner': cookieBanner
        },
        data() {
            return {
                currencyCode: 'USD'
            }
        },
        methods: {},
        mounted() {
            let initialData = this
            axios.get('https://freegeoip.live/json/')
            .then(function (response) {
                let countryCode = response.data.country_code;
                var euroCountryList = ['CY','GR','EE','LV','LT','SJ','MD','BY','FI','AX','UA','MK','HU','BG','AL','PL','RO','XK','RU','PT','GI','ES','MT','FO','DK','IS','CH','SE','NL','AT','BE','DE','LU','IE','MC','FR','AD','LI','JE','IM','GG','SK','CZ','NO','VA','SM','IT','SI','ME','HR','BA','RS']
                if(euroCountryList.indexOf(''+countryCode+'') > -1){
                    initialData.currencyCode = 'EUR'
                }
                if(countryCode == 'GB'){
                    initialData.currencyCode = 'GBP'
                }
                if(countryCode == 'AU'){
                    initialData.currencyCode = 'AUD'
                }
                if(countryCode == 'CA'){
                    initialData.currencyCode = 'CAD'
                }
            })
            var getParameterByName = function(name, url) {
                if (!url) url = window.location.href;
                name = name.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, " "));
            }
            //material button animation
            $('.cs-panel').mousedown(function(e) {
                var target = e.target;
                var rect = target.getBoundingClientRect();
                var ripple = target.querySelector('.ripple');
                $(ripple).remove();
                ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
                target.appendChild(ripple);
                var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
                var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
                ripple.style.top = top + 'px';
                ripple.style.left = left + 'px';
                return false;
            });

            //Onclick active
            $('.cs-panel').click(function() {
                $(this).toggleClass('cs-panel--active').siblings().removeClass('cs-panel--active');
            });
            var isValidPhoneNumber = false;
            var isValidWebsite = false;
            var isValidEmail = false;
            // load and set site locale
            $.ajax({
                url: "https://merchant-test.chargebee.com/users/extract_locale",
                jsonp: "_jsapi_callback",
                dataType: "jsonp",
                success: function(data) {
                    window.site_locale = data;
                }
            });
            var userEmail = getParameterByName("user\\\.email");
            if (userEmail) {
                $("input[name='user.email']").val(userEmail);
            }

            // var businessType = getParameterByName("cf_business_type");
            // if (businessType) {
            //     $("input[type='radio'][name='cb-business-type'][value='" + businessType + "']").attr('checked', 'checked');
            //     $("input[name='cf_business_type']").val(businessType);
            // }

            var couponCode = getParameterByName("cb_coupon_code");
            if (couponCode && couponCode.trim()) {
                jQuery('<input>').attr({
                    type: 'hidden',
                    id: 'cb_coupon_code',
                    name: 'cb_coupon_code',
                    value: couponCode
                }).appendTo(jQuery("#users_create"));
            }
            $('.cb-io-biz-box').click(function() {
                $('.cb-io-signup').removeClass('cb-io-signup-alt-active');
                $('.cb-io-signup-box label span').html("Just your email address and <br> we're good to go…");
                $('.cb-io-signup').toggleClass('cb-io-signup-active');
                $(this).toggleClass('cb-io-biz-box-active');
                if ($('.cb-io-signup').hasClass('cb-io-signup-active')) {
                    $(".trial-input").focus();
                }
                $("span[name*='err']").text("");
            });

            $('.cb-io-biz-box,.cb-io-signup-toggle').click(function() {
                $("input[name='cf_business_type']").val($(this).attr("cb-business-type"));
                var btypega = "btype-sel-" + $(this).attr("cb-business-type");
                ga('send', 'event', 'website', 'signup-intent', btypega);
            });

            // var setBusinessTypeAndSendGa = function(businessType) {
            //     $("input[name='cf_business_type']").val(businessType);
            //     sessionStorage.setItem("bt", businessType);
            //     var btypega = "btype-sel-" + businessType;
            //     ga('send', 'event', 'website', 'signup-intent', btypega);
            // }

            // $('[cb-business-type-container]').click(function() {
            //     setBusinessTypeAndSendGa($(this).attr("cb-business-type"));
            // });

            // $('#business-type-no').change(function() {
            //     $('[cb-business-type-container]').removeClass('cs-panel--active');
            //     if ($(this).is(':checked')) {
            //         setBusinessTypeAndSendGa($(this).attr("cb-business-type"));
            //         $('#business-type-container').addClass('cs-panels--disabled')
            //     } else {
            //         $("input[name='cf_business_type']").val('');
            //         $('#business-type-container').removeClass('cs-panels--disabled')
            //     }
            // });

            // $("input[type='radio'][name='cb-business-type']").change(function() {
            //     setBusinessTypeAndSendGa($(this).val());
            // });


            $('.cb-io-biz-skip').click(function() {
                $('.cb-io-signup').removeClass('cb-io-signup-active');
                $('.cb-io-signup-box label span').html("Just your email address and <br> we're good to go…");
                $('.cb-io-signup').toggleClass('cb-io-signup-alt-active');
                if ($('.cb-io-signup').hasClass('cb-io-signup-alt-active')) {
                    $(".trial-input").focus();
                    $(this).text('Go Back');
                } else {
                    $(this).text("I don't fit into any of this");
                }
            });

            function getPlanName(name, url) {
                if (!url) url = window.location.href;
                name = name.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, " "));
            }
            var plan = getPlanName('plan');
            $("input[name='cb_signedup_plan']").val(plan);

            var adkeyword = $.cookie('keyword');
            var decadkeyword = decodeURIComponent(adkeyword);
            var adcampaignid = $.cookie('campaignid');
            if (adcampaignid && adkeyword) {
                $("input[name='cf_adwords_keyword']").val(decadkeyword);
                $("input[name='cf_adwords_campaign_id']").val(adcampaignid);
            }

            $('.trial-submit, #sign-up-submit').click(function(event) {
                $.removeCookie('keyword');
                $.removeCookie('campaignid');
                sessionStorage.removeItem("bt");
                sessionStorage.removeItem("rc");
                event.preventDefault();
                grecaptcha.execute('6LdFDa4UAAAAAAAFtnzPB9R4CuxPx9KV3xJBKDnM', {action: 'signup'}).then(function(token) {
                    $('#recaptcha_token').val(token);
                    var user_email = $("#user\\\.email").val() ? $("#user\\\.email").val() : '';
                    var user_mobile = $("#phone_no").val() ? $("#phone_no").val() : '';
                    sessionStorage.setItem("user_email", user_email);
                    sessionStorage.setItem("user_mobile", user_mobile);
                    $('[data-users-create-new="true"]').submit();
                });
            });
            
            // For Hubspot
            var hubspotutk_val = $.cookie('hubspotutk');
            if(hubspotutk_val && hubspotutk_val !=''){
                $('#cf_hubspotutk').val(hubspotutk_val);
            }

            var enableUserCreateSubmit = function() {
                if ( isValidEmail && isValidPhoneNumber ) {
                    $('#sign-up-submit').removeAttr('disabled');
                } else {
                    $('#sign-up-submit').attr('disabled', 'disabled');
                }
            };

            // function isBusinessEmail(userEmail){
            //     if(isFreeEmail(userEmail) && $('#user\\\.website').val().trim() == ''){
            //         isValidWebsite = false;
            //     }else{
            //         isValidWebsite = true;
            //     }
            // }

            var emailFieldErr = $('#users_create').find('#user\\\.email-err');
            var emailReg = /[a-zA-Z0-9!#$%&'*+//=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+//=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;
            function emailValidation(userEmail,eventType){
                if (userEmail === '') {
                    if(eventType === "change"){
                        $(emailFieldErr).html('Please enter a valid email. We don&rsquo;t spam.');
                    }else{
                        $(emailFieldErr).html('');
                    }
                    isValidEmail = false;
                } else if (emailReg.test(userEmail)) {
                    if(isFreeEmail(userEmail.toLowerCase())){
                        $(emailFieldErr).html("Please enter your business email. Don’t have one? <a id=\"email_validation\" href=\"javascript:void(0)\">Chat with us now</a>");
                        $("#user\\\.email").blur();
                        $("#email_validation").on('click', function(){
                            drift.api.startInteraction({ interactionId: 111909 });
                        });
                        isValidEmail = false;
                    }else{
                        isValidEmail = true;
                        $(emailFieldErr).text('');
                    }
                } else {
                    if(eventType === "change"){
                        $(emailFieldErr).html('Please enter a valid email address.');
                    }else{
                        $(emailFieldErr).html('');
                    }
                    isValidEmail = false;
                }
            }

            $('#user\\\.email').on('keyup change', function(e) {
                var userEmail = $(this).val();
                emailValidation(userEmail,e.type)
                //isBusinessEmail(userEmail)
                enableUserCreateSubmit();
            });

            // $('#user\\\.website').on('keyup', function() {
            //     if($(this).val().trim()){
            //         isValidWebsite = true;
            //     }else{
            //         var userEmail = $('#user\\\.email').val();
            //         isBusinessEmail(userEmail)
            //     }
            //     enableUserCreateSubmit();
            // });
            // $('input[name="cb-business-type"]').on('change', function() {
            //     enableUserCreateSubmit();
            // });
            // $('[cb-business-type]').click(function() {
            //     enableUserCreateSubmit();
            // });
            
            let bt = sessionStorage.getItem("bt");
            let rc = sessionStorage.getItem("rc");
            if(bt == null) {
                bt = "";
            }
            if(rc == null) {
                rc = "";
            }
            //$('input[name="cb-business-type"][value="'+bt+'"]').prop("checked", true).trigger("change");
            
            /********* Phone Number Validation **********/
            var input = document.querySelector("#user\\\.phone");
            var iti = window.intlTelInput(input, {
                initialCountry: "auto",
                geoIpLookup: function(callback) {
                    $.get('https://freegeoip.live/json/').always(function(resp) {
                        var countryCode = (resp && resp.country_code) ? resp.country_code : "US";
                        callback(countryCode);
                    });
                },
                separateDialCode: true,
                preferredCountries: ['us', 'gb', 'au', 'ca'],
                utilsScript: "/static/website/version/scripts/utils.js",
            });

            var errorMsg = document.querySelector("#user\\\.phone-err"),
            validMsg = document.querySelector("#user\\\.phone-success");

            // error messages
            var errorMap = [ "Please enter a valid phone number.", "Invalid country code", "", "", "Please enter a valid phone number."];

            var reset = function() {
                input.classList.remove("error");
                errorMsg.innerHTML = "";
                errorMsg.classList.add("hide");
                validMsg.classList.add("hide");
            };
            
            // keyup, blur: validate
            var phoneNoVal, countryCodeVal;
            $(input).on('keyup blur', function() {
                reset();
                if (input.value.trim()) {
                    if (iti.isValidNumber()) {
                        isValidPhoneNumber = true;
                        enableUserCreateSubmit();
                        validMsg.classList.remove("hide");
                    } else {
                        isValidPhoneNumber = false;
                        enableUserCreateSubmit();
                        input.classList.add("error");
                        var errorCode = iti.getValidationError();
                        if(errorCode != -99){
                            errorMsg.innerHTML = errorMap[errorCode];
                        }
                        errorMsg.classList.remove("hide");
                    }
                }else{
                    isValidPhoneNumber = false;
                    enableUserCreateSubmit();
                }
                phoneNoVal = $(this).val();
                countryCodeVal = $('.iti .iti__selected-dial-code').text();
                $('#phone_no').val(countryCodeVal + phoneNoVal);
            });
            ga(function(tracker) {
                var clientId = tracker.get('clientId');
                $("input[name='client_id']").val(clientId);
            });
        }
    }
</script>
