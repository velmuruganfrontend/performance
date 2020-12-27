<template>
    <div>
        <app-meta 
            :cb-title="'Codacy - Case Study | Chargebee'" 
            :cb-desc="'Read up on how Codacy made a switch to Chargebee for all their billing needs just when their subscription handling was getting a little out of hand.'" 
            :cb-url="'/customers/codacy/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="true" />
        <div class="cb-body">
            <section class="case-study">
                <section class="case-study__banner cn-mar--b-md case-study__banner--shadow" style="background-image:url(/static/website/version/images/case-study/freshdesk/fd-entrance.jpg); background-position: top center;">
                    <div class="container" style="position: static;">
                        <section class="case-study__title-logo">
                            <h1 class="case-study__banner-title ff-freightDisPro make-italic" style="text-shadow: 0 3px 4px rgba(0, 0, 0, 0.36);">
                                From 500 to 80,000 Customers: <br> How Freshdesk Unlocked Massive Scale
                            </h1>
                        </section>
                    </div>
                </section>
                <section class="container">
                    <!-- <div class="case-study__breadcrumb">
                        <div class="case-study__breadcrumb-list">
                            <a class="case-study__breadcrumb-item" href="/">Home</a>
                            <a class="case-study__breadcrumb-item" href="/customers/">Customers</a>
                            <span class="case-study__breadcrumb-item">Freshdesk</span>
                        </div>
                    </div> -->

                    <div class="row">
                        <div class="col-lg-8 col-md-7">
                            <section class="case-study__exp-block">
                                <div class="row">
                                    <div class="col-md-11 col-md-offset-1">
                                        <p class="case-study__exp-block--brand">
                                            <img src="/static/website/version/images/customers/logos/freshdesk.png" width="210" alt="" class="img-responsive">
                                        </p>
                                        <p class="case-study__exp-block--disp">
                                            Freshdesk is helpdesk software that has set out to simplify customer support for companies.

                                            For Girish, Freskdesk CEO and co-founder, it all began with a Hacker News Comment . user was complaining that a helpdesk system had recently raised its prices. Girish gave up his job, assembled a crew, and founded Freshdesk.
                                        </p>
                                        <p class="case-study__exp-block--disp">
                                            With a mission to make customer support "refreshingly easy" for companies, both small and large, Freshdesk has over 80,000 happy customers who swear by the ease and convenience of the product.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section class="case-study__exp-block">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-2">
                                        <h2 class="case-study__exp-block--circle">The Challenge</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-3">
                                        <section class="case-study__exp-block--subtext">
                                            <p class="cn-mar--b-st">
                                                In early 2012, when Freshdesk was nearing 500 customers, there were too many things to deal with and too few people to tend to them.
                                            </p>
                                            <p class="cn-mar--b-st">
                                                Freshdesk was built around creating great customer experiences and they understood that billing was an essential part of this. They had a team of two developers focused full-time on handling DevOps and billing related issues.
                                            </p>
                                            <p>
                                                They had built a billing engine on Rails, on top of Braintree subscriptions, to handle most things on their own. But the rate at which they were growing, was too fast for their billing engine. 
                                            </p>
                                            
                                            <p>Their email was flooded with constant requests :</p>
                                            <ul>  
                                            <li>
                                                The sales team wanted to issue discounts and extend trials.
                                            </li>
                                            <li>
                                                The finance team needed a way to accept and manage different payment methods.
                                            </li>
                                            <li>
                                                The support team needed information on specific subscriptions, at a click.
                                            </li>
                                            <li>
                                                Girish himself wanted better metrics and reporting on his growing business
                                            </li>
                                            </ul>
                                            <p class="cn-mar--b-sm">
                                                The internal team of two went all in. They dealt with the queries themselves for some time, and then created an admin billing interface, with different teams in mind.

                                            </p>
                                            <p class="cn-mar--b-sm">
                                                But tensions still remained. They had to tinker with the billing engine every other day which began to slow things down across the company. 
                                            </p>
                                        </section>
                                    </div>
                                </div>
                            </section>
                                            
                
                            
                            <section class="case-study__exp-block">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-2">
                                        <h2 class="case-study__exp-block--circle">The Wayout</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-3">
                                        <section class="case-study__exp-block--subtext">
                                            <p class="cn-mar--b-st">
                                                They decided to use Chargebee because it could handle the complexities around billing and lessen the load on the internal teams.
                                            </p>
                                            <p class="cn-mar--b-st">They first started onboarding new customers with Chargebee and progressively migrated their old customers as well.</p>
                                            <p class="cn-mar--b-sm">
                                                The ease of user role management  for different teams to use Chargebee’s Admin Interface saved both time and misunderstandings. 
                                            </p>
                                            <p class="cn-mar--b-sm">
                                            Soon enough, Freshdesk was using Chargebee for their entire billing operations.
                                            </p>
                                        </section>
                                    </div>
                                </div>
                            </section>

                            <section class="case-study__exp-block">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-2">
                                        <h2 class="case-study__exp-block--circle">The Results</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-3">
                                        <section class="case-study__exp-block--subtext">
                                            <p class="cn-mar--b-st">
                                                Different teams in Freshdesk now handle their day to day operations smoothly, without involving developers.
                                            </p>
                                            <p class="cn-mar--b-sm">
                                                Chargebee's role based access gives different teams a simple interface to take action without relying on other teams.

                                            </p>
                                            <p class="cn-mar--b-st">
                                                With Chargebee, Freshdesk also ironed out other conversion kinks from the payment experience: 
                                            </p>
                                        </section>
                                        <div class="case-study__exp-block__ls">
                                            
                                            <ul>
                                                <li>
                                                    The ability to accept and reconcile multiple payment methods. ACH, PayPal, checks, and cash.
                                                </li>
                                                <li>
                                                    The ability to accept multiple currencies.
                                                </li>
                                                <li>
                                                    A seamless in-app checkout experience, powered by APIs.
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="cn-mar--b-lg">
                                            <img src="/static/website/version/images/case-study/freshdesk/fd-team.jpg" class="img-responsive" alt="growth story" />
                                        </div>
                                        
                                        <section class="case-study__exp-block__row">
                                <div class="case-study__exp-block__ls case-study__exp-block__ls--quote-bg">
                                    <div class="row">
                                        <div class="col-md-7 col-lg-8">
                                            I've always thought of payment gateways like Braintree, as more connected to the bank and less connected to the customers. Never, the other way around. For a customer driven SaaS business, you need a reliable system like Chargebee that takes care of the latter.
                                        </div>
                                        <div class="col-md-5 col-lg-4">
                                            <div class="img-circle author">
                                                <img src="/static/website/version/images/customers/freshdesk/cs-freshdesk-devops-kiran.jpg" alt="" class="img-responsive">
                                            </div>
                                            <div class="author-description">
                                                <h3>Kiran Darisi</h3>
                                                <p>Co-founder, Director of DevOps</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                                        <section class="case-study__exp-block--subtext">
                                        <p class="cn-mar--b-sm">
                                            Serving customers from startups to enterprises to government agencies, dealing with different billing use cases, tax systems, accepting multiple currencies and powering growth, Freshdesk does it all on top of Chargebee. 
                                            </p>
                                            <p class="cn-mar--b-sm">
                                                3 SaaS Products, over 80,000 customers and multiple pricing iterations later, Freshdesk still continues to enable companies in delivering exceptional customer support.
                                            </p>
                                            
                                        </section>
                                    </div>
                                </div>
                            </section>

                            
                        </div>
                        <div class="col-lg-3 col-md-4 col-md-offset-1">
                            <div class="case-study__feat">
                                <div class="case-study__feat-tiles">
                                    <div class="case-study__feat-tile">
                                        <div class="case-study__feat-tile-heading">80,000</div>
                                        <div class="case-study__feat-tile-disp">Customers <br> in 5 years</div>
                                    </div>
                                    <div class="case-study__feat-tile">
                                        <div class="case-study__feat-tile-heading">193</div>
                                        <div class="case-study__feat-tile-disp">Countries <br> available</div>
                                    </div>
                                    <div class="case-study__feat-tile">
                                        <div class="case-study__feat-tile-heading">06</div>
                                        <div class="case-study__feat-tile-disp">Different currencies</div>
                                    </div>
                                    <div class="case-study__feat-tile">
                                        <div class="case-study__feat-tile-heading">04</div>
                                        <div class="case-study__feat-tile-disp">Products on <br> our platform</div>
                                    </div>
                                </div>
                                <div class="case-study__feat-list">
                                        <div class="case-study__feat-list-title"><h6 class="case-study__feat-list-heading">Problem</h6></div>
                                        <div class="case-study__feat-list-item">
                                            <p>Freshdesk faced the classic scale problem. Their internal billing system could not match the pace of their scale. Developers ended up working on billing cases, rather than the product. The support and sales teams depended on engineering to carry out small tasks related to billing. 
                                            </p>
                                        </div>
                                    </div>
                                    <div class="case-study__feat-list">
                                        <div class="case-study__feat-list-title"><h6 class="case-study__feat-list-heading">Results</h6></div>
                                        <div class="case-study__feat-list-item">
                                            <p>Chargebee helped the entire team manage subscriptions, without biting into development time. Sales teams were able to close sales faster and the support team was able to delight customers by quickly resolving billing queries. The finance team reconciled payments, faster and better.</p>
                                        </div>
                                    </div>
                                    <div class="case-study__feat-list">
                                        <div class="case-study__feat-list-title"><h6 class="case-study__feat-list-heading">Highlights</h6></div>
                                        <div class="case-study__feat-list-item">
                                            <h6 class="case-study__feat-list-heading">More products:</h6>
                                            <p>With the dependency on developers for billing out of the way, Freshdesk was able to expedite their development process and launched 4 new products ever since they started using Chargebee.</p>
                                        </div>
                                        <div class="case-study__feat-list-item">
                                            <h6 class="case-study__feat-list-heading">Metrics & Reporting</h6>
                                            <p>They were able to track the business metrics that mattered. For a fast growing company like theirs, this was mandatory.</p>
                                        </div>
                                        <div class="case-study__feat-list-item">
                                            <h6 class="case-study__feat-list-heading">Payment Methods</h6>
                                            <p>The ability to accept and reconcile multiple payment methods. ACH, PayPal, checks, and cash.</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </section>
        </div>
        <app-footer></app-footer>
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
        mounted() {
            $('.pr-tab__plan-inv').tooltip({
                'show': true,
                'placement': 'bottom'
            });
        },
        methods: {}
	}
</script>
