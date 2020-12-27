<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>

        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'Rise Visions Journey of Using RevenueStory for Better Subscription Analytics'" 
            :cb-desc="'Watch a quick walkthrough of how Rise Vision uses RevenueStory, the subscription analytics app from Chargebee, to track the metrics that matter to their business'"   
            :cb-url="'/videos/revenuestory/how-risevision-uses-revenuestory/'"    
            :cb-image="''"
            :cb-style="'https://fast.wistia.com/embed/channel/project/g46a0nnzgb/font.css'" 
            :cb-head-script="''"
            :cb-body-script="'https://fast.wistia.com/assets/external/channel.js,/static/website/version/scripts/wistia.js'" 
            :cb-has-noindex="true"/>
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Body
        ==================================================================== -->
        <main class="fr-main"> 
            <div class="wistia_channel wistia_async_g46a0nnzgb mode=inline" style="min-height:100vh;position:relative;width:100%;"></div> 
        </main>
        <!-- ===================================================================
        End: Website Body
        ==================================================================== -->

    </div>
</template>
<!-- ===========================================================================
End: Template
============================================================================ -->
<!-- ===========================================================================
Start: Scripts
============================================================================ -->
<script>
    import AppMeta from '~/components/AppMeta.vue';

    export default {
        components: {
            'app-meta': AppMeta
        }
    }
</script>
<!-- ===========================================================================
End: Scripts
============================================================================ -->

<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css">
  .call-to-action{
    background: rgb(100, 80, 240) !important;
    border: 0px !important;
    border-radius: 4px !important;
    box-shadow: none !important;
    color: rgb(255, 255, 255) !important;
    cursor: pointer;
    font-family: Roboto, Sans-Serif !important;
    flex: 0 0 auto;
    font-size: 20.1406px !important; 
    line-height: 1.2em !important;
    outline: none !important;
    padding: 15px 37px 15px 20px !important; 
    position: relative !important; 
    margin-left: 30px;  
    display: flex;
    align-items: center;
 } 
 .call-to-action:hover {
    text-decoration: none;
} 
.call-to-action:after { 
    content: "\2192";
    position: absolute;
    right: 9px;
    top: 26px;    
}
@media only screen and (max-width: 1440px) {
  .call-to-action:after{
      top: 20px;
  }
}
@media only screen and (max-width: 680px) {
  .call-to-action{
    font-size: 14.1406px !important; 
  }
}
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->