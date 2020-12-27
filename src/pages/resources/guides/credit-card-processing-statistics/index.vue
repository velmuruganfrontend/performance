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
  <div>
    <!-- ===================================================================
    Start: Meta Section
    ==================================================================== -->
    <app-meta 
      :cb-title="'Credit card processing facts, statistics and trends of 2017'" 
      :cb-desc="'Fascinating credit card facts, statistics and trends that anyone looking to sell online must know. Get an overview of the credit card market and the state of online payments today.'" 
      :cb-url="'/resources/guides/credit-card-processing-statistics/'" 
      :cb-image="'/static/resources/og/resource/guides/credit-card-processing-statistics.png'"
      :cb-style="'/static/website/version/styles/main.css,/static/website/version/styles/guide.css,/static/website/version/styles/credit-card-stats.css'"
      :cb-head-script="''"
      :cb-body-script="''"
      :cb-has-noindex="false" />
    <!-- ===================================================================
    End: Meta Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Header Section
    ==================================================================== -->
    <app-header :hasInvert="false" />
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
                <div class="ca-landing" style="height: auto; max-height: initial !important; padding-bottom: 60px; background-color: #fff; text-align: center">
                    <div class="ca-landing__content">
                        <div class="container">
                            <h1 class="page-title"><span>47</span><span>Credit card processing</span><span>Facts, Statistics, And Trends</span><span>every online merchant should know</span></h1>
                            <div style="position: relative; margin-top: 80px;">
                                <div class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></div>
                            </div>
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
                Contant one Start 
                ============================================================================== -->
                <div class="l-main__row">
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
                                                <a href="#outlook">
                                                    Chapter 1: Outlook
                                                </a>
                                                <ul class="ca-nav__sublist">
                                                    <li class="ca-nav__subitem">
                                                        <a href="#the-credit-card-market-today">
                                                            1A: The credit card market today
                                                        </a>
                                                    </li>
                                                    <li class="ca-nav__subitem">
                                                        <a href="#how-are-online-sales-doing">
                                                            1B: How are online sales doing?
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="ca-nav__item">
                                                <a href="#safety">
                                                    Chapter 2: Safety 
                                                </a>
                                                <ul class="ca-nav__sublist">
                                                    <li class="ca-nav__subitem">
                                                        <a href="#the-fraud-panorama">
                                                            2A: The fraud panorama
                                                        </a>
                                                    </li>
                                                    <li class="ca-nav__subitem">
                                                        <a href="#does-safety-impact-customer-relationships">
                                                            2B: Does safety impact customer relationships?
                                                        </a>
                                                    </li>
                                                    <li class="ca-nav__subitem">
                                                        <a href="#fighting-fraud">
                                                            2C: Fighting fraud
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="ca-nav__item">
                                                <a href="#state">
                                                    Chapter 3: State
                                                </a>
                                                <ul class="ca-nav__sublist">
                                                    <li class="ca-nav__subitem">
                                                        <a href="#multiple-payment-methods-matter">
                                                            3A: Multiple payment methods matter 
                                                        </a>
                                                    </li>
                                                    <li class="ca-nav__subitem">
                                                        <a href="#alternative-payment-methods">
                                                            3B: Alternative payment methods
                                                        </a>
                                                    </li>
                                                    <li class="ca-nav__subitem">
                                                        <a href="#location-influences-preferred-payment-methods">
                                                            3C: Location influences preferred payment methods
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="ca-nav__item">
                                                <a href="#costs">
                                                    Chapter 4: Costs
                                                </a>
                                                <ul class="ca-nav__sublist">
                                                    <li class="ca-nav__subitem">
                                                        <a href="#the-usual-suspects">
                                                            4A: The usual suspects
                                                        </a>
                                                    </li>
                                                    <li class="ca-nav__subitem">
                                                        <a href="#additional-overheads">
                                                            4B: Additional overheads
                                                        </a>
                                                    </li>
                                                    <li class="ca-nav__subitem">
                                                        <a href="#chargebacks">
                                                            4C: Chargebacks: Another cost to think about
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>

                                        <div class="ca-social">
                                            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.chargebee.com/resources/guides/credit-card-processing-statistics/" class="ca-social__item ca-social__item--fb"></a>
                                            <a href="https://twitter.com/home?status=https%3A//www.chargebee.com/resources/guides/credit-card-processing-statistics/%20%40chargebee" class="ca-social__item ca-social__item--twt"></a>
                                            <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A//www.chargebee.com/resources/guides/credit-card-processing-statistics/&amp;title=&amp;summary=&amp;source=" class="ca-social__item ca-social__item--linkedin"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- ================================================================
                            Fixed left nav end 
                            ================================================================= -->
                            <!-- ================================================================
                            Fixed right content start 
                            ================================================================= -->
                            <div class="col-sm-9 col-md-7 col-md-offset-1 col-lg-6 col-lg-offset-1 ca-cards__wrap">
                                <!-- ============================================================
                                Section one start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative" id="outlook">
                                    <h3 class="ca-content__heading">
                                        <span class="title-prefix">Chapter 1</span>
                                        <span class="title">Outlook</span>
                                    </h3>
                                    <p class="ca-content__desc">
                                    From what online credit card processing involves to who the players with skin in the game are, what the credit card market looks like, and what the state of online payments is today, here's an overview of what you need to know if  you are thinking of taking your business online or setting one up from scratch.
                                    </p>

                                    <h4 id="the-credit-card-market-today" class="ca-content__subheading">1A. The credit card market today</h4>

                                    <ul class="ca-cards ca-content__list">
                                        <li class="ca-content__item">
                                            <div class="ca-block block-a">
                                                <h4 class="ca-block__title">The players and the playing field</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body">
                                                            <img class="img-responsive" src="/static/website/version/images/credit-card/how_it_works.png" style="margin: 40px 0;" alt="The players and the playing field">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <!-- 1 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block block-a">
                                                <h4 class="ca-block__title">The Credit Card Market</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col __flow-center">
                                                                    <span class="LG-normal __type2 txt-green">160</span>
                                                                </div>  
                                                                <div class="ca-col col-3 h4 text-uppercase desc __flow-center" style="line-height: 26px; margin-left: 12px;">
                                                                    <span class="txt-green">million</span><span>credit card</span><span>holders</span><span>in the US.</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">CFPB Consumer Credit Card Market Study</div>
                                            </div>
                                        </li>

                                        <!-- 2 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Worldwide credit card circulation</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap text-center">
                                                        <div class="ca-card__body"> 
                                                            <p class="h4" style="margin-bottom: 45px"><span class="h1"><strong>14.4 billion credit cards</strong></span><br> in the world (as of 2017)
                                                            </p>

                                                            <div class="ca-col col-9"><img class="img-responsive" src="/static/website/version/images/credit-card/world_wide_circulation.png" alt="Worldwide card circulation"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">The Nilson Report</div>
                                            </div>
                                        </li>

                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Top card networks in the U.S.</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __wrap">
                                                        <div class="ca-card__body">
                                                            <img class="img-responsive" style="margin-right: -50px" src="/static/website/version/images/credit-card/top_card_in_us.png" alt="Top card networks in the U.S."/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">The Nilson Report</div>
                                            </div>
                                        </li>


                                        <!-- 4 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Who issues credit cards in the US?</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row">
                                                                <div class="ca-col col-6" style="margin-right: 25px">
                                                                    <p class="h3" style="line-height: 30px">
                                                                        <strong>Organizations responsible for the funds do.</strong>
                                                                    </p>

                                                                    <p class="h5" style="line-height: 20px; margin-top: 30px">
                                                                        A bank, in most cases. Although, some financial institutions like <strong>American Express</strong>, for example, <strong>operates as issuer and network.</strong>
                                                                    </p>
                                                                </div>

                                                                <div class="ca-col col-5 __flow-center d-flex __center">
                                                                    <div class="d-flex __center" >
                                                                        <div class="flex-item">
                                                                            <img class="img-responsive" src="/static/website/version/images/credit-card/credit_cards_in_us.png" alt="Who issues the credit cards in the US?" style="max-width: 245px !important;">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Forbes</div>
                                            </div>
                                        </li>

                                        <!-- 5 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Number of active credit cards/person</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap text-center">
                                                        <div class="ca-card__body"> 
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-11">
                                                                    <p class="h3 txt-grey" style="line-height: 40px;">
                                                                        Card-holding consumers with average credit scores <strong class="txt-dark-blue">(620+)</strong> have atleast<br>
                                                                        <span class="h1 txt-green"><strong>4 active credit cards.</strong></span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">CFPB Consumer Credit Card Market Study</div>
                                            </div>
                                        </li>

                                        <!-- 6 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block did-you-know">
                                                <h4 class="ca-block__title">Did you know?</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body text-center">
                                                            <div class="LG-normal __type2" style="margin-top: 20px">500,000</div>  
                                                            <p class="text-uppercase">
                                                                applications for credit cards/day
                                                            </p>

                                                            <h6 class="txt-grey">(US Consumers)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">CFPB Consumer Credit Card Market Study</div>
                                            </div>
                                        </li>

                                        <!-- 7 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block arrow-card">
                                                <h4 class="ca-block__title">Consumers are using their credit cards more than they did</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap text-center">
                                                        <div class="ca-card__body">
                                                            <h3 class="txt-dark-blue" style="margin-bottom: 20px;">Average Credit Balance</h3>
                                                            <div class="LG-normal __type2 txt-dark-blue" style="padding-bottom: 40px;">$4800</div>  
                                                            <p class="h5 txt-dark-blue" style=" line-height: 16px;">
                                                                The highest it’s been since <br>2005.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">CFPB Consumer Credit Card Market Study</div>
                                            </div>
                                        </li>

                                        <!-- 8 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block arrow-card __dark">
                                                <h4 class="ca-block__title">Online payments are growing</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap text-center">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-8">
                                                                    <div>(2013 to 2017)</div>
                                                                    <p class="h3 txt-grey" style="line-height: 30px; margin-bottom: 55px;">
                                                                        <span class="txt-dark-blue">Online payments</span> in the US have <strong class="txt-green">grown 4 times</strong> as much as <span class="txt-dark-blue">retail payments</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <p class="txt-grey h5" style="line-height: 20px; font-weight: bold;">It has grown by ~64% in the last four years.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">US Census Bureau News 2017</div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="ca-bottom-line">With the <strong>average consumer using more than one card at a time</strong> and online payments growing four times faster than retail payments, the <strong>credit card market is booming</strong>.</div>
                                    
                                    <!-- 1B -->
                                    <h4 id="how-are-online-sales-doing" class="ca-content__subheading">1B. How are online sales doing?</h4>

                                    <ul class="ca-cards ca-content__list">
                                        <!-- 9 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block did-you-know arrow-card __dark">
                                                <h4 class="ca-block__title">Online sales are strong</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body">
                                                            <div class="txt-grey" style="position: absolute; right: 5px; top: 5px; font-size: 12px;">(U.S. Consumers - last year)</div>

                                                            <div class="ca-row __center" style="margin-top: 30px;margin-bottom: 50px">
                                                                <div class="ca-col ca-col-xs-12 ca-col-sm-5 ca-col-lg-4 text-right">
                                                                    <span class="LG-normal __type2">9/10</span>
                                                                </div>

                                                                <div class="ca-col ca-col-xs-12 ca-col-sm-7 ca-col-md-5">
                                                                    <p style="margin-top: -10px" class="txt-grey">
                                                                    say they have <strong style="color: white;">made at least one online purchase</strong> in the past 12 months.                               
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div class="ca-row __center" style="margin-bottom: 50px">
                                                                <div class="ca-col ca-col-xs-12 ca-col-sm-5 ca-col-lg-4 text-right">
                                                                    <span class="LG-normal __type2">7/10</span>
                                                                </div>

                                                                <div class="ca-col ca-col-xs-12 ca-col-sm-7 ca-col-md-5">
                                                                    <p style="margin-top: -10px" class="txt-grey">
                                                                    <strong style="color: white;">made three or more online purchases</strong> in the last year.                               
                                                                    </p>
                                                                </div>
                                                            </div>


                                                            <div class="ca-row __center">
                                                                <div class="ca-col ca-col-xs-12 ca-col-sm-5 ca-col-lg-4 text-right">
                                                                    <span class="LG-normal __type2">5/10</span>
                                                                </div>

                                                                <div class="ca-col ca-col-xs-12 ca-col-sm-7 ca-col-md-5">
                                                                    <p style="margin-top: -10px" class="txt-grey">
                                                                    say they <strong style="color: white;">have increased the frequency of their online purchases</strong> in the last year.
                            
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">American Express Digital Payments Survey</div>
                                            </div>
                                        </li>

                                        <!-- 10 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Online sales are strong</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-4 text-right">
                                                                    <span class="LG-normal txt-green __type2"><sub>~</sub>19.</span>
                                                                </div>

                                                                <div class="ca-col col-5">
                                                                    <p class="h4" style="line-height: 26px">
                                                                        Number of <br><strong>online transactions</strong> per person per year.                                
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">KPMG Global Online Consumer Report</div>
                                            </div>
                                        </li>
                                        <!-- 11 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block arrow-card __dark">
                                                <h4 class="ca-block__title">What are merchants saying?</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body">
                                                            <p style="margin-bottom: 40px">Compared to previous years, 71% merchants say</p>

                                                            <div class="ca-col col-7 text-center">
                                                                <span class="h1" style="line-height: 30px;"><strong>Annual Sales</strong></span>
                                                                <span class="h2 txt-grey">(online and mobile)</span><br>
                                                                <span class="h3">are increasing</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">American Express Digital Payments survey</div>
                                            </div>
                                        </li>

                                        <!-- 12 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">A look at spending habits</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body text-center">
                                                            <p>U.S. Consumers spend</p>

                                                            <div class="ca-col col-9">
                                                                <span class="LG-normal txt-green text-uppercase">12–18% <span class="txt-grey">MORE</span></span>
                                                            </div>

                                                            <div class="ca-row __center text-center">
                                                                <div class="ca-col ca-col-sm-8">
                                                                    <p><span class="h3"><strong>when using credit cards</strong></span> instead of cash for purchases</p>
                                                                </div>                                            
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Dun and Bradstreet survey</div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="ca-bottom-line">Online sales are growing everyday, it’s the <strong>perfect time to take your product or service online</strong> if you haven’t already!</div>
                                </section>
                                <!-- ============================================================
                                Section one end 
                                ============================================================= -->
                                <!-- ============================================================
                                Section two start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative" id="safety">
                                    <h3 class="ca-content__heading">
                                        <span class="title-prefix">Chapter 2</span>
                                        <span class="title">Safety</span>
                                    </h3>
                                    <p class="ca-content__desc">
                                    Arguably the biggest question on a merchant’s mind. Is online credit card processing safe? The truth is there are nuances to consider before you decide. While the data reveals that online attacks and friendly fraud are both getting worse by the day, the tools and infrastructure to combat them are getting sharper. The issue is how much the tools cost and how difficult it is to keep up with regulation that is constantly being updated. What does the state of fraud mean for small businesses? Where does it leave your customer relationships?
                                    </p>

                                    <h4  id="the-fraud-panorama" class="ca-content__subheading">
                                        2A. The fraud panorama
                                    </h4>

                                    <ul class="ca-cards  ca-content__list">
                                        <!-- 1 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Fraud trends in the U.S.</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap text-center safety-cardA">
                                                        <div class="ca-card__body">

                                                            <div class="ca-col col-10">
                                                                <p class="txt-grey" style="margin-top: 20px; margin-bottom: 55px; font-size: 21px;"><strong class="txt-dark-blue">America</strong> is responsible for about a quarter of the global card transaction volume. But, it <strong class="txt-dark-blue">accounts for nearly half of worldwide credit card fraud.</strong></p>
                                                                
                                                                <p class="big-txt">If you are selling in the U.S. <strong class="txt-red">Think about fraud</strong></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Quartz</div>
                                            </div>
                                        </li>

                                        

                                        <!-- 2 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block arrow-card __red">
                                                <h4 class="ca-block__title">A look at the numbers</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap text-center">
                                                        <div class="ca-card__body">
                                                            <div class="ca-col col-6"><p>The <strong>costs</strong> of credit card <strong>fraud</strong> have <strong class="txt-red">increased</strong> by</p></div>
                                                            <div class="LG-normal __type2" style="margin-top: 20px">26%</div>
                                                            <p style="margin-bottom: 30px">(U.S. 2013 to 2017)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Federal Trade commission’s’ Consumer Sentinel Network Data Book, 2017</div>
                                            </div>
                                        </li>
                                        

                                        <!-- 3 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Online vs in-person fraud</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row">
                                                                <div class="ca-col col-5" style="margin-right: 30px;">
                                                                    <p>
                                                                        The scales tipped in <strong>2016</strong> for the <strong>first time</strong> in credit card history
                                                                    </p>

                                                                    <p class="h5" style="line-height: 20px; margin-top: 60px">
                                                                        <strong>Online fraud accounted for 58% in 2016</strong>
                                                                    </p>
                                                                </div>

                                                                <div class="ca-col ca-col-xs-8 ca-col-sm-5 d-flex __center">
                                                                    <div class="d-flex __center">
                                                                        <img class="img-responsive" src="/static/website/version/images/credit-card/online_vs_fraud.png" alt="Online vs in-person fraud" style="max-width: 205px !important;">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Federal Reserve Payments Study — 2017</div>
                                            </div>
                                        </li>

                                        <!-- 4 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Does the size of your business matter to a fraudster?</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap text-center">
                                                        <div class="ca-card__body">
                                                            <div class="ca-col col-9">
                                                                <p class="h2 txt-grey" style="line-height: 35px; margin-bottom: 45px;">The <strong class="txt-red">size</strong> of your business <strong class="txt-red">doesn’t matter</strong><br> to the online fraudster.</p>

                                                                <p class="h5 txt-dark-blue" style="line-height: 20px;">Attacks targeting businesses with less than 250 employees are expected to grow in 2018.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Internet Security Threat Report 2016</div>
                                            </div>
                                        </li>

                                        <!-- 5 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Not all online fraud is created equal</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap text-center">
                                                        <div class="ca-card__body">
                                                            <p class="txt-dark-blue">Routinely reported <strong class="txt-red">friendly fraud</strong> rates</p>

                                                            <div class="LG-normal txt-red">60%–90%</div>

                                                            <p class="h5 txt-grey" style="margin-bottom: 33px;">(Online merchants – 2016)</p>

                                                            <p class="h5 ca-col col-10" style="font-weight: bold; line-height: 20px;"> Friendly fraud is the case of a customer receiving a service only to provide invalid card details or false information.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Solving the CNP False Decline Puzzle — Ethoca Research Report</div>
                                            </div>
                                        </li>

                                        <!-- 6 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Chargebacks contribute to fraud too</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __wrap">
                                                        <div class="ca-card__body">
                                                            <p class="h2">Friendly fraud = <strong class="txt-red">Chargebacks</strong></p>

                                                            <p>Online Merchants Chargeback losses</p>
                                                            <div class="LG-normal txt-grey">$7B–2016</div>
                                                            <p>This number is expected to be <strong class="txt-red">4x larger in 2020.</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Payment Fraud Outlook 2020</div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="ca-bottom-line">
                                        <strong>Fraud</strong> is <strong>nuanced</strong>. It can manifest as an attack or a chargeback, and it affects all businesses, big and small. 
                                    </div>
                                    
                                    <h4 id="does-safety-impact-customer-relationships" class="ca-content__subheading">
                                        2B. Does safety impact customer relationships?
                                    </h4>


                                    <ul class="ca-cards  ca-content__list">
                                        <!-- 1 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Consumers don’t believe their information is safe</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-10">
                                                                    <p class="h3 text-center" style="line-height: 30px;">Only <strong class="txt-red">1/10</strong> Americans are ‘very confident’ that websites are capable of keeping their credit card information secure.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Pew Research Center Survey</div>
                                            </div>
                                        </li>

                                        <!-- 2 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block did-you-know">
                                                <h4 class="ca-block__title">Did you know?</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __center">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row __center" style="margin: 20px 0">
                                                                <div class="ca-col col-4">
                                                                    <div class="LG-normal __type2">7/10</div>
                                                                </div>
                                                                <div class="ca-col col-6">
                                                                    <p class="h4" style="line-height: 25px;">consumers make payment decisions based on which <strong>payment method is most secure.</strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Cardtronics Health of Cash, 2017</div>
                                            </div>
                                        </li>

                                        <!-- 3 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Security concerns can impact sales</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __wrap __center">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row __center" style="margin-top: 40px;">
                                                                
                                                                <div class="ca-col col-4 text-right">
                                                                    <span class="LG-normal txt-red __type2">37%</span>
                                                                </div>

                                                                <div class="ca-col col-6">
                                                                    say they have <strong class="txt-red">abandoned</strong> an online purchase because they did not <strong class="txt-red">feel</strong> their payment would be <strong class="txt-red">secure</strong>.
                                                                </div>

                                                                <div class="ca-col col-9" style="margin-top: 30px">
                                                                    <p class="h5 txt-grey text-center" style="line-height: 20px;">(Consumers who have made three or more online purchases in the last year)</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">American Express Digital Payments Survey</div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="ca-bottom-line">Customers are aware of how vulnerable their credit card information is. Your <strong>customers need to be reassured that you’re handling their information sensitively and responsibly.</strong></div>


                                    <h4 id="fighting-fraud" class="ca-content__subheading">
                                        2C. Fighting fraud
                                    </h4>

                                    <ul class="ca-cards  ca-content__list">
                                        <!-- 1 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">The most effective tools to fight fraud</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __wrap">
                                                        <div class="ca-card__body text-center">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-6 __flow-center">
                                                                    <p class="h1"><strong>AVS Filters</strong></p>
                                                                    <p class="h5 txt-green">(Address Verification Service)</p>
                                                                </div>
                                                            </div>

                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-6 __flow-center">
                                                                    <p class="h1"><strong>CVV Filters</strong></p>
                                                                    <p class="h5 txt-green">(Card Verification Numbers)</p>
                                                                </div>
                                                            </div>

                                                            <p class="h5 txt-grey" style="line-height: 20px; margin-top: 50px;">Rated by merchants in the U.S.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Fraud Benchmark Study, CyberSource</div>
                                            </div>
                                        </li>

                                        <!-- 2 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Effective fraud tools are underused</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __wrap">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-5 __flow-center text-right">
                                                                    <span class="special-txt txt-red"><span class="h2" style="font-weight: bold;">only</span><span style="font-size: 60px;">53%</span></span>
                                                                </div>
                                                                <div class="ca-col col-6 __flow-center">
                                                                    <p class="h4 txt-grey" style="line-height: 26px;">of merchants <strong class="txt-dark-blue">require</strong> customers to enter the <strong class="txt-dark-blue">CVV</strong></p>
                                                                </div>
                                                            </div>

                                                            <div class="ca-row __center" style="margin-top: 50px">
                                                                <div class="ca-col col-5 __flow-center text-right">
                                                                    <span class="special-txt txt-red"><span class="h2" style="font-weight: bold;">only</span><span style="font-size: 60px;">39%</span></span>
                                                                </div>
                                                                <div class="ca-col col-6 __flow-center">
                                                                    <p class="h4 txt-grey" style="line-height: 26px;"><strong class="txt-dark-blue">decline transactions</strong> when a verified <strong class="txt-dark-blue">billing address</strong> has <strong class="txt-dark-blue">not been provided.</strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">American Express Digital Payments Survey</div>
                                            </div>
                                        </li>

                                        <!-- 3 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Compliance regulations are frequently updated</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __wrap">
                                                        <div class="ca-card__body text-center">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-9 __flow-center">
                                                                    <p class="h2 text-center txt-grey" style="line-height: 36px;"><strong class="txt-red">62%</strong> of <strong>financial service firms</strong> are <strong class="txt-red">expecting</strong> regulators to <strong class="txt-red">revise regulatory information</strong> in 2018. </p>

                                                                    <p class="txt-grey h5" style="line-height: 20px">(22% are expecting new regulation)</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Cost Of Compliance Study, Thomson Reuters, 2017</div>
                                            </div>
                                        </li>

                                        <!-- 4 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Keeping up with regulations is difficult</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body text-center">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col ca-col-sm-8 __flow-center">
                                                                    <p class="h2 text-center" style="line-height: 36px;"><span class="txt-red">Only 31%</span> of<br> businesses <strong>outsource</strong> their compliance to a third party.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Cost Of Compliance Study, Thomson Reuters, 2017</div>
                                            </div>
                                        </li>
                                        

                                        <!-- 5 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Does it make sense to outsource compliance?</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body text-center">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-10 __flow-center">
                                                                    <p class="h4 text-center" style="line-height: 36px;">Of the businesses who outsourced compliance in 2017, the <strong class="txt-red">38% said</strong> it was because of the <strong class="txt-red">rising cost of compliance.</strong></p>

                                                                    <p class="txt-grey h5" style="line-height: 20px">(This number was 24% in 2016)</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Accenture Cost of Cybercrime study 2017</div>
                                            </div>
                                        </li>

                                        <!-- 6 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Does it make sense to invest in security intelligence?</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body text-center">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-9 __flow-center">
                                                                    <p class="h2 text-center" style="line-height: 36px;">Investing in security intelligence systems saved online businesses <strong class="txt-red nowrap">$2.8 million</strong> in 2017</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Accenture Cost of Cybercrime study 2017</div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="ca-bottom-line">To quote Visa, <strong>“Finding the right tools to automatically screen for fraud is key</strong> to achieve the right balance among minimizing losses, maximizing revenues, and controlling costs.”</div>
                                </section>
                                <!-- ============================================================
                                Section two end 
                                ============================================================= -->
                                <!-- ============================================================
                                Section three start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative" id="state">
                                    <h3 class="ca-content__heading">
                                        <span class="title-prefix">Chapter 3</span>
                                        <span class="title">State</span>
                                    </h3>
                                    <p class="ca-content__desc">
                                    Credit cards have been a go-to payment method since long before the internet was around. This is slowly changing (finally). Mobile payment adoption is on the rise, e-wallets are predicted to take over the online payment market in the next decade or so, and direct debit payments are a preferred payment method in Europe. Does this mean it is not worth accepting credit cards in 2018? The answer is more intricate than you might think.
                                    </p>

                                    <h4 id="multiple-payment-methods-matter" class="ca-content__subheading">
                                        3A. Multiple payment methods matter
                                    </h4>

                                    <ul class="ca-cards  ca-content__list">
                                        <!-- 1 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Cash on the decline</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __wrap">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row __center" style="margin: 20px 0">
                                                                <div class="ca-col col-4 __flow-center">
                                                                    <div class="LG-normal __type2 txt-green">2/3</div>
                                                                </div>

                                                                <div class="ca-col col-5 __flow-center">
                                                                    <p>of merchants say that they are <strong>very likely</strong> to go <strong>completely cashless</strong> in the near future.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">American Express Digital Payments Survey</div>
                                            </div>
                                        </li>


                                        <!-- 2 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Check payments are on the decline</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __wrap">
                                                        <div class="ca-card__body text-center">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-5 __flow-center">
                                                                    <p>By 2018,<br><strong>check payment volume <br class="visible-lg" /><span class="txt-green">will reduce</span></strong> by</p>
                                                                    <div class="LG-normal __type2 txt-green" style="margin-top: 20px;margin-bottom: 30px">46%</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Nilson Report, Growth in Purchase Transactions 2009 – 2019</div>
                                            </div>
                                        </li>

                                        <!-- 3 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block did-you-know">
                                                <h4 class="ca-block__title">Did you know?</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __center">
                                                        <div class="ca-card__body">
                                                        <div class="ca-row __center" style="margin: 20px 0">
                                                                <div class="ca-col col-4 __flow-center">
                                                                    <div class="LG-normal __type2">9/10</div>
                                                                </div>
                                                                <div class="ca-col col-6 __flow-center">
                                                                    <p class="h4" style="line-height: 25px;">people like having the ability to use a variety of payment methods when making a purchase.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Cardtronics Health of Cash report</div>
                                            </div>
                                        </li>

                                        <!-- 4 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Payment methods are important to customers</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __wrap">
                                                        <div class="ca-card__body text-center">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-7 __flow-center">
                                                                    <p class="h5 txt-grey" style="line-height: 20px;">(Of the consumers who make an online purchase at least once a week)</p>
                                                                </div>

                                                                <div class="ca-col col-9 __flow-center">
                                                                    <p class="h4" style="line-height: 30px; margin-top: 40px; margin-bottom: 40px;"><span class="h1 txt-green" style="font-weight: bold;">73%</span> reveal that the <strong>type of payment</strong> a business accepts <strong>impacts</strong> whether they will <strong>buy from that business.</strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">JP Morgan Chase Report — The Intersection of Payment and Commerce in a Digital World</div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="ca-bottom-line">
                                        <strong>Multiple payment methods</strong> have <strong>always mattered</strong> to customers. While cash and check used to be preferred means of payment, though, the trends are changing.
                                    </div>

                                    <!-- 3A -->
                                    <h4 id="alternative-payment-methods" class="ca-content__subheading">
                                        3B. Alternative Payment Methods
                                    </h4>

                                    <ul class="ca-cards  ca-content__list">
                                        <!-- 1 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">How are alternative payment methods doing?</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __wrap">
                                                        <div class="ca-card__body text-center">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-8 __flow-center">
                                                                    <p class="h3 txt-green" style="line-height: 30px; margin-bottom: 40px" ><strong>E-wallets will grow the most</strong><span class="txt-grey"> as a payment method in the next five years</span></p>
                                                                    
                                                                    
                                                                </div>
                                                                <div class="ca-col col-9 __flow-center"><p class="h5 txt-grey" style="line-height: 20px;">(Compared with <strong class="txt-dark-blue">bank transfers, cash on delivery, charge cards, debit cards, PostPay, PrePay</strong>, and others)</p></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">WorldPay, Global Payments Report Perview</div>
                                            </div>
                                        </li>
                                        
                                        <!-- 2 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block did-you-know">
                                                <h4 class="ca-block__title">E-wallets are the future, but they’re not there as yet</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-8 __flow-center">
                                                                    <p class="txt-grey text-center" style="margin-top: 50px; ">(As of 2018)</p>
                                                                    <p class="h2 text-center" style="line-height: 36px; margin-bottom: 20px"><strong><span class="txt-red">Only 16%</span> of</strong><br> consumers <strong>have</strong> ever <strong>used e-wallets.</strong></p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">JP Morgan Chase Report — The Intersection of Payment and Commerce in a Digital World</div>
                                            </div>
                                        </li>

                                        <!-- 3 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">PayPal is the e-wallet of choice</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __wrap">
                                                        <div class="ca-card__body text-center">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-9 __flow-center">
                                                                    <p class="h3" style="line-height: 34px;
                                                                    margin-bottom: 40px">
                                                                    <img alt="Paypal" title="Paypal" style="max-width: 150px; margin-bottom: 12px" src="/static/website/version/images/credit-card/paypal.png"><br>
                                                                    is the <strong class="txt-green">most recognized</strong> and used online checkout service</p>

                                                                    <div class="ca-row __center text-center">
                                                                        <div class="ca-col col-9 __flow-center">
                                                                            <p style="line-height: 20px; margin-bottom: 30px;"><strong class="txt-green">77%</strong> of the cardholders in the US<strong>are familiar</strong> with the service.</p>


                                                                            <p style="line-height: 20px; margin-bottom: 30px;"><strong class="txt-green">62%</strong> of the cardholders in the US are familiar with and are currently <strong>using the service</strong>.</p>

                                                                            <p style="line-height: 20px;"><strong class="txt-green">69%</strong> of consumers <strong>believe Paypal’s technology</strong> is better at protecting their financial information.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="ca-col col-7"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Globe News Wire Survey 2016</div>
                                            </div>
                                        </li>

                                        <!-- 4 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Credit cards are more popular than ever</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-8  __flow-center text-center">
                                                                    <p class="h4 txt-grey" style="margin-bottom: 15px; ">(2015–2017)</p>
                                                                    <p class="h4" style="line-height: 26px;">Credit card payments <strong>registered the highest growth rate</strong></p>
                                                                    <div class="LG-normal __type2 txt-green">10.2%</div>
                                                                    <p class="txt-grey">
                                                                    among the core payment types.  
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Federal Reserve Payments Study 2017</div>
                                            </div>
                                        </li>

                                        <!-- 5 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Can cards compete with alternative payment methods?</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body text-center">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-10 __flow-center">
                                                                    <p class="h3 txt-grey" style="line-height: 30px"><strong class="txt-green">Credit Cards</strong> are expected to be the e-wallets’ <strong class="txt-green">only serious competition</strong> over the next five years.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Federal Reserve Payments Study 2017</div>
                                            </div>
                                        </li>

                                        <!-- unfinished -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Merchants predict credit cards will never be out of fashion</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body text-center">
                                                            <div class="special-txt __type2 txt-green lhmax">7/10</div>
                                                        
                                                            <div class="ca-row">
                                                                <div class="ca-col ca-col-sm-8 center">    
                                                                    <p class="h3 txt-grey nomargin" style="line-height: 34px;"><span class="txt-dark-blue">merchants believe</span> they will still be accepting <span class="txt-dark-blue">credit card payments</span> in <span class="txt-dark-blue">five years</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">JP Morgan Chase Report — The Intersection of Payment and Commerce in a Digital World</div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="ca-bottom-line"><strong>Only 38% of consumers feel that they are informed about e-wallets. Credit cards remain</strong> the <strong>go-to online payment method</strong> today.</div>

                                    <!-- 3C -->
                                    <h4 id="location-influences-preferred-payment-methods" class="ca-content__subheading">3C. Location influences preferred payment methods</h4>

                                    <ul class="ca-cards  ca-content__list">
                                        <!-- 1 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">UnionPay owns the growing Chinese market</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __wrap">
                                                        <div class="ca-card__body text-center">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-8  __flow-center">
                                                                    <p class="h4" style="line-height: 30px">While Visa, Mastercard, and American Express own the US market share, <strong class="txt-green">UnionPay owns the global credit card market</strong>, growing <strong>51%</strong> from <strong>2012 to 2017</strong>. </p>
                                                                    
                                                                    
                                                                </div>
                                                                <div class="ca-col col-7  __flow-center"><p class="h5 txt-grey" style="line-height: 20px;">(UnionPay went from 3,534 million cards in circulation to 5,341 cards).</p></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">The Nilson Report — Payment Cards Worldwide</div>
                                            </div>
                                        </li>
                                        <!-- 2 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Direct Debit is Europe’s preferred payment method</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __wrap">
                                                        <div class="ca-card__body text-center">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-8  __flow-center">
                                                                    <div class="special-txt txt-green">90%</div>
                                                                    <p>of consumers with bank accounts in the UK have <strong>at least one direct debit mandate</strong>.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">BACS Direct Debit Consultation Outcomes 2017</div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="ca-bottom-line">If you plan on taking your business global, <strong>go with a payment gateway</strong> that supports the card networks and payment methods that are <strong>popular outside your primary region.</strong></div>
                                </section>
                                <!-- ============================================================
                                Section three end 
                                ============================================================= -->
                            </div>

                            <div class="col-sm-2 col-md-3 col-lg-4"></div>
                            <div class="col-sm-8 col-sm-offset-1 col-md-7 col-md-offset-1 col-lg-6 col-lg-offset-1 ca-cards__wrap">
                                <!-- ============================================================
                                Section four start 
                                ============================================================= -->
                                <section class="ca-content ca-content--relative" id="costs">
                                    <h3 class="ca-content__heading">
                                        <span class="title-prefix">Chapter 4</span>
                                        <span class="title">Costs</span>
                                    </h3>
                                    <p class="ca-content__desc">
                                    Last (but certainly not least), there is the question of how much it’s actually going to cost you to accept payments online. Apart from the obvious costs that you will owe your gateway or merchant service provider (a cut of which will go to all the players we met in Chapter 1), there are the not-so-obvious costs that you need to plan for: from accounting to a checkout experience and ever-dreadful chargebacks.
                                    </p>

                                    <!-- 4A -->
                                    <h4 id="the-usual-suspects" class="ca-content__subheading">
                                        4A. The usual suspects
                                    </h4>

                                    <ul class="ca-cards  ca-content__list">
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">A breakdown of credit card processing fees</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row">
                                                                <div class="h3 txt-green"><strong>1. Non-negotiable fees</strong></div>

                                                                <div style="padding-left: 30px">

                                                                    <p class="txt-grey">An <strong class="txt-dark-blue">assessment fee</strong> is owed to the card network facilitating the transaction (Visa or MasterCard, for example). An <strong class="txt-dark-blue">interchange fee</strong> is owed to the bank that issued the credit card being used for the transaction.</p>

                                                                    <p class="txt-grey">Together, these <strong class="txt-dark-blue">non-negotiable fees work out to between 2% and 4% per transaction.</strong></p>
                                                                </div>


                                                                <div class="h3 txt-red" style="margin-top: 40px"><strong>2. Negotiable fees</strong></div>

                                                                <div style="padding-left: 30px">
                                                                    <p class="txt-grey">And finally, you pay your gateway or processor <strong class="txt-dark-blue">a markup fee.</strong></p>

                                                                    <p class="txt-grey">It’s in <strong class="txt-dark-blue">negotiating the markup fee</strong> that you <strong class="txt-dark-blue">can minimize</strong> how much it <strong class="txt-dark-blue">costs to process credit cards.</strong> </p>

                                                                </div>
                                                                
                                                                <div class="ca-row __center"><div class="ca-col col-9 text-center __flow-center" style="margin-top: 70px"><p class="h5" style="line-height: 20px">Here’s a detailed <a href="https://www.cardfellow.com/credit-card-processing-guide/" target="_blank">guide to processing fees</a> and how to get the best price for your payment processor →</p></div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">The cost of credit card processing fees</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body text-center">
                                                            <div class="ca-col col-8  __flow-center">
                                                                <p>(Credit card <strong>processing fees</strong> paid by U.S. merchants in 2017)</p>
                                                                <div class="special-txt txt-red">$7 billion</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">The Nilson Report</div>
                                            </div>
                                        </li>
                                    </ul>

                                    <h4 id="additional-overheads" class="ca-content__subheading">
                                        4B. Additional overheads
                                    </h4>
                                    
                                    <ul class="ca-cards  ca-content__list">
                                        <!-- 40 -->
                                            <li class="ca-content__item">
                                                <div class="ca-block">
                                                    <h4 class="ca-block__title">Additional cost: Building a checkout experience</h4>

                                                    <div class="ca-block__body">
                                                        <div class="ca-card __fluid __wrap">
                                                            <div class="ca-card__body">
                                                                <div class="special-txt txt-green" style="margin-bottom: 5px; font-size: 70px;">6/10 </div>
                                                                <div class="ca-row __center text-center">
                                                                    <div class="ca-col col-8 __flow-center"><p class="h4 txt-grey" style="line-height: 26px;">merchants who saw an increase in online sales in 2017 <strong class="txt-dark-blue">said</strong> that an <strong class="txt-dark-blue">improved checkout experience played a significant role.</strong></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ca-block__source">American Express Digital Payments Survey</div>
                                                </div>
                                            </li>

                                            <!-- 41 -->
                                            <li class="ca-content__item">
                                                <div class="ca-block">
                                                    <h4 class="ca-block__title">Additional cost: Bookkeeping</h4>

                                                    <div class="ca-block__body">
                                                        <div class="ca-card __fluid __wrap costs-cardBc">
                                                            <div class="ca-card__body">
                                                                <p class="h5">Annual costs can be anywhere from</p>
                                                                <div class="special-txt txt-red big-txt" style="margin-bottom: 32px;">$1,000–$20,000 </div>
                                                                <div class="ca-row __center text-center">
                                                                    <div class="ca-col col-9  __flow-center"><p class="h5" style="line-height: 20px;">40% of online small business owners say bookkeeping and taxes are the worst part of running a business. 47% said that the financial cost was the biggest burden bookkeeping posed to their business. </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ca-block__source">NSBA Small Businesses Taxation Survey</div>
                                                </div>
                                            </li>


                                            <!-- 42 -->
                                            <li class="ca-content__item">
                                                <div class="ca-block">
                                                    <h4 class="ca-block__title">Additional cost: Fraud</h4>

                                                    <div class="ca-block__body">
                                                        <div class="ca-card __center __wrap">
                                                            <div class="ca-card__body">
                                                                <div class="ca-row __center">
                                                                    <div class="ca-col col-2">
                                                                        <div class="special-txt txt-red">8%</div>
                                                                    </div>
                                                                    <div class="ca-col col-5 __flow-center">
                                                                        <p class="h4" style="line-height: 20px;">of online revenue is at  <strong>risk of fraud</strong></p>
                                                                    </div>
                                                                </div>

                                                                <div class="ca-col col-9 __flow-center"><p class="h5 txt-grey text-center" style="line-height: 20px; margin-top: 30px">Customers aren’t liable if a fraudulent or erroneous charge hits their credit card account. While this is a huge part of the reason consumers find credit cards safe to use and prefer them, it can be a cost on your business if it isn’t planned for.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ca-block__source">Global Fraud Attack Index 2016</div>
                                                </div>
                                            </li>
                                    </ul>

                                    <div class="ca-bottom-line"><strong>Credit Card Processing fees</strong> are just a <strong>small part of overall costs</strong> you should be thinking about if you want to accept credit cards.</div>


                                    <!-- 4C -->
                                    <h4 id="chargebacks" class="ca-content__subheading">4C. Chargebacks: Another cost to think about</h4>

                                    <ul class="ca-cards  ca-content__list">
                                        <!-- 1 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">What are chargebacks?</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __wrap">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row __center text-center">
                                                                <div class="ca-col col-9"><p class="h1 txt-grey">A <strong class="txt-red">chargeback</strong> is a <span class="txt-dark-blue">disputed transaction.</span></p></div>
                                                                <div class="ca-row __center text-center" style="margin-top: 30px">
                                                                    <div class="ca-col col-8 __flow-center"><p class="h5 txt-grey" style="line-height: 20px;">When a customer initiates a chargeback, she is disputing that the charge was made and is asking for her money back.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <!-- 2 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Minimum cost per chargeback</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __wrap">
                                                        <div class="ca-card__body">
                                                            <p class="h4">A chargeback can cost anywhere between</p>
                                                            <div class="special-txt txt-red">$5–$30</div>
                                                            <div class="ca-row __center text-center">
                                                                <div class="ca-col col-6  __flow-center"><p class="h5 txt-grey" style="line-height: 20px;">(depending on your gateway; if a dispute escalates to arbitration, it can incur fees upwards of $500).</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Chargeback Fees: Processor Library for Merchants (chargeback.com)</div>
                                            </div>
                                        </li>

                                        <!-- 2 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Friendly fraud = Chargebacks</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __wrap">
                                                        <div class="ca-card__body">
                                                            <div class="special-txt txt-red">9/10</div>
                                                            <div class="ca-row __center text-center">
                                                                <div class="ca-col ca-col-sm-8"><p class="h4" style="line-height: 20px;">cases of chargebacks are <strong>probable case of fraud</strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Federal Reserve Bank of Kansas City, Research Working Papers 2016</div>
                                            </div>
                                        </li>


                                        <!-- 3 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Your chargeback rate will tell you if you’re being scammed</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __fluid __wrap">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row">
                                                                <div class="ca-col col-6">
                                                                    <p>
                                                                        <span class="txt-grey">If your chargeback rate is</span><br>
                                                                        <span class="special-txt txt-red nowrap">Above 1%</span><br>
                                                                        <span>then you might be a <strong>victim of chargeback fraud</strong></span>
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div class="ca-row" style="margin-top: 50px">
                                                                <div class="ca-col col-3"></div>
                                                                <div class="ca-col col-8">
                                                                    <p class="h5 txt-grey" style="line-height:20px">
                                                                        If you divide your total chargebacks by the total number of transactions within a monthly period, you have your chargeback rate.
                                                                    </p>

                                                                    <p class="h5" style="line-height:20px">
                                                                        <strong>The average chargeback rate is around 0.5–0.8%, with an industry-standard maximum of 1%.</strong>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">CyberSource Fraud Benchmark Study</div>
                                            </div>
                                        </li>

                                        <!-- 4 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">The crucial difference between chargebacks and returns</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center __wrap">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row __center" style="margin-bottom: 35px;">
                                                                <div class="ca-col ca-col-sm-5 ca-col-md-4 text-right">
                                                                    <div class="LG-normal txt-red">8/10</div>
                                                                </div>
                                                                <div class="ca-col ca-col-sm-5 ca-col-md-5 __flow-center">
                                                                    <p class="h4 txt-grey" style="line-height: 25px">customers admit to <strong class="txt-red">filing</strong> a <strong class="txt-red">chargeback out of convenience</strong> </p>
                                                                </div>
                                                            </div>
                                                            <div class="ca-row __center text-center">
                                                                <div class="col-10  __flow-center"><p style="line-height: 20px; font-size: 14px;">(6 out of 10 customers admit that they’re <strong>unaware of</strong> <br>a <strong>store’s return policy at the time of purchase.)</strong></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Consumer Insights Survey (chargeback.com)</div>
                                            </div>
                                        </li>


                                        <!-- 5 -->
                                        <li class="ca-content__item">
                                            <div class="ca-block">
                                                <h4 class="ca-block__title">Chargebacks lead to losses</h4>

                                                <div class="ca-block__body">
                                                    <div class="ca-card __center">
                                                        <div class="ca-card__body">
                                                            <div class="ca-row __center">
                                                                <div class="ca-col col-11 text-center">
                                                                    <h3 class="txt-grey" style="margin-bottom: 45px;">It's <strong class="txt-red">impossible</strong> to <br><strong class="txt-red">put an exact number</strong><br> to <strong class="txt-red">chargeback losses</strong>.</h3>

                                                                    <p class="h5 txt-grey" style="line-height: 20px;">Chargebacks do incur losses. A partial picture of what these losses are is possible, and it's enough to conclude that chargebacks can significantly affect a business’s bottom line.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ca-block__source">Federal Reserve Bank of Kansas City, Research Working Papers 2016</div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="ca-bottom-line"><strong>Chargebacks can eat into your profits.</strong> The good news is you can mitigate them with strong customer service, a crystal clear return policy, and robust fraud detection.</div>
                                </section>
                                <!-- ============================================================
                                Section four end 
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
    <!-- ===================================================================
    Start: Footer Section
    ==================================================================== -->
    <div id="cb-affix-footer">
        <!-- =============================================================================
        Contant six Start 
        ============================================================================== -->
        <div class="l-main__row">
            <div class="container">
                <!-- ====================================================================
                Sections start
                ===================================================================== -->
                <div class="row">
                    <div class="col-sm-8 center">
                        <p style="font-size: 16px;text-align: center;font-weight: bold;margin: 30px 0 80px;"><span style="font-size: 36px;line-height: 1.3;padding-bottom: 12px;display: inline-block;">Thinking about <br> accepting payments online?</span> <br>Here's some reading that you might be interested in:</p>
                    </div>
                    <!-- ================================================================
                    Fixed right content start 
                    ================================================================= -->
                    <div class="col-xs-12 col-sm-9 center">
                        <section class="ca-cta__section">
                            <div class="row">
                                <div class="col-sm-6">
                                    <a class="ca-cta-card" href="https://www.chargebee.com/blog/online-payment-gateway-service-provider/" target="_blank">
                                        <figure class="ca-cta-card__figure">
                                            <img class="img-responsive" src="/static/website/version/images/credit-card/payment.png">
                                        </figure>
                                        <div class="ca-cta-card__desc">
                                            <h3>Payment Gateways 101 – Why and How They Matter</h3>
                                        </div>
                                    </a>
                                </div>

                                <div class="col-sm-6">
                                    <a class="ca-cta-card" href="https://www.chargebee.com/blog/making-sense-credit-card-declines/" target="_blank">
                                        <figure class="ca-cta-card__figure">
                                            <img class="img-responsive" src="/static/website/version/images/credit-card/rabit.png">
                                        </figure>
                                        <div class="ca-cta-card__desc">
                                            <h3>Making Sense of <br>Credit Card Declines</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
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
        Contant six End 
        ============================================================================== -->
        <app-footer />
    </div>
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
        //For animation on scroll
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
                    top: prev.offset().top + prev.outerHeight(true) - 30,
                    bottom: function () {
                        return (this.bottom = $('#cb-affix-footer').outerHeight(true) + 150)
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


    .ca3-scroll-down-arrow {
        background-image: url('/static/website/version/images/icon/arrow/cb-banner-arrow.svg');
        background-size: contain;
        background-repeat: no-repeat;
    }
    .ca3-scroll-down-link {
        height: 60px;
        width: 80px;
        margin: 0px 0 0 -40px;
        position: absolute;
        left: 50%;
        bottom: 0px;
        z-index: 100;
        -webkit-animation: ca3_fade_move_down 2s ease-in-out infinite;
        -moz-animation:    ca3_fade_move_down 2s ease-in-out infinite;
        animation:         ca3_fade_move_down 2s ease-in-out infinite;
    }
    /*animated scroll arrow animation*/
    @-webkit-keyframes ca3_fade_move_down {
        0%   { -webkit-transform:translate(0,-20px); opacity: 0;  }
        50%  { opacity: 1;  }
        100% { -webkit-transform:translate(0,20px); opacity: 0; }
    }
    @-moz-keyframes ca3_fade_move_down {
        0%   { -moz-transform:translate(0,-20px); opacity: 0;  }
        50%  { opacity: 1;  }
        100% { -moz-transform:translate(0,20px); opacity: 0; }
    }
    @keyframes ca3_fade_move_down {
        0%   { transform:translate(0,-20px); opacity: 0;  }
        50%  { opacity: 1;  }
        100% { transform:translate(0,20px); opacity: 0; }
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

