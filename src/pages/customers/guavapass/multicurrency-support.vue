<template>
    <div>
        <app-meta 
            :cb-title="'GuavaPass - Case Study | Chargebee'" 
            :cb-desc="'Find out how GuavaPass, a monthly fitness membership and subscription business, migrated to Chargebee to set up their subscription management.'" 
            :cb-url="'/customers/guavapass/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="true" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <section class="case-study">
                <section class="case-study__banner cn-mar--b-md case-study__banner--shadow" style="background-image:url(/static/website/version/images/case-study/guavapass-banner.jpg); background-position: center left;">
                    <div class="container" style="position: static;">
                        <section class="case-study__title-logo">
                            <h1 class="case-study__banner-title ff-freightDisPro make-italic" style="text-shadow: 0 3px 4px rgba(0, 0, 0, 0.36)">
                                How GuavaPass scaled to 9 countries in a year, with Chargebee's multicurrency support.
                            </h1>
                        </section>
                    </div>
                </section>
                <section class="container">
                    <!-- <div class="case-study__breadcrumb">
                        <div class="case-study__breadcrumb-list">
                            <a class="case-study__breadcrumb-item" href="/">Home</a>
                            <a class="case-study__breadcrumb-item" href="/customers/">Customers</a>
                            <span class="case-study__breadcrumb-item">GuavaPass</span>
                        </div>
                    </div> -->

                    <div class="row">
                        <div class="col-lg-8 col-md-7">
                            <section class="case-study__exp-block">
                                <div class="row">
                                    <div class="col-md-11 col-md-offset-1">
                                        <p class="case-study__exp-block--brand">
                                            <img src="/static/website/version/images/customers/logos/guava-pass.png" width="210" alt="" class="img-responsive">
                                        </p>
                                        <p class="case-study__exp-block--disp">
                                            GuavaPass is a monthly fitness membership that lets people attend a wide range of gyms/ fitness studios in their cities, with just a single pass. 

                                        </p>
                                        <p class="case-study__exp-block--disp">
                                            Singapore based founders, Rob & Jeff realised that they were at the brink of an opportunity, when they experienced that they couldn't get a quality fitness experience, despite the city having many good fitness centres. 

                                        </p>
                                            <p class="case-study__exp-block--disp">Thus GuavaPass was born, to put an end to all less-than-amazing fitness experiences.</p>
                                        
                                    </div>
                                </div>
                            </section>
                            <section class="case-study__exp-block">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-2">
                                        <h2 class="case-study__exp-block--circle">Starting Out</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-3">
                                        <section class="case-study__exp-block--subtext">
                                            <p class="cn-mar--b-st">
                                            GuavaPass, like all marketplaces, had to first build their supply to market their product. Hence they were signing up fitness studios of all shapes and sizes as partners.
                                            </p>
                                            <p class="cn-mar--b-st">
                                                As the business model began getting popular and people developed a liking towards the concept of non-boring workouts, GuavaPass realised they had to scale fast. They were looking at expanding quickly to different countries and cities across Asia and the Middle East and signing up more members.
                                            </p>
                                            <p class="cn-mar--b-st">
                                            GuavaPass’s core monetization was the subscription fee, where users paid a fixed rate for a monthly pass. 
                                            </p>
                                        </section>
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
                                        <div class="cn-mar--b-lg">
                                            <img src="/static/website/version/images/case-study/guavapass-header.jpg" alt="" class="img-responsive" />
                                        </div>
                                            <p class="cn-mar--b-st">
                                                To manage their subscriptions, GuavaPass had built a homegrown billing solution on top of a payment gateway. The subscription module, although pretty basic, was sufficient for them to get up and running.
                                            </p>
                                            <p class="cn-mar--b-st">
                                                But soon they understood it was a mistake.
                                            </p>
                                            <p class="cn-mar--b-st">
                                                As they were scaling rapidly and adding more memberships, the need for more advanced features popped up. The basic payment gateway which couldn't support most of these features out-of-the-box meant they had to build it themselves. Especially since they were expanding to different countries, they realised the need for a billing solution which would also help them handling payments in multiple currencies.
    
                                            </p>

                                        </section>
                                    </div>
                                </div>
                            </section>

                            <section class="case-study__exp-block__row">
                                <div class="case-study__exp-block__ls case-study__exp-block__ls--quote-bg">
                                    <div class="row">
                                        <div class="col-sm-7 col-md-8">
                                            Anytime we wanted a new feature, we had to build it ourselves, which was frustrating. After a point of time, slicing and dicing plans vs subscriptions, managing coupons, and all these different features became just unwieldy. We couldn't hack it together anymore.
                                        </div>
                                        <div class="col-sm-5 col-md-4">
                                            <div class="img-circle author">
                                                <img src="/static/website/version/images/case-study/justin-guavapass.png" alt="" class="img-responsive">
                                            </div>
                                            <div class="author-description">
                                                <h3>Justin Louie</h3>
                                                <p>CTO, GuavaPass</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            

                            <section class="case-study__exp-block">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-2">
                                        <h2 class="case-study__exp-block--circle">Discovering Chargebee</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-3">
                                        <section class="case-study__exp-block--subtext">
                                            <p class="cn-mar--b-st">
                                                Their pursuit for a subscription billing solution with built-in multi currency support and a robust API led them to Chargebee.
                                            </p>
                                            
                                            <p class="cn-mar--b-st">
                                                Since a membership subscription model was the core to GuavaPass’s business, switching their billing solution with active subscriptions was like changing the engine (not the tyres) of a moving car.
                                            </p>
                                        
                                            
                                            <p class="cn-mar--b-st">With the help of Chargebee's migration team, GuavaPass imported their active subscriptions into Chargebee, without it affecting their new customers.</p>
                                        
                                            
                                            <p class="cn-mar--b-st">  
                                            Now GuavaPass manages its new and existing memberships completely with Chargebee, having let go of their homegrown system.</p>
                                        </section>
                                    </div>
                                </div>
                            </section>

                            <section class="case-study__exp-block">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-2">
                                        <h2 class="case-study__exp-block--circle">The Results:</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-3">
                                        <section class="case-study__exp-block--subtext">
                                            <p class="cn-mar--b-st">
                                                With Chargebee's array of features built to handle payments and subscriptions for global companies at scale, GuavaPass was soon able to step into newer countries faster!

                                            </p>
                                            
                                            <p class="cn-mar--b-sm">
                                                As a small and distributed team which started operations in 2015, GuavaPass has operations in 9+ countries and is looking to expand even further.

                                            </p>
                                        
                                        </section>
                                    </div>
                                </div>
                            </section>

                            <section class="case-study__exp-block__row">
                                <div class="case-study__exp-block__ls case-study__exp-block__ls--quote-bg">
                                    <div class="row">
                                        <div class="col-sm-7 col-md-8">
                                            Before expanding to a new country, all we do now is configure the relevant payment option and the currency in Chargebee. That's it! Switching to Chargebee has definitely helped us streamline our development resources. We're now able to experiment better and iterate much faster.
                                        </div>
                                        <div class="col-sm-5 col-md-4">
                                            <div class="img-circle author">
                                                <img src="/static/website/version/images/case-study/justin-guavapass.png" alt="" class="img-responsive">
                                            </div>
                                            <div class="author-description">
                                                <h3>Justin Louie</h3>
                                                <p>CTO, GuavaPass</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>

                            <section class="case-study__exp-block">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-2">
                                        <h2 class="case-study__exp-block--circle">Features they use</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-3">
                                        <div class="case-study__feat-used">
                                            <div class="case-study__feat-used-item">
                                                <div class="row">
                                                    <div class="col-md-3 col-sm-4">
                                                        <div class="case-study__feat-used-heading">
                                                            Coupons & Discounts
                                                        </div>
                                                    </div>
                                                    <div class="col-md-9 col-sm-8">
                                                        <div class="case-study__feat-used-content">
                                                            Using Chargebee’s flexible coupon system, GuavaPass was able to handle all discount related scenarios, with much ease. Dealing with coupons on managing them on gateways according to them was a “nightmare”. Now, their sales team just creates coupons themselves, quite easily by logging into Chargebee’s portal. Coupon sets, where they needed a bulk of coupons for running campaigns was present in Chargebee too.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="case-study__feat-used-item">
                                                <div class="row">
                                                    <div class="col-md-3 col-sm-4">
                                                        <div class="case-study__feat-used-heading">
                                                            Event<br> Handling & Webhooks
                                                        </div>
                                                    </div>
                                                    <div class="col-md-9 col-sm-8">
                                                        <div class="case-study__feat-used-content">
                                                            Chargebee records every single instance when any action is taken or an event happens in the subscription lifecycle. This extensive logs helps GuavaPass in effectively debugging, something which they couldn’t do with their gateway. This according to GuavaPass, was one of the biggest wins with Chargebee.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="case-study__feat-used-item">
                                                <div class="row">
                                                    <div class="col-md-3 col-sm-4">
                                                        <div class="case-study__feat-used-heading">
                                                            Flexibility<br> with trials
                                                        </div>
                                                    </div>
                                                    <div class="col-md-9 col-sm-8">
                                                        <div class="case-study__feat-used-content">
                                                            Most fitness memberships rely on their trial periods to lure customers, and so did GuavaPass. Chargebee’s trial management system helped them experiment with different trial periods & lengths, before fixing on what worked best for them.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="case-study__exp-block">  
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-3">
                                        <section class="case-study__exp-block--subtext">
                                            <p class="cn-mar--b-st">
                                            Switching to Chargebee for managing subscriptions has helped GuavaPass scale rapidly, saved time and effort on their part, thus enabling them to focus on what they do best: Making more people to achieve their fitness goals!
                                            </p>
                                            <div class="cn-mar--b-lg">
                                                <img src="/static/website/version/images/case-study/guavapass-team.jpg" alt="" class="img-responsive" />
                                                <div class="cn-caption">The GuavaPass Team</div>
                                            </div>
                                            <p class="cn-mar--b-st">
                                            Smart teams like GuavaPass use Chargebee to handle their billing needs. <a cn-mark-signup="true" href="/trial-signup/">Sign up</a> for a free trial with Chargebee and explore what it can do for your business.
                                            </p>
                                            <p class="cn-mar--b-st">
                                                P.S. If you’re based out of Asia, try GuavaPass and knock the boredom off your workouts :)
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
                                        <div class="case-study__feat-tile-heading">1000+</div>
                                        <div class="case-study__feat-tile-disp">Studio partners</div>
                                    </div>
                                    <div class="case-study__feat-tile">
                                        <div class="case-study__feat-tile-heading">11+</div>
                                        <div class="case-study__feat-tile-disp">cities</div>
                                    </div>
                                    <div class="case-study__feat-tile">
                                        <div class="case-study__feat-tile-heading">09</div>
                                        <div class="case-study__feat-tile-disp">currencies</div>
                                    </div>
                                    <div class="case-study__feat-tile">
                                        <div class="case-study__feat-tile-heading">35+</div>
                                        <div class="case-study__feat-tile-disp">employees</div>
                                    </div>
                                </div>
                                <div class="case-study__feat-list">
                                    <div class="case-study__feat-list-item">
                                        <h6 class="case-study__feat-list-heading">Highlights</h6>
                                        <div class="case-study__feat-list-item">
                                            <p>
                                            - Expanded to 9 countries within a year of using Chargebee.</p>
                                            <p>
                                            - Ability to iterate on development ideas much faster.</p>
                                            <p>
                                            - Streamline support and sales teams to handle billing ops, without dependency.
                                            </p>
                                            
                                        </div>
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
