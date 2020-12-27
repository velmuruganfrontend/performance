<!-- ===========================================================================
// cb-title     =   Page Level Titles (Title, Twitter, OG)
// cb-desc      =   Page Level Descriptions (Description, Twitter, OG)
// cb-image     =   Page Level Images (Twitter, OG)
// cb-style     =   Page level External Styles
​
​
** External Styles and Scripts **
If you want to add multiple styles or scripts use comma(',') to seperate url's
​
// cb-head-script   =   Page Level Head Script. Using this tag to put head level scripts
// cb-body-script   =   Page Level Body Script. Using this tag to put Scripts in end of footer or above the </body> tag
// cb-has-noindex   =   Using this tag to add noindex, nofollow meta to head. Use "True" to enable this meta.
​

** Page Styles **
// Use <style> tag to include page level styles after the Page script

​
** Header and Footer **
// app-header       =   App header will add header to the page. 
//                  Need a white header in page use :hasInvert="true" attribute
//                  Need a basic header(without menu's) in page use :hasBasicHeader="true" attribute
// app-footer       =   App footer will add footer to the page.
​
If you want to remove header or footer. Remove the "app-header" or "app-footer" tag, script url and components in scripts.
============================================================================ -->
<!-- ===========================================================================
Start: Main Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Meta Section
        ==================================================================== -->
        <app-meta 
        :cb-title="'Doodle Subscriptions Hit Global Scale with Chargebee'" 
        :cb-desc="'Swiss-based Doodle, that simplifies the process of scheduling events, meetings & appointments moved from a monolithic app to subscriptions, with Chargebee'" 
        :cb-url="'/customers/doodle/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
        :cb-head-script="''"
        :cb-body-script="''"
        :cb-has-noindex="false"
        :disable-bootstrap-css="false"
        :disable-header-footer-css="false" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Header Section
        ==================================================================== -->
        <app-header :hasInvert="true" :hasBasicHeader="false" :hasBackToCareers="false" />
        <!-- ===================================================================
        End: Header Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Body Section
        ==================================================================== -->
        <div class="cb-body">
            <section class="case-study">
                <section class="case-study__banner cn-mar--b-md case-study__banner--shadow" style="background-image:url(/static/website/version/images/case-study/doodle/bg1.jpg); background-position: bottom center;">
                    <div class="container" style="position: static;">
                        <section class="case-study__title-logo" style="max-width: 800px;">
                            <h1 class="case-study__banner-title ff-freightDisPro make-italic" style="text-shadow: 0 3px 4px rgba(0, 0, 0, 0.36);">
                                How Doodle scaled globally after moving from a monolithic architecture to subscriptions model, with Chargebee
                            </h1>
                        </section>
                    </div>
                </section>
                <section class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-md-offset-1 col-md-push-7 col-lg-push-8">
                            <section class="case-study__exp-block visible-xs visible-sm">
                                <div class="row">
                                    <div class="col-md-11">
                                        <p class="case-study__exp-block--brand">
                                            <svg id="d_logo" viewBox="0 0 80 18" width="220">
                                                <g fill="#3798D4">
                                                    <path d="M25.7530488,11.3297038 C25.7530488,9.53252033 24.9692218,7.94279907 23.0574913,7.94279907 C21.1457607,7.94279907 20.362079,9.53252033 20.362079,11.3297038 C20.362079,13.1035134 21.1457607,14.6932346 23.0574913,14.6932346 C24.9692218,14.6932346 25.7530488,13.1035134 25.7530488,11.3297038 M16.0769454,11.3297038 C16.0769454,7.34393148 19.0950929,5.04036005 23.0574913,5.04036005 C27.0198897,5.04036005 30.0380372,7.34393148 30.0380372,11.3297038 C30.0380372,15.2921022 27.0198897,17.5956736 23.0574913,17.5956736 C19.0950929,17.5956736 16.0769454,15.2921022 16.0769454,11.3297038"></path>
                                                    <path d="M40.3085075,11.3297038 C40.3085075,9.53252033 39.5252613,7.94279907 37.6135308,7.94279907 C35.7012195,7.94279907 34.9181185,9.53252033 34.9181185,11.3297038 C34.9181185,13.1035134 35.7012195,14.6932346 37.6135308,14.6932346 C39.5252613,14.6932346 40.3085075,13.1035134 40.3085075,11.3297038 M30.6329849,11.3297038 C30.6329849,7.34393148 33.6511324,5.04036005 37.6135308,5.04036005 C41.5759292,5.04036005 44.5934959,7.34393148 44.5934959,11.3297038 C44.5934959,15.2921022 41.5759292,17.5956736 37.6135308,17.5956736 C33.6511324,17.5956736 30.6329849,15.2921022 30.6329849,11.3297038"></path>
                                                    <path d="M4.28498839,4.01248548 L5.94323461,4.01248548 C9.07650987,4.01248548 10.9429443,5.67073171 10.9429443,8.87325784 C10.9429443,12.0756388 9.07650987,13.733885 5.94323461,13.733885 L4.28498839,13.733885 L4.28498839,4.01248548 Z M15.3658537,8.80400697 C15.3658537,2.58391405 11.4493322,0.833333333 5.8503194,0.833333333 L0,0.833333333 L0,16.9136179 L5.8503194,16.9136179 C11.4493322,16.9136179 15.3658537,15.1630372 15.3658537,8.94236353 C15.3658537,8.91855401 15.3646922,8.89648664 15.3646922,8.87325784 C15.3646922,8.84988386 15.3658537,8.82781649 15.3658537,8.80400697 L15.3658537,8.80400697 Z"></path>
                                                    <polygon points="60.6546167 0.0407955865 64.8012485 0.0407955865 64.8012485 17.3195412 60.6546167 17.3195412"></polygon>
                                                    <path d="M52.1689895,14.6932346 C50.257259,14.6932346 49.4734321,13.1035134 49.4734321,11.3297038 C49.4734321,9.53252033 50.257259,7.94279907 52.1689895,7.94279907 C54.0807201,7.94279907 54.8638211,9.53252033 54.8638211,11.3297038 C54.8638211,13.1035134 54.0807201,14.6932346 52.1689895,14.6932346 L52.1689895,14.6932346 Z M55.0027584,0.0407955865 L55.0027584,5.48780488 C54.143583,5.19352497 53.1880081,5.04036005 52.1689895,5.04036005 C48.2065912,5.04036005 45.1884437,7.34393148 45.1884437,11.3297038 C45.1884437,15.2921022 48.2065912,17.5956736 52.1689895,17.5956736 C53.1880081,17.5956736 54.2690186,17.1646341 55.0027584,16.702381 L55.0027584,17.3193961 L59.1495354,17.3193961 L59.1495354,0.0407955865 L55.0027584,0.0407955865 Z"></path>
                                                    <path d="M70.5569106,10.1755226 C70.8421893,8.90461672 71.6434379,7.94279907 73.1293554,7.94279907 C74.614547,7.94279907 75.4171022,8.90461672 75.7018002,10.1755226 L70.5569106,10.1755226 Z M74.9406214,5.31721835 C74.3292683,5.13908246 73.6396632,5.04036005 72.8616434,5.04036005 C72.8321719,5.04036005 72.8027003,5.04210221 72.7726481,5.04210221 C72.7408537,5.04210221 72.70964,5.04036005 72.67741,5.04036005 C68.7154472,5.04036005 65.6972997,7.34393148 65.6972997,11.3297038 C65.6972997,15.2921022 68.7154472,17.5956736 72.67741,17.5956736 C72.8021196,17.5956736 72.9252323,17.5939315 73.0470383,17.5894309 C73.1689895,17.5939315 73.2921022,17.5956736 73.4152149,17.5956736 C74.9587689,17.5956736 76.47982,17.3659988 77.8159117,16.8356562 L77.8159117,13.9099884 C76.5717189,14.5781069 75.2815041,14.8315912 74.152439,14.8315912 C73.6215157,14.8315912 73.1445993,14.7855691 72.7238676,14.6909117 C71.5345528,14.422619 70.7973287,13.7517422 70.6271777,12.527439 L79.558072,12.527439 C79.5869628,12.357288 79.6107724,12.1848142 79.6279036,12.0078397 C79.6476481,11.787892 79.6585366,11.5615563 79.6585366,11.3297038 C79.6585366,8.14706736 77.7337398,6.03847271 74.9406214,5.31721835 L74.9406214,5.31721835 Z"></path>
                                                </g>
                                            </svg>
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <div class="case-study__feat">
                                <div class="case-study__feat-tiles">
                                    <div class="case-study__feat-tile">
                                        <div class="case-study__feat-tile-heading">39K</div>
                                        <div class="case-study__feat-tile-disp">Customers</div>
                                    </div>
                                    <div class="case-study__feat-tile">
                                        <div class="case-study__feat-tile-heading">75K+</div>
                                        <div class="case-study__feat-tile-disp">Subscriptions</div>
                                    </div>
                                    
                                </div>
                                <div class="case-study__feat-list">
                                    <div class="case-study__feat-list-title">Summary</div>
                                    <ul class="case-study__list">
                                        <li>
                                            Swiss-based Doodle simplifies the process of scheduling events, meetings, appointments
                                        </li>
                                        <li>
                                            Doodle moved from a monolithic app to microservices. Subscription business model was at the heart of this move
                                        </li>
                                        <li>
                                            Used a home-built subscription and billing system.
                                        </li>
                                        <li>
                                            Challenges included heavy investment in development time, for every new use case
                                        </li>
                                        <li>
                                            Doodle moved to Chargebee to automate most of its subscription needs. Evaluation criteria included Stripe support, pricing, full API access
                                        </li>
                                        <li>
                                            Successfully migrated close to 39K customers and 75K+ subscriptions
                                        </li>
                                        <li>
                                            Achieved global scale with support for multilingual emails
                                        </li>
                                        <li>
                                            Scaled with tiered pricing model and internationalization support
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-7 col-md-pull-5 col-lg-pull-4">
                            <section class="case-study__exp-block hidden-xs hidden-sm">
                                <div class="row">
                                    <div class="col-md-11">
                                        <p class="case-study__exp-block--brand">
                                            <svg id="d_logo" viewBox="0 0 80 18" width="220">
                                                <g fill="#3798D4">
                                                    <path d="M25.7530488,11.3297038 C25.7530488,9.53252033 24.9692218,7.94279907 23.0574913,7.94279907 C21.1457607,7.94279907 20.362079,9.53252033 20.362079,11.3297038 C20.362079,13.1035134 21.1457607,14.6932346 23.0574913,14.6932346 C24.9692218,14.6932346 25.7530488,13.1035134 25.7530488,11.3297038 M16.0769454,11.3297038 C16.0769454,7.34393148 19.0950929,5.04036005 23.0574913,5.04036005 C27.0198897,5.04036005 30.0380372,7.34393148 30.0380372,11.3297038 C30.0380372,15.2921022 27.0198897,17.5956736 23.0574913,17.5956736 C19.0950929,17.5956736 16.0769454,15.2921022 16.0769454,11.3297038"></path>
                                                    <path d="M40.3085075,11.3297038 C40.3085075,9.53252033 39.5252613,7.94279907 37.6135308,7.94279907 C35.7012195,7.94279907 34.9181185,9.53252033 34.9181185,11.3297038 C34.9181185,13.1035134 35.7012195,14.6932346 37.6135308,14.6932346 C39.5252613,14.6932346 40.3085075,13.1035134 40.3085075,11.3297038 M30.6329849,11.3297038 C30.6329849,7.34393148 33.6511324,5.04036005 37.6135308,5.04036005 C41.5759292,5.04036005 44.5934959,7.34393148 44.5934959,11.3297038 C44.5934959,15.2921022 41.5759292,17.5956736 37.6135308,17.5956736 C33.6511324,17.5956736 30.6329849,15.2921022 30.6329849,11.3297038"></path>
                                                    <path d="M4.28498839,4.01248548 L5.94323461,4.01248548 C9.07650987,4.01248548 10.9429443,5.67073171 10.9429443,8.87325784 C10.9429443,12.0756388 9.07650987,13.733885 5.94323461,13.733885 L4.28498839,13.733885 L4.28498839,4.01248548 Z M15.3658537,8.80400697 C15.3658537,2.58391405 11.4493322,0.833333333 5.8503194,0.833333333 L0,0.833333333 L0,16.9136179 L5.8503194,16.9136179 C11.4493322,16.9136179 15.3658537,15.1630372 15.3658537,8.94236353 C15.3658537,8.91855401 15.3646922,8.89648664 15.3646922,8.87325784 C15.3646922,8.84988386 15.3658537,8.82781649 15.3658537,8.80400697 L15.3658537,8.80400697 Z"></path>
                                                    <polygon points="60.6546167 0.0407955865 64.8012485 0.0407955865 64.8012485 17.3195412 60.6546167 17.3195412"></polygon>
                                                    <path d="M52.1689895,14.6932346 C50.257259,14.6932346 49.4734321,13.1035134 49.4734321,11.3297038 C49.4734321,9.53252033 50.257259,7.94279907 52.1689895,7.94279907 C54.0807201,7.94279907 54.8638211,9.53252033 54.8638211,11.3297038 C54.8638211,13.1035134 54.0807201,14.6932346 52.1689895,14.6932346 L52.1689895,14.6932346 Z M55.0027584,0.0407955865 L55.0027584,5.48780488 C54.143583,5.19352497 53.1880081,5.04036005 52.1689895,5.04036005 C48.2065912,5.04036005 45.1884437,7.34393148 45.1884437,11.3297038 C45.1884437,15.2921022 48.2065912,17.5956736 52.1689895,17.5956736 C53.1880081,17.5956736 54.2690186,17.1646341 55.0027584,16.702381 L55.0027584,17.3193961 L59.1495354,17.3193961 L59.1495354,0.0407955865 L55.0027584,0.0407955865 Z"></path>
                                                    <path d="M70.5569106,10.1755226 C70.8421893,8.90461672 71.6434379,7.94279907 73.1293554,7.94279907 C74.614547,7.94279907 75.4171022,8.90461672 75.7018002,10.1755226 L70.5569106,10.1755226 Z M74.9406214,5.31721835 C74.3292683,5.13908246 73.6396632,5.04036005 72.8616434,5.04036005 C72.8321719,5.04036005 72.8027003,5.04210221 72.7726481,5.04210221 C72.7408537,5.04210221 72.70964,5.04036005 72.67741,5.04036005 C68.7154472,5.04036005 65.6972997,7.34393148 65.6972997,11.3297038 C65.6972997,15.2921022 68.7154472,17.5956736 72.67741,17.5956736 C72.8021196,17.5956736 72.9252323,17.5939315 73.0470383,17.5894309 C73.1689895,17.5939315 73.2921022,17.5956736 73.4152149,17.5956736 C74.9587689,17.5956736 76.47982,17.3659988 77.8159117,16.8356562 L77.8159117,13.9099884 C76.5717189,14.5781069 75.2815041,14.8315912 74.152439,14.8315912 C73.6215157,14.8315912 73.1445993,14.7855691 72.7238676,14.6909117 C71.5345528,14.422619 70.7973287,13.7517422 70.6271777,12.527439 L79.558072,12.527439 C79.5869628,12.357288 79.6107724,12.1848142 79.6279036,12.0078397 C79.6476481,11.787892 79.6585366,11.5615563 79.6585366,11.3297038 C79.6585366,8.14706736 77.7337398,6.03847271 74.9406214,5.31721835 L74.9406214,5.31721835 Z"></path>
                                                </g>
                                            </svg>
                                        </p>
                                    </div>
                                </div>
                            </section>
    
                            <section class="case-study__exp-block">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-2">
                                        <h2 class="case-study__exp-block--circle" style="line-height: 1.5">World of Schedules and Calendars</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-3">
                                        <section class="case-study__exp-block--subtext">
                                            <p class="cn-mar--b-st">
                                                Ask any company or team, what the biggest source of their time drain is. The resounding answer, apart from countless coffee breaks, would be meetings and managing schedules. The constant exchanging of emails back and forth, updating of calendars, making sure of everyone’s availability, scheduling, rescheduling… And then a no-show. Even the thought of it can be fatiguing. 
                                            </p>
                                            <p class="cn-mar--b-st">
                                                <img src="/static/website/version/images/case-study/doodle/bg2.jpg" alt="" class="img-responsive">
                                            </p>
                                            <p class="cn-mar--b-st">
                                                But meetings are here to stay. And solutions have been built to deal with this workplace reality. The advent of scheduling software has helped businesses free up their time to focus on the aspects that directly enable their growth.
                                            </p>
                                            <p class="cn-mar--b-st">
                                                Doodle was launched to change the face of meetings and productivity. And change, they did. With 30 million monthly active users as of today, Doodle reduces the billions of wasted minutes that are otherwise spent on scheduling, rescheduling and emailing back and forth.
                                            </p>
                                        </section>
                                    </div>
                                </div>
                            </section>
    
                            <section class="case-study__exp-block__row"></section>
    
                            <section class="case-study__exp-block__row" style="border-width: 0">
                                <div class="case-study__exp-block__ls case-study__exp-block__ls--quote-bg">
                                    <div class="row">
                                        <div class="col-md-7 col-lg-8">
                                            We know that Doodle is used for many things - from sign-ups for events and meeting friends, to business meetings and salespeople scheduling calls. We realized that there’s a use-case that we touched, but we haven't solved completely yet: the busy professional. They have multiple meetings in offices every week and need to find a suitable time for groups within and outside their organisation. So we set out to win this market.
                                        </div>
                                        <div class="col-md-5 col-lg-4">
                                            <div class="img-circle author">
                                                <img src="/static/website/version/images/case-study/doodle/cliff-des-ligneris.png" alt="Julien Balmont" class="img-responsive">
                                            </div>
                                            <div class="author-description">
                                                <h3>Cliff des Ligneris</h3>
                                                <p>Senior Product Manager, Doodle</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
    
                            <section class="case-study__exp-block">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-2">
                                        <h2 class="case-study__exp-block--circle" style="line-height: 1.5">Doodle’s footing and growth…</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-3">
                                        <section class="case-study__exp-block--subtext">
                                            <p class="cn-mar--b-st">
                                                In 2007, Doodle was founded to develop an online scheduling solution for personal use. A year later, they launched their first premium service and enhanced the calendar integration possibilities that lead to the Doodle calendar view in 2010.
                                            </p>
                                            <p class="cn-mar--b-st">
                                                There has been no stopping since then. Doodle’s usage spread globally for organizing any kind of reunions and meetings. Due to a large number of users, the platform was monetized successfully through ads and increasingly through subscriptions. Currently, Doodle is in a transition from a mainly ads-based to a mainly subscription-based business, with an ever-increasing focus on features for the busy professional. 
                                            </p>
                                            <p class="cn-mar--b-st">
                                                We spoke with Cliff des Ligneris, the Product Manager at Doodle who is working at the heart of this shift. Cliff’s day-to-day job entailed building and managing the team that built the core services - these included billing and payments, building a developer platform, and user authentication. His customers are other teams at Doodle and his peers. 
                                            </p>
                                        </section>
                                    </div>
                                </div>
                            </section>

                            <section class="case-study__exp-block__row"></section>
    
                            <section class="case-study__exp-block">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-2">
                                        <h2 class="case-study__exp-block--circle" style="line-height: 1.5">Discovering the subscriptions world… Doodle meets Chargebee</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-3">
                                        <section class="case-study__exp-block--subtext">
                                            <p class="cn-mar--b-st">
                                                Last year, they decided to double down on the subscription business model, and offer more features for professional users. Doodle also decided to move from one huge monolithic application run on bare-metal servers, to a cloud-based microservice architecture. Creating building blocks on top of which they could build more products faster. 
                                            </p>
                                        </section>
                                    </div>
                                </div>
                            </section>
    
                            <section class="case-study__exp-block__row" style="border-width: 0">
                                <div class="case-study__exp-block__ls case-study__exp-block__ls--quote-bg">
                                    <div class="row">
                                        <div class="col-md-7 col-lg-8">
                                            We already had a home-built subscription and billing system, so we knew the pain of developing and maintaining such a system well. Since we are moving from a monolithic application to a microservice-architecture, building a billing service from scratch seemed like a bad idea. It’s not our core business.
                                        </div>
                                        <div class="col-md-5 col-lg-4">
                                            <div class="img-circle author">
                                                <img src="/static/website/version/images/case-study/doodle/jack-berglund.jpg" alt="Julien Balmont" class="img-responsive">
                                            </div>
                                            <div class="author-description">
                                                <h3>Jack Berglund</h3>
                                                <p>Chief Product Officer, Doodle</p>
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
                                                Naturally, having a good billing and payment service was key to the whole new stretch to going the subscriptions route. Doodle needed a building block for payments and subscription management. They were using a subscription-management engine that was built internally, for a long time. What followed was a heavy investment in more development time, every time they encountered a new use case.
                                            </p>
                                            <p class="cn-mar--b-st">
                                                After evaluating a few popular billing providers, Doodle decided to go with Chargebee to manage their subscriptions. 
                                            </p>
                                        </section>
                                    </div>
                                </div>
                            </section>
    
                            <section class="case-study__exp-block__row" style="border-width: 0">
                                <div class="case-study__exp-block__ls case-study__exp-block__ls--quote-bg">
                                    <div class="row">
                                        <div class="col-md-7 col-lg-8">
                                            We were evaluating multiple vendors and had a set of criteria (i.e. multi-lingual, Stripe support, pricing, full API access, etc.) that we looked at. Chargebee scored best or at par with others on most points on our list, so it was an easy choice.
                                        </div>
                                        <div class="col-md-5 col-lg-4">
                                            <div class="img-circle author">
                                                <img src="/static/website/version/images/case-study/doodle/jack-berglund.jpg" alt="Julien Balmont" class="img-responsive">
                                            </div>
                                            <div class="author-description">
                                                <h3>Jack Berglund</h3>
                                                <p>Chief Product Officer, Doodle</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            
                            <section class="case-study__exp-block__row"></section>
    
                            <section class="case-study__exp-block">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-1">
                                        <h2 class="case-study__exp-block--circle" style="line-height: 1.5">The biggest impact areas…</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-2">
                                        <section class="case-study__exp-block--subtext">
                                            <p class="cn-mar--b-st">
                                                What brought Doodle closer to Chargebee was the personal touch, close collaboration with their team, openness to their feedback, and Chargebee’s empathetic sales process as opposed to the other players in the ‘Silicon Valley’. Beyond these softer aspects, Doodle wanted to scale globally with Chargebee’s capabilities. 
                                            </p>
                                            <p class="cn-mar--b-st">
                                                <strong>Tiered pricing</strong> - Doodle’s free plan supports ads. Along with this, Doodle also offers two ad-free, paid plans using Chargebee’s tiered pricing - a ‘Private’ plan at €43 per year for a single user, and a ‘Business’ plan at a base price of €59 per year depending on the number of premium users signing up for the product. Typically, this works for businesses with professional teams of different sizes.
                                            </p>
                                            <p class="cn-mar--b-st">
                                                <img src="/static/website/version/images/case-study/doodle/bg3.png" alt="" class="img-responsive">
                                            </p>
                                            <p class="cn-mar--b-st">
                                                <strong>Internationalization Support</strong> - As a global SaaS with a huge audience based out of Europe, personalization was key for Doodle to scale across different geographies. The ability to configure multiple languages, including Spanish, German, French, among others, as well as the ability to offer their pricing in Euros took Doodle a few steps closer to winning the global market. Doodle offers their product in almost 20 languages. 
                                            </p>
                                        </section>
                                    </div>
                                </div>
                            </section>
                            <section class="case-study__exp-block__row" style="border-width: 0">
                                <div class="case-study__exp-block__ls case-study__exp-block__ls--quote-bg">
                                    <div class="row">
                                        <div class="col-md-7 col-lg-8">
                                            Feature sets were similar, but many of your competitors don’t support multiple languages, and this was a major factor to choose Chargebee - small things that make a big difference.
                                        </div>
                                        <div class="col-md-5 col-lg-4">
                                            <div class="img-circle author">
                                                <img src="/static/website/version/images/case-study/doodle/cliff-des-ligneris.png" alt="Julien Balmont" class="img-responsive">
                                            </div>
                                            <div class="author-description">
                                                <h3>Cliff des Ligneris</h3>
                                                <p>Product Manager, Doodle</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
    
    
                            <section class="case-study__exp-block">
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-2">
                                        <section class="case-study__exp-block--subtext">
                                            <p class="cn-mar--b-st">
                                                <strong>Full access to clean APIs</strong> - Doodle has a full-fledged integration with Chargebee through APIs and that opens up avenues to do a lot more with Chargebee, including automating reporting via the API. 
                                            </p>
                                            <p class="cn-mar--b-st">
                                                <strong>Customer Acquisition via Coupons</strong> - Doodle has the advantage of tapping into its millions of users to acquire more customers into Premium Doodle for the subscription business model. Coupons have been a huge advantage for them to win new customers and acquire existing ones to use Doodle on a recurring basis.
                                            </p>
                                        </section>
                                    </div>
                                </div>
                            </section>
                            <section class="case-study__exp-block__row" style="border-width: 0">
                                <div class="case-study__exp-block__ls case-study__exp-block__ls--quote-bg">
                                    <div class="row">
                                        <div class="col-md-7 col-lg-8">
                                            We have a full-fledged integration with our system. The API is mostly well documented and effective. We are especially happy that we can get events of changes in Chargebee [through API], so our systems can remain in-sync.
                                        </div>
                                        <div class="col-md-5 col-lg-4">
                                            <div class="img-circle author">
                                                <img src="/static/website/version/images/case-study/doodle/cliff-des-ligneris.png" alt="Julien Balmont" class="img-responsive">
                                            </div>
                                            <div class="author-description">
                                                <h3>Cliff des Ligneris</h3>
                                                <p>Product Manager, Doodle</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            
                            <section class="case-study__exp-block__row"></section>
    
                            <section class="case-study__exp-block">
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-2">
                                        <section class="case-study__exp-block--subtext">
                                            <p class="cn-mar--b-st">
                                                <strong>Conclusion… </strong>
                                            </p>
                                            <p class="cn-mar--b-st">
                                                Doodle, the consumer-facing SaaS, believes in product-led growth. The decision to move into the subscription business model stems from that belief. So is choosing Chargebee to automate their subscriptions and give them the flexibility to create an enhanced subscription experience for their customers. Try out Chargebee for <a href="https://www.chargebee.com/trial-signup/">free</a>. And if you want to schedule your next meeting, go for <a href="https://doodle.com/">Doodle</a>.
                                            </p>
                                        </section>
                                    </div>
                                </div>
                            </section>
                            
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
        <!-- ===================================================================
        End: Body Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Footer Section
        ==================================================================== -->
        <app-footer />
        <!-- ===================================================================
        End: Footer Section
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

export default {
    components: {
    'app-meta': AppMeta,
    'app-header': AppHeader,
    'app-footer': AppFooter
    },
    // jQuery methods/functions should be placed inside the methods
    methods: {},
    // jQuery interaction should be placed inside the mounted method
    mounted() {
        $('.pr-tab__plan-inv').tooltip({
            'show': true,
            'placement': 'bottom'
        });
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
    .case-study__banner--shadow:before {
        content: '';
        background-image: linear-gradient(to bottom, rgba(0,47,75,0) 60%, rgba(0,0,0,0.51) 100%);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .case-study__list{
        padding-left: 15px;
    }
    .case-study__list li{
        margin-bottom: 20px
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
