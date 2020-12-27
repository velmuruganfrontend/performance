<template>
    <div>
        <app-meta 
            :cb-title="'Sign Up - Get Your Free Sandbox - Chargebee'" 
            :cb-desc="'Sign up for Chargebee and make recurring billing, a breeze. Create a free test account to explore all our power packed features. It\'s easy to register.'" 
            :cb-url="'/trial-signup/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/signup.css'"
            :cb-head-script="''"
            :cb-body-script="'/static/website/version/scripts/email-validator.js'"
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
                                <img src="/static/resources/brand/chargebee-icon-brand.svg" height="60" class="cs-body__icon-size" alt="chargebee">
                            </div>
                            <div class="cs-body__title">Create your account in 2 simple steps</div>
                            <div class="cs-body__desc">No credit card required.</div>
                        </div>
    
                        <!-- ===========================================================================
                        Body content part start 
                        ============================================================================ -->
                        <div class="cs-body__content">
                            <div class="cs-form">
                                <form id="users_create"  name="users_create"  method="post"  action="https://app.chargebee.com/users/create" autocomplete="on" data-users-create-new="true">
                                    <!-- ================================================================
                                    Form part start 
                                    ================================================================= -->
                                    <div class="cs-form__group">
                                        <div class="cs-form__label">1. What's your business email address?</div>
                                        <div class="cs-form__field">
                                            <input type="text" class="cs-form__control" placeholder="(eg) john.m@company.com" id="user.email" name="user.email" autofocus="true" autocomplete="off" value="" validate="true">
                                            <span id="user.email-err" class="cs-form__error"></span>
                                            <span id="user.email-success" class="cs-form__success"></span>
                                        </div>
                                    </div>
                                    <!-- ================================================================
                                    Select your Business start 
                                    ================================================================= -->
                                    <div class="cs-form__group">
                                        <div class="cs-form__label">2. What's your business type?</div>
                                        <div class="cs-panels" id='business-type-container'>
    
                                            <div class="cs-panel cs-panel--active" cb-business-type="saas" cb-business-type-container="true">
                                                <div class="cs-panel__icon cs-panel__icon--saas"></div>
                                                <div class="cs-panel__title">
                                                    SaaS, Software
                                                </div>
                                            </div>
    
                                            <div class="cs-panel" cb-business-type="ecommerce" cb-business-type-container="true">
                                                <div class="cs-panel__icon cs-panel__icon--goods"></div>
                                                <div class="cs-panel__title">
                                                    Physical Goods, E-commerce
                                                </div>
                                            </div>
    
                                            <div class="cs-panel" cb-business-type="services" cb-business-type-container="true">
                                                <div class="cs-panel__icon cs-panel__icon--service"></div>
                                                <div class="cs-panel__title">
                                                    Services, memberships
                                                </div>
                                            </div>
    
                                        </div>
                                        <div class="cs-checkbox" style="margin-top: 15px;" id="business-type-no-container">
                                            <label class="cs-checkbox__label" id="cb-business-type-not-applicable" cb-business-type="not_known">
                                                <input id="business-type-no" type="checkbox" class=" cs-checkbox__element" cb-business-type="not_known">
                                                <span class="cs-checkbox__value">I don't fit into any of these business types</span>
                                            </label>
                                        </div>
                                    </div>
                                    <!-- ================================================================
                                    Select your Business end 
                                    ================================================================= -->
    
                                    <div class="cs-form__actions"  style="display: block;">
                                        <div class="cs-form__action">
                                            <!-- ================================================================
                                            Accept Terms and Conditions
                                            ================================================================= -->
                                            <div class="cs-form__group" style="margin-bottom: 18px; margin-top: 18px;">
                                                <div class="cs-checkbox" id="accept-terms-container">
                                                    <label class="cs-checkbox__label" id="cb-accept-terms">
                                                        <input id="consent_accepted" name="consent_accepted" type="checkbox" class="cs-checkbox__element"  value="true">
                                                        <span class="cs-checkbox__value">
                                                            I want to be notified about the awesome* happenings at Chargebee
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <!-- ================================================================
                                            Accept Terms and Conditions
                                            ================================================================= -->
    
                                            <div class="cs-form__field">
                                                <input id="sign-up-submit" type="submit" value="Complete Signup →" class="cs-form__btn" onclick="ga('send', 'event', 'website', 'signup-action', 'button-signup');" disabled>
                                            </div>
    
                                            <!-- ================================================================
                                            Accept Terms and Conditions
                                            ================================================================= -->
                                            <div class="cs-form__group" style="margin-bottom: 18px; margin-top: 18px; font-size: 13px; color: #7f7f7f;">
                                                By signing up you agree to our <a href="/company/terms/" target="_blank" style="color: #2f04ff; text-decoration: none;">Terms and conditions</a>, and <a href="/privacy/" target="_blank" style="color: #2f04ff; text-decoration: none;">Privacy Policy</a>
                                            </div>
    
                                            <div class="cs-form__group" style="margin-bottom: 0; margin-top: 18px; font-size: 10px; color: #9f9ca6;">
                                                *This includes periodic newsletters, emails about usage tips, billing practices, and other communications. You can opt out anytime within the app.
                                            </div>
                                            <!-- ================================================================
                                            Accept Terms and Conditions
                                            ================================================================= -->
    
                                        </div>
                                    </div>
                                    <!-- ================================================================
                                    Form part end 
                                    ================================================================= -->
                                    <input type ='hidden'  name="cf_business_type"  value="saas" />
                                    <input type ='hidden'  name="cb_signedup_plan"  value="" />
                                    <input type ='hidden'  name="cf_adwords_keyword"  value="" />
                                    <input type ='hidden'  name="cf_adwords_campaign_id"  value="" />
                                    <input type ='hidden'  name="cf_hubspotutk" id="cf_hubspotutk"  value="" />
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
                                <form id="locale_form" method="post"  action="https://app.chargebee.com/users/create">
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
            //material button animation
            $('.cs-panel').mousedown(function (e) {
                var target = e.target;
                var rect = target.getBoundingClientRect();
                var ripple = target.querySelector('.ripple');
                $(ripple).remove();
                ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
                target.appendChild(ripple);
                var top = e.pageY - rect.top - ripple.offsetHeight / 2 -  document.body.scrollTop;
                var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
                ripple.style.top = top + 'px';
                ripple.style.left = left + 'px';
                return false;
            });

            //Onclick active
            $('.cs-panel').click( function() {
                $(this).toggleClass('cs-panel--active').siblings().removeClass('cs-panel--active');
            });
            // load and set site locale
            $.ajax({
                url: "https://merchant-test.chargebee.com/users/extract_locale",
                jsonp: "_jsapi_callback",
                dataType: "jsonp",
                success: function(data) {
                    window.site_locale = data;
                }
            });

            var getParameterByName = function(name, url) {
                if (!url) url = window.location.href;
                name = name.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, " "));
            }
            
            var couponCode = getParameterByName("cb_coupon_code");
            if(couponCode && couponCode.trim()){
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

            var setBusinessTypeAndSendGa = function(businessType){
                $("input[name='cf_business_type']").val(businessType);
                var btypega = "btype-sel-" + businessType;
                ga('send', 'event', 'website', 'signup-intent', btypega); 
            }

            $('[cb-business-type-container]').click(function(){
                setBusinessTypeAndSendGa($(this).attr("cb-business-type"));
            });

            $('#business-type-no').change(function(){
                $('[cb-business-type-container]').removeClass('cs-panel--active');
                if($(this).is(':checked')){
                    setBusinessTypeAndSendGa($(this).attr("cb-business-type"));
                    $('#business-type-container').addClass('cs-panels--disabled')
                }else{
                    $("input[name='cf_business_type']").val('');
                    $('#business-type-container').removeClass('cs-panels--disabled')
                }
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
            if(adkeyword) {
                $("input[name='cf_adwords_keyword']").val(decadkeyword);
            }
            var adcampaignid = $.cookie('campaignid');
            if(adcampaignid) {
                $("input[name='cf_adwords_campaign_id']").val(adcampaignid);
            }
            
            $('.trial-submit, #sign-up-submit').click(function() {
                $.removeCookie('keyword');
                $.removeCookie('campaignid');
            });

            var commonEmailProviders = [];

            var enableUserCreateSubmit = function(){
                if($('#user\\\.email').val() !== '' && ($('[cb-business-type]').hasClass('cs-panel--active') || $('#business-type-no').is(':checked'))){
                    $('#sign-up-submit').removeAttr('disabled');
                }else{
                    $('#sign-up-submit').attr('disabled','disabled');
                }
            };
            $('#user\\\.email').on('keyup',function(){
                enableUserCreateSubmit();
            });

            $('#user\\\.email').on('change',function(){
                enableUserCreateSubmit();
            });

            $('#business-type-no').on('change',function(){
                enableUserCreateSubmit();
            });

            $('[cb-business-type]').click(function(){
                enableUserCreateSubmit(); 
            })
            $('#sign-up-submit').click(function(e){
                if(isFreeEmail($('#user\\\.email').val())){
                    $('#user\\\.email-err').html("Please enter a valid business e-mail address.<br>Don't have one? <a href=\"/schedule-a-demo/\">Request a demo</a>");
                    e.preventDefault();
                    return false;
                }else{
                    $('#user\\\.email-err').text('');
                }
            });
            //******************************************************************************
            //******************************************************************************
            var hubspotutk_val = $.cookie('hubspotutk');
            if(hubspotutk_val && hubspotutk_val !=''){
                $('#cf_hubspotutk').val(hubspotutk_val);
            }
        }
    }
</script>
<style>
    .cs-form__field-group{
        position: relative;
    }
    .cs-form__field-group .cs-form__control{
        padding-left: 75px;
    }
    .cs-form__addon{
        position: absolute;
        top: 2px;
        line-height: 40px;
        left: 4px;
        background: #fff;
        font-size: 12px;
        color: #b3b3b3;
        padding: 6px;
        height: 50px;
        border-right: 1px solid #00000017;
    }
    @media only screen and (min-width: 1024px){
        .cs-form__addon{
            height: 38px;
            line-height: 28px;
        }
    }
    .cs-form__control--error{
        border-color: red;
    }
</style>
