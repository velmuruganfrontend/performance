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
      :cb-url="'/privacy/05-oct-2017/'" 
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
                    <h1 style="color: #fff; font-weight: 400">Privacy Policy</h1>
                    <p style="color: rgba(255,255,255, 0.6);">This privacy policy was last modified on 05-Oct-2017.</p>
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
                            <strong>CHARGEBEE INC.</strong> is committed to protecting your privacy. This privacy policy applies to those who visit <a href="/" target="_blank">chargebee.com</a> as well as users of our billing and subscription platform, tools and services which is owned and operated by CHARGEBEE INC. (“We”, “Us” or “Our”). This privacy policy describes how CHARGEBEE collects, uses and shares the personal information you provide to us. It also describes the choices available to you regarding the use of, your access to, and how to update and correct your personal information. The use of information collected through our products and services shall be limited to the purpose of providing the products and services for which our customer has contracted with CHARGEBEE.
                        </p>
                        <div style="text-align: center; margin-top: 40px; ">
                            <a href="//privacy.truste.com/privacy-seal/validation?rid=489d875d-fcc6-429b-9833-12c18c1a5ff2" title="TRUSTe Privacy Certification" target="_blank">
                                <img style="border: none" src="//privacy-policy.truste.com/privacy-seal/seal?rid=489d875d-fcc6-429b-9833-12c18c1a5ff2" alt="TRUSTe Privacy Certification" />
                            </a>
                        </div>
                    </article>


                    <!-- ===============================================================
                     Section 2
                     ===============================================================-->
                    <article class="cb-factor" id="eu-us-privacy-shield">
                        <h2 class="cb-factor__title">
                            EU-U.S. Privacy Shield and Swiss-U.S. Privacy Shield
                        </h2>

                        <p class="cb-factor__desc">
                            CHARGEBEE participates in and has certified its compliance with the EU-U.S. Privacy Shield Framework and the Swiss-U.S. Privacy Shield Framework. We are committed to subjecting all personal data received from European Union (“EU”) member countries and Switzerland, in reliance on the Privacy Shield Framework, to the Privacy Shield Framework’s applicable Privacy Shield Principles. To learn more about the Privacy Shield Framework, visit the U.S. Department of Commerce’s <a href="https://www.privacyshield.gov/list" target="_blank" class="term-anchor">Privacy Shield List.</a>
                        </p>

                        <p class="cb-factor__desc">
                            CHARGEBEE is responsible for the processing of personal data it receives, under the Privacy Shield Framework, and subsequently transfers to a third party acting as an agent on its behalf. CHARGEBEE complies with the Privacy Shield Principles for all onward transfers of personal data from the EU and Switzerland, including the onward transfer liability provisions.
                        </p>

                        <p class="cb-factor__desc">
                            With respect to personal data received or transferred pursuant to the Privacy Shield Framework, CHARGEBEE is subject to the regulatory enforcement powers of the U.S. Federal Trade Commission. In certain situations, we may be required to disclose personal data in response to lawful requests by public authorities, including to meet national security or law enforcement requirements.
                        </p>

                        <p class="cb-factor__desc">
                            If you have an unresolved privacy or data use concern that we have not addressed satisfactorily, please contact our U.S.-based third party dispute resolution provider (free of charge) <a href="https://feedback-form.truste.com/watchdog/request" target="_blank" class="term-anchor">here.</a>
                        </p>

                        <p class="cb-factor__desc">
                            Under certain conditions, more fully described on the Privacy Shield <a href="https://www.privacyshield.gov/article?id=How-to-Submit-a-Complaint" target="_blank" class="term-anchor">website</a>, you may invoke binding arbitration when other dispute resolution procedures have been exhausted.
                        </p>
                    </article>


                    <!-- ===============================================================
                     Section 4
                     ===============================================================-->
                    <article class="cb-factor" id="what-information-do-we-collect">
                        <h2 class="cb-factor__title">
                            What information do we collect?
                        </h2>

                        <p class="cb-factor__desc">
                            We collect personal and other information from you when you register on our site, setup your subdomain and/or configure your details.
                        </p>

                        <p class="cb-factor__desc">
                            When ordering or registering on our website application, you may be asked to enter your: name, e-mail address, business name and/or credit card information.
                        </p>
                    </article>



                    <!-- ===============================================================
                     Section 5
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
                                <h4 class="cb-factor__subtitle">To improve customer service</h4>
                                <p class="cb-factor__desc">
                                    In the context of customer support your information helps us to more effectively respond to your customer service requests.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">To process transactions</h4>
                                <p class="cb-factor__desc">
                                    Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, other than for the express purpose of delivering the purchased product or service requested.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">To send periodic emails</h4>
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
                            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Transport Layer Security (TLS) technology and then stored into our database to be only accessed by those authorized with special access rights to our systems, and are required to keep the information confidential. If you have any questions about the security of your personal information, you can contact us at <a href="mailto:privacy@chargebee.com" class="term-anchor">privacy@chargebee.com</a>.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="do-we-use-cookies-or-other-tracking-technologies">
                        <h2 class="cb-factor__title">
                            Do we use cookies or other tracking technologies?
                        </h2>

                        <p class="cb-factor__desc">
                            Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information.
                        </p>

                        <p class="cb-factor__desc">
                            CHARGEBEE and its partners use cookies or similar technologies to analyze trends, administer the website, track users’ movements around the website, and to gather demographic information about our user base as a whole. You can control the use of cookies at the individual browser level, but if you choose to disable cookies, it may limit your use of certain features or functions on our website or service.
                        </p>

                        <p class="cb-factor__desc">
                            <strong class="c">Log files.</strong><br>
                            As is true of most websites, we gather certain information automatically. This information may include Internet protocol (IP) addresses, browser type, Internet service provider (ISP), referring/exit pages, the files viewed on our site (e.g., HTML pages, graphics, etc.), operating system, date/time stamp, and/or clickstream data to analyze trends in the aggregate and administer the site.
                        </p>

                        <p class="cb-factor__desc">
                            <strong class="cb-factor__bld">Behavioral Targeting.</strong><br>
                            We partner with a third party to either display advertising on our website or to manage our advertising on other sites. Our third party partner may use cookies or similar technologies in order to provide you advertising based upon your browsing activities and interests. If you wish to opt out of interest-based advertising click <a href="https://www.youronlinechoices.com/uk/" target="_blank" class="term-anchor">here</a> (or if located in the European Union click <a href="http://www.youronlinechoices.eu/" target="_blank" class="term-anchor">here</a>). Please note you will continue to receive generic ads.
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
                                    We may provide your personal information to companies that provide services to help us with our business activities such as offering customer service or processing your payment. These companies are authorized to use your personal information only as necessary to provide these services to us.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">Legal Disclaimer</h4>
                                <p class="cb-factor__desc">
                                    We may also disclose your personal information as required by law, such as to comply with a subpoena or similar legal process when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request. If CHARGEBEE is involved in a merger, acquisition, or sale of all or a portion of its assets, you will be notified via email and/or a prominent notice on our website, of any change in ownership, uses of your personal information, and choices you may have regarding your personal information. We may also disclose your personal information to any other third party with your prior consent.7
                                </p>
                            </li>
                        </ul>


                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="user-access-and-choice">
                        <h2 class="cb-factor__title">
                            User Access and Choice
                        </h2>

                        <p class="cb-factor__desc">
                            Upon request CHARGEBEE will provide you with information about whether we hold any of your personal information. You may access, correct or request deletion of your personal information by logging in to your account or by contacting us at <a href="mailto:privacy@chargebee.com" class="term-anchor">privacy@chargebee.com</a>. We will respond to your request within a reasonable timeframe.
                        </p>

                        <ul class="cb-factor__list">
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">Data Retention</h4>
                                <p class="cb-factor__desc">
                                    We will retain your information as needed to provide you services. Even if you close your account with CHARGEBEE, we will still retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. However, we will identify your account in our database as “deleted” or “closed”.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">Opt-out Preferences</h4>
                                <p class="cb-factor__desc">
                                    When you register for an account, we will use your name and email address to send periodic emails to you of both promotional and transactional in nature. Out of respect for your privacy, you may choose to stop receiving promotional emails by following the unsubscribe instructions included in these emails or you can contact us at <a href="mailto:privacy@chargebee.com" class="term-anchor">privacy@chargebee.com</a>.
                                </p>
                            </li>
                        </ul>

                        <p class="cb-factor__desc">
                            We will also send you service related email announcements on rare occasions when it is necessary to do so. For instance, if our service is temporarily suspended for maintenance, we might send you an email. You do not have an option to opt out of these emails, which are not promotional in nature.
                        </p>


                    </article>



                    <!-- ===============================================================
                     Section 6
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
                                    We display personal testimonials of satisfied customers on our website in addition to other endorsements. With your consent, we may post your testimonial along with your name. If you wish to update or delete your testimonial, you can contact us at <a href="mailto:privacy@chargebee.com" class="term-anchor">privacy@chargebee.com</a>.
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
                            Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of liability governing the use of our <a href="https://www.Chargebee.com" target="_blank" class="term-anchor">website.</a>
                        </p>

                        <p class="cb-factor__desc">
                            Information Related to Data Collected through our Products and Services
                        </p>

                        <ul class="cb-factor__list">
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">Information Related to Data Collected for our Customers:</h4>
                                <p class="cb-factor__desc">
                                    CHARGEBEE collects information under the direction of its customers, and has no direct relationship with the individuals whose personal data it processes. If you are a customer of one of our customers and would no longer like to be contacted by one of our customers that use our service, please contact the customer of ours that you interact with directly. We may transfer personal information to companies that help us provide our service. Transfers to subsequent third parties are covered by the service agreements with our customers.
                                </p>
                            </li>
                            <li class="cb-factor__item">
                                <h4 class="cb-factor__subtitle">Access and Retention of Data Controlled by our Customers:</h4>
                                <p class="cb-factor__desc">
                                    CHARGEBEE acknowledges that you have the right to access your personal information. CHARGEBEE has no direct relationship with the individuals whose personal data it processes. An individual who seeks access, or who seeks to correct, amend, or delete inaccurate data should direct his query to the CHARGEBEE's customer (the data controller). If requested to remove data we will respond within a reasonable timeframe.
                                </p>
                                <p class="cb-factor__desc">
                                    We will retain personal data we process on behalf of our customers for as long as needed to provide services to our customer. CHARGEBEE will retain this personal information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
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
                                <a href="#eu-us-privacy-shield">EU-U.S. Privacy Shield and Swiss-U.S. Privacy Shield</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#what-information-do-we-collect">What information do we collect?</a>
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