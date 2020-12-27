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
      :cb-title="''" 
      :cb-desc="''" 
      :cb-url="''" 
      :cb-image="''"
      :cb-style="''"
      :cb-head-script="''"
      :cb-body-script="''"
      :cb-has-noindex="false"
      :disable-bootstrap-css="false"
      :disable-header-footer-css="false" />
    <!-- ===================================================================
    End: Meta Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Header Section
    ==================================================================== -->
    <app-header :hasInvert="false" :hasBasicHeader="false" />
    <!-- ===================================================================
    End: Header Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Body Section
    ==================================================================== -->
    <div class="cb-body">
      <!-- ============================================================
      Start: Hero
      ============================================================= -->
      <cb-hero />
      <!-- ============================================================
      End: Hero
      ============================================================= -->
      <!-- ============================================================
      Start: Intro
      ============================================================= -->
      <cb-intro />
      <!-- ============================================================
      End: Intro
      ============================================================= -->
      <!-- ============================================================
      Start: Media A
      ============================================================= -->
      <cb-media-a />
      <!-- ============================================================
      End: Media A
      ============================================================= -->
      <!-- ============================================================
      Start: Quote
      ============================================================= -->
      <cb-quote />
      <!-- ============================================================
      End: Quote
      ============================================================= -->
      <!-- ============================================================
      Start: Media B
      ============================================================= -->
      <cb-media-b />
      <!-- ============================================================
      End: Media B
      ============================================================= -->
      <!-- ============================================================
      Start: Subscription
      ============================================================= -->
      <cb-subscription />
      <!-- ============================================================
      End: Subscription
      ============================================================= -->
      <!-- ============================================================
      Start: FAQ
      ============================================================= -->
      <cb-faq />
      <!-- ============================================================
      End: FAQ
      ============================================================= -->
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
  import CbHero from './partials/-hero.vue';
  import CbIntro from './partials/-intro.vue';
  import CbMediaA from './partials/-media-a.vue';
  import CbQuote from './partials/-quote.vue';
  import CbMediaB from './partials/-media-b.vue';
  import CbSubscription from './partials/-subscription.vue';
  import CbFaq from './partials/-faq.vue';
  
  export default {
    components: {
      'app-meta': AppMeta,
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'cb-hero': CbHero,
      'cb-intro': CbIntro,
      'cb-media-a': CbMediaA,
      'cb-quote': CbQuote,
      'cb-media-b': CbMediaB,
      'cb-subscription': CbSubscription,
      'cb-faq': CbFaq
    },
    // jQuery methods/functions should be placed inside the methods
    methods: {},
    // jQuery interaction should be placed inside the mounted method
    mounted() {}
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