<template>
    <div>
        <app-meta 
            :cb-title="'Webhooks - Features - Chargebee'" 
            :cb-desc="'Get all your apps notified and synced, in real-time, automatically.'" 
            :cb-url="'/developers/webhooks/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <div class="pad-top-head-height">
                <!-- InstanceBeginEditable name="Page Content" -->
                <section class="well no-round no-bor no-mar no-pad">
                    <div class="container block-space text-center">
                        <h1 class="ProximaNova-Bold hr-line text-uppercase">Webhooks</h1>
                        <p class="text-28 SourceSans-Light no-mar">Get all your apps notified and synced, in real-time, automatically.</p>
                    </div>
                </section>
                <hr class="no-mar">
                <div class="container block-space text-15">    	
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2" style="text-align: justify;">            	
                            <p>With the Webhooks from Chargebee your application integration gets even smarter: you don’t have to poll for changes in your billing system from time to time. Instead, your app will receive real-time notifications whenever a pre-defined event occurs in your billing site. This will in turn help you to easily keep all of your apps in sync with each other.</p>
            
                            <p>Once you create a webhook for an event, and provide a listener URL, Chargebee will automatically start sending webhook calls to that URL every time the event is recorded, with the necessary details relating to that event. You can then make the listener perform a certain action when it receives a corresponding notification.</p>
                            
                            <h4>Multiple Webhooks:</h4>
            
                            <p>Chargebee provides the option to set up multiple webhooks with multiple URLs, so that specific listeners/URLs can be configured to act for specific requirements.</p>
            
                            <p>For instance, one URL could be for listening to events that call for data to be updated in your customer database (subscription created/cancelled/changed, etc.) and another URL could be used for those events that would trigger activation of additional features when a subscription moves from trial state to active state.</p>
            
                            <h4>Manual Webhooks:</h4>
            
                            <p>Chargebee also makes it possible to manually resend a particular event’s webhook. </p>
            
                            <p>Let’s say a couple of webhook calls (and the retries) had failed because of a technical glitch in your listener and you received the mail from us informing you about the same. So after you fix that glitch, you can manually re-send those failed webhooks to update the information.</p> 
                            <p>This feature would also come in handy when you have made changes in the information in your billing system and you want to sync the data immediately across the other apps.</p>
                            
                            <div class="block-space-sm">
                            <p class="text-center"><a cn-mark-signup="true" href="/trial-signup/" class="btn btn-success text-uppercase">Sign up&nbsp;</a>
                                <a href="https://www.chargebee.com/docs/webhook_settings.html" class="btn btn-default text-uppercase">Read Documentation</a></p>
                            </div>
                                            
                        </div>
                    </div>
                </div>
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
        methods: {

        },
        created() {

        },
        mounted() {
        }
    }
</script>