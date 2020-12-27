<template>
    <div>
        <app-meta 
            :cb-title="'FreshDesk - Case Study | Chargebee'" 
            :cb-desc="'Read Freshdesk\'s success story and how they swear by Chargebee\'s unfaltering performance through their business growth over the years.'"
            :cb-url="'/customers/freshdesk/'" 
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
                                            Finnish philology, computer clubs, back of business cards - life changing opportunities sit patiently, utterly overlooked, in coded forms. Seeking someone who’d spot the missing link or the ridiculously obvious connection, and then, pour in the time and effort, to pursue them.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section class="case-study__exp-block">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-2">
                                        <h2 class="case-study__exp-block--circle">The Origin</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-3">
                                        <section class="case-study__exp-block--subtext">
                                            <p class="cn-mar--b-st">
                                                For Girish Mathrubootham, one such opportunity, sat in a Hacker News comment. It was a user’s lament against a Helpdesk system that had recently raised its prices. Something happened to Girish, the moment he read it.
                                            </p>
                                            <p><strong class="cn-fs--st">So he did.</strong></p>
                                            <p class="cn-mar--b-sm">
                                                <small class="cn-fs--st">A stranger’s comment proved to be the trailhead of a once-in-a-lifetime company. In the middle of 2010, Girish gave up his job, assembled a crew, and went on to found, Freshdesk.</small>
                                            </p>
                                            <p>
                                                <small class="cn-fs--st">With the help of initial feedback, they assessed the polarities at the centre of what customers wanted and what the market offered. With a mission to make customer support "refreshingly easy" for companies, both small and large, they’ve scaled to 80,000 customers around the world.</small>
                                            </p>
                                        </section>
                                    </div>
                                </div>
                            </section>
                            <section class="case-study__exp-block__row">
                                <div class="case-study__exp-block__ls case-study__exp-block__ls--quote-bg">
                                    <div class="row">
                                        <div class="col-md-7 col-lg-8">
                                            The spidey sense in me told me that I should throw in my hat into the ring. That was the exact moment that I decided that I should  build something in the customer support market delivered as SAAS.
                                        </div>
                                        <div class="col-md-5 col-lg-4">
                                            <div class="img-circle author">
                                                <img src="/static/website/version/images/customers/freshdesk/cs-freshdesk-girish.jpg" alt="" class="img-responsive">
                                            </div>
                                            <div class="author-description">
                                                <h3>Girish Mathrubootham</h3>
                                                <p>Founder &amp; CEO of Freshdesk</p>
                                            </div>
                                        </div>
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
                                                By the time they were nearing <strong>500 customers</strong>, in early 2012 - increasingly, there were too many things to deal with and too few people to tend to them.
                                            </p>
                                            <p class="cn-mar--b-st">
                                                <small class="cn-fs--st">Freshdesk was built around creating great customer experiences, and they understood that billing was an essential part of it. So, they had a team of two developers focused full-time on handling DevOps and billing related issues.</small>
                                            </p>
                                            <p class="cn-mar--b-st">
                                                <small class="cn-fs--st">They had built a billing engine on rails, on top of Braintree subscriptions, to handle most things on their own. But the rate at which they were growing, it turned out, the engine wouldn’t be of much help.</small>
                                            </p>
                                            <p><strong class="cn-fs--st">Constant requests flooded their emails. </strong></p>
                                            <p class="cn-mar--b-sm">
                                                <small class="cn-fs--st">The sales team wanted them to issue discounts and extend trials. </small>
                                            </p>
                                            <p class="cn-mar--b-sm">
                                                <small class="cn-fs--st">The finance team needed a way to accept and manage different payment methods. </small>
                                            </p>
                                            <p class="cn-mar--b-sm">
                                                <small class="cn-fs--st">The support team needed information on specific subscriptions, at a click. </small>
                                            </p>
                                            <p class="cn-mar--b-sm">
                                                <small class="cn-fs--st">The team of two went all in. They dealt with the queries themselves for some time, and then created an admin billing interface, with different teams in mind. </small>
                                            </p>
                                            <p class="cn-mar--b-sm">
                                                <small class="cn-fs--st">The tensions remained. As they had to tinker the billing engine every other day, and that began to slow things down, across the company. </small>
                                            </p>
                                        </section>
                                    </div>
                                </div>
                            </section>
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
                                                They decided to use Chargebee, to see if they could quell the chaos that had spun around billing, because different teams relied on it to deliver.
                                            </p>
                                            <p class="cn-mar--b-st">To avoid dealing with a moving target, we started onboarding their new customers through Chargebee, and slowly migrated their old customers as well. A practice that we’ve followed with all customers, since</p>
                                            <p class="cn-mar--b-sm">
                                                <small class="cn-fs--st">Thus, Chargebee’s admin interface became the source of truth for all their operations. Whenever a customer signed up for a trial, a subscription was created in Chargebee. At the time of a paid conversion, a customer could put in a card, within Freshdesk, and then Chargebee made sure that the card information was sent to Braintree, and results were relayed back to Freshdesk.</small>
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
                                                Scaling is about outpacing one’s own growth. Transforming into a new kind of company, with the lessons from yesterday. It gets even more complex in horizontal markets, like Freshdesk’s.
                                            </p>
                                            <p class="cn-mar--b-sm">
                                                <small class="cn-fs--st">Nothing produces more anguish than losing a prospect, right when they’re at the edge of a purchase decision. With Chargebee, Freshdesk ironed out all conversion kinks that depend on the payments experience -</small>
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
                                        <section class="case-study__exp-block--subtext">
                                            <p class="cn-mar--b-sm">
                                                <small class="cn-fs--st">People at Freshdesk understand that growth is pointless without retention. The key to building a business that lasts is making sure that customers derive recurring value. Chargebee helps Freshdesk in -</small>
                                            </p>
                                        </section>
                                        <div class="case-study__exp-block__ls">
                                            <ul>
                                                <li>
                                                    Offering more control to customers within their app. As all our features are API first.
                                                </li>
                                                <li>
                                                    Sending lifecycle emails throughout various stages.
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="cn-mar--b-lg">
                                            <img src="/static/website/version/images/case-study/freshdesk/fd-wall.jpg" alt="" class="img-responsive" />
                                        </div>
                                        <section class="case-study__exp-block--subtext">
                                            <p class="cn-mar--b-sm">
                                                <small class="cn-fs--st">Clocks might tell us that all hours are the same. But ask individuals in different teams and you’d get different answers. Engineering hours. Reporting hours. Support hours. Each team is focused on tucking their progress towards different KPIs, in precious hours. </small>
                                            </p>
                                            <p class="cn-mar--b-sm">
                                                <small class="cn-fs--st">The fact that billing’s thread ties back all the teams, requires a system that lets teams work together towards a better customer experience, without hampering their productivity. </small>
                                            </p>
                                            <p class="cn-mar--b-sm">
                                                <small class="cn-fs--st">With Chargebee’s robust webhooks system, every single change made to a subscription, from the customer’s side or any of the teams, gets immediately reflected in one system. </small>
                                            </p>
                                            <p class="cn-mar--b-sm">
                                                <small class="cn-fs--st">And with role based access, different teams use a simple interface to take actions that mattered most. Fast. </small>
                                            </p>
                                            <p class="cn-mar--b-sm">
                                                <small class="cn-fs--st">Serving customers from startups to enterprises to government agencies, dealing with different billing use cases, tax systems, accepting multiple currencies and being sane. </small>
                                            </p>
                                            <p class="cn-mar--b-sm">
                                                <small class="cn-fs--st">That was then. </small>
                                            </p>
                                            <p class="cn-mar--b-sm">
                                                <small class="cn-fs--st">From 500 customers, they’ve now scaled to 80,000. Have underwent three different pricing iterations. And over the last year or so, have released three new SaaS products, all managed with Chargebee. </small>
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
                            </div>
                        </div>
                    </div>
                </section>
                <article class="container">
                    <div class="tpmain-content">
                        <div class="row">
                            <div class="col-md-6">
                                <a class="tpmain-panel" style="min-height: 315px;" href="/schedule-a-demo/">
                                    <h4 class="tpmain-panel__title">Curious about Chargebee?</h4>
                                    <p class="tpmain-panel__text">Schedule a demo of Chargebee to explore how it can simplify subscription billing for your company or just give us a call at +1 (877) 900 1818.</p>
                                    <span class="tpmain-panel__link">Request a demo &rarr;</span>
                                </a>
                            </div>
                            <div class="col-md-6">
                                <a class="tpmain-panel" style="min-height: 315px;" cn-mark-signup="true" href="/trial-signup/?plan=launch">
                                    <h4 class="tpmain-panel__title">Starting out?</h4>
                                    <p class="tpmain-panel__text">With the Launch plan, Chargebee is free until you hit your first <strong>$50K</strong> in revenue. So get, set & soar! <em>All features in Go except Phone Support.</em></p>
                                    <span class="tpmain-panel__link">Sign up for free &rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
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
