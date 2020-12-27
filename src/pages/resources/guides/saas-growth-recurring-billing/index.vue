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
// app-header       =   App header will add header to the page. Need a white header in page use :hasInvert="true" attribute
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
      :cb-title="'Unhacking SaaS growth, Rethinking Growth and Billing'" 
      :cb-desc="'A billing platform, sitting at the heart of your subscription wheel, is impeding your growth if it’s not accelerating it. Whether you’re operating with an inbuilt system or a third party solution, here’s how you make sure your billing platform is doing the most that it can for you.'" 
      :cb-url="'/resources/guides/saas-growth-recurring-billing/'" 
      :cb-image="'/static/resources/og/resource/guides/saas-growth-recurring-billing.png'"
      :cb-style="'/static/website/version/styles/main.css,/static/website/version/styles/guide.css'"
      :cb-head-script="''"
      :cb-body-script="''"
      :cb-has-noindex="false" />
    <!-- ===================================================================
    End: Meta Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Header Section
    ==================================================================== -->
    <app-header :hasInvert="true" />
    <!-- ===================================================================
    End: Header Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Body Section
    ==================================================================== -->
    <div class="cb-body">
        <!-- ===========================================================================================
        Content Part Start 
        ============================================================================================ -->
        <main class="l-main">
            <!-- =========================================================================================
            Hero Part Start 
            ========================================================================================== -->
            <section class="l-main__landing">
                <div class="ca-landing" style="height: auto; padding-bottom: 60px;">
                    <div class="ca-landing__content">
                        <div class="container">
                            <h1 class="ca-landing__title animate fadeInLeft">
                                Unhacking SaaS Growth and Rethinking <br class="visible-md visible-lg">Recurring Billing’s Role In It
                            </h1>
                            <p class="ca-landing__desc animate fadeInLeft">
                                A guide to make sense of growth, discover growth levers, and why recurring billing is more than a mere utility
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- =========================================================================================
            Hero Part end 
            ========================================================================================== -->
            <!-- =================================================================================
            Content Part Start 
            ================================================================================== -->
            <section class="l-main__content">
                <!-- =============================================================================
                Contant Basic Start 
                ============================================================================== -->
                <div class="l-main__row">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-2">
                                <section class="ca-content" style="margin-bottom: 0;">
                                    <p class="ca-content__desc ca-content__desc--fl">
                                        Part of planning for growth is figuring out what your strengths are, so you can leverage them when the time is right. This guide presents a contextual approach to growth that will help you think about what your strengths are in relation to the five pillars of the customer lifecycle — acquisition, activation, revenue, retention, and referral. It makes a case for why this is better than isolating a growth metric or strategy or hack to pursue — each can lead to wins, but growth will stick only if you can turn sporadic wins into consistent ones.
                                    </p>
                                    <p class="ca-content__desc">
                                        Part of it is also figuring out if the weapons you are using will continue to work for you in the battles that lie ahead. To this end, this guide is a dive into the billing system — a powerful weapon in your arsenal — and how you can use it to accentuate your strengths and accelerate your growth.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- =============================================================================
                Contant Basic End 
                ============================================================================== -->
                <!-- =============================================================================
                Contant one Start 
                ============================================================================== -->
                <div class="l-main__row">
                    <!-- =========================================================================
                    Full page banner Start 
                    ========================================================================== -->
                    <section class="ca-banner" id="accounting-for-context-when-thinking-about-growth">
                        <div class="container ca-banner__container" style="background-image: none">
                            <div class="row">
                                <div class="col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-5">
                                    <div class="ca-banner__content">
                                        <h2 class="ca-banner__title revealOnScroll" data-animate='fadeInLeft'>
                                            Accounting for context when <br class="visible-lg">thinking about growth
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- =========================================================================
                    Full page banner end 
                    ========================================================================== -->
                    <div class="container">
                        <div class="row">
                            <!-- ================================================================
                            Fixed left nav Start 
                            ================================================================= -->
                            <div class="col-sm-2 col-md-3 col-lg-4">
                            </div>
                            <!-- ================================================================
                            Fixed left nav end 
                            ================================================================= -->
                            <!-- ================================================================
                            Fixed right content start 
                            ================================================================= -->
                            <div class="col-sm-8 col-sm-offset-1 col-md-7 col-md-offset-1 col-lg-6 col-lg-offset-1">
                                <!-- ============================================================
                                Section one start 
                                ============================================================= -->
                                <section class="ca-content" id="the-conceptual-tension-of-saas-growth">
                                    <h3 class="ca-content__heading">
                                        The conceptual tension of ‘SaaS growth’
                                    </h3>
                                </section>
                                <!-- ============================================================
                                Section one end 
                                ============================================================= -->
                            </div>
                            <!-- ================================================================
                            Fixed right content end 
                            ================================================================= -->
                        </div>

                        <!-- ====================================================================
                        Section two quote start
                        ===================================================================== -->
                        <div class="row">
                            <!-- ================================================================
                            Fixed left nav Start 
                            ================================================================= -->
                            <div class="col-sm-2 col-md-3 col-lg-4">
                                <div data-affix-after='#before-affix' id="ca-nav-affix" class="hidden-xs hidden-sm hidden-md">
                                    <div class="ca-nav">
                                        <!-- <div class="ca-nav__title">Table of contents</div> -->
                                        <ul class="ca-nav__list nav">
                                            <li class="ca-nav__item">
                                                <a href="#accounting-for-context-when-thinking-about-growth">
                                                    Accounting for context when thinking about growth
                                                </a>
                                                <ul class="ca-nav__sublist">
                                                    <li class="ca-nav__subitem">
                                                        <a href="#the-conceptual-tension-of-saas-growth">
                                                            The conceptual tension of ‘SaaS growth’
                                                        </a>
                                                    </li>
                                                    <li class="ca-nav__subitem">
                                                        <a href="#levers-account-for-context">
                                                            'Levers' account for context
                                                        </a>
                                                    </li>
                                                    <li class="ca-nav__subitem">
                                                        <a href="#growth-levers-dont-exist-in-a-vacuum">
                                                            Growth levers don’t exist in a vacuum
                                                        </a>
                                                    </li>
                                                    <li class="ca-nav__subitem">
                                                        <a href="#systems-are-made-of-subsystems">
                                                            Systems are made of subsystems
                                                        </a>
                                                    </li>
                                                    <li class="ca-nav__subitem">
                                                        <a href="#real-world-example-freemium">
                                                            Real world example: Freemium
                                                        </a>
                                                    </li>
                                                    <li class="ca-nav__subitem">
                                                        <a href="#how-to-experiment-with-growth-levers-faster">
                                                            How to experiment with growth levers faster
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="ca-nav__item">
                                                <a href="#if-your-billing-platform-isnt-accelerating-your-growth-its-impeding-it">
                                                    If your billing platform isn’t accelerating your growth, it’s impeding it 
                                                </a>
                                                <ul class="ca-nav__sublist">
                                                    <li class="ca-nav__subitem">
                                                        <a href="#acquisition">
                                                            Acquisition
                                                        </a>
                                                    </li>
                                                    <li class="ca-nav__subitem">
                                                        <a href="#activation-and-retention">
                                                            Activation and Retention
                                                        </a>
                                                    </li>
                                                    <li class="ca-nav__subitem">
                                                        <a href="#revenue-and-monetization">
                                                            Revenue and Monetization
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="ca-nav__item">
                                                <a href="#conclusion">
                                                    Conclusion — perfect systems don’t exist
                                                </a>
                                            </li>
                                        </ul>



                                        <div class="ca-social">
                                            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.chargebee.com/resources/guides/saas-growth-recurring-billing/" class="ca-social__item ca-social__item--fb"></a>
                                            <a href="https://twitter.com/home?status=https%3A//www.chargebee.com/resources/guides/saas-growth-recurring-billing/%20%40chargebee" class="ca-social__item ca-social__item--twt"></a>
                                            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.chargebee.com/resources/guides/saas-growth-recurring-billing/&title=&summary=&source=" class="ca-social__item ca-social__item--linkedin"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ================================================================
                            Fixed left nav end 
                            ================================================================= -->
                            <div class="col-sm-8 col-sm-offset-4 col-md-7 col-md-offset-1 col-lg-6 col-lg-offset-2">
                                <!-- ============================================================
                                Section two quote start
                                ============================================================= -->
                                <blockquote class="ca-blockquote revealOnScroll" data-animate='fadeInRight' style="margin-top: 42px;">
                                    <p>
                                        “I have yet to see any problem, however complicated, which, when looked at in the right way, did not become still more complicated.”
                                    </p>
                                    <p>
                                        <strong>&mdash; Poul Anderson</strong>
                                    </p>
                                </blockquote>
                                <!-- ============================================================
                                Section two quote end
                                ============================================================= -->
                            </div>
                        </div>
                        <!-- ====================================================================
                        Section two quote End
                        ===================================================================== -->
                        <div class="row">
                            <!-- ================================================================
                            Fixed left nav Start 
                            ================================================================= -->
                            <div class="col-sm-2 col-md-3 col-lg-4"></div>
                            <!-- ================================================================
                            Fixed left nav end 
                            ================================================================= -->
                            <!-- ================================================================
                            Fixed right content start 
                            ================================================================= -->
                            <div class="col-sm-8 col-sm-offset-1 col-md-7 col-md-offset-1 col-lg-6 col-lg-offset-1">
                                <section class="ca-content"></section>
                                <!-- ============================================================
                                Section one start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative">
                                    <p class="ca-content__desc">
                                        Poul Anderson’s sentiments are especially applicable today, talking about what might be the universal, top-of-the-mind problem of entrepreneurs everywhere — growth. 
                                    </p>
                                    <p class="ca-content__desc">
                                        SaaS Growth is hard to think about, in my opinion, because there is tension within the concept.
                                    </p>

                                    <div class="ca-content__offset">
                                        <ul class="ca-content__list ca-content__list--num ca-content__list--title">
                                            <li class="ca-content__item">
                                                <h5 class="ca-content__subheading">
                                                    The tension with definitions 
                                                </h5>
                                                <p class="ca-content__desc">
                                                    It’s true that growth can be defined (you’re growing <a href="https://blog.kissmetrics.com/saas-growth-customer-success/" target="_blank">if you have more renewing customers than canceling ones</a> and you’re growing <a href="https://www.chargebee.com/blog/saas-unit-economics-negative-churn/" target="_blank">if your collective customer LTV is three times your collective CAC</a>). 
                                                </p>
                                                <p class="ca-content__desc">
                                                    But it’s also true that these kinds of definitions leave much to be desired: they’re isolated, lagging indicators that fail to provide a holistic picture of what’s working, what’s not, and why.
                                                </p>
                                            </li>

                                            <li class="ca-content__item">
                                                <h5 class="ca-content__subheading">
                                                    The tension with properties
                                                </h5>
                                                <p class="ca-content__desc">
                                                    It’s true that growth, across the board, is associated with the same properties. <a href="https://blog.asmartbear.com/scale.html" target="_blank">Scalability, repeatability, and predictability</a> are  forces that divide companies that crack under the pressure of scale from companies that are robust enough to push through  growing pains into sustainability.
                                                </p>
                                                <p class="ca-content__desc">
                                                    But it’s also true that  properties, like definitions, fail to tell you what’s causing them to work and how.
                                                </p>
                                                <p class="ca-content__desc">
                                                    Scalability might be driving growth but what’s going right enough to cause it? Where? Sometimes it’s even <a href="https://venturebeat.com/2015/01/19/why-is-messaging-app-slack-exploding-founder-i-have-no-f-king-idea/" target="_blank">hard for founders to pinpoint why a product is blowing up.</a> 
                                                </p>
                                            </li>

                                            <li class="ca-content__item">
                                                <h5 class="ca-content__subheading">
                                                    The tension of blueprints
                                                </h5>
                                                <p class="ca-content__desc">
                                                    It’s true that when a company is growing, you can tell. When Shopify jumps from making 205 million to 389 million in 365 days, you can <a href="https://sumo.com/stories/shopify-marketing" target="_blank">break down what they might have done differently</a> over the last year. When Slack’s trial to paid conversion rate hits 30%, <a href="https://labs.openviewpartners.com/slack-saas-growth-strategy/#.WeeBJRNSwWo" target="_blank">you can do the same</a>.
                                                </p>
                                                <p class="ca-content__desc">
                                                    But you can look at a company like Shopify or Slack, tell that they’re growing, figure out the blueprint they used to do it, and still be in square one because your context is different from theirs.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <p class="ca-content__desc">
                                        Context seems to be the  recurring cause of tension in the concept of growth, and rightly so. Companies have different goals and different amounts of resources (time, people, and money) to meet them. 
                                    </p>
                                    <p class="ca-content__desc">
                                        Growth advice that doesn’t account for this kind of context might be good enough for a win here and there but not much more.
                                    </p>
                                </section>
                                <!-- ============================================================
                                Section one end 
                                ============================================================= -->
                                <!-- ============================================================
                                Section two start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative" id="levers-account-for-context">
                                    <h3 class="ca-content__heading">
                                        ‘Levers’ account for context
                                    </h3>
                                    <p class="ca-content__desc">
                                        Brian Balfour, talking about <a href="https://brianbalfour.com/essays/traction-vs-growth" target="_blank">the difference between gaining traction and pushing scale in SaaS,</a> highlights what he calls ‘growth levers’ or strengths that can be leveraged for growth.
                                    </p>
                                    <p class="ca-content__desc">
                                        Growth levers have got more going for them than isolated strategies, properties or definitions:
                                    </p>
                                    <div class="ca-content__offset">
                                        <ul class="ca-content__list">
                                            <li class="ca-content__item">
                                                <strong>They acknowledge context.</strong> The only way that you can apply a growth lever you read about is to make it your own, factoring your own goals and resources into the picture.
                                            </li>
                                            <li class="ca-content__item">
                                                <strong>They can only be derived from what’s working.</strong> If a revenue or a retention metric is doing well, and you can identify why, you’ve identified an advantage that you can exploit.
                                            </li>
                                        </ul>
                                    </div>

                                    <p class="ca-content__desc">
                                        Growth levers can be diverse: 
                                    </p>

                                    <div class="ca-content__offset">
                                        <ul class="ca-content__list">
                                            <li class="ca-content__item">
                                                <strong>They can be what sets you apart from your competition.</strong> Whether that is building a product for a certain kind of customer (<a href="https://growthhackers.com/growth-studies/how-stripe-marketed-to-developers-so-effectively" target="_blank">Stripe started out building for developers, Snapchat built for teens</a>), chasing a niche in the market only you can see, or something you’re doing — your support or your in-app notifications — that is differentiating you from people who offer the same service.
                                            </li>
                                            <li class="ca-content__item">
                                                <strong>They can be a pricing or market strategy.</strong> You can derive growth levers from the market you’re chasing (RedHat grew by <a href="https://growthhackers.com/growth-studies/red-hat-how-they-developed-a-big-idea-that-shook-up-a-huge-market" target="_blank">going after a huge market with a big idea</a> rather than a niche), the  acquisition channels or word-of-mouth you’re building, (NastyGal <a href="https://growthhackers.com/growth-studies/nasty-gal-kills-it-ecommerce-how-they-did-it" target="_blank">leveraged eBay</a> to reach their audience) or the monetization strategy you’re using for your product. 
                                            </li>
                                            <li class="ca-content__item">
                                                <strong>They can  be the unique way you’re solving a problem.</strong> Take Spotify and Apple, for example. Both were really competing against piracy in the music industry. Apple solved for it with a pay-cents-per-track model, but ultimately, it was Spotify leveraging their powerful freemium listen-as-much-as-you-want model that <a href="https://techcrunch.com/2017/07/31/spotify-vs-apple-music/" target="_blank">beat Apple Music out in terms of paid subscriber numbers.</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <p class="ca-content__desc">
                                       Growth levers are specific, acknowledge context, and play on your strengths, which definitely make them practical tools that you can work with. 
                                    </p>

                                    <p class="ca-content__desc">
                                        But they’re not the whole picture
                                    </p>

                                    <p class="ca-content__desc">
                                        Brian illustrates this point beautifully with a growth curve in his slideshare, <a href="https://www.slideshare.net/heavybit/brian-balfour-building-a-growth-machine" target="_blank">Building A Growth Machine</a>: 
                                    </p>

                                    <div class="ca-content__figure">
                                        <img src="/static/website/version/images/resources/guides/cb-account-for-context.png" alt="" class="img-responsive">
                                    </div>

                                    <p class="ca-content__desc">
                                        Growth levers aren’t silver bullets.
                                    </p>

                                    <p class="ca-content__desc">
                                        The only way to leverage them is to think about the systems that they are embedded in.
                                    </p>
                                </section>
                                <!-- ============================================================
                                Section two end 
                                ============================================================= -->
                                <!-- ============================================================
                                Section three start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative" id="growth-levers-dont-exist-in-a-vacuum">
                                    <h3 class="ca-content__heading">
                                        Growth levers don’t exist in a vacuum
                                    </h3>
                                </section>
                                <!-- ============================================================
                                Section three end 
                                ============================================================= -->
                            </div>
                            <!-- ================================================================
                            Fixed right content end 
                            ================================================================= -->
                        </div>

                        <!-- ====================================================================
                        Section two quote start
                        ===================================================================== -->
                        <div class="row">
                            <!-- ================================================================
                            Fixed left nav Start 
                            ================================================================= -->
                            <div class="col-md-4 col-lg-4"></div>
                            <!-- ================================================================
                            Fixed left nav end 
                            ================================================================= -->
                            <div class="col-sm-8 col-sm-offset-4 col-md-7 col-md-offset-1 col-lg-6 col-lg-offset-2">
                                <!-- ============================================================
                                Section two quote start
                                ============================================================= -->
                                <blockquote class="ca-blockquote revealOnScroll" data-animate='fadeInRight' style="margin-top: 42px;">
                                    <p>
                                        You think that because you understand “one” that you must therefore understand “two” because one and one make two. But you forget that you must also understand “and.”
                                    </p>
                                    <p>
                                        <strong>&mdash; Rumi</strong>
                                    </p>
                                </blockquote>
                                <!-- ============================================================
                                Section two quote end
                                ============================================================= -->
                            </div>
                        </div>
                        <!-- ====================================================================
                        Section two quote End
                        ===================================================================== -->
                        <div class="row">
                            <!-- ================================================================
                            Fixed left nav Start 
                            ================================================================= -->
                            <div class="col-sm-2 col-md-3 col-lg-4">
                                <div class="hidden-xs hidden-sm hidden-md"></div>
                            </div>
                            <!-- ================================================================
                            Fixed left nav end 
                            ================================================================= -->
                            <!-- ================================================================
                            Fixed right content start 
                            ================================================================= -->
                            <div class="col-sm-8 col-sm-offset-1 col-md-7 col-md-offset-1 col-lg-6 col-lg-offset-1">
                                <section class="ca-content"></section>
                                <!-- ============================================================
                                Section three start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative">
                                    <p class="ca-content__desc">
                                        Donella Meadows, in her book Thinking in Systems, describes a system as “a set of things ―  people, cells, molecules, or whatever — interconnected in such a way that they produce their own pattern of behavior over time.”
                                    </p>
                                    <p class="ca-content__desc">
                                        There are examples of systems all around us. They’re so easy to see because of the tangible elements that compose them and the patterns they produce.
                                    </p>
                                    <p class="ca-content__desc">
                                        <strong>
                                            The digestive system is made up of teeth and tissue, acid and bacteria, muscle and movement, interconnected to digest food in a pattern of nutrition. The university system is made up of deans and professors, freshmen and textbooks, parties and student debt, interconnected to produce learning in a pattern of progress.
                                        </strong>
                                    </p><br>

                                    
                                    <h4 class="ca-content__subheading">Growth levers are part of growth systems</h4>
                                    <p class="ca-content__desc">
                                       Looking at Brian’s growth curve, it’s easy to think of SaaS growth in the same way — a set of things (your product, people, their mindsets, functions, and tools) interconnected in a way that produces (and sustains) patterns of growth behavior over time.
                                    </p>
                                    <p class="ca-content__desc">
                                       <em>‘Patterns that arise from the way elements are connected’</em> is the link between a growth lever and actual growth.
                                    </p>
                                    <p class="ca-content__desc">
                                       Here’s how.
                                    </p>
                                    <p class="ca-content__desc">
                                       <strong>
                                           Patterns make it easy to distinguish strengths (growth levers) > When you can identify strengths, you can create even stronger patterns around them so your wins are more and more consistent (than sporadic) over time > Growth.
                                       </strong>
                                    </p>
                                    <div class="ca-content__offset">
                                        <h5 class="ca-content__subheading">In essence:</h5>
                                        <ul class="ca-content__list">
                                            <li class="ca-content__item">
                                                If you see a growth lever that’s working for someone else and want to try to it out, look at the patterns that exist in your growth system. How might the lever fit into them? What new patterns will emerge? The only way to fit a growth lever into your business is to experiment with it. 
                                            </li>
                                            <li class="ca-content__item">
                                                Patterns help identify new growth levers. Looking at the patterns you have at the moment, consciously experimenting with them, creating new ones and experimenting with those, and keeping an eye on the numbers to see what’s working.
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                                <!-- ============================================================
                                Section three end 
                                ============================================================= -->
                                <!-- ============================================================
                                Section four start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative" id="systems-are-made-of-subsystems">
                                    <h3 class="ca-content__heading">
                                        Systems are made of subsystems
                                    </h3>
                                    <p class="ca-content__desc">
                                        The question, now, is: How do you start experimenting with growth levers?
                                    </p>
                                    <p class="ca-content__desc">
                                        Seeing growth as a system can be overwhelming because of the number of moving parts, feedback loops, and emerging patterns to think about.
                                    </p>
                                    <p class="ca-content__desc">
                                        The answer is to break the growth system down.
                                    </p><br>

                                    <h4 class="ca-content__subheading">
                                            Why it is necessary to see a system as made of subsystems
                                    </h4>
                                    <p class="ca-content__desc">
                                       Thomas Starr and Timothy Allen tell the story of two watchmakers, Hora and Tempus in their book, <em>Hierarchy Perspectives.</em> 
                                    </p>
                                    <p class="ca-content__desc">
                                       Both Hora and Tempus were fine craftsmen who developed watches that were composed of a thousand distinct parts.
                                    </p>
                                    <p class="ca-content__desc">
                                       Both their shops were filled with customers for a while but over time Hora got more and more customers and Tempus got less and less.
                                    </p>
                                    <p class="ca-content__desc">
                                        Tempus put his watches together in such a way that if he was distracted halfway through building one — to answer the door, for example — all the pieces fell apart, and he had to start from scratch. The more customers he got, the fewer watches he finished.
                                    </p>
                                    <p class="ca-content__desc">
                                        Hora did things a little differently. Though his watches were composed of the same number of pieces, he built in tens. He would build a group of ten elements that he would then organize into a larger subsystem, ten subsystems made the whole watch. Whenever he was interrupted, Hora didn’t have to start from scratch and lost only a small part of his work. 
                                    </p><br>


                                    <h4 class="ca-content__subheading">
                                        What do the subsystems of a growth system look like?
                                    </h4>
                                    <p class="ca-content__desc">
                                        The story of Hora and Tempus shows that subsystems can help organise patterns. To build a pattern in a subsystem makes it less susceptible to disruption.
                                    </p>
                                    <p class="ca-content__desc">
                                        What could the subsystems of a SaaS growth system look like, though?
                                    </p>
                                    <p class="ca-content__desc">
                                        <strong>
                                            In SaaS, the question of building subsystems is closely tied to the question of how you’re going to measure their effectiveness.
                                        </strong>
                                    </p>
                                    <p class="ca-content__desc">
                                        The answer lies, as it does with most things in SaaS, with metrics. And metrics begin and end with the customer lifecycle — acquisition, activation, retention, revenue, and referral (from <a href="https://www.slideshare.net/dmc500hats/startup-metrics-for-pirates-long-version" target="_blank">Dave McClure</a>). 
                                    </p>
                                    <p class="ca-content__desc">
                                        Let them be our subsystems. 
                                    </p>
                                    <p class="ca-content__desc">
                                        <strong>An acquisition pattern might look like this:</strong> <em>User discovers top of the funnel blog post on Google > user reads the post > user visits pricing page > user signs up for free trial</em> 
                                    </p>
                                    <p class="ca-content__desc">
                                        Or
                                    </p>
                                    <p class="ca-content__desc">
                                        <em>User tries out a free tool you’ve made > user signs up for a product demo (three months later)</em>
                                    </p>
                                    <p class="ca-content__desc">
                                        <strong>A retention pattern might look like this:</strong> <em>user’s payment fails > payment failure email sent out  > card is retried and payment is automatically recovered > customer is successfully retained</em> 
                                    </p>
                                    <p class="ca-content__desc">
                                        Or
                                    </p>
                                    <p class="ca-content__desc">
                                        <em>User’s engagement inside the app is at an all time low > user signs up for webinar you’ve put together on customer success > user’s engagement rises after the webinar</em> 
                                    </p>
                                    <p class="ca-content__desc">
                                        The options, permutations, and combinations are endless across AARRR (acquisition, activation, retention, revenue, and referral). 
                                    </p>
                                    <p class="ca-content__desc">
                                        And experimenting with them is the only way to find out whether a growth lever (like <strong>freemium</strong> vs <strong>free trial</strong> in the acquisition subsystem or <strong>transactional email campaigns</strong> vs <strong>customer success webinars</strong> in the retention subsystem) is working or not.
                                    </p>
                                    <p class="ca-content__desc">
                                        A growth lever is only as powerful as the pattern it is embedded in.
                                    </p>
                                </section>
                                <!-- ============================================================
                                Section four end 
                                ============================================================= -->
                                <!-- ============================================================
                                Section five start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative" id="real-world-example-freemium">
                                    <h3 class="ca-content__heading">
                                        Real world example: Freemium
                                    </h3>
                                    <p class="ca-content__desc">
                                        Take a growth lever that accelerated growth for <a href="https://growthhackers.com/growth-studies/what-ignited-tinders-explosive-growth" target="_blank">Spotify</a>, SurveyMonkey, and Prezi: the freemium model.
                                    </p>
                                    <p class="ca-content__desc">
                                        It didn’t for <a href="https://baremetrics.com/blog/freemium-saas-implode" target="_blank">Baremetrics</a>, <a href="https://www.forbes.com/sites/taylorbuley/2010/08/20/free-of-freemium-things-are-starting-to-look-up-at-ning/#5ffba376ad99" target="_blank">Ning</a>, and <a href="http://thestartupfoundry.com/2011/03/21/from-freemium-to-paid-to-the-cover-of-hacker-monthly-the-bidsketch-story/" target="_blank">Bidsketch</a>. 
                                    </p>
                                    <p class="ca-content__desc">
                                        The answers to why aren’t lurking within the freemium model itself but in the different systems, subsystems and connections that it was operating within.
                                    </p><br>



                                    <h4 class="ca-content__subheading">Baremetrics</h4>
                                    <p class="ca-content__desc">
                                        Let’s take Baremetrics first. When they initially <a href="https://baremetrics.com/blog/freemium-saas-implode" target="_blank">implemented a Freemium plan</a>, users flocked to it. Over a thousand new accounts were created in the eleven weeks after they announced it. 
                                    </p>
                                    <p class="ca-content__desc">
                                        The problem was that with a low free-to-paid conversion rate, they didn’t have the infrastructure to support so many new users.
                                    </p>
                                    <p class="ca-content__desc">
                                        <em>“We were dealing with day-after-day and week-after-week of progressively more complex server and performance issues as we just kept piling on the new free accounts.”</em> Josh Pigford, the founder of Baremetrics writes.
                                    </p>
                                    <p class="ca-content__desc">
                                        <em>“To make matters worse, we were so focused on putting out server fires, we found ourselves making zero progress on the product itself.”</em> 
                                    </p>
                                    <p class="ca-content__desc">
                                        This created issues in their retention subsystem. Churn followed as users faced delayed data, server downtime, sub-optimal support and a stagnant product.
                                    </p>
                                    <p class="ca-content__desc">
                                        They solved the problem by ditching freemium and switching to a fourteen day free trial — they stopped processing data if customers didn’t upgrade in fourteen days.
                                    </p><br>




                                    <h4 class="ca-content__subheading">Ning</h4>
                                    <p class="ca-content__desc">
                                        Ning has a similar story: Freemium worked beautifully for their acquisition funnel — pulling in over three hundred thousand new users.
                                    </p>
                                    <p class="ca-content__desc">
                                        The problem was that Ning was converting only 5% of it’s free users into paid customers.
                                    </p>
                                    <p class="ca-content__desc">
                                        <em>“Low conversion rates aren't necessarily catastrophic”</em>, Taylor Buley writes, <a href="https://www.forbes.com/sites/taylorbuley/2010/08/20/free-of-freemium-things-are-starting-to-look-up-at-ning/#69e626e06ad9" target="_blank">covering Ning’s story for Forbes</a>, <em>“but Ning's freemium freeriders sucked down its most expensive resources — headcount, bandwidth and infrastructure — at a rate Ning could not support."</em>
                                    </p>
                                    <p class="ca-content__desc">
                                        Ning’s activation subsystem was suffering.
                                    </p>
                                    <p class="ca-content__desc">
                                        They solved the problem in two ways:
                                    </p>
                                    <div class="ca-content__offset">
                                        <ul class="ca-content__list">
                                            <li class="ca-content__item">
                                                A new pricing strategy that catered more to the B2B segment rather than the B2C and (a  monetization revamp)
                                            </li>
                                            <li class="ca-content__item">
                                                Abandoning Freemium forcing free users to upgrade or else. (an activation revamp) 
                                            </li>
                                        </ul>
                                    </div><br>



                                    <h4 class="ca-content__subheading">Bidsketch</h4>
                                    <p class="ca-content__desc">
                                        Bidsketch’s problem was worse — their conversion rates were around 1%.
                                    </p>
                                    <p class="ca-content__desc">
                                        <em>“My user base was growing fast but the money was barely trickling in.”</em> Ruben Gamez, the founder, writes.
                                    </p>
                                    <p class="ca-content__desc">
                                        What separates Bidsketch from the other two companies we’re looking at is how they experimented before they decided <a href="https://www.softwarebyrob.com/2010/08/18/why-free-plans-dont-work/" target="_blank">Freemium wasn’t for them.</a>
                                    </p>
                                    <p class="ca-content__desc">
                                        Ruben tried:
                                    </p>
                                    <div class="ca-content__offset">
                                        <ul class="ca-content__list">
                                            <li class="ca-content__item">
                                                Premium features for fifteen days before users got a downgrade to the freemium plan.
                                            </li>
                                            <li class="ca-content__item">
                                                Email campaigns pushing users towards paid plans and
                                            </li>
                                            <li class="ca-content__item">
                                                A smaller feature set on the freemium plan.
                                            </li>
                                        </ul>
                                    </div>
                                    <p class="ca-content__desc">
                                        None of the changes had a big impact.
                                    </p>
                                    <p class="ca-content__desc">
                                        Ruben's user base continued to grow just as his conversion rates continued to plummet.
                                    </p>
                                    <p class="ca-content__desc">
                                        It got a point where Ruben just up and removed the free plan from his pricing page. He didn’t tell anyone, he just did it. 
                                    </p>
                                    <p class="ca-content__desc">
                                        And things started to move in the opposite direction. A five minute change led to 8x more paid conversions in the following week, and 10x more conversion in the rest of the month.
                                    </p><br>


                                    <h4 class="ca-content__subheading">Learnings</h4>
                                    <p class="ca-content__desc">
                                        We looked at three companies that experimented with a growth lever in their acquisition subsystems (freemium worked, in all cases, pulling users in) only to find that there were consequences in their activation, retention, and monetization subsystems that they just couldn’t support. 
                                    </p>
                                    <p class="ca-content__desc">
                                        Baremetrics’ Josh Pigford, reflecting back on how he could have experimented with Freemium better, admits that Freemium could have worked for them with a little tweaking. With limited data imported into the system on the Freemium plan, for example. Or a full feature trial to begin with followed by a downgrade to the freemium plan. They just didn’t have the time to run the experiments they wanted to.
                                    </p>
                                    <p class="ca-content__desc">
                                        Bidsketch actually ran the experiments that Josh wanted to at Baremetrics. All it showed Ruben, though, was that freemium wasn’t working for his revenue. His conversion rates went up without it. 
                                    </p>
                                    <p class="ca-content__desc">
                                        Ning was working with a better conversion rate than Bidsketch, but they had to do more than abandon freemium to get out of the revenue slump it created — they needed to pivot towards a new customer segment and aggressively usher as many of their free users as they could towards a paid plan. 
                                    </p>
                                    <p class="ca-content__desc">
                                        These stories leave a lesson and a question in their wake.
                                    </p>
                                    <p class="ca-content__desc">
                                        The lesson, Ruben Gamez sums up succinctly: <em>“Obviously free plans have worked well for companies like Wufoo, MailChimp, and FreshBooks, so we know they can work. But the problem is that we’re not them. We need to stop blindly copying them and start thinking about ways to bring in revenue.”</em>
                                    </p>
                                    <p class="ca-content__desc">
                                        The question: Could thinking in systems have helped these companies identify the growth levers that ended up working for them faster?
                                    </p>
                                </section>
                                <!-- ============================================================
                                Section five end 
                                ============================================================= -->
                                <!-- ============================================================
                                Section six start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative" id="how-to-experiment-with-growth-levers-faster">
                                    <h3 class="ca-content__heading">
                                        How to experiment with growth levers faster
                                    </h3>
                                    <p class="ca-content__desc">
                                        That businesses have had varying degrees of success with Freemium is as crystal clear an illustration as I can hope for: growth levers like Freemium are only as good as the patterns they are creating in your growth system (or subsystem). 
                                    </p>
                                    <p class="ca-content__desc">
                                        The key to creating growth with growth levers, in light of this, seems to be: how effectively and how quickly you can experiment with patterns, move on from ones that aren’t working, and ramp up ones that are. 
                                    </p>
                                    <p class="ca-content__desc">
                                        <strong>
                                            If Baremetrics, Ning, and Bidsketch could have run faster acquisition, monetization, and retention experiments, they might have caught on that Freemium wasn’t working for them earlier than they did. Better yet, they could ramped down on patterns that were not working and sidestepped freemium altogether. 
                                        </strong>
                                    </p>
                                    <p class="ca-content__desc">
                                        The problem is that experimenting with patterns is difficult. Extremely difficult is you’re working with large teams, complex tools, and droves of customers.
                                    </p><br>



                                    <h4 class="ca-content__subheading">The problem: Long, unexpected loops create slow, eccentric experiments</h4>
                                </section>
                                <!-- ============================================================
                                Section six end 
                                ============================================================= -->
                            </div>
                            <!-- ================================================================
                            Fixed right content end 
                            ================================================================= -->
                        </div>
                        <!-- ====================================================================
                        Section three quote start
                        ===================================================================== -->
                        <div class="row">
                            <!-- ================================================================
                            Fixed left nav Start 
                            ================================================================= -->
                            <div class="col-md-4 col-lg-4"></div>
                            <!-- ================================================================
                            Fixed left nav end 
                            ================================================================= -->
                            <div class="col-sm-8 col-sm-offset-4 col-md-7 col-md-offset-1 col-lg-6 col-lg-offset-2">
                                <!-- ============================================================
                                Section two quote start
                                ============================================================= -->
                                <blockquote class="ca-blockquote revealOnScroll" data-animate='fadeInRight' style="margin-top: 42px;">
                                    <p>
                                        “Too often, when people think of growth, they say ‘I could dial up leads’ and ‘I can hire sales people’. They don’t think of all the other things that go into operationally supporting those leads, converting that revenue, and carrying that revenue successfully forward.” 
                                    </p>
                                    <p>
                                        <strong>&mdash; Suneet Bhatt, Chief Growth Officer, Help Scout </strong>
                                    </p>
                                </blockquote>
                                <!-- ============================================================
                                Section two quote end
                                ============================================================= -->
                            </div>
                        </div>
                        <!-- ====================================================================
                        Section three quote End
                        ===================================================================== -->
                        <div class="row">
                            <!-- ================================================================
                            Fixed left nav Start 
                            ================================================================= -->
                            <div class="col-sm-2 col-md-3 col-lg-4">
                                <div class="hidden-xs hidden-sm hidden-md"></div>
                            </div>
                            <!-- ================================================================
                            Fixed left nav end 
                            ================================================================= -->
                            <!-- ================================================================
                            Fixed right content start 
                            ================================================================= -->
                            <div class="col-sm-8 col-sm-offset-1 col-md-7 col-md-offset-1 col-lg-6 col-lg-offset-1">
                                <section class="ca-content"></section>
                                <!-- ============================================================
                                Section three start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative">
                                    <p class="ca-content__desc">
                                        Let’s stick with Bidsketch a little longer. Say, theoretically, Ruben is experimenting with a coupon to boost his conversion rates from freemium to paid. 
                                    </p>
                                    <p class="ca-content__desc">
                                        Let's say he wants to offer his highly engaged users a discount to sign up for a paid plan.
                                    </p>
                                    <p class="ca-content__desc">
                                        Apart from the direct coupon calls he has to make (how large the discount ought to be, how long it should last), he also has to decide what tool he can use to run the experiment as quickly and as effectively as he can. After all, this coupon experiment is just one in many that he has (to try to find out if freemium is working for him or not). 
                                    </p>
                                    <p class="ca-content__desc">
                                        Let’s say he chooses a coupon management system to get his coupon off the ground — ‘it will help me send out the coupon to the segment I want, track usage, and assimilate learnings’, he thinks.
                                    </p>
                                    <p class="ca-content__desc">
                                        He’s right. It will.
                                    </p>
                                    <p class="ca-content__desc">
                                       The problem, he realizes as he’s evaluating coupon management systems, is all the code he has to write to tie coupons back to his subscriptions.
                                    </p>
                                    <p class="ca-content__desc">
                                        If Julie uses the coupon he sends her, her subscription information will have to be changed, her invoices will have to reflect the coupon, and her adjusted numbers will have to reflect in the monthly reports.
                                    </p>
                                    <p class="ca-content__desc">
                                        Can the code be avoided?
                                    </p>
                                    <p class="ca-content__desc">
                                        It will depend, he realizes, on how well he can set up a back and forth between Julie’s customer account, his billing system, his coupon management system, his reporting system, and his accounting system.
                                    </p>
                                    <p class="ca-content__desc">
                                        <em>
                                            There is a long, unexpected loop between sending the coupon out and actually feeding the changes it causes back into his subscriptions. 
                                        </em>
                                    </p><br>


                                    <h4 class="ca-content__subheading">The solution: automate, automate, automate</h4>
                                    <p class="ca-content__desc">
                                        The problem with long loops is that they inevitably mean slower experiments. 
                                    </p>
                                    <p class="ca-content__desc">
                                        It’s going to take that much longer to see if this coupon experiment is working if Ruben has to put all that effort into making sure that his subscriptions can keep up with the changes.
                                    </p>
                                    <p class="ca-content__desc">
                                        The same holds for experiments that you run in your subsystems — there is effort that you need to put in to close the loops on each of them.
                                    </p>
                                    <p class="ca-content__desc" style="color: #000">
                                        The answer to long loops is better automation.
                                    </p>
                                    <p class="ca-content__desc">
                                        Imagine Ruben could send his coupon out without a second thought, with a tool that would <em>close the loop without manual intervention.</em>
                                    </p>
                                    <p class="ca-content__desc">
                                        <strong>Better automation can be more than the facilitator of experiments, it can be the usher of growth.</strong>
                                    </p>
                                    <p class="ca-content__desc">
                                        Now, there are many tools that can automate processes for you so you’re looking at smaller loops and faster experiments — help desks help close the loop on customer requests, marketing automation software helps <a href="http://www.pardot.com/buyer-journey/" target="_blank">close the loop on the buyer’s journey</a>.
                                    </p>
                                    <p class="ca-content__desc">
                                        The rest of this guide will make a case for how one of these tools — a billing platform — can help close the loop on experiments across acquisition, activation, monetization, and retention.
                                    </p>
                                    <p class="ca-content__desc">
                                        <em>
                                            Why billing platforms, though?
                                        </em>
                                    </p>
                                    <p class="ca-content__desc">
                                        Four reasons:
                                    </p>

                                    <div class="ca-content__offset">
                                        <ul class="ca-content__list">
                                            <li class="ca-content__item">
                                                <p class="ca-content__desc">
                                                    <strong>It’s reach in product and pricing:</strong> Imagine Mark’s subscription renews on the first of every month. But he wants an upgrade to a higher paying plan immediately, the fifteenth. When do you charge him? And how? 
                                                </p>
                                                <p class="ca-content__desc">
                                                    It’s impossible to figure out what your options are without considering what your billing platform can and can’t support. Does it support changing the renewal date of an existing subscription? Does it support prorating the upgrade, if you want to continue billing Mark on the first? Did you build your product with volume or tiered pricing in mind?
                                                </p>
                                                <p class="ca-content__desc">
                                                    <strong><a href="https://www.chargebee.com/blog/scaling-saas-billing/" target="_blank">Billing questions are subscription questions in disguise</a></strong>. Subscription questions are product and customer experience questions in disguise.
                                                </p>
                                            </li>
                                            <li class="ca-content__item">
                                                <p class="ca-content__desc">
                                                    <strong>It’s reach in customer care:</strong> If you’ve ever had the words ‘technical difficulty’ ruin your experience of something, you know how important this question is to the online business. 
                                                </p>
                                                <p class="ca-content__desc">
                                                    Hopefully, your billing platform kicks in to do some immediate customer care. Inform (with an in-app notification) why the payment might have failed, retry the card in case of a technical difficulty, and modify the subscription in case all efforts at recovery lead to nothing.
                                                </p>
                                            </li>
                                            <li class="ca-content__item">
                                                <p class="ca-content__desc">
                                                    <strong>It’s reach in analytics and reporting:</strong> Changes to subscriptions affect billing cycles, which in turn, affect the formulae you are using to calculate metrics, potential bugs in your reporting code, and the kind of metrics that it makes sense to track at the time. 
                                                </p>
                                            </li>
                                            <li class="ca-content__item">
                                                <p class="ca-content__desc">
                                                    <strong>It’s reach in accounting and finance management:</strong> The connections between billing and accounting are similarly intricate. Between figuring out how much revenue you can recognize each month balanced against your CAC, reconciling payments made from your website with gateway and bank statements, and figuring out what tax you are liable to in every geography you have a presence in, clean books aren’t possible without consistent, timely, and accurate information from your billing platform.  
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <p class="ca-content__desc">
                                        Given this kind of reach, a billing platform can close the long loop on an acquisition experiment like coupons.
                                    </p>
                                    <p class="ca-content__desc">
                                        For Ruben, a billing platform is exactly what he needs for faster experiments. It can segment the customers he wants to send the coupon to, track how many people use it, and rather than end the chapter there, go a step further — change the subscriptions of people who use the coupon, alter the charge on their invoices, and factor the changes into reports.
                                    </p>
                                </section>
                                <!-- ============================================================
                                Section three end 
                                ============================================================= -->
                            </div>
                            <!-- ================================================================
                            Fixed right content end 
                            ================================================================= -->
                        </div>
                    </div>
                </div>
                <!-- =============================================================================
                Contant one end 
                ============================================================================== -->
                <!-- =============================================================================
                Contant four Start 
                ============================================================================== -->
                <div class="l-main__row">
                    <!-- =========================================================================
                    Full page banner Start 
                    ========================================================================== -->
                    <section class="ca-banner ca-banner--md" id="if-your-billing-platform-isnt-accelerating-your-growth-its-impeding-it">
                        <div class="container ca-banner__container" style="background-image: none">
                            <div class="row">
                                <div class="col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-5">
                                    <div class="ca-banner__content">
                                        <h2 class="ca-banner__title revealOnScroll" data-animate='fadeInLeft'>
                                            If your billing platform isn’t accelerating your growth, it’s impeding it
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- =========================================================================
                    Full page banner end 
                    ========================================================================== -->
                    <div class="container">
                        <!-- ====================================================================
                        Sections start
                        ===================================================================== -->
                        <div class="row">
                            <!-- ================================================================
                            Fixed left nav Start 
                            ================================================================= -->
                            <div class="col-sm-2 col-md-3 col-lg-4"></div>
                            <!-- ================================================================
                            Fixed left nav end 
                            ================================================================= -->
                            <!-- ================================================================
                            Fixed right content start 
                            ================================================================= -->
                            <div class="col-sm-8 col-sm-offset-1 col-md-7 col-md-offset-1 col-lg-6 col-lg-offset-1">
                                <!-- ============================================================
                                Section one start 
                                ============================================================= -->
                                <section class="ca-content">
                                    <h4 class="ca-content__subheading" style="color: #202022">
                                        Here’s what we’ve covered so far, in point form:
                                    </h4>
                                    <div class="ca-content__offset ca-content__offset-alt">
                                        <ul class="ca-content__list">
                                            <li class="ca-content__item">
                                                Unhacking growth is seeing growth as more than an isolated strategy, hack, or blueprint. It is seeing it as a system. A system creates patterns of behavior. The upshot of thinking of growth as a system is that you can use it to create patterns of growth behavior.
                                            </li>
                                            <li class="ca-content__item">
                                                Growth levers are a powerful tool that you can ‘leverage’ for growth. The key to successful implementation is to pick the right lever for your growth system (picking the wrong one can lead to deadly results).
                                            </li>
                                            <li class="ca-content__item">
                                                How do you find the right one? Two ways: you can look at existing patterns and figure out what’s working. Or you can implement a lever that’s worked for someone else by creating patterns in your own growth system that can drive it.
                                            </li>
                                            <li class="ca-content__item">
                                                The key to growth, in light of these three points, seems to be experimenting with patterns as fast as you can. This can be difficult though - patterns in SaaS businesses come with loops that are hard to close (how they will tie back to your subscription and customer experience).
                                            </li>
                                            <li class="ca-content__item">
                                                You can experiment with patterns faster by automating as much as you can in your business. The upshot of this is you can initiate a pattern without worrying about the loop.
                                            </li>
                                            <li class="ca-content__item">
                                                In this regard, a billing platform can enable better automation, faster experiments, and more growth levers.
                                            </li>
                                        </ul>
                                    </div><br>
                                    <p class="ca-content__desc">
                                        This section builds on how this is possible. It lays out how a billing platform impacts your customer lifecycle and how it might enable patterns and growth levers. 
                                    </p>
                                    <p class="ca-content__desc">
                                        <strong>I would go so far as to argue that without these features your billing platform is standing in the way of your identifying which growth levers are working for you, and so impeding your growth.</strong>
                                    </p>
                                </section>
                                <!-- ============================================================
                                Section one end 
                                ============================================================= -->
                                <!-- ============================================================
                                Section two start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative" id="acquisition">
                                    <h3 class="ca-content__heading">
                                        Acquisition
                                    </h3>
                                </section>
                            </div>
                            <!-- ================================================================
                            Fixed right content end 
                            ================================================================= -->
                        </div>
                        <div class="row">
                            <!-- ================================================================
                            Fixed left nav Start 
                            ================================================================= -->
                            <div class="col-md-4 col-lg-4"></div>
                            <!-- ================================================================
                            Fixed left nav end 
                            ================================================================= -->
                            <div class="col-sm-8 col-sm-offset-4 col-md-7 col-md-offset-1 col-lg-6 col-lg-offset-2">
                                <!-- ============================================================
                                Section two quote start
                                ============================================================= -->
                                <blockquote class="ca-blockquote revealOnScroll animate fadeInRight" data-animate="fadeInRight" style="margin-top: 42px;">
                                    <p>
                                        [An external billing platform] has easily contributed to a third of our conversions. They've truly helped us open up to the global market, and drastically reduced our development cycles.
                                    </p>
                                    <p>
                                        <Strong>&mdash; Fred Stutzman, Freedom</Strong>
                                    </p>
                                </blockquote>
                                <!-- ============================================================
                                Section two quote end
                                ============================================================= -->
                            </div>
                        </div>
                        <div class="row">
                            <!-- ================================================================
                            Fixed left nav Start 
                            ================================================================= -->
                            <div class="col-sm-2 col-md-3 col-lg-4"></div>
                            <!-- ================================================================
                            Fixed left nav end 
                            ================================================================= -->
                            <!-- ================================================================
                            Fixed right content start 
                            ================================================================= -->
                            <div class="col-sm-8 col-sm-offset-1 col-md-7 col-md-offset-1 col-lg-6 col-lg-offset-1">
                                <section class="ca-content"></section>
                                <!-- ============================================================
                                Section two start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative">
                                    <p class="ca-content__desc">
                                        The patterns that you build in the initial touchpoints that your customers have with your company can greatly affect how many of them give your product a shot. A billing platform can help you experiment with activation by allowing for 
                                    </p>
                                    <div class="ca-content__offset">
                                        <ul class="ca-content__list">
                                            <li class="ca-content__item">
                                               Coupon management, so you can experiment with patterns around promotions, retarget customers who visited your pricing page and left, and discounts on your pricing or checkout page.
                                           </li>
                                           <li class="ca-content__item">
                                               Additional payment options, so you can experiment with customer segments and geographies. Alipay and UnionPay are incredibly popular in Asian markets, while most of Europe prefers direct debit over using a credit card like customers from the US and Canada.
                                           </li>
                                           <li class="ca-content__item">
                                               Experiments around your checkout pages, so you can optimize them for better conversion. From security seals, to the essential details you need to collect, and the right redirect after checkout is over. Here are a <a href="https://blog.kissmetrics.com/40-checkout-page-strategies/" target="_blank">few checkout page tactics that you can try on for size.</a> 
                                           </li>
                                           <li class="ca-content__item">
                                               Experiments with patterns around trial — from how long your trials are (businesses with annual plans have discovered that longer trials convert better than shorter ones, B2B business have shorter trial rates than their B2C counterparts) to whether you can accommodate a customer who asks for an extension or provide a paid add-on service mid-trial. This could make or break the freemium model (if you’re trying that growth lever out).
                                           </li>
                                        </ul>
                                    </div>
                                </section>
                                <!-- ============================================================
                                Section two end 
                                ============================================================= -->
                                <!-- ============================================================
                                Section three start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative" id="activation-and-retention">
                                    <h3 class="ca-content__heading">
                                        Activation and Retention
                                    </h3>
                                    <p class="ca-content__desc">
                                        If your activation patterns are working, there’s no doubt that they’ll contribute to your retention. A huge part of retention, however, is playing with the patterns that allow you to build better relationships with your customers.
                                    </p>
                                    <p class="ca-content__desc">
                                        Your billing platform, tasked with sending out transaction communication, and ushering a customer through the checkout experience, can initiate beginnings. <a href="http://www.ellisjones.com.au/wp-content/uploads/2016/10/Email-Marketing-Metrics-Benchmark-Study-2016-IBM.pdf" target="_blank">The median click-through rate for transactional emails</a> is an astounding 4.3%, that’s three times higher than the median for non-transactional emails (1.6%). It makes sense to <a href="https://www.chargebee.com/blog/transactional-emails-ultimate-guide/" target="_blank">leverage them</a>, or at least experiment with the pattern.
                                    </p>
                                    <p class="ca-content__desc">
                                        Your billing platform can also enable experiments with patterns around
                                    </p>
                                    <div class="ca-content__offset">
                                        <ul class="ca-content__list">
                                           <li class="ca-content__item">
                                               A self-management customer portal that allows your customers to manage their subscriptions by themselves, increasing the amount of control they have over changes and translating to a <a href="https://www.chargebee.com/blog/transactional-emails-ultimate-guide/" target="_blank">better customer experience.</a> 
                                           </li>
                                           <li class="ca-content__item">
                                               Multiple currencies and multiple languages. If you’re selling in different countries, communicating with your customers in their own languages will help you experiment with localization as a growth lever to build powerful word of mouth. 
                                           </li>
                                           <li class="ca-content__item">
                                               Customizable invoices and bank statements go a long way as well. Customizing bank statements so your customers can associate their payments to you with your logo or your headline help build your brand in their minds. Invoices that are crystal clear about tax and subscription changes build trust. 
                                           </li>
                                           <li class="ca-content__item">
                                               Most importantly, the subscription flexibility that your billing platform affords will help you experiment with customer requests — whether it’s for an additional payment method, an add-on service in the middle of a subscription term, or the ability to pause and resume a subscription at will.
                                           </li>
                                        </ul>
                                    </div>
                                </section>
                                <!-- ============================================================
                                Section three end 
                                ============================================================= -->
                                <!-- ============================================================
                                Section three start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative" id="revenue-and-monetization">
                                    <h3 class="ca-content__heading">
                                        Revenue and Monetization
                                    </h3>
                                    <div class="ca-content__figure">
                                        <img src="/static/website/version/images/resources/guides/revenue-monetization.png" alt="" class="img-responsive" width="500">
                                    </div>
                                    <p class="ca-content__desc">
                                        Finally, and most importantly (as PriceIntelligently’s chart suggests), your billing platform can help you experiment with your revenue and pricing patterns. Not to mention the revenue that you recover with your billing platform will have huge impacts on your <a href="https://www.chargebee.com/resources/guides/involuntary-churn-payment-failed/" target="_blank">involuntary churn</a>. Every attempt at recovering a payment that has slipped through the cracks results in another happy customer that didn’t have to go out of their way to pay you.  
                                    </p>

                                    <div class="ca-content__offset">
                                        <ul class="ca-content__list">
                                           <li class="ca-content__item">
                                               Pre-dunning emails help you catch failed payments before they happen. They’re also useful if you want to experiment with building relationships or upselling.
                                           </li>
                                           <li class="ca-content__item">
                                               Grandfathering plans allows you to experiment with pricing models so your existing customers aren’t affected by the changes.
                                           </li>
                                           <li class="ca-content__item">
                                               Dunning, or trying an alternative payment method after it fails, is a revenue recovery tactic that drives revenue and retention, a must for companies looking to experiment with patterns around their failed payments.
                                           </li>
                                           <li class="ca-content__item">
                                               Backup gateways sidestep issues that you might have with your payment gateway so that ‘technical difficulties’ are never the cause of your failed payments. You can also use them to experiment with different geographies and currencies, like using a particular gateway for a particular currency so that your accounting is smoother and the numbers are easier to categorize in your accounting system.
                                           </li>
                                           <li class="ca-content__item">
                                               Advance invoices allow you to collect money from your customers upfront, allowing you to experiment with cash flow and <a href="http://www.insightsquared.com/2015/01/saas-billing-why-you-want-upfront-payments/" target="_blank">revenue needs that will accelerate other functions within your business that are working well.</a>
                                           </li>
                                           <li class="ca-content__item">
                                               Fraud filters enable experiments with prepaid cards (you can blacklist them if you see that they’re failing more than credit or debit cards), they allow you to experiment with payment limits, accepting customers from certain geographies, and catching non-payments and chargebacks before they happen.  
                                           </li>
                                        </ul>
                                    </div>
                                </section>
                                <!-- ============================================================
                                Section three end 
                                ============================================================= -->
                            </div>
                            <!-- ================================================================
                            Fixed right content end 
                            ================================================================= -->
                        </div>
                        <!-- ====================================================================
                        Sections end
                        ===================================================================== -->
                    </div>
                </div>
                <!-- =============================================================================
                Contant four End 
                ============================================================================== -->
                <!-- =============================================================================
                Contant five Start 
                ============================================================================== -->
                <div class="l-main__row">
                    <div class="container">
                        <!-- ====================================================================
                        Sections start
                        ===================================================================== -->
                        <div class="row">
                            <!-- ================================================================
                            Fixed left nav Start 
                            ================================================================= -->
                            <div class="col-sm-2 col-md-3 col-lg-4"></div>
                            <!-- ================================================================
                            Fixed left nav end 
                            ================================================================= -->
                            <!-- ================================================================
                            Fixed right content start 
                            ================================================================= -->
                            <div class="col-sm-8 col-sm-offset-1 col-md-7 col-md-offset-1 col-lg-6 col-lg-offset-1">
                                <section class="ca-content"></section> <!-- For dummy Purpose -->
                                <!-- ============================================================
                                Section two start 
                                ============================================================= -->
                                <section class="ca-content" id="conclusion">
                                    <h2 class="ca-content__title">
                                        Conclusion — perfect systems don’t exist 
                                    </h2>
                                </section>
                            </div>
                            <!-- ================================================================
                            Fixed right content end 
                            ================================================================= -->
                        </div>
                        

                        <div class="row">
                            <!-- ================================================================
                            Fixed left nav Start 
                            ================================================================= -->
                            <div class="col-md-4 col-lg-4"></div>
                            <!-- ================================================================
                            Fixed left nav end 
                            ================================================================= -->
                            <div class="col-sm-8 col-sm-offset-4 col-md-7 col-md-offset-1 col-lg-6 col-lg-offset-2">
                                <!-- ============================================================
                                Section two quote start
                                ============================================================= -->
                                <blockquote class="ca-blockquote revealOnScroll animate fadeInRight" data-animate="fadeInRight" style="margin-top: 42px;">
                                    <p>
                                        The world is nonlinear. Trying to make it linear for our mathematical or administrative convenience is not usually a good idea even when feasible, and it is rarely feasible.
                                    </p>
                                    <p>
                                        <Strong>&mdash; Donella Meadows, Thinking in Systems</Strong>
                                    </p>
                                </blockquote>
                                <!-- ============================================================
                                Section two quote end
                                ============================================================= -->
                            </div>
                        </div>



                        <div class="row">
                            <!-- ================================================================
                            Fixed left nav Start 
                            ================================================================= -->
                            <div class="col-sm-2 col-md-3 col-lg-4"></div>
                            <!-- ================================================================
                            Fixed left nav end 
                            ================================================================= -->
                            <!-- ================================================================
                            Fixed right content start 
                            ================================================================= -->
                            <div class="col-sm-8 col-sm-offset-1 col-md-7 col-md-offset-1 col-lg-6 col-lg-offset-1">
                                <section class="ca-content"></section> <!-- For dummy Purpose -->
                                <!-- ============================================================
                                Section two start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative">
                                    <p class="ca-content__desc">
                                        Thinking about growth as a system can be extremely beneficial to your business. It offers a framework for how to build patterns (within each pillar of your customer lifecycle), how to identify growth levers, and how to make sure that all the tools you are using (especially your billing platform) are helping you get the most out of them (with better patterns).
                                    </p>

                                    <p class="ca-content__desc">
                                        Systems are not a perfect model, though. 
                                    </p>

                                    <p class="ca-content__desc">
                                        There’s no such thing as the perfect system.
                                    </p>

                                    <p class="ca-content__desc">
                                        There are limits to organization, boundaries to connection, zany randomness that you may never see coming, nonlinear customer patterns that you will not be able to account for, and threats to team efficiency that can topple something that’s working.
                                    </p>

                                    <p class="ca-content__desc">
                                        Yet, systems can surprise us.
                                    </p>

                                    <p class="ca-content__desc">
                                        Baked into the way they are modelled is the idea of a feedback loop. There might be limits to how resilient the elements in your growth system can be to a disruptive event like a member of your team leaving, or sudden, massive change in the market, but if they are communicating — if one part of your system is responding to what happens in another — there is hope for recovery.
                                    </p>

                                    <p class="ca-content__desc">
                                        As is the idea of evolution. As long as the interconnections exist, the way the elements in a system are connected can change and evolve. Patterns that result can change and evolve, growth levers can evolve too. Nothing is set in stone. The upshot of thinking in systems is that the interconnections will force you to see evolution <a href="http://blog.ncase.me/evolution-not-revolution/" target="_blank">across elements</a> rather than in silos.
                                    </p>

                                    <p class="ca-content__desc">
                                        Finally, systems help put time in perspective. There’s no way <a href="https://brianbalfour.com/essays/traction-vs-growth" target="_blank">to start out with growth levers to leverage</a>. And that’s okay. SaaS growth takes time (considerably less than a regular business, admittedly, but time nonetheless). Systems take time to get off the ground, and experimenting to get in the air. Seeing all the elements and connections together will put that time in perspective so you don’t expect the world too soon.  
                                    </p>

                                    <p class="ca-content__desc">
                                        As Suneet Bhatt reiterates again and again, <a href="http://clarecapital.co.nz/wp-content/uploads/2014/06/14.png" target="_blank">the perfect growth curve</a> does not exist.
                                    </p>

                                    <p class="ca-content__desc">
                                       <em>Systems might not be a perfect model. But what model is?</em>
                                    </p>
                                </section>
                            </div>
                            <!-- ================================================================
                            Fixed right content end 
                            ================================================================= -->
                        </div>
                        <!-- ====================================================================
                        Sections end
                        ===================================================================== -->
                    </div>
                </div>
                <!-- =============================================================================
                Contant five End 
                ============================================================================== -->
            </section>
            <!-- =================================================================================
            Content Part End 
            ================================================================================== -->
        </main>
        <!-- =========================================================================================
        Content Part End 
        ========================================================================================== -->
    </div>
    <!-- ===================================================================
    End: Body Section
    ==================================================================== -->
    <div id="ca-affix-footer">
        <!-- =============================================================================
        Contant six Start 
        ============================================================================== -->
        <div class="l-main__row">
            <div class="container">
                <!-- ====================================================================
                Sections start
                ===================================================================== -->
                <div class="row">
                    <!-- ================================================================
                    Fixed right content start 
                    ================================================================= -->
                    <div class="col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-2">
                        <!-- ============================================================
                        Section one start 
                        ============================================================= -->
                        <!-- <section class="ca-content ca-content--relative">
                            <p class="ca-content__desc">
                                Have suggestions about the guide? Drop us an email at <a href="mailto:delight@chargebee.com">delight@chargebee.com</a>
                            </p>
                        </section> -->
                        <section class="ca-content ca-content--relative">
                            <div class="ca-content__heading" >
                                We've built Chargebee's billing platform with your growth in mind. 
