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
      :cb-title="'Terms of Service Generator - Tools - Chargebee'" 
      :cb-desc="'Chargebee lets you automate your recurring billing, manage subscriptions at scale and access metrics that matter.'" 
      :cb-url="'/tools/terms-generator/'" 
      :cb-image="''"
      :cb-style="'/static/website/version/styles/new.css'"
      :cb-head-script="''"
      :cb-body-script="'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.10/clipboard.min.js'"
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
        <!-- Start Main Body Content -->
        <section class="hero-sec" style="margin-bottom:40px;">
            <div class="container text-center">
                <article>
                    <h1 class="ff-brandon text-uppercase">TERMS OF SERVICE GENERATOR</h1>
                    <p class="ff-merriweather" style="font-size: 14px; color: rgba(0,0,0,0.54); line-height: 24px;font-style:italic;">Simple pricing. No Hidden costs. No transaction based fees.</p>
                    <div class="mar-t-sm mar-b-xs">
                        <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-sec btn-primary btn-primary-sec btn-md btn-suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">
                            <img src="/static/resources/brand/chargebee-icon-white.svg" alt="Chargebee Logo Mark" style="width: 30px; margin-top: -7px; margin-right: 10px;">
                            Sign up for free
                        </a>
                    </div>
                    <!-- <div class="hidden-xs hidden-sm"><a href="/how-chargebee-works/" class="btn-flat">Curious about how Chargebee works?</a></div> -->
                </article>
            </div>
        </section>

        <section class="container">
           <form>
                <div class="form-group">
                    <label for="#">Email address</label>
                    <input type="email" class="form-control" id="emailtos" placeholder="Email">
                 </div>
                 <div class="form-group">
                    <label for="#">Company</label>
                    <input type="text" class="form-control" id="companytos" placeholder="Company">
                 </div>
                 <div class="form-group">
                    <label for="#">Address</label>
                    <textarea id="addresstos" class="form-control" rows="3"></textarea>
                 </div>
            </form>

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary btn-lg test-modal" data-toggle="modal" data-target="#myModal">
              Launch demo modal
            </button>

            <!-- Modal -->
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                  </div>
                  <div class="modal-body">
                    <textarea id="tosoutput" class="form-control" rows="18"></textarea>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-clipboard-target="#tosoutput">Copy to Clipboard</button>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <!-- End Main Body Content -->
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
        $( ".test-modal" ).click(function() {

          var emailtos = $('#emailtos').val();
          console.log(emailtos);
          var companytos = $('#companytos').val();
          console.log(companytos);
          var addresstos = $('#addresstos').val();
          console.log(addresstos);


          var d = new Date();

            var month = d.getMonth()+1;
            var day = d.getDate();

            var datetos = d.getFullYear() + '/' +
                ((''+month).length<2 ? '0' : '') + month + '/' +
                ((''+day).length<2 ? '0' : '') + day;
            console.log("Date:", datetos);
            $('#datetos').text(datetos);

            $('#tosoutput').text("# Terms of Use\nLast Updated: "+datetos+"\n\nBy using our website of (“we” or “us”), you agree to these Terms of Use and our Privacy Policy. If you do not agree to these Terms of Use and our Privacy Policy, you may not use our website.  \n\nThrough our website, you may have access to a variety of resources made available by us. These may from time to time include (a) software and software as a service offerings (“Products”); (b) web pages, text, images, graphics, audio and video such as podcasts and webcasts, and documents such as white papers and product data sheets (“Materials”); and (c) forums, discussion groups, bulletin boards, blogs, wikis and other services in connection with which you can upload, download, share, post, publish, transmit or otherwise access or make available Content (as defined below) (“Website Information” and with the Products and Materials, the “Content”).\n\nWe may revise these Terms of Use at any time and in our sole discretion.  The most current version of these Terms of Use will govern your use of our website and its Content and will always be posted on our website.  If the revision, in our sole discretion, is material, we will send you a notification or post a notice on our website. By continuing to access or use our website and its Content after those revisions become effective, you agree to be bound by the revised Terms of Use.  These Terms of Use may only be waived by a written document signed by us.  If we make any changes, we will change the “Last Updated” date above.\n\n## Your Use\n\nSubject to these Terms of Use, we grant you a non-exclusive, non-transferable, non-sublicensable, revocable license to use our website solely for your personal, informational, noncommercial purposes.  Your use of the Products is subject to all license agreements that accompany or are included with the Products.  You may download, store, display on your computer, view, listen to, play, print and use Materials that we publish or broadcast on our website or make available for download through our website subject to the following: the Materials may be used solely for your personal, informational, noncommercial purposes; the Materials may not be modified in any way; and the Materials may not be redistributed. You may use Website Information subject to the following: the Website Information may be used solely for your personal, informational, noncommercial purposes; the Content provided on or through the Website Information may not be redistributed; and personal data about other users may not be stored or collected except where expressly authorized in writing by us.  The rights granted to you in these Terms of Use are subject to the following restrictions: (a) you shall not license, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit our website, whether in whole or in part, or any Content displayed on our website; (b) you shall not modify, make derivative works of, disassemble, reverse compile or reverse engineer any part of our website; (c) you shall not access our website in order to build a similar or competitive website, product, or service; and (d) except as expressly stated herein, no part of our website may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means.  Unless otherwise indicated, any future release, update, or other addition to functionality of our website shall be subject to these Terms of Use.  All copyright and other proprietary notices on our website (or on any Content displayed on our website) must be retained on all copies thereof.  You agree not to use our website or its Content for any purpose that is unlawful or prohibited by these Terms of Use.  \n\n## Your Content\n\nYou agree that you will only upload, share, post, publish, transmit, or otherwise make available (“share”) on or through our website your content that you have the right and authority to share and for which you have the right and authority to grant to us all of the licenses and rights set forth herein. By sharing your content, you grant us a worldwide, perpetual, royalty-free, fully paid up, irrevocable, nonexclusive, fully sublicensable license to use, reproduce, modify, adapt, translate, publish, publicly perform, publicly display, broadcast, transmit and distribute your content for any purpose and in any form, medium, or technology now known or later developed. You warrant that (a) you have the right and authority to grant this license; (b) our exercise of the rights granted pursuant to this license will not infringe or otherwise violate any third party rights; and (c) all so-called moral rights in your content have been waived to the full extent allowed by law.\n\nYou agree that you will neither use our website in a manner, nor share any content, that (a) is false or misleading; (b) is defamatory, derogatory, degrading or harassing of another or constitutes a personal attack; (c) invades another’s privacy or includes, copies or transmits another’s confidential, sensitive or personal information; (d) promotes bigotry, racism, hatred or harm against any group or individual; (e) is obscene or not in good taste; (f) violates or infringes or promotes the violation or infringement of another’s rights, including intellectual property rights; (g) you do not have the right and authority to share and grant the necessary rights and licenses for; (h) violates or promotes the violation of any applicable laws; (i) contains a solicitation of funds, goods or services, or promotes or advertises goods or services; or (j) contains any viruses, trojan horses, or other components designed to limit or harm the functionality of a computer. We may report you to the relevant authorities and may act under the fullest extent of applicable laws if you transmit or upload content intended or designed to cause harm.\n\nWe do not want to receive confidential information from you through or in connection with our website. Notwithstanding anything that you may state in connection with sharing your content, it shall not be considered confidential information and shall be received and treated by us on a non-confidential and unrestricted basis and we shall not take and shall not be required to take any steps to safeguard the confidentiality of any information that you share, other than as specified in our Privacy Policy.\n\nEach of our website users is solely responsible for any and all of its own content.  Because we do not control content of the users of our website, you agree that we are not responsible for any content of our website users, whether provided by you or by others.  We make no guarantees regarding the accuracy, currency, suitability or quality of any content of our website users.  Your interactions with other website users are solely between you and such users.  You agree that we will not be responsible for any loss or damage incurred as the result of any such interactions.  If there is a dispute between you and any of our website users, we are under no obligation to become involved in such dispute or to resolve such dispute.\n\n## Security, Passwords and Access\n\nYou agree not to access or use our website in any manner that could damage, disable, overburden or impair any of our accounts, computer systems or networks. You agree not to attempt to gain unauthorized access to any parts of our website or any of our accounts, computer systems or networks. You agree not to interfere or attempt to interfere with the proper working of our website or any of our accounts, computer systems or networks. You agree not to use any robot, spider, scraper or other automated means to access our website or any of our accounts, computer systems or networks without our express written permission.\n\nIf any of the Products require you to open an account, you must complete the registration process by providing us with current, complete and accurate information as required by the applicable registration form. You may also be required to choose a password and a user name. Access to and use of password protected or secure areas of our website are restricted to authorized users only. You agree not to share your password(s), account information, or access to our website with any other person. You are responsible for maintaining the confidentiality of password(s) and account information, and you are responsible for all activities that occur through the use of your password(s) or account(s) or as a result of your access to our website. You agree to notify us immediately of any use of your password(s) or account(s) that you did not authorize or that is not authorized by these Terms of Use.\n\n## Monitoring\n\nWe have no obligation to monitor our website or screen its content provided by you or others.  However, we reserve the right to review our website and its content and to monitor all activity on our website, and to remove or choose not to make available any content in our sole discretion without notice. \n\n## Modification of Use\n\nWe may, in our sole discretion, at any time modify, suspend or discontinue providing or limit access to, or use of, our website, any areas of our website or its Content. You agree that we shall not be liable to you or any third party for any modification, suspension, discontinuance or limitation of your access to, or use of, our website or any of its Content, including content that you may have shared.\n\n## Third Party Websites, Content, Products and Services\n\nOur website may contain links to other websites, and may provide access to content, products and services of third parties not affiliated with us. We are not responsible for third party content provided on or through our website or for any changes or updates to such third party websites, and you bear all risks associated with access to, and use of, such websites and third party content, products and services.\n\n## Ownership\n\nExcluding any of your content that you may provide, you acknowledge that all of the intellectual property and other proprietary rights in and to our website and the Content are owned by us and our licensors.  Neither these Terms of Use (nor your access to our website) transfers to you or any third party any rights, title or interest in or to such intellectual property or other proprietary rights, except for the limited right to use our website as expressly set forth above. There are no implied licenses granted under these Terms of Use.  All right, title and interest not expressly granted with respect to our website and its Content are reserved by us.\n\n## Disclaimer\n\nOUR WEBSITE AND ITS CONTENT ARE PROVIDED ON AN “AS IS” BASIS AND WE, ON BEHALF OF ITSELF, ITS AFFILIATES AND ITS LICENSORS, DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT TO OUR WEBSITE AND ITS CONTENT. WE MAKE NO WARRANTY THAT (A) OUR WEBSITE OR ITS CONTENT WILL MEET YOUR REQUIREMENTS; (B) OUR WEBSITE WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE BASIS; (C) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF OUR WEBSITE OR ANY OF ITS CONTENT WILL BE ACCURATE OR RELIABLE; OR (D) THE QUALITY OF ANY OF ITS CONTENT WILL MEET YOUR EXPECTATIONS.  ANY CONTENT ACCESSED, DOWNLOADED OR OTHERWISE OBTAINED ON OR THROUGH THE USE OF OUR WEBSITE IS USED AT YOUR OWN DISCRETION AND RISK. WE, ON BEHALF OF ITSELF, ITS AFFILIATES AND ITS LICENSORS, SHALL HAVE NO RESPONSIBILITY FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OR USE OF CONTENT.  You acknowledge and agree that we do not have any obligation to provide you with any support or maintenance in connection with our website.\n\n## Limitation of Liability\n\nTO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE OR OUR AFFILIATES OR LICENSORS BE LIABLE FOR DAMAGES OF ANY KIND, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, PUNITIVE, INCIDENTAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES OF ANY TYPE OR KIND (INCLUDING FOR DATA LOSS OR BUSINESS INTERRUPTION), ARISING OUT OF OR RELATING TO YOUR ACCESS TO, OR USE OF, OUR WEBSITE OR ANY OF ITS CONTENT, WHETHER BASED ON CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR ANY OTHER THEORY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS LIABILITY LIMITATION FORMS AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN THE PARTIES AND SHALL SURVIVE AND APPLY EVEN IF ANY REMEDY IS FOUND TO HAVE FAILED ITS PURPOSE.\n\n## Compliance with Laws\n\nYou agree to access, download, use and export our website and its Content in compliance with all applicable laws, including laws governing technology use and transfer (e.g., U.S. Export Administration Regulations), not to use or transfer any technology or data in violation of such laws, not to allow access or use by persons or entities restricted by the United States or any other government, and not to permit our website and its Content to be used in any way that violates any applicable law.\n\n## Copyright Policy\n\nWe respect the intellectual property rights of others and expect the users of our website to do the same. We will respond to notices of claimed copyright infringement that comply with applicable law and are properly provided to us. If you believe that your work has been copied in a way that constitutes copyright infringement, please provide us with the following information: (a) identification of the copyrighted work claimed to have been infringed, (b) identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, (c) information reasonably sufficient to permit us to locate the material, (d) your contact information, including your full name, mailing address, telephone number and, if available, email address, (e) a statement by you that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent or the law, (f) a statement that the information in the notice is accurate, (g) a statement under penalty of perjury that you are authorized to act on behalf of the copyright owner and (h) a physical or electronic signature of the copyright owner or a person authorized to act on their behalf.\n\nWe reserve the right to remove or disable access to content alleged to be infringing without prior notice, at our sole discretion, and without liability to you. In appropriate circumstances and at our sole discretion, we will also disable and/or terminate the accounts of users who repeatedly infringe or are repeatedly charged with infringing the copyrights or other intellectual property rights of others. Our designated copyright agent for notice of alleged copyright infringement appearing on our Products is:\n\n"+companytos+"\n\n"+addresstos+"\n\n"+emailtos+"  \n\n## Term and Termination\n\nThese Terms of Use will remain in full force and effect while you use our website.  We may suspend or terminate your rights to use our website (including your account) at any time for any reason at our sole discretion, including for any use of our website in violation of these Terms of Use.  Upon termination of your rights under these Terms of Use, your account and your right to access and use our website will terminate immediately.  You understand that any termination of your account may involve deletion of your content associated with your account from our databases.  We will not have any liability whatsoever to you for any termination of your rights under these Terms of Use, including for termination of your account or deletion of your content.  All terms and conditions of these Terms of Use that by their nature are intended to survive any termination of these Terms of Use shall so survive.\n\n## Governing Law; Dispute Resolution\n\nThese Terms of Use shall be governed by the laws of New York, United States, without regard to its conflict of law principles. In the event of a dispute regarding these Terms of Use, upon written demand of a party, the dispute shall be resolved exclusively by final and binding arbitration. Arbitration will be conducted exclusively in the Borough of Manhattan, New York City, New York, United States by the Judicial Arbitration and Mediation Service pursuant to the Comprehensive Arbitration Rules and Procedures of JAMS then in effect before a single neutral arbitrator with substantial experience in resolving commercial contract disputes. Each party shall bear its own expenses, and the two parties will share equally the fees of the arbitrator. Judgment upon the award so rendered may be entered in any court having jurisdiction, or application may be made to such court for judicial acceptance of any award and an order of enforcement, as the case may be. Notwithstanding anything in these Terms of Use to the contrary, we shall have the right to seek injunctive or other equitable relief in any court of competent jurisdiction, without first submitting such matter to arbitration. If any action is pursued to enforce these Terms of Use, the prevailing party shall be entitled to reasonable attorneys’ fees and costs, in addition to any other relief to which such party may be entitled. EACH PARTY HEREBY WAIVES ITS RIGHT TO TRIAL BY JURY IN ANY ACTION OR PROCEEDING REGARDING THESE TERMS OF USE.  ALL DISPUTES REGARDING THESE TERMS OF USE MUST BE ARBITRATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS BASIS, AND CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE ARBITRATED JOINTLY OR CONSOLIDATED WITH THOSE OF ANY OTHER CUSTOMER OR USER.\n\n## Privacy Policy\n\nPlease see our Privacy Policy.\n\nOur Policy Toward Children\n\nPersons who are not of the age of majority are not eligible to use our website, and we ask that no information in relation to such persons be submitted to us.\n\n## Entire Agreement\n\nThese Terms of Use constitute the entire agreement between you and us regarding the use of our website. Our failure to exercise or enforce any provision of these Terms of Use shall not operate as a waiver of such provision. If any provision of this Agreement is declared or found to be unenforceable, then such provision will be stricken or modified to the extent necessary to make it enforceable while preserving the parties’ original intent to the maximum extent possible. The remaining provisions of this Agreement will remain in full force and effect.  Your relationship with us is that of an independent contractor, and neither party is an agent or partner of the other.  These Terms of Use, and your rights and obligations herein, may not be assigned, subcontracted or otherwise transferred by you without our prior written consent, and any attempted assignment, subcontract or transfer in violation of the foregoing will be null and void.  We may freely assign, subcontract or transfer these Terms of Use.  The terms and conditions set forth in these Terms of Use shall be binding upon permitted assignees and successors.\n\n## Electronic Communications\n\nThe communications between you and us use electronic means, whether you use our website or send us emails, or whether we post notices on our website or communicate with you via email. For contractual purposes, you (a) consent to receive communications from us in an electronic form, and (b) agree that all terms and conditions, agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communications would satisfy if it were be in a hardcopy writing. The foregoing does not affect your non-waivable rights.\n\n## Contact\n\nPlease contact us at " +emailtos+ " or at " +addresstos+ " if you have any comments or questions about these Terms of Use.");
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
<style type="text/css"></style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->