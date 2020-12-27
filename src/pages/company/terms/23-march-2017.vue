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
      :cb-url="'/company/terms/23-march-2017/'" 
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
        <section class="hero hero--invert" style="background-image: none; background-color: #7864FF; padding-top: 150px; padding-bottom: 80px">
         <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <h1 style="color: #fff; font-weight: 400">Terms of Service</h1>
                    <p style="color: rgba(255,255,255, 0.6);">Effective Date : 23rd March 2017</p>
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
                    <!-- ===============================================================
                     Section 1
                     ===============================================================-->
                    <article class="cb-factor" id="terms">
                        <h2 class="cb-factor__title">
                            Terms
                        </h2>
                        <p class="cb-factor__desc">
                            These Terms govern your access and use of the cloud-based billing platform and related products and services (“Services”) provided by Chargebee. By using our Services, you’re agreeing to be bound by these Terms. If you’re using our Services for an organization, you’re agreeing to these Terms on behalf of that organization and in these Terms, “you” or “your” refers to that organization.
                        </p>
                        <p class="cb-factor__desc">
                            We may modify these Terms from time to time by posting the most current version on our website. New features that we add to our Services are subject to these Terms. If a modification materially reduces your rights, we will notify you (by, for example, sending a message to the email address associated with your account, or posting on our blog or on our website or as a notification inside Chargebee application). If you do not agree to a modification, you may terminate your use of our Services or request us to terminate the provision of our Services to you. By continuing to use our Services after the modification comes into effect, you are agreeing to be bound by the modified Terms. You can view the most recent version of these Terms here: <br><br>

                            <a href="/company/terms/" class="term-anchor">https://www.chargebee.com/company/terms/</a>.
                        </p>
                    </article>


                    <!-- ===============================================================
                     Section 2
                     ===============================================================-->
                    <article class="cb-factor" id="privacy-policy">
                        <h2 class="cb-factor__title">
                            Privacy Policy
                        </h2>

                        <p class="cb-factor__desc">
                            We are committed to protecting your privacy. Our Privacy Policy explains how we collect, use and handle your information when you use our Services. You understand that through your use of our Services you consent to the collection, use and handling of your information as set forth in our Privacy Policy.  For more information, please see our Privacy Policy here:<br><br>

                            <a href="https://www.chargebee.com/privacy/" class="term-anchor">https://www.chargebee.com/privacy/</a>.
                        </p>

                    </article>


                    <!-- ===============================================================
                     Section 3
                     ===============================================================-->
                    <article class="cb-factor" id="registration">
                        <h2 class="cb-factor__title">
                            Registration
                        </h2>

                        <p class="cb-factor__desc">
                            You represent and warrant that you are at least 18 years of age, or the applicable age of majority in your geographic area, and that you have the legal ability, right and authority to be bound by, or bind your organization to, these Terms. You agree to provide us with current, complete and accurate registration information as prompted by our Services registration process (“Registration Data”). You agree not to omit or misrepresent any Registration Data, and you agree to update such data to ensure that such data is current, complete and accurate. You further authorize us to verify your Registration Data as required for your use of our Services.
                        </p>

                    </article>


                    <!-- ===============================================================
                     Section 4
                     ===============================================================-->
                    <article class="cb-factor" id="license">
                        <h2 class="cb-factor__title">
                            License
                        </h2>

                        <p class="cb-factor__desc">
                            Subject to your compliance with these Terms, we grant you a non-exclusive, non-transferable, non-assignable, worldwide, limited license to use our Services that you have ordered and paid for solely for your own internal business purposes only in accordance with these Terms and the applicable Services documentation for the Term (as defined below), unless earlier terminated. You may use our Services documentation solely in connection with your use of our Services. All rights not expressly granted to you in these Terms are reserved by Chargebee and its licensors. All right, title and interest in and to the intellectual property rights in our Services and related documentation and any corrections, derivatives, enhancements, modifications, updates and upgrades to our Services and related documentation, including all intellectual property and other proprietary rights therein, belong solely and exclusively to Chargebee and its licensors. Our Services may include certain third party components and support services. For any components or services that you use, you agree to comply with the terms and conditions of such third party providers.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 5
                     ===============================================================-->
                    <article class="cb-factor" id="services-level">
                        <h2 class="cb-factor__title">
                            Services Level
                        </h2>

                        <p class="cb-factor__desc">
                            We will make commercially reasonable efforts to keep our Services operational 24 hours a day and seven days a week, except for planned downtime for maintenance, upgrades and updates for which we will use commercially reasonable efforts to provide at least [48] hours prior notice, or (ii) for unplanned downtime caused by any circumstance beyond our control, including acts of God, acts of government, flood, fire, earthquakes, civil unrest, acts of terror, strikes or other labor problems, failures in computer, hardware, telecommunications, internet service provider or hosting facilities, power shortages and denial of service attacks. Despite our efforts, our Services or any functionality may from time to time encounter technical or other problems and may not continue uninterrupted. We are not responsible for any such problems, interruptions, any ongoing obligation to offer our Services or any functionality, or any damages resulting therefrom. We reserve the right to modify, suspend or discontinue all or any part of our Services at any time for any reason without liability to you.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="fees">
                        <h2 class="cb-factor__title">
                            Fees
                        </h2>

                        <p class="cb-factor__desc">
                            We will charge you a fee based on your account plan by charging your payment method in advance for the subscription term you have agreed following your account’s activation. Should you upgrade or downgrade your account plan, your payment method will be charged for your new billing rate. At the time of your upgrade or downgrade, your prior account plan charges will be prorated based on the number of days under the prior account plan. Your payment method will then be charged at your new billing rate for the new subscription term thereafter. All payment obligations are non-cancelable and all amounts paid are non-refundable. We do not provide refunds or credits for less than 30 days of Services, or for a period when your account is open but you do not use our Services.  The fees do not include any taxes, duties, fees or other amounts assessed or imposed by any government authority, for which you are responsible except for taxes imposed on Chargebee’s income. You agree to pay or reimburse us for all such amounts upon demand, or provide evidence of payment or exemption. We reserve the right to change our fees and billing methods upon 30-days notice. We will notify you of any fees changes by, for example, sending a message to the email address associated with your account, or posting on our Services or website. For existing contracts for which fees have been already received by us, we will implement the price changes during the next renewal period.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="customer-data">
                        <h2 class="cb-factor__title">
                            Customer Data
                        </h2>

                        <p class="cb-factor__desc">
                            We do not own any of your data, information and materials or the data, information and materials of your authorized users and customers that you or your authorized users post or upload to our Services (“Customer Data”). As between Chargebee and you, you retain title to and ownership of all right, title and interest in your Customer Data. By using our Services, you grant us a limited license to access, disclose, process, transmit and use your Customer Data for performing our Services to you and for complying with these Terms. Following any expiration or termination of these Terms or your Chargebee account, we will retain a copy of your Customer Data for 30 days and after such 30-day period, we will have no obligation to maintain or provide access to your Customer Data and will thereafter, unless legally prohibited, delete all Customer Data in our possession. You agree that you are solely responsible for exporting your Customer Data prior to any such expiration or termination, and if you require assistance for exporting your Customer Data following any such expiration or termination, you may be required to pay a separate fee to us.
                        </p>

                        <p class="cb-factor__desc">
                            We may use (but not disclose) data collected regarding your use of our Services for our internal business purposes, including for creating anonymized, aggregated and otherwise non-personal data. We may freely use and make available such anonymized, aggregated and otherwise non-personal data regarding the use of our Services for our business purposes. We will ensure that this anonymized, aggregated and otherwise non-personal data cannot identify you or your customers and can in no way be specifically associated to you or any of your customers.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="confidentiality">
                        <h2 class="cb-factor__title">
                            Confidentiality
                        </h2>

                        <p class="cb-factor__desc">
                            We are committed to protecting the confidentiality of your Confidential Information (as defined below). The access, disclosure and use of Confidential Information and any other rights and obligations regarding such information shall be solely and exclusively governed by these Terms, except as otherwise provided in a separate confidentiality agreement between Chargebee and you. All confidentiality obligations shall remain in force and effect for the Term plus one year.
                        </p>

                        <p class="cb-factor__desc">
                            You or Chargebee (the “Disclosing Party”) may from time to time during the Term disclose to the other (the “Receiving Party”) the Disclosing Party’s confidential, proprietary and/or non-public information, materials or knowledge that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information, materials or knowledge and/or the circumstances of disclosure (the “Confidential Information”). For clarity, your Registration Data and Customer Data constitutes your Confidential Information, and our Services, Services documentation, intellectual property and pricing information constitutes our Confidential Information. The Receiving Party agrees to protect the Disclosing Party’s Confidential Information from unauthorized access, disclosure or use in the same manner that the Receiving Party protects its own confidential or proprietary information of a similar nature but with no less than reasonable care. The Receiving Party will only access and use the Disclosing Party’s Confidential Information in connection with performing these Terms (or as expressly authorized by the Disclosing Party in writing), and will disclose the Disclosing Party’s Confidential Information only to the employees and contractors of the Receiving Party who have a need to know the Confidential Information for purposes of performing these Terms (or for other purposes as expressly authorized by the Disclosing Party in writing) and who are under a duty of confidentiality no less restrictive than the Receiving Party’s duty hereunder.
                        </p>

                        <p class="cb-factor__desc">
                            The Receiving Party’s obligations with respect to Confidential Information of the Disclosing Party will terminate if the Receiving Party can document that such information (i) was already lawfully known to the Receiving Party at the time of disclosure by the Disclosing Party free from any obligation of confidence, (ii) was disclosed to the Receiving Party by a third party who had the right to make such disclosure without any confidentiality restrictions, (iii) is, or through no fault of the Receiving Party has become, generally available to the public or (iv) was independently developed by the Receiving Party without access to, or use of, the Disclosing Party’s Confidential Information. In addition, the Receiving Party may disclose Confidential Information of the Disclosing Party to the extent compelled by law or a court or other judicial or administrative body, provided that the Receiving Party notifies the Disclosing Party of such compelled disclosure promptly and in writing (to the extent legally permitted) and cooperates with the Disclosing Party, at the Disclosing Party’s reasonable request and expense, in any lawful action to contest or limit the scope of such required disclosure.
                        </p>

                        <p class="cb-factor__desc">
                            The Receiving Party will return to the Disclosing Party all Confidential Information of the Disclosing Party in the Receiving Party’s possession or control and permanently erase all electronic copies of such Confidential Information promptly upon the written request of the Disclosing Party. At the Disclosing Party’s request, the Receiving Party will certify in writing that it has fully complied with its obligations under this Section.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="pci-dss-compliance">
                        <h2 class="cb-factor__title">
                            PCI DSS Compliance
                        </h2>

                        <p class="cb-factor__desc">
                            Chargebee agrees to maintain Payment Card Industry Data Security Standard (“PCI DSS”) compliance in accordance with the current version of PCI DSS published by the PCI Security Standards Council.  We are a validated PCI Level 1 service provider and our current Certificate of Compliance can be reviewed at <a href="https://www.chargebee.com/security/pci/" class="term-anchor">https://www.chargebee.com/security/pci/</a>.  We will maintain all applicable PCI DSS requirements to the extent Chargebee possesses or otherwise stores, processes or transmits cardholder data, which is information associated with a payment card, such as account number, expiration date and CVV2 (“Cardholder Data”), on your behalf.  Within the liability limitations set forth elsewhere in these Terms, we are only responsible for the security of your customers’ Cardholder Data to the extent Chargebee possesses or otherwise stores, processes or transmits Cardholder Data on your behalf. You will be solely responsible for the Cardholder Data till Chargebee possesses or otherwise stores, processes or transmits Cardholder Data on your behalf. If your activities in relation to any Cardholder Data is subject to PCI DSS, you agree to comply at all times with PCI DSS and all applicable laws, rules and regulations regarding such activities, and to certify such compliance upon our request. The steps that you will need to take to comply with PCI DSS when using Chargebee will vary depending on the Services that you license. For more information about implementing Chargebee, contact <a href="mailto:support@chargebee.com" class="term-anchor">support@chargebee.com</a>. You also agree that you will use only PCI compliant service providers in connection with the possession, storage, processing and transmission of Cardholder Data.  You represent and warrant to Chargebee that you are in compliance with all applicable privacy laws, rules and regulations, and you have obtained all necessary affirmative consents under applicable law, rules and regulations to disclose to Chargebee, or allow Chargebee to access, collect, disclose, use, store, process and/or transmit, as applicable in relation to the Services that you license, any of your or your customer’s data that you provide to us or authorize us to collect, including information that we may collect through the Services or our website.  For the purposes of these Terms, Cardholder Data is included in the definition of Customer Data.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="your-responsibilities">
                        <h2 class="cb-factor__title">
                            Your Responsibilities
                        </h2>

                        <p class="cb-factor__desc">
                            You are solely responsible for (i) your and your authorized users’ access and use of our Services and compliance with these Terms, (ii) maintaining the confidentiality of your and your authorized users’ log-in information, credentials and passwords associated with your account, and the privacy and security of your account, (iii) any monies due to you related to transactions that are processed through your payment gateways, merchant account providers or any payment processors that you utilize in connection with our Services, and (iv) all activities that occur regarding your account regardless of whether the activities are undertaken by you, your employees or a third party (including your contractors or agents). We are not responsible for any alteration, compromise, corruption or loss of your Customer Data, or any activity that arises from any access to, sharing or use of your account, log-in information, credentials or passwords, or your activities, except to the extent caused by our breach of these Terms. You agree to notify us immediately of any unauthorized access or use of your account, log-in information, credentials or passwords, or any unauthorized activity in your account.  We have the right to suspend or terminate our Services, without notice to you, if we suspect any unauthorized activity. You agree to cooperate with us in any investigation into suspected or actual unauthorized activity. You also agree to comply with all applicable laws, rules and regulations in connection with your use of our Services, including data protection, privacy, data transmission and export control laws, rules and regulations.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="your-conduct">
                        <h2 class="cb-factor__title">
                            Your Conduct
                        </h2>

                        <p class="cb-factor__desc">
                            You agree as follows:  (i) you and your authorized users will not remove or modify any trademarks, trade names, service marks, service names, logos or brands, or copyright or other proprietary notices on our Services or the documentation, or add any other markings or notices to our Services or the documentation; (ii) you and your authorized users will not use our Services or permit our Services to be used to perform any billing or related services for any third party, or otherwise license, sublicense, sell, resell, transfer, assign, distribute or otherwise commercially exploit or make available to any third party our Services in any way; (iii) you and your authorized users will not post, upload or permit our Services to be used to post or upload any Customer Data that infringes the intellectual property rights or other proprietary rights of any third party, is unlawful or contains objectionable material or contains software viruses or other harmful or deleterious computer code, files or programs such as trojan horses, worms, time bombs or cancelbots; (iv) you and your authorized users will not use our Services or permit our Services to be used to store, host or send unsolicited email, spam or SMS messages; (v) you and your authorized users will not use or permit the use of any software, hardware, application or process that interferes with our Services, interferes with or disrupts servers, systems or networks connected to our Services, or violates the regulations, policies or procedures of such servers, systems or networks, accesses or attempts to access another customer’s accounts, servers, systems or networks without authorization, or harasses or interferes with another customer’s use and enjoyment of our Services; (vi) you and your authorized users will not tamper with or breach the security of our Services; (vii) you and your authorized users will not modify, port, adapt, translate or create any derivative work based upon, our Services or the documentation; and (viii) you and your authorized users will not reverse engineer, decompile, disassemble or otherwise derive or attempt to derive the source code of our Services, except for any non-waivable right to decompile any software in our Services expressly permitted by applicable mandatory law.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="warranty-disclaimer">
                        <h2 class="cb-factor__title">
                            Warranty Disclaimer
                        </h2>

                        <p class="cb-factor__desc">
                            OUR SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. WE DISCLAIM ANY AND ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. WE DO NOT WARRANT THAT OUR SERVICES OR ANY PART THEREOF, OR USE THEREOF WILL BE ERROR-FREE, UNINTERRUPTED, SECURE OR VIRUS FREE, WILL MEET YOUR QUALITY AND PERFORMANCE REQUIREMENTS, OR WILL BE CORRECTED FOR ANY DEFECTS WITHIN A STIPULATED PERIOD PURSUANT TO ANY SERVICE LEVEL AGREEMENT. YOU UNDERSTAND THAT IN USING OUR SERVICES, SENSITIVE INFORMATION WILL TRAVEL THROUGH THIRD PARTY INFRASTRUCTURES THAT ARE NOT UNDER OUR CONTROL. WE MAKE NO WARRANTY WITH RESPECT TO THE SECURITY OF SUCH THIRD PARTY INFRASTRUCTURES. YOU ASSUME THE ENTIRE RISK OF AND SHALL NOT HOLD US RESPONSIBLE FOR ANY ALTERATION, COMPROMISE, CORRUPTION OR LOSS OF CUSTOMER DATA, NOTWITHSTANDING ANY SECURITY OR OTHER MEASURE THAT MAY BE PROVIDED BY US.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="liability-information">
                        <h2 class="cb-factor__title">
                            Liability Limitation
                        </h2>

                        <p class="cb-factor__desc">
                            EXCEPT FOR YOUR MISAPPROPRIATION OF INTELLECTUAL PROPERTY, IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, SPECIAL, EXEMPLARY, INCIDENTAL OR CONSEQUENTIAL DAMAGES OF ANY TYPE OR KIND (INCLUDING LOSS OF BUSINESS, GOODWILL, USE OR OTHER ECONOMIC ADVANTAGE, BUSINESS INTERRUPTION, OR ANY ALTERATION, COMPROMISE, CORRUPTION OR LOSS OF CUSTOMER DATA) ARISING OUT OF, OR IN ANY WAY CONNECTED WITH OUR SERVICES, THE DOCUMENTATION OR USE THEREOF OR THESE TERMS, WHETHER BASED ON CONTRACT, TORT OR ANY OTHER LEGAL THEORY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IF, NOTWITHSTANDING THIS LIABILITY LIMITATION, CHARGEBEE SHOULD HAVE ANY LIABILITY TO YOU OR ANY THIRD PARTY FOR ANY DAMAGE, CHARGEBEE’S AGGREGATE LIABILITY UNDER THESE TERMS SHALL BE LIMITED TO THE FEES PAID AND PAYABLE BY YOU FOR OUR SERVICES FOR THE SIX MONTHS IMMEDIATELY PRIOR TO THE EVENT GIVING RISE TO THE CLAIM FOR SUCH DAMAGE. FOR CLARITY, THE ABOVE LIMITATIONS SHALL NOT LIMIT YOUR PAYMENT OBLIGATIONS TO US FOR OUR SERVICES.  No claim against Chargebee may be brought more than one year after the facts giving rise to such claim have arisen.  This liability limitation forms an essential basis of the bargain between the parties and shall survive and apply even if any remedy specified in these Terms is found to have failed its essential purpose.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="third-party-products-and-services">
                        <h2 class="cb-factor__title">
                            Third Party Products and Services
                        </h2>

                        <p class="cb-factor__desc">
                            Our Services may contain or may contain links to third party information, websites, products, services or resources that are not owned or controlled by us. We do not endorse any such third party content. If you access or use such third party content through our Services, you do so at your own risk.  You agree that we have no responsibility arising from your access to or use of any such third party information, websites, products, services or resources.
                        </p>

                    </article>


                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="marketing">
                        <h2 class="cb-factor__title">
                            Marketing
                        </h2>

                        <p class="cb-factor__desc">
                            You agree that we may use your name and logo to identify you as a Chargebee customer on our website or in other sales or marketing materials, provided that we will not issue any press release without your prior consent.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="termination">
                        <h2 class="cb-factor__title">
                            Termination
                        </h2>

                        <p class="cb-factor__desc">
                            The term of our Services (the “Term”) begins on the date you signed up for Chargebee, and continues until terminated pursuant to these Terms. You may terminate our Services and these Terms at any time for any reason by e-mailing us at <a href="mailto:support@chargebee.com" class="term-anchor">support@chargebee.com</a> and ceasing all use of our Services. We may suspend or terminate our Services and these Terms at any time for any reason by notifying you in writing, but if our suspension or termination is based on your suspected or actual breach of these Terms, we may suspend or terminate our Services without providing any notice to you. Upon any expiration or termination of our Services, (i) all unpaid fees during the Term accrued through and including the 30 days period in which our Services were terminated will become immediately due and payable, (ii) our Services will immediately cease and (iii) the rights granted by us to you under these Terms will cease immediately and you will immediately delete (or, at our request, return) all related documentation and any of our Confidential Information in your possession or control. Any suspected or actual illegal activity that were grounds for termination of your use of our Services may be referred to law enforcement authorities. We shall not be liable to you for any suspension or termination of our Services. Notwithstanding the foregoing, the Sections of these Terms entitled “Fees”, “Customer Data”, “Confidentiality”, “Warranty Disclaimer”, “Liability Limitation”, “Termination”, “Miscellaneous” and “Contact Information” will survive any expiration or termination of these Terms.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="miscellaneous">
                        <h2 class="cb-factor__title">
                            Miscellaneous
                        </h2>

                        <p class="cb-factor__desc">
                            <strong>Parties.</strong> We are independent contractors. Nothing in these Terms shall be deemed to constitute a joint venture or partnership between the parties, nor constitute any party as the agent of the other party for any purpose, or entitle any party to commit or bind the other party in any manner. <Strong>Entire Agreement.</Strong> These Terms constitute the entire agreement between you and Chargebee regarding its subject matter, and supersedes all prior or contemporaneous, written or oral understandings, communications or agreements (including any prior versions of the Terms of Service) between you and Chargebee regarding such subject matter. These Terms may be altered, supplement or amended by us as set forth above in the Section entitled “Terms”, and may not be altered, supplemented or amended by you unless agreed in a separate written agreement signed by a Chargebee authorized representative. Any use of your pre-printed forms, such as purchase orders, are for convenience only, and any pre-printed terms and conditions set forth in your pre-printed forms that are in addition to, inconsistent or in conflict with, or different than, these Terms shall be given no force or effect. Neither commencement of performance, nor failure to object to any additional or different terms and conditions from you, nor delivery, by, in each case, Chargebee or a Chargebee affiliated company shall constitute an acceptance of any terms and conditions proposed by you that are in addition to, inconsistent or in conflict with, or different than, these Terms. Any term of these Terms may be waived only by a separate written agreement signed by a Chargebee authorized representative. <strong>Severability.</strong> If any provision of these Terms is held to be unenforceable, the unenforceable provision shall be replaced by an enforceable provision that comes closest to the parties’ intentions underlying the unenforceable provision, and the remaining provisions of these Terms shall remain in full force and effect. The unenforceability of any provision in any jurisdiction shall not affect the enforceability of such provision in any other jurisdiction. <strong>Assignment.</strong> Chargebee may assign or transfer these Terms, in whole or in part, to any Chargebee affiliated company or in connection with any acquisition, consolidation, merger, reorganization, transfer of all or substantially all of its assets or other business combination, or by operation of law without your consent and without providing notice. Chargebee may subcontract its obligations hereunder, provided that Chargebee shall at all times remain fully responsible for the performance of any subcontractor. You may not assign or transfer any part of these Terms, or delegate your duties or responsibilities under these Terms, by business combination, operation of law or otherwise without our prior written consent. Subject to the foregoing, these Terms will bind and benefit the parties and their respective successors and permitted assigns. <strong>Third Party Beneficiaries.</strong> Except as expressly provided in these Terms, nothing in these Terms, express or implied, is intended to confer upon any party other than the parties hereto or their respective successors and permitted assigns any rights or obligations, to enforce these Terms. <strong>Governing Law; Jurisdiction.</strong> These Terms shall be governed by the laws of Delaware, United States. These Terms shall not be governed by the conflict of law rules of any jurisdiction or the United Nations Convention on Contracts for the International Sale of Goods, the application of which is expressly excluded. The respective courts of Delaware, United States shall have exclusive jurisdiction for any dispute between the parties, and the parties consent to venue and personal jurisdiction there. THE PARTIES HEREBY WAIVE ANY RIGHTS THEY MAY HAVE TO TRIAL BY JURY. Each party shall have the right, at its election, to seek injunctive or other equitable relief in any court of competent jurisdiction to enforce these Terms, which remedy will be cumulative and not exclusive. If any action is pursued to enforce or obtain compliance with these Terms, the prevailing party shall be entitled to reasonable attorneys’ fees and costs, in addition to any other relief to which such party may be entitled. <strong>Export Controls and Sanctions Compliance.</strong> You acknowledge that the Services (including the software and other components of the Services) may be controlled by the laws of one or more countries governing technology use and transfer, including U.S. Export Administration Regulations, and/or may be subject to the sanctions programs of one or more countries. You shall not access, use or transfer the Services or any part of the Services in violation of such laws and sanctions programs. You represent and warrant that you are not, and you are not acting on behalf of, (i) any person who is a citizen, national, or resident of, or any entity registered in, or any person or entity who is controlled by the government of, any country to which the United States or any other government has prohibited export or other transactions, or (ii) any person or entity listed on any denied persons or entities list maintained by the United States or any other government, including lists maintained by the U.S. Office of Foreign Assets Control regarding sanctions programs that it administers, the U.S. Treasury Department list of Specially Designated Nationals and Blocked Persons, and the U.S. Commerce Department Denied Persons List or Entity List. You also represent, warrant and covenant that you shall not permit any person or entity described in the preceding sentence to access or use the Services or any part of the Services, whether in any U.S. embargoed or sanctioned country or otherwise, or any person or entity to access or use the Services or any part of the Services in violation of any U.S. or other export embargoes, sanctions or laws. You agree to comply with all applicable laws regarding the access and use of the Services or any part of the Services by you and your users. Notwithstanding anything in these Terms to the contrary, Chargebee, in its sole discretion, may immediately terminate your access and use of the Services without prior written notice or an opportunity to cure in the event of an actual or threatened breach of this provision.<strong>Force Majeure.</strong> We shall not be liable for our inadequate caused by any circumstance beyond our control, including acts of God, acts of government, flood, fire, earthquakes, civil unrest, acts of terror, strikes or other labor problems, failures in computer, hardware, telecommunications, internet service provider or hosting facilities, power shortages and denial of service attacks.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="contact-information">
                        <h2 class="cb-factor__title">
                            Contact Information
                        </h2>

                        <p class="cb-factor__desc">
                            We may communicate with you via email at the email address associated with your account, or through our Services (e.g., through pop-ups), or our blog or our website regarding your account, system updates or other matters related to our Services and your account. You may opt out of receiving emails from us by terminating our Services. If you have any questions about these Terms, or if you want to contact Chargebee for any reason, please mail us at Chargebee Inc., 340 S. Lemon Avenue, Suite #1537, Walnut, California 91789, United States, or email us <a href="mailto:legal@chargebee.com" class="term-anchor">legal@chargebee.com</a> or compliance@chargebee.com. Your notice must specify your name and your account. Each notice shall be effective upon receipt.
                        </p>

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
                                <a href="#terms">Terms</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#privacy-policy">Privacy Policy?</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#registration">Registration</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#license">License</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#services-level">Services Level</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#fees">Fees</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#customer-data">Customer Data</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#confidentiality">Confidentiality</a>
                            </li>

                            <li class="cb-affix__item">
                                <a href="#pci-dss-compliance">PCI DSS Compliance</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#your-responsibilities">Your Responsibilities</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#your-conduct">Your Conduct</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#warranty-disclaimer">Warranty Disclaimer</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#liability-information">Liability Information</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#third-party-products-and-services">Third party products and Services</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#marketing">Marketing</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#termination">Termination</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#miscellaneous">Miscellaneous</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#contact-information">Contact Information</a>
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
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
