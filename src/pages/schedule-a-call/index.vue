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
// app-header 		=	App header will add header to the page. 
//                  Need a white header in page use :hasInvert="true" attribute
//                  Need a basic header(without menu's) in page use :hasBasicHeader="true" attribute
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
        :cb-title="'Chargebee - Schedule a call for a free Demo'" 
        :cb-desc="'Scaling subscriptions is hard. Chargebee provides the infrastructure you need to scale at a rapid pace.'" 
        :cb-url="'/schedule-a-call/'" 
        :cb-image="''"
        :cb-style="'/static/website/version/styles/bootstrap.css'"
        :cb-head-script="''"
        :cb-body-script="'/static/website/version/scripts/typeform.js'"
        :cb-has-noindex="false"
        :disable-bootstrap-css="false"
        :disable-header-footer-css="false" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Header Section
        ==================================================================== -->
        <app-header :hasInvert="false" :hasBasicHeader="false" :hasBackToCareers="false" />
        <!-- ===================================================================
        End: Header Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Body Section
        ==================================================================== -->
        <div class="cb-body">
            <div class="pad-top-head-height">   
                <!-- InstanceBeginEditable name="Page Content" -->  
                <section class="well no-round no-bor no-mar no-pad" style="display: none;">
                    <div class="container text-center block-space">
                        <h1 class="ProximaNova-Bold hr-line text-uppercase">Schedule a Call</h1>
                    </div>
                </section>
                <div class="container block-space">        
                    <div class="typeform-widget cb-tf--space" data-url="https://chargebee.typeform.com/to/PWNukp" data-text="Schedule a Call Form"></div>
                </div>
                <div style="text-align:center; margin:20px;">
                    <a href="/privacy/" title="Privacy Policy">Privacy Policy</a>
                </div>
                <!-- InstanceEndEditable -->  
            </div>  
        </div>
        <!-- ===================================================================
        End: Body Section
        ==================================================================== -->
        <cookie-banner />
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
import cookieBanner from '~/components/cookieBanner.vue';

export default {
    components: {
        'app-meta': AppMeta,
        'app-header': AppHeader,
        'cookie-banner': cookieBanner
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
    .cb-tf--space{
         width:100%;
         height:600px;
    }

    @media only screen and (max-width: 767px){
        .cb-tf--space{
             height:400px;
        }
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->