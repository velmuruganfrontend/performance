<template>
    <div>
        <app-meta 
            :cb-title="'Chargify Alternative - See why Chargebee is the best in billing!'" 
            :cb-desc="'Chargify is good. But, Chargebee makes the whole subscription management workflow smarter, efficient, without burning a hole in your pocket. Learn how.'" 
            :cb-url="'/compare-competitors/chargify/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <!-- ===============================================================
                                    Start Banner Part  
            =================================================================-->
            <section class="hero hero--invert" style="background-image: none; background-color: #fff; padding-bottom: 30px;">
                <div class="container">            

                    <div class="row">
                        <div class="col-sm-8 col-md-6 col-md-push-6">
                            <div style="margin-top: 30px;">
                                <img src="/static/website/version/images/alternatives/chargify/chargify-alternative.png" class="img-responsive" alt="">
                            </div>
                        </div>
                        <div class="col-sm-8 col-md-6 col-md-pull-6">
                            <article style="text-align: left;">
                                <h1>Looking for a <br class="visible-md visible-lg">Chargify alternative?</h1>
                                <p style="max-width: 540px; margin-left: 0;">You’re in the right place. Learn why <span class="totalCustomer"></span> subscription businesses use Chargebee over other billing systems, every day.</p>
                                <div class="mar-t-sm mar-b-xs">
                                    <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-brand btn-md btn-suffix" style="color:#fff;" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">
                                        Get Started Now
                                    </a><br class="hidden-lg">
                                    <a href="/schedule-a-demo/?ref=comp" class="btn btn-ghost-brand btn-suffix btn-md">Request a Demo</a>
                                </div>

                                
                            </article>
                        </div>
                        
                    </div>
                </div>
            </section>
            <!-- ================= End Banner part =================  -->
            <section class="container">

                <!-- ================= Invoice Section =================  -->
                <article class="tpmain-content">
                    <div class="row">
                        <div class="col-md-5 col-md-offset-1 col-md-push-6 col-lg-5 col-lg-offset-1 col-lg-push-5">
                            <img src="/static/website/version/images/compare-competitors/chargify/billing-chargify.png" width="524" class="img-responsive" alt="">
                            <div class="space-top-md visible-sm visible-xs"></div>
                        </div>
                        <div class="col-md-5 col-md-offset-1 col-md-pull-6 col-lg-4 col-lg-offset-1 col-lg-pull-6">
                            <div class="tpmain-label">Billing ops. Done right</div>
                            <h2 class="tpmain-content__title">Because billing isn’t just about sending invoices.</h2>
                            <p class="tpmain-content__text">
                            You care about serving customers better, and as you scale, you will encounter different requests from your customers especially around payments. 
                            </p>
                            <p class="tpmain-content__text">
                            You should never be forced to say NO because your billing system does not allow you to handle those requests as they come. 
                            </p>
                        </div>
                    </div>
                </article>


                <!-- ================= Dunning Section =================  -->
                <article class="tpmain-content">
                    <div class="row">
                        <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
                            <img src="/static/website/version/images/compare-competitors/chargify/globaltax-chargify.png" width="580"  class="img-responsive" alt="">
                            <div class="space-top-md visible-sm visible-xs"></div>
                        </div>

                        <div class="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
                            <div class="tpmain-label">Global Tax & Multilingual Support</div>
                            <h2 class="tpmain-content__title">Because you want to go global.<br class="visible-lg"> For real.</h2>
                            <p class="tpmain-content__text">You cannot cater to a global customer base with a system that ignores simple tax requirements, and only supports a handful of languages and currencies. You need more.</p>
                            <p class="tpmain-content__text">A customer wants to pay by Direct Debit? You want to set up different taxes for different products? Greet a customer in Bordeaux with an email in French?</p>
                            <p class="tpmain-content__text">As you scale new borders with Chargebee’s complete Multilingual support and Global Tax offering, you would not have to say no to anything. Ever.</p>
                        </div>
                    </div>
                </article>
                


                <!-- ================= Testimonial Section =================  -->
                <article class="tpmain-content">
                    <div class="row">
                        <div class="col-md-9 col-md-offset-1 col-lg-8 col-lg-offset-2">
                            
                            <div class="tpmain-testimonial">
                                <div class="tpmain-testimonial__container">
                                    <div class="tpmain-testimonial__figure">
                                        <img src="/static/website/version/images/case-study/justin-guavapass.png" class="img-responsive">
                                    </div>
                                    <div class="tpmain-testimonial__content">
                                        <div class="tpmain-testimonial__disp">Before expanding to a new country, all we do is configure the relevant payment option and the currency in Chargebee. That’s it! <span class="tpmain-testimonial__mark">Switching to Chargebee</span> has definitely helped us <span class="tpmain-testimonial__mark">streamline our development resources</span>.
                                        </div>
                                        <div class="tpmain-testimonial__author">Justin Louie</div>
                                        <div class="tpmain-testimonial__role">CTO, GuavaPass</div>
                                    </div>
                                </div>
                            </div>
                        </div>     
                    </div>
                </article>

                <!-- ================= saas Section =================  -->
                <article class="tpmain-content">
                    <div class="row">
                        
                        <div class="col-md-8 col-md-offset-2 ">
                            <div class="tpmain-label">Credit Notes</div>
                            <h2 class="tpmain-content__title">Because invoices aren’t enough.</h2>

                            <p class="tpmain-content__text">
                            In the jumble of what’s owed and what’s due, a Credit Note is as vital as an Invoice. Chargebee gets that. Hence, you’d never find yourself issuing an invoice when what’s befitting is a Credit Note, or creating credits for a payment you haven’t actually received yet.
                            </p>
                        </div>
                        <div class="col-md-8 col-md-offset-2" style="margin-top: 40px;">
                            <img src="/static/website/version/images/compare-competitors/chargify/creditnote-chargify.png" class="img-responsive" alt="">
                            <div class="space-top-md visible-sm visible-xs"></div>
                        </div>
                        <div class="col-md-10 col-md-offset-2">
                            <div class="space-top-md hidden-sm hidden-xs" style="margin-top: 30px"></div>
                            <p class="tpmain-content__text">Plus, there’s more:</p>
                        </div>
                        <div class="col-md-5 col-md-offset-1 col-lg-4 col-lg-offset-2">
                            <p class="tpmain-content__text tpmain-content__dash">It is easier to calculate the reduction in your tax liability due to refunds and adjustments, as they are captured as a part of the Credit Notes.</p>
                            <p class="tpmain-content__text tpmain-content__dash">Credit Notes are in the form of documents, so they can be used for tax filing purposes.</p>    
                        </div>
                        <div class="col-md-4 col-md-offset-1 col-lg-5 col-lg-offset-1">
                            <p class="tpmain-content__text tpmain-content__dash">Like invoices, Credit Notes can be sent to the customer if required.</p>
                            <p class="tpmain-content__text tpmain-content__dash">It’ll be easier to map with accounting tools, as most of them represent credits using Credit Notes.</p>
                        </div>
                    </div>
                </article>


                <!-- ================= saas Section =================  -->
                <article class="tpmain-content">
                    <div class="row">
                        <div class="col-md-5 col-md-offset-1 col-md-push-6 col-lg-5 col-lg-offset-1 col-lg-push-5">
                            <img src="/static/website/version/images/compare-competitors/chargify/accounting-chargify.png" width="500"  class="img-responsive" alt="">
                            <div class="space-top-md visible-sm visible-xs"></div>
                        </div>

                        <div class="col-md-5 col-md-offset-1 col-md-pull-6 col-lg-4 col-lg-offset-1 col-lg-pull-6">
                            <div class="tpmain-label ">Thought out Accounting Integrations</div>
                            <h2 class="tpmain-content__title">Because closing the books isn’t the only thing Finance teams do.</h2>

                            <p class="tpmain-content__text">Each minute that the Finance team spends on repetitive tasks, is a minute not spent understanding revenue & expense drivers, a minute not spent on growth. </p>
                            
                            <p class="tpmain-content__text">Number crunching and fiddly bookkeeping during any time of the year, let alone the end of fiscal year, tends to be cumbersome.</p>

                            <p class="tpmain-content__text">With Chargebee, you can map granular details by creating classes that categorize based on subscriptions, plans, and customers, not just sites.</p>
                        </div>

                    </div>
                </article>


                <!-- ================= saas Section =================  -->

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
                        <div class="col-md-6">
                            <a class="tpmain-panel" style="min-height: 315px;" href="https://www.chargebee.com/docs/migrating-subscriptions-to-chargebee.html">
                                <h4 class="tpmain-panel__title">Complete Migration Support</h4>
                                <p class="tpmain-panel__text">Migrating your customer data (subscriptions and other details) is simple. Just send us a request, and we’ll assist you through the process.</p>
                                <span class="tpmain-panel__link">Learn more &rarr;</span>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <a class="tpmain-panel" style="min-height: 315px;" href="/subscription-management/">
                                <h4 class="tpmain-panel__title">Take a Product Tour</h4>
                                <p class="tpmain-panel__text">With Chargebee, manage the entire subscription lifecycle. Send recurring invoices with accurate global taxes. Dispatch lifecycle emails in multiple languages. Have enough time to ship delight of all sorts. </p>
                                <span class="tpmain-panel__link">Here's how you can pull it off &rarr;</span>
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
        methods: {},
        mounted(){
          $('.con__question-group ul > li').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
          });
        }
    }
</script>