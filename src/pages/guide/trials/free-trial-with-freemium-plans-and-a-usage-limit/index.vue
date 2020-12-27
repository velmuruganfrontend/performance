<template>
    <div>
        <app-meta 
            :cb-title="'Free Trial with Freemium Plans and a Usage Limit'" 
            :cb-desc="'Offer a paid plan as a free trial, with a freemium model pricing structure and a usage limit, without a credit card requirement.'" 
            :cb-url="'/guide/trials/free-trial-with-freemium-plans-and-a-usage-limit/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css'"
            :cb-head-script="''"
            :cb-body-script="'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <div class="pad-top-head-height">
                <!-- InstanceBeginEditable name="Page Content" -->
                <div class="container block-space text-15">        
                    <div class="row">
            
                        <div class="col-md-6">
                            <ol class="breadcrumb block-custom-breadcrumb">
                            <li><a href="/guide/">Guide</a></li>
                            <li><a href="/guide/trials/">Trials</a></li>
                            <li class="active">Free Trial with Freemium Plans and a Usage Limit</li>
                            </ol>
                            
                            <div class="block-trials-detail">
                                <div class="block-trial-section">
                                    <h1>Free Trial with Freemium Plans and a Usage Limit</h1>
                                    <h4>Plans</h4>
                                    <p><span style="font-weight:400;">Free, Pro, Premium</span> etc. all with a stipulated trial period.</p>
                                </div>
            
                                <div class="block-trial-section">
                                    <h4 id="scenario">Scenario</h4>
                                    <p>Tim signs up for your product and by default you put him on a free but limited trial. When the trial period is about to expire, you send him an email asking him to pick a plan. After he chooses the plan, you ask him to key in his card information. If he doesn’t pick a plan, his account will be disabled.</p>
            
                                    <p>P.S. The freemium plan also requires a valid card on file to remain active. If Tim exceeds the free usage limit, usage charges will be applied.</p>
            
                                    <img src="/static/website/version/images/guides/free-trial-with-freemium-and-usage-limit.png" class="img-responsive block-tb-space">
                                    
                                </div>
            
                                <div class="block-trial-section">
                                    <h4 id="implementation">Implementation</h4>
            
                                    <h6 id="step1">Step 1: User Signup</h6>
                                    <p>Have a simple sign up form which collects user’s basic information (Name, Email, etc.).</p>
                                    
                                    <h6 id="step2">Step 2: Create Plans</h6>
                                    <p>Set up plans that correspond to your Pricing Structure. Also, <a href="https://www.chargebee.com/docs/metered_billing.html">enable Metered Billing</a> in Chargebee for handling usage related charges. Ensure that you have the API configuration for the same in place.</p>
            
                                    <pre>
                                    <code class="prettyprint">
                                    curl  https://{site}.chargebee.com/api/v1/plans \
                                        -u {site_api_key}: \
                                        -d id="pro" \
                                        -d name="Pro" \
                                        -d invoice_name="Pro Plan" \
                                        -d price="5000"
                                    </code>
                                    </pre>
                                    
                                    <h6 id="step3">Step 3: Create a Subscription</h6>
                                    <p>After a customer signs up, <a href="https://apidocs.chargebee.com/docs/api/subscriptions#create_a_subscription">create a subscription</a> in Chargebee (Creating a subscription automatically creates a customer in Chargebee).</p>
            
                                    <pre>
                                    <code class="prettyprint">
                                        curl  https://{site}.chargebee.com/api/v1/subscriptions \
                                            -u {site_api_key}: \
                                            -d customer[email]="john@user.com" \
                                            -d customer[first_name]="John" \
                                            -d customer[last_name]="Doe" \
                                            -d customer[phone]="+1-949-999-9999" \
                                            -d plan_id="premium" \
                                            -d billing_address[first_name]="John" \
                                            -d billing_address[last_name]="Doe" \
                                            -d billing_address[line1]="PO Box 9999" \
                                            -d billing_address[city]="Walnut" \
                                            -d billing_address[state]="California" \
                                            -d billing_address[zip]="91789" \
                                            -d billing_address[country]="US"
                                        </code>
                                    </pre>
                                    
                                    <h6 id="step4">Step 4: Watch out for when the trial ends</h6>
            
                                    <p>Have a webhook configured which listens to the <a href="https://apidocs.chargebee.com/docs/api/events#event_types">subscription_trial_ending</a> event. With the event response as a trigger, send automatic email reminders to your customers asking them to pick a plan and update their payment method information.</p>
                                    
                                    <p>P.S. You could also make this information appear as a notification inside your app using the webhook as a trigger.</p>
                                    
                                    <pre>
                                        <code class="prettyprint">
                                        curl  https://{site}.chargebee.com/api/v1/subscriptions/8avVGOkx8U1MX \
                                                -u {site_api_key}:
                                        </code>
                                    </pre> 
            
                                    <h6 id="step5">Step 5: Cancel Account or Collect Card Information</h6>
                                    <p>After the notification is sent:</p>
                                    <ul>  
                                        <li>
                                            <p>If customers do not pick a plan or cancel your account, Cancel the account using the <a href="https://apidocs.chargebee.com/docs/api/subscriptions#cancel_a_subscription">Cancel a Subscription API</a>.</p>
            
            
                                            <pre>
                                                <code class="prettyprint">
                                                curl https://{site}.chargebee.com/api/v1/subscriptions/8avVGOkx8U1MX/cancel \
                                                    -X POST  \
                                                    -u {site_api_key}:
                                                </code>
                                            </pre>
                                        </li>
                                        <li>
                                            <p>If customers update their payment information and pick a plan, update the plan and payment information using the <a href="https://apidocs.chargebee.com/docs/api/subscriptions#update_a_subscription">Update a Subscription API</a>.</p>
            
                                            <pre>
                                                <code class="prettyprint">
                                                curl  https://{site}.chargebee.com/api/v1/subscriptions/8avVGOkx8U1MX \
                                                        -u {site_api_key}: \
                                                        -d plan_id="premium" \
                                                        -d billing_address[first_name]="John" \
                                                        -d billing_address[last_name]="Doe" \
                                                        -d billing_address[line1]="PO Box 9999" \
                                                        -d billing_address[city]="Walnut" \
                                                        -d billing_address[state]="California" \
                                                        -d billing_address[zip]="91789" \
                                                        -d billing_address[country]="US"
                                                </code>
                                            </pre>
                                            <p>If you use Chargebee’s Hosted Pages + API, make use of the <a href="https://apidocs.chargebee.com/docs/api/hosted_pages#checkout_existing_subscription">Checkout Existing Subscription API</a> to collect information and pass it on to Chargebee.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
            
                        </div>
                        <div class="col-md-3"></div>
                        <div class="col-md-3 hidden-xs hidden-sm">
                            <div id="affix-nav">
                                <ul class="nav affix-sidenav">
                                    <li>IN THIS Page</li>
                                    <li class="active"><a href="#scenario">Scenario</a></li>
                                    <li>
                                        <a href="#implementation">Implementation</a>
                                        <ul>
                                            <li><a href="#step1">Step 1: User Signup</a></li>
                                            <li><a href="#step2">Step 2: Create Plans</a></li>
                                            <li><a href="#step3">Step 3: Create a Subscription</a></li>
                                            <li><a href="#step4">Step 4: Watch out for when the trial ends</a></li>
                                            <li><a href="#step5">Step 5: Cancel Account or Collect Card Information</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
            
                    </div>
                </div>
            <!-- InstanceEndEditable -->
            </div>                
        </div>
        <app-footer />
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
        methods: {

        },
        created() {

        },
        mounted() {
            $('body').scrollspy({ target: '#affix-nav' })
                $('#affix-nav').affix({
                    offset: {
                      top: 100,
                      bottom: function () {
                        return (this.bottom = $('#cb-affix-footer').outerHeight(true) + 50)
                    }
                }
            })
        }
    }
</script>