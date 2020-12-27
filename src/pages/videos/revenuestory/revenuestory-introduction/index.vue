<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>

        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'RevenueStory | Get Better Subscription Analytics'" 
            :cb-desc="'Watch a quick walkthrough of RevenueStory, the subscription analytics app from Chargebee. Learn how you can track the metrics that matter to your business'"   
            :cb-url="'/get-started/create-plans/'"
            :cb-image="''"
            :cb-style="'https://fast.wistia.com/embed/channel/project/54bodars31/font.css'" 
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
            <div class="wistia_channel wistia_async_54bodars31 mode=inline" style="min-height:100vh;position:relative;width:100%;"></div> 
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
  .action-button {
    display: inline-block !important;
    background: rgb(100, 80, 240) !important;
    border: 0px !important;
    border-radius: 4px !important;
    box-shadow: none !important;
    color: rgb(255, 255, 255) !important;
    cursor: pointer;
    font-family: Roboto, Sans-Serif !important;
    flex: 0 0 auto;
    font-size: 16.1406px !important;
    line-height: 1.2em !important;
    outline: none !important;
    padding: 15px 37px 15px 20px !important; 
    top: 218px;
    left: 20px;
    position: relative !important; 
 } 
.action-button:after {
    content: "\2192";
    position: absolute;
    right: 14px;
    top: 16px;  
}
@media (max-width: 991px) {
    .action-button{
       display: block !important;
      top: 0px;
      margin-bottom: 70px !important;  
      width: 240px; 
    }
}
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->