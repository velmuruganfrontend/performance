<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'Getting Started with Chargebee: The Startup Handbook'"
            :cb-desc="'Make your subscription management and billing a breeze with Chargebee’s solution. Check out this guide for how-to’s, pro tips, and quick checklists to get started.'"
            :cb-url="'/resources/guides/subscription-management-tool-startup/'"
            :cb-image="''"
            :cb-style="'/static/website/version/styles/guidev2.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false"/>
        <app-header :hasInvert="false" />
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Hero
        ==================================================================== -->
        <section class="cg-hero cg-hero--onboarding">
            <div class="cg-hero__container">
                <div class="cg-hero__content">
                    <h1 class="cg-hero__title">
                        Getting Started with Chargebee: <br class="visible-lg visible-md">The Startup Handbook
                    </h1>
                </div>
                <div class="cg-hero__actions hidden-xs">
                    <div class="cg-hero__action"></div>
                    <div class="cg-hero__actiona">
                        Click to Read
                    </div>
                    <div class="cg-hero__action"></div>
                </div>
            </div>
        </section>
        <!-- ===================================================================
        End: Website Hero
        ==================================================================== -->
        <!-- ===================================================================
        Start: Article
        ==================================================================== -->
        <section class="cg-article">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                        <p class="cg-article__desc">
                            "It's never been easier to start a company. It's never been harder to build one.", says Naval Ravikant, a serial entrepreneur and VC. If you ask anyone who has built a startup or ever been a part of the process, they will agree. Building a startup is one rewarding but challenging ride.
                        </p>
                        <p class="cg-article__desc">
                            You’ve got 99 problems — from customer acquisition to retention to building a team. Fortunately, billing and subscription management won’t be one anymore. But before we get into details, <strong>welcome to the Chargebee family. We are thrilled to have you onboard! &#128513;</strong>
                        </p>
                        <p class="cg-article__desc">
                            If you are wondering what to expect with Chargebee, here is something: If there ever was a magical train leaving to the world of subscription success, <strong>Chargebee’s solution is your ticket to platform 9 ¾</strong>. With it, your developers won’t need to spend hours writing custom code for every billing need, your support team can say goodbye to the endless sheets of customer data, and your marketing and sales team can experiment all they want. Tl;dr your teams will be able to cut through the noise and get laser-focused on what really matters — your product.
                        </p>
                        <p class="cg-article__desc">
                            As a billing solution sits right at the heart of your business’ finances, it’s only natural for you to have a host of questions as you integrate one. <strong>This handbook shares everything you need to know about Chargebee:</strong> what makes it different from a payment gateway, its features and capabilities, how it works, and how you can get up and running with it… today.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- ===================================================================
        End: Article
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Affix
        ==================================================================== -->
        <div id='before-affix'></div><!-- leave this empty -->
        <!-- ===================================================================
        Start: Affix
        ==================================================================== -->
        <section class="cg-affixs">
            <div class="container">
                <div class="row">
                <!-- ===================================================================
                Start: Affix Left
                ==================================================================== -->
                <div class="col-md-5 hidden-xs hidden-sm">
                    <div class="cg-affix" data-affix-after='#before-affix' id="ca-nav-affix">
                        <div class="cg-affix__header">
                            <div class="cg-affix__title">
                                Table of Contents
                            </div>
                        </div>
                        <ul class="cg-affix__list nav">
                            <li class="cg-affix__item">
                                <a href="#chargebee-payment-gateways">
                                    Chargebee Vs. Payment Gateways: Differences Not to Miss
                                </a>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#understanding-your-chargebee-dashboard">
                                    Understanding Your Chargebee Dashboard
                                </a>

                                 <ul class="cg-affix__sublist">
                                    <li class="cg-affix__subitem">
                                        <a href="#sites-and-what-they-mean">
                                            Sites and what they mean
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#setting-up-the-test-site">
                                            Setting up the Test Site
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#managing-your-test-site-data">
                                            Managing your Test Site data
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#setting-up-the-live-site">
                                            Setting up the Live Site
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#enabling-a-live-site">
                                            Enabling a Live Site
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#integrating-with-chargebee-plug-and-play-and-api">
                                    Integrating with Chargebee: Plug and Play, and API
                                </a>
                                <ul class="cg-affix__sublist">
                                    <li class="cg-affix__subitem">
                                        <a href="#plug-and-play-with-chargebee">
                                            Plug and play with Chargebee
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#using-api-to-integrate">
                                            Using API to integrate
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#using-webhooks-to-integrate">
                                            Using webhooks to integrate
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#payment-gateways-and-methods">
                                    Payment Gateways and Methods
                                </a>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#going-live-with-chargebee">
                                    Going Live with Chargebee
                                </a>
                                <ul class="cg-affix__sublist">
                                    <li class="cg-affix__subitem">
                                        <a href="#set-up-the-product-catalog-and-pricing-details">
                                            Set up the product catalog and pricing details
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#configure-checkout">
                                            Configure checkout
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#configure-the-customer-portal">
                                            Configure the customer portal
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#set-up-invoices">
                                            Set up invoices
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#set-up-taxes">
                                            Set up taxes
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#set-up-transactional-emails">
                                            Set up transactional emails
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#set-up-dunning">
                                            Set up dunning
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#set-up-languages">
                                            Set up languages
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#copy-test-site-configurations">
                                            Copy test site configurations
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#fire-up-test-transactions">
                                            Fire up test transactions
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#migrating-your-subscription-data-to-chargebee">
                                    Migrating Your Subscription Data to Chargebee
                                </a>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#getting-help-from-chargebee-support">
                                    Getting Help from Chargebee Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- ===================================================================
                End: Affix Left
                ==================================================================== -->
                <!-- ===================================================================
                Start: Affix Right
                ==================================================================== -->
                <div class="col-sm-10 col-sm-offset-1 col-md-7 col-md-offset-0">
                    <div class="cg-affix__body">

                        <!-- ===================================================================
                        Start: Content 1
                        ==================================================================== -->
                        <div class="cg-affix__content" id="chargebee-payment-gateways">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h4 class="cg-article__title">
                                        Chargebee Vs. Payment Gateways: Differences Not to Miss
                                    </h4>
                                </div>

                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        <strong>A payment gateway provides you with the bare minimum subscription billing features</strong> and lets you raise basic recurring invoices. It has limited capabilities and even more limited expertise when it comes to helping your subscription business. This means that as your business grows and your billing needs increase, you will need more people to maintain this system and keep your billing process going. Back to square one, right?
                                    </p>
                                    <p class="cg-article__desc">
                                        In most cases, this <strong>humans-in-the-loop system can stunt your speed</strong> so much that you will end up building an in-house billing solution all over — an expensive and not-fun task when you would rather be talking to your customers.
                                    </p>
                                    <p class="cg-article__desc">
                                        <strong>Moreover, it makes growth a liability.</strong> Yes! You heard that right. The more customers you have, the more payment methods, currencies, and taxes you will have to deal with. Your development team will constantly be torn between creating these new billing features and developing your actual product, thus sidelining the real focus.
                                    </p>
                                    <p class="cg-article__desc">
                                        Another big way in which Chargebee differentiates itself is the very approach of the solution. A payment gateway is fundamentally built to enable the flow of payments… gateway, that is! This means that while a payment gateway is definitely “the” tool to process payments, it's not dedicated to subscription management and will probably never be. On the other hand, <strong>Chargebee is a specialized subscription service with ever-expanding capabilities</strong> to keep you updated with what’s buzzing and needed.
                                    </p>
                                    <blockquote class="cg-article__blockquote">
                                        You can very well use a plank of wood to cross a stream. After all, it floats, right! But you would not trust that plank with crossing a sea, would you? You need a yacht to do the job and do it well.
                                        <!-- <div class="cg-article__blockquote-author">
                                            Patrick Campbell, Anatomy of SaaS Pricing Strategy
                                        </div> -->
                                    </blockquote>
                                    <p class="cg-article__desc">
                                        Now let’s get to setting up your Chargebee account. Here is how you can get started with it and create a seamless and effective recurring billing system that complements your business model.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 1
                        ==================================================================== -->

                        <!-- ===================================================================
                        Start: Content 2
                        ==================================================================== -->
                        <div class="cg-affix__content" id="understanding-your-chargebee-dashboard">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h4 class="cg-article__title">
                                        Understanding Your Chargebee Dashboard
                                    </h4>
                                </div>

                                <div class="cg-article__content" id="sites-and-what-they-mean">
                                    <p class="cg-article__desc">
                                        <strong>Sites and what they mean:</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        After you have created an account on Chargebee, you will be guided to set up a ‘Site’ by adding your domain and company name. <strong>A Site is the heart of your Chargebee account</strong> — it is where you can exercise your superpowers and specify how you want your customers to be billed, charged and communicated with. It holds all your customer information, your complete product catalog (plans, addons, and coupons), subscriptions, reports, and all product configurations.
                                    </p>
                                    <p class="cg-article__desc">
                                        There are two types of sites on Chargebee: <strong>Test Site and Live Site.</strong>
                                    </p>
                                    <figure class="cg-article__figure" style="margin-top: 24px; margin-bottom: 72px;">
                                        <img src="/static/website/version/images/resources/guides/subscription-management-tool-startup/1.png" alt="" class="img-responsive" />
                                    </figure>
                                    <p class="cg-article__desc" id="setting-up-the-test-site">
                                        <strong>Setting up the Test Site:</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        A Test Site is exactly what it sounds like: a place for you to test your billing configurations, play around with the features, and tinker with things without thinking twice. You can use it to create sample Plans, Addons, Coupons, and more.
                                    </p>
                                    <p class="cg-article__desc">
                                        Since billing changes have an immediate impact on your customers, it’s a no-brainer to test out all your configurations before rolling them out. <strong>Chargebee’s Test Site, also called a sandbox environment, helps you do just that.</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        The Test Site also provides a test payment gateway and test credit cards that you can use to carry out sample transactions and simulate a customer buying and lifecycle experience.
                                    </p>
                                    <div class="cg-article__panel">
                                        <div class="cg-panel cg-panel--alt">
                                            <div class="cg-panel__header">
                                                Pro tip
                                            </div>
                                            <div class="cg-panel__content">
                                                Model your own billing workflow on your Test Site and run a few test transactions using the test payment gateway. This will help you ensure that everything is working perfectly before you switch to the Live Site. <a href="https://www.chargebee.com/docs/cards.html#test-credit-card-numbers" class="cg-link" target="_blank">Read more about the test payment gateway here</a>.
                                            </div>
                                        </div>
                                    </div>

                                    <p class="cg-article__desc" id="managing-your-test-site-data">
                                        <strong>Managing your Test Site data: </strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        The Test Site is here to stay. What we mean by that is while you will be using the Live Site to do the actual work, you would need to come back to the Test Site every time you want to test a new feature or configuration before setting it live.
                                    </p>
                                    <p class="cg-article__desc">
                                        So, once you are done experimenting with the various configurations and likely have lots of sample data in the test site, it is a great practice to clear this data before moving on.
                                    </p>
                                    <p class="cg-article__desc">
                                        You can do a complete or partial deletion of this data and add new information in its place. Just go to <strong>"Settings"</strong> → Click <strong>"Configure Chargebee"</strong> → Select <strong>"Delete or Repopulate Test site data"</strong>. Remember, these changes <strong>CANNOT</strong> be undone.
                                    </p>
                                    <figure class="cg-article__figure" style="margin-top: 24px; margin-bottom: 72px;">
                                        <img src="/static/website/version/images/resources/guides/subscription-management-tool-startup/2.png" alt="" class="img-responsive" />
                                    </figure>
                                    <p class="cg-article__desc" id="setting-up-the-live-site">
                                        <strong>Setting up the Live Site:</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        Your Live Site is the real Chargebee environment where you can configure a payment gateway and start accepting real payments from your customers.
                                    </p><br><br>
                                    <p class="cg-article__desc" id="enabling-a-live-site">
                                        <strong>Enabling a Live Site:</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        When you first sign up on Chargebee, your Live Site is disabled by default. Once you are ready to start billing your customers, you can enable your live site in a single step: <strong>Click on the "Go Live"</strong> button located on the top right of your Chargebee dashboard.
                                    </p>
                                    <div class="cg-article__panel">
                                        <div class="cg-panel">
                                            <div class="cg-panel__header">
                                                Note
                                            </div>
                                            <div class="cg-panel__content">
                                                Chargebee allows you to assign different access roles to users based on their role in your organization. This helps you control data security and maintain a robust system. Know more about how you can manage all users and their roles <a class="cg-link" target="_blank" href="https://www.chargebee.com/docs/account_settings.html">here</a>.
                                            </div>
                                        </div>
                                    </div>
                                    <p class="cg-article__desc">
                                        Once you go live, your Test Site still remains available for you to test out any other possible configurations based on your billing needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 2
                        ==================================================================== -->

                        <!-- ===================================================================
                        Start: Content 3
                        ==================================================================== -->
                        <div class="cg-affix__content" id="integrating-with-chargebee-plug-and-play-and-api">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h4 class="cg-article__title">
                                        Integrating with Chargebee: Plug and Play, and API
                                    </h4>
                                </div>

                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        The next big step is to integrate Chargebee with your product and website. You can choose how you want to do it — <strong>using Chargebee’s web interface, API, or webhooks</strong>. You can also collect subscription information from your customers via hosted payment pages and customer portals. Here’s how each of the integration options works.
                                    </p>
                                    <p class="cg-article__desc" id="plug-and-play-with-chargebee">
                                        <strong>Plug and play with Chargebee: </strong>
                                    </p>
                                    <ol>
                                        <li>
                                            <p class="cg-article__desc">
                                                <strong>Web interface:</strong> If you’re looking for a quick, hassle-free way to start billing with Chargebee, you can use the Chargebee application interface to do everything directly using your dashboard. Here’s how you use it:
                                            </p>
                                            <ul class="cg-article__list">
                                                <li class="cg-article__item">
                                                    Log in with your credentials.
                                                </li>
                                                <li class="cg-article__item">
                                                    Set up your products and related settings.
                                                </li>
                                                <li class="cg-article__item">
                                                    Start billing!
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p class="cg-article__desc">
                                                <strong>Chargebee’s checkout (Hosted payment pages):</strong> Don’t have much development support? No problem! You can use Chargebee’s checkout, which is not only ready to be used but also fully customizable to suit your needs. Moreover, it is PCI-compliant, so you have nothing to worry about. Learn more <a href="https://www.chargebee.com/docs/checkout-v3.html" target="_blank" class="cg-link">here</a>.
                                            </p>
                                        </li>
                                        <li>
                                            <p class="cg-article__desc">
                                                <strong>Self-serve customer portal:</strong> Giving your customers the freedom to manage their subscription can make them happy while also reducing the load on your customer support team. Win-win, right? Similar to hosted pages and checkout, Chargebee's customer portal is also ready to be used and hence requires no development effort. More on this  <a href="https://www.chargebee.com/docs/customer_portal.html" target="_blank" class="cg-link">here</a>.
                                            </p>
                                        </li>
                                    </ol><br>
                                    <p class="cg-article__desc" id="using-api-to-integrate">
                                        <strong>Using API to integrate:</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        Chargebee offers HTTP-based API which follows the essence of REST*. In less technical terms, you can easily use this API to enable your application to talk with our system. You can then use this data to automate your workflows.
                                    </p>
                                    <p class="cg-article__desc">
                                        <a href="https://apidocs.chargebee.com/docs/api" target="_blank" class="cg-link">Here</a> are some resources that will come in handy while you work with our API integration. Need more information? You can take a look at the <a href="https://www.chargebee.com/docs/developer_resources.html" target="_blank" class="cg-link">client libraries</a> too.
                                    </p><br>
                                    <p class="cg-article__desc" id="using-webhooks-to-integrate">
                                        <strong>Using webhooks to integrate:</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        Webhooks are essential to staying updated with real-time events across the apps you use. Your developers can set up webhooks that can be used to notify your application of events that take place in Chargebee.
                                    </p>
                                    <p class="cg-article__desc">
                                        You can use these events to stay updated on your KPIs. For example, every time a user signs up for a subscription, renews a subscription, or pays, the webhook will notify you via a message. Check out how to configure them <a href="https://www.chargebee.com/docs/events_and_webhooks.html#webhooks" target="_blank" class="cg-link">here</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 3
                        ==================================================================== -->

                        <!-- ===================================================================
                        Start: Content 4
                        ==================================================================== -->
                        <div class="cg-affix__content" id="payment-gateways-and-methods">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h4 class="cg-article__title">
                                        Payment Gateways and Methods:
                                    </h4>
                                </div>

                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        <strong>Configuring a payment gateway:</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        Your payment gateway builds the foundation of how you collect your payments and more importantly, how you let your customers pay. It is a huge part of the checkout experience, which is why picking the right one is extremely important.
                                    </p>
                                    <p class="cg-article__desc">
                                        Before we jump into the types of payment gateways available, let’s delve into how you can configure your payment gateway. <strong>Chargebee lets you choose from a variety of payment gateways</strong>. Here is how you can configure it:
                                    </p>
                                    <ul class="cg-article__list">
                                        <li class="cg-article__item">
                                            Log in to the web interface.
                                        </li>
                                        <li class="cg-article__item">
                                            Navigate to <strong>"Settings"</strong> → Click <strong>"Configure Chargebee"</strong> → Select <strong>"Payment Gateways"</strong>.
                                        </li>
                                        <li class="cg-article__item">
                                            Click <strong>"+ Add a Gateway"</strong> and choose your gateway from the list.
                                        </li>
                                    </ul>

                                    <figure class="cg-article__figure" style="margin-top: 24px; margin-bottom: 72px;">
                                        <img src="/static/website/version/images/resources/guides/subscription-management-tool-startup/3.png" alt="" class="img-responsive" />
                                    </figure>
                                    <p class="cg-article__desc">
                                        Get detailed information on how to configure your payment gateway <a href="https://www.chargebee.com/docs/gateway_settings.html" target="_blank" class="cg-link">here</a>.
                                    </p>
                                    <p class="cg-article__desc">
                                        Haven’t picked a payment gateway yet? Chargebee supports over 20+ payment gateways across 50 countries. Take your pick!
                                    </p>
                                    <div class="cg-collapse">
                                      <div class="cg-collapse__content" data-colpse="true">
                                        <ul class="cg-article__list">
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/stripe.html" target="_blank" class="cg-link">
                                                Stripe
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/authorize.html" target="_blank" class="cg-link">
                                                Authorize.Net
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/braintree.html" target="_blank" class="cg-link">
                                                Braintree
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/paypal-via-braintree.html" target="_blank" class="cg-link">
                                                PayPal via Braintree
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/paypal_express_checkout.html" target="_blank" class="cg-link">
                                                PayPal Express Checkout
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/paypal_payflow_pro.html" target="_blank" class="cg-link">
                                                PayPal Payflow Pro
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/paypal_payments_pro.html" target="_blank" class="cg-link">
                                                PayPal Payments Pro
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/adyen.html" target="_blank" class="cg-link">
                                                Adyen
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/orbital.html" target="_blank" class="cg-link">
                                                Orbital (Chase Paymentech)
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/pin-payments.html" target="_blank" class="cg-link">
                                                Pin Payments
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/moneris.html" target="_blank" class="cg-link">
                                                Moneris
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/bluesnap.html" target="_blank" class="cg-link">
                                                BlueSnap
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/eWay.html" target="_blank" class="cg-link">
                                                eWay Rapid
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/worldpay.html" target="_blank" class="cg-link">
                                                Worldpay
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/elavon.html" target="_blank" class="cg-link">
                                                Elavon
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/wirecard.html" target="_blank" class="cg-link">
                                                WireCard
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/nmi.html" target="_blank" class="cg-link">
                                                Network Merchants Incorporated (NMI)
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/ingenico.html" target="_blank" class="cg-link">
                                                Ingenico
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/cybersource.html" target="_blank" class="cg-link">
                                                CyberSource
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/bluepay.html" target="_blank" class="cg-link">
                                                BluePay
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/sagepay.html" target="_blank" class="cg-link">
                                                Sage Pay
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/paymill.html" target="_blank" class="cg-link">
                                                Paymill
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/bambora.html" target="_blank" class="cg-link">
                                                Bambora
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/transaction_descriptors.html" target="_blank" class="cg-link">
                                                Transaction Descriptors
                                                </a>
                                            </li>
                                        </ul>
                                      </div>
                                      <div class="cg-collapse__footer cg-link cg-link--icon" data-colpse-action="true">
                                          + 16 other options. Click to see the full list.
                                      </div>
                                    </div>
                                    <p class="cg-article__desc">
                                        We know that no two businesses have the exact same needs and concerns while picking a payment gateway, but there are some top-level questions that stay common across organizations. This exhaustive <a href="https://www.chargebee.com/payment-gateways/evaluator-tool/"  target="_blank" class="cg-link">Gateway Evaluator</a> answers these top questions and lets you compare payment gateways to find the one for you.
                                    </p>
                                    <p class="cg-article__desc">
                                        <strong>One, two, or ten: How many payment methods to pick</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        Your startup might be fairly new right now, operating in one location with users that use just one payment method. But as you grow and expand your user base and location, your users would ask for (or at least appreciate) options on how they can pay.
                                    </p>
                                    <p class="cg-article__desc">
                                        It might seem a little daunting, but trust us, it isn’t. <strong>With Chargebee, you can configure multiple payment methods per customer</strong> based on user demographics, your business model, and more.
                                    </p>
                                    <p class="cg-article__desc">
                                        In addition to creating a delightful experience, having multiple payment options also increases revenue assurance. So that the next time a payment method fails for a user, you will have another one to fall back on. Check out the host of payment methods you can choose from:
                                    </p>

                                    <div class="row">
                                      <div class="col-sm-6">
                                          <ul class="cg-article__list">
                                              <li class="cg-article__item">
                                                  <a href="https://www.chargebee.com/docs/cards.html" target="_blank" class="cg-link">
                                                      Cards
                                                  </a>
                                              </li>
                                              <li class="cg-article__item">
                                                  <a href="https://www.chargebee.com/docs/offline_payments.html" target="_blank" class="cg-link">
                                                      Offline Payments
                                                  </a>
                                              </li>
                                              <li class="cg-article__item">
                                                  <a href="https://www.chargebee.com/docs/payments_with_paypal.html" target="_blank" class="cg-link">
                                                      PayPal Payment Services
                                                  </a>
                                              </li>
                                              <li class="cg-article__item">
                                                  <a href="https://www.chargebee.com/docs/amazon_payments.html" target="_blank" class="cg-link">
                                                      Amazon Payments
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div class="col-sm-6">
                                        <ul class="cg-article__list">
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/apple-pay.html" target="_blank" class="cg-link">
                                                    Apple Pay
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/apple-pay_via_stripe.html" target="_blank" class="cg-link">
                                                    Apple Pay via Stripe
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/apple-pay_via_braintree.html" target="_blank" class="cg-link">
                                                    Apple Pay via Braintree
                                                </a>
                                            </li>
                                            <li class="cg-article__item">
                                                <a href="https://www.chargebee.com/docs/ach-credit-transfer-via-stripe.html" target="_blank" class="cg-link">
                                                    ACH Credit Transfer via Stripe
                                                </a>
                                            </li>
                                        </ul>
                                      </div>
                                    </div>


                                    <p class="cg-article__desc">
                                        In case you need an in-depth overview of each of these payment methods, check out <a href="https://www.chargebee.com/docs/payment-method-overview.html" target="_blank" class="cg-link">this</a> help document. It details out how you can set up multiple payment methods for one customer, assign payment methods, and do much more.
                                    </p>


                                    <!-- ===================================================================
                                    Start: Panel
                                    ==================================================================== -->
                                    <!-- ===================================================================
                                    Start: Panel
                                    ==================================================================== -->
                                    <div class="cg-article__panel">
                                        <div class="cg-panel">
                                            <div class="cg-panel__header">
                                                Note
                                            </div>
                                            <div class="cg-panel__content">
                                                With credit cards, you also have the option of choosing between payment gateways and merchant services. Check out this blog and <a href="https://www.chargebee.com/blog/merchant-services-vs-payment-gateways-infographic/" target="_blank" class="cg-link">infographic</a> to understand more about them.
                                            </div>
                                        </div>
                                    </div>
                                    <!-- ===================================================================
                                    End: Panel
                                    ==================================================================== -->
                                    <!-- ===================================================================
                                    End: Panel
                                    ==================================================================== -->
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 4
                        ==================================================================== -->

                        <!-- ===================================================================
                        Start: Content 5
                        ==================================================================== -->
                        <div class="cg-affix__content" id="going-live-with-chargebee">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h4 class="cg-article__title">
                                        Going Live with Chargebee:
                                    </h4>
                                </div>

                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        So you have tinkered with the test site, have set up some of your billing systems, picked a payment gateway, and are now ready to start billing your users. How do you cross over?
                                    </p>
                                    <p class="cg-article__desc">
                                        You can do so by “going live” on Chargebee. Here is a comprehensive Go-Live checklist to make sure that all your configurations are in place and you don’t miss out on anything important.
                                    </p><br><br>
                                    <p class="cg-article__desc" id="set-up-the-product-catalog-and-pricing-details">
                                        <strong>1. Set up the product catalog and pricing details:</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        Let’s take an example to understand this. In the offline world, a customer journey involves going to the shop, picking a good, and paying for it. In order to serve the customer, the shopkeeper needs to know the quantity-price-quality relationship. Ex: 1 lt. of fat-free milk is for 1$. He uses this model to serve any customer who asks for fat-free milk.
                                    </p>
                                    <p class="cg-article__desc">
                                        Similarly, Chargebee needs to know your pricing, plans, etc. to bill and service users. The product catalog on your dashboard is where you can model all of your subscription plans, addons, and coupons. Here is what all of them mean:
                                    </p>
                                    <p class="cg-article__desc">
                                        <strong>Plans:</strong> A plan defines how you offer your product to a user. It spells out what you are offering, how long you are offering it for, and how much it is priced at. Plans are the foundation of a pricing model and setting up your business Plans is ideally one of the first few things you should do on Chargebee.
                                    </p>
                                    <p class="cg-article__desc">
                                        Plans are created in correspondence to a specific product or service that you offer. <strong>This means that you would need to create a plan for each product or service you’d have</strong>. It contains information such as the price, plan's currency, pricing model, billing interval, etc.
                                    </p>
                                    <p class="cg-article__desc">
                                        Each plan can only have one currency in Chargebee. However, you can support multiple currencies by creating separate plans for each currency.
                                    </p>
                                    <p class="cg-article__desc">
                                        <strong>Addons:</strong> An addon defines a service or item that's being offered in addition to the plan. You can choose to make an addon recommended or mandatory and whether it is one-time or recurring. Ex: For a dog spa plan, an  addon could be one that offers your dog a toy every time he visits.
                                    </p>
                                    <p class="cg-article__desc">
                                        <strong>Coupons:</strong> Coupons let you offer discounts on your plans and addons. You can control settings like coupon value, validity, and maximum redemptions using Chargebee.
                                    </p><br><br>
                                    <p class="cg-article__desc" id="configure-checkout">
                                        <strong>2. Configure checkout: </strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        Great features and convincing pricing is only half the battle. Your checkout experience is the other half.
                                    </p>
                                    <p class="cg-article__desc">
                                        Properly configuring your checkout page lets you ensure a smooth buying experience for your users. Moreover, Chargebee’s checkout pages are PCI-compliant, which puts users’ data security concerns to rest.
                                    </p>
                                    <p class="cg-article__desc">
                                        You have a couple of options to configure checkout. The first is <strong>Chargebee’s checkout that requires no development effort and the second is using an API</strong>. However, we highly recommend that you leverage Chargebee’s in-app checkout over building your own form. <a href="https://www.chargebee.com/checkout-portal-docs/#overview" target="_blank" class="cg-link">Here</a> are some solid reasons why.
                                    </p>
                                    <ul class="cg-article__list">
                                      <li class="cg-article__item">
                                          <p class="cg-article__desc">
                                              <a href="https://www.chargebee.com/docs/checkout-v3.html" target="_blank" class="cg-link"><strong>Chargebee's checkout:</strong></a> Chargebee checkout is user-friendly, secure and easy to use. It has helped startups increase checkout conversion and reduce abandoned carts, simply because it lets customers enter payment information without having to leave the website.
                                          </p>
                                          <p class="cg-article__desc">
                                              Once enabled, every new customer receives this checkout by default while existing/returning users can use it by auto-filling account information, including account and payment information.
                                          </p>
                                      </li>
                                      <li class="cg-article__item">
                                        <p class="cg-article__desc">
                                            <a href="https://www.chargebee.com/checkout-portal-docs/api-checkout.html#call-flow" target="_blank" class="cg-link"><strong>Checkout via API:</strong></a> If you are keen on having granular control over the checkout, you can opt for checkout via API. However, this will need you to have good coding knowledge and development support. You should choose this option if you have a user authentication system at your end.
                                        </p>
                                        <p class="cg-article__desc">
                                            Here is the <a href="https://apidocs.chargebee.com/docs/api" target="_blank" class="cg-link">complete API integration</a> documentation to help your development team configure checkout and other integrations.
                                        </p>
                                      </li>
                                    </ul>
                                    <br><br>
                                    <p class="cg-article__desc" id="configure-the-customer-portal">
                                        <strong>3. Configure the customer portal:</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        The customer portal provides your users with a <strong>self-serve option</strong> — allowing them to manage their account details without external intervention, manage their subscriptions and plans, and update their billing details.
                                    </p>
                                    <p class="cg-article__desc">
                                        It not only provides a smooth customer experience but also reduces the constant dependence on your support team. Learn more about how to configure your customer portal <a href="https://www.chargebee.com/docs/customer_portal.html" target="_blank"  class="cg-link">here</a>.
                                    </p>
                                    <figure class="cg-article__figure" style="margin-top: 24px; margin-bottom: 72px;">
                                        <img src="/static/website/version/images/resources/guides/subscription-management-tool-startup/4.png" alt="" class="img-responsive" />
                                    </figure>
                                    <p class="cg-article__desc" id="set-up-invoices">
                                        <strong>4. Set up invoices:</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        As the volume of your subscribers increases, invoicing can snowball into an all-consuming task, eating away hours of manual processing. With Chargebee you can <strong>automate the entire invoicing process</strong> right from sending the first invoice on sign-up, to all the subsequent payments made.
                                    </p>
                                    <p class="cg-article__desc">
                                        And you don’t need to worry about ugly invoices. Chargebee lets you customize them using your company design language. Learn everything about invoice operations and customization <a href="https://www.chargebee.com/docs/invoice-overview.html" target="_blank" class="cg-link">here</a>.
                                    </p><br><br>
                                    <p class="cg-article__desc" id="set-up-taxes">
                                        <strong>5. Set up taxes: </strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        If you want to levy taxes on your invoices, you can do so by configuring them on Chargebee. Even if you operate in multiple countries, you can easily configure taxes according to the different regions. <a href="https://www.chargebee.com/docs/tax.html" target="_blank" class="cg-link">Here</a> is a step-by-step process for setting up taxes.
                                    </p>

                                    <figure class="cg-article__figure" style="margin-top: 24px; margin-bottom: 72px;">
                                        <img src="/static/website/version/images/resources/guides/subscription-management-tool-startup/5.png" alt="" class="img-responsive" />
                                    </figure>
                                    <p class="cg-article__desc" id="set-up-transactional-emails">
                                        <strong>6. Set up transactional emails:</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        By the nature of the recurring business, your relationship with users also ends up becoming recurring in nature — where your company is constantly tested and evaluated. To retain this relationship, you need to keep your customers engaged, informed, and happy.
                                    </p>
                                    <p class="cg-article__desc">
                                        <strong>Email notifications help you manage this communication in an automated yet personalized way</strong>. You can set up event-based emails to go out every time a new user signs up, renews, cancel, and so on.
                                    </p>
                                    <p class="cg-article__desc">
                                        Just like the invoices, you can customize the style, template, and the content you want to use in these emails. Here's <a href="https://www.chargebee.com/docs/email-notifications-v2.html" target="_blank" class="cg-link">more</a> on configuring your transactional emails.
                                    </p><br><br>
                                    <p class="cg-article__desc" id="set-up-dunning">
                                        <strong>7. Set up dunning:</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        Customers canceling their subscription is a reality. While some might not have a need or want for your product, sometimes cancellation can happen because of payment issues.
                                    </p>
                                    <p class="cg-article__desc">
                                        A transaction might fail due to insufficient funds, expired cards, or connectivity issues. <strong>In order to avoid this involuntary churn and ensure revenue recovery, you can set up dunning</strong> — the process of automating transaction attempts over a period of time. Find out how to set up dunning <a href="https://www.chargebee.com/docs/dunning-v2.html" target="_blank" class="cg-link">here</a>.
                                    </p>

                                    <figure class="cg-article__figure" style="margin-top: 24px; margin-bottom: 72px;">
                                        <img src="/static/website/version/images/resources/guides/subscription-management-tool-startup/6.png" alt="" class="img-responsive" />
                                    </figure>
                                    <p class="cg-article__desc" id="set-up-languages">
                                        <strong>8. Set up languages:</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        If you have a global business, there are high chances that some of your customers may not be well-versed with English. Your communication, in such a case, should ideally be in their language.
                                    </p>
                                    <p class="cg-article__desc">
                                        Chargebee lets you choose multiple languages for your customer communication like invoices, emails, etc. Learn how to enable languages <a href="https://www.chargebee.com/docs/configure-multiple-languages.html#enable-multiple-languages-in-chargebee" target="_blank" class="cg-link">here</a>.
                                    </p>

                                    <figure class="cg-article__figure" style="margin-top: 24px; margin-bottom: 72px;">
                                        <img src="/static/website/version/images/resources/guides/subscription-management-tool-startup/7.png" alt="" class="img-responsive" />
                                    </figure>
                                    <p class="cg-article__desc" id="copy-test-site-configurations">
                                        <strong>9. Copy test site configurations:</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        Once you have created your product catalog (plans, addons, and coupons) on the test site and made other configuration changes there, you can easily copy these settings to the live site (and vice versa).
                                    </p>
                                    <p class="cg-article__desc">
                                        <strong>To do this:</strong>
                                    </p>
                                    <p class="cg-article__desc">
                                        Go to your <strong>live site</strong> → Select <strong>"Settings"</strong> → Click on <strong>"Configure Chargebee"</strong> → Scroll down to the bottom of the page → Click on the <strong>"GET STARTED"</strong> button under <strong>"Copy configurations from test site to live site"</strong>
                                    </p>

                                    <figure class="cg-article__figure" style="margin-top: 24px; margin-bottom: 72px;">
                                        <img src="/static/website/version/images/resources/guides/subscription-management-tool-startup/8.png" alt="" class="img-responsive" />
                                    </figure>
                                    <p class="cg-article__desc">
                                        If you want to copy your settings from the live site to the test site,  go to the Test Site and follow the same steps as above.
                                    </p>
                                    <div class="cg-article__panel">
                                        <div class="cg-panel">
                                            <div class="cg-panel__header">
                                                Note
                                            </div>
                                            <div class="cg-panel__content">
                                                Not all configuration changes made on the test site can be copied to the live site. Check out <a href="https://www.chargebee.com/docs/sites-intro.html#copy-site-configurations" target="_blank" class="cg-link">this list</a> to see the limitations here.
                                            </div>
                                        </div>
                                    </div>

                                    <p class="cg-article__desc" id="fire-up-test-transactions">
                                        <strong>10. Fire up test transactions:</strong>
                                    </p>

                                    <ul class="cg-article__list">
                                        <li class="cg-article__item">
                                            <strong>Running transactions on your TEST site</strong>: While you are still on the test site, it is wise to run some test transactions before you start billing your customers on the live site.
                                        </li>
                                        <li class="cg-article__item">
                                            <strong>Running transactions on your LIVE site</strong>: Before you start billing real customers, do test out a bunch of small-value transactions with real cards in your LIVE site. <strong>Here are some sample tests you could run:</strong><br><br>


                                          <ul>
                                              <li style="margin-bottom: 20px;">
                                                  <span style="font-weight: 500">Test your checkout flow:</span> Create a new subscription using a plan with an amount and 0 trial days to ensure the card is charged immediately.
                                              </li>
                                              <li style="margin-bottom: 20px;">
                                                  After you create and charge a subscription successfully, try to add a charge immediately after 20 minutes, to confirm if recurring charges are successful.
                                              </li>
                                              <li style="margin-bottom: 20px;">
                                                  Cancel an order/subscription
                                              </li>
                                              <li style="margin-bottom: 20px;">
                                                  Issue a partial refund
                                              </li>
                                              <li style="margin-bottom: 20px;">
                                                  Issue a full refund
                                              </li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <p class="cg-article__desc">
                                        In addition to things to do on Chargebee, there are some things you need to do externally to ensure everything works well. <a href="https://www.chargebee.com/docs/checklist.html#external-checklist" target="_blank" class="cg-link">Here</a> is a checklist detailing out the tasks to be done outside of Chargebee.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 5
                        ==================================================================== -->

                        <!-- ===================================================================
                        Start: Content 6
                        ==================================================================== -->
                        <div class="cg-affix__content" id="migrating-your-subscription-data-to-chargebee">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h4 class="cg-article__title">
                                        Migrating Subscription Data to Chargebee:
                                    </h4>
                                </div>

                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        If you already have your subscription data on another system and want to move it to Chargebee, our team can help you in making a smooth and quick migration. <strong>Plus your first migration is completely free of cost</strong>.
                                    </p>
                                    <p class="cg-article__desc">
                                        You can place a migration request by following these steps:<br>
                                        Navigate to <strong>"Settings"</strong> → Go to <strong>"Import & Export Data"</strong> → <strong>"Raise a Migration Request"</strong> → <strong>"Request Migration"</strong>.
                                    </p><br>
                                    <figure class="cg-article__figure" style="margin-top: 24px; margin-bottom: 72px;">
                                        <img src="/static/website/version/images/resources/guides/subscription-management-tool-startup/9.png" alt="" class="img-responsive" />
                                    </figure>
                                    <p class="cg-article__desc">
                                        Once you have raised a request, our migration team will work closely with you. They will get back to you with details on how to send your subscription data, the data format to use, and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 6
                        ==================================================================== -->

                        <!-- ===================================================================
                        Start: Content 7
                        ==================================================================== -->
                        <div class="cg-affix__content" id="getting-help-from-chargebee-support">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h4 class="cg-article__title">
                                        Getting in Touch with the Support Team at Chargebee:
                                    </h4>
                                </div>

                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        Whether you need help in getting started with Chargebee, have a question about how a feature works, or just need some expert tips on how to set up your workflows… we are here to help you. Here are some resources that you can refer to.
                                    </p>
                                    <p class="cg-article__desc">
                                        <strong>1.</strong> <a href="https://support.chargebee.com/support/solutions/63142" target="_blank" class="cg-link">Knowledge base:</a> If you have a question about the product, chances are it is already answered here. The knowledge base houses an exhaustive set of how-to articles, FAQs, and step-by-step tutorials on figuring almost everything on Chargebee.
                                    </p>
                                    <p class="cg-article__desc">
                                        <strong>2.</strong> <a href="https://support.chargebee.com/support/discussions" target="_blank" class="cg-link">Community forum:</a> Our community forum is where you can have a conversation with the fellow Chargebee customers who are dealing with similar challenges like you. You can ask them for suggestions, tips and tricks, etc. as well as offer to help someone out by sharing a solution to their problem.
                                    </p>
                                    <p class="cg-article__desc">
                                        You’ll find a wide array of topics in discussion. You can search through them for information or start a new thread. If you are curious about an upcoming feature or have a feature suggestion, you can also post it here and our team will get back to you.
                                    </p>
                                    <p class="cg-article__desc">
                                        <strong>3.</strong> <a href="https://support.chargebee.com/support/home" target="_blank" class="cg-link">Talk to our support team:</a> At Chargebee, we have a global support team dedicated to helping you whenever you need anything. If you feel stuck at any point, you can get in touch with us and we would be glad to help you. You can either write to us at <a href="mailto:support@chargebee.com" target="_blank" class="cg-link">support@chargebee.com</a> or raise <a href="https://support.chargebee.com/support/home" target="_blank" class="cg-link">a support ticket</a> with your questions.
                                    </p>
                                    <p class="cg-article__desc">
                                        And there! You now know everything you need to get started with Chargebee for your business. All that’s left is for you to press the pedal and launch into action.
                                    </p>
                                    <p class="cg-article__desc">
                                        P.S. If you have any questions or need any help in setting up your account, just write to us at <a href="mailto:support@chargebee.com" target="_blank" class="cg-link">support@chargebee.com</a> and let us know. We will get right back to you.
                                    </p>
                                    <div>
                                      <img src="/static/website/version/images/resources/guides/subscription-management-tool-startup/happy-growing.svg" alt="" class="img-responsive">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 7
                        ==================================================================== -->

                    </div>
                </div>
                <!-- ===================================================================
                Start: Affix Right
                ==================================================================== -->
                </div>
            </div>
        </section>
        <!-- ===================================================================
        End: Affix
        ==================================================================== -->
        <section class="cg-footer">
            <div class="container">
                <div class="row cg-card--flex">
                    <div class="col-sm-5">
                        <figure class="cg-article__figure" style="margin-top: 24px; margin-bottom: 72px;">
                            <img src="/static/website/version/images/resources/guides/subscription-management-tool-startup/customers.png" alt="" class="img-responsive" />
                        </figure>
                    </div>
                    <div class="col-sm-6 col-sm-offset-1">
                        <div class="cg-article__header">
                            <h3 class="cg-article__title" style="margin-top:0;">
                                Hustle. Don’t hassle!
                            </h3>
                            <p class="cg-article__desc">
                              Simplify your billing and subscription management with Chargebee and join over 10,000 global businesses.
                            </p>
                        </div>
                        <div class="cg-article__content" style="margin-top: 15px;">
                            <a href="/trial-signup/" class="cg-btn">
                                Launch Chargebee
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <app-footer />
        <!-- ===================================================================
        End: Website Footer
        ==================================================================== -->
    </div>
