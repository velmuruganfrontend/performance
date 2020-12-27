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
  <div class="body">
    <!-- ===================================================================
    Start: Meta Section
    ==================================================================== -->
    <app-meta
      :cb-title="'Privacy Policy - Chargebee Inc'"
      :cb-desc="'Your Privacy matters to us. We promise to respect your contact preferences and to guard your private information.'"
      :cb-url="'/privacy/25-may-2018/'"
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
                        <h1 style="color: #fff; font-weight: 400">Chargebee Privacy Notice</h1>
                        <div style="color: rgba(255,255,255, 0.6);margin-top: 7px">
                            Effective Date May 25th, 2018
                        </div>
                        <div style="color: rgba(255,255,255, 0.6); margin-top: 24px; font-size: 13px;">
                            For prior version, please <a href="/privacy/05-oct-2017/" style="color: rgba(255,255,255, 0.6); text-decoration: underline;">click here</a>
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
                    <!-- ===============================================================
                     Section 1
                     ===============================================================-->
                    <article class="cb-factor">
                        <p class="cb-factor__desc">
                            <strong>CHARGEBEE INC.</strong> is committed to protecting your privacy. This privacy policy applies to those who visit <a href="">chargebee.com</a> as well as customers, excluding end users of our billing and subscription platform, tools and services which is owned and operated by CHARGEBEE INC. (“We”, “Us” or “Our”). This privacy policy describes how Chargebee collects, uses and shares the personal information you provide to us. It also describes the choices available to you regarding the use of, your access to, and how to update and correct your personal information. The use of information collected through our products and services shall be limited to the purpose of providing the products and services for which our customer has contracted with Chargebee. If there are any questions regarding this privacy policy, the practices of this website or your dealings with this website, you may contact us at <a href="mailto:privacy@chargebee.com">privacy@chargebee.com</a> or the address mentioned below.
                        </p>

                        <p class="cb-factor__desc">
                            We also have a dedicated data protection officer who may be contacted in relation to any privacy or data protection issues through the above email address (<a href="mailto:privacy@chargebee.com">privacy@chargebee.com</a>).
                        </p>
                        <!-- <div style="text-align: center; margin-top: 40px; ">
                            <a href="//privacy.truste.com/privacy-seal/validation?rid=489d875d-fcc6-429b-9833-12c18c1a5ff2" title="TRUSTe Privacy Certification" target="_blank">
                                <img style="border: none" src="//privacy-policy.truste.com/privacy-seal/seal?rid=489d875d-fcc6-429b-9833-12c18c1a5ff2" alt="TRUSTe Privacy Certification" />
                            </a>
                        </div> -->
                    </article>


                    <!-- ===============================================================
                     Section 2
                     ===============================================================-->
                    <article class="cb-factor" id ="key-terms-of-privacy-policy" >
                        <h2 class="cb-factor__title">
                            Key Terms of Privacy Policy:
                        </h2>

                        <ul class="cb-factor__list">
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">
                                    Who is covered by this Policy?
                                </h4>
                                <p class="cb-factor__desc">
                                    Online visitors to chargebee.com as well as customers, excluding end users of the Chargebee billing/subscription platform and related tools.<br><br>
                                    <span style="color: rgba(0, 0, 0, 0.4);">Please note that use of this website / application is not allowed for individuals who are under the age of 16 years.</span>
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">
                                    What Information do we collect?
                                </h4>
                                <p class="cb-factor__desc">
                                    Depending on who you are and how we are serving you, we may collect information including full name, email, phone number, organisation address, billing address, card address, IP address, and other information collected by customer through custom fields, if any.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">
                                    How do we use this information?
                                </h4>
                                <p class="cb-factor__desc">
                                    To provide customer service, to complete your transactions, to provide you billing services, and to periodically contact you for transactional as well as marketing purposes. We may also use your information for our business accounting and tax purposes.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">
                                    Who else may access this information?
                                </h4>
                                <p class="cb-factor__desc">
                                    In addition to authorised Chargebee personnel who may access your information for the purposes discussed in this policy, some of our third party vendors may also have access to your information (listed at <a href="https://www.chargebee.com/privacy/sub-processors/">https://www.chargebee.com/privacy/sub-processors</a>). Vendors of the sub-processors may also have access to your information.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">
                                    Do we use Cookies?
                                </h4>
                                <p class="cb-factor__desc">
                                    Yes, we do. We also may collect log files for behavioural advertising (which you can opt out of). This includes information relating to website usage, analytics services (such as Google and Visual Website Optimiser), and IP information for performance monitoring.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">
                                    How can you exercise your rights as a data subject?
                                </h4>
                                <p class="cb-factor__desc">
                                    Most rights can be exercised by contacting us at <a href="mailto:privacy@chargebee.com">privacy@chargebee.com</a>. Other rights such as rectification of your data can be exercised through your account’s self-service portal. Data portability requests may be directed to our support staff at <a href="mailto:support@chargebee.com">support@chargebee.com</a>. If you an end user, please note that, in relation to billing services to our customers, the personal information we collect is that which is provided to us by customers we work with. In such cases, please contact the concerned customer (your service provider) for more details. If you are not sure about your service provider, you can get in touch with us at <a href="mailto:support@chargebee.com">support@chargebee.com</a>.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">
                                    How will we keep you informed of changes to this Policy?
                                </h4>
                                <p class="cb-factor__desc">
                                    We periodically review this Policy and will endeavour to notify you of any changes by email. However, please continue to check this page for updates.
                                </p>
                            </li>
                        </ul>
                    </article>


                    <!-- ===============================================================
                     Section 4
                     ===============================================================-->
                    <article class="cb-factor" id="eu-us-privacy-shield">
                        <h2 class="cb-factor__title">
                            Certification under the EU-U.S. Privacy Shield and Swiss-U.S. Privacy Shield
                        </h2>

                        <p class="cb-factor__desc">
                            EFFECTIVE DATE UNDER EU-US PRIVACY SHIELD: October 14, 2016
                        </p>

                        <p class="cb-factor__desc">
                            EFFECTIVE DATE UNDER SWISS-US PRIVACY SHIELD: January 10, 2018
                        </p>

                        <p class="cb-factor__desc">
                            Additional information regarding our participation is available at <a href="https://www.privacyshield.gov/participant?id=a2zt0000000TN6jAAG&amp;status=Active">link</a>.
                        </p>

                        <p class="cb-factor__desc">
                            Chargebee participates in and has certified its compliance with the EU-U.S. Privacy Shield Framework and the Swiss-U.S. Privacy Shield Framework. We are committed to subjecting all personal data received from European Union (“EU”) member countries and Switzerland, in reliance on the Privacy Shield Framework, to the Privacy Shield Framework’s applicable Privacy Shield Principles. To learn more about the Privacy Shield Framework, visit the U.S. Department of Commerce’s <a href="https://www.privacyshield.gov/list">Privacy Shield List</a>.
                        </p>

                        <p class="cb-factor__desc">
                            Chargebee is responsible for the processing of personal data it receives, under the Privacy Shield Framework, and subsequently transfers to a third party acting as an agent on its behalf. Chargebee complies with the Privacy Shield Principles for all onward transfers of personal data from the EU and Switzerland, including the onward transfer liability provisions.
                        </p>

                        <p class="cb-factor__desc">
                            With respect to personal data received or transferred pursuant to the Privacy Shield Framework, Chargebee is subject to the regulatory enforcement powers of the U.S. Federal Trade Commission. In certain situations, we may be required to disclose personal data in response to lawful requests by public authorities, including to meet national security or law enforcement requirements.
                        </p>

                        <p class="cb-factor__desc">
                            If you have an unresolved privacy or data use concern that we have not addressed satisfactorily, please contact our U.S.-based third party alternative dispute resolution provider (free of charge) <a href="https://feedback-form.truste.com/watchdog/request">here</a>.
                        </p>

                        <p class="cb-factor__desc">
                            Under certain conditions, more fully described on the Privacy Shield <a href="https://www.privacyshield.gov/article?id=How-to-Submit-a-Complaint">website</a>, you may invoke binding arbitration when other dispute resolution procedures have been exhausted. Other disclosures required to be made are as contained within the provisions below.
                        </p>
                    </article>



                    <!-- ===============================================================
                     Section 5
                     ===============================================================-->
                    <article class="cb-factor" id="what-information-do-we-collect">
                        <h2 class="cb-factor__title">
                            What information do we collect?
                        </h2>

                        <p class="cb-factor__desc">
                            We collect personal and non-personal information from you when you register on our site, setup your subdomain and/or configure your details. When ordering or registering on our website application, you may be asked to enter your name, e-mail address, business name and/or credit card information.
                        </p><br>


                        <p class="cb-factor__heading">
                            <strong>This refers to:</strong>
                        </p>

                        <ul class="cb-factor__list">
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">
                                    Account Information:
                                </h4>
                                <p class="cb-factor__desc">
                                    including First Name, Last Name, Email, Phone Number, Organization Address, Billing Address, and Internet Protocol (IP) addresses
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">
                                    Billing Information:
                                </h4>
                                <p class="cb-factor__desc">
                                    First Name, Last Name, Email, Phone Number, Billing Address, Shipping Address, and Locale.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">
                                    Credit Card Information:
                                </h4>
                                <p class="cb-factor__desc">
                                    First Name, Last Name, full PAN and Card Address.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">
                                    Custom Fields:
                                </h4>
                                <p class="cb-factor__desc">
                                    Any other personal information, if stored by customer in the course of business.
                                </p>
                            </li>
                        </ul>
                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="on-what-basis-do-we-collect-your-information">
                        <h2 class="cb-factor__title">
                            On what basis do we collect your information?
                        </h2>

                        <p class="cb-factor__desc">
                            In most cases, we collect your information on the basis of your desire to avail a particular service from us or to complete a transaction using our platform. Therefore, our processing in many cases occurs on the basis of your consent or the need to perform a contract that we may have with you (also on behalf of your end users). However, in addition to collection on the basis of consent, there are other bases on which we may collect or process your information. These are as follows:
                        </p>

                        <ul class="cb-factor__list">
                            <li class="cb-factor__item">
                                <p class="cb-factor__desc">
                                    We collect and also store your personal data as part of our legal obligation for business accounting and tax purposes such as in relation to record-keeping, compliance, disputes, and filings.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <p class="cb-factor__desc">
                                    We will occasionally send you product updates where we have assessed that it is beneficial to you as a customer and in our interests. Such information will be non- intrusive and is processed on the grounds of legitimate interests.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <p class="cb-factor__desc">
                                    On the basis of your opt-in, we will send you updates related to events, webinars, blogs and other marketing and promotional activities where we have assessed that it is beneficial to you as a customer and in our interests.
                                </p>
                            </li>
                        </ul>
                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="what-do-we-use-your-information-for">
                        <h2 class="cb-factor__title">
                            What do we use your information for?
                        </h2>

                        <p class="cb-factor__desc">
                            Any of the information we collect from you may be used in one of the following ways:
                        </p>

                        <ul class="cb-factor__list">
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">
                                    To improve customer service
                                </h4>
                                <p class="cb-factor__desc">
                                    In the context of customer support your information helps us to more effectively respond to your customer service requests.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">
                                    To process transactions
                                </h4>
                                <p class="cb-factor__desc">
                                    Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, other than for the express purpose of delivering the purchased product or service requested.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">
                                    To send periodic emails
                                </h4>
                                <p class="cb-factor__desc">
                                    The email address you provide in the application, may be used to send you information and updates pertaining to your usage, in addition to receiving occasional company news, updates, related product or service information, etc.
                                </p>
                            </li>
                        </ul>
                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="how-do-we-protect-your-information">
                        <h2 class="cb-factor__title">
                            How do we protect your information?
                        </h2>

                        <p class="cb-factor__desc">
                            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Transport Layer Security (TLS) technology and then stored into our database to be only accessed by those authorized with special access rights to our systems, and are required to keep the information confidential. If you have any questions about the security of your personal information, you can contact us at <a href="mailto:privacy@chargebee.com">privacy@chargebee.com</a>.
                        </p>

                        <p class="cb-factor__desc">
                            Personal data we collect is stored on infrastructure provided by AWS within the United States and our DR location is situated in EU, Frankfurt. AWS implements and maintains industry- leading security standards. You can read more about AWS and its security features on their <a href="https://aws.amazon.com/security/">webpage</a>. More about Chargebee’s organizational and technical measures at <a href="https://www.chargebee.com/security/">https://www.chargebee.com/security/</a>
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="do-we-use-cookies-or-other-tracking-technologies">
                        <h2 class="cb-factor__title">
                            Do we use cookies and other tracking technologies?
                        </h2>

                        <p class="cb-factor__desc">
                            <strong>What are Cookies?</strong> Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information.
                        </p>

                        <p class="cb-factor__desc">
                            <strong>What do we use Cookies for?</strong> Chargebee and its partners use cookies or similar technologies to analyze trends, administer the website, track users’ movements around the website, and to gather demographic information about our user base as a whole. You can control the use of cookies at the individual browser level, but if you choose to disable cookies, it may limit your use of certain features or functions on our website or service. Analytics services we use for these purposes are those provided by Google and Visual Website Optimizer.
                        </p>

                        <p class="cb-factor__desc">
                            <strong>Log files</strong>. As is true of most websites, we gather certain information automatically. This information may include Internet protocol (IP) addresses, browser type, Internet service provider (ISP), referring/exit pages, the files viewed on our site (e.g., HTML pages, graphics, etc.), operating system, date/time stamp, and/or clickstream data to analyze trends in the aggregate and administer the site. We may also use your IP address for application performance monitoring and for blocking anomalous usage.
                        </p>

                        <p class="cb-factor__desc">
                            <strong>Behavioral Targeting</strong>. We partner with a third party to either display advertising on our website or to manage our advertising on other sites. Our third party partner may use cookies or similar technologies in order to provide you advertising based upon your browsing activities and interests. If you wish to opt out of interest-based advertising click <a href="https://www.youronlinechoices.com/uk/">here</a> (or if located in the European Union click <a href="http://www.youronlinechoices.eu/">here</a>). Please note you will continue to receive generic ads.
                        </p>
                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="do-we-share-any-information-to-outside-parties">
                        <h2 class="cb-factor__title">
                            Do we share any information to outside parties?
                        </h2>

                        <p class="cb-factor__desc">
                            We do not sell, trade, or otherwise transfer to outside parties your personal information. We will share your personal information with third parties only in the ways that are described in this privacy policy. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
                        </p>

                        <ul class="cb-factor__list">
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">Service Providers</h4>
                                <p class="cb-factor__desc">
                                    We may provide your personal information to companies that provide services to help us with our business activities such as offering customer service or processing your payment. These companies are authorized to use your personal information only as necessary to provide these services to us. Third parties used by Chargebee are listed at <a href="https://www.chargebee.com/privacy/sub-processors/">www.chargebee.com/privacy/sub-processors</a>. In addition, your merchant may have also enlisted third party service providers to help serve you.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">Legal Obligations</h4>
                                <p class="cb-factor__desc">
                                    We may also disclose your personal information as required by law, such as to comply with a subpoena or similar legal process when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request. If Chargebee is involved in a merger, acquisition, or sale of all or a portion of its assets, you will be notified via email and/or a prominent notice on our website, of any change in ownership, uses of your personal information, and choices you may have regarding your personal information. We may also disclose your personal information to any other third party with your prior consent.7
                                </p>
                            </li>
                        </ul>
                    </article>


                    <!-- ===============================================================
                     Section 6a
                     ===============================================================-->
                    <article class="cb-factor" id="user-access-and-choice">
                        <h2 class="cb-factor__title">
                            User Access and Choice
                        </h2>

                        <p class="cb-factor__desc">
                            Upon request Chargebee will provide you with information about whether we hold any of your personal information. You may access, correct, request deletion of your personal information, or withdraw provided consent by logging in to your account or by contacting us at <a href="mailto:privacy@chargebee.com">privacy@chargebee.com</a>.
                        </p>

                        <p class="cb-factor__desc">
                            Some rights such as rectification/correction of your data can be exercised through your account’s self-service portal.
                        </p>

                        <p class="cb-factor__desc">
                            Please note that, in relation to billing services to customers, the personal information we collect is that which is provided to us by customers we work with. In such cases, please contact the concerned customer (your service provider) for more details. If you are not sure about your service provider, you can get in touch with us at <a href="mailto:support@chargebee.com">support@chargebee.com</a>.
                        </p>

                        <p class="cb-factor__desc">
                            You may also contact us to confirm if we are processing any information relating to you. We will respond to your request within a reasonable timeframe.
                        </p>

                        <ul class="cb-factor__list">
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">Data Retention</h4>
                                <p class="cb-factor__desc">
                                    We will retain your information as needed to provide you services. Once your relationship with Chargebee is terminated, we will delete any personal information we hold within a period of 120 days from date of termination. Even if you close your account with Chargebee, we will still retain and use your information as necessary to comply with our legal obligations, financial/audit requirements, to resolve disputes, and enforce our agreements. However, we will identify your account in our database as “deleted” or “closed”.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">Opt-out Preferences</h4>
                                <p class="cb-factor__desc">
                                    When you register for an account, we will use your name and email address which you have opted-in to send periodic emails to you of both promotional and transactional in nature. Out of respect for your privacy, you may choose to stop receiving promotional emails by following the unsubscribe instructions included in these emails or you can contact us at <a href="mailto:privacy@chargebee.com">privacy@chargebee.com</a>.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">Data Portability</h4>
                                <p class="cb-factor__desc">
                                    Upon request, we will endeavour to provide you with a complete copy of your personal data held or processed by us in a structured, commonly accepted, and machine-readable format. We have provided this as a part of service to download required data whenever needed by the customer themselves.
                                </p>
                            </li>
                        </ul>

                        <p class="cb-factor__desc">
                            We will also send you service related email announcements on rare occasions when it is necessary to do so. For instance, if our service is temporarily suspended for maintenance, we might send you an email. You do not have an option to opt out of these emails, which are not promotional in nature.
                        </p>
                    </article>


                    <!-- ===============================================================
                     Section 6b
                     ===============================================================-->
                    <article class="cb-factor" id="third-party-links">
                        <h2 class="cb-factor__title">
                            Third party links
                        </h2>

                        <p class="cb-factor__desc">
                            Occasionally, at our discretion, we may include links to our merchant partners (third party products or services) on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
                        </p>

                        <ul class="cb-factor__list">
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">Blog</h4>
                                <p class="cb-factor__desc">
                                    Our website offers publicly accessible blogs. The comments on our blog are managed by a third party application that may require you to register to post a comment. We do not have access or control of the information posted to the blog comments. You will need to contact or login into the third party application if you want your personal information that was posted to the comments section removed. To learn how the third party application uses your information, please review their privacy policy.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">Testimonials</h4>
                                <p class="cb-factor__desc">
                                    We display personal testimonials of satisfied customers on our website in addition to other endorsements. With your consent, we may post your testimonial along with your name. If you wish to update or delete your testimonial, you can contact us at <a href="mailto:privacy@chargebee.com">privacy@chargebee.com</a>.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">Single Sign-On</h4>
                                <p class="cb-factor__desc">
                                    You can log in to our website using sign-in services such as Google. These services will authenticate your identity, provide you the option to share certain personal information (such as your name and email address) with us, and to pre-populate our sign up form. Services like sign in with Google give you the option to post information about your activities on this website to your profile page to share with others within your network.
                                </p>
                            </li>
                        </ul>
                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="terms-and-conditions">
                        <h2 class="cb-factor__title">
                            Terms and Conditions
                        </h2>

                        <p class="cb-factor__desc">
                            Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of liability governing the use of our <a href="https://www.Chargebee.com">website</a>.
                        </p>

                        <p class="cb-factor__desc">
                            <em>Information Related to Data Collected through our Products and Services</em>
                        </p>

                        <ul class="cb-factor__list">
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">Information Related to Data Collected for our Customers:</h4>
                                <p class="cb-factor__desc">
                                    Chargebee collects information under the direction of its customers, and has no direct relationship with the individuals whose personal data it processes. If you are a customer of one of our customers and would no longer like to be contacted by one of our customers that use our service, please contact the customer of ours that you interact with directly. We may transfer personal information to companies that help us provide our service. Transfers to subsequent third parties are covered by the service agreements with our customers.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">Access and Retention of Data Controlled by our Customers:</h4>
                                <p class="cb-factor__desc">
                                    Chargebee acknowledges that you have the right to access your personal information. Chargebee has no direct relationship with the individuals whose personal data it processes. An individual who seeks access, or who seeks to correct, amend, or delete inaccurate data should direct his query to Chargebee&#39;s customer (the data controller). If requested to remove data we will respond within a reasonable timeframe.
                                </p>
                                <p class="cb-factor__desc">
                                    We will retain your information as needed to provide you services. Once your relationship with Chargebee is terminated, we will delete any personal information we hold within a period of 120 days from date of termination. Even if you close your account with Chargebee, we will still retain and use your information as necessary to comply with our legal obligations, financial/audit requirements, to resolve disputes, and enforce our agreements. However, we will identify your account in our database as “deleted” or “closed”.
                                </p>
                            </li>
                        </ul>
                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="your-consent">
                        <h2 class="cb-factor__title">
                            Your Consent
                        </h2>

                        <p class="cb-factor__desc">
                            By using our site, you consent to our online <a href="/privacy/" target="_blank" class="term-anchor">privacy policy.</a>
                        </p>
                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="changes-to-our-privacy-policy">
                        <h2 class="cb-factor__title">
                            Changes to our Privacy Policy
                        </h2>

                        <p class="cb-factor__desc">
                            We may update this privacy policy to reflect changes to our information practices. If we make any material changes we will notify you by email (sent to the e-mail address specified in your account) or by means of a notice on this website prior to the change becoming effective. We encourage you to periodically review this page for the latest information on our privacy practices.
                        </p>
                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="contacting-us">
                        <h2 class="cb-factor__title">
                            Contacting Us
                        </h2>

                        <p class="cb-factor__desc">
                            If there are any questions regarding this privacy policy, the practices of this website or your dealings with this website, you may contact us using the information below:
                        </p>

                        <address>
                          <strong>Chargebee Inc.</strong><br>
                          340 S Lemon Avenue, #1537<br>
                          Walnut, California 91789, USA<br>
                          <a href="mailto:privacy@chargebee.com" class="term-anchor">privacy@chargebee.com</a>
                        </address>


                        <p class="cb-factor__desc">
                            We also have a privacy officer who may be contacted in relation to any privacy or data protection issues through the above email address (<a href="mailto:privacy@chargebee.com">privacy@chargebee.com</a>).
                        </p>
                    </article>


                </div>



                <!-- ===============================================================
                Sidebar Navigation
                ===============================================================-->
                <div class="col-sm-4 col-sm-offset-1 col-md-3 col-md-offset-2 hidden-xs" style="padding-top: 100px;">
                    <div id="affix-nav" class="cb-affix">
                        <ul class="nav cb-affix__list">
                            <li class="cb-affix__title">Privacy Policy</li>
                            <li class="cb-affix__item">
                                <a href="#key-terms-of-privacy-policy">Key Terms of Privacy Policy</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#eu-us-privacy-shield">EU-U.S. Privacy Shield and Swiss-U.S. Privacy Shield</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#what-information-do-we-collect">What information do we collect?</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#on-what-basis-do-we-collect-your-information">On what basis do we collect your information?</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#what-do-we-use-your-information-for">What do we use your information for?</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#how-do-we-protect-your-information">How do we protect your information?</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#do-we-use-cookies-or-other-tracking-technologies">Do we use cookies or other tracking technologies?</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#do-we-share-any-information-to-outside-parties">Do we share any information to outside parties?</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#user-access-and-choice">User Access and Choice</a>
                            </li>

                            <li class="cb-affix__item">
                                <a href="#third-party-links">Third party links</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#terms-and-conditions">Terms and Conditions</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#your-consent">Your Consent</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#changes-to-our-privacy-policy">Changes to our Privacy Policy</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#contacting-us">Contacting Us</a>
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
        margin-bottom: 9px;
        margin-top: 9px;
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