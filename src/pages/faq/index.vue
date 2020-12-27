<template>
    <div>
        <app-meta 
            :cb-title="'Subscription Billing & Recurring Revenue Business FAQ - Chargebee'" 
            :cb-desc="'Questions related to Chargebee Features, Pricing, Billing, Security &amp; Porting'" 
            :cb-url="'/faq/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="true" />
        <div class="cb-body">
            <!-- ===============================================================
            Start Banner Part  
            ================================================================ -->
            <section class="hero hero--invert" style="background-image: none; background-color: #7864FF; padding-top: 150px; padding-bottom: 80px">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <h1 style="color: #fff; font-weight: 600">
                                Frequently Asked Questions
                            </h1>
                            <p style="color: rgba(255,255,255, 0.8);">
                                if your question doesn't figure here, just ask us at <a href="mailto:support@chargebee.com" style="color: #fff; border-bottom: 1px dashed #fff">support@chargebee.com</a>
                            </p>
                        </div>
                    </div>
                </div>
           </section>
           <!-- ===============================================================
           End Banner Part  
           ================================================================ -->
              <section class="faq-block-page">
               <div class="faq-list top-list text-uppercase text-15 hidden-xs">
                   <div class="container">
                       <ul class="nav nav-pills nav-justified">
                           <li><a href="#general">General</a></li>
                           <li><a href="#pricing">Pricing</a></li>
                           <li><a href="#features">Features</a></li>
                           <li><a href="#payments">Payments</a></li>
                           <li><a href="#security">Security</a></li>
                           <li><a href="#global">Global</a></li>
                           <li><a href="#porting">Porting</a></li>
                       </ul>
                   </div>
                  </div>
               <div class="container block-space ">
                   <div class="row">
                       <div class="col-md-8 col-md-offset-2 text-15">                        
                           <div id="general" class="block-space-sm"></div>
                           <div class="block-title-alt">General</div>                        
                           <div class="block-space">
                               <h4>What is Chargebee and what does Subscription Billing mean?</h4>
                               <div>
                                   <p>Consider Chargebee as your off-the-shelf plug-&amp;-play billing solution delivered on the cloud. You can connect with Chargebee via API if you are technically inclined or use our <a href="/security/pci/">PCI compliant</a> hosted payment pages to collect payments, to go-live in minutes.</p>
                                   <p>Chargebee provides a robust &amp; flexible billing system to enable your sales & marketing team to run special promotions, and the right tools for your support team to billing accurately &amp; respond faster for billing queries. And it helps collect payments online from payment gateway of your choice.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>Why should I use Chargebee instead of building my own billing system?</h4>
                               <div>
                                   <p>Recurring billing is much more than billing at periodic intervals. To ensure your customers have a great shopping experience, you need to provide them with a simple and easy to use payment system. We offer you just that.</p>
                                   <p>We also help reduce customer churn by giving you actionable data with the help of notifications and reports to ensure that you are on top of things with your business. </p>
                                   <p>Building a billing system on your own requires a lot of time, effort and focus from management. Using us, you can least of all be at peace knowing that your entire customer billing is handled by the experts in the most secure way.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>How soon can I start using your service?</h4>
                               <div>
                                   <p>You can sign up online to explore our application sandbox right away. To get paid online from users, you will need a payment gateway &amp; merchant account from any of the supported payment gateways. It takes anywhere between a few days to a few weeks to get an approved payment gateway account, so please factor that in to go-live.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>What happens to my subscribers if I delete a plan?</h4>
                               <div>
                                   <p>All the subscriptions of that plan will continue to remain, unless we explicitly move them to another plan. The deletion is only a "soft" delete that stops the plan from allowing new subscriptions.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>What happens if your service is down?</h4>
                               <div>
                                   <p>Chargebee is hosted on data servers using Amazon Web Services across multiple locations. We have taken several measures to ensure continued service across regions. Unless there is an outage across a large region &amp; multiple data centers, the service will be accessible for users.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>Do you have downtime?</h4>
                               <div>
                                   <p>We strive towards zero downtime, including deployments over weekends. Our engineering team has extensive experience handling server scalability and you can rest assured on our ability to provide a highly available and highly scalable service. You can check the <a href="http://status.chargebee.com/" target="_blank" title="uptime status of Chargebee here">uptime status of Chargebee here.</a></p>
                               </div>
                               <hr class="clearfix">
                               <h4>Who is responsible for chargebacks?</h4>
                               <div>
                                   <p>As a merchant you are still responsible for chargebacks as the merchant account is owned by you. Chargebee helps you with the right tools to communicate often &amp; communicate unambiguously to avoid chargebacks from your customers. Here are some additional resources on how to <a href="/blog/avoiding-chargebacks-recurring-billing-transactions-whiteboard-monday/" target="_blank" title="avoid chargebacks">avoid chargebacks.</a></p>
                               </div>
                               <hr class="clearfix">
                               <h4>Can I change my company name or how charges appear on a customer’s credit card statements?</h4>
                               <div>
                                   <p>Yes you may at any time. It is called the "DBA name" ("Doing-Business-As"). Please contact your merchant account provider / payment gateway to update the correct name.</p>
                                   <p>One of the best practices is to ensure you use your DBA name as the most recognized name by customers - example your company may be called "ACME Inc.," but if customers are familiar with the name "campbase.com", use the latter as your DBA name.</p>
                                   <p>And you can append also the DBA name with a phone number or other contact information, so customers can readily reach out in case of questions.</p>
                               </div>
                           </div>
                           <div id="pricing" class="block-space-sm"></div>
                           <div class="block-title-alt">Pricing</div>                        
                           <div class="block-space">
                               <h4>Do you charge separately for every site that I create in Chargebee?</h4>
                               <div>
                                   <p>No. The charges are consolidated across all sites and there is no need to pay any additional fee for each site. However, if you have multiple sites in Chargebee, just notify our support email id and we will ensure we consolidate the billing.</p>
                               </div>
                           </div>
                           <div id="features" class="block-space-sm"></div>
                           <div class="block-title-alt">Features</div>                        
                           <div class="block-space">
                               <h4>I want to up-sell additional services. How can I charge my customer on top of standard charges?</h4>
                               <div>
                                   <p>This is called "add-ons" or "components" support with most businesses. You can configure quantity based or on/off components that your customers can subscribe to. Chargebee will seamlessly handle the billing line items ensuring that your customer invoice reflects this without ambiguity.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>Can I accept check payments?</h4>
                               <div>
                                   <p>Yes. You can track payments made via bank transfer, checks etc., in a single place & reconcile invoices, apart from automatic reconciliation of online credit payments.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>Do you support one time transactions?</h4>
                               <div>
                                   <p>Yes. One-time transactions are supported.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>Do you support EU VAT?</h4>
                               <div>
                                   <p>Yes we do have EU VAT Support. You can read more about the EU VAT feature <a href="https://www.chargebee.com/docs/tax.html" target="_blank" title="eu vat">here</a>.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>How can my Customers edit their Subscriptions?</h4>
                               <div>
                                   <p>Chargebee has the Customer Portal feature that allows your Customers to make changes to their Subscriptions. This includes updating their Account Information and Card, Billing and Shipping Address details, changing Subscription etc. <a href="https://www.chargebee.com/docs/customer_portal.html" target="_blank" title="customer portal">Here's</a> more on this.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>What if I want more features in the Customer Portal?</h4>
                               <div>
                                   <p>We want you to have the flexibility to build additional features in the portal that you think are important for your business. For this reason, we recently released the open source version of our portal. <a href="https://www.chargebee.com/docs/open-source-projects.html#open-source-customer-portal" target="_blank" title="customer portal">Here's</a> more on this.</p>
                               </div>
                           </div>
                           <div id="payments" class="block-space-sm"></div>
                           <div class="block-title-alt">Payments</div>                        
                           <div class="block-space">
                               <h4>What is a payment gateway?</h4>
                               <div>
                                   <p>A payment gateway is a software service that authorizes payments for eCommerce transactions.</p>
                                   <p>Imagine this to be the pipe that connects the end user credit cards that are issued by thousands of banks across the world (WellsFargo, Bank of America etc.,) with the card networks (Visa, Master, Amex, Discover etc.,) and eventually your bank account. Of course, there is lot that goes into what a payment gateway does including verifications, authorizations, fraud detection, currency exchange, settlements etc., but essentially it is a software component on the internet to help route money.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>What is a merchant account?</h4>
                               <div>
                                   <p>A merchant account is a type of bank account that allows businesses to accept payments by debit or credit cards or bank transfers. It is a line of credit extended to businesses by the bank, after due risk assessment.</p>
                                   <p>End users can apply a chargeback and retrieve the money back, if the business fails to deliver the promised service. And the line of credit extended by bank is used to reimburse such chargebacks and recover it from business. This is why there is a risk assessment of business and certain restrictions are applied on a merchant account, unlike a standard bank account.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>How do I get a merchant account?</h4>
                               <div>
                                   <p>You can directly apply with any of the payment gateway / merchant account providers. We can also assist you with introductions if you need help.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>Can I use my existing merchant account & payment gateway?</h4>
                               <div>
                                   <p>Yes, you can. In fact you will need a merchant account & payment gateway (in some cases there is no separation like the case of PayPal Payments Pro) to be configured in Chargebee, to process payments on your behalf.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>Do I need a CIM (Customer Information Manager) on my payment gateway?</h4>
                               <div>
                                   <p>No. With many of the gateways, you have the option to store credit card in the payment gateway vault, usually for an additional charge. When you use Chargebee services, this is not required as it is included in the charges for Chargebee.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>Do I need Recurring Billing enabled on my payment gateway account?</h4>
                               <div>
                                   <p>No. You do not need the recurring billing module separately from your payment gateway. For example, Authorize.net offers an ARB (Automated Recurring Billing) that helps solve specific use cases for merchants who need recurring billing. However, when you use Chargebee solution, you do not need this. Just a standard account is enough.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>Do you support multiple payment gateways?</h4>
                               <div>
                                   <p>Yes. You can even drive customers to be subscribed via different gateways, by just configuring the gateways. You would set one by default and then can control change of gateway for specific subscriptions.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>How do I receive payments? Does Chargebee settle the money?</h4>
                               <div>
                                   <p>Consider Chargebee as your extended system to manage your subscriptions. We do not touch the money part. We take care of initiating the authorization, capture & refunds on your behalf with payment gateways. So the settlement happens to you directly by the payment gateway and not by Chargebee.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>Can I accept payments via direct debit (via ACH/BACS/SEPA) with Chargebee?
                               </h4>
                               <div>
                                   <p>Yes. Direct debit payments are initiated by the merchant and made directly from a customer's bank account. It is processed via the respective networks in different countries namely ACH in the USA, BACS in the UK, SEPA in Europe. Here is an overview of what Chargebee can do for you if you want to accept direct debit payments directly from your customers' bank accounts.
                                       <br>
                                       - For the US, Chargebee supports ACH payments via Stripe and Authorize.Net.
                                       <br>
                                       - In the UK, Eurozone and Sweden, Chargebee supports direct debit payments with GoCardless - an online direct debit provider based in the UK. Here's more on accepting <a href="https://www.chargebee.com/docs/direct-debit-payments.html" target="_blank">direct debit payments with Chargebee</a>.</p>
                               </div>
                           </div>
                           <div id="security" class="block-space-sm"></div>
                           <div class="block-title-alt">Security</div>                        
                           <div class="block-space">
                               <h4>Is Chargebee PCI compliant?</h4>
                               <div>
                                   <p>Yes. Chargebee is <a href="/security/pci/">PCI DSS Level 1 compliant</a>. We ensure that your financial data is always safe.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>Is it safe to access my data over the Internet?</h4>
                               <div>
                                   <p>Yes, absolutely. Everything you do in the Chargebee application is on completely over HTTPS – your data is fully encrypted by an SSL connection and accessed over the internet.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>Do you store credit card information?</h4>
                               <div>
                                   <p>We store the credit card information in the payment gateways or in an external vault, depending on your preferences and payment gateway used. No card information is stored in Chargebee, except the last few digits required for identification and the token provided by the credit card vault for recurring transactions.</p>
                               </div>
                           </div>
                           <div id="global" class="block-space-sm"></div>
                           <div class="block-title-alt">Global</div>                        
                           <div class="block-space">
                               <h4>What currencies do you support?</h4>
                               <div>
                                   <p>We support all the popular currencies including USD, EUR, GBP, CHF, AUD, INR, SGD, AED and many others. If there is a currency you are looking for that is not available, drop us a mail and we will be sure to support it.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>Can I use this solution for global customers or only customers in my country?</h4>
                               <div>
                                   <p>You can use this solution globally, although you should check with your payment processor if they have any restrictions for your account. For example, in India PayPal does not allow domestic transactions.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>Do you support multiple currencies?</h4>
                               <div>
                                   <p>Yes, we do. Multi-currency pricing is available across all our plans for our <a href="https://www.chargebee.com/docs/supported-currencies.html" target="_blank"> supported currencies</a> and its feature capability is based on the Chargebee plan you’re on. For more information, <a href="https://www.chargebee.com/recurring-payments/multicurrency/" target="_blank">click here.</a></p>
                               </div>
                           </div>
                           <div id="porting" class="block-space-sm"></div>
                           <div class="block-title-alt">Porting</div>                        
                           <div class="block-space">
                               <h4>Can I export my data from Chargebee?</h4>
                               <div>
                                   <p>Yes. We have given export data option for subscriptions. For any other configurations, please send an email to support@chargebee.com and we will be happy to assist you.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>How do I cancel my account?</h4>
                               <div>
                                   <p>To cancel your account, please email us at <a href="mailto:support@chargebee.com">support@chargebee.com</a> along with your Chargebee site name and we will assist you with the cancelation.</p>
                               </div>
                               <hr class="clearfix">
                               <h4>What happens to all my data if I cancel my account?</h4>
                               <div>
                                   <p>We provide an open API, which you can use to export all your data. All the sensitive data like card information will be purged after the standard retention period. You can also request our support team to export all your billing data if you wish to migrate to another billing system.</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
             </section>            
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
        }
    }
</script>
<style type="text/css">.faq-block-page hr{width:120px;margin-left:0;border-color:#aaa;}</style>