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
<template>
    <div>
        <app-meta 
            :cb-title="'Chargebee + Avalara: Manage Sales Tax effortlessly'" 
            :cb-desc="'Save time and manual effort by automating your sales tax management with Avalara & Chargebee.'" 
            :cb-url="'/integrations/avalara/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <div class="pad-top-head-height">
                <!-- InstanceBeginEditable name="Page Content" -->
                <!-- ============================================================
                Start: Hero
                ============================================================= -->
                <cb-hero />
                <!-- ============================================================
                End: Hero
                ============================================================= -->
                <hr class="no-mar">
                <!-- ============================================================
                Start: Media A
                ============================================================= -->
                <cb-media-a />
                <!-- ============================================================
                End: Media A
                ============================================================= -->
                <hr class="no-mar">
                <!-- ============================================================
                Start: Media B
                ============================================================= -->
                <cb-media-b />
                <!-- ============================================================
                End: Media B
                ============================================================= -->
                <hr class="no-mar">
                <!-- ============================================================
                Start: FAQ
                ============================================================= -->
                <cb-faq />
                <!-- ============================================================
                End: FAQ
                ============================================================= -->
                <!-- InstanceEndEditable -->
            </div>    
        </div>
        <app-footer />
    </div>
</template>

<script>
    import AppMeta from '~/components/AppMeta.vue';
    import AppHeader from '~/components/AppHeader.vue';
    import AppFooter from '~/components/AppFooter.vue';
    import CbHero from './partials/-hero.vue';
    import CbMediaA from './partials/-media-a.vue';
    import CbMediaB from './partials/-media-b.vue';
    import CbFaq from './partials/-faq.vue';
    
    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
            'app-footer': AppFooter,
            'cb-hero': CbHero,
            'cb-media-a': CbMediaA,
            'cb-media-b': CbMediaB,
            'cb-faq': CbFaq
        },
        methods: {

        },
        created() {

        },
        mounted() {
            $('.shopify-carousel >div').click(function(){
                $('.shopify-carousel >div').removeClass('active');
                $(this).addClass('active');
            });
        }
    }
</script>
<style>
.faq-block li:before{
    top: 8px;
}
.faq-block li{
    margin-bottom: 24px;
}
.l-header{
    background-color: #fff;
}
</style>
