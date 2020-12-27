<template>
    <div>
        <app-meta 
            :cb-title="'Sign Up - Get Your Free Sandbox - Chargebee'" 
            :cb-desc="'Sign up for Chargebee and make recurring billing, a breeze. Create a free test account to explore all our power packed features. It\'s easy to register.'" 
            :cb-url="'/trial-signup/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/signup2.css,/static/website/version/styles/intlTelInput.css'"
            :cb-head-script="''"
            :cb-body-script="'/static/website/version/scripts/intlTelInput.js'"
            :cb-has-noindex="true" />
        <div class="cn-signup">
            <div class="cn-signup__container">
            <!-- ===================================================================================
            Signup part start 
            ==================================================================================== -->
                <!-- ===============================================================================
                Start: Aside Header
                ================================================================================ -->
                <div class="cn-signup__aside hidden-xs hidden-sm" style="background-color: #f6edff;">
                    <!-- ===========================================================================
                    Start: Article 
                    ============================================================================ -->
                    <div class="cn-article" style="color: #00001E;">
                        <!-- =======================================================================
                        Start: Article Header
                        ======================================================================== -->
                        <div class="cn-article__header">
                            <div class="cn-article__icon">
                                <img src="/static/resources/brand/chargebee-icon-brand.svg" height="48" alt="chargebee">
                            </div>
                            <div class="cn-article__title">
                                Helping businesses deliver exceptional subscription experiences.
                            </div>
                        </div>
                        <!-- =======================================================================
                        End: Article Header
                        ======================================================================== -->
                        <!-- =======================================================================
                        Start: Article Content
                        ======================================================================== -->
                        <div class="cn-article__content">
                            <div class="cn-article__heading">
                                What you're signing up for...
                            </div>
                            <div class="cn-article__list">
                                <div class="cn-article__item cn-article__item--black">
                                    Flexible Subscription Management.
                                </div>
                                <div class="cn-article__item cn-article__item--black">
                                    Recurring Billing Automation.
                                </div>
                                <div class="cn-article__item cn-article__item--black">
                                    Multiple Payment Gateway Support.
                                </div>
                                <div class="cn-article__item cn-article__item--black">
                                    Revenue Recognition and Smart Dunning.
                                </div>
                                <div class="cn-article__item cn-article__item--black">
                                    Beautiful Embeded Checkout Pages.
                                </div>
                                <div class="cn-article__item cn-article__item--black">
                                    Revenue and Churn Analysis.
                                </div>
                            </div>
                        </div>
                        <!-- =======================================================================
                        End: Article Content
                        ======================================================================== -->
                        <div class="cn-article__footer">
                            <div class="cn-article__desc">
                                Thousands of businesses love and trust Chargebee
                            </div>
                            <div class="cn-logos">
                                <div class="cn-logo">
                                    <img src="/static/website/version/images/signup/customers/customers-black.png" alt="chargebee" width="360">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ===========================================================================
                    End: Article
                    ============================================================================ -->
                </div>
                <!-- ===============================================================================
                End: Aside Header
                ================================================================================ -->
                <!-- ===============================================================================
                Start: Main
                ================================================================================ -->
                <div class="cn-signup__main">
                    <div class="cn-form">
                        <!-- =======================================================================
                        Start: Form Header
                        ======================================================================== -->
                        <div class="cn-form__header">
                            <div class="cn-header">
                                <div class="cn-header__container">
                                    <div class="cn-header__logo">
                                        <img src="/static/resources/brand/chargebee-icon-brand.svg" height="48" alt="chargebee" class="visible-xs visible-sm">
                                    </div>
                                    <div class="cn-header__action">
                                        <div class="hidden-xs">Already have an account? <a href="https://app.chargebee.com/login">Log in &rarr;</a></div>
                                        <div class="visible-xs">
                                            <a href="https://app.chargebee.com/login" class="cn-header__btn">Log in</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="cn-header__group">
                                    <div class="cn-header__title">Get started for free</div>
                                    <div class="cn-header__list">
                                        <div class="cn-header__item">No Contracts</div>
                                        <div class="cn-header__item">No Credit Card Required</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- =======================================================================
                        End: Form Header
                        ======================================================================== -->
                        <!-- =======================================================================
                        Start: Form Content
                        ======================================================================== -->
                        <div class="cn-form__content">
                            <form id="users_create" name="users_create" method="post" action="https://app.chargebee.com/users/create" autocomplete="on" data-users-create-new="true">
                                <!-- ================================================================
                                Form part start 
                                ================================================================= -->
                                <div class="cn-form__group">
                                    <div class="cn-form__label">1. What's your work email address?</div>
                                    <div class="cn-form__field">
                                        <input type="text" class="cn-form__control" placeholder="(eg) john.m@company.com" id="user.email" name="user.email" autofocus="true" autocomplete="off" value="" validate="true">
                                        <span id="user.email-err" class="cn-form__error"></span>
                                        <span id="user.email-success" class="cn-form__success"></span>
                                    </div>
                                </div>

                                <!-- ================================================================
                                Form phone number field start 
                                ================================================================= -->
                                <div class="cn-form__group">
                                    <div class="cn-form__label">2. What's your phone number?</div>
                                    <div class="cn-form__field">
                                        <input type="hidden" id="phone_no" name="phone_no">
                                        <input type="tel" class="cn-form__control" id="user.phone" autofocus="true" autocomplete="off" value="" validate="true">
                                        <span id="user.phone-err" class="cn-form__error"></span>
                                        <span id="user.phone-success" class="cn-form__success"></span>
                                    </div>
                                </div>

                                <!-- ================================================================
                                Select your Business start 
                                ================================================================= -->
                                <div class="cn-form__group">
                                    <div class="cn-form__label">3. What's your business type?</div>
                                    <div class="cn-form__field">

                                        <!-- ================================================================
                                        Select your Business start 
                                        ================================================================= -->
                                        <!-- ================================================================
                                        Business type start 
                                        ================================================================= -->
                                        <div class="cn-radio">
                                            <label class="cn-radio__label">
                                                <input type="radio" class="cn-radio__element" name="cb-business-type" value="saas">
                                                <span class="cn-radio__value">
                                                    Software as a Service
                                                </span>
                                            </label>
                                        </div>
                                        <!-- ================================================================
                                        Business type end 
                                        ================================================================= -->
                                        <!-- ================================================================
                                        Business type start 
                                        ================================================================= -->
                                        <div class="cn-radio">
                                            <label class="cn-radio__label">
                                                <input type="radio" class="cn-radio__element" name="cb-business-type" value="ecommerce">
                                                <span class="cn-radio__value">
                                                    Subscription Commerce
                                                </span>
                                            </label>
                                        </div>
                                        <!-- ================================================================
                                        Business type end 
                                        ================================================================= -->
                                        <!-- ================================================================
                                        Business type start 
                                        ================================================================= -->
                                        <div class="cn-radio">
                                            <label class="cn-radio__label">
                                                <input type="radio" class="cn-radio__element" name="cb-business-type" value="services">
                                                <span class="cn-radio__value">
                                                    Services, Media & Memberships
                                                </span>
                                            </label>
                                        </div>
                                        <!-- ================================================================
                                        Business type end 
                                        ================================================================= -->
                                        <!-- ================================================================
                                        Business type start 
                                        ================================================================= -->
                                        <div class="cn-radio">
                                            <label class="cn-radio__label">
                                                <input type="radio" class="cn-radio__element" name="cb-business-type" value="not_known">
                                                <span class="cn-radio__value">
                                                    Don't fit into any of these business types
                                                </span>
                                            </label>
                                        </div>
                                        <!-- ================================================================
                                        Business type end 
                                        ================================================================= -->
                                        <!-- ================================================================
                                        Select your Business End 
                                        ================================================================= -->
                                    </div>
                                </div>
                                <!-- ================================================================
                                    Select your Business end 
                                    ================================================================= -->
                                <!-- ================================================================
                                Select your Business start 
                                ================================================================= -->
                                <div class="cn-form__group">
                                    <div class="cn-form__label">4. What's your business size?</div>
                                    <div class="cn-form__field">
                                        <!-- ================================================================
                                        Select your Business start 
                                        ================================================================= -->
                                        <!-- ================================================================
                                        Business type start 
                                        ================================================================= -->
                                        <div class="cn-radio">
                                            <label class="cn-radio__label">
                                                <input type="radio" class="cn-radio__element" name="cf-revenue" value="over_50k">
                                                <span class="cn-radio__value">
                                                    Over $50K annual revenue (ARR)
                                                </span>
                                            </label>
                                        </div>
                                        <!-- ================================================================
                                        Business type end 
                                        ================================================================= -->
                                        <!-- ================================================================
                                        Business type start 
                                        ================================================================= -->
                                        <div class="cn-radio">
                                            <label class="cn-radio__label">
                                                <input type="radio" class="cn-radio__element" name="cf-revenue" value="under_50k">
                                                <span class="cn-radio__value">
                                                    Under $50K annual revenue (ARR)
                                                </span>
                                            </label>
                                        </div>
                                        <!-- ================================================================
                                        Business type end 
                                        ================================================================= -->
                                        <!-- ================================================================
                                        Select your Business End 
                                        ================================================================= -->
                                    </div>
                                </div>
                                <!-- ================================================================
                                Select your Business end 
                                ================================================================= -->
                                <!-- ================================================================
                                Accept Terms and Conditions
                                ================================================================= -->
                                <div class="cn-form__group">
                                    <div class="cn-checkbox" id="accept-terms-container">
                                        <label class="cn-checkbox__label" id="cb-accept-terms">
                                            <input id="consent_accepted" name="consent_accepted" type="checkbox" class="cn-checkbox__element" value="true">
                                            <span class="cn-checkbox__value">
                                                I want to be notified about the awesome<sup>*</sup> happenings at Chargebee
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <!-- ================================================================
                                Accept Terms and Conditions
                                ================================================================= -->

                                <div class="cn-form__actions" style="display: block;">
                                    <div class="cn-form__action">
                                        <div class="cn-form__field" style="margin-left: 0">
                                            <input id="sign-up-submit" type="submit" value="Complete Signup →" class="cn-form__btn" onclick="ga('send', 'event', 'website', 'signup-action', 'button-signup');" disabled>
                                        </div>

                                        <!-- ================================================================
                                        Accept Terms and Conditions
                                        ================================================================= -->
                                        <div class="cn-form__group" style="margin-top: 30px; margin-bottom: 12px; font-size: 12px;">
                                            By signing up you agree to our <a href="/company/terms/" target="_blank" style="color: #2f04ff; text-decoration: none;">Terms and conditions</a>, and <a href="/privacy/" target="_blank" style="color: #2f04ff; text-decoration: none;">Privacy Policy</a>
                                        </div>

                                        <div class="cn-form__group" style="font-size: 12px; margin-bottom: 0; color: #9f9ca6;">
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
                                <input type='hidden' name="cf_business_type" value="saas" />
                                <input type='hidden' name="cf_revenue_per_month" value="" />
                                <input type='hidden' name="cb_signedup_plan" value="" />
                                <input type='hidden' name="cf_adwords_keyword" value="" />
                                <input type='hidden' name="cf_adwords_campaign_id" value="" />
                                <input type ='hidden'  name="cf_hubspotutk" id="cf_hubspotutk"  value="" />
                            </form>
                        </div>
                        <!-- =======================================================================
                        End: Form Content
                        ======================================================================== -->
                        <!-- =======================================================================
                        Start: Form Content
                        ======================================================================== -->
                        <div class="cn-form__content cn-hidden" id="locale_section" style="display: none;">
                            <form id="locale_form" method="post" action="https://app.chargebee.com/users/create">
                                <!-- ================================================================
                                Form part start 
                                ================================================================= -->
                                <div class="cn-form__group">
                                    <div class="cn-form__label cn-form__label--muted">
                                        We see that your browser language is <span class="language"></span>. Would you like your <span>customers</span> to see <span>invoices</span>, <span>checkout pages</span>, and <span>emails</span> in <span class="language"></span>?
                                    </div>

                                    <div class="cn-panels cn-panels--vertical">
                                        <div class="cn-panel" id="display_locale">
                                            Use <span class="language"></span>
                                            <span class="cn-panel__tick"></span>
                                        </div>
                                        <div class="cn-panel">
                                            Stick to English
                                            <span class="cn-panel__tick"></span>
                                        </div>
                                    </div>

                                </div>

                                <!-- ================================================================
                                Complete setup button
                                ================================================================= -->

                                <div class="cn-form__group">
                                    <div class="cn-form__field">
                                        <input type="submit" value="Complete Setup" class="cn-form__btn">
                                    </div>
                                </div>
                                <!-- ================================================================
                                Form part end 
                                ================================================================= -->
                            </form>
                        </div>
                        <!-- =======================================================================
                        End: Form Content
                        ======================================================================== -->
                    </div>
                </div>
                <!-- ===============================================================================
                End: Main
                ================================================================================ -->
            <!-- ===================================================================================
            Signup part end 
            ==================================================================================== -->
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
        methods: {},
        mounted() {
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
            $('.cn-panel').mousedown(function(e) {
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
            $('.cn-panel').click(function() {
                $(this).toggleClass('cn-panel--active').siblings().removeClass('cn-panel--active');
            });
            var isValidPhoneNumber = false;
            // load and set site locale
            $.ajax({
                url: "https://merchant-test.chargebee.com/users/extract_locale",
                jsonp: "_jsapi_callback",
                dataType: "jsonp",
                success: function(data) {
                    window.site_locale = data;
                }
            });
            var revenuePerMonth = getParameterByName("cf_revenue_per_month");
            if (revenuePerMonth) {
                $("input[type='radio'][name='cf-revenue'][value='" + revenuePerMonth + "']").attr('checked', 'checked');
                $("input[name='cf_revenue_per_month']").val(revenuePerMonth);
            }
            var userEmail = getParameterByName("user\\\.email");
            if (userEmail) {
                $("input[name='user.email']").val(userEmail);
            }

            var businessType = getParameterByName("cf_business_type");
            if (businessType) {
                $("input[type='radio'][name='cb-business-type'][value='" + businessType + "']").attr('checked', 'checked');
                $("input[name='cf_business_type']").val(businessType);
            }

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

            var setBusinessTypeAndSendGa = function(businessType) {
                $("input[name='cf_business_type']").val(businessType);
                sessionStorage.setItem("bt", businessType);
                var btypega = "btype-sel-" + businessType;
                ga('send', 'event', 'website', 'signup-intent', btypega);
            }

            var setRevenueTypeAndSendGa = function(revenueType) {
                $("input[name='cf_revenue_per_month']").val(revenueType);
                sessionStorage.setItem("rc", revenueType);
                // var btypega = "btype-sel-" + revenueType;
                // ga('send', 'event', 'website', 'signup-intent', btypega);
            }

            // $('[cb-business-type-container]').click(function() {
            //     setBusinessTypeAndSendGa($(this).attr("cb-business-type"));
            // });

            // $('#business-type-no').change(function() {
            //     $('[cb-business-type-container]').removeClass('cn-panel--active');
            //     if ($(this).is(':checked')) {
            //         setBusinessTypeAndSendGa($(this).attr("cb-business-type"));
            //         $('#business-type-container').addClass('cn-panels--disabled')
            //     } else {
            //         $("input[name='cf_business_type']").val('');
            //         $('#business-type-container').removeClass('cn-panels--disabled')
            //     }
            // });

            $("input[type='radio'][name='cb-business-type']").change(function() {
                setBusinessTypeAndSendGa($(this).val());
            });

            $("input[type='radio'][name='cf-revenue']").change(function() {
                setRevenueTypeAndSendGa($(this).val());
            });


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

            $('.trial-submit, #sign-up-submit').click(function() {
                $.removeCookie('keyword');
                $.removeCookie('campaignid');
                sessionStorage.removeItem("bt");
                sessionStorage.removeItem("rc");
            });
            
            // For Hubspot
            var hubspotutk_val = $.cookie('hubspotutk');
            if(hubspotutk_val && hubspotutk_val !=''){
                $('#cf_hubspotutk').val(hubspotutk_val);
            }

            var enableUserCreateSubmit = function() {
                if ($('#user\\\.email').val() !== '' && $('input[name="cf-revenue"]').is(':checked') && $('input[name="cb-business-type"]').is(':checked') && isValidPhoneNumber) {
                    $('#sign-up-submit').removeAttr('disabled');
                } else {
                    $('#sign-up-submit').attr('disabled', 'disabled');
                }
            };

            $('#user\\\.email').on('keyup', function() {
                enableUserCreateSubmit();
            });

            $('#user\\\.email').on('change', function() {
                enableUserCreateSubmit();
            });
            $('input[name="cb-business-type"]').on('change', function() {
                enableUserCreateSubmit();
            });
            $('input[name="cf-revenue"]').on('change', function() {
                enableUserCreateSubmit();
            });
            $('[cb-business-type]').click(function() {
                enableUserCreateSubmit();
            });
            
            let bt = sessionStorage.getItem("bt");
            let rc = sessionStorage.getItem("rc");
            if(bt == null) {
                bt = "";
            }
            if(rc == null) {
                rc = "";
            }
            $('input[name="cb-business-type"][value="'+bt+'"]').prop("checked", true).trigger("change");
            $('input[name="cf-revenue"][value="'+rc+'"]').prop("checked", true).trigger("change");
            
            /********* Phone Number Validation **********/
            var input = document.querySelector("#user\\\.phone");
            var iti = window.intlTelInput(input, {
                // initialCountry: "auto",
                // geoIpLookup: function(callback) {
                //     $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                //         var countryCode = (resp && resp.country) ? resp.country : "";
                //         callback(countryCode);
                //     });
                // },
                separateDialCode: true,
                preferredCountries: ['us', 'gb', 'au', 'ca'],
                utilsScript: "/static/website/version/scripts/utils.js",
            });

            var errorMsg = document.querySelector("#user\\\.phone-err"),
            validMsg = document.querySelector("#user\\\.phone-success");

            // error messages
            var errorMap = [ "Please enter a valid phone number.", "Invalid country code", "Too short", "Too long", "Please enter a valid phone number."];

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
                        errorMsg.innerHTML = errorMap[errorCode];
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
        }
    }
</script>