</template>
<!-- ===========================================================================
End: Template
============================================================================ -->
<!-- ===========================================================================
Start: Scripts
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

        mounted() {

            // For Affix
            // Scrollspy
            $('body').scrollspy({ target: '#ca-nav-affix'});

            // Affix onclick to show the section
            $("#ca-nav-affix .cg-affix__item a[href^='#']").on('click', function(e) {
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
                        top: prev.offset().top + prev.outerHeight(true) + 110,
                        bottom: function () {
                            return (this.bottom = $('#cb-affix-footer').outerHeight(true) + $('.cg-footer').outerHeight(true) + 120)
                        }
                    }
                  });
                };

                resizeFn();
                    $(window).resize(resizeFn);
            });

            $('.cg-hero__actiona').on('click', function(){
                $('html, body').animate({
                    scrollTop: $(".cg-article").offset().top - 150
                }, 500);
            })


            $('[data-colpse-action]').click(function() {
                $('[data-colpse]').addClass('cg-collapse__content-active');
                $('[data-colpse-action]').hide();
            });
        }
    }
</script>
<!-- ===========================================================================
End: Scripts
============================================================================ -->
<!-- ===========================================================================
Start: Style
============================================================================ -->
<style type="text/css">
    #ch-js-header-cloned{
        display: none;
    }

    .affix { top: 70px; }
    .affix-bottom { position: absolute; }
    .cg-affix__item{
        padding-left: 24px;
        margin-bottom: 12px;
        white-space: normal;
    }
    .cg-affix__item:before{
        position: absolute;
        top: 10px;
        left: 0;
    }
    .cg-affix__item > a{
        line-height: 22px;
        padding-top: 0 !important;
    }
    .cg-hero__actions{
        justify-content: center;
    }
    @media (min-width: 992px){
        .cg-hero__container {
            min-height: 480px;
            padding-bottom: 60px;
        }
        .cg-hero__actions {
            display: none;
        }
        .cg-hero__title {
            margin-top: 0;
        }
    }
</style>
<!-- ===========================================================================
End: Style
============================================================================== -->
