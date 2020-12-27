<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'A complete guide to SaaS Accounting'"
            :cb-desc="'SaaS Accounting is different from traditional accounting. This guide is a complete teardown of all SaaS concepts with examples'"
            :cb-url="'/resources/guides/saas-accounting-guide/'" 
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
        <section class="cg-hero cg-hero--acquisation">
            <div class="cg-hero__container">
                <div class="cg-hero__content">
                    <!-- <div class="cg-hero__label">
                        Chapter 4
                    </div> -->
                    <h1 class="cg-hero__title">
                       A complete guide to <br> SaaS Accounting 
                    </h1>
                </div>
               <div class="cg-hero__actions hidden-xs">
                    <div class="cg-hero__actiona">
                        Click to Read
                    </div>
                </div>
            </div>
        </section>
        <!-- ===================================================================
        End: Website Hero
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
                                Table of contents:
                            </div>
                        </div>
                        <ul class="cg-affix__list nav">
                            <li class="cg-affix__item">
                                <a href="#introduction">  
                                    Introduction
                                </a>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#types-of-accounting">
                                   Types of Accounting
                                </a>
                                <ul class="cg-affix__sublist">
                                    <li class="cg-affix__subitem">
                                        <a href="#cash-accounting">
                                            Cash accounting
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#accrual-accounting">
                                            Accrual accounting
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#accrual-accounting-for-saas">  
                                            Accrual accounting for SaaS
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#gaap-financial-statements">
                                  GAAP financial statements
                                </a>
                                <ul class="cg-affix__sublist">
                                    <li class="cg-affix__subitem">
                                        <a href="#billings-and-revenue">
                                           Bookings, billings, and revenue
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#revenue-recognition-for-saas">
                                   Revenue recognition for SaaS
                                </a>
                                <ul class="cg-affix__sublist">
                                    <li class="cg-affix__subitem">
                                        <a href="#deferred-revenue">
                                          Deferred revenue
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#accrued-revenue">
                                            Accrued revenue
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#asc-606-guidelines">  
                                           ASC 606 guidelines
                                        </a>
                                    </li>
                                </ul>
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
                        <div class="cg-affix__content" id="introduction"> 
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                      Introduction to SaaS Accounting
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        In recent years with the surge of the SaaS economy, accounting practices have evolved too.
                                    </p>
                                    <p class="cg-article__desc">
                                        But the question remains - when should a SaaS business start worrying about a robust accounting system? At an early stage, or when they grow into an SMB, or as an enterprise business?
                                    </p>
                                     <p class="cg-article__desc">
                                         The answer is, from the absolute beginning. No matter what stage a business is in, it has to keep track of the cash inflows and outflows. That makes accounting essential.
                                    </p>
                                    <p class="cg-article__desc">
                                        This guide comprises the basics and some not-so-basic concepts of SaaS accounting, to make the finance executive as well as the founder-who-doubles-up-as-an-finance-exec’s life easier.
                                    </p>
                                    <p class="cg-article__desc">
                                        And while we are talking about exploring the basics and moving deeper, here’s an <a href="/resources/saas-finance/" target="_blank" class="cg-link">extensive list of resources useful for SaaS finance teams</a>.
                                    </p>
                                </div>
                            </div>
                            <div class="cg-article mt-100">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                      How is SaaS Accounting Different?
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        The subscription business model is fundamentally different from the traditional licence model.
                                    </p>
                                    <figure class="cg-article__figure" style="margin-bottom: 25px;margin-top: 50px;">   
                                        <img src="/static/website/version/images/resources/guides/sass-aacounting-guide/saas-accounting-different.png" alt="saas revenue cycle" class="img-responsive" />
                                    </figure>
                                    <p class="cg-article__desc">
                                        In a business with a licence model, a standard invoice would contain:
                                    </p>
                                    <ul>
                                        <li class="cg-article__item"> Initial License </li>
                                        <li class="cg-article__item">Implementation</li> 
                                        <li class="cg-article__item">Customization</li>
                                         <li class="cg-article__item">Support and Maintenance </li>
                                    </ul>
                                    <p class="cg-article__desc">
                                        However in a SaaS business, all these charges are bundled into the ‘subscription fees’ or ‘set-up fees’ over the subscription fees. The success of SaaS depends on how many customers are willing to use the product on a recurring basis. 
                                    </p>
                                     <figure class="cg-article__figure" style="margin-bottom: 25px;margin-top: 50px;text-align: center;">  
                                        <a href="https://www.mondaq.com/unitedstates/Accounting-and-Audit/103946/SaaS-is-Different-An-Accounting-Primer-for-SaaS-Companies" target="_blank">
                                          <img src="/static/website/version/images/resources/guides/sass-aacounting-guide/lifecycle-of-a-saas-customer.png" alt="Lifecycle of a SaaS customer" class="img-responsive" />
                                        </a> 
                                        <a href="https://www.mondaq.com/unitedstates/Accounting-and-Audit/103946/SaaS-is-Different-An-Accounting-Primer-for-SaaS-Companies" class="cg-link img-ref" target="_blank">  
                                            Lifecycle of a SaaS Custom
                                        </a>
                            
                                    </figure>
                                    <p class="cg-article__desc" style="margin-top: 40px;">
                                        Other key differences in SaaS accounting are:
                                    </p>
                                    <ul>
                                        <li class="cg-article__item">Cash flow dynamics are more complex thanks to recurring payments</li>
                                        <li class="cg-article__item">Lower Cost of Goods Sold (COGS), primarily consisting of sales and marketing, hosting the product and support.</li> 
                                        <li class="cg-article__item">Higher gross margins, ranging from <a href="https://leadedgecapital.com/why-we-like-saas-businesses/" target="_blank" class="cg-link">60-80%</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cg-article mt-100"> 
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                      Calculating Gross Margin for SaaS
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        Gross margin indicates how well the company generates revenue from the cost involved in producing the product or service i.e., revenues less the costs of goods sold. Let’s start with a few definitions:
                                    </p> 
                                    <ul>
                                        <li>
                                            Revenues: Revenue is the income earned when you provide your service to the customers.
                                        </li>
                                        <li>
                                            Cost of goods sold (COGS): This includes cost involved in producing goods. 
                                        </li>
                                    </ul>
                                    <p class="cg-article__desc">
                                        With that in mind, here is how to calculate the gross profit margin:
                                    </p>
                                     <figure class="cg-article__figure" style="margin-bottom: 25px;margin-top: 50px;">  
                                          <img style="width: 300px;margin: 0 auto;" src="/static/website/version/images/resources/guides/sass-aacounting-guide/calculating-gross-margin-for-saas.png" alt="calculating-gross-margin-for-saas" class="img-responsive" />
                                    </figure>
                                    <p class="cg-article__desc"> 
                                        In other words, a SaaS company’s gross margin is its gross profit as a percentage of sales. It is important because it represents the amount of cash a business generates to cover the operating expenses. Higher the gross margin, more the money a business can reinvest to grow more.
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
                        <div class="cg-affix__content" id="types-of-accounting"> 
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                      Types of SaaS Accounting
                                    </h2>
                                </div>
                                <p class="cg-article__desc">
                                   There are two accounting methods, based on the timing of when the sale is recorded in the accounts.
                                </p>
                            </div>
                        </div>
                        <div id="cash-accounting"> 
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                       Cash-basis accounting:
                                    </h3>
                                </div>
                                <p class="cg-article__desc">
                                    <strong>Cash-basis accounting</strong> recognizes revenue and expenses when cash is received or paid. So when a payment is received, it is added to the ledger and when an expense is incurred, it is subtracted. This method does not take accounts receivable and payable into account. Cash-basis accounting is often used by small businesses and entrepreneurs with less or no inventory.
                                </p>
                                <table class="table table-bordered child-equalwidth">
                                    <thead>
                                        <tr><th class="bb-none text-center">Pros</th> 
                                        <th class="bb-none text-center">Cons</th>
                                        </tr>
                                    </thead> 
                                    <tbody>
                                        <tr>
                                            <td>Simple to maintain</td> 
                                            <td>Difficult to forecast</td>
                                        </tr> 
                                        <tr>
                                            <td>Easier to track how much cash a business has at a given point of time</td> 
                                            <td>Insufficient for large, inventory-heavy businesses</td>
                                        </tr>
                                        <tr>
                                            <td>The business is taxed only when the cash hits the bank account</td> 
                                            <td>Possibility of misinterpreting the true financial situation of the business as it doesn’t take credit purchases/expenses into account</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                         <div id="accrual-accounting" class="mt-100"> 
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                       Accrual Accounting:
                                    </h3>
                                </div>
                                <p class="cg-article__desc">
                                    In <strong>Accrual accounting</strong>, on the other hand, revenues and expenses are recorded when they are earned, regardless of when the cash actually comes in or when expenses are incurred. Businesses using accrual accounting have the advantage of being able to defer the revenue reporting on tax returns.
                                </p>
                                <p class="cg-article__desc">
                                    This method is more commonly used than cash-basis and despite its complicated nature, it is more suited for growing, inventory-heavy businesses. A business that averages more than $25 million in gross receipts each year is <a href="https://www.irs.gov/publications/p538#en_US_201809_publink1000270649" class="cg-link" target="_blank">required to use the accrual method, as per the IRS</a>.
                                </p>
                                 <table class="table table-bordered child-equalwidth">
                                    <thead>
                                        <tr><th class="bb-none text-center">Pros</th> 
                                        <th class="bb-none text-center">Cons</th>
                                        </tr>
                                    </thead> 
                                    <tbody>
                                        <tr>
                                            <td>More accurate representation of actual profit at a given time</td> 
                                            <td>Complex, requires intense bookkeeping</td>
                                        </tr> 
                                        <tr>
                                            <td>Easier forecasting of future expenses and revenues</td> 
                                            <td>Income can be reported when the sale is incurred. So, the business pays taxes on money it hasn't received</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="mt-100">   
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                      What is Meant by ‘Recording Transactions’? 
                                    </h3>
                                </div>
                                <p class="cg-article__desc">
                                    So far, we have seen how cash and accrual accounting dictates ‘when’ to record transactions.
                                </p>
                                <p class="cg-article__desc">
                                    But what exactly is ‘recording a transaction’?
                                </p>
                                <p class="cg-article__desc">
                                    All businesses have to record all the financial transactions in a ledger. This is called bookkeeping. Bookkeeping enables companies to make key decisions pertaining to operations, investments, and financing. It gives a clear record of the transactions and the current financial position of the company.
                                </p>
                                <p class="cg-article__desc">
                                    Accurate bookkeeping also has implications for external users like investors, financial institutions, and also the government. Bookkeeping enables businesses to provide the necessary information requested by these parties, which is vital to assess their ongoing operations. For example, not providing records to the <a href="https://www.irs.gov/" class="cg-link" target="_blank">IRS</a> can lead to penalties. Bookkeeping also serves as an important record for investors and lenders to check the health of their investment.
                                </p>
                            </div>
                        </div>
                        <div id="accrual-accounting-for-saas" class="mt-100">   
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                      Accrual Accounting for SaaS
                                    </h3>
                                </div>
                                <p class="cg-article__desc">
                                    SaaS accounting is a bit more nuanced because of the subscription business model. The revenue is subject to routine changes (think plan upgrades/downgrades) and is mixed with one-time fees and upfront payments.
                                </p>
                                <p class="cg-article__desc">
                                    <a href="/resources/glossaries/what-is-mrr/" class="cg-link" target="_blank">Monthly Recurring Revenue (MRR)</a> is an important metric for SaaS businesses and  Accrual accounting suits subscription businesses because accrual revenue, if recognized correctly, actually tracks the MRR. Since it allows tracking revenues and expenses together in the same period, it provides comparable trends for SaaS businesses.
                                </p>
                                <p class="cg-article__desc">
                                    Accounting methods differ on the basis of when the revenue is recognized. Here’s a <a href="/resources/guides/saas-revenue-recognition-guide/" class="cg-link" target="_blank">complete guide to Revenue recognition for SaaS</a>.
                                </p>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 2
                        ==================================================================== -->  

                         <!-- ===================================================================
                        Start: Content 3
                        ==================================================================== -->  
                            <div class="cg-affix__content" id="gaap-financial-statements"> 
                               <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                     GAAP Financial Statements & SaaS Metrics
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        The rules and guidelines for financial accounting and reporting are enlisted by accounting standards. Generally Accepted Accounting Principles (GAAP US) is an accounting standard regulated by the <a href="https://www.fasb.org/home" class="cg-link" target="_blank">Financial Accounting Standards Board (FASB)</a>. The alternative for most other countries is the International Financial Reporting Standards (IFRS), which is regulated by the <a href="https://www.ifrs.com/updates/iasb/about_the_iasb.html" class="cg-link" target="_blank">International Accounting Standards Board (IASB)</a>. 
                                    </p>
                                    <p class="cg-article__desc">
                                        The purpose of accounting standards is to:
                                    </p>
                                    <ul class="cg-article__list">
                                        <li class="cg-article__item">
                                            Eliminate variations in the way businesses across industries handle accounting for similar transactions by bringing standardization and transparency in financial reporting across companies and industries.
                                        </li>
                                        <li class="cg-article__item">
                                            Make it easy for investors and stakeholders to comprehend and compare the financial statements across companies and industries.
                                        </li>
                                   </ul>
                                   <p class="cg-article__desc">
                                       As per GAAP, three financial statements are required:
                                    </p>
                                    <ul class="cg-article__list list-number">
                                        <li class="cg-article__item">
                                            <b>The income statement:</b> It consists of revenue and expenses. It’s also known as Profit and Loss (P&L) statement. 
                                        </li>
                                        <li class="cg-article__item">
                                           <b> The balance sheet:</b>  It sets assets equal to liabilities and shareholder's equity.
                                        </li>
                                        <li class="cg-article__item">
                                            <b> The cash flow statement:</b>  It records cash inflows and outflows, which is majorly ignored in the other two statements.
                                        </li>
                                   </ul>
                                </div>
                               </div>
                            </div>
                            <div id="billings-and-revenue"> 
                                <div class="cg-article">
                                    <div class="cg-article__header"> 
                                        <h3 class="cg-article__title">
                                        Bookings, Billings, MRR
                                        </h3>
                                    </div>
                                </div>
                                <p class="cg-article__desc">
                                    There are a few top-line SaaS metrics that every SaaS business must track. In order to comply with the GAAP principles, a solid understanding of these key metrics is crucial. Let’s explore Bookings, Billings, and Revenue from an accounting perspective.
                                </p>
                                <div class="cg-section">
                                    <p class="sub-head"> Bookings:</p>   
                                    <p class="cg-article__desc">
                                        <a href="/resources/glossaries/what-are-bookings/" target="_blank" class="cg-link"> Booking</a> is a forward-looking metric that typically indicates the value of a contract signed with a prospective customer for a given period of time. In a nutshell, bookings signify the commitment from your customers to pay you money for the service you provide.
                                    </p>
                                    <p class="cg-article__desc">
                                        Various types of bookings include <a href="/resources/glossaries/what-are-bookings/" class="cg-link" target="_blank">New Bookings, Renewal Bookings, and Upgraded Bookings</a>. In the case of multi-year contracts, bookings that have at least one year’s committed revenue is considered as <a href="/resources/glossaries/what-are-bookings/" class="cg-link" target="_blank">Annual Contract Value (ACV) Bookings</a>. While ACV talks about annual amounts, <a href="/resources/glossaries/what-are-bookings/" class="cg-link" target="_blank">Total Contract Value (TCV) Bookings</a> are calculated taking into consideration the complete duration of the contract. Additionally, there are also non-recurring bookings that consist of one-time fees like set-up fees, training fees, and discounts.
                                    </p>
                                    <p class="cg-article__desc">
                                        Bookings are a primary indicator of future revenue growth. Bookings can help measure the growth of sales over time. Apart from sales, bookings help CFOs and finance teams in planning cash outflows and inflows. In effect, it helps finance teams to report bookings as committed money, without recording them as revenue and thus avoiding inaccurate calculation of MRR or ARR (Annual Recurring Revenue).
                                    </p>
                                </div>
                                <div class="cg-section">
                                    <p class="sub-head"> Billings:</p>   
                                    <p class="cg-article__desc">
                                        Billings are the invoice amounts billed to customers. This can be over a certain time period, for instance over a month or the whole year. Simply put, billings include money you are owed from your customer.
                                    </p>
                                    <p class="cg-article__desc">
                                        If a SaaS has high bookings but lower billings, it is a leading indicator of future cash flow problems. To maintain healthy cash-flows, SaaS businesses have to think of ways to get customers to pay upfront and increase billings. This can be done by offering discounts on annual payments.
                                    </p>
                                </div>
                                <div class="cg-section">
                                    <p class="sub-head">Revenue:</p>   
                                    <p class="cg-article__desc">
                                        Revenue is the income earned when you actually provide your service to the customers. For every month of successful delivery of service, you can ‘<a href="/resources/glossaries/revenue-recognition-principle/" class="cg-link" target="_blank">recognize</a>’ the revenue for that month. This is as per GAAP rules, which state that revenue can only be recognized once it is ‘earned’.
                                    </p>
                                    <p class="cg-article__desc">
                                        Relying on only booking and billings for assessing performance means that you may be looking at inflated numbers. A more accurate way is to keep tabs on recognized revenue, which is the actual amount earned by the business in exchange for the product or service.
                                    </p>
                                    <p class="cg-article__desc">
                                        With our detailed example here, learn <a href="https://www.chargebee.com/blog/bookings-vs-billings-vs-revenue/" class="cg-link" target="_blank">how to calculate SaaS bookings, billings, and MRR.</a>
                                    </p>
                                </div>
                            </div>   
                         <!-- ===================================================================
                        End: Content 3
                        ==================================================================== -->      

                         <!-- ===================================================================
                        Start: Content 4
                        ==================================================================== -->
                        <div class="cg-affix__content" id="revenue-recognition-for-saas"> 
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                      Revenue Recognition for SaaS
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        <a href="/resources/glossaries/revenue-recognition-principle/" class="cg-link" target="_blank">Revenue recognition</a> is one of the principles of the Generally Accepted Accounting Principles (GAAP US). It provides the condition under which revenue is recognized and a way to account for it in the financial statements. But before we go deeper into revenue recognition for SaaS, it is important to understand some key concepts.
                                    </p>
                                </div>
                            </div>
                        </div>

                         <div class="cg-affix__content" id="deferred-revenue"> 
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                      Deferred Revenue
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        <a href="/resources/glossaries/deferred-revenue/" class="cg-link" target="_blank">Deferred revenue</a> is the money you’ve already billed, but you can’t recognize as revenue because the service is yet to be provided. It is commonly known as unearned revenue. Deferred revenue is listed as liabilities on the balance sheet.
                                    </p>
                                    <p class="cg-article__desc">
                                        You need to be careful while calculating deferred revenue. Recognizing revenue before it’s earned will misinterpret your growth numbers, spiking up your growth potential. It is also important to know that this un-earned cash should not be invested in your future projects until it’s earned.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="cg-affix__content" id="accrued-revenue"> 
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                     Accrued Revenue    
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                  <p class="cg-article__desc">
                                       <a href="/resources/glossaries/accrued-revenue/" class="cg-link" target="_blank">Accrued revenue</a> is revenue that is recognized but is not yet realized. In other words, it is the revenue earned/recognized by a business for which the invoice is yet to be billed to the customer. It is also known as unbilled revenue.
                                  </p>
                                  <p class="cg-article__desc">
                                      Accrued Revenue is treated as an Account Receivable until the customer pays the bill. Hence it is a current asset in the balance sheet. However, a high Accrued Revenue signifies that the business is not getting payments for its services and can be alarming from a cash-flow perspective.
                                  </p>
                                   <p class="cg-article__desc">
                                    In SaaS accounting, revenue is often accrued in cases of:
                                   </p>
                                    <ul class="cg-article__list list-number">
                                        <li class="cg-article__item">
                                            Plan-based and Quantity-based upgrades
                                        </li>
                                        <li class="cg-article__item">
                                        Add-on purchases in the subscription period
                                        </li>
                                        <li class="cg-article__item">
                                            One-time charges like migration fees/setup fees
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                         <div class="cg-affix__content" id="asc-606-guidelines"> 
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                    ASC 606 and SaaS Revenue Recognition  
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        FASB and IFRS joined hands to establish a new revenue recognition standard, called the ASC 606.
                                    </p>
                                     <p class="cg-article__desc">
                                         <a href="https://www.chargebee.com/blog/revenue-recognition-asc-606/" class="cg-link" target="_blank">ASC 606</a> defines a flexible, robust five-step framework that encompasses the revenue recognition principles across industries. This has cleared up the clouds of confusion that loomed over SaaS accounting due to inconsistent and unclear practices.
                                     </p>
                                      <figure class="cg-article__figure" style="margin-bottom: 25px;margin-top: 50px;">  
                                          <img style="width: 100%;margin: 0 auto;" src="/static/website/version/images/resources/guides/recognition-guide/stages.png" alt="asc 606 revenue recognition framework" class="img-responsive" />
                                    </figure>
                                    <ul class="cg-article__list">
                                        <li class="cg-article__item list-number">
                                          <p class="cg-article__desc">
                                              <strong class="cg-block">Identify the contract with a customer:</strong>
                                              This outlines the <a href="https://corporatefinanceinstitute.com/resources/knowledge/accounting/revenue-recognition/" class="cg-link" target="_blank">criteria</a> to be met when establishing a contract with the customer to provide products or services. The contract is mutually agreed upon (written or oral) and defines the rights and obligations of each party.
                                          </p> 
                                        </li>
                                        <li class="cg-article__item list-number">
                                          <p class="cg-article__desc">  
                                              <strong class="cg-block">Identify the performance obligations in the contract:</strong>
                                              This describes all the performance obligations or deliverables when the contract is being drawn up. If the services or products are distinct, they need to be accounted for separately
                                          </p> 
                                        </li>
                                         <li class="cg-article__item list-number">
                                          <p class="cg-article__desc">  
                                              <strong class="cg-block">Determine the transaction price:</strong>
                                              This step enlists all the considerations that have to be taken while establishing the transaction price.
                                          </p> 
                                        </li>
                                         <li class="cg-article__item list-number">
                                          <p class="cg-article__desc">  
                                              <strong class="cg-block">Allocate the transaction price:</strong>
                                              This explains how transaction price is allocated across all performance obligations mentioned in the contract. This includes variable amounts as well.
                                          </p> 
                                        </li>
                                         <li class="cg-article__item list-number"> 
                                        <p class="cg-article__desc">  
                                              <strong class="cg-block">Recognize revenue when (or as) the performance obligation is satisfied:</strong>
                                              Revenue can be recognized over time as and when the customer benefits from your product or service and is driven by the transfer of control to the customer.
                                        </p> 
                                        </li>
                                    </ul>
                                     <p class="cg-article__desc">  
                                            But this is just the tip of an iceberg. Revenue recognition in SaaS entails various complex scenarios caused by the subscription upgrades, downgrades, cancellations, refunds, etc. For a deeper understanding of SaaS revenue recognition and the implications of ASC 606 with examples, check out our <a href="/resources/guides/saas-revenue-recognition-guide/" class="cg-link" target="_blank"> ultimate guide for SaaS revenue recognition</a>.
                                    </p>
                                </div>
                            </div>
                            <div class="cg-article mt-100">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                      Making SaaS Accounting Easy
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        As a growing SaaS, using spreadsheets is a slippery slope as it is time-consuming and error-prone .With scale, the revenue workflows inevitably develop some cracks and leaks. The key to plugging these leaks is to automate repetitive tasks.
                                    </p>
                                     <p class="cg-article__desc">
                                         All scaling SaaS businesses need a tool which manages subscriptions & recurring billing on one hand, and streamlines finance operations on the other. Chargebee makes recognizing, reporting, and staying compliant a breeze, while managing your recurring billing seamlessly.
                                    </p>     
                                </div>
                            </div>
                         </div>
                        
                        <!-- ===================================================================
                        End: Content 4
                        ==================================================================== --> 



                    </div>
                </div> 
                <!-- ===================================================================
                Start: Affix Right
                ==================================================================== -->
                </div>
            </div>
        </section>
        <section class="cg-footer" style="margin-bottom:50px;margin-top:120px">
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 text-center">
                        <div class="cg-article__header">
                            <h3 class="cg-article__title">
                               Learn how Chargebee empowers your <br class="visible-lg">SaaS Accounting</h3>
                            <p class="cg-article__desc"></p> 
                        </div> 
                        <div class="cg-article__content" style="margin-top:15px">
                             <a href="https://www.chargebee.com/for-subscription-finance-operations/" class="cg-btn">
                                Simplified Finance Ops 
                             </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
        <!-- ===================================================================
        End: Affix
        ==================================================================== -->
        <!-- ===================================================================
        End: Website Affix
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
.cg-hero{
    margin-bottom: 120px;
}
.cg-affixs{
    margin-top: 120px; 
}
.cg-affix__body {
    padding-top: 50px;
} 
.img-ref {
    position: relative;
    left: -12px;
    top: 3px;
} 
.cg-article__header h3 {
    font-size: 26px;
} 
.sub-head {
    font-weight: 700;
    font-size: 20px;
} 
.mt-100{
    margin-top: 100px; 
}
.bb-none {
    border-bottom: none!important;
}
.list-number {
    list-style-type: decimal; 
}
.child-equalwidth tbody tr td, .child-equalwidth thead tr th {
    width: 50%;
} 
.cg-affix__content:not(:first-child){padding-top: 70px !important;} 
.cg-box__bold:before {content: '→';position: absolute;left: -20px;} 
.cg-box__bold {
    position: relative;
}
.cg-link{display: inline;}
h4{
    font-size:18px; 
    line-height: 36px; 
}
.b-b-none {
    border-bottom: none !important;
} 
.border-left {
    border-left: 1px solid #000000;
}
.table-row {
    border: 1px solid #000000;
    display: flex;
}

.table-row .table-col {
    flex: 1;
    padding: 10px;
}
.cg-article__box{
    border: 1px solid #000;
    padding: 15px;
}
.cg-article__role{
    font-weight: 700; 
}
.cg-box__lists {
    padding-left: 40px;
}
.cg-box__bold {
    font-weight: 700;
    padding-left: 0px !important;
}
.cg-box__lists p{
    padding-left: 30px;
    font-size: 16px; 
}
.g-article-desc-line {
    position: relative;
}
.g-article-desc-line:before {
    content: '-';
    position: absolute;
    left: -20px;
}

 .list-style-none{
     list-style-type: none; 
 }
    #ch-js-header-cloned{
        display: none;
    }

    .affix { top: 70px; }
    .affix-bottom { position: absolute; }
    .cg-hero__actions{
        justify-content: center;
    }
    .cg-affix__item > a,.cg-affix__subitem > a{
        white-space: initial;
    }
    .cg-affix__item > a{
        line-height: 24px;
    }
    .cg-affix__item:before{
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 18px;
    }
    .cg-affix__item {
        padding-left: 24px;
    }
    .cg-affix__subitem{
        margin-bottom: 8px;
    }
    .cg-article__subhead{
        font-size: 24px;
        line-height: 32px;
        text-align: center;
        font-weight: bold;
        max-width: 520px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
    }
    .cg-article__content .cg-article__desc:last-child {
        margin-bottom: 0;
    }
    .cg-article__heading{
        margin-bottom: -16px;
    }
    .cg-link--bordered {
        border: 1px solid #E2E9F9;
        padding: 16px 32px;
        border-radius: 8px;
        margin: auto;
        margin-bottom: 120px;
        font-size: 18px;
        line-height: normal;
    }
    @media (max-width: 767px){
        .cg-link--bordered {
            margin-left: auto;
            margin-right: auto;
            display: block;
            max-width: none;
        }
        .cg-hero {
            margin-bottom: 0px;
        }
        .cg-affixs {
          margin-top: 0px;
        } 
        #cash-accounting, #billings-and-revenue {
           margin-top: 70px;
        } 
    }
    .cg-link--bordered:hover{
        box-shadow: 0 1px 1px 0 rgba(90,122,190,.1), 0 10px 20px 0 rgba(90,122,190,.2);
    }
    .cg-links .cg-link{
        margin: 8px 16px;
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
        .cg-hero {
            background-position: center;
        }
    }
</style>
<!-- ===========================================================================
End: Style
================================================================================
