<template>
    <div>
        <app-meta 
            :cb-title="'Affiliate Assets - Chargebee'" 
            :cb-desc="'Banners and assets for Chargebee affiliate program'" 
            :cb-url="'/affiliates/assets/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <div class="pad-top-head-height">
                <!-- InstanceBeginEditable name="Page Content" -->        
                <!-- privacy block Start-->
                <section class="well no-round no-bor no-mar no-pad">
                    <div class="container text-center block-space">
                        <h1 class="ProximaNova-Bold hr-line text-uppercase">Chargebee Affiliate Banners</h1>
                        <p class="text-28 SourceSans-Light no-mar">Include one of the following Chargebee banners and don’t forget to include your referral link with all the banners.</p>
                    </div>
                </section>
                <hr class="no-mar">
                <section class="container block-space-sm text-title ">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="thumbnail">
                                <img src="/static/resources/affiliates/inverted-square.png" class="center-block img-responsive">
                                <p class="help-block text-center">300x250</p>
                                <pre>&lt;a href="https://www.chargebee.com"&gt;&lt;img src="https://www.chargebee.com/static/resources/affiliates/inverted-square.png"&gt;&lt;/a&gt;</pre>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="thumbnail">            		
                                <img src="/static/resources/affiliates/inverted-square-alt.png" class="center-block img-responsive">                	
                                <p class="help-block text-center">300x250</p>        
                                <pre>&lt;a href="https://www.chargebee.com"&gt;&lt;img src="https://www.chargebee.com/static/resources/affiliates/inverted-square-alt.png"&gt;&lt;/a&gt;</pre>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="thumbnail">                    	
                                <img src="/static/resources/affiliates/colour-square.png" class="center-block img-responsive">
                                <p class="help-block text-center">300x250</p>
                                <pre>&lt;a href="https://www.chargebee.com"&gt;&lt;img src="https://www.chargebee.com/static/resources/affiliates/colour-square.png"&gt;&lt;/a&gt;</pre>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="thumbnail">            		
                                <img src="/static/resources/affiliates/colour-square-alt.png" class="center-block img-responsive">
                                <p class="help-block text-center">300x250</p>
                                <pre>&lt;a href="https://www.chargebee.com"&gt;&lt;img src="https://www.chargebee.com/static/resources/affiliates/colour-square-alt.png"&gt;&lt;/a&gt;</pre>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="thumbnail">            		
                                <img src="/static/resources/affiliates/inverted-horizontal.png" class="center-block img-responsive">                	
                                <p class="help-block text-center">728x90</p>
                                <pre>&lt;a href="https://www.chargebee.com"&gt;&lt;img src="https://www.chargebee.com/static/resources/affiliates/inverted-horizontal.png"&gt;&lt;/a&gt;</pre>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="thumbnail">            		
                                <img src="/static/resources/affiliates/colour-horizontal.png" class="center-block img-responsive">                	
                                <p class="help-block text-center">728x90</p>
                                <pre>&lt;a href="https://www.chargebee.com"&gt;&lt;img src="https://www.chargebee.com/static/resources/affiliates/colour-horizontal.png"&gt;&lt;/a&gt;</pre>                        
                            </div>
                        </div>
                    </div>
                    <p class="text-15"><a href="/static/resources/affiliates/affiliate-resources.zip">Click here to download all the assets.</a></p>
                </section>
                <hr class="no-mar">
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
    
    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
            'app-footer': AppFooter
        },
        methods: {},
        mounted(){
        }
    }
</script>