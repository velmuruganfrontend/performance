<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
   <div><!--Parent DIV-->    
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'Champions of Change | Virtual Conference by Chargebee'"
            :cb-desc="'Join us as we bring together the largest gathering of Champions of Change, and tear into the stories behind the transformations'"
            :cb-url="'/champions-of-change-summit/'"
            :cb-image="'/static/resources/og/events/coc/og.png'" 
            :cb-style="'https://use.typekit.net/cxw6eue.css, /static/website/version/styles/coc-submit.css'"  
            :cb-body-script="'/static/website/version/scripts/coc-submit.js'" 
            :cb-has-noindex="false"
            :disable-bootstrap-css="true"
            :disable-header-footer-css="true" />
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Main Container
        ==================================================================== -->
        <svg-sprite />
        <main class="coc-main">
        <!-- ===================================================================
        Start: Hero Section
        ==================================================================== -->
        <section class="coc-hero hidden-xs hidden-sm">
            <div class="container">
            <div class="coc-hero__container">
                <!-- -----------------------------------------------------------
                Start: Content Section
                ------------------------------------------------------------ -->
                <div class="coc-hero__main">
                    <header class="coc-hero__header">
                        <a href="/">
                            <svg width="110" height="34">
                                <use xlink:href="#chargebee-logo-white"></use>
                            </svg>
                        </a>
                    </header>
                    <div class="coc-hero__content">
                        <h2 class="coc-article__label">
                            Inconvenient. Savage. Unannounced. <br />Always around the corner.
                        </h2>
                        <h1 class="coc-article__title revealOnScroll animate fadeInUp">
                            Change.
                        </h1>
                        <div class="coc-panel__form">
                            <!-- -----------------------------------------------------------
                            Start: HS form
                            ------------------------------------------------------------ -->
                            <div class="coc-form cb-hs__form">
                                <!-- <div class="hbspt-form">
                                    <form class="coc-hs-form">
                                        <div class="hs_email hs-email hs-fieldtype-text field hs-form-field">
                                            <div class="input">
                                                <input class="hs-input" type="email" name="email" placeholder="Enter your business email">
                                            </div>
                                        </div>
                                        <div class="hs_submit hs-submit">
                                            <div class="actions">
                                                <input type="submit" value="Join us to find out" class="hs-button primary large">
                                            </div>
                                        </div>
                                    </form>
                                </div> -->
                            </div>
                            <!-- -----------------------------------------------------------
                            End: HS form
                            ------------------------------------------------------------ -->
                        </div>
                        <div class="coc-article__desc revealOnScroll animate fadeInUp" style="animation-delay: .1s"> 
                            From the fall of Kodak in the 90s to the spectacular growth of Zoom this year, how organizations respond to change has been pivotal to their success and failure. 
                        </div>
                        <div class="coc-article__desc revealOnScroll animate fadeInUp" style="animation-delay: .1s"> 
                            While most people take cover to see out the storm, there are some who step forth and turn that very threat into a catalyst for their business' growth. There's hardly any playbook to it, but there's a lot to learn from their anecdotes.
                        </div>
                        <div class="coc-article__desc revealOnScroll animate fadeInUp" style="animation-delay: .1s"> 
                            At Chargebee's Champions of Change Summit, we bring them to you. Eight of the most iconic champions of change in the SaaS space, to share their stories and answer your questions.
                        </div>
                    </div>
                    <div class="coc-hero__footer">
                        <div class="coc-article__desc">
                            Join us on <strong>Oct 27th and 28th</strong> to rub shoulders with these giants.
                        </div>
                    </div>
                </div>
                <!-- -----------------------------------------------------------
                End: Content Section
                ------------------------------------------------------------ -->
                <!-- -----------------------------------------------------------
                Start: Speakers Section
                ------------------------------------------------------------ -->
                <div class="coc-hero__aside">
                    <div class="coc-speakers revealOnScroll animate">
                        <div>
                            <div class="coc-speaker coc-speaker--a revealOnScroll animate fadeInUp" style="animation-delay: .15s"></div>
                        </div>
                        <div>
                            <div class="coc-speaker coc-speaker--b revealOnScroll animate fadeInUp" style="animation-delay: .25s"></div>
                            <div class="coc-speaker coc-speaker--c revealOnScroll animate fadeInUp" style="animation-delay: .15s"></div>
                            <div class="coc-speaker coc-speaker--d revealOnScroll animate fadeInUp"></div>
                        </div>
                        <div>
                            <div class="coc-speaker coc-speaker--e revealOnScroll"></div>
                            <div class="coc-speaker coc-speaker--f revealOnScroll animate fadeInUp" style="animation-delay: .15s"></div>
                            <div class="coc-speaker coc-speaker--g revealOnScroll animate fadeInUp"></div>
                            <div class="coc-speaker coc-speaker--h revealOnScroll animate fadeInUp" style="animation-delay: .25s"></div>
                        </div>
                        <div>
                            <div class="coc-speaker coc-speaker--i revealOnScroll animate fadeInUp" style="animation-delay: .15s"></div>
                        </div>
                    </div>
                </div>
                <!-- -----------------------------------------------------------
                End: Speakers Section
                ------------------------------------------------------------ -->
            </div>
            </div>
        </section>
        <!-- ===================================================================
        End: Hero Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Slider Section
        ==================================================================== -->
        <section class="coc-slider hidden-xs hidden-sm">
            <div class="container">
                <div class="coc-slider__header">
                    <div class="coc-article__desc">
                        Join us as we bring together the largest gathering of these<br class="visible-lg"> <strong>Champions of Change</strong>, and tear into the stories behind the transformations. 
                    </div>
                </div>
                <div class="coc-slider__content">
                    <div class="coc-slider__figure revealOnScroll" data-animate='fadeInUp'>
                        <img src="/static/website/version/images/coc-submit/speakers/from/champions-of-change.png" alt="Champions of Change" class="img-responsive">
                    </div>
                </div>
            </div>
        </section>
        <!-- ===================================================================
        End: Slider Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Panel Section
        ==================================================================== -->
        <section class="coc-panel">
            <div class="container">
                <div class="row">
                    <!-- -------------------------------------------------------
                    Start: Panel Main Section
                    -------------------------------------------------------- -->
                    <div class="col-md-7 col-sm-offset-1 col-md-offset-0">
                        <div class="coc-panel__main">
                            <div class="coc-panel__header">
                                <div class="coc-panel__label">
                                    <div class="coc-article__desc">
                                        PRODUCED BY
                                    </div>
                                </div>
                                <div class="coc-panel__logo">
                                    <a href="/">
                                        <svg width="140" height="42">
                                            <use xlink:href="#chargebee-logo-white"></use>
                                        </svg>
                                    </a>
                                </div>

                                <div class="coc-article__desc coc-article__desc--alt visible-xs visible-sm"><strong>October 27th - 28th, 2020</strong></div>
                            </div>
                            <div class="coc-panel__figure revealOnScroll" data-animate='fadeInUp'>
                                <img src="/static/website/version/images/coc-submit/champions-of-change.svg" alt="Champions of Change" class="img-responsive">
                            </div>
                        </div>
                    </div>
                    <!-- -------------------------------------------------------
                    Start: Panel Aside Section
                    -------------------------------------------------------- -->
                    <div class="col-md-5 col-sm-offset-1 col-md-offset-0">
                        <div class="coc-panel__aside">
                            <div class="coc-panel__content">
                                <div class="hidden-md hidden-lg">
                                    <div class="coc-article__desc revealOnScroll animate fadeInUp" style="animation-delay: .1s"> 
                                        From the fall of Kodak in the 90s to the spectacular growth of Zoom this year, how organizations respond to change has been pivotal to their success and failure. 
                                    </div>
                                    <div class="coc-article__desc revealOnScroll animate fadeInUp" style="animation-delay: .1s"> 
                                        While most people take cover to see out the storm, there are some who step forth and turn that very threat into a catalyst for their business' growth. There's hardly any playbook to it, but there's a lot to learn from their anecdotes.
                                    </div>
                                    <div class="coc-article__desc revealOnScroll animate fadeInUp" style="animation-delay: .1s"> 
                                        At Chargebee's Champions of Change Summit, we bring them to you. Eight of the most iconic champions of change in the SaaS space, to share their stories and answer your questions.
                                    </div>
                                    <div class="coc-article__desc">
                                        Join us on <strong>Oct 27th and 28th</strong> to rub shoulders with these giants.
                                    </div>
                                </div>
                                <div class="coc-article__desc hidden-xs hidden-sm">
                                    <strong>2</strong> Days | <strong>8</strong> Sessions | <strong>10</strong> Speakers & <br class="visible-lg"><strong>5</strong> hidden superstars who are <br class="visible-lg">changing the world
                                </div>
                            </div>
                            <div class="coc-panel__footer">
                                <div class="coc-article__desc hidden-xs hidden-sm revealOnScroll" data-animate='fadeInUp'>Join us on the Virtual Summit <br><strong>October 27th - 28th, 2020</strong></div>
                                <div class="coc-panel__form revealOnScroll" data-animate='fadeInUp'>
                                    <!-- -----------------------------------------------------------
                                    Start: HS form
                                    ------------------------------------------------------------ -->
                                    <div class="coc-form cb-hs__form"></div>
                                    <!-- -----------------------------------------------------------
                                    End: HS form
                                    ------------------------------------------------------------ -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===================================================================
        End: Panel Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Session Section
        ==================================================================== -->
        <section class="coc-session">
            <div class="container">
                <div class="coc-session__container">
                    <!-- -------------------------------------------------------
                    Start: Main Section
                    -------------------------------------------------------- -->
                    <div class="coc-session__main">
                        <div class="coc-session__header revealOnScroll" data-animate='fadeInUp'>
                            <img src="/static/website/version/images/coc-submit/sessions.svg" alt="Champions of Change" class="img-responsive">
                        </div>
                        <div class="coc-session__content revealOnScroll" data-animate='fadeInUp'>
                            <div class="coc-cards">
                                <!-- ------------------------------------------------
                                Start: Card Section
                                ------------------------------------------------- -->
                                <div class="coc-card">
                                    <div class="coc-card__container">
                                        <div class="coc-card__main">
                                            <div class="coc-card__header">
                                                <div class="coc-article__subheading">
                                                   Keynote Address
                                                </div>
                                                <!--<div class="coc-article__caption">
                                                    Lessons in scaling to 100M and beyond
                                                </div>-->
                                            </div>
                                            <div class="coc-card__content">
                                                <div class="coc-article__subdesc">
                                                    From evangelizing Macintosh that democratized computers, evangelizing Canva that democratized design, to adding Golden touch to disruptors like Evernote, Guy has Championed Change and upset the status-quo throughout his career. He has mastered the art and science of creating and changing perceptions of a product. Join us on this keynote as enchants us with his take on Change.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="coc-card__aside">
                                            <div class="coc-card__label">
                                                <div class="coc-article__desc">DAY 1</div>
                                            </div>
                                            <div class="coc-card__figure">
                                                <img src="/static/website/version/images/coc-submit/sessions/session-0.png" alt="Champions of Change" class="img-responsive">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ------------------------------------------------
                                Start: Card Section
                                ------------------------------------------------- -->
                                <div class="coc-card">
                                    <div class="coc-card__container">
                                        <div class="coc-card__main">
                                            <div class="coc-card__header">
                                                <div class="coc-article__subheading">
                                                    Making mountains out of Molehills: 
                                                </div>
                                                <div class="coc-article__caption">
                                                    Lessons in scaling to 100M and beyond
                                                </div>
                                            </div>
                                            <div class="coc-card__content">
                                                <div class="coc-article__subdesc">
                                                    Join Tommi Forsstrom, Growth Stage Product Leader who has helped fast-growing businesses on the journey from product-market fit to IPO, as he dissects the life after product-market fit, strategies to accelerate and sustain early-stage success, and dives deeper into what to (not) champion.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="coc-card__aside">
                                            <div class="coc-card__label">
                                                <div class="coc-article__desc">DAY 1</div>
                                            </div>
                                            <div class="coc-card__figure">
                                                <img src="/static/website/version/images/coc-submit/sessions/session-2.png" alt="Champions of Change" class="img-responsive">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ------------------------------------------------
                                Start: Card Section
                                ------------------------------------------------- -->
                                <div class="coc-card">
                                    <div class="coc-card__container">
                                        <div class="coc-card__main">
                                            <div class="coc-card__header">
                                                <div class="coc-article__subheading">
                                                    Deciphering the world of Disruptors with Bill Macaitis
                                                </div>
                                                <!-- <div class="coc-article__caption">
                                                    How to Capture opportunities when you are ready for it
                                                </div> -->
                                            </div>
                                            <div class="coc-card__content">
                                                <div class="coc-article__subdesc">
                                                    From his journey of being a SVP at Salesforce, CMO at Zendesk, and CMO/CRO at Slack, Bill has been part of the biggest disruption in the B2B space over the last 2 decades. And now with learnings from achieving 5 exits over his career, Bill joins us to decode the hyper-growth of champions in SaaS.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="coc-card__aside">
                                            <div class="coc-card__label">
                                                <div class="coc-article__desc">DAY 1</div>
                                            </div>
                                            <div class="coc-card__figure">
                                                <img src="/static/website/version/images/coc-submit/sessions/session-6.png" alt="Champions of Change" class="img-responsive">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ------------------------------------------------
                                Start: Card Section
                                ------------------------------------------------- -->
                                <div class="coc-card">
                                    <div class="coc-card__container">
                                        <div class="coc-card__main">
                                            <div class="coc-card__header">
                                                <div class="coc-article__subheading">
                                                     Adapting to the Unknown with Mark Roberge
                                                </div>
                                                <!-- <div class="coc-article__caption">
                                                    How to Capture opportunities when you are ready for it
                                                </div> -->
                                            </div>
                                            <div class="coc-card__content">
                                                <div class="coc-article__subdesc">
                                                    The author of “The Sales Acceleration Formula: Using Data, Technology, and Inbound Selling to go from $0 to $100 Million”. Former CRO of HubSpot who helped transform the startup into a unicorn valued at over $5 Billion. The academician - Senior Lecturer at Harvard Business School. How has he travelled with the winds of change? 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="coc-card__aside">
                                            <div class="coc-card__label">
                                                <div class="coc-article__desc">DAY 1</div>
                                            </div>
                                            <div class="coc-card__figure">
                                                <img src="/static/website/version/images/coc-submit/sessions/session-5.png" alt="Champions of Change" class="img-responsive">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ------------------------------------------------
                                Start: Card Section
                                ------------------------------------------------- -->
                                <div class="coc-card">
                                    <div class="coc-card__container">
                                        <div class="coc-card__main">
                                            <div class="coc-card__header">
                                                <div class="coc-article__subheading">
                                                     The Science behind pivoting your Business Model
                                                </div>
                                                <!-- <div class="coc-article__caption">
                                                    How to Capture opportunities when you are ready for it
                                                </div> -->
                                            </div>
                                            <div class="coc-card__content">
                                                <div class="coc-article__subdesc">
                                                     Business pivots are high-risk, high-reward games. There have been several successful pivots in the technology space including the likes of Twitter, Slack, PayPal. But what goes behind these bets? How would one assess if the bet has paid off? We are bringing a panel of product and business leaders who have championed these targeted pivots.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="coc-card__aside">
                                            <div class="coc-card__label">
                                                <div class="coc-article__desc">DAY 2</div>
                                            </div>
                                            <div class="coc-card__figure">
                                                <img src="/static/website/version/images/coc-submit/sessions/session-4.png" alt="Champions of Change" class="img-responsive">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ------------------------------------------------
                                Start: Card Section
                                ------------------------------------------------- -->
                                <div class="coc-card">
                                    <div class="coc-card__container">
                                        <div class="coc-card__main">
                                            <div class="coc-card__header">
                                                <div class="coc-article__subheading">
                                                    Change breeds Opportunity:
                                                </div>
                                                <div class="coc-article__caption">
                                                    A Fireside chat with David Cancel
                                                </div>
                                            </div>
                                            <div class="coc-card__content">
                                                <div class="coc-article__subdesc">
                                                    David Cancel is no stranger to running and scaling a business. The five-time founder has achieved 4 exits in his 20 year career. What has remained consistent throughout his career is the advantage he has taken of the shifts in the market, and at times, championed these shifts. What did it take to champion all these changes? Let us find out!
                                                </div>
                                            </div>
                                        </div>
                                        <div class="coc-card__aside">
                                            <div class="coc-card__label">
                                                <div class="coc-article__desc">DAY 2</div>
                                            </div>
                                            <div class="coc-card__figure">
                                                <img src="/static/website/version/images/coc-submit/sessions/session-3.png" alt="Champions of Change" class="img-responsive">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ------------------------------------------------
                                Start: Card Section
                                ------------------------------------------------- -->
                                <div class="coc-card">
                                    <div class="coc-card__container">
                                        <div class="coc-card__main">
                                            <div class="coc-card__header">
                                                <div class="coc-article__subheading">
                                                    Shaping Strategy in a World of Disruption
                                                </div>
                                                <!--<div class="coc-article__caption">
                                                    A Fireside chat with David Cancel
                                                </div>-->
                                            </div>
                                            <div class="coc-card__content">
                                                <div class="coc-article__subdesc">
                                                    What started out to be a product for video creation and distribution in 2006, is now a video marketing platform that has found its place on every possible channel. In this session, Brendan walks us through how they adapted through the years and how they made a room for refinement while shaping the market, industry and their product strategy. 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="coc-card__aside">
                                            <div class="coc-card__label">
                                                <div class="coc-article__desc">DAY 2</div>
                                            </div>
                                            <div class="coc-card__figure reduce-bottom">
                                                <img src="/static/website/version/images/coc-submit/sessions/session-9.png" alt="Champions of Change" class="img-responsive">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ------------------------------------------------
                                Start: Card Section
                                ------------------------------------------------- -->
                                <div class="coc-card">
                                    <div class="coc-card__container">
                                        <div class="coc-card__main">
                                            <div class="coc-card__header">
                                                <div class="coc-article__subheading">
                                                    Champions of Change Awards
                                                </div>
                                                <!-- <div class="coc-article__caption">
                                                    How to Capture opportunities when you are ready for it
                                                </div> -->
                                            </div>
                                            <div class="coc-card__content">
                                                <div class="coc-article__subdesc">
                                                   Join us to find out and hear from the superstars who are silently changing the world.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="coc-card__aside">
                                            <div class="coc-card__label">
                                                <div class="coc-article__desc">DAY 2</div>
                                            </div>
                                            <div class="coc-card__figure">
                                                <img src="/static/website/version/images/coc-submit/sessions/session-7.png" alt="Champions of Change" class="img-responsive">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ------------------------------------------------
                                Start: Card Section
                                ------------------------------------------------- -->
                                <div class="coc-card">
                                    <div class="coc-card__container">
                                        <div class="coc-card__main">
                                            <div class="coc-card__header">
                                                <div class="coc-article__subheading">
                                                   Achieving More By Doing Less
                                                </div>
                                                <!-- <div class="coc-article__caption">
                                                    How to Capture opportunities when you are ready for it
                                                </div> -->
                                            </div>
                                            <div class="coc-card__content">
                                                <div class="coc-article__subdesc">
                                                     Brain talks about achieving more by doing less. He says that marketers get carried away with tools and technology and tend to overcomplicate things. In this session we aim to find the sweet spot - right mix of a Martech stack, how to prioritize activities, and learn from his experiences to emerge stronger.  
                                                </div>
                                            </div>
                                        </div>
                                        <div class="coc-card__aside">
                                            <div class="coc-card__label">
                                                <div class="coc-article__desc">DAY 2</div>
                                            </div>
                                            <div class="coc-card__figure">
                                                <img src="/static/website/version/images/coc-submit/sessions/session-8.png" alt="Champions of Change" class="img-responsive">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ------------------------------------------------
                                End: Card Section
                                ------------------------------------------------- -->
                            </div>
                        </div>
                        <div class="coc-session__footer hidden-xs hidden-sm">
                            <div class="coc-article__desc">
                                Save your spot here
                            </div>
                            <div class="coc-session__form">
                                <!-- -----------------------------------------------------------
                                Start: HS form
                                ------------------------------------------------------------ -->
                                <div i class="coc-form cb-hs__form">
                                    <!-- <div class="hbspt-form">
                                        <form class="coc-hs-form">
                                            <div class="hs_email hs-email hs-fieldtype-text field hs-form-field">
                                                <div class="input">
                                                    <input class="hs-input" type="email" name="email" placeholder="Enter your business email">
                                                </div>
                                            </div>
                                            <div class="hs_submit hs-submit">
                                                <div class="actions">
                                                    <input type="submit" value="Register now" class="hs-button primary large">
                                                </div>
                                            </div>
                                        </form>
                                    </div> -->
                                </div>
                                <!-- -----------------------------------------------------------
                                End: HS form
                                ------------------------------------------------------------ -->
                            </div>
                        </div>
                    </div>
                    <!-- -------------------------------------------------------
                    Start: Aside Section
                    -------------------------------------------------------- -->
                    <div class="coc-session__aside hidden-xs hidden-sm">
                        <div class="coc-session__list">
                            <!-- -----------------------------------------------
                            Start: Item
                            ------------------------------------------------ -->
                            <div class="coc-session__item">
                                <div class="coc-session__date">
                                    OCT 27
                                </div>
                                <div class="coc-session__duration">
                                    9:00am - 9:30am PT
                                </div>
                                <div class="coc-session__label">
                                  Guy Kawasaki’s Keynote Address
                                </div>
                            </div>
                            <!-- -----------------------------------------------
                            Start: Item
                            ------------------------------------------------ -->
                            <div class="coc-session__item">
                                <div class="coc-session__date">
                                    OCT 27 
                                </div>
                                <div class="coc-session__duration">
                                    9:35am - 10:10am PT
                                </div>
                                <div class="coc-session__label">
                                    Making mountains out of Molehills
                                </div>
                            </div>
                            <!-- -----------------------------------------------
                            Start: Item
                            ------------------------------------------------ -->
                            <div class="coc-session__item">
                                <div class="coc-session__date">
                                    OCT 27
                                </div>
                                <div class="coc-session__duration">
                                    10:15am - 11:00am PT
                                </div>
                                <div class="coc-session__label">
                                    Deciphering the world of Disruptors with Bill Macaitis
                                </div>
                            </div>
                            <!-- -----------------------------------------------
                            Start: Item
                            ------------------------------------------------ -->
                            <div class="coc-session__item">
                                <div class="coc-session__date">
                                    OCT 27 
                                </div>
                                <div class="coc-session__duration">
                                    11:05am - 11:45am PT
                                </div>
                                <div class="coc-session__label">
                                     Adapting to the Unknown with Mark Roberge
                                </div>
                            </div>
                            <!-- -----------------------------------------------
                            Start: Item
                            ------------------------------------------------ -->
                            <div class="coc-session__item">
                                <div class="coc-session__date">
                                    OCT 28
                                </div>
                                <div class="coc-session__duration">
                                    09:00am - 09:30am PT
                                </div>
                                <div class="coc-session__label">
                                    The Science behind pivoting your Business Model
                                </div>
                            </div>
                            <!-- -----------------------------------------------
                            Start: Item
                            ------------------------------------------------ -->
                            <div class="coc-session__item">
                                <div class="coc-session__date">
                                    OCT 28 
                                </div>
                                <div class="coc-session__duration">
                                    9:35am - 10:20am PT
                                </div>
                                <div class="coc-session__label">
                                    Change breeds Opportunity
                                </div>
                            </div>
                            <!-- -----------------------------------------------
                            Start: Item
                            ------------------------------------------------ -->
                            <div class="coc-session__item">
                                <div class="coc-session__date">
                                    OCT 28
                                </div>
                                <div class="coc-session__duration">
                                   10:25am - 11 am PT
                                </div>
                                <div class="coc-session__label">
                                     Shaping Strategy in a World of Disruption
                                </div>
                            </div>
                            <!-- -----------------------------------------------
                            Start: Item
                            ------------------------------------------------ -->
                            <div class="coc-session__item">
                                <div class="coc-session__date">
                                    OCT 28 
                                </div>
                                <div class="coc-session__duration">
                                    11:05am - 11:45 am PT
                                </div>
                                <div class="coc-session__label">
                                    Champions of Change Awards
                                </div>
                            </div>
                            <!-- -----------------------------------------------
                            Start: Item
                            ------------------------------------------------ -->
                            <div class="coc-session__item">
                                <div class="coc-session__date">
                                    OCT 28 
                                </div>
                                <div class="coc-session__duration">
                                    11:45am - 12:15pm PT
                                </div>
                                <div class="coc-session__label">
                                   Achieving More By Doing Less
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===================================================================
        End: Session Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Slider Section
        ==================================================================== -->
        <section class="coc-slider visible-xs visible-sm">
            <div class="container">
                <div class="coc-slider__header">
                    <div class="coc-article__desc">
                        With Speakers from
                    </div>
                </div>
                <div class="coc-slider__content">
                    <div class="coc-slider__figure">
                        <img src="/static/website/version/images/coc-submit/speakers/from/champions-of-change-xs.png" alt="Champions of Change" class="img-responsive">
                    </div>
                </div>
            </div>
        </section>
        <!-- ===================================================================
        End: Slider Section
        ==================================================================== -->
        </main>
        <!-- ===================================================================
        Start: Footer Section
        ==================================================================== -->
        <section class="coc-footer">
            <div class="coc-footer__container">
                <!-- -------------------------------------------------------
                Start: Footer Main Section
                -------------------------------------------------------- -->
                <div class="coc-footer__main">
                    <div class="coc-footer__header">
                        <div class="coc-article__heading revealOnScroll" data-animate='fadeInUp'>
                            Join us
                        </div>
                        <div class="coc-article__desc revealOnScroll" data-animate='fadeInUp' style="color: #00000A">
                            Lineup of 8 insight-driven sessions by Change-makers from fast-growing businesses. One place to access them.
                        </div>
                    </div>
                    <div class="coc-footer__form">
                        <!-- -----------------------------------------------------------
                        Start: HS form
                        ------------------------------------------------------------ -->
                        <div  class="coc-form cb-hs__form">
                            <!-- <div class="hbspt-form">
                                <form class="coc-hs-form">
                                    <div class="hs_email hs-email hs-fieldtype-text field hs-form-field">
                                        <div class="input">
                                            <input class="hs-input" type="email" name="email" placeholder="Enter your business email">
                                        </div>
                                    </div>
                                    <div class="hs_submit hs-submit">
                                        <div class="actions">
                                            <input type="submit" value="Register now" class="hs-button primary large">
                                        </div>
                                    </div>
                                </form>
                            </div> -->
                        </div>
                        <!-- -----------------------------------------------------------
                        End: HS form
                        ------------------------------------------------------------ -->
                    </div>
                </div>
                <!-- -------------------------------------------------------
                Start: Footer Aside Section
                -------------------------------------------------------- -->
                <div class="coc-footer__aside">
                    <a href="/">
                        <svg width="140" height="42">
                            <use xlink:href="#chargebee-logo-black"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
        <!-- ===================================================================
        End: Footer Section
        ==================================================================== -->
        <!-- ===================================================================
        End: Main Container
        ==================================================================== -->
   </div> <!--Parent DIV-->    
</template>
<!-- ===========================================================================
End: Template
============================================================================ -->
<!-- ===========================================================================
Start: Scripts
============================================================================ -->
<script>
    import AppMeta from '~/components/AppMeta.vue';
    import svgSprite from '~/components/svgSpriteForHeader.vue';

    export default {
        components: {
            'app-meta': AppMeta,
            'svg-sprite': svgSprite
        },
        mounted() {}
    }
</script>
<!-- ===========================================================================
End: Scripts
============================================================================ -->


<!-- ===========================================================================
Start: Style
============================================================================ -->

<style>
/* .ri-row{margin-top: 130px;}  
.ri-heading{
    text-align: center;
    color: #00000B;
    font-size: 38px;
    line-height: 58px;
    margin-bottom: 60px;
}
.ri-rack__content{max-width: inherit;}  */
.reduce-bottom{
    position: relative;
    top: 3px;
}
</style>


<!-- ===========================================================================
End: Style
============================================================================ -->