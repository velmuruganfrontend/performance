<template>
    <div>
        <app-meta 
            :cb-title="'Chargebee for Developers : Save time and a lot of legacy code'" 
            :cb-desc="'Deliver powerful billing experience, with Chargebee’s slick APIs'" 
            :cb-url="'/for-developers/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <!-- ===============================================================
                                Start Banner Part  
            ===============================================================-->
            <section class="hero hero--invert cb-role" style="background-image: none; background-color: #fff; padding-bottom: 30px;">
                <div class="container">            
                    <div class="row cb-role__hero">
                        <div class="col-sm-8 col-md-5 col-md-offset-1">
                            <article class="cb-sprint__hero-title">
                                <h1>Chargebee for <br class="visible-md visible-lg">Developers</h1>
                                <div class="mar-t-sm mar-b-xs hidden-xs hidden-sm">
                                    <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-primary btn-md btn-suffix" style="color:#fff;" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">
                                        Get Started Now
                                    </a>
                                </div>
                            </article>
                        </div>
        
                        <div class="col-sm-8 col-md-6">
                            <p class="cb-sprint__hero-desc">
                            Billing challenges are usually hidden. Starting up, you will need to set up hosted pages, activate customers, send invoices, and collect payments on day one. But as you grow, you will need to handle billing complexities such as accounting and taxes, revenue recovery, localization, customization, reporting and much more. Chargebee’s APIs are designed to support all that!
                            </p>
        
                            <div class="mar-t-sm mar-b-xs hidden-md hidden-lg">
                                <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-primary btn-md btn-suffix" style="color:#fff;" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">
                                    Get Started Now
                                </a>
                            </div>
                        </div>  
                    </div>
                </div>
           </section>
           <!-- ================= End Banner part =================  -->
           <!-- ================= Dark banner part =================  -->  
           <section class="cb-sprint__black">
               <div class="container">
                   <h2 class="cb-sprint__black--title">Tailor Subscription Billing for your Customers</h2>
                   <p class="cb-sprint__black--desc">Work with our robust APIs and SDKs. Build amazing experience with basic as well as advanced recurring billing.</p>
                   
                 <div class="cb-sprint__list cb-sprint__t-space">
                     <div class="cb-sprint__item">
                         <div class="cb-sprint__icon">
                             <img src="/static/website/version/images/roles/cb-scaling.svg" width="50" class="img-responsive" alt="">
                         </div>
                         <div class="cb-sprint__content">
                               <h5 class="cb-sprint__item-title">Experiment and Scale</h5>
                               <p class="cb-sprint__item-desc">Flexibly play around with different pricing models and plans, and a plethora of integration options as your grow. Test. Rinse. Repeat.</p>
                         </div>
                     </div>
   
                     <div class="cb-sprint__item">
                         <div class="cb-sprint__icon">
                             <img src="/static/website/version/images/roles/cb-migration.svg" width="50" class="img-responsive" alt="">
                         </div>
                         <div class="cb-sprint__content">
                               <h5 class="cb-sprint__item-title">Easy and Painless Migration</h5>
                               <p class="cb-sprint__item-desc">Migrate all subscriptions effortlessly, into PCI-compliant Chargebee, without breaking a sweat. You don’t have to collect card information again from your customers.</p>
                         </div>
                     </div>
   
   
                     <div class="cb-sprint__item">
                         <div class="cb-sprint__icon">
                             <img src="/static/website/version/images/roles/cb-billing-abstraction.svg" width="50" class="img-responsive" alt="">
                         </div>
                         <div class="cb-sprint__content">
                               <h5 class="cb-sprint__item-title">Billing Layer Abstraction</h5>
                               <p class="cb-sprint__item-desc">As your code base becomes more complex, you may want to separate billing from your actual application, to avoid messy fixes.</p>
                         </div>
                     </div>
   
   
                     <div class="cb-sprint__item">
                         <div class="cb-sprint__icon">
                             <img src="/static/website/version/images/roles/cb-no-lockins.svg" width="50" class="img-responsive" alt="">
                         </div>
                         <div class="cb-sprint__content">
                               <h5 class="cb-sprint__item-title">No Forced Lock-Ins</h5>
                               <p class="cb-sprint__item-desc">Create value for your customers and retain them. We don’t lock-in your customer and card data thus enabling easy portability.</p>
                         </div>
                     </div>
                 </div> 
   
               </div>
           </section>
           <!-- ================= Dark banner End =================  -->  
   
   
           <!-- ================= Subsection banner part =================  -->  
           <section class="cb-subsprint">
           <div class="container cb-subsprint__container">
               <h2 class="cb-subsubsprint__title">Chargebee - From Lead to Ledger</h2>
               <p class="cb-subsprint__desc" style="text-align: center; margin-top: -20px;">
               Streamline your subscriptions with deeper billing and invoicing feature sets and integrations with your favorite platforms and applications
               </p>
           </div>
           <div class="container" style="margin-top: 40px">
               <img src="/static/website/version/images/roles/cb-ledger-chart.png" class="img-responsive hidden-xs hidden-sm">
               <img src="/static/website/version/images/roles/cb-ledger-chart-mobile.png" width="400" class="img-responsive visible-xs visible-sm" style="margin: auto;"> 
           </div>
           </section>  
           <!-- ================= Subsection banner End =================  -->  
   
   
           <section class="container">
               
               <!-- ================= Invoice Section =================  -->
               <article class="tpmain-content">
                   <div class="row">
                       <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1 ">
                           <h2 class="tpmain-content__title" style="margin-bottom: 30px">Subscriptions, Payments, Invoicing. And one API to rule them all</h2>
                           <p class="tpmain-content__text tpmain-content__dash">
                               Elegant REST API to personalize billing workflow
                           </p>
                            <p class="tpmain-content__text tpmain-content__dash">
                               Extensive API docs & guides
                           </p>
                            <p class="tpmain-content__text tpmain-content__dash">
                               Metadata JSON Store
                           </p>
                           <p class="tpmain-content__text tpmain-content__dash">
                               Custom fields for extendable models
                           </p>
                            <p class="tpmain-content__text tpmain-content__dash">
                               Search & filter API capabilities
                           </p>
                           <p class="tpmain-content__text tpmain-content__dash">
                               Configurable Events and Webhook
                           </p>
                           <p>
                            <a href="/docs/developer_resources.html" class="tpmain-panel__link">Client Libraries  →</a>
                           </p>
                       </div>
                       <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
                           <div class="space-top-md visible-sm visible-xs"></div>
                           <h2 class="tpmain-content__title" style="margin-bottom: 30px">Contextual, Intuitive Recurring Billing System</h2>
                           <p class="tpmain-content__text tpmain-content__dash">
                               PCI-compliant Hosted Checkout Pages
                           </p>
                            <p class="tpmain-content__text tpmain-content__dash">
                               Seamless integration across multiple gateways
                           </p>
                            <p class="tpmain-content__text tpmain-content__dash">
                               Paypal, ACH, Bank Transfers, Offline and lot more
                           </p>
                           <p class="tpmain-content__text tpmain-content__dash">
                               Powerful Integration with Stripe
                           </p>
                            <p class="tpmain-content__text tpmain-content__dash">
                               Tax compliant invoices
                           </p>
                            <p class="tpmain-content__text tpmain-content__dash">
                               Fully customizable open source portal
                           </p>
                          <a href="https://apidocs.chargebee.com/" class="tpmain-panel__link">Extensive API docs & guides  →</a>
                       </div>
                   </div>
               </article>
   
               <article class="tpmain-content">
                   <div class="tpmain-callto">
                       <div class="row">
                           <div class="col-md-7 col-lg-6 col-lg-offset-1">
                               <div class="tpmain-callto__title">With Chargebee, subscription billing and accounting are effortless, efficient, and everything in between.</div>
                           </div>
                           <div class="col-md-5 col-lg-4 col-lg-offset-1">
                               <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-primary btn-primary-sec btn-md btn-suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">
                                   Sign up for free
                               </a>
                           </div>
                       </div>
                   </div>
               </article>
   
               <article class="tpmain-content">
                   <div class="row">
                       <div class="col-md-9 col-md-offset-1 col-lg-8 col-lg-offset-2">
                           <div class="tpmain-testimonial">
                               <div class="tpmain-testimonial__container">
                                   <div class="tpmain-testimonial__figure">
                                       <img src="/static/website/version/images/case-study/joao-codacy.jpeg" class="img-responsive">
                                   </div>
                                   <div class="tpmain-testimonial__content">
                                       <div class="tpmain-testimonial__disp">We were evaluating other products but Chargebee had the complete set of features that we were looking for. It really helped that with Chargebee we were able to abstract the billing part and keep it separate from our working code base. </div>
                                       <div class="tpmain-testimonial__author">João Caxaria</div>
                                       <div class="tpmain-testimonial__role">CTO, Codacy</div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </article>
   
               <article class="tpmain-content">
                   <div class="row">
                       <div class="col-md-6">
                           <a class="tpmain-panel" style="min-height: 315px;" href="/payment-gateways/stripe/">
                               <h4 class="tpmain-panel__title">Do more with Stripe. A lot more.</h4>
                               <p class="tpmain-panel__text">Guess what? Chargebee can replace a gazillion other tools you use with Stripe, and streamline a multitude of other processes (not just Accounting).</p>
                               <span class="tpmain-panel__link">Get the best of both worlds &rarr;</span>
                           </a>
                       </div>
                       <div class="col-md-6">
                           <a class="tpmain-panel" style="min-height: 315px;" href="/pricing/">
                               <h4 class="tpmain-panel__title">Plans and Pricing</h4>
                               <p class="tpmain-panel__text">No matter what stage your business is in, Chargebee has a pricing plan for you, which grows with you as you scale. Simple pricing, no transaction fees and no hidden costs.</p>
                               <span class="tpmain-panel__link">Pricing starts at $0 &rarr;</span>
                           </a>
                       </div>
                   </div>
               </article>
           </section>
   
           <div class="space-top hidden-sm hidden-xs"></div>             
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
            $('.con__question-group ul > li').click(function(){
                $(this).addClass('active').siblings().removeClass('active');
            });
        }
    }
</script>