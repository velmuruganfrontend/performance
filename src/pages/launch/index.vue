<!-- ===========================================================================
// cb-title		=	Page Level Titles (Title, Twitter, OG)
// cb-desc		=	Page Level Descriptions (Description, Twitter, OG)
// cb-image		=	Page Level Images (Twitter, OG)
// cb-style		=	Page level External Styles
​
​
** External Styles and Scripts **
If you want to add multiple styles or scripts use comma(',') to seperate url's
​
// cb-head-script	=	Page Level Head Script. Using this tag to put head level scripts
// cb-body-script	=	Page Level Body Script. Using this tag to put Scripts in end of footer or above the </body> tag
// cb-has-noindex	=	Using this tag to add noindex, nofollow meta to head. Use "True" to enable this meta.
​

** Page Styles **
// Use <style> tag to include page level styles after the Page script

​
** Header and Footer **
// app-header 		=	App header will add header to the page. Need a white header in page use :hasInvert="true" attribute
// app-footer 		=	App footer will add footer to the page.
​
If you want to remove header or footer. Remove the "app-header" or "app-footer" tag, script url and components in scripts.
============================================================================ -->
<!-- ===========================================================================
Start: Main Template
============================================================================ -->
<template>
    <div class="pad-top-head-height" onLoad="sendData();">
        <!-- ===================================================================
        Start: Meta Section
        ==================================================================== -->
        <app-meta 
        :cb-title="'Chargebee Launch Programme for Subscription Startups | $50K Free'" 
        :cb-desc="'Get your first $50K in subscription billing and invoicing for free. Chargebee’s Launch Programme will help you turn your startup into an unstoppable rocketship. We’re giving away the essentials you need to get started, all the way until you make your first $50K in revenue.'" 
        :cb-url="'/launch/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/pricingv2.css,/static/website/version/styles/launch.css,https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css,https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css'"
        :cb-head-script="''"
        :cb-body-script="'/static/website/version/scripts/fixedHeader.js,https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js'"
        :cb-has-noindex="false" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Header Section
        ==================================================================== -->
        <app-header :hasInvert="false" :hasBasicHeader="false" />
        <!-- ===================================================================
        End: Header Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Body Section
        ==================================================================== -->
        <div class="cb-body">
            <!-- ===============================================================
            Start: Hero
            ================================================================ -->
            <section class="l-row l-row--hero" style="margin-bottom: 90px;">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 col-md-offset-0 col-md-7 col-lg-6">
                            <div class="cl-hero">
                                <div class="cl-hero__header">
                                    <div class="cl-hero__title">
                                        Chargebee for Startups
                                    </div>
                                    <p class="cl-hero__desc">
                                        The only billing launchpad your startup needs to <br class="hidden-xs" />take off, grow and scale.
                                    </p>
                                </div>
                                <div class="cl-hero__actions">
                                    <div class="cl-hero__action">
                                        <a href="/trial-signup/?plan=Launch" class="cl-btn cl-btn--purple">Sign up for free</a>
                                    </div>
                                    <!-- <div class="cl-hero__action">
                                        <a href="/schedule-a-demo/?ref=heroCTA" class="cl-btn">Schedule a Demo</a>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ===============================================================
            End: Hero
            ================================================================ -->
            <!-- ===============================================================
            Start: Media 
            ================================================================ -->
            <a href="#cb-accelerator-programme" class="cl-glow hidden-xs hidden-sm" style="max-width: max-content; margin-bottom: -80px;">
                <div class="cl-glow__icon">
                    <img src="/static/website/version/images/product/common/creation.svg" alt="" class="img-responsive" style="max-width: 24px">
                </div>
                <div class="cl-glow__content">
                    <span class="cl-link">Are you part of an Accelerator? </span>
                </div>
            </a>
            <!-- ===============================================================
            End: Media
            ================================================================ -->
            <!-- ===============================================================
            Start: Main block
            ================================================================ -->
            <pricing :pageName="'Launch'" />
           
            <!-- ---------------------------------------------------------------
            Start: Card
            ---------------------------------------------------------------- -->
            <!-- <section class="l-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-5 col-md-offset-1">
                            <div class="cl-cards">
                                <a class="cl-card" href="/customers/harvestr/">
                                    <div class="cl-card__logo">
                                        <img src="/static/website/version/images/case-study/harvestr/logo.png" width="180" alt="" class="img-responsive" />
                                    </div>
                                    <div class="cl-card__desc">
                                        How Harvestr witnessed a growth of 15% on their MRR, with Chargebee
                                    </div>
                                    <div class="cl-card__action">
                                        <span class="cl-link cl-link--icon">Read Case Study</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-5">
                            <div class="cl-cards">
                                <a class="cl-card" href="/customers/jiobit/">
                                    <div class="cl-card__logo">
                                        <img src="/static/website/version/images/case-study/jiobit/jiobit-logo.png" width="140" alt="" class="img-responsive" />
                                    </div>
                                    <div class="cl-card__desc">
                                        How Jiobit scaled and monetized its IoT Subscriptions using Chargebee
                                    </div>
                                    <div class="cl-card__action">
                                        <span class="cl-link cl-link--icon">Read Customer Story</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> -->
            <!-- ---------------------------------------------------------------
            End: Card
            ---------------------------------------------------------------- -->
            <!-- ---------------------------------------------------------------
            Start: Card
            ---------------------------------------------------------------- -->
            <section class="l-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-md-11 col-sm-offset-1 col-md-offset-1">
                            <div class="cl-article" id="cb-accelerator-programme">
                                <div class="row">
                                    <div class="col-sm-12 col-md-5">
                                        <div class="cl-article__label">
                                            Accelerator Programme
                                        </div>
                                        <div class="cl-article__title">
                                            It’s Never Too Early To Prepare for Hypergrowth
                                        </div>
                                    </div>
                                </div>
                                <div class="row"> 
                                    <div class="col-sm-12 col-md-5">
                                        <p class="cl-article__desc">
                                            Our Rise Plan is packed with the features you’ll need to get from PMF to hypergrowth. Get special access to it for free, if your startup is an alumni or part of the current batch of an accelerator, incubator or VC in our network.
                                        </p>
                                    </div>
                                    <div class="col-sm-12 col-md-6">
                                        <!-- <ul class="cl-list cl-list--logos">
                                            <li class="cl-list__item" v-for="accelerator in accelerators" :key="accelerator.name">
                                                <img class="img-responsive" :src="'/static/website/version/images/accelerator/startups/'+accelerator.url" :alt="accelerator.name" :style="accelerator.styles" >
                                            </li>
                                        </ul>
                                        <ul class="cl-list cl-list--logos">
                                            <li class="cl-list__item" v-for="acceleratorsLogo in acceleratorsLogos" :key="acceleratorsLogo.name">
                                                <img class="img-responsive" :src="'/static/website/version/images/accelerator/startups/'+acceleratorsLogo.url" :alt="acceleratorsLogo.name" :style="acceleratorsLogo.styles" >
                                            </li>
                                        </ul> -->

                                        <img src="/static/website/version/images/accelerator/accelerator-programme.png" alt="" class="img-responsive">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                        
                    <!-- ===============================================================
                    Start: Media 
                    ================================================================ -->
                    <a href="/customers/upcodes/" class="cl-glow" style="margin-top: 20px; margin-bottom: 80px;">
                        <div class="cl-glow__content">
                            How YC-backed UpCodes simplified their subscription billing operations to scale exponentially, with Chargebee. <span class="cl-link cl-link--icon">Read the Case study</span>
                        </div>
                    </a>
                    <!-- ===============================================================
                    End: Media
                    ================================================================ -->
                        
                    
                    <div class="row">
                        <div class="col-sm-4 col-sm-offset-1 col-md-3">
                            <div class="cl-article__heading">
                                Eligibility <br /> Requirements
                            </div>
                            <div class="cl-article__action hidden-xs">
                                <a class="cb-btn cb-btn--sm cb-btn--secondary cb-btn--signup cb-btn--suffix" href="https://chargebee.typeform.com/to/aWy460" target="_blank">Apply now</a>
                            </div>
                        </div>
                        <div class="col-sm-7">
                            <ul class="cl-highlights">
                                <li class="cl-highlight">
                                    <div class="cl-highlight__heading">
                                        Partner Network
                                    </div>
                                    <div class="cl-highlight__desc">
                                        Part of accelerator, incubator or VC in our partner network
                                    </div>
                                </li>
                                <li class="cl-highlight">
                                    <div class="cl-highlight__heading">
                                        Funding
                                    </div>
                                    <div class="cl-highlight__desc">
                                        Raised less than $2M USD in funding
                                    </div>
                                </li>
                                <li class="cl-highlight">
                                    <div class="cl-highlight__heading">
                                        Small Team
                                    </div>
                                    <div class="cl-highlight__desc">
                                        You have 10 members or less on your team
                                    </div>
                                </li>
                                <li class="cl-highlight">
                                    <div class="cl-highlight__heading">
                                        New to Chargebee
                                    </div>
                                    <div class="cl-highlight__desc">
                                        You’re a new customer of Chargebee
                                    </div>
                                </li>
                            </ul>
                            <div class="cl-article__action visible-xs">
                                <a class="cb-btn cb-btn--sm cb-btn--secondary cb-btn--signup cb-btn--suffix" href="https://chargebee.typeform.com/to/aWy460" target="_blank">Apply now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ---------------------------------------------------------------
            End: Card
            ---------------------------------------------------------------- -->
             <!-- ===============================================================
            Start: Tab
            ================================================================ -->
            <section class="l-row" style="padding-bottom:0;">
                <div class="container">
                    <div class="row">
                        <div class="cj-tab revealOnScroll" cb-vtab>
                            <div class="cj-tab__container" cb-vtab-container>
                                <!-- ===============================================================
                                Start: Tab Right Content
                                ================================================================ -->
                                <div class="col-sm-10 col-sm-offset-1 col-md-12 col-md-offset-0 cj-tab__row">  
                                	<div class="cj-tab__select hidden-md hidden-lg">
                                        <select cb-vtab-selectbox>
                                            <option value="one">Automate from Day 1</option>
                                            <option value="two">Prepare for Scale</option>
                                            <option value="three">Experiment with Pricing</option>
                                        </select>
                                    </div>


									<div class="cj-tab__content revealOnScroll" data-animate='fadeInUp' cb-vtab-contents>

                                        <div cb-vtab-content="one" >
                                            <a href="/customers/livesession/">  
												<div class="cj-tab__item"> 
													<div class="cj-tab__left">
														<div class="cj-tab__parent cj-tab__one">
															<div class="cj-tab__header">
                                                                <p>Grew</p>
                                                                <div class="cj-tab__count">
                                                                    <img src="/static/website/version/images/home/testimonial/lemon/7x.svg" class="img-responsive" />
                                                                </div>
															</div>
															<div class="cj-tab__footer">
																<h2 class="cj-tab__headings">with Chargebee’s Launch Plan.</h2>
																<div class="read-story hidden-xs">
																	<div class="read-story__link">Read Story →</div>
																</div>
															</div>
														</div>
													</div><!--cj-tab__left--> 
													<div class="cj-tab__right">
														<div class="cj-tab__rtop">
															<p>
																“Once you start using one solution, switching to another one is really hard, overwhelming, time-consuming and frustrating — both for customers and our business. We’re lucky to have found Chargebee at the very beginning of our LiveSession journey.”
															</p>
														</div>
														<div class="cj-tab__rbottom">
															<div class="cj-tab__rbleft">
																<p class="cj-tab__name">Kamil Drazkiewicz</p>
																<p class="cj-tab__role">CEO & Founder</p>
															</div> 
															<div class="cj-tyab__rbright"> 
																<img width="160" src="/static/website/version/images/case-study/livesession/logo.svg" alt="" class="img-responsive" />     
															</div>
														</div> 
													</div><!--cj-tab__right-->
												</div>  
											</a> 
                                        </div><!--Two-->

                                        <div cb-vtab-content="two">
                                            <a href="/customers/harvestr/">  
												<div class="cj-tab__item"> 
													<div class="cj-tab__left">
														<div class="cj-tab__parent cj-tab__two">
															<div class="cj-tab__header">
                                                                <p>Grew MRR by</p>
                                                                <div class="cj-tab__count">
                                                                    <img src="/static/website/version/images/home/testimonial/lemon/harvestr-15percent.svg" class="img-responsive" />
                                                                </div>
															</div>
															<div class="cj-tab__footer">
																<h2 class="cj-tab__headings">And expanded globally from Europe.</h2>
																<div class="read-story hidden-xs">
																	<div class="read-story__link">Read Story →</div>
																</div>
															</div>
														</div>
													</div><!--cj-tab__left--> 
													<div class="cj-tab__right">
														<div class="cj-tab__rtop">
															<p>
																“One of the important criteria for us was to have a solution that would scale with us in terms of pricing and the fact that Chargebee offered a generous free tier for startups was an important factor for us as well.”
															</p>
														</div>
														<div class="cj-tab__rbottom">
															<div class="cj-tab__rbleft">
																<p class="cj-tab__name">Valentin Huang</p>
																<p class="cj-tab__role">Co-founder</p>
															</div> 
															<div class="cj-tyab__rbright"> 
																<img width="160" src="/static/website/version/images/case-study/harvestr/logo.png" alt="" class="img-responsive" />     
															</div>
														</div> 
													</div><!--cj-tab__right-->
												</div>  
											</a> 
                                        </div><!--Three-->

                                        <div cb-vtab-content="three">
                                            <a href="/customers/drawboard/">  
												<div class="cj-tab__item"> 
													<div class="cj-tab__left">
														<div class="cj-tab__parent cj-tab__three">
															<div class="cj-tab__header">
                                                                <p>Achieved</p>
                                                                <div class="cj-tab__count">
                                                                    <img src="/static/website/version/images/home/testimonial/lemon/drawboard-20x.svg" class="img-responsive" />
                                                                </div>
															</div>
															<div class="cj-tab__footer">
																<h2 class="cj-tab__headings">ROI with Chargebee.</h2>
																<div class="read-story hidden-xs">
																	<div class="read-story__link">Read Story →</div>
																</div>
															</div>
														</div>
													</div><!--cj-tab__left--> 
													<div class="cj-tab__right">
														<div class="cj-tab__rtop">
															<p>
																“Chargebee has all the concepts of metered billing, flat and tiered pricing. If we decided to change the way we want to bill or the price structure, it would be accounted for, excuse the pun.”
															</p>
														</div>
														<div class="cj-tab__rbottom">
															<div class="cj-tab__rbleft">
																<p class="cj-tab__name">Nathan Field</p>
																<p class="cj-tab__role">Marketing</p>
															</div> 
															<div class="cj-tyab__rbright"> 
																<img width="160" src="/static/website/version/images/case-study/drawboard/logo.svg" alt="" class="img-responsive" />     
															</div>
														</div> 
													</div><!--cj-tab__right-->
												</div>  
											</a> 
                                        </div><!--Four-->
                                    </div><!--Content-->
                                    <div class="cj-tab__aside" cb-vtab-aside>
                                        <span cb-vtab-item-bg></span>
                                        <div class="cj-tab__items" cb-vtab-items>
                                            <div class="cj-tab__item" cb-vtab-item="one" cb-vtab-item-selected>
                                                <span cb-vtab-txt>Automate from Day 1</span>
                                            </div>
                                            <div class="cj-tab__item" cb-vtab-item="two">
                                                <span cb-vtab-txt>Prepare for Scale</span>
                                            </div>
                                            <div class="cj-tab__item" cb-vtab-item="three">
                                                <span cb-vtab-txt>Experiment with Pricing</span>
                                            </div>
                                        </div>
                                    </div><!--aside-->   
                                </div>
                                <!-- ===============================================================
                                End: Tab Right Content
                                ================================================================ -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ===============================================================
            End: Tab
            ================================================================= -->
            <!-- ---------------------------------------------------------------
            Start: Slider
            ---------------------------------------------------------------- -->
            <section class="l-row" style="background-color: #1b0046;">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-md-5">
                            <div class="sb-panel">
                                <!-- <div class="sb-panel__header">
                                    <img src="/static/website/version/images/campaigns/saas-subscription-billing/momentum-leader.svg" alt="" class="img-responsive" style="margin-top: -2px;">
                                </div>
                                <div class="sb-panel__content">
                                    <div class="sb-panel__title">
                                        Thousands of Businesses Have Achieved Faster Growth with Chargebee
                                    </div>
                                </div>
                                <div class="sb-panel__footer">
                                    <img src="/static/website/version/images/campaigns/saas-subscription-billing/customer-logos.svg" alt="" class="img-responsive">
                                </div> -->
                                <div class="sb-media">
                                    <div class="sb-media__title">
                                        Partner with us
                                    </div>
                                    <div class="sb-media__desc">
                                        Are you an accelerator, incubator or VC interested in creating more value for your startups?
                                    </div>
                                    <div class="sb-media__action">
                                        <a href="https://chargebee.typeform.com/to/dkL9K1" target="_blank" class="cl-btn cl-btn--orange">Talk to us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-1 col-lg-5 col-lg-offset-2">
                            <div class="sb-testimonials">
                                <div class="sb-testimonials__content slider" data-sTestimonial="true">
                                    <!-- ---------------------------------------------------------------
                                    Start: Testimonial
                                    ---------------------------------------------------------------- -->
                                    <div class="sb-testimonial slide">
                                        <div class="sb-testimonial__header">
                                            <img src="/static/website/version/images/case-study/doodle/doodle-logo.png" alt="" class="img-responsive" width="130">
                                        </div>
                                        <div class="sb-testimonial__content">
                                            We already had a home-built subscription and billing system, so we knew the <span class="sb-testimonial__highlight">pain of developing and maintaining such a system well.</span> Since we are moving from a monolithic application to a microservice-architecture, building a billing service from scratch seemed like a bad idea. It’s not our core business.
                                        </div>
                                        <div class="sb-testimonial__footer">
                                            <div class="sb-testimonial__info">
                                                <div class="sb-testimonial__name">
                                                    Jack Berglund
                                                </div>
                                                <div class="sb-testimonial__desig">
                                                    Chief Product Officer
                                                </div>
                                            </div>
                                            <div class="sb-testimonial__figure">
                                                <img src="/static/website/version/images/case-study/doodle/jack-berglund.jpg" alt="" class="img-responsive">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- ---------------------------------------------------------------
                                    Start: Testimonial
                                    ---------------------------------------------------------------- -->
                                    <div class="sb-testimonial slide">
                                        <div class="sb-testimonial__header">
                                            <img src="/static/website/version/images/case-study/jiobit/jiobit-logo.png" width="120" alt="" class="img-responsive">
                                        </div>
                                        <div class="sb-testimonial__content">
                                            Chargebee’s <span class="sb-testimonial__highlight">developer kit that came along with it was just super robust in its documentation</span>, and we felt that we could build what we needed to achieve with the tools that were provided to us by Chargebee. The features in Chargebee made life so much simpler.
                                        </div>
                                        <div class="sb-testimonial__footer">
                                            <div class="sb-testimonial__info">
                                                <div class="sb-testimonial__name">
                                                    John Renaldi
                                                </div>
                                                <div class="sb-testimonial__desig">
                                                    Founder & CEO
                                                </div>
                                            </div>
                                            <div class="sb-testimonial__figure">
                                                <img src="/static/website/version/images/case-study/jiobit/john-renaldi.png" alt="" class="img-responsive">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- ---------------------------------------------------------------
                                    Start: Testimonial
                                    ---------------------------------------------------------------- -->
                                    <div class="sb-testimonial slide">
                                        <div class="sb-testimonial__header">
                                            <img src="/static/website/version/images/case-study/getaccept/ga-logo-black.png" alt="" class="img-responsive">
                                        </div>
                                        <div class="sb-testimonial__content">
                                            The (Chargebee) system is <span class="sb-testimonial__highlight">robust yet cost-effective enough to really architect a complex solution using simple methods.</span> We wouldn’t change or consider it even as we scale above the 10 million ARR mark.
                                        </div>
                                        <div class="sb-testimonial__footer">
                                            <div class="sb-testimonial__info">
                                                <div class="sb-testimonial__name">
                                                    Dailius Wilson
                                                </div>
                                                <div class="sb-testimonial__desig">
                                                    VP Sales and Growth
                                                </div>
                                            </div>
                                            <div class="sb-testimonial__figure">
                                                <img src="/static/website/version/images/case-study/getaccept/dailius-wilson.jpeg" alt="" class="img-responsive">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- ---------------------------------------------------------------
                                    End: Testimonial
                                    ---------------------------------------------------------------- -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ---------------------------------------------------------------
            End: Slider
            ---------------------------------------------------------------- -->
            <!-- ===============================================================
            Start: Main block
            ================================================================ -->
            <section class="l-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                            <!-- =============================================================================
                            Testimonial and Faq Start 
                            ============================================================================== -->
                                <div class="cpr-footer">
                                    <div class="row">
                                        <!-- =====================================================
                                        FAQ Start 
                                        ====================================================== -->
                                        <div class="cb-panels">
                                                <div class="cb-panels__title">
                                                    Frequently Asked Questions
                                                </div>
                                                <div class="cb-panels__container">
                                                    <!-- =============================================
                                                    Panel Start 
                                                    ============================================== -->
                                                    <div class="cb-panel" data-panel="true">
                                                        <div class="cb-panel__bg"></div>
                                                        <div class="cb-panel__title">
                                                            What happens when I hit $50K in revenue?
                                                        </div>
                                                        <div class="cb-panel__desc" data-panel-desc="true">
                                                            You will be auto-converted to $99/mo (with a 0.5% overage fee if your revenue exceeds $25K a month). We’ll also throw in 24*5 phone and chat support, along with access to <a href="http://www.revenuestory.io/" class="cl-link">RevenueStory</a>. Alternatively, you can choose to switch to any of <a href="/pricing/" class="cl-link">Chargebee’s Paid Plans</a>.
                                                        </div>
                                                    </div>
                                                    <!-- =============================================
                                                    Panel End 
                                                    ============================================== -->
                                                    <!-- =============================================
                                                    Panel Start 
                                                    ============================================== -->
                                                    <div class="cb-panel" data-panel="true">
                                                        <div class="cb-panel__bg"></div>
                                                        <div class="cb-panel__title">
                                                            What is counted as revenue?
                                                        </div>
                                                        <div class="cb-panel__desc" data-panel-desc="true">
                                                            The total value of invoices generated, excluding voided invoices. Only paid invoices will be considered when calculating your $50K limit.
                                                        </div>
                                                    </div>
                                                    <!-- =============================================
                                                    Panel End 
                                                    ============================================== -->
                                                    <!-- =============================================
                                                    Panel Start 
                                                    ============================================== -->
                                                    <div class="cb-panel" data-panel="true">
                                                        <div class="cb-panel__bg"></div>
                                                        <div class="cb-panel__title">
                                                            What is counted as revenue?
                                                        </div>
                                                        <div class="cb-panel__desc" data-panel-desc="true">
                                                            The total value of invoices generated, excluding void invoices. 
                                                        </div>
                                                    </div>
                                                    <!-- =============================================
                                                    Panel End 
                                                    ============================================== -->
                                                    <!-- =============================================
                                                    Panel Start 
                                                    ============================================== -->
                                                    <div class="cb-panel" data-panel="true">
                                                        <div class="cb-panel__bg"></div>
                                                        <div class="cb-panel__title">
                                                            What is an invoice?
                                                        </div>
                                                        <div class="cb-panel__desc" data-panel-desc="true">
                                                            <p>A document issued by you to your customer, with details of what they've purchased, using Chargebee, is considered as an invoice.</p>

                                                            <p> Now, a number of transactions could be associated with an invoice, but that won't affect your charges. We will bill you solely based on the number of invoices generated, and nothing else.</p>

                                                            <p>Note: You won't be charged for zero-dollar invoices, and all invoices carrying anything above $0 are billable, regardless of their paid/unpaid status.</p>
                                                        </div>
                                                    </div>
                                                    <!-- =============================================
                                                    Panel End 
                                                    ============================================== -->
                                                    <!-- =============================================
                                                    Panel Start 
                                                    ============================================== -->
                                                    <div class="cb-panel" data-panel="true">
                                                        <div class="cb-panel__bg"></div>
                                                        <div class="cb-panel__title">
                                                            How do the overage charges work?
                                                        </div>
                                                        <div class="cb-panel__desc" data-panel-desc="true">
                                                            Depending on the pricing model you choose — invoice-based or revenue-based — a certain number of invoices or an amount of processed revenue is included in the base price. On exceeding this usage, the additional usage or overage, will be charged at a flat fee (for invoice-based pricing) or a percentage (for revenue-based pricing). For instance, on the Rise plan, until your monthly processed revenue remains under $50,000, there are no overages. Once you cross $50,000/month, you'll be charged the base price plus 0.6% of the overage.
                                                        </div>
                                                    </div>
                                                    <!-- =============================================
                                                    Panel End 
                                                    ============================================== -->
                                                    <!-- =============================================
                                                    Panel Start 
                                                    ============================================== -->
                                                    <div class="cb-panel" data-panel="true">
                                                        <div class="cb-panel__bg"></div>
                                                        <div class="cb-panel__title">
                                                            Will I have to pay separately for multiple sites with Chargebee?
                                                        </div>
                                                        <div class="cb-panel__desc" data-panel-desc="true">
                                                            We do not charge extra for the additional sites you create, and the charges will only be based on the total revenue (or number of invoices) generated across all your sites.
                                                        </div>
                                                    </div>
                                                    <!-- =============================================
                                                    Panel End 
                                                    ============================================== -->
                                                    <!-- =============================================
                                                    Panel Start 
                                                    ============================================== -->
                                                    <div class="cb-panel" data-panel="true">
                                                        <div class="cb-panel__bg"></div>
                                                        <div class="cb-panel__title">
                                                            Do I get a sandbox (test environment)?
                                                        </div>
                                                        <div class="cb-panel__desc" data-panel-desc="true">
                                                            Absolutely. We provide a free TEST environment with every domain signed-up with us. You may use it to explore, develop & test before you go LIVE.
                                                        </div>
                                                    </div>
                                                    <!-- =============================================
                                                    Panel End 
                                                    ============================================== -->
                                                    <!-- =============================================
                                                    Panel Start 
                                                    ============================================== -->
                                                    <div class="cb-panel" data-panel="true">
                                                        <div class="cb-panel__bg"></div>
                                                        <div class="cb-panel__title">
                                                            Are there any cancellation charges?
                                                        </div>
                                                        <div class="cb-panel__desc" data-panel-desc="true">
                                                            No, we do not have cancellation charges. And there are no data lock-ins. You are free to cancel your account anytime.
                                                        </div>
                                                    </div>
                                                    <!-- =============================================
                                                    Panel End 
                                                    ============================================== -->
                                                    <!-- =============================================
                                                    Panel Start 
                                                    ============================================== -->
                                                    <div class="cb-panel" data-panel="true">
                                                        <div class="cb-panel__bg"></div>
                                                        <div class="cb-panel__title">
                                                            Is EU VAT included in the pricing?
                                                        </div>
                                                        <div class="cb-panel__desc" data-panel-desc="true">
                                                            The Prices as applicable are exclusive of EU VAT to EU Merchants and shall be charged additionally for B2C merchants in accordance with EU VAT Rules.
                                                        </div>
                                                    </div>
                                                    <!-- =============================================
                                                    Panel End 
                                                    ============================================== -->
                                                    <!-- =============================================
                                                    Panel Start 
                                                    ============================================== -->
                                                    <div class="cb-panel" style="padding: 0;">
                                                        <a href="/faq/" class="cb-panel__link cl-link">
                                                            Read more
                                                        </a>
                                                    </div>
                                                    <!-- =============================================
                                                    Panel End 
                                                    ============================================== -->
                                                </div>
                                        </div>
                                        <!-- =====================================================
                                        FAQ End 
                                        ====================================================== -->
                                    </div>
                                </div>
                            <!-- =============================================================================
                            Testimonial and Faq End 
                            ============================================================================== -->
                        </div>
                    </div>
                </div>
            </section>
            <!-- ===============================================================
            End: Main block
            ================================================================ -->
            
        </div>
        <!-- ===================================================================
        End: Body Section
        ==================================================================== --> 
        <!-- ===================================================================
        Start: Website Footer
        ==================================================================== -->
        <app-footer />
        <!-- ===================================================================
        End: Website Footer
        ==================================================================== -->
    </div>
  </template>
  <!-- ===========================================================================
  End: Main Template
  ============================================================================ -->
  <!-- ===========================================================================
  Start: Scripts Section
  ============================================================================ -->
<script>
   import AppMeta from '~/components/AppMeta.vue';
   import AppHeader from '~/components/AppHeader.vue';
   import AppFooter from '~/components/AppFooter.vue';
   import Pricing from '~/components/pricing.vue';
    
    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
            'app-footer': AppFooter,
            'pricing': Pricing
        },
        
        methods: {},
        
        mounted() {
            //For Slider
            $('[data-sTestimonial]').slick({
                slidesToShow: 1,
                dots: true,
                draggable: false
            });
            //For tooltip
            $('[data-toggle="tooltip"]').tooltip({
                'placement': 'bottom'
            });
            //For Panel = FAQ list click
            $('[data-panel]').click(function() {
                $(this).toggleClass('cb-panel--active').siblings().removeClass('cb-panel--active');
            });
            setTimeout(function(){
                $('.cpr-highlight').addClass('cpr-highlight--active')
            }, 750)
        }
    }
</script>
<!-- ===========================================================================
End: Script Section
============================================================================ -->
<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css">
    #ch-js-header-cloned {
        display: none;
    }
    .cpr-plan__label{
        border: 1px solid #FF9800;
        background-color: #ffdd4d;
        color: #00000a;
    }
    .cpr-plan__name{
        color: #00000a;
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->