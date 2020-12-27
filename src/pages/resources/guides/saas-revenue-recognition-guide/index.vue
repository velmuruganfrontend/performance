<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'Ultimate guide to SaaS Revenue Recognition in 2020'"
            :cb-desc="'A complete guide for SaaS Revenue Recognition, ASC 606 framework, and examples.'" 
            :cb-url="'/resources/guides/saas-revenue-recognition-guide/'"
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
                       The Ultimate Guide to SaaS <br>Revenue Recognition <br>
                        <!--<small><i>A Definitive Guide</i></small>-->
                    </h1>
                </div>
               <div class="cg-hero__actions hidden-xs">
                    <!-- <a href="/resources/guides/subscription-pricing-trial-strategy/saas-pricing-local-currencies/" class="cg-hero__action">
                        Previous Chapter
                    </a> -->
                    <div class="cg-hero__actiona">
                        Click to Read
                    </div>

                    <!-- <a href="/resources/guides/subscription-pricing-trial-strategy/" class="cg-hero__action">
                        Prologue
                    </a> -->
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
                        <ul class="cg-affix__list nav">
                            <li class="cg-affix__item">
                                <a href="#introduction">
                                    Introduction
                                </a>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#what-is-revenue-recognition">
                                   What is Revenue Recognition?
                                </a>
                                <ul class="cg-affix__sublist">
                                    <li class="cg-affix__subitem">
                                        <a href="#types-of-revenue-recognition">
                                           Types of Revenue Recognition
                                        </a> 
                                        <ul class="cg-affix__sublist">
                                            <li class="cg-affix__subitem">
                                                <a href="#cash-basis-accounting">
                                                  Cash-basis Accounting
                                                </a>
                                            </li>
                                            <li class="cg-affix__subitem">
                                                <a href="#accrual-accounting">
                                                 Accrual accounting
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#the-importance-of-accounting-standards">
                                   The Importance of Accounting Standards
                                </a>
                                <ul class="cg-affix__sublist">
                                    <li class="cg-affix__subitem">
                                        <a href="#the-birth-of-asc">
                                          The Birth of ASC 606
                                        </a> 
                                    </li>
                                </ul>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#revenue-recognition-in-the-world-of-saas">
                                    ASC 606 & Revenue Recognition in the World of SaaS
                                </a>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#what-does-asc-mean-for-saas-companies">
                                   What Does ASC 606 Mean for SaaS Companies?
                                </a>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#key-challenges-of-saas-revenue-recognition">  
                                    Key Challenges of SaaS Revenue Recognition
                                </a>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#revenue-recognition-scenarios-for-saas-companies">  
                                    Revenue Recognition Scenarios for SaaS Companies
                                </a>
                                <ul class="cg-affix__sublist">
                                    <li class="cg-affix__subitem">
                                        <a href="#Annual-Plan">
                                           Annual Plan
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#plan-based-upgrades">
                                           Plan-based Upgrades
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#quantity-based-upgrades">
                                          Quantity-based-upgrades
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#plan-based-downgrades">
                                          Plan-based Downgrades
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#quantity-based-downgrades">
                                           Quantity-based Downgrades
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#cancellation-with-refund">
                                          Cancellation with Refund
                                        </a>
                                    </li>
                                     <li class="cg-affix__subitem">
                                        <a href="#cancellation-without-refund">
                                          Cancellation without Refund
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#shift-in-monthly-to-annual-plan-cycle">
                                          Shift in Monthly to Annual Plan Cycle
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#shift-in-annual-to-monthly-plan-cycle">
                                          Shift in Annual to Monthly Plan Cycle
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#addons-and-metered-billing">
                                          Addons and Metered Billing
                                        </a>
                                    </li>
                                    <li class="cg-affix__subitem">
                                        <a href="#bad-debts-and-write-off">
                                          Bad Debts and Write-Offs
                                        </a>
                                        <ul class="cg-affix__sublist">
                                            <li class="cg-affix__subitem">
                                                <a href="#partial-write-off">
                                                   Partial write-off
                                                </a>
                                            </li>
                                            <li class="cg-affix__subitem">
                                                <a href="#full-write-off">
                                                  Full write-off
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#key-metrics-to-track">  
                                    Key metrics to track
                                </a>
                            </li>
                            <li class="cg-affix__item">
                                <a href="#making-saas-revenue-recognition-easy">  
                                    Making SaaS Revenue Recognition Easy
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
                        <div class="cg-affix__content" id="introduction">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                        Introduction
                                    </h2>
                                </div>

                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        Revenue recognition is a critical part of accounting for every business, especially for those that report earnings to investors or stakeholders. There are structured rules around how businesses should calculate and report revenue. Here’s what every SaaS business needs to know about revenue recognition and compliance to standards like ASC 606.
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
                        <div class="cg-affix__content" id="what-is-revenue-recognition">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                        What is Revenue Recognition?
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        Revenue Recognition is the process of converting cash from ‘bookings’ into ‘revenue’.
                                    </p>
                                     <p class="cg-article__desc">
                                         Let’s say a customer has signed an annual contract of $12000 at $1000 per month. Can the $12000 be recognized as revenue immediately? Not really. From a SaaS accounting perspective, the revenue can be recognized only when the said product/service is delivered to the customer. So in this example, $1000 revenue can be recognized every month in return for the product/service delivered, until the end of the contract.
                                     </p>
                                    <p class="cg-article__desc">
                                        Simply put, revenue recognition is about when a business earns its revenue.
                                    </p>
                                     <p class="cg-article__desc">
                                         Revenue recognition is important for SaaS businesses because the business model demands to charge customers upfront for services that will be delivered over a period of time. So, SaaS businesses have to track the money that flows in their account, and how much of it is actually recognized.
                                     </p>
                                </div>              
                            </div>
                        </div>
                        <div class="cg-affix__content" id="types-of-revenue-recognition">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                       Types of Revenue Recognition 
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                        There are two types of revenue recognition, based on the timing of when the sale is recorded in your accounts.
                                    </p>
                                </div>              
                            </div>
                            <div class="cg-article mt-60" id="cash-basis-accounting">
                                <div class="cg-article__header">
                                    <h4 class="cg-article__title">
                                       Cash-basis Accounting
                                    </h4>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                    <strong> Cash-basis Accounting </strong>  recognizes revenue and expenses when cash is received or paid i.e. when a payment is received, it is added to the ledger and when an expense is incurred, it is subtracted. This method does not take accounts receivable and payable into account. Cash-basis accounting is often used by small businesses and entrepreneurs with less or no inventory.
                                    </p>
                                    <table class="table table-bordered child-equalwidth">  
                                        <thead>
                                            <tr>
                                                <th class="bb-none text-center">Pros</th>
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
                            </div><!--cash-basis-accounting-->
                            <div class="cg-article mt-60" id="accrual-accounting">
                                <div class="cg-article__header">
                                    <h4 class="cg-article__title">
                                       Accrual Accounting:
                                    </h4>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc">
                                         <strong>Accrual accounting</strong> , on the other hand, is when revenues and expenses are recorded when they are earned, regardless of when the cash actually comes in or when expenses are incurred. Accrual accounting suits subscription businesses because accrual revenue, if recognized correctly, actually <a href="https://www.saas-capital.com/blog-posts/what-accounting-method-should-my-saas-company-use/" target="_blank" class="cg-link">tracks the MRR</a>. 
                                    </p>
                                     <p class="cg-article__desc">
                                         This method is more commonly used than cash-basis and despite its complicated nature, it is more suited for growing, inventory-heavy businesses. A business that averages more than $25 million in gross receipts each year is <a href="https://www.irs.gov/publications/p538#en_US_201809_publink1000270649" target="_blank" class="cg-link">required to use the accrual method, as per the IRS</a>. 
                                    </p>

                                    <table class="table table-bordered child-equalwidth">
                                        <thead>
                                            <tr>
                                                <th class="bb-none text-center">Pros</th>
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
                            </div><!--accrual accountingg-->
                        </div>
                        <!-- ===================================================================
                        End: Content 2
                        ==================================================================== -->
                          <!-- ===================================================================
                        Start: Content 3
                        ==================================================================== -->
                        <div class="cg-affix__content" id="the-importance-of-accounting-standards"> 
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                        The Importance of Accounting Standards
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc"> 
                                        The rules and guidelines for financial accounting and reporting are enlisted by accounting standards. <a href="https://www.chargebee.com/resources/glossaries/revenue-recognition-principle/"  target="_blank" class="cg-link">Revenue recognition</a> is one of the principles of the Generally Accepted Accounting Principles (GAAP US), which is regulated by the <a href="https://www.fasb.org/home" class="cg-link" target="_blank">Financial Accounting Standards Board (FASB)</a>. The alternative for most other countries is the International Financial Reporting Standards (IFRS), which is regulated by the <a href="https://www.ifrs.com/updates/iasb/about_the_iasb.html" target="_blank" class="cg-link">International Accounting Standards Board (IASB)</a>. 
                                    </p>
                                    <p class="cg-article__desc">
                                        Accounting standards exist to:
                                     </p>
                                    <ul class="cg-article__list">
                                       <li class="cg-article__item">
                                           Eliminate variations in the way businesses across industries handle accounting for similar transactions by bringing standardization and transparency in financial reporting across companies and industries.
                                       </li>
                                       <li class="cg-article__item">
                                           Make it easy for investors and stakeholders to comprehend and compare the financial statements across companies and industries.
                                       </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                         <div class="cg-affix__content" id="the-birth-of-asc"> 
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                       The Birth of ASC 606
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc"> 
                                        As per a statement released by FASB, revenue recognition requirements of IFRS lacked sufficient detail and the accounting requirements of U.S. GAAP were considered to be conflicting in certain areas.
                                    </p>
                                    <p class="cg-article__desc">
                                        To overcome these shortcomings, FASB and IFRS joined hands to establish a new revenue recognition standard, called the ASC 606.
                                     </p>
                                      <p class="cg-article__desc">
                                          ASC 606 defines a flexible, robust framework that encompasses the revenue recognition principles across industries. This cleared up the clouds of confusion that loomed over SaaS accounting due to inconsistent and unclear practices.
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
                        <!--<div class="cg-affix__content" id="revenue-recognition-in-the-world-of-saas"> 
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                        The Importance of Accounting Standards
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc"> 
                                        The rules and guidelines for financial accounting and reporting are enlisted by accounting standards. <a href="https://www.chargebee.com/resources/glossaries/revenue-recognition-principle/" class="cg-link" target="_blank">Revenue recognition</a> is one of the principles of the Generally Accepted Accounting Principles (GAAP US), which is regulated by the <a href="https://www.fasb.org/home" class="cg-link" target="_blank">Financial Accounting Standards Board (FASB)</a>. The alternative for most other countries is the International Financial Reporting Standards (IFRS), which is regulated by the <a href="https://www.ifrs.com/updates/iasb/about_the_iasb.html" target="_blank" class="cg-link">International Accounting Standards Board (IASB)</a>. 
                                    </p>
                                    <p class="cg-article__desc">
                                        Accounting standards exist to:
                                     </p>
                                    <ul class="cg-article__list">
                                       <li class="cg-article__item">
                                           Eliminate variations in the way businesses across industries handle accounting for similar transactions by bringing standardization and transparency in financial reporting across companies and industries.
                                       </li>
                                       <li class="cg-article__item">
                                           Make it easy for investors and stakeholders to comprehend and compare the financial statements across companies and industries.
                                       </li>
                                    </ul>
                                </div>
                            </div>
                        </div>--> 
                         <div class="cg-affix__content" id="revenue-recognition-in-the-world-of-saas"> 
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                       ASC 606 & Revenue Recognition in the World of SaaS
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc"> 
                                        ASC 606 simplifies the preparation of financial statements through a SaaS-friendly 5 Step Model for Revenue Recognition. This model is aimed at directing businesses about how much and when to recognize revenue.
                                    </p>
                                    <figure class="cg-article__figure" style="margin-bottom:60px;margin-top:50px">
                                        <img src="/static/website/version/images/resources/guides/recognition-guide/stages.png" alt="asc 606 revenue recognition framework" class="img-responsive">
                                    </figure>
                                    <ul class="cg-article__list">
                                        <li class="cg-article__item">
                                            <strong>Identify the contract with a customer</strong>
                                            <p class="cg-article__desc">
                                                This outlines the criteria to be met when establishing a contract with the customer to provide products or services. The contract is mutually agreed upon (written or oral) and defines the rights and obligations of each party.
                                            </p>
                                        </li>
                                         <li class="cg-article__item">
                                            <strong>Identify the performance obligations in the contract</strong>
                                            <p class="cg-article__desc">
                                                This describes all the performance obligations or deliverables when the contract is being drawn up. If the services or products are distinct, they need to be accounted for separately
                                            </p>
                                        </li>
                                         <li class="cg-article__item">
                                            <strong>Determine the transaction price</strong>
                                            <p class="cg-article__desc">
                                                This step enlists all the considerations that have to be taken while establishing the transaction price.
                                            </p>
                                        </li>
                                         <li class="cg-article__item">
                                            <strong>Allocate the transaction price</strong>
                                            <p class="cg-article__desc">
                                                This explains how transaction price is allocated across all performance obligations mentioned in the contract. This includes variable amounts as well.
                                            </p>
                                        </li>
                                         <li class="cg-article__item">
                                            <strong>Recognize revenue when (or as) the performance obligation is satisfied</strong>
                                            <p class="cg-article__desc">
                                                Revenue can be recognized over time as and when the customer benefits from your product or service and is driven by the transfer of control to the customer.
                                            </p>
                                        </li>
                                    </ul>
                                    <p class="cg-article__desc"> 
                                        There are five criteria for recognizing billings as revenue. All these prerequisites have to be met:
                                    </p>
                                    <ul class="cg-article__list list-number">
                                        <li class="cg-article__item">
                                            <strong style="margin-bottom: 5px;display: block;">Performance:</strong>
                                            <p class="cg-article__desc b-one">
                                                <strong>Risks and rewards have been transferred from the seller to the buyer</strong>: Risks and rewards won’t be transferred to the buyer until a month of service is delivered.
                                            </p>
                                        </li>
                                         <li class="cg-article__item">
                                            <p class="cg-article__desc b-two">
                                                <strong>The seller has no control over the goods sold</strong>: In the SaaS context, this can be fulfilled once the customer has been using the product for at least a month or more.
                                            </p>
                                        </li>
                                         <li class="cg-article__item">
                                            <strong style="margin-bottom: 5px;display: block;">Collectability:</strong>
                                            <p class="cg-article__desc b-one">
                                                <strong>The collection of payment is reasonably assured</strong>:  At least in case of credit cards, SaaS businesses can be fairly certain (within reason) about the collectability of payments. 
                                            </p>
                                        </li>
                                         <li class="cg-article__item">
                                             <strong style="margin-bottom: 5px;display: block;">Measurability:</strong>
                                            <p class="cg-article__desc b-one">
                                                <strong>The amount of revenue can be reasonably measured</strong>:  As per the matching principle, the SaaS business should be able to match revenue to the expenses.
                                            </p>
                                        </li>
                                         <li class="cg-article__item">
                                            <p class="cg-article__desc b-two">
                                                <strong>The costs of earning the revenue can be reasonably measured</strong>: In SaaS, the cost to service a new customer is usually negligible unless it is a custom implementation.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 4
                        ==================================================================== -->

                          <!-- ===================================================================
                        Start: Content 5
                        ==================================================================== -->
                        <div class="cg-affix__content" id="what-does-asc-mean-for-saas-companies">  
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                       What Does ASC 606 Mean for SaaS Companies?
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                    <p class="cg-article__desc"> 
                                        <a href="https://www.chargebee.com/blog/asc-606-101-subscription-businesses/" class="cg-link" target="_blank">ASC 606’s overarching framework</a> covers all bases for SaaS revenue recognition.
                                    </p>
                                    <p class="cg-article__desc">
                                        Let’s understand this with a simple example. A customer subscribes to a SaaS product on 23rd December through an annual contract. The customer has shared their credit card details and the money has been debited from their account. How do you recognize the  revenue in this scenario?
                                    </p>
                                    <p class="cg-article__desc">
                                        The table below explains how this revenue can be recognized at the book closing of December and the subsequent months.
                                    </p>
                                    <p class="cg-article__desc">
                                        At the end of December, the customer would have used the product for only 9 days, so conditions 1, 2, and 4 remain partially unfulfilled for December book closing. By the end of January, the customer has been using the product for more than a month and is billed for the second month of service. All the prerequisites are satisfied for one full month and the monthly subscription revenue can be recognized at the book closing of Jan.
                                    </p>
                                    <div class="table-div"> 
                                        <table style="width:100%" class="table table-bordered">
                                            <tbody>
                                            <tr>
                                                <th rowspan="2"></th>
                                                <th rowspan="2">Revenue reconigation</th>
                                                <th colspan="3">Can  the revenue for the first month be recognized ?</th>
                                            </tr>
                                            <tr> 
                                                <th>Purchase date, 23rd Dec</th>
                                                <th>Closing of books, 31st Dec</th>
                                                <th>Closing of books, 31st Jan</th>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td class="text-left">Have the risks and rewards been transferred from the seller to the buyer?</td>
                                                <td>❌</td>
                                                <td>❌<br>(Partially fulfilled)</td>
                                                <td>✅</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td class="text-left">Does the seller have no control over the goods sold?</td>
                                                <td>❌</td>
                                                <td>❌<br>(Partially fulfilled)</td>
                                                <td>✅</td>
                                            </tr>
                                            <tr>
                                                <td>3</td> 
                                                <td class="text-left">Is collection of payment reasonably assured?</td>
                                                <td>✅</td>
                                                <td>✅</td>
                                                <td>✅</td>  
                                            </tr>
                                            <tr>
                                                <td>4</td> 
                                                <td class="text-left">Can the amount of revenue be reasonably measured?</td>
                                                <td>❌</td>
                                                <td>❌<br>(Partially fulfilled)</td>
                                                <td>✅</td> 
                                            </tr>
                                            <tr>
                                                <td>5</td> 
                                                <td class="text-left">Can the cost of earning the revenue be reasonably measured?</td>
                                                <td>✅</td>
                                                <td>✅</td>
                                                <td>✅</td> 
                                            </tr> 
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 5
                        ==================================================================== -->

                          <!-- ===================================================================
                        Start: Content 6
                        ==================================================================== -->
                        <div class="cg-affix__content" id="key-challenges-of-saas-revenue-recognition">  
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                       Key Challenges of SaaS Revenue Recognition
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          For annual plans, revenue recognition is straightforward. But the complexity gradually increases with subscription scenarios, when:
                                      </p>
                                      <ul class="cg-article__list">
                                        <li class="cg-article__item">
                                            The customer cancels the subscription mid-way
                                        </li>
                                        <li class="cg-article__item">
                                           They upgrade from a monthly plan to an annual plan in the middle of the year
                                        </li>
                                        <li class="cg-article__item">
                                           They downgrade from a higher plan ($12000) to a lower plan ($6000)
                                        </li>
                                        <li class="cg-article__item">
                                         Customer is unable to pay for the services rendered
                                        </li>
                                      </ul>
                                       <p class="cg-article__desc">
                                         It gets more complex with these features that are often bundled in SaaS:
                                      </p>
                                      <ul class="cg-article__list">
                                        <li class="cg-article__item">
                                           Set-up fees
                                        </li>
                                        <li class="cg-article__item">
                                         Support fees
                                        </li>
                                        <li class="cg-article__item">
                                          Consultation services
                                        </li>
                                        <li class="cg-article__item">
                                          Customization
                                        </li>
                                      </ul>
                                      <p class="cg-article__desc">
                                         Revenue Recognition in such scenarios needs to be prorated and recalibrated. Let’s explore each of these scenarios in detail.
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
                        <div class="cg-affix__content" id="revenue-recognition-scenarios-for-saas-companies">    
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                      Revenue Recognition Scenarios for SaaS Companies
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          Let’s take an example of ‘Help!’, a SaaS company specialising in helpdesk and ticketing management. Help! offers three plans for their subscribers; Growth plan, Pro Plan, and Enterprise plan of $6000, $12000, and $24000 per annum respectively. ‘Help!’ also offers the flexibility to add additional users if required.
                                      </p> 
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 7
                        ==================================================================== -->

                        <!-- ===================================================================
                        Start: Content 8
                        ==================================================================== -->
                        <div class="cg-affix__content" id="Annual-Plan">  
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                     Revenue Recognition for an Annual Plan
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          Let’s assume that a customer has opted for the annual Pro Plan priced at $12000 per annum starting from January. The revenue recognition, in this case, is fairly straightforward.
                                      </p> 
                                       <p class="cg-article__desc">
                                           They get billed with an invoice of $12000 upfront at the beginning of January. But like mentioned before, only $1000 gets recognized in January. What happens to the revenue that is collected but not recognized? This is called <a href="https://www.chargebee.com/resources/glossaries/deferred-revenue/" class="cg-link" target="_blank">'Deferred Revenue'</a>. Hence the remaining $11000 is placed in a Liability Account, based on the Deferred Revenue Accounting best practices.
                                       </p>
                                       <p class="cg-article__desc">
                                           At the end of every subsequent month, another $1000 gets recognized for the services rendered by Help!. This goes on, till December, when Help! recognizes the entire  $12000 paid by the customer and the Deferred Revenue Account holds nil balance.
                                       </p>
                                       <ul class="cg-article__list">
                                            <li class="cg-article__item">
                                               The invoice raised in January will be for $12000
                                            </li>
                                             <li class="cg-article__item">
                                              Revenue recognized in January: $1000
                                            </li>
                                             <li class="cg-article__item">
                                              Deferred Revenue in January: $11000
                                            </li>
                                             <li class="cg-article__item">
                                               Revenue recognized in December: $12000
                                            </li>
                                             <li class="cg-article__item">
                                              Deferred Revenue in December: $0 
                                            </li>
                                       </ul>
                                        <figure class="cg-article__figure" style="margin-bottom: 0;margin-top: 50px;">
                                            <img src="/static/website/version/images/resources/guides/recognition-guide/table1.png" alt="revenue recognition for an annual plan" class="img-responsive" />  
                                        </figure>
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 8
                        ==================================================================== -->
                        <!-- ===================================================================
                        Start: Content 9
                        ==================================================================== -->
                        <div class="cg-affix__content" id="plan-based-upgrades">  
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                     Revenue Recognition for Plan-based Upgrades
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          The customer decides to upgrade from Pro to Enterprise plan i.e. from $12000 to $24000, on the 15th of April.
                                      </p> 
                                       <p class="cg-article__desc">
                                           From a reporting perspective, MRR report for April would show that the MRR for Enterprise plan is $2000.
                                       </p>
                                       <p class="cg-article__desc">
                                           From a revenue recognition perspective, which is dependent on the billing and the services rendered, this is how the sequence of events leading to revenue recognized for April should look like:
                                       </p>
                                       <ul class="cg-article__list">
                                            <li class="cg-article__item">
                                               Invoice raised in January: $12000
                                            </li>
                                             <li class="cg-article__item">
                                             Revenue recognized till March 31: $3000
                                            </li>
                                             <li class="cg-article__item">
                                             Revenue recognized till April 15: $500 (for 15 days of service rendered)
                                            </li>
                                             <li class="cg-article__item">
                                              Total Revenue recognized from January to April 15: $3500
                                            </li>
                                             <li class="cg-article__item">
                                              Credit Note raised = $8500, New Prorated Invoice raised: $17000
                                            </li>
                                            <li class="cg-article__item">
                                                Total Revenue recognized in April: $1500 ($1000 for remaining days of service rendered)
                                            </li>
                                            <li class="cg-article__item">
                                                Deferred Revenue at the end of April: $16000 ($24000 prorated from April 15th to December 31st)
                                            </li>
                                            <li class="cg-article__item">
                                                Revenue recognized in subsequent months (May to December): $2000/mo
                                            </li>
                                       </ul>
                                        <figure class="cg-article__figure" style="margin-bottom: 0;margin-top: 50px;">
                                            <img src="/static/website/version/images/resources/guides/recognition-guide/table2.png" alt="revenue recognition for plan-based upgrades" class="img-responsive" />  
                                        </figure>
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 9
                        ==================================================================== -->

                         <!-- ===================================================================
                        Start: Content 10
                        ==================================================================== -->
                        <div class="cg-affix__content" id="quantity-based-upgrades">  
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                     Revenue Recognition for Quantity-based Upgrades
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          If the customer decides to accommodate 10 additional agents to the existing Pro Plan on May 1st, at the price of $10 per agent for the subsequent months, then this qualifies as a quantity-based upgrade.
                                      </p> 
                                       <p class="cg-article__desc">
                                           In this case, a new invoice will be generated for the additional 10 agents.
                                       </p>
                                       <ul class="cg-article__list">
                                            <li class="cg-article__item">
                                              Invoice raised in January: $12000
                                            </li>
                                             <li class="cg-article__item">
                                             Revenue recognized from January to April: $4000
                                            </li>
                                             <li class="cg-article__item">
                                             Quantity upgraded from 100 to 110 agents on May 1st charged at $10 per agent
                                            </li>
                                             <li class="cg-article__item">
                                             Prorated Invoice will be created in May for $800
                                            </li>
                                             <li class="cg-article__item">
                                              Revenue recognized in May and subsequent months: $1100 ($1000 + ($10*10 agents)
                                            </li>
                                            <li class="cg-article__item">
                                               Deferred Revenue in May: $7700
                                            </li>
                                            <li class="cg-article__item">
                                                Deferred Revenue in June: $6600
                                            </li>
                                       </ul>
                                        <figure class="cg-article__figure" style="margin-bottom: 0;margin-top: 50px;">
                                            <img src="/static/website/version/images/resources/guides/recognition-guide/table3.png" alt="revenue recognition for plan-based upgrades" class="img-responsive" />  
                                        </figure>
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 10
                        ==================================================================== -->
                        
                        <!-- ===================================================================
                        Start: Content 11
                        ==================================================================== -->
                        <div class="cg-affix__content" id="plan-based-downgrades">  
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                    Revenue Recognition for Plan-based Downgrades
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          If the customer downgrades from the Pro Plan of $12000 to the Growth Plan of $6000, on the 15th of April, here’s how the revenue can be recognized: 
                                      </p> 
                                       <p class="cg-article__desc">
                                          Revenue recognized from April 1st to April 15th (under Pro plan) is $500. After downgrading, a credit note of $8500 will be issued and the revenue recognised from April 15th to April 30th (under Growth plan) will be $250.
                                       </p>
                                       <ul class="cg-article__list">
                                            <li class="cg-article__item">
                                            Invoice raised in January: $12000
                                            </li>
                                             <li class="cg-article__item">
                                            Revenue recognized from January to March: $3000
                                            </li>
                                             <li class="cg-article__item">
                                               Revenue recognized from April 1st to April 15th: $500
                                            </li>
                                             <li class="cg-article__item">
                                            A credit note will be issued for $8500
                                            </li>
                                             <li class="cg-article__item">
                                                 A new prorated invoice will be generated for $4250
                                            </li>
                                            <li class="cg-article__item">
                                               Total revenue recognized in April: $750
                                            </li>
                                            <li class="cg-article__item">
                                                Revenue recognized in subsequent months (May to December): $500/mo
                                            </li>
                                            <li class="cg-article__item">
                                                Deferred Revenue in April: $4000
                                            </li>
                                            <li class="cg-article__item">
                                               Deferred Revenue in May: $3500
                                            </li>
                                       </ul>
                                        <figure class="cg-article__figure" style="margin-bottom: 0;margin-top: 50px;">
                                            <img src="/static/website/version/images/resources/guides/recognition-guide/table4.png" alt="revenue recognition for plan-based downgrades" class="img-responsive" />  
                                        </figure>
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 11
                        ==================================================================== -->

                        <!-- ===================================================================
                        Start: Content 12
                        ==================================================================== -->
                        <div class="cg-affix__content" id="quantity-based-downgrades">  
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                      Revenue Recognition for Quantity-based Downgrades
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          Say the customer was using the pro plan of $12000 per annum with 10 additional agents (at $10 per agent) from January. However from April 15th onwards they decide to downgrade to 5 agents.
                                      </p> 
                                       <p class="cg-article__desc">
                                           A credit note will be issued, to adjust for the reduced number of agents and a prorated invoice will be generated. 
                                       </p>
                                       <ul class="cg-article__list">
                                            <li class="cg-article__item">
                                               Invoice raised in January: $12000
                                            </li>
                                             <li class="cg-article__item">
                                               Revenue recognized from January to March: $3300
                                            </li>
                                             <li class="cg-article__item">
                                                Revenue recognized in April: $1000 + $50 (first 15 days) + $25 (last 15 days for 5 agents) = $1075
                                            </li>
                                             <li class="cg-article__item">
                                                Credit note created: $750 (8*100 + $50 for 15 days)
                                            </li>
                                            <li class="cg-article__item">
                                                Prorated invoice generated: $425 (8*50 + $25 for 15 days)
                                            </li>
                                            <li class="cg-article__item">
                                               Revenue recognized in subsequent months (May to December): $1050/mo
                                            </li>
                                            <li class="cg-article__item">
                                               Deferred Revenue in April: $8000 + $400 (for 5 additional agents) = $8400
                                            </li>
                                            <li class="cg-article__item">
                                              Deferred Revenue in May: $7350
                                            </li>
                                       </ul>
                                        <figure class="cg-article__figure" style="margin-bottom: 0;margin-top: 50px;">
                                            <img src="/static/website/version/images/resources/guides/recognition-guide/table5.png" alt="revenue recognition for quantity-based downgrades" class="img-responsive" />  
                                        </figure>
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 12
                        ==================================================================== -->
                         
                           <!-- ===================================================================
                        Start: Content 13
                        ==================================================================== -->
                        <div class="cg-affix__content" id="cancellation-with-refund">  
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                     Revenue Recognition for Cancellation with Refund
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          The customer pays $12000 upfront to Help! following the annual contract of 12 months in January. However, they decide to request for cancellation in April.
                                      </p> 
                                       <p class="cg-article__desc">
                                           Two possible scenarios that the customer can encounter, depending on how Help! would like to enforce its contractual rights.
                                       </p>
                                       <p class="cg-article__desc">
                                           In the case of cancellation with refund, the customer cancels the services from Help! in the start of April with a refund. Help! recognizes the revenue till March. Help! also creates a credit note for $9000 and refunds the amount to substantiate the cancellation.
                                       </p>
                                        <figure class="cg-article__figure" style="margin-bottom: 0;margin-top: 50px;">
                                            <img src="/static/website/version/images/resources/guides/recognition-guide/table6.png" alt="revenue recognition for  cancellation with refund" class="img-responsive" />  
                                        </figure>
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 13
                        ==================================================================== -->

                         <!-- ===================================================================
                        Start: Content 14
                        ==================================================================== -->
                        <div class="cg-affix__content" id="cancellation-without-refund">  
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                       Revenue Recognition for Cancellation without Refund
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          In the case of cancellation without refund, the customer cancels the services from Help! in the beginning of April, but contractually, is not entitled to a complete or partial refund. Help! can then recognize the balance deferred amount as revenue in April. There is no credit note created in this case.
                                      </p> 
                                        <figure class="cg-article__figure" style="margin-bottom: 0;margin-top: 50px;">
                                            <img src="/static/website/version/images/resources/guides/recognition-guide/table7.png" alt="revenue recognition for cancellation without refund" class="img-responsive" />  
                                        </figure>
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 14
                        ==================================================================== -->

                        <!-- ===================================================================
                        Start: Content 15
                        ==================================================================== -->
                        <div class="cg-affix__content" id="shift-in-monthly-to-annual-plan-cycle">  
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                     Revenue Recognition for Shift in Monthly to Annual Plan Cycle
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          The customer has signed up with Help! on a monthly plan of $1000/month. In this scenario, the revenue from each month can be recognized in the same month.
                                      </p> 
                                      <p class="cg-article__desc">
                                          But if the customer decides to shift the plan cycle from a monthly plan to the annual Pro Plan at $12000/year at the beginning of April, then the deferred revenue account will need to hold the prorated amount of $8000 starting from April.
                                      </p>
                                       <ul class="cg-article__list">
                                            <li class="cg-article__item">
                                              Invoice raised in January = $1000
                                            </li>
                                             <li class="cg-article__item">
                                              Revenue recognized from January to March = $3000
                                            </li>
                                              <li class="cg-article__item">
                                             Revenue recognized in April = $1000
                                            </li>
                                              <li class="cg-article__item">
                                             Prorated Invoice raised for the Pro Plan from April to December, for $9000
                                            </li>
                                              <li class="cg-article__item">
                                             Deferred Revenue in April = $8000
                                            </li>
                                              <li class="cg-article__item">
                                             Deferred Revenue in May = $7000
                                            </li>
                                       </ul>      
                                        <figure class="cg-article__figure" style="margin-bottom: 0;margin-top: 50px;"> 
                                            <img src="/static/website/version/images/resources/guides/recognition-guide/table8.png" alt="shift in monthly to annual plan cycle" class="img-responsive" />  
                                        </figure>
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 15
                        ==================================================================== -->

                        <!-- ===================================================================
                        Start: Content 16
                        ==================================================================== -->
                        <div class="cg-affix__content" id="shift-in-annual-to-monthly-plan-cycle">  
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                     Revenue Recognition for Shift in Annual to Monthly Plan Cycle
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          The customer has signed up for the $12000 Pro Plan with Help!. The revenue recognized over the months is the same as that of an annual plan, where the revenue recognized per month is $1000.
                                      </p> 
                                      <p class="cg-article__desc">
                                          But if they decide to shift to a monthly plan at $1000/month in the beginning of April, then Help! issues a credit note of $8000 for refund in April and thereafter, the revenue is recognized in the respective months.
                                      </p>
                                       <ul class="cg-article__list">
                                            <li class="cg-article__item">
                                              Invoice is raised in January for $12000
                                            </li>
                                             <li class="cg-article__item">
                                             Revenue recognized from January to March = $3000 ($1000/mo)
                                            </li>
                                              <li class="cg-article__item">
                                             Deferred Revenue in March = $9000
                                            </li>
                                              <li class="cg-article__item">
                                             Revenue recognized in April = $1000
                                            </li>
                                              <li class="cg-article__item">
                                             Credit note of $8000 issued in April and Deferred Revenue in April is $0 after plan cycle shift
                                            </li>
                                              <li class="cg-article__item">
                                               Deferred Revenue in May = $7000
                                            </li>
                                       </ul>      
                                        <figure class="cg-article__figure" style="margin-bottom: 0;margin-top: 50px;">
                                            <img src="/static/website/version/images/resources/guides/recognition-guide/table9.png" alt="revenue recognition for shift in annual to monthly plan cycle" class="img-responsive" />  
                                        </figure>
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 16
                        ==================================================================== -->

                        <!-- ===================================================================
                        Start: Content 17
                        ==================================================================== -->
                        <div class="cg-affix__content" id="addons-and-metered-billing">  
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                        Revenue Recognition for Addons and Metered Billing
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          The customer includes an addon - Setup Fee, for the month of January, priced at $150, along with a metered-billing component priced at $300 per month.
                                      </p> 
                                      <p class="cg-article__desc">
                                          There is a difference in the revenue recognition for add-ons and metered billing. The overages incurred in the metered billing will be recognized in the month in which it is accrued. As for add-ons, the amount is recognized on the basis of when it is billed.
                                      </p>
                                       <ul class="cg-article__list">
                                            <li class="cg-article__item">
                                              Invoice raised in January: $12000 + addons and metered billing component
                                            </li>
                                             <li class="cg-article__item">
                                              Revenue recognized in January: $1450. The metered amount of $300 will accrue from December.
                                            </li>
                                              <li class="cg-article__item">
                                                Deferred Revenue in January: $11000, since revenues are recognized for Addons and metered billings in the same month, the deferred revenues for such components will be zero only.
                                            </li> 
                                       </ul>      
                                        <figure class="cg-article__figure" style="margin-bottom: 0;margin-top: 50px;">
                                            <img src="/static/website/version/images/resources/guides/recognition-guide/table10.png" alt="revenue recognition for addons and metered billing" class="img-responsive" />  
                                        </figure>
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 17
                        ==================================================================== -->

                         <!-- ===================================================================
                        Start: Content 18
                        ==================================================================== -->
                        <div class="cg-affix__content" id="bad-debts-and-write-off">  
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h3 class="cg-article__title">
                                       Revenue Recognition for Bad Debts and Write-Offs
                                    </h3>
                                </div>
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          According to GAAP, revenue from a sale can be recognized when the services are rendered. However, if a business fails to collect the payments, the business needs to report it as a bad debt under its expense account, to offset the revenue reported during the sale. The company can decide to write-off a bad debt when the payment is deemed uncollectible.
                                      </p> 
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 18
                        ==================================================================== -->

                        <!-- ===================================================================
                        Start: Content 19
                        ==================================================================== -->
                        <div class="cg-affix__content" id="partial-write-off">  
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h4 class="cg-article__title">
                                       Partial write-off
                                    </h4>
                                </div>
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          Partial write-off happens when a partial amount of the total invoice amount is realized and the rest is uncollectible.
                                      </p> 
                                       <p class="cg-article__desc">
                                           Say, Help! raises an invoice of $12000 towards a customer, in the month of January. ‘Help!’ recognizes revenue of $1000 every month and the remaining is retained in the deferred revenue account. However, the customer declares that they will not be able to pay from April onwards due to insufficient funds. The amount is deemed uncollectible from April and is written-off as bad debt in April.
                                      </p> 
                                       <figure class="cg-article__figure" style="margin-bottom: 0;margin-top: 50px;">
                                            <img src="/static/website/version/images/resources/guides/recognition-guide/table12.png" alt="revenue recognition for a full write-off" class="img-responsive" />  
                                        </figure>
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 19
                        ==================================================================== -->

                         <!-- ===================================================================
                        Start: Content 20
                        ==================================================================== -->
                        <div class="cg-affix__content" id="full-write-off">  
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h4 class="cg-article__title">
                                       Full write-off
                                    </h4>
                                </div> 
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          Full write-off happens when the complete amount in the invoice is deemed uncollectible. 
                                      </p> 
                                       <p class="cg-article__desc">
                                           Say, Help! raises an invoice of $12000 towards a customer, in the month of January. However, the customer is unable to make the payment from January onwards. After repeated dunning requests, Help! decides in April that the amount is uncollectible and writes it off in April. 
                                      </p> 
                                       <figure class="cg-article__figure" style="margin-bottom: 0;margin-top: 50px;">
                                            <img src="/static/website/version/images/resources/guides/recognition-guide/table11.png" alt="revenue recognition for a full write-off" class="img-responsive" />  
                                        </figure>
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 20
                        ==================================================================== -->

                        <!-- ===================================================================
                        Start: Content 21
                        ==================================================================== -->
                        <div class="cg-affix__content" id="key-metrics-to-track">  
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                     Revenue Recognition: Key Metrics to Track
                                    </h2>
                                </div> 
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          Getting revenue recognition right also depends largely on the metrics that are used to keep track of the business. Here are some key metrics that can be useful to keep a close watch on the company’s revenue:
                                      </p>
                                        <ul class="cg-article__list">
                                            <li class="cg-article__item">
                                                <strong>Bookings:</strong>
                                                <p class="cg-article__desc">
                                                    A <a href="https://www.chargebee.com/resources/glossaries/what-are-bookings/" class="cg-link" target="_blank">Booking</a> represents the commitment of a customer to spend money for a product/service. Total bookings (including renewals and expansion) can help in tracking how much revenue can be recognized in the future, once the sales team converts the opportunity into a paying customer.
                                                </p>
                                                <p class="cg-article__desc">
                                                    Bookings cannot be recognized as revenue until the service is rendered.
                                                </p>
                                            </li>
                                            <li class="cg-article__item">
                                                <strong>Billings:</strong>
                                                <p class="cg-article__desc">
                                                    <a href="https://www.chargebee.com/resources/guides/saas-accounting-101/difference-between-booking-billing-revenue-and-mrr/" class="cg-link" target="_blank">Billings</a> are different from bookings. As the name indicates, billings mean the invoice amount billed to customers. This can be over a period of time (a month, a quarter, or a year). Billings directly impact the cash flow of a business.
                                                </p>
                                                <p class="cg-article__desc">
                                                    If the billings are low while bookings remain healthy, there are chances of facing cash flow problems. Head here to delve deeper into <a href="https://www.chargebee.com/blog/bookings-vs-billings-vs-revenue/" class="cg-link">how to calculate and interpret bookings and billings</a>.
                                                </p>
                                            </li>
                                             <li class="cg-article__item">
                                                <strong>Revenue:</strong>
                                                <p class="cg-article__desc">  
                                                    When the said service is actually provided to the customer, billings can be recognized as <a href="https://www.chargebee.com/resources/guides/saas-accounting-101/difference-between-booking-billing-revenue-and-mrr/" class="cg-link" target="_blank">revenue</a>. Relying only on bookings and billings can lead to an inaccurate picture of the state of a business. Recognized revenue indicates the amount that is actually ‘earned’ and thus aids sound decision making.
                                                </p>
                                            </li>
                                            <li class="cg-article__item">
                                                <strong>Monthly Recurring Revenue (MRR) & Annual Recurring Revenue (ARR):  </strong>
                                                <p class="cg-article__desc">
                                                    Recurring revenue is what makes SaaS so appealing. Annual Recurring Revenue (ARR) indicates how much recurring revenue a SaaS business can expect based on annual subscriptions, while <a href="/resources/glossaries/what-is-mrr/" class="cg-link" target="_blank" style="display: inline;">Monthly Recurring Revenue (MRR)</a> is recurring revenue converted to a monthly amount. Types of MRR to be measured are:
                                                </p>
                                                <ul class="cg-article__list">
                                                   <li class="cg-article__item">
                                                       New MRR: The new monthly recurring revenue earned from subscriptions that were created during the corresponding period.
                                                    </li>
                                                    <li class="cg-article__item">
                                                        Expansion MRR: The additional monthly recurring revenue generated from your existing customers
                                                    </li>
                                                    <li class="cg-article__item">
                                                        Contraction MRR: The MRR lost due to cancellations, downgrades to lower price plans, non-renewals, removal of recurring add-ons, or even due to customer discounts.
                                                    </li>
                                                </ul>
                                                <p class="cg-article__desc"> 
                                                    Calculating and understanding these metrics is a crucial part of a SaaS finance leader’s responsibility. Here are some <a href="https://www.chargebee.com/resources/guides/saas-metrics-cfo/" class="cg-link" target="_blank" style="display: inline;">vital metrics for a SaaS CFO’s dashboard</a> and how to draw <a href="https://www.chargebee.com/saas-reporting/" class="cg-link" target="_blank">actionable insights from them.</a>
                                                </p>
                                            </li>
                                        </ul>  
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 21
                        ==================================================================== -->

                       <!-- ===================================================================
                        Start: Content 22
                        ==================================================================== -->
                        <div class="cg-affix__content" id="making-saas-revenue-recognition-easy">   
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                       Making SaaS Revenue Recognition Easy
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                      <p class="cg-article__desc">
                                          Recurring billing and revenue recognition should go hand in hand. It can be very time-consuming and tedious to have multiple sources of truth. Chargebee is a subscription management platform that not only helps manage recurring billing but also ensures globally compliant revenue recognition. 
                                      </p> 
                                       <p class="cg-article__desc">
                                           Chargebee uncomplicates revenue recognition by using the billing platform as the single source truth, enabling seamless management recurring billing along with revenue reporting for fast-growing startups to public companies.
                                      </p> 
                                </div>
                            </div>
                        </div> 
                        <!-- ===================================================================
                        End: Content 22
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
        <!-- ===================================================================
        End: Website Affix
        ==================================================================== -->
        <section class="cg-footer" style="margin-bottom: 50px; margin-top: 120px;"> 
            <div class="container">
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 text-center">
                        <div class="cg-article__header">
                            <h3 class="cg-article__title">
                                Eliminate complexities in your accounting  <br class="visible-lg">and finance with accurate and compliant revenue recognition.
                            </h3>
                            <p class="cg-article__desc">

                            </p>
                        </div>
                        <div class="cg-article__content" style="margin-top: 15px;">
                            <a href="https://www.chargebee.com/saas-accounting-and-taxes/revenue-recognition-deferred-revenue/" class="cg-btn">
                                Automate Revenue Recognition 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
            var caaffix = $('body').scrollspy({ target: '#ca-nav-affix'});
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
    #ch-js-header-cloned{
        display: none;
    }
    .list-number{
        list-style-type: none;
    }
    .cg-affix__content:not(:first-child) {
       padding-top: 100px;
    }  
    .child-equalwidth thead tr th, .child-equalwidth tbody tr td {
        width: 50%; 
     }
     .b-one:before {content: '1.';display: inline-block;left: 18px;position: absolute;}
    .b-two:before {
        content: '2.';
        display: inline-block;
        left: 18px;
        position: absolute;
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
    .cg-link{display: inline;} 
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
    .btn-bllue:after{
        content: "\2192"; 
    }
    .table-div .table-bordered tbody tr th{
       vertical-align: middle;
        display: table-cell;
        text-align: center;
    } 
    .table-div .table-bordered tbody tr td {
         vertical-align: middle;
        display: table-cell;
        text-align: center;  
    }
    .table-bordered tbody tr .text-left {
    text-align: left !important; 
    }
    @media (max-width: 991px){
        .cg-hero__actiona { display: none;}
    }
    @media (min-width: 992px){
        .cg-hero {
            margin-bottom: 150px;
        }
    } 
    @media (min-width: 768px){ 
        .cg-affixs {
            margin-top: 150px;
        }
    }
    @media (max-width: 767px){
        .cg-link--bordered {
            margin-left: auto;
            margin-right: auto;
            display: block;
            max-width: none;
        }
        .cg-link {max-width: inherit;}
        .cg-hero{
            text-align: center;
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
    .mt-60{
        margin-top: 60px;
    }
    .bb-none{
      border-bottom: none !important;
    }
    .cg-affix__body{
        padding-top: 0; 
    }
</style>
<!-- ===========================================================================
End: Style
================================================================================
