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
      :cb-title="'Terms of Service - Chargebee Inc'"
      :cb-desc="'Terms of Use - Developed to save us from not getting sued for something silly.'"
      :cb-url="'/company/terms/'"
      :cb-image="''"
      :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
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
        <!-- ===============================================================
                            Start Banner Part
        ===============================================================-->
        <section class="hero hero--invert" style="background-image: none; background-color: #7864FF; padding-top: 150px; padding-bottom: 60px">
         <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <h1 style="color: #fff; font-weight: 400">Terms of Service</h1>
                    <div style="color: rgba(255,255,255, 0.6);margin-top: 7px">
                        Effective Date: Jan 20th, 2020
                    </div>
                    <div style="color: rgba(255,255,255, 0.6); margin-top: 24px; font-size: 13px;">
                        For prior version, please <a href="/company/terms/23-march-2017/" style="color: rgba(255,255,255, 0.6); text-decoration: underline;">click here</a>
                    </div>
                </div>
            </div>
         </div>
        </section>
        <!-- ================= End Banner part =================  -->
        <!-- ===============================================================
                            Start Content Part
        ===============================================================-->
        <section class="container">
            <div class="row">
                <div class="col-sm-7 col-md-6 col-md-offset-1">
                    <article class="cb-factor">
                        <div class="cb-factor__desc">
                            These terms of service and Our <a href="/privacy/" class="term-anchor">Privacy Notice</a> (together, these <b>"Terms"</b>) form a contract between You and CHARGEBEE INC. (referred to as "Us", "We", "Our") and govern Your right to access the Websites and the use of and access to the Services by You, Your Affiliates, Users and End-Customers as part of a Subscription during the Term. By accessing or using the Services or Websites or authorizing or permitting any User or End-Customer to access or use the Services or Websites, You are agreeing to be bound by these Terms. In the event of a conflict between these terms of service and Our Privacy Notice, these terms of service shall prevail. If You are using Our Services for an organization, You are agreeing to these Terms on behalf of that organization and in these Terms, "You" or "Your" refers to that organization. If You do not have such authority, or if You do not agree with these Terms, You must not accept these Terms and should not access or use the Services and/or Websites.
                        </div>
                        <div class="cb-factor__desc">
                            In these Terms, You and We are individually referred to as a <b>"Party"</b> and collectively as <b>"Parties"</b>. You, as an individual, must be eighteen (18) years or older to access the Websites and register for and use the Services.
                        </div>
                    </article>
                    <article class="cb-factor" id="definitions">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">1</span>Definitions
                        </h2>
                        <div class="cb-factor__desc">
                            When used in these Terms with the initial letters capitalized, in addition to the terms defined elsewhere in these Terms, the following terms have the following meanings:
                        </div>
                        <div class="cb-factor__desc">
                            <b>Account:</b> means any accounts or instances created by or on behalf of You for access and use of the Services. You may have multiple Subscriptions which may be subject to separate and distinct Plans. For the avoidance of doubt, reference to an Account herein refers to (i) Your trial account where a live account has not been activated; or (ii) Your trial account and live account where the live account has been activated.
                        </div>
                        <div class="cb-factor__desc">
                            <b>Affiliate:</b> means, with respect to a Party, any entity that directly or indirectly controls, is controlled by, or is under common control with such Party, whereby "control" (including, with correlative meaning, the terms "controlled by" and "under common control") means the possession, directly or indirectly, of the power to direct, or cause the direction of the management and policies of such person, whether through the ownership of voting securities, by contract, or otherwise.
                        </div>
                        <div class="cb-factor__desc">
                            <b>Applicable Data Protection Law:</b> means all laws and regulations, including laws and regulations of the United States, European Union, the European Economic Area and their member states, Switzerland and the United Kingdom, applicable to the Processing of Personal Data under these Terms.
                        </div>
                        <div class="cb-factor__desc">
                            <b>Data Processing Addendum:</b> means the data processing addendum available <a href="/privacy/dpa/" class="term-anchor">here</a> as updated periodically and which is incorporated into these Terms by reference; or a separate addendum that the Parties have executed in this regard, as the case may be, pursuant to which We shall Process Personal Data forming part of Your Service Data.
                        </div>
                        <div class="cb-factor__desc">
                            <b>Documentation:</b> means any written or electronic documentation, images, video, text or sounds specifying the functionalities of the Services provided or made available by Us to You or Users through the Services or otherwise.
                        </div>
                        <div class="cb-factor__desc">
                            <b>End-Customer:</b> means Your customers and/or any person or entity other than You or Users with whom You interact using the Services.
                        </div>
                        <div class="cb-factor__desc">
                            <b>Group Companies:</b> means CHARGEBEE INC. and its Affiliates.
                        </div>
                        <div class="cb-factor__desc">
                            <b>Personal Data:</b> means data forming part of the Service Data and relating to a living individual who is or can be identified either from the data or from the data in conjunction with other information that is in, or is likely to come into the possession of the data controller or such other similar term as defined under Applicable Data Protection Law.
                        </div>
                        <div class="cb-factor__desc">
                            <b>Pricing Agreement:</b> means a pricing agreement or an order form referencing these Terms and executed or approved by You and Us with respect to Your Subscription, which agreement may detail, among other things, the Plan applicable to a Subscription, the associated Subscription Fees and other details of the Subscription.
                        </div>
                        <div class="cb-factor__desc">
                            <b>Privacy Notice:</b> means Our privacy notice at <a href="/privacy/" class="term-anchor">https://www.chargebee.com/privacy/</a> as updated periodically and which is incorporated into these Terms by reference.
                        </div>
                        <div class="cb-factor__desc">
                            <b>Process/Processing:</b> means any operation or set of operations which is performed upon Personal Data, whether or not by automatic means, such as collection, recording, organization, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, blocking, erasure or destruction.
                        </div>
                        <div class="cb-factor__desc">
                            <b>Plan:</b> means the pricing plan (as detailed at <a href="/pricing/" class="term-anchor">https://www.chargebee.com/pricing/</a>) that You choose in connection with a Subscription for the associated functionality and services.
                        </div>
                        <div class="cb-factor__desc">
                            <b>Services:</b> means Our cloud-based billing platform and related products and services that You subscribe to, and/or any new services or features that We may introduce as a Service to which You may subscribe to, and any Updates to the Services, including individually and collectively, any software, APIs and Documentation.
                        </div>
                        <div class="cb-factor__desc">
                            <b>Service Data:</b> means all electronic data, text, messages or other materials, including Registration Data, Cardholder Data and Personal Data of End-Customers and Users, submitted to the Services through an Account in connection with Your use of the Services.
                        </div>
                        <div class="cb-factor__desc">
                            <b>Subscription:</b> means Your subscription to the Services through a Plan of Your choice for Your access and use of an Account.
                        </div>
                        <div class="cb-factor__desc">
                            <b>User:</b> means those individuals You authorize as users within an Account to use the Services by way of designated login credentials.
                        </div>
                        <div class="cb-factor__desc">
                            <b>Websites:</b> means the websites that We operate.
                        </div>
                    </article>


                    <article class="cb-factor" id="your_rights">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">2</span>Rights to Use the Services
                        </h2>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">2.1</span> Subject to Your (including Users' and End-Customers') compliance with these Terms and solely during the Term, We grant You a limited, non-exclusive, non-transferable, non-assignable (except to the extent expressly permitted by Section 18.4 (<i>Assignment</i>)), worldwide (subject to applicable law) and revocable right to access and use the Services that You have subscribed to for Your own internal business purposes.  You may use the Documentation solely in connection with Your use of the Services.
                        </div>
                    </article>


                    <article class="cb-factor" id="your_responsibilities">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">3</span>Your Responsibilities
                        </h2>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">3.1</span><b>Registration Data.</b> You agree to provide Us with current, complete and accurate registration information as prompted by the Services' registration process (<b>"Registration Data"</b>). You agree not to omit or misrepresent any Registration Data, and further agree to update the Registration Data periodically to ensure that it is current, complete and accurate. You further authorize Us to verify the Registration Data as required for Your use of the Services.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">3.2</span><b>Account Activities.</b> You are solely responsible for
                        </div>
                        <div class="cb-factor__desc" style="margin-top: 24px;font-size: 90%;">
                            <ol style="list-style-type: lower-roman;">
                                <li>
                                   Your (including Users' and End-Customers') access and use of the Services in compliance with these Terms;
                                </li>
                                <li>
                                    without prejudice to Our obligations under Section 10 (<i>Confidentiality</i>) and Section 11 (<i>Data Security and Privacy</i>), maintaining the confidentiality of unique login information, credentials and passwords associated with Your Account, and the privacy and security of Your Account;
                                </li>
                                <li>
                                    ensuring that Your use of the Services to store, process and transmit Service Data is compliant with applicable laws and regulations;
                                </li>
                                <li>
                                    any sum of amount that is due to You relating to transactions that are processed through any payment gateways, merchant account providers or payment processors that You utilize in connection with the Services;
                                </li>
                                <li>
                                    all activities that occur regarding Your Account regardless of whether the activities are undertaken by You, Users, End-Customers or a third party (including Your contractors or agents);
                                </li>
                                <li>
                                    immediately ceasing use of the Services for a prohibited activity or purpose if We inform You that a specified activity or purpose is prohibited with respect to the Services; and
                                </li>
                                <li>
                                    determining whether the Services or the information generated thereby is accurate or sufficient for Your purposes.
                                </li>
                            </ol>
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">3.3</span> <strong>Your Conduct.</strong> You agree to use the Services in accordance with these Terms (including any addendum, schedules and exhibits), Documentation and any API policies We implement in this regard. Further, You agree, on behalf of Yourself and Users, not to (a) use the Services or permit the Services to be used to perform any billing or related services for any third party, or otherwise license, sublicense, sell, resell, rent, lease, transfer, assign, distribute, time share or otherwise commercially exploit or make the Services available to any third party, other than Users and End-Customers in furtherance of Your internal business purposes as expressly permitted under these Terms; (b) use the Services to Process data on behalf of any third party other than Users and End-Customers; (c) modify, adapt, or hack the Services or otherwise attempt to gain or gain unauthorized access to the Services or related systems or networks or tamper with or breach the security of the Services; (d) use the Services in any manner that interferes with or disrupts the integrity or performance of the Services and its components; (e) not use or permit the use of any software, hardware, application or process that interferes with the Services, interferes with or disrupts servers, systems or networks connected to the Services, or violates the regulations, policies or procedures of such servers, systems or networks, accesses or attempts to access Our other customers' accounts, servers, systems or networks without authorization, or harasses or interferes with Our other customers' use and enjoyment of the Services; (f) attempt to decipher, decompile, reverse engineer, disassemble, reproduce, or copy or otherwise access or discover or attempt to derive the source code or underlying program of any software making up the Services; (g) falsely imply any sponsorship or association with Us; (h) use the Services in any unlawful manner, including but not limited to violation of any person's privacy rights; (i) use the Services to send unsolicited communications junk mail, spam, pyramid schemes or other forms of duplicative or unsolicited messages; (j) use the Services to store or transmit any content that infringes upon any person's intellectual property rights; (k) remove or modify any trademarks, trade names, service marks, service names, logos or brands, or copyright or other proprietary notices on the Services or the Documentation, or add any other markings or notices to the Services or the Documentation; (l) use the Services to knowingly post, transmit, upload, link to, send or store any content that is unlawful, racist, hateful, abusive, libelous, obscene, or discriminatory or promotes any financial exploitation or a criminal activity; (m) modify, port, adapt, translate or create any derivative work based upon the Services or the Documentation; (n) use the Services to store or transmit any "protected health information" as that term is defined in 45 C.F.R. 160.103 unless expressly agreed to otherwise in writing by Us; (o) use the Services to knowingly post, transmit, upload, link to, send or store any viruses, malware, Trojan horses, time bombs, worms or cancelbots or any other similar harmful software ("<strong>Malicious Software</strong>"); (p) establish a link to the Websites in such a way as to suggest any form of association, approval or endorsement on Our part where none exists; (q) use the Services for the purposes of cookie tracking, ad exchanges, ad networks, data brokerages, or sending electronic communications (including e-mail) in violation of applicable law; (r) use of the Services for any purpose prohibited by applicable export laws and regulations, including without limitation, nuclear, chemical, or biological weapons proliferation, or development of missile technology or related to the sale of controlled substances such as illegal drugs, tobacco products, prescription drugs or medications, steroids such as human growth hormone; (s) use the Services in a manner that that affects Our compliance with the PCI DSS; or (t) try to use, or use the Services in violation of these Terms and/or applicable law.  Neither You nor any of Your Affiliates shall access or use the Services or Websites if such individual or entity is a competitor of the Group Companies. You and Your Affiliates shall not access or use the Services or Website to evaluate its functionality or performance for competitive purposes, including for developing any similar application, product or service. Further, at Our sole discretion, any suspected fraudulent, abusive, or illegal activity by You may be referred to law enforcement authorities.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">3.4</span>Except to the extent caused by Our willful breach of these Terms, the Group Companies will not be responsible for any alteration, compromise, corruption, damage or loss that may result from Your failure to protect Your login information, including any passwords. You agree to notify Us immediately of any unauthorized access or use of Your Account, log-in information, credentials or passwords, or any unauthorized activity in Your Account. We have the right to suspend or terminate the Services without notice to You, if We reasonably suspect any unauthorized activity and You agree to cooperate with Us in any investigation into suspected or actual unauthorized activity. Where Your Account is so suspended and the breach remains uncured post any cure period We may grant You at Our sole discretion, We reserve the right to terminate Your Subscription with immediate effect.
                        </div>
                    </article>




                    <article class="cb-factor" id="changes_to_the_websites_and_services">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">4</span>Changes to the Websites and Services
                        </h2>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">4.1</span><b>Websites.</b> We have the right but not the obligation to change content on Our Websites at any time. We may discontinue or change any part of Our Websites, that does not affect the Services, without notifying You.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">4.2</span><b>Services.</b> We may upgrade, update, or modify the provision of all or any part of the Services from time to time, including to improve the Services or to address any legal or regulatory requirements or to address a change in Our policies ("<strong>Updates</strong>") and You may receive notifications where the Update is material. What constitutes a "material Update" will be determined by Us in good faith using Our reasonable judgment but will only include an Update that materially affects Your use of the Services. Unless otherwise stated, the Updates are also subject to these Terms and We reserve the right to deploy Updates at any time. Where You do not agree to an Update, Your sole remedy shall be to terminate Your use of the Services and to comply with the termination obligations set forth in these Terms. Any use of the Services after the Update will constitute Your acceptance of the Update.
                        </div>
                    </article>
                    <article class="cb-factor" id="intellectual_property_rights">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">5</span>Intellectual Property Rights
                        </h2>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">5.1</span><b>Ownership.</b> All right, title and interest in and to all of Our patents, inventions, copyrights, trademarks, domain names, trade secrets, know-how and other intellectual property and/or proprietary rights in or related to the Services, including the Websites, and any part of it (collectively, the <b>"Chargebee Intellectual Property Rights"</b>),  are owned or licensed by and shall remain exclusively with Us and/or the Sub-processors. We are the owner or the licensee of all Chargebee Intellectual Property Rights in the Websites, and the content or material published on it. Those works are protected by copyright laws and treaties around the world. You must not use any part of the content on the Websites for commercial purposes without obtaining appropriate licenses. Subject to the limited rights expressly granted by Us to You in Section 2 (<i>Rights to use the Services</i>) of these Terms, You do not have any right, title to or interest in the Chargebee Intellectual Property Rights. By using the Services, You grant Us a limited license to access, disclose, process, transmit and use Your Service Data for providing the Services to You and for complying with these Terms. We claim no intellectual property rights over the Service Data. All rights not expressly granted to You in these Terms are reserved by Us and/or the Sub-processors.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">5.2</span><b>Grant of License to Us.</b> You may choose or We may invite You to submit suggestions, recommendations, enhancement requests or other feedback about the Services ("<strong>Feedback</strong>"). By submitting any Feedback, You agree that such Feedback is gratuitous, unsolicited and without restriction, and You grant Us a fully paid up, royalty-free, worldwide, transferable, sub-licensable, irrevocable and perpetual license to incorporate Feedback, in whole or in part, into the Services or Websites. Further, unless You notify Us otherwise via e-mail to <a class="term-anchor" href="mailto:support@chargebee.com">support@chargebee.com</a>,  You grant Us a fully paid up, royalty-free, worldwide, transferable license to use Your name and logo to identify You as Our customer on the Websites or in other sales or marketing materials, provided however, We will not issue any press release without Your prior consent.
                        </div>
                    </article>
                    <article class="cb-factor" id="sub-processors_other_services_and_third-party_content">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">6</span>Sub-processors, Other Services and Third-party Content
                        </h2>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">6.1</span><b>Sub-processors.</b> Certain third parties (each, a <b>"Sub-processor"</b>) may assist Us in providing the Services by delivering their products and/or services as part of the Services. We contract directly with the Sub-processors for the provision of their products and/or services, which are integrated with or are an integral part of the Services. The products and services provided by the Sub-processors do not include any of the Other Services.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">6.2</span><b>Other Services.</b> Certain other services (<b>"Other Services"</b>) such as integrations and apps may be made available to You through forums for their integration with the Services. These Other Services are governed by their own terms and privacy policies and You agree that We are not responsible for Your use of these Other Services where You choose to enable these Other Services and integrate them into the Services. By enabling the Other Services, You understand and agree that We do not provide any warranties for Other Services and We are not liable for any damage or loss caused or alleged to be caused by or in connection with Your enablement, access or use of any such Other Services, or Your reliance on the privacy practices, data security processes or other policies of such Other Services. You understand that We are not responsible for providing technical support for Other Services or for the data hosting and data transfer practices followed by providers of such Other Services. To this extent, You agree to address any comments, queries, complaints or feedback about such Other Services with the respective developers or publishers as specified in those forums.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">6.3</span><b>Third-Party Content.</b> The Services and Websites may also contain links to websites, resources and/or other content provided by third parties (the <b>"Third-Party Content"</b>). We do not endorse any Third-Party Content. You agree that We are not responsible for the quality, performance, reliability or security of any Third-Party Content, and that We are not responsible for any damages in connection with Your and/or Users' and/or End-Customers' access or use of any Third-Party Content, or Your reliance on the privacy practices, data security measures or other policies of any Third-Party Content. You acknowledge and agree that each Third-Party Content is governed by that third party provider's terms and privacy policy and that We do not have any control over such services or the Third-Party Content. To this extent, You agree to address any comments, queries, complaints or feedback regarding the Third-Party Content with the third party providing them.
                        </div>
                    </article>
                    <article class="cb-factor" id="plans_billing_and_payments">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">7</span>Billing and Payments
                        </h2>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">7.1</span><b>Subscription Fees.</b> When You are on a paying Plan, You shall be charged a fee based on the Plan You choose for the Services (<b>"Subscription Fees"</b>). Unless specified otherwise herein or in a Pricing Agreement, the Subscription Fees are payable in full and in advance until Your Subscription is terminated in accordance with Section 8 (<i>Term, Termination and Suspension</i>).
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">7.2</span><b>Payment.</b> You agree to pay the Subscription Fees through a payment method acceptable to Us. You hereby authorize Us and/or Our authorized agents, as applicable, to bill You in accordance with Your Plan and/or Pricing Agreement for Your Subscription (and any renewal thereof). Unless otherwise stated in a Pricing Agreement, Your payment is due in full immediately upon each due date with respect to Your Subscription. You must notify Us of any change in Your payment account information, either by updating Your Account or via e-mail to <a class="term-anchor" href="mailto:support@chargebee.com">support@chargebee.com</a>.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">7.3</span><b>Renewal.</b> For any Renewal Term (as defined below), unless otherwise agreed to in a Pricing Agreement, We reserve the right to change the subscription fees and billing methods upon a thirty (30) day notice. For existing Subscriptions for which the Subscription Fees has been already received by Us, We will implement the price changes during the next Renewal Term.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">7.4</span><b>Refunds.</b>  Unless otherwise specified in these Terms or Pricing Agreement, all Subscription Fees are non-refundable. We do not provide refunds or credits for any partial use or non-use of the Services.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">7.5</span><b>Taxes.</b> Unless otherwise specified in a Pricing Agreement, the Subscription Fees do not include any taxes, duties, fees or other amounts assessed or imposed by any government authority, for which You are responsible except for taxes imposed on Our income. You agree to pay or reimburse Us for all such amounts upon demand or provide evidence of payment or exemption.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">7.6</span><b>Delayed Payments/Non-payment of Subscription Fees.</b> Where We do not receive payment towards the Subscription Fees within the due date for a Subscription, You shall be notified of such non-payment. We must receive payments within a maximum of thirty (30) days from the date of Our notice. If We do not receive payment within the abovementioned time period, in addition to Our right to other remedies available under law, We may (i) charge an interest for late payment (a) @ 1.5% per month on the outstanding balance where the Subscription Fees is payable monthly; or (b) @ 1.5% per month on the outstanding balance where the Subscription Fees is payable annually; and/or (ii) suspend Your access to and use of the Services until We receive Your payment towards the outstanding Subscription Fees; and/or (iii) terminate the Subscription in accordance with Section 8 (<i>Term, Termination and Suspension</i>).
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">7.7</span><b>Upgrades and Downgrades.</b> You may upgrade or downgrade between the Plans. You understand that downgrading may cause loss of features or capacity of the Services as available to You before downgrading Your Subscription. We will not be liable for such loss. When You upgrade or downgrade, the new Subscription Fees become immediately applicable. Upon upgrade, the new Subscription Fees for the subsisting month would be charged on a pro-rated basis and shall be payable in accordance with Section 7.2 (<i>Payment</i>). Subsequent months will be charged in full according to the new Subscription Fees and any credits will be adjusted appropriately.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">7.8</span><b>Benefits.</b> We may, at Our sole discretion, offer You certain non-transferrable benefits (such as discounts on Subscription Fees or a free extension in Term) specific to a Subscription. The benefits may have an expiry date. If they do not have an expiry date, they will expire upon completion of twelve (12) months from their date of offer.
                        </div>
                    </article>
                    <article class="cb-factor" id="term_termination_and_suspension">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">8</span>Term, Termination and Suspension
                        </h2>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">8.1</span><b>Term.</b> Unless otherwise specified in a Pricing Agreement, a Subscription is valid for a period of twelve (12) months from the date of Your Subscription (<b>"Initial Term"</b>) and shall renew automatically for a term equivalent in length to the then expiring term (<b>"Renewal Term"</b>) unless terminated in accordance with these Terms. For the purposes of these Terms, <b>"Term"</b> shall mean the Initial Term and any Renewal Terms.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">8.2</span><b>Termination by You.</b> You may terminate a Subscription at any time by raising a request for cancellation of Your Subscription or by e-mailing Us at <a class="term-anchor" href="mailto:support@chargebee.com">support@chargebee.com</a> and ceasing all use of the Services.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">8.3</span><b>Suspension and Termination by Us.</b> In the event of any actual or threatened breach of these Terms by You (including non-payment of Subscription Fees), We may immediately suspend all or part of Your Subscription(s). We may terminate these Terms, including Your Subscription(s), if You have breached any of these Terms and if that breach can be cured, You fail to cure that breach within fifteen (15) days after receiving written notice of that breach from Us ("<strong>Your Cure Period</strong>").
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">8.4</span><b>Consequences of termination of a Subscription.</b>
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style cb-factor__list--push">8.4.1</span><b>Consequences.</b> We shall not be liable to You or any other third party for suspension or termination of Your Subscription or Your access to and use of the Services, including any destruction of Service Data, if such suspension or termination is in accordance with these Terms. Upon any termination of a Subscription, all rights, including the right to access and use the Services granted to You will immediately cease and payment methods associated with End-Customers shall not be charged with immediate effect. You shall immediately destroy (or, at Our request, return) Our Confidential Information in Your possession or control.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style cb-factor__list--push">8.4.2</span><b>Data Export.</b> Following termination of a Subscription, We will retain that Account's Service Data for one hundred and twenty (120) days from such date of termination (<b>"Data Retention Period"</b>) beyond which, We will have no obligation to maintain or provide You, Users and End-Customers access to Service Data. Thereafter, unless legally prohibited, We reserve the right to destroy all Service Data in Our possession in the normal course of Our operations in accordance with the Privacy Notice. You agree that You are solely responsible for exporting Service Data prior to termination of a Subscription, and if You require assistance for exporting Service Data during the Data Retention Period, You may be required to pay a separate fee to Us.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style cb-factor__list--push">8.4.3</span><b>Subscription Fees.</b> Unless waived by Us in writing or where the total Subscription Fees has already been prepaid, if a Subscription is terminated in accordance with Section 8.2 (<i>Termination by You</i>) or 8.3 (<i>Suspension and Termination by Us</i>) of these Terms, in addition to other amounts You may owe Us, You must immediately pay all unpaid Subscription Fees for the Term accrued through and including Your Cure Period. The sole exclusion to this payment obligation is when You terminate a Subscription as a result of a material breach of these Terms by Us (provided that You provide notice of such breach to Us and afford Us not less than fifteen (15) days (<b>"Our Cure Period"</b>) to reasonably cure such breach), in which case, You are eligible to receive a refund of any unused Subscription Fees prepaid by You for Services not rendered from the date of such termination.
                        </div>
                    </article>
                    <article class="cb-factor" id="pci_dss_compliance">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">9</span>PCI DSS Compliance
                        </h2>
                        <div class="cb-factor__desc">
                            We agree to maintain Payment Card Industry Data Security Standard (<b>"PCI DSS"</b>) compliance in accordance with the then current version of PCI DSS published by the PCI Security Standards Council during a Term. We are a validated PCI Level 1 service provider and Our current Certificate of Compliance can be reviewed at <a href="/security/pci/">https://www.chargebee.com/security/pci/</a>. We will maintain all applicable PCI DSS requirements to the extent We possess or otherwise store, process or transmit cardholder data, which is information associated with a payment card, such as an account number, expiration date and CVV2 (<b>"Cardholder Data"</b>), on Your behalf. Within the liability limitations set forth elsewhere in these Terms, We are only responsible for the security of Your and/or End-Customer's Cardholder Data to the extent We possess such Cardholder Data on Your behalf. Except as set forth in the preceding sentence, You are solely responsible for the Cardholder Data till We possess or otherwise store, process or transmit Cardholder Data on Your behalf. If Your activities in relation to any Cardholder Data are subject to PCI DSS, You agree to comply and continue to comply with PCI DSS and all applicable laws regarding such activities, and to certify such compliance upon Our request. You agree that You will use only PCI compliant service providers in connection with the storage, processing and/or transmission of Cardholder Data. We are not a payment gateway or merchant account provider and We do not assume any direct or indirect liability or responsibility for Your agreements with payment gateways or merchant account providers. The steps that You will need to take to comply with PCI DSS when using the Services will vary depending on Your Subscription. For more information about implementing the Services, please contact <a class="term-anchor" href="mailto:support@chargebee.com">support@chargebee.com</a>.
                        </div>
                    </article>
                    <article class="cb-factor" id="confidentiality">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">10</span>Confidentiality
                        </h2>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">10.1</span>The access, disclosure and use of Confidential Information and any other rights and obligations regarding such information shall be solely and exclusively governed by these Terms. The provisions of this Section 10 (<i>Confidentiality</i>) shall supersede any non-disclosure agreement between the Parties entered prior to these Terms that would purport to address the confidentiality of Confidential Information and such agreement shall have no further force or effect with respect to Confidential Information. All confidentiality obligations shall remain in force and effect for the Term plus one (1) year.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">10.2</span>You or Chargebee (the "<strong>Disclosing Party</strong>") may from time to time, while Your Subscriptions are valid, disclose to the other (the "<strong>Receiving Party</strong>") the Disclosing Party's confidential, proprietary and/or non-public information, materials or knowledge that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information, materials or knowledge and/or the circumstances of disclosure (the "<strong>Confidential Information</strong>"). For purposes of these Terms, Your Confidential Information includes Service Data, and Our Confidential Information includes the Services, Documentation and the contents of any Pricing Agreement. The Receiving Party agrees to protect the Disclosing Party's Confidential Information from unauthorized access, disclosure or use in the same manner that the Receiving Party protects its own confidential or proprietary information of a similar nature but with no less than reasonable care. The Receiving Party will only access and use the Disclosing Party's Confidential Information in connection with performing these Terms (or as expressly authorized by the Disclosing Party in writing), and will disclose the Disclosing Party's Confidential Information only to the employees and contractors of the Receiving Party who have a need to know the Confidential Information for purposes of performing these Terms (or for other purposes as expressly authorized by the Disclosing Party in writing) and who are under a duty of confidentiality no less restrictive than the Receiving Party's duty hereunder.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">10.3</span>The Receiving Party's obligations with respect to Confidential Information of the Disclosing Party will terminate if the Receiving Party can document that such information (i) was already lawfully known to the Receiving Party at the time of disclosure by the Disclosing Party free from any obligation of confidence, (ii) was disclosed to the Receiving Party by a third party who had the right to make such disclosure without any confidentiality restrictions, (iii) is, or through no fault of the Receiving Party has become, generally available to the public or (iv) was independently developed by the Receiving Party without access to, or use of, the Disclosing Party's Confidential Information. In addition, the Receiving Party may disclose Confidential Information of the Disclosing Party to the extent compelled by law or a court or other judicial or administrative body, provided that the Receiving Party notifies the Disclosing Party of such compelled disclosure promptly and in writing (to the extent legally permitted) and cooperates with the Disclosing Party, at the Disclosing Party's reasonable request and expense, in any lawful action to contest or limit the scope of such required disclosure.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">10.4</span> The Receiving Party will return to the Disclosing Party all Confidential Information of the Disclosing Party in the Receiving Party's possession or control and permanently erase all electronic copies of such Confidential Information promptly upon the written request of the Disclosing Party. At the Disclosing Party's request, the Receiving Party will certify in writing that it has fully complied with its obligations under this Section 10 (<i>Confidentiality</i>).
                        </div>
                    </article>
                    <article class="cb-factor" id="data_security_and_privacy">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">11</span>Data Security and Privacy
                        </h2>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">11.1</span><b>Security of Service Data.</b> We use appropriate technical and organizational measures to protect the Service Data. The measures used are designed to provide a level of security appropriate to the risk of Processing the Service Data.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">11.2</span><b>Data Privacy.</b>
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style cb-factor__list--push">11.2.1</span>You understand that the Group Companies and Sub-processors shall Process Service Data in accordance with Applicable Data Protection Laws, the Privacy Notice (to the extent applicable) and the Data Processing Addendum. You acknowledge and agree that the Our Group Companies and Sub-processors may also access or disclose information about You, Your Subscription and Account, Users and End-Customers, including Service Data, to (a) provide the Services and perform obligations under these Terms, including, without limitation, to respond to Your support requests; (b) comply with the law or respond to lawful requests or legal process; (c) professionals and advisors in order to protect the Group Companies' or Our other customers' or partners' rights or property; (d) act on a good faith belief that such disclosure is necessary to protect the personal safety or avoid violation of applicable law or regulation.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style cb-factor__list--push">11.2.2</span> We Process Service Data only as per Your instructions to the extent they are consistent with the functionality of the Services. For purposes of the GDPR and the Swiss Federal Act on Data Protection, We are the processor and not the controller of the Service Data. Between the Parties, You are the "controller" of that data and are responsible for compliance with the Applicable Data Protection Laws.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style cb-factor__list--push">11.2.3</span> In Your role as a controller of Personal Data, (i) You hereby authorize, on behalf of Yourself, Users and End-Customers, and represent that You have the authority to provide such authorization to the Processing and transfer of Personal Data in and to the United States and other countries which may have different privacy laws from Your country of establishment/residence; (ii) You understand that it shall be Your responsibility to inform the Users and End-Customers about the Processing, and, where required, obtain necessary consent or authorization for any Personal Data that is collected as part of the Service Data through Your use of the Services. We do not own, control or direct the use of Service Data and only access such information as reasonably necessary to provide the Services (including to respond to support requests), as otherwise authorized by You or as required by law. Unless We explicitly agree otherwise in writing, You shall not provide Sensitive Data at any time to the Services and We will have no liability whatsoever for and in connection with the Sensitive Data. For purposes of these Terms, "Sensitive Data" means (i) social security number, passport number, driver's license number, or similar identifier (or any portion thereof), (ii) employment, financial, genetic, biometric or health information, (iii) racial, ethnic, political or religious affiliation, trade union membership, or information about sexual life or sexual orientation, (iv) account passwords, (v) date of birth, (vi) criminal history, (vii) mother's maiden name or (viii) any other information or combinations of information that is deemed sensitive under the legal framework of any applicable jurisdiction.
                        </div>
                    </article>
                    <article class="cb-factor" id="other_data_services">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">12</span>Other Data Services
                        </h2>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">12.1</span><b>Data Migration.</b> You may, at any time during the Term, request Us to import data into Your Account (<b>"Data Migration"</b>). You hereby understand and acknowledge that the Group Companies may access and Process Your data in connection with providing support during such Data Migration.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">12.2</span><b>Aggregated Analytical Data.</b> The Group Companies and the service providers they use may use (but not disclose) data collected regarding Your use of the Services for Our internal business purposes, including for creating anonymized, aggregated and otherwise non-personal data. We may freely use and make available such anonymized, aggregated and otherwise non-personal data regarding the use of the Services for Our business purposes. We will ensure that this anonymized, aggregated and otherwise non-personal data cannot identify You or End-Customers and can in no way be specifically associated to You or End-Customers.
                        </div>
                    </article>
                    <article class="cb-factor" id="disclaimer_of_warranties">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">13</span>Disclaimer of Warranties
                        </h2>
                        <div class="cb-factor__desc">
                            OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE DISCLAIM ANY AND ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. WE DO NOT WARRANT THAT OUR SERVICES OR ANY PART THEREOF, OR USE THEREOF WILL BE ERROR-FREE, UNINTERRUPTED, SECURE OR VIRUS FREE, WILL MEET YOUR QUALITY AND PERFORMANCE REQUIREMENTS, OR WILL BE CORRECTED FOR ANY DEFECTS WITHIN A STIPULATED PERIOD PURSUANT TO ANY SERVICE LEVEL AGREEMENT. YOU UNDERSTAND THAT IN USING OUR SERVICES, SENSITIVE INFORMATION WILL TRAVEL THROUGH THIRD PARTY INFRASTRUCTURES THAT ARE NOT UNDER OUR CONTROL. WE MAKE NO WARRANTY WITH RESPECT TO THE SECURITY OF SUCH THIRD PARTY INFRASTRUCTURES. YOU ASSUME THE ENTIRE RISK OF AND SHALL NOT HOLD US RESPONSIBLE FOR ANY ALTERATION, COMPROMISE, CORRUPTION OR LOSS OF SERVICE DATA NOTWITHSTANDING ANY SECURITY OR OTHER MEASURE THAT MAY BE PROVIDED BY US.
                        </div>
                    </article>
                    <article class="cb-factor" id="limitation_of_liability">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">14</span>Limitation of Liability
                        </h2>
                        <div class="cb-factor__desc">
                            EXCEPT FOR YOUR MISAPPROPRIATION OR VIOLATION OF CHARGEBEE INTELLECTUAL PROPERTY RIGHTS AND BREACH OF YOUR CONFIDENTIALITY OBLIGATIONS, IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR ANY INDIRECT, PUNITIVE, SPECIAL, EXEMPLARY, INCIDENTAL OR CONSEQUENTIAL DAMAGES OF ANY TYPE OR KIND (INCLUDING LOSS OF BUSINESS, GOODWILL, USE OR OTHER ECONOMIC ADVANTAGE, BUSINESS INTERRUPTION, OR ANY ALTERATION, COMPROMISE, CORRUPTION OR LOSS OF CUSTOMER DATA) ARISING OUT OF, OR IN ANY WAY CONNECTED WITH OUR SERVICES, THE DOCUMENTATION OR USE THEREOF OR THESE TERMS, WHETHER BASED ON CONTRACT, TORT OR ANY OTHER LEGAL THEORY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IF, NOTWITHSTANDING THIS LIABILITY LIMITATION, SHOULD WE HAVE ANY LIABILITY TO YOU OR ANY THIRD PARTY FOR ANY DAMAGE, AND EXCEPT FOR YOUR MISAPPROPRIATION OF INTELLECTUAL PROPERTY AND BREACH OF YOUR CONFIDENTIALITY OBLIGATIONS, EACH PARTY'S AGGREGATE LIABILITY UNDER THESE TERMS SHALL BE LIMITED TO THE FEES PAID AND PAYABLE BY YOU FOR OUR SERVICES FOR THE SIX (6) MONTHS IMMEDIATELY PRIOR TO THE EVENT GIVING RISE TO THE CLAIM FOR SUCH DAMAGE. FOR CLARITY, THE ABOVE LIMITATIONS SHALL NOT LIMIT YOUR PAYMENT OBLIGATIONS TO US FOR THE SERVICES. NO CLAIM MAY BE PURSUED BY YOU MORE THAN ONE (1) YEAR AFTER THE FACTS GIVING RISE TO SUCH CLAIM HAVE ARISEN. THIS LIABILITY LIMITATION FORMS AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN THE PARTIES AND SHALL SURVIVE AND APPLY EVEN IF ANY REMEDY SPECIFIED IN THESE TERMS DOES NOT FULLY COMPENSATE YOU FOR ANY LOSSES OR IS FOUND TO HAVE FAILED ITS ESSENTIAL PURPOSE.
                        </div>
                    </article>
                    <article class="cb-factor" id="indemnification">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">15</span>Indemnification
                        </h2>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">15.1</span>If We reasonably believe that Your use of the Services is likely to be enjoined, or if the Services are held to infringe a valid United States patent,  copyright or trademark and all use of such Services by You is thereby enjoined, We shall, at Our expense and sole option, (i) procure for You the right to continue using the Services as set forth hereunder, (ii) replace the Services with other non-infringing services or software of substantially equivalent functionality or (iii) modify the Services so that there is no infringement, provided that such modified services or software provides substantially equivalent functionality. If, in Our reasonable opinion, the remedies above are infeasible or commercially impracticable, We may, at Our sole discretion, terminate Your Subscription(s).
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">15.2</span>Subject to Your compliance with these Terms, We, if notified promptly in writing and given authority, control, information and assistance at Our expense for defense and settlement of same, shall defend You against any third party action, suit or proceeding brought against You so far as it is based on a claim that the use of the Services infringes a United States patent, copyright or trademark, and shall indemnify You and hold You harmless for (i) all attorneys' fees, and court or tribunal costs incurred by Us with respect to defense and settlement of such third party claim, (ii) any judgments, fines, costs and penalties awarded by any court or tribunal against Us and/or Our customers, including You, for such third party claim and (iii) any amounts paid in settlement of such third party claim as mutually agreed by Us and the third party in such claim. We will have no liability or obligation with respect to any third party claim if such claim is caused in whole or in part by (i) modification of the Services by anyone other than Us; (ii) the combination, operation or use of the Services with any other software, hardware, application or process where the Services would not by themselves be infringing; (iii) compliance with designs, data, materials, instructions or specifications provided by You; (iv) use of the Services by You and/or Users in violation of these Terms; or (v) any ‘Other Services' and/or ‘Third-Party Content'.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">15.3</span>SECTIONS 15.1 AND 15.2 (<i>Indemnification</i>) SET FORTH YOUR SOLE AND EXCLUSIVE REMEDY AND OUR SOLE, EXCLUSIVE AND ENTIRE OBLIGATION AND LIABILITY WITH RESPECT TO ANY CLAIM OF INFRINGEMENT, MISAPPROPRIATION OR VIOLATION OF INTELLECTUAL PROPERTY RIGHTS. You agree that You shall, in no event, settle any matter without Our prior written approval.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">15.4</span><b>Indemnification by You.</b> You will indemnify and hold Us and/or the other Group Companies harmless against any claim brought by a third party against Us and/or the other Group Companies, and Our respective employees, officers, directors and agents arising from or related to use of the Services by You in breach of these Terms or matters which You have expressly agreed to be responsible pursuant to these Terms; provided that (a) We notify You of the threat or notice of such claim; (b) You have or will have the sole and exclusive control and authority to select defense attorneys, defend and/or settle any such claim; and (c) We reasonably cooperate with You at Your expense in connection therewith. Notwithstanding the foregoing, We may participate in the defense of any matter with counsel of Our own choosing at Our cost and expense, and You will not settle any matter without Our prior written consent, unless the settlement fully and unconditionally releases Us and/or the other Group Companies and does not require Us and/or the other Group Companies to pay any amount, take any action or admit any liability.
                        </div>
                    </article>
                    <article class="cb-factor" id="survival">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">16</span>Survival
                        </h2>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">16.1</span>Sections 3 (<i>Your Responsibilities</i>), 5 (<i>Intellectual Property Rights</i>), 7 (<i>Billing and Payments</i>), 8 (<i>Term, Termination and Suspension</i>), 10 (<i>Confidentiality</i>), 11 (<i>Data Security and Privacy</i>), 13 (<i>Disclaimer of Warranties</i>), 14 (<i>Limitation of Liability</i>), 15 (<i>Indemnification</i>), 16 (<i>Survival</i>), 18 (<i>General</i>) of these Terms and such other provisions that by their nature are intended to survive termination, shall survive any expiration or termination of these Terms. Termination of these Terms shall not limit either Party's liability for obligations accrued as of or prior to such termination or for any breach of these Terms.
                        </div>
                    </article>
                    <article class="cb-factor" id="communication_from_us">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">17</span>Communication From Us
                        </h2>
                        <div class="cb-factor__desc">
                            We may communicate with You directly via e-mail at the e-mail address associated with Your Account, or through the Services (such as, through pop-ups), or Our blog or Our Website or over phone, including,
                        </div>
                        <div class="cb-factor__desc" style="margin-top: 24px;font-size: 90%;">
                            <ol style="list-style-type: lower-roman;">
                                <li>
                                    regarding Your Subscription, system updates or other matters related to Your Account;
                                </li>
                                <li>
                                    as contained in the Privacy Notice;
                                </li>
                                <li>
                                    if You and/or Users are in violation of these Terms;
                                </li>
                                <li>
                                    if a specific activity or purpose is prohibited with respect to the Services, so that You immediately cease use of the Services for such prohibited activity or purpose; or
                                </li>
                                <li>
                                    if Your or Users' and/or End-Customers' activities on the Service causes excessive stress on the Services and associated infrastructure.
                                </li>
                            </ol>
                        </div>
                    </article>
                    <article class="cb-factor" id="miscellaneous">
                        <h2 class="cb-factor__title">
                            <span class="cb-factor__list--style">18</span>General
                        </h2>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">18.1</span><b>Parties.</b> The Parties are independent contractors. Nothing in these Terms shall be deemed to constitute a partnership, joint venture, employment or franchise between the Parties, nor constitute any Party as the agent of the other Party for any purpose or entitle any Party to commit or bind the other Party in any manner.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">18.2</span><b>Entire Agreement and Revisions.</b> These Terms including any exhibits and Pricing Agreements, constitute the entire agreement, and supersede all prior or contemporaneous, written or oral understandings, communications or agreements between the Parties regarding such subject matter, including any click-wrap terms. Any use of Your pre-printed forms, such as purchase orders, are for convenience only, and any pre-printed terms and conditions set forth in Your printed forms that are in addition to, inconsistent or in conflict with, or different than, these Terms shall be null and void. Neither commencement of performance, nor failure to object to any additional or different terms and conditions from You, nor provision of Services, by, in each case, Us or Our other Group Companies shall constitute an acceptance of any terms and conditions proposed by You that are in addition to, inconsistent or in conflict with, or different than, these Terms. In the event of a conflict between any Pricing Agreement and these Terms, the Pricing Agreement shall prevail to the extent it is intended to. We may amend these Terms from time to time by posting the most current version on Our Website, in which case the new Terms will supersede prior versions. Please check these Terms periodically to take notice of changes as they will be binding on You. If an amendment materially affects Your rights, We will notify You (by, for example, sending a message to the e-mail address associated with Your Account, or posting on Our blog or on the Website or as a notification inside the Services). Your continued use of the Services following the effective date of any such amendment may be relied upon by Us as Your acceptance of any such amendment. If You do not agree to an amendment, You may terminate Your use of the Services or request Us to terminate the provision of Our Services to You.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">18.3</span><b>Severability and Waiver.</b> If any provision of these Terms is held to be unenforceable by a court of competent jurisdiction, the unenforceable provision shall be replaced by the court with an enforceable provision that comes closest to the Parties' intent underlying the unenforceable provision, and the remaining provisions of these Terms shall remain in full force and effect. The unenforceability of any provision in any jurisdiction shall not affect the enforceability of such provision in any other jurisdiction. Our non-exercise of any right herein does not constitute a waiver of that right or provision of these Terms. Any term of these Terms may be waived only by a separate written agreement signed by Our authorized representative.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">18.4</span><b>Assignment.</b> We may assign or transfer all or any part of these Terms or Our rights under these Terms or delegate the performance of Our duties under these Terms in whole or in part to any of the other Group Companies, or in connection with any acquisition, consolidation, merger, reorganization, transfer all or substantially all of Our assets or other business combination, or by operation of law without Your consent and without providing notice. We may subcontract Our obligations hereunder, provided that We shall at all times remain responsible for the performance of the subcontractor. You may not assign or transfer any part of these Terms, or delegate Your duties or responsibilities under these Terms, by business combination, operation of law or otherwise without Our prior written consent. Subject to the foregoing, these Terms will bind and benefit the Parties and their respective successors and permitted assigns.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">18.5</span><b>Third Party Beneficiaries.</b> Except as expressly provided in these Terms, nothing in these Terms, express or implied, is intended to confer upon any party (other than the Parties hereto, their respective successors and permitted assigns and the Sub-processors) any rights or obligations, to enforce these Terms.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">18.6</span><b>Governing Law.</b> These Terms shall be governed by the laws of the State of Delaware, United States. These Terms shall not be governed by the conflict of law rules of any jurisdiction or the United Nations Convention on Contracts for the International Sale of Goods, the application of which is expressly excluded. The respective courts of Delaware, United States shall have exclusive jurisdiction for any dispute between the Parties, and the Parties consent to venue and personal jurisdiction there. THE PARTIES HEREBY WAIVE ANY RIGHTS THEY MAY HAVE TO TRIAL BY JURY. YOU AGREE THAT ANY PROCEEDINGS, INCLUDING ANY ARBITRATION, WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED OR REPRESENTATIVE ACTION. Each Party shall have the right, at its election, to seek injunctive or other equitable relief in any court of competent jurisdiction to enforce these Terms, which remedy will be cumulative and not exclusive. If any action is pursued to enforce or obtain compliance with these Terms, the prevailing Party shall be entitled to reasonable attorneys' fees and costs, in addition to any other relief to which such Party may be entitled.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">18.7</span><b>Export Controls and Sanctions Compliance.</b> You acknowledge that the Services (including the software and other components of the Services) may be controlled by the laws of one or more countries governing technology use and transfer, including U.S. Export Administration Regulations, and/or may be subject to the sanctions programs of one or more countries. You shall not access, use or transfer the Services or any part of the Services in violation of such laws and sanctions programs. You represent and warrant that You are not, and You are not acting on behalf of, (i) any person who is a citizen, national, or resident of, or any entity registered in, or any person or entity who is controlled by the government of, any country to which the United States or any other government has prohibited export or other transactions, or (ii) any person or entity listed on any denied persons or entities list maintained by the United States or any other government, including lists maintained by the U.S. Office of Foreign Assets Control regarding sanctions programs that it administers, the U.S. Treasury Department list of Specially Designated Nationals and Blocked Persons, and the U.S. Commerce Department Denied Persons List or Entity List. You also represent, warrant and covenant that You shall not permit any person or entity described in the preceding sentence to access or use the Services or any part of the Services, whether in any U.S. embargoed or sanctioned country or otherwise, or any person or entity to access or use the Services or any part of the Services in violation of any U.S. or other export embargoes, sanctions or laws. You agree to comply with all applicable laws regarding the access and use of the Services or any part of the Services by You and Users. Notwithstanding anything contained in these Terms to the contrary, We may, at Our sole discretion, immediately terminate Your access and use of the Services without prior written notice or an opportunity to cure in the event of an actual or threatened breach of this Section 18.7 (<i>Export Controls and Sanctions Compliance</i>).
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">18.8</span><b>Force Majeure and Other Events.</b> We will make commercially reasonable efforts to keep the Services operational twenty-four (24) hours a day and seven (7) days a week, however, We shall not be liable for inadequacy of or irregularity in the Services caused by (i) any circumstance beyond Our reasonable control, including acts of God, acts of government, flood, fire, earthquakes, civil unrest, acts of terror, strikes or other labor problems, technical failures (including failures in telecommunications, internet, internet service provider or hosting facilities, power shortages) or acts undertaken by third parties, including without limitation, denial of service attacks; (ii) sub optimal functionality, availability or downtime of Your payment gateway and/or ‘Other Services'; (iii) Your, Users' or End-Customers' use of the Services in an unauthorized, improper or unlawful manner; or for any misuse or modification or damage of the Services caused by You, Users or End-Customers; or any breach of these Terms by You or Users; or (iv) planned downtime for maintenance, upgrades and updates for which We will use commercially reasonable efforts to provide at least forty-eight (48) hours prior notice (collectively, the "<strong>Force Majeure and Other Events</strong>"). Despite Our efforts, the Services or any functionality may from time to time encounter technical or other problems and may not continue to be uninterrupted. We are not responsible for any such problems, interruption, any ongoing obligation to offer Our Services or any functionality, or any damages resulting therefrom.
                        </div>
                        <div class="cb-factor__desc">
                            <span class="cb-factor__list--style">18.9</span><b>Notices.</b>  All notices to be provided by Us to You under these Terms may be delivered in writing by an internationally recognized overnight courier or U.S. mail to the mailing address provided by You while subscribing to the Services, or by electronic mail to the e-mail address provided by You in connection with Your Subscription. You may opt out of receiving e-mails from Us by clicking on the "unsubscribe" or "opt-out" link in the e-mails, and in the absence of such links, by reaching out to Us at <a href="mailto:support@chargebee.com">support@chargebee.com</a> or by terminating Your Subscription. The contact information for a notice to Us by courier or U.S. mail is CHARGEBEE INC., 340 S. Lemon Avenue, Suite #1537, Walnut, California 91789, United States with a CC to <a href="mailto:legal@chargebee.com">legal@chargebee.com</a> or <a href="mailto:compliance@chargebee.com">compliance@chargebee.com</a>. All notices shall be deemed delivered upon receipt.
                        </div>
                    </article>
                </div>



                <!-- ===============================================================
                Sidebar Navigation
                ===============================================================-->
                <div class="col-sm-4 col-sm-offset-1 col-md-3 col-md-offset-2 hidden-xs" style="padding-top: 100px;">
                    <div id="affix-nav" class="cb-affix">
                        <ul class="nav cb-affix__list">
                            <li class="cb-affix__title">Terms of Service</li>
                            <li class="cb-affix__item">
                                <a href="#definitions">Definitions</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#your_rights">Rights to Use the Services</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#your_responsibilities">Your Responsibilities </a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#changes_to_the_websites_and_services">Changes To The Websites And Services</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#intellectual_property_rights">Intellectual Property Rights </a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#sub-processors_other_services_and_third-party_content">Sub-processors, Other Services And Third-party Content</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#plans_billing_and_payments">Billing And Payments</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#term_termination_and_suspension">Term, Termination And Suspension</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#pci_dss_compliance">PCI DSS Compliance</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#confidentiality">Confidentiality</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#data_security_and_privacy">Data Security And Privacy </a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#other_data_services">Other Data Services</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#disclaimer_of_warranties">Disclaimer Of Warranties</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#limitation_of_liability">Limitation Of Liability </a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#indemnification">Indemnification </a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#survival">Survival </a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#communication_from_us">Communication From Us </a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#miscellaneous">General</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
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
        $('body').scrollspy({ target: '#affix-nav' })
        $('#affix-nav').affix({
            offset: {
                top: 400,
                bottom: function () {
                    return (this.bottom = $('#cb-affix-footer').outerHeight(true) + 50)
                }
            }
        })
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
    .hero--invert{
        padding-bottom: 100px;
    }
    .term-anchor{
        color: #7864FF
    }
    .cb-affix__item{
        margin-bottom: 6px;
        margin-top: 6px;
    }
    /*Fixed header hide*/
    #ch-js-header-cloned{
        display: none;
    }
    @media(max-width:767px){
        .hero--invert{
            padding-bottom: 40px;
        }
    }
    @media (max-width: 767px){
        .affix{
            position: static!important;
        }
    }
    .cb-factor__list--style {
        display: inline-block;
        margin-right: 6px;
        font-weight: 700;
    }
    .cb-factor__list--style:after {
        content: ".";
    }
    @media (min-width: 992px) {
        .cb-factor__list--style:not(.cb-factor__list--push) {
            margin-left: -29px;
            min-width: 20px;
        }
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
