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
// app-header       =   App header will add header to the page.
//                  Need a white header in page use :hasInvert="true" attribute
//                  Need a basic header(without menu's) in page use :hasBasicHeader="true" attribute
// app-footer       =   App footer will add footer to the page.
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
        :cb-title="'Chief Revenue Officer - work@chargebee'"
        :cb-desc="'We are hiring an Chief Revenue Officer. Explore what it takes to be part of one of India\'s leading tech startup\'s sales cycles. Apply Now!'"
        :cb-url="'/careers/cro/'"
        :cb-image="'/static/resources/og/careers/og.png'"
        :cb-style="'/static/website/version/styles/main.css'"
        :cb-head-script="''"
        :cb-body-script="''"
        :cb-has-noindex="true"
        :disable-bootstrap-css="false"
        :disable-header-footer-css="false" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Header Section
        ==================================================================== -->
        <app-header :hasInvert="false" :hasBasicHeader="true" :hasBackToCareers="true" />
        <!-- ===================================================================
        End: Header Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Body Section
        ==================================================================== -->
        <div class="cb-body">
            <!-- =====================================================================================
            Body Part Start
            ====================================================================================== -->
            <main class="l-main">
                <!-- =================================================================================
                Banner Part Start
                ================================================================================== -->
                <section class="l-main__banner">
                    <div class="container">
                        <div class="row">
                            <!-- ===================================================================
                            Title Part Start
                            ==================================================================== -->
                            <div class="col-sm-7">
                                <div class="cb-hero">
                                    <h1 class="cb-hero__title">Chief Revenue Officer</h1>
                                    <p class="cb-hero__desc">USA / Full-Time</p>
                                </div>
                            </div>
                            <!-- ===================================================================
                            Title Part end
                            ==================================================================== -->
                            <!-- ===================================================================
                            Refer Part Start
                            ==================================================================== -->
                            <!-- <div class="col-sm-5">
                                <div class="cb-refer">
                                    <div class="cb-refer__title">
                                        Know someone that might be interested?
                                    </div>
                                    <div class="cb-refer__actions">
                                        <div class="cb-refer__action">
                                            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.chargebee.com/careers/director-presales/" class="cb-refer__btn cb-refer__btn--fb">Share</a>
                                        </div>
                                        <div class="cb-refer__action">
                                            <a href="https://twitter.com/home?status=https%3A//www.chargebee.com/careers/director-presales/%20%40chargebee" class="cb-refer__btn cb-refer__btn--twt">Tweet</a>
                                        </div>
                                        <div class="cb-refer__action">
                                            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.chargebee.com/careers/director-presales/" class="cb-refer__btn cb-refer__btn--lnk">Share</a>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <!-- ===================================================================
                            Refer Part end
                            ==================================================================== -->
                        </div>
                    </div>
                </section>
                <!-- =================================================================================
                Banner Part end
                ================================================================================== -->
                <!-- =================================================================================
                Content Part Start
                ================================================================================== -->
                <section class="l-main__content">
                    <!-- ==================================================================
                    Article Part start
                    =================================================================== -->
                    <div class="l-main__row">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
                                    <div class="cb-article cb-article--center">
                                        <!-- <h3 class="cb-article__title">We need a lead to manage our <br class="visible-lg">tech writing team.</h3> -->
                                        <p class="cb-article__disp" style="margin-top: 30px;">
                                            Chief Revenue Officer for subscription management company in Encinitas, CA. Must have MBA and relevant experience or equivalent. Send CV & references to Chargebee Inc, Attn: Craig, 374 N Coast Hwy 101, Encinitas, CA 92024 or email to <a href="mailto:craig@chargebee.com">craig@chargebee.com</a>
                                        </p>
                                        <!-- <p class="cb-article__disp" style="margin-top: 30px;">
                                            You will work very closely with the Sales, Implementation and Product teams in an effort to improve the Product-Market fit. Your team will be located globally and this role will involve frequent travel to the EU and US offices of Chargebee.
                                        </p> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ==================================================================
                    Article Part end
                    =================================================================== -->
                    <!-- <div class="l-main__row">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1">
                                   <div class="cb-list">
                                        <h4 class="cb-list__title">
                                            What you should have
                                        </h4>
                                        <ul class="cb-list__items">
                                            <li class="cb-list__item">
                                                10+ years in diversified leadership roles, driving and implementing revenue growth
                                            </li>
                                            <li class="cb-list__item">
                                                Proven track record of growing revenue through new product development, marketing, branding, and partnerships
                                            </li>
                                            <li class="cb-list__item">
                                                Proven experience developing and executing business strategy
                                            </li>
                                            <li class="cb-list__item">
                                                Significant general management and P&L experience
                                            </li>
                                            <li class="cb-list__item">
                                                Ability to craft and execute a business strategy
                                            </li>
                                            <li class="cb-list__item">
                                                History of decision-making based on business metrics
                                            </li>
                                            <li class="cb-list__item">
                                                Inspirational leadership style and hands-on approach
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <!-- ==================================================================
                    Grid Part start
                    =================================================================== -->
                    <!-- ==================================================================
                    Dont delete the cb-affix-footer
                    =================================================================== -->
                    <!-- <div class="l-main__row">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-8 col-sm-offset-1">
                                    <div class="cb-list">
                                        <h3 class="cb-list__title">
                                            What you will do
                                        </h3>

                                        <ul class="cb-list__items">
                                            <li class="cb-list__item">
                                                Minimum 12 years of hands-on Presales/ Sales Engineering experience with at least 5 of those years in the  SaaS industry.
                                            </li>
                                            <li class="cb-list__item">
                                                Experience leading and managing large, global teams
                                            </li>
                                            <li class="cb-list__item">
                                                Relevant account and customer management experience.
                                            </li>
                                            <li class="cb-list__item">
                                                Strong analytical, creative thinking and problem-solving skills.
                                            </li>
                                            <li class="cb-list__item">
                                                Excellent communication, project management, and multi-tasking skills.
                                            </li>
                                            <li class="cb-list__item">
                                                Detail-oriented and well organized.
                                            </li>
                                            <li class="cb-list__item">
                                                Ability to work in a fast-paced, deadline-driven start-up environment.
                                            </li>
                                            <li class="cb-list__item">
                                                Passionate about customer service and helping others.
                                            </li>
                                            <li class="cb-list__item">
                                                Experience with payment systems and/or working at a Fintech company – an advantage.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <!-- ==========================================================================
                    Grid Part end
                    =========================================================================== -->
                    <!-- ==================================================================
                    List Part start
                    =================================================================== -->
                    <!-- <div class="l-main__row">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-8 col-sm-offset-2 col-md-7 col-md-offset-3">
                                    <div class="cb-lists">
                                        <div class="cb-list">
                                            <h4 class="cb-list__title">
                                                Chargebee might be the opportunity you’re looking for
                                            </h4>
                                            <ul class="cb-list__items">
                                                <li class="cb-list__item">If you’re interested in how subscription businesses can get more efficient.</li>
                                                <li class="cb-list__item">If you’re hungry to give and receive feedback, fully understanding that challenging perspectives are the only way that you can grow.</li>
                                                <li class="cb-list__item">If you can bring empathy to problem solving.</li>
                                            </ul>
                                        </div>

                                        <div class="cb-list__heading">
                                            If this sounds interesting but you’re not sure you'll tick all the boxes, apply anyway! There’s tons of room to grow at Chargebee.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <!-- ==================================================================
                    List Part end
                    =================================================================== -->
                    <!-- ==================================================================
                    Jd content Part start
                    =================================================================== -->
                    <!-- <div class="l-main__row">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-7 col-sm-offset-1">
                                    <div class="cb-jd"> -->
                                        <!-- ==============================================
                                        Content Part start
                                        =============================================== -->
                                        <!-- <div class="cb-jd__content">
                                            <h4 class="cb-jd__title">Let’s talk</h4>
                                            <p class="cb-jd__heading">
                                                apply with your résumé to get<br class="visible-lg"> the conversation started
                                            </p>
                                            <div class="cb-jd__actions">
                                                <div class="cb-jd__action">
                                                    <div class="cb-btn cb-btn--primary cb-btn--suffix cb-btn--lg cb-btn--shadow" id="cb-jd-action" style="pointer-events: none">Apply now</div>
                                                </div>
                                            </div>
                                        </div> -->
                                        <!-- ==============================================
                                        Content Part start
                                        =============================================== -->
                                    <!-- </div>
                                </div>
                            </div>
                        </div>
                    </div> -->

                    <div class="l-main__row">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1">
                                    <div class="cb-jd" style="margin-bottom: 0;">
                                        <!-- ==============================================
                                        Footer Part start
                                        =============================================== -->
                                        <!-- <div class="cb-jd__footer"> -->
                                            <!-- ==========================================
                                            Thumb Part start
                                            =========================================== -->
                                            <!-- <div class="cb-jd__thumbs">
                                                <a href="https://www.flickr.com/photos/sarath_kuchi/8733135029/in/photolist-eiHAMB-edjuJ3-edEfxy-7H54Kk-a82vkt-EtvVZi-NxJTxz-aounGe-EoBLpk-j78BEN-DspqFq-9o6WKP-FKYds6-dDYW1C-aPAmFe-7PfkFE-7Ptkni-dsscQg-ickUYa-8nstoS-7Cu47w-iYg4CU-Mz6WyY-bxQDJR-9bf6Kd-7LoNjd-dBVrWe-a3fCve-8tmT6q-hZa9N8-Mk7Mfp-dCUpGq-8XCUvL-crirjQ-b8iM4Z-8RL5R1-LNAEdC-a9igmP-7DMmx5-DDfJKU-ac3oe5-4vhKXo-7yGf3Z-97XLdE-dnpCXU-b4Hvoc-9bVaKX-8TNck8-bb7avB-9ddrSa" target="_blank" class="cb-jd__thumb" data-toggle="tooltip" title="" data-original-title="Sarath Kuchi">
                                                    <img src="/static/website/version/images/careers/kovalam-beach.jpg" alt="" class="img-responsive">
                                                </a>
                                                <a href="https://www.flickr.com/photos/vinothchandar/14790389998/in/photostream/" target="_blank" class="cb-jd__thumb" data-toggle="tooltip" title="" data-original-title="Vinoth Chandar">
                                                    <img src="/static/website/version/images/careers/kapaleeswarar-temple.jpg" alt="" class="img-responsive">
                                                </a>
                                                <a href="https://www.flickr.com/photos/seeveeaar/2836384328/" target="_blank" class="cb-jd__thumb" data-toggle="tooltip" title="" data-original-title="Simply CVR">
                                                    <img src="/static/website/version/images/careers/train.jpg" alt="" class="img-responsive">
                                                </a>
                                            </div> -->
                                            <!-- ==========================================
                                            Thumb Part end
                                            =========================================== -->
                                            <!-- <p class="cb-jd__desc">
                                                Our Sales team is based in <a href="https://goo.gl/maps/K5grEdNbHA7BUJ4C9">Chennai, India</a>
                                            </p>
                                            <div class="cb-jd__actions cb-jd__actions--center">
                                                <div class="cb-jd__action">
                                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.chargebee.com/careers/director-presales/" class="cb-jd__media cb-jd__media--fb"></a>
                                                </div>
                                                <div class="cb-jd__action">
                                                    <a href="https://twitter.com/home?status=https%3A//www.chargebee.com/careers/director-presales/%20%40chargebee" class="cb-jd__media  cb-jd__media--twt"></a>
                                                </div>
                                                <div class="cb-jd__action">
                                                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.chargebee.com/careers/director-presales/&title=Sales%20Manager%20-%20work%40chargebee&summary=We%20are%20hiring%20an%20Sales%20Manager.%20Explore%20what%20it%20takes%20to%20be%20part%20of%20one%20of%20India's%20leading%20tech%20startup's%20sales%20cycles.%20Apply%20Now!&source=" class="cb-jd__media  cb-jd__media--lnk"></a>
                                                </div>
                                            </div>
                                        </div> -->
                                        <!-- ==============================================
                                        Footer Part start
                                        =============================================== -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ==================================================================
                    Footer Part end
                    =================================================================== -->




                </section>
                <!-- =================================================================================
                Content Part end
                ================================================================================== -->
            </main>
            <!-- =====================================================================================
            Body Part end
            ====================================================================================== -->
            <!-- =====================================================================================
            Modal Part Start
            ====================================================================================== -->
            <div class="cb-jd__modal" id="cb-jd-modal">
                <div class="cb-jd__modal-form">
                    <iframe src="https://chargebee.freshteam.com/jobs/vT2YmVLa-nsM/director-presales#applicant-form" frameborder="0" name="chargebee-careers" id="chargebee-careers" style="width: 100%; height: 100%;"></iframe>
                </div>

                <div class="cb-jd__modal-close" id="ch-jd-modal-close">&times;</div>
            </div>
            <!-- =====================================================================================
            Modal Part end
            ====================================================================================== -->
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
        //Tooltip for image hover
        $('[data-toggle="tooltip"]').tooltip();
        //For modal apply now
        $("#cb-jd-action").click(function() {
            $("#cb-jd-modal").addClass("cb-jd__modal--active");
            $("body").css("overflow", "hidden");
        });
        $("#ch-jd-modal-close").click(function() {
            $("#cb-jd-modal").removeClass("cb-jd__modal--active");
            $("body").css("overflow", "auto");
        });
        $(document).keyup(function(e) {
            if (e.keyCode === 27){
            $("#cb-jd-modal").removeClass("cb-jd__modal--active");
            $("body").css("overflow", "auto");
            }
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
    #lc_chat_layout {
        display: none !important;
    }
    #ch-js-header-cloned{
        display: none;
    }
    @media (max-width: 991px){
    .l-header__container{
        padding: 24px 15px;
    }
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->