<template>
    <div>
        <app-meta 
            :cb-title="'Customers & Testimonials - Chargebee'" 
            :cb-desc="'Our customers love us. Don\'t take our word for it, take theirs'" 
            :cb-url="'/customers/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <!-- Start Main Body Content -->
            <!-- pWrap Content begin-->
            <section class="pWrap">
                <div class="pWrap__greybox">
                <!-- Grey background banner begin -->
                <div class="p-carousel__content">
                    <h1 class="p-carousel__title">
                        Chargebee powers <br class="hidden-xs"> subscriptions for <br class="hidden-xs"> businesses of all sizes.
                    </h1>
                    <a cn-mark-signup="true" href="/trial-signup/" class="p-carousel__signup-button">
                        Sign up for free
                    </a>
                    <span class="p-carousel__signup-subtext">
                        <a href="/enterprise/" class="btn-flat btn-flat--muted" style="border-width: 0;">Talk to us!</a>
                    </span>
                </div>
                <!-- Grey background banner end -->    
                </div>
            </section>
            <!-- pWrap Content end-->

            <section class="cu-space cu-space--y-md">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-sm-push-6">
                            <a href="/customers/whiteboard/" class="cu-casestudy cu-casestudy--hero">
                                
                                <div class="cu-casestudy__header">
                                    <img src="/static/website/version/images/case-study/whiteboard/whiteboard-banner.jpg" alt="" class="img-responsive">
                                </div>
                                <!-- case study content -->
                                <div class="cu-casestudy__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy__logo">
                                        <img src="/static/website/version/images/case-study/whiteboard/whiteboard-logo-white.png" alt="" width="160" class="img-responsive">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy__disp">
                                        How Whiteboard reduced Churn by 100% using Chargebee and increased their MRR by 35% with improved billing operations
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy__actions">
                                        <div class="cu-casestudy__action">Read the story &rarr;</div>
                                    </div>
                                </div>
                                
                            </a>
                        </div>
                        <div class="col-sm-6 col-sm-pull-6">
                            <div class="cu-testimonial">
                                <div class="cu-testimonial__header">
                                    <div class="cu-testimonial__logo">
                                        <img src="/static/website/version/images/home/testimonial/cb-study.png" alt="" width="200" class="img-responsive">
                                    </div>
                                </div>
                                <div class="cu-testimonial__content">
                                    <div class="cu-testimonial__disp">
                                        ... Integration was easy and the <strong><em>customer support provided was excellent</em></strong>. This is huge considering how deficient many players in the space are when …
                                    </div>
                                    <div class="cu-testimonial__author">
                                        <!-- author image -->
                                        <div class="cu-testimonial__author-img">
                                            <img src="/static/website/version/images/home/stripe/img-tim.png" alt="" width="180" class="img-responsive">
                                        </div>
                                        <!-- author name -->
                                        <div class="cu-testimonial__author-title">
                                            Tim Bieser, Director of Finance & Operations
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <!-- Customers logos -->
            <section class="cu-space cu-space--y-lg">
                <div class="container">
                    

                    <div class="cu-logos">
                        <div class="cu-logo">
                            <img src="/static/website/version/images/customers/logos/freshworks-light-bg.png" alt="" width="140">
                        </div>
                        <div class="cu-logo">
                            <img src="/static/resources/customers/calendly.png" alt="" width="130">
                        </div>
                        <div class="cu-logo">
                            <img src="/static/website/version/images/customers/logos/linuxacademy-logo.png" alt="" width="182">
                        </div>
                        <div class="cu-logo">
                            <img src="/static/website/version/images/customers/logos/fujitsu.png" alt="" width="90">
                        </div>
                    </div>
                </div>
            </section>


            <!-- Freshdesk casestudy -->
            <section class="cu-space cu-space--y-md">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8">
                            <a href="/customers/freshdesk/" class="cu-casestudy-sec">
                                
                                <div class="cu-casestudy-sec__header">
                                    <img src="/static/website/version/images/case-study/freshdesk/fd-wall.jpg" alt="" class="img-responsive">
                                </div>
                                <!-- case study content -->
                                <div class="cu-casestudy-sec__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-sec__logo">
                                        <img src="/static/website/version/images/customers/logos/transparent/freshdesk.png" alt="" width="160" class="img-responsive">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-sec__disp">
                                        From 500 to 80,000 Customers: <br class="hidden-xs">
                                        How Freshdesk Unlocked Massive Scale
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-sec__actions">
                                        <div class="cu-casestudy-sec__action cu-animate">Read the story 
                                            <span class="cu-animate__icon">&rarr;</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </a>
                        </div>
                        <div class="col-sm-4">
                            <div class="cu-testimonial cu-space cu-space--t-st">
                                <div class="cu-testimonial__header">
                                    <div class="cu-testimonial__logo">
                                        <img src="/static/resources/customers/freedom-logo.png" alt="" width="120" class="img-responsive">
                                    </div>
                                </div>
                                <div class="cu-testimonial__content">
                                    <div class="cu-testimonial__disp">
                                        We didn’t have another choice, we never had to choose between Chargebee and another provider. Chargebee was the clear winner.
                                    </div>
                                    <div class="cu-testimonial__author">
                                        <!-- author image -->
                                        <div class="cu-testimonial__author-img">
                                            <img src="/static/website/version/images/case-study/freedom-fred.png" alt="" width="180" class="img-responsive">
                                        </div>
                                        <!-- author name -->
                                        <div class="cu-testimonial__author-title">
                                            Fred Stutzman, CEO, Freedom
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <!-- Customers logos -->
            <section class="cu-space cu-space--y-lg">
                <div class="container">
                    <div class="cu-logos">
                        <div class="cu-logo">
                            <img src="/static/resources/customers/percona.png" alt="" width="140">
                        </div>
                        <div class="cu-logo">
                            <img src="/static/resources/customers/cosmos.png" alt="" width="100">
                        </div>
                        <div class="cu-logo">
                            <img src="/static/resources/customers/freedom-logo.png" alt="">
                        </div>
                        <div class="cu-logo">
                            <img src="/static/resources/customers/crew.svg" alt="" width="100">
                        </div>
                        <div class="cu-logo">
                            <img src="/static/resources/customers/gigwell.png" alt="" width="150">
                        </div>
                    </div>
                </div>
            </section>

            <section class="cu-space cu-space--y-md" style="background: #f0f0f5; padding-top: 80px; padding-bottom: 80px;">
                <div class="container">
                    <div class="cu-grid">
                        <a href="/customers/tradeideas/" class="cu-casestudy-white">  
                            <!-- case study content -->
                            <div class="cu-casestudy-white__content">  
                                <!-- case study logo --> 
                                <div class="cu-casestudy-white__logo"> 
                                    <img src="/static/website/version/images/case-study/trade-ideas/tradeideas-logo.png" alt="" class="img-responsive" style="max-width: 150px;max-height: 80px !important;"> 
                                </div>
                                <!-- case study display -->
                                <div class="cu-casestudy-white__disp">
                                   How Trade Ideas Generated 4X Revenue for Every Dollar Spent on Chargebee
                                </div>
                                <!-- case study actions -->
                                <div class="cu-casestudy-white__actions">
                                    <div class="cu-casestudy-white__action">&rarr;</div>
                                </div>
                            </div>
                        </a>
                        <a href="/customers/webshopmanager/" class="cu-casestudy-white">  
                            <!-- case study content -->
                            <div class="cu-casestudy-white__content">  
                                <!-- case study logo -->
                                <div class="cu-casestudy-white__logo"> 
                                    <img src="/static/website/version/images/case-study/webshop/logo.png" alt="" class="img-responsive" style="max-width: 150px;max-height: 80px !important;"> 
                                </div>
                                <!-- case study display -->
                                <div class="cu-casestudy-white__disp">
                                    Challenging the Status Quo: Web Shop Manager Improved Their Productivity by 50% Using Chargebee, Compared to Zuora
                                </div>
                                <!-- case study actions -->
                                <div class="cu-casestudy-white__actions">
                                    <div class="cu-casestudy-white__action">&rarr;</div>
                                </div>
                            </div>
                        </a>
                        <a href="/customers/rented/" class="cu-casestudy-white">  
                            <!-- case study content -->
                            <div class="cu-casestudy-white__content">  
                                <!-- case study logo -->
                                <div class="cu-casestudy-white__logo"> 
                                    <img src="/static/website/version/images/case-study/rented/rented.png" alt="" class="img-responsive" style="max-width: 150px;max-height: 80px !important;"> 
                                </div>
                                <!-- case study display -->
                                <div class="cu-casestudy-white__disp">
                                  How Rented Uses Chargebee to Reduce Churn, Forecast Better, and Drive Customer Loyalty
                                </div>
                                <!-- case study actions -->
                                <div class="cu-casestudy-white__actions">
                                    <div class="cu-casestudy-white__action">&rarr;</div>
                                </div>
                            </div>
                        </a>
                        <a href="/customers/trustedtechteam/" class="cu-casestudy-white"> 
                            <!-- case study content -->
                            <div class="cu-casestudy-white__content">  
                                <!-- case study logo -->
                                <div class="cu-casestudy-white__logo"> 
                                    <img src="/static/website/version/images/case-study/trustedtechteam/logo.png" alt="" class="img-responsive" style="max-width: 150px;max-height: 80px !important;"> 
                                </div>
                                <!-- case study display -->
                                <div class="cu-casestudy-white__disp">
                                   Doubling Revenue Projections, Maintaining a Churn Rate of &#x3c; 1%: Trusted Tech Team’s Winning Strategy
                                </div>
                                <!-- case study actions -->
                                <div class="cu-casestudy-white__actions">
                                    <div class="cu-casestudy-white__action">&rarr;</div>
                                </div>
                            </div>
                        </a>
                        <a href="/customers/superfoods/" class="cu-casestudy-white"> 
                            <!-- case study content -->
                            <div class="cu-casestudy-white__content">  
                                <!-- case study logo -->
                                <div class="cu-casestudy-white__logo"> 
                                    <img src="/static/website/version/images/case-study/superfoods/logo.svg" alt="" class="img-responsive" style="max-width: 150px;max-height: 50px !important;"> 
                                </div>
                                <!-- case study display -->
                                <div class="cu-casestudy-white__disp">
                                    4x Growth in Revenue in 12 Months - the Incredible Growth Story of Superfoods Company
                                </div>
                                <!-- case study actions -->
                                <div class="cu-casestudy-white__actions">
                                    <div class="cu-casestudy-white__action">&rarr;</div>
                                </div>
                            </div>
                        </a>
                        <a href="/customers/yousign/" class="cu-casestudy-white"> 
                            <!-- case study content -->
                            <div class="cu-casestudy-white__content">  
                                <!-- case study logo -->
                                <div class="cu-casestudy-white__logo"> 
                                    <img src="/static/website/version/images/case-study/yousign/logo.png" alt="" class="img-responsive" style="max-width: 120px;"> 
                                </div>
                                <!-- case study display -->
                                <div class="cu-casestudy-white__disp">
                                    How Europe-based Yousign Handled Hyper-growth During COVID, with Chargebee
                                </div>
                                <!-- case study actions -->
                                <div class="cu-casestudy-white__actions">
                                    <div class="cu-casestudy-white__action">&rarr;</div>
                                </div>
                            </div>
                        </a>


                        <a href="/customers/makespace/" class="cu-casestudy-white"> 
                            <!-- case study content -->
                            <div class="cu-casestudy-white__content">  
                                <!-- case study logo -->
                                <div class="cu-casestudy-white__logo"> 
                                    <img src="/static/website/version/images/case-study/makespace/logo.png" alt="" class="img-responsive" style="max-width: 120px;"> 
                                </div>
                                <!-- case study display -->
                                <div class="cu-casestudy-white__disp">
                                    Scaling from 4 to 31 Different Markets in a Year:<br> The MakeSpace Story
                                </div>
                                <!-- case study actions -->
                                <div class="cu-casestudy-white__actions">
                                    <div class="cu-casestudy-white__action">&rarr;</div>
                                </div>
                            </div>
                        </a>

                        <a href="/customers/instaply/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo"> 
                                        <img src="/static/website/version/images/case-study/instaply/instaply-logo.png" alt="" class="img-responsive" style="max-width: 120px">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                            How Process Automation Enabled Instaply to Scale and Set Foot in Europe
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                        </a>

                         <a href="/customers/coorpacademy/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo"> 
                                        <img src="/static/website/version/images/case-study/coorpacademy/logo.svg" alt="" class="img-responsive" style="max-width: 150px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How the Sales Team at Coorpacademy Spent 50% Less Time on Non-selling Tasks after Using Chargebee + Salesforce
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                        </a>
                         <a href="/customers/acloudguru/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/cloudguru/logo.svg" alt="" class="img-responsive" style="max-width: 140px;webkit-filter: brightness(1) invert(1);filter: brightness(1) invert(1);">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Australia-based A <span>Cloud Guru Scaled their Subscription Model</span>, with Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>

                            <a href="/customers/sisu/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/sisu/logo.png" alt="" class="img-responsive" style="max-width: 100px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Sisu Built An <span>Efficient Sales Engine</span>, with Chargebee and Salesforce
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/upcodes/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/upcodes/logo.png" alt="" class="img-responsive" style="max-width: 150px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How YC-backed UpCodes simplified their subscription billing operations to scale exponentially, with Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>

                            <a href="/customers/userlane/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/userlane/userlane.png" alt="" class="img-responsive" style="max-width: 200px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Userlane closed their month-end financials in <span>80% less time</span>, with Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/risevision/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/risevision/logo.png" alt="" class="img-responsive" style="max-width: 150px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Rise Vision <span>saved 50%</span> time reconciling numbers with their monthly financials, with RevenueStory
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/livesession/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/livesession/logo.svg" alt="" class="img-responsive" style="max-width: 150px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How LiveSession <span>grew 7x over 6 months</span>, using Chargebee's Freemium offering
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/circleloop/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/circleloop/logo.svg" alt="" class="img-responsive" style="max-width: 130px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How CircleLoop <span>Automated their Revenue Operations</span>, with Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/doctify/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/doctify/logo.png" alt="" class="img-responsive" style="max-width: 90px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Doctify streamlined their <span>Revenue Operations to increase efficiency</span>, with Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/drawboard/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/drawboard/logo.svg" alt="" class="img-responsive" style="max-width: 150px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Australia-based Drawboard expanded globally to new markets using Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/harvestr/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/harvestr/logo.png" alt="" class="img-responsive" style="max-width: 130px">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Harvestr witnessed a growth of <span>15% on their MRR</span>, with Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/animalz/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/animalz/animalz.png" alt="" class="img-responsive" style="max-width: 100px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Animalz streamlined their Account Receivables at a cost of <span>less than 1% of their annual recurring revenue</span>, using Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/screencastify/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/screencastify/logo.svg" alt="" class="img-responsive" style="max-width: 200px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Screencastify scaled to support millions of users and augmented their revenue on autopilot, using Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/hqlabs/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/hqlabs/logo.png" alt="" class="img-responsive" style="max-width: 60px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How HQLabs built a Zapier Automation for Efficient Affiliate Management, using Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/screencloud/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/screencloud/screen-cloud-logo.png" alt="" class="img-responsive" style="max-width: 170px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How ScreenCloud course-corrected their churn with critical SaaS Quick Ratio, using RevenueStory
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/bitgym/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/bitgym/bitgym.png" alt="" class="img-responsive" width="180">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How BitGym Grew, with an <span>80% Boost in Productivity</span>, using Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/voverc/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/voverc/voverc-logo.png" alt="" class="img-responsive" style="max-widht: 130px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Italy-based Voverc Conquered Compliance with Mandatory B2B e-invoicing, using Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/axsemantics/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/ax-semantics/ax-semantics-logo.png" alt="" class="img-responsive" width="180" style="max-width: 170px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How AX Semantics improved cross-functional performance by tracking Customer LTV on RevenueStory
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/jiobit/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/jiobit/jiobit-logo.png" alt="" class="img-responsive" style="max-width: 110px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Jiobit monetized its IoT Subscriptions using Chargebee (Video Case Study)
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/getaccept/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/getaccept/ga-logo-black.png" alt="" class="img-responsive" width="180" style="max-width: 150px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How GetAccept grew their revenue <span>4x in 12 months</span>
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>

                            <a href="/customers/trail/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/trail/trail-logo-black.svg" alt="" class="img-responsive" style="max-height: 32px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Chargebee helped Trail Reduce Time Spent on <span>Subscription Management by 80%</span>
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/proxyclick/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/proxyclick/logo.svg" alt="" class="img-responsive" style="max-height: 60px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Proxyclick Expanded with Optimized Subscription and Revenue Operations
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/riddle/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/riddle/logo.png" alt="" class="img-responsive" style="max-height: 60px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Riddle improved their <span>Subscription Efficiency & Renewals by 63%</span>, using Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>

                            <a href="/customers/fishburners/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/customers/logos/fishburners.png" alt="" class="img-responsive" style="max-height: 60px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Fishburners <span>saves 105 hours/month</span> of manual accounting work with Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/whiteboard/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/whiteboard/whiteboard-logo.png" alt="" class="img-responsive" style="max-height: 60px; max-width: 200px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Whiteboard <span>reduced Churn by 100%</span> using Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/codacy/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/codacy-logo-black.svg" alt="" class="img-responsive">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Codacy helps more businesses iterate faster, with Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/freedom/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/resources/customers/freedom-logo.png" alt="" class="img-responsive">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Freedom delivers a stellar billing experience with Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/vinyl-me-please/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/customers/logos/vinylmeplease-new.png" alt="" class="img-responsive">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Vinyl Me, Please is making music purists happy, with Chargebee.
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>

                            <a href="/customers/sharetribe/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/customers/logos/sharetribe.svg" alt="" class="img-responsive">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Sharetribe helps more businesses iterate faster, with Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/livestorm/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/customers/logos/livestorm.svg" alt="" class="img-responsive">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Chargebee Cut Down Livestorm’s Support Time by Half.
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/hoxtonmix/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/hoxtonmix-logo.png" alt="" class="img-responsive">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Hoxton Mix <span>saves 60 developer hours</span> per month with Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/zenchef/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/zenchef/logo.png" alt="" class="img-responsive" style="max-width: 120px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Zenchef moved out from Zuora and into Chargebee to scale its business flexibly
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/doodle/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <svg id="d_logo" viewBox="0 0 80 18" height="24">
                                            <g fill="#3798D4">
                                                <path d="M25.7530488,11.3297038 C25.7530488,9.53252033 24.9692218,7.94279907 23.0574913,7.94279907 C21.1457607,7.94279907 20.362079,9.53252033 20.362079,11.3297038 C20.362079,13.1035134 21.1457607,14.6932346 23.0574913,14.6932346 C24.9692218,14.6932346 25.7530488,13.1035134 25.7530488,11.3297038 M16.0769454,11.3297038 C16.0769454,7.34393148 19.0950929,5.04036005 23.0574913,5.04036005 C27.0198897,5.04036005 30.0380372,7.34393148 30.0380372,11.3297038 C30.0380372,15.2921022 27.0198897,17.5956736 23.0574913,17.5956736 C19.0950929,17.5956736 16.0769454,15.2921022 16.0769454,11.3297038"></path>
                                                <path d="M40.3085075,11.3297038 C40.3085075,9.53252033 39.5252613,7.94279907 37.6135308,7.94279907 C35.7012195,7.94279907 34.9181185,9.53252033 34.9181185,11.3297038 C34.9181185,13.1035134 35.7012195,14.6932346 37.6135308,14.6932346 C39.5252613,14.6932346 40.3085075,13.1035134 40.3085075,11.3297038 M30.6329849,11.3297038 C30.6329849,7.34393148 33.6511324,5.04036005 37.6135308,5.04036005 C41.5759292,5.04036005 44.5934959,7.34393148 44.5934959,11.3297038 C44.5934959,15.2921022 41.5759292,17.5956736 37.6135308,17.5956736 C33.6511324,17.5956736 30.6329849,15.2921022 30.6329849,11.3297038"></path>
                                                <path d="M4.28498839,4.01248548 L5.94323461,4.01248548 C9.07650987,4.01248548 10.9429443,5.67073171 10.9429443,8.87325784 C10.9429443,12.0756388 9.07650987,13.733885 5.94323461,13.733885 L4.28498839,13.733885 L4.28498839,4.01248548 Z M15.3658537,8.80400697 C15.3658537,2.58391405 11.4493322,0.833333333 5.8503194,0.833333333 L0,0.833333333 L0,16.9136179 L5.8503194,16.9136179 C11.4493322,16.9136179 15.3658537,15.1630372 15.3658537,8.94236353 C15.3658537,8.91855401 15.3646922,8.89648664 15.3646922,8.87325784 C15.3646922,8.84988386 15.3658537,8.82781649 15.3658537,8.80400697 L15.3658537,8.80400697 Z"></path>
                                                <polygon points="60.6546167 0.0407955865 64.8012485 0.0407955865 64.8012485 17.3195412 60.6546167 17.3195412"></polygon>
                                                <path d="M52.1689895,14.6932346 C50.257259,14.6932346 49.4734321,13.1035134 49.4734321,11.3297038 C49.4734321,9.53252033 50.257259,7.94279907 52.1689895,7.94279907 C54.0807201,7.94279907 54.8638211,9.53252033 54.8638211,11.3297038 C54.8638211,13.1035134 54.0807201,14.6932346 52.1689895,14.6932346 L52.1689895,14.6932346 Z M55.0027584,0.0407955865 L55.0027584,5.48780488 C54.143583,5.19352497 53.1880081,5.04036005 52.1689895,5.04036005 C48.2065912,5.04036005 45.1884437,7.34393148 45.1884437,11.3297038 C45.1884437,15.2921022 48.2065912,17.5956736 52.1689895,17.5956736 C53.1880081,17.5956736 54.2690186,17.1646341 55.0027584,16.702381 L55.0027584,17.3193961 L59.1495354,17.3193961 L59.1495354,0.0407955865 L55.0027584,0.0407955865 Z"></path>
                                                <path d="M70.5569106,10.1755226 C70.8421893,8.90461672 71.6434379,7.94279907 73.1293554,7.94279907 C74.614547,7.94279907 75.4171022,8.90461672 75.7018002,10.1755226 L70.5569106,10.1755226 Z M74.9406214,5.31721835 C74.3292683,5.13908246 73.6396632,5.04036005 72.8616434,5.04036005 C72.8321719,5.04036005 72.8027003,5.04210221 72.7726481,5.04210221 C72.7408537,5.04210221 72.70964,5.04036005 72.67741,5.04036005 C68.7154472,5.04036005 65.6972997,7.34393148 65.6972997,11.3297038 C65.6972997,15.2921022 68.7154472,17.5956736 72.67741,17.5956736 C72.8021196,17.5956736 72.9252323,17.5939315 73.0470383,17.5894309 C73.1689895,17.5939315 73.2921022,17.5956736 73.4152149,17.5956736 C74.9587689,17.5956736 76.47982,17.3659988 77.8159117,16.8356562 L77.8159117,13.9099884 C76.5717189,14.5781069 75.2815041,14.8315912 74.152439,14.8315912 C73.6215157,14.8315912 73.1445993,14.7855691 72.7238676,14.6909117 C71.5345528,14.422619 70.7973287,13.7517422 70.6271777,12.527439 L79.558072,12.527439 C79.5869628,12.357288 79.6107724,12.1848142 79.6279036,12.0078397 C79.6476481,11.787892 79.6585366,11.5615563 79.6585366,11.3297038 C79.6585366,8.14706736 77.7337398,6.03847271 74.9406214,5.31721835 L74.9406214,5.31721835 Z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Doodle scaled globally after moving from a monolithic architecture to subscriptions model, with Chargebee
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="/customers/advocately/" class="cu-casestudy-white">
                                <!-- case study content -->
                                <div class="cu-casestudy-white__content"> 
                                    <!-- case study logo -->
                                    <div class="cu-casestudy-white__logo">
                                        <img src="/static/website/version/images/case-study/advocately.svg" alt="" class="img-responsive" style="max-width: 120px;">
                                    </div>
                                    <!-- case study display -->
                                    <div class="cu-casestudy-white__disp">
                                        How Advocately helps more companies find happy customers, with Chargebee.
                                    </div>
                                    <!-- case study actions -->
                                    <div class="cu-casestudy-white__actions">
                                        <div class="cu-casestudy-white__action">&rarr;</div>
                                    </div>
                                </div>
                            </a>                    
                    </div> 
                </div>
            </section>

            <!-- End Main Body Content -->
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
        }
	}
</script>