Don't take our word for it, though. 
                            </div>
                            <div class="ca-content__heading" >
                                Sign up for free and take it for a spin.
                            </div><br>
                            <p>
                                <a cn-mark-signup="true" href="/trial-signup/" style="font-weight: bold" class="cb-btn cb-btn--primary cb-btn--shadow cb-btn--suffix cb-btn--lg">Try it out now</a>
                            </p>
                        </section>
                        <!-- ============================================================
                        Section one end 
                        ============================================================= -->
                    </div>
                    <!-- ================================================================
                    Fixed right content end 
                    ================================================================= -->
                </div>
                <!-- ====================================================================
                Sections end
                ===================================================================== -->
            </div>
        </div>
        <!-- =============================================================================
        Contant six End 
        ============================================================================== -->
        <!-- ===================================================================
        Start: Footer Section
        ==================================================================== -->
        <app-footer />
        <!-- ===================================================================
        End: Footer Section
        ==================================================================== -->
    </div>
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
        var $window           = $(window),
            win_height_padded = $window.height() * 1.1;
        function revealOnScroll() {
            var scrolled = $window.scrollTop(),
                win_height_padded = $window.height() * 1.1;
            // Showed...
            $(".revealOnScroll:not(.animate)").each(function () {
              var $this     = $(this),
                  offsetTop = $this.offset().top;
              if (scrolled + win_height_padded > offsetTop) {
                $this.addClass('animate ' + $this.attr('data-animate'));
              }
            });
          }
          $window.on('scroll', revealOnScroll);

        //Scrollspy 
        $('body').scrollspy({ target: '#ca-nav-affix'});

        $("#ca-nav-affix li a[href^='#']").on('click', function(e) {
           // prevent default anchor click behavior
           e.preventDefault();

           // store hash
           var hash = this.hash;

           // animate
           $('html, body').animate({
               scrollTop: $(this.hash).offset().top
             }, 1000, function(){

               // when done, add hash to url
               // (default click behaviour)
               window.location.hash = hash;
             });
        });

        //Affix scroll
        $('[data-affix-after]').each( function() {
            var elem = $(this);
            var parent_panel = elem.parent();
            var prev = $( elem.data('affix-after') );

            if( prev.length != 1 ) {
            /* Create a new element immediately before. */
            prev = elem.before( '<div></div>' ).prev();
            }

            var resizeFn = function() {
              /* Set the width to it's natural width in the parent. */
              var sideBarNavWidth = parent_panel.width()
                  - parseInt(elem.css('paddingLeft'))
                  - parseInt(elem.css('paddingRight'))
                  - parseInt(elem.css('marginLeft'))
                  - parseInt(elem.css('marginRight'))
                  - parseInt(elem.css('borderLeftWidth'))
                  - parseInt(elem.css('borderRightWidth'));
              elem.css('width', sideBarNavWidth);

              elem.affix({
                offset: {
                    top: prev.offset().top + prev.outerHeight(true) - 100,
                    bottom: function () {
                        return (this.bottom = $('#ca-affix-footer').outerHeight(true) + 150)
                    }
                }
              });
            };

            resizeFn();
                $(window).resize(resizeFn);
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
    #ch-js-header-cloned {
      display: none;
    }
    .affix { top: 30px; }
    .affix-bottom { position: absolute; }

    .ca-landing__desc{
        max-width: 730px;
        color: rgba(255, 255, 255, 0.6);
        margin-top: 20px;
        font-size: 18px;
        margin-left: 12px;
    }
    .ca-content__offset-alt{
        background: rgba(245, 245, 255, 1); 
        padding: 10px 40px; 
        margin-left: 0;
    }
    @media(min-width: 992px){
        .ca-landing__desc{
            font-size: 24px;
            margin-left: 50px;
        }
        .ca-content__list--title .ca-content__item:before{
            line-height: 21px;
        }
        .ca-content__offset-alt{
            padding-left: 60px; 
            padding-right: 60px; 
        }
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->