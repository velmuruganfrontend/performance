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
      :cb-title="'Data Processing Addendum - Chargebee Inc'"
      :cb-desc="''"
      :cb-url="'/privacy/dpa/'"
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
                        <h1 style="color: #fff; font-weight: 400">Chargebee Data Processing Addendum</h1>
                        <div style="color: rgba(255,255,255, 0.6);margin-top: 7px">
                            Effective Date: Jan 20th, 2020
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
                          Please read the Data Processing Addendum ("<strong>DPA</strong>") carefully as they form a contract between You and CHARGEBEE INC. ("<strong>Us</strong>"). As referenced in Our Terms of Service at <a href="/company/terms/" target="_blank">https://www.chargebee.com/company/terms/</a> or in any services agreement between You and Us ("<strong>Terms</strong>"), this DPA will apply where the Group Companies Process Personal Data on Your behalf. The capitalized terms used in this DPA but not defined herein shall have the same meaning as defined in the Terms. In the event of a conflict between this DPA and the Terms, this DPA shall prevail. In the event of any conflict between the terms of this DPA and the EU Standard Contractual Clauses, the terms of the EU Standard Contractual Clauses shall prevail. This DPA shall continue to be in full force and effect for the duration of Your Subscription(s) and shall cease automatically thereafter. For queries, please contact Us at <a href="mailto:privacy@chargebee.com" target="_top">privacy@chargebee.com</a>
                        </p>
                    </article>


                    <!-- ===============================================================
                     Section 2
                     ===============================================================-->
                    <article class="cb-factor" id ="definitions" >
                        <h2 class="cb-factor__title">
                            <strong class="num-aside">1.</strong>Definitions
                        </h2>

                        <p class="cb-factor__desc">
                            “<strong>Applicable Data Protection Law</strong>” means all laws and regulations applicable to the Processing of Personal Data under this DPA, including laws and regulations of the United States, European Union, the European Economic Area and their member states, Switzerland and the United Kingdom, including, the California Consumer Privacy Act ("<strong>CCPA</strong>") the GDPR and any applicable national laws made under it where You are established in the European Economic Area; and the Swiss Federal Act of 19 June 1992 on Data Protection (as may be amended or superseded) where You are established in Switzerland.
                        </p>
                        <p class="cb-factor__desc">
                            <strong>"Controller", "Processor", "Data Subject", “Personal Data Breach” "Processing"</strong> or similar terms shall have the meanings given under Applicable Data Protection Law.
                        </p>
                        <p class="cb-factor__desc">
                            “<strong>GDPR</strong>” means the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).
                        </p>

                        <p class="cb-factor__desc">
                            “<strong>Personal Data</strong>” shall have the meaning given under Applicable Data Protection Law and is limited to that Personal Data We Process as part of Service Data.
                        </p>
                        <p class="cb-factor__desc">
                            “<strong>EU Standard Contractual Clauses</strong>” mean the standard contractual clauses (for Processors) in the form set out in the Annex of <a href="https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX%3A32010D0087">European Commission Decision 2010/87/EU</a>, as amended or updated from time to time.
                        </p>
                        <p class="cb-factor__desc">
                            “<strong>Sub-processor</strong>” means any Processor engaged by Us.
                        </p>
                        <p class="cb-factor__desc">
                            “<strong>Technical and Organisational security measures"/“TOMS</strong>” means the appropriate technical and organisational measures as set forth in Schedule B (TOMS) of this DPA, aimed at protecting Personal Data against accidental or unlawful destruction or accidental loss, alteration, unauthorised disclosure or access, in particular where the Processing involves the transmission of Service Data over a network, and against all other unlawful forms of processing.
                        </p>
                    </article>


                    <!-- ===============================================================
                     Section 4
                     ===============================================================-->
                    <article class="cb-factor" id="processing-of-personal-data">
                        <h2 class="cb-factor__title">
                            <strong class="num-aside">2.</strong>Processing Of Personal Data
                        </h2>

                        <p class="cb-factor__desc">
                            <strong class="num-aside">2.1</strong> The Parties acknowledge and agree that with regard to the Processing of Personal Data, You may be either the Controller or the Processor of the Personal Data. Where You are the Controller, We are the Processor and where You are a Processor, We acknowledge that We will be Your sub-processor. We will further engage Sub-processors pursuant to the requirements set forth in Section 5 (Sub-processors) below.
                        </p>

                        <p class="cb-factor__desc">
                            <strong class="num-aside">2.2</strong> <strong>Processing of Personal Data by You.</strong> You shall, in Your use of the Services, Process Personal Data in accordance with the requirements of Applicable Data Protection Law. Further, Your instructions for the Processing of Personal Data shall comply with Applicable Data Protection Law. You shall have sole responsibility for the accuracy, quality, and legality of Personal Data and the means by which You acquired Personal Data.
                        </p>

                        <p class="cb-factor__desc">
                            <strong class="num-aside">2.3</strong> <strong>Processing of Personal Data by Us.</strong> We shall Process the Personal Data solely as necessary to perform Our obligations and strictly in accordance with Your documented instructions and in accordance with Applicable Data Protection Law for the following purposes: (i) Processing in accordance with the Terms and this DPA; (ii) Processing initiated by Users and/or End-Customers in their use of the Services; and (iii) Processing to comply with Your other documented reasonable instructions (including via email) where such instructions are consistent with the Terms. We shall immediately inform You in writing if, in Our opinion, an instruction infringes Applicable Data Protection Law in the European Union (“<strong>EU</strong>”). We shall not be liable for any losses, fines, costs, penalties, damages, etc., arising from or in connection with any processing in accordance with Your instructions following Your receipt of any information provided by Us in accordance with the foregoing sentence. We shall provide reasonable assistance to You to assist You in complying with Articles 32 to 36 of the GDPR. We shall make available to You all information necessary to demonstrate compliance with this DPA and upon prior written notice, allow for and contribute to audits, including to inspections, by You or another auditor mandated by You for this purpose.
                        </p>

                        <p class="cb-factor__desc">
                            <strong class="num-aside">2.4</strong> <strong>Details of the Processing.</strong> The duration of the Processing, the nature and purpose of the Processing, the types of Personal Data and categories of Data Subjects Processed under this DPA are further specified in Schedule A (<em>Details of the Processing</em>) of this DPA
                        </p>
                    </article>



                    <!-- ===============================================================
                     Section 5
                     ===============================================================-->
                    <article class="cb-factor" id="rights-of-data-subjects">
                        <h2 class="cb-factor__title">
                            <strong class="num-aside">3.</strong>Rights Of Data Subjects
                        </h2>

                        <p class="cb-factor__desc">
                            <strong class="num-aside">3.1</strong> We shall, to the extent legally permitted, promptly notify You if We receive a request from a Data Subject to access, correct or delete their Personal Data or if a Data Subject objects to the Processing thereof (“<strong>Data Subject Request</strong>”). We shall not respond to a Data Subject Request without Your prior written consent except to confirm that such request relates to You to which You hereby agree. To the extent You, in Your use of the Services, do not have the ability to address a Data Subject Request, We shall upon Your request provide commercially reasonable assistance to facilitate such Data Subject Request to the extent We are legally permitted to do so and provided that such Data Subject Request is exercised in accordance with Applicable Data Protection Law. To the extent legally permitted, You shall be responsible for any reasonable costs arising from Our provision of such assistance.
                        </p><br>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="our-personnel">
                        <h2 class="cb-factor__title">
                            <strong class="num-aside">4.</strong>Our Personnel
                        </h2>

                        <p class="cb-factor__desc">
                            <strong class="num-aside">4.1</strong>We shall ensure that Our personnel engaged in the Processing of Personal Data are informed of the confidential nature of the Personal Data, have received appropriate training on their responsibilities and have executed written confidentiality agreements addressing relevant obligations regarding confidentiality, data protection and data security. We shall ensure that such confidentiality obligations survive the termination of the personnel engagement.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="sub-processors">
                        <h2 class="cb-factor__title">
                            <strong class="num-aside">5.</strong>Sub-processors
                        </h2>

                        <p class="cb-factor__desc">
                            <strong class="num-aside">5.1</strong>You hereby grant a general authorization: (a) to Us to appoint other members of Our Group Companies as Sub-processors, and (b) to Us and other members of Our Group Companies to appoint any other third party as Sub-processors to support the performance of the Services.
                        </p>
                        <p class="cb-factor__desc">
                            <strong class="num-aside">5.2</strong>We will maintain a list of Sub-processors on the <a href="/privacy/sub-processors/">https://www.chargebee.com/privacy/sub-processors/</a> website and will add the names of Sub-processors to the list. If You have a reasonable objection to any new or replacement Sub-processor, You shall notify Us of such objections in writing within ten (10) days of change in the list and the Parties will seek to resolve the matter in good faith. If You do not provide a timely objection to any new or replacement Sub-processor in accordance with this Section 5.2, You will be deemed to have consented to the Sub-processor and waived Your right to object. Where We use a Sub-processor, We shall ensure that We have in place a written contract with that Sub-Processor applying essentially the same data protection terms as are set out in this DPA.
                        </p>
                        <p class="cb-factor__desc">
                            <strong class="num-aside">5.3</strong>Except as otherwise set forth in the Terms, We shall be liable for the acts and omissions of the Sub-processors to the same extent We would be liable if We were performing the services of each Sub-processor directly under the terms of this DPA.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="security-reports-audits">
                        <h2 class="cb-factor__title">
                            <strong class="num-aside">6.</strong>Security Reports & Audits
                        </h2>

                        <p class="cb-factor__desc">
                            <strong class="num-aside">6.1</strong><strong>Controls for the protection of Service Data.</strong> We shall maintain appropriate TOMS for protection of the Service Data from a Personal Data Breach. We regularly monitor compliance with these measures.
                        </p>

                        <p class="cb-factor__desc">
                           <strong class="num-aside">6.2</strong><strong>Third-Party Certifications and Audits.</strong> We have obtained the third-party certifications and audits. Upon Your written request at reasonable intervals, and subject to the confidentiality obligations set forth in the Terms, We may share a copy of Our most recent third-party audit reports or certifications, as applicable.
                        </p>

                        <p class="cb-factor__desc">
                            <strong class="num-aside">6.3</strong><strong>Determination of Security Requirements:</strong> You acknowledge that the Services include certain features and functionalities that You may elect to use that impact the security of the data processed by Your use of the Services, such as, but not limited to, encryption of custom fields and availability of multi-factor authentication on Your Account. You are responsible for properly configuring the Services and using available features and functionalities to maintain appropriate security in light of the nature of the data processed by Your use of the Services. You can subscribe to the new feature notifications at <a href="/help/updates/">https://www.chargebee.com/help/updates/</a>.
                        </p>

                        <p class="cb-factor__desc">
                           <strong class="num-aside">6.4</strong><strong>Personal Data Breach Notification:</strong> We shall, to the extent permitted by law, notify You of any Personal Data Breach no later than seventy-two (72) hours from the time We become aware of the Personal Data Breach. To the extent such Personal Data Breach is caused by a violation of the requirements of this DPA by Us, We shall make reasonable efforts to identify and remediate the cause of such Personal Data Breach. We shall provide You reasonable assistance in the event You are required under Applicable Data Protection Law to notify a supervisory authority or any Data Subjects of the Personal Data Breach.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="deletion-of-personal-data">
                        <h2 class="cb-factor__title">
                            <strong class="num-aside">7.</strong>Deletion Of Personal Data
                        </h2>

                        <p class="cb-factor__desc">
                            <strong class="num-aside">7.1</strong>We shall delete Personal Data forming part of the Service Data after one hundred and twenty (120) days from the date of termination of the Account. You understand that Personal Data, once deleted, cannot be recovered.
                        </p>

                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="international-data-transfer-mechanism">
                        <h2 class="cb-factor__title">
                            <strong class="num-aside">8.</strong>International Data Transfer Mechanism
                        </h2>

                        <p class="cb-factor__desc">
                            <strong class="num-aside">8.1</strong> To the extent that We Process any Personal Data originating from the European Economic Area (“<strong>EEA</strong>”) in a country that has not been designated by the European Commission as providing an adequate level of protection for Personal Data, the Personal Data shall be deemed to have adequate protection (within the meaning of European Union Data Protection Legislation) in the following order of precedence (1) by virtue of Our self-certification to the Privacy Shield Framework, in which case, We shall agree to apply the Privacy Shield Principles when transferring any EEA or UK or Swiss Personal Data to the U.S. under this DPA, and where (1) does not apply, (2) the EU Standard Contractual Clauses, which are incorporated by reference and form an integral part of this DPA. Purely for the purposes of descriptions in the EU Standard Contractual Clauses and only as between You and Us, You agree that You are the “data exporter” and We are the “data importer” under the EU Standard Contractual Clauses (notwithstanding that You may be located outside the EEA and may itself be a Processor acting on behalf of third party Controllers). Further, Schedules A and B of this DPA will take the place of Appendixes 1 and 2 of the EU Standard Contractual Clauses respectively.
                        </p>

                    </article>


                    <!-- ===============================================================
                     Section 6a
                     ===============================================================-->
                    <article class="cb-factor" id="ccpa-obligations">
                        <h2 class="cb-factor__title">
                            <strong class="num-aside">9.</strong>CCPA Obligations
                        </h2>

                        <p class="cb-factor__desc">
                            <strong class="num-aside">9.1</strong>You acknowledge and agree that You are the Business and We are the Service Provider with respect to Personal Information of Consumers (as those terms are understood under the CCPA) disclosed by You to Us forming part of Service Data.
                        </p>

                        <p class="cb-factor__desc">
                            <strong class="num-aside">9.2</strong>We will not sell, retain, use, or disclose Personal Information of Consumers that We process on Your behalf when providing the Services under the Terms for any purpose other than for the specific purpose of providing the Services in accordance with the Terms and as part of the direct relationship between You and Us.
                        </p>

                        <p class="cb-factor__desc">
                            <strong class="num-aside">9.3</strong>We certify that We understand the restrictions in Section 9.2 above and will comply with such restrictions.
                        </p>

                        <p class="cb-factor__desc">
                            <strong class="num-aside">9.4</strong>You acknowledge and agree that You shall be responsible for providing the required notice to Consumers with respect to sharing their Personal Information with Us.
                        </p>

                        <p class="cb-factor__desc">
                            <strong class="num-aside">9.5</strong>We shall provide reasonable cooperation to assist You to respond to any requests from individuals or applicable data protection authorities relating to the processing of Personal Information under the Terms and/or this DPA when You are required to respond to such requests under Applicable Data Protection Laws. In the event that any such request is made directly to Us, We shall not respond to such communication directly without Your prior authorization, unless legally compelled to do so.
                        </p>

                    </article><br><br><br>


                    <!-- ===============================================================
                     Section 6b
                     ===============================================================-->
                    <article class="cb-factor" id="third-party-links">
                        <h2 class="cb-factor__title">
                            Schedule A – Details of the Processing
                        </h2>

                        <p class="cb-factor__desc">
                            <strong>Nature and purpose of Processing:</strong> We will Process Personal Data, as necessary to perform the Services pursuant to the Terms to the extent determined and controlled by You in Your sole discretion, which shall include but not be limited to identification data, professional life data, personal life data, or localization data (including IP addresses). Further, the Group Companies and service providers they use shall Process and enrich the Personal Data in the systems to (i) improve, enhance, support and operate the Services and its availability; (ii) develop new products and services; (iii) compile statistical reports and insights into usage patterns.
                        </p>
                        <p class="cb-factor__desc">
                            <strong>Duration of Processing:</strong> We will Process the Personal Data for the duration of the Terms, unless otherwise agreed upon in writing.
                        </p>
                        <p class="cb-factor__desc">
                            <strong>Categories of Data Subjects:</strong> You may submit Personal Data (containing no Sensitive Data) to the Services, the extent of which is determined and controlled by You in Your sole discretion, relating to Users and End-Customers (who are natural persons).
                        </p>
                    </article>



                    <!-- ===============================================================
                     Section 6
                     ===============================================================-->
                    <article class="cb-factor" id="terms-and-conditions">
                        <h2 class="cb-factor__title">
                            Schedule B – Technical and Organisational Security Measures
                        </h2>

                        <p class="cb-factor__desc">
                            We have implemented and shall maintain a security program in accordance with industry standards. We have implemented and will maintain appropriate TOMS to protect Service Data from a Personal Data Breach. Measures to protect Service Data from a Personal Data Breach are described at <a href="/security/">https://www.chargebee.com/security/</a>.
                        </p>
                    </article>

                </div>



                <!-- ===============================================================
                Sidebar Navigation
                ===============================================================-->
                <div class="col-sm-4 col-sm-offset-1 col-md-3 col-md-offset-2 hidden-xs" style="padding-top: 100px;">
                    <div id="affix-nav" class="cb-affix">
                        <ul class="nav cb-affix__list">
                            <li class="cb-affix__title">DPA</li>
                            <li class="cb-affix__item">
                                <a href="#definitions">Definitions</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#processing-of-personal-data">Processing Of Personal Data</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#rights-of-data-subjects">Rights Of Data Subjects</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#our-personnel">Our Personnel</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#sub-processors">Sub-processors</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#security-reports-audits">Security Reports & Audits</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#deletion-of-personal-data">Deletion Of Personal Data</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#international-data-transfer-mechanism">International Data Transfer Mechanism</a>
                            </li>
                            <li class="cb-affix__item">
                                <a href="#ccpa-obligations">CCPA Obligations</a>
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
        .affix{
            position: static!important;
        }
    }
    @media (min-width: 992px){
        .num-aside{
            display: inline-block;
            margin-left: -29px;
            margin-right: 6px;
            min-width: 20px;
        }
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
