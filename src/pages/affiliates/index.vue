<template>
    <div>
        <app-meta 
            :cb-title="'Chargebee Affiliate Program - Monetize your Referrals'" 
            :cb-desc="'Join Chargebee affiliate marketing and earn recurring commissions'" 
            :cb-url="'/affiliates/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css'"
            :cb-head-script="''"
            :cb-body-script="'/static/website/version/scripts/scrollspy.js'"
            :cb-has-noindex="true" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <div class="pad-top-head-height">
                <!-- InstanceBeginEditable name="Page Content" -->        
                <!-- privacy block Start-->
                <section class="well no-round no-bor no-mar no-pad">
                    <div class="container text-center block-space">
                        <h1 class="ProximaNova-Bold hr-line text-uppercase">Chargebee Affiliate Program</h1>
                        <p class="text-28 SourceSans-Light">Make money by joining the Chargebee afilliate program for free</p>
                        <a href="https://chargebee.refersion.com/" class="btn btn-success">Get Started Now</a>
                    </div>
                </section>
                <hr class="no-mar">
                <section class="container block-space-sm text-title ">
                    <div class="row">
                        <div class="col-md-4 col-md-offset-1">
                            <h4 class="text-center">For Bloggers</h4>
                            <img src="/static/website/version/images/affiliate/newspaper_64px.png" alt="newspaper" class="center-block"><br>
                            <p>If you have a website or a blog, monetize your audience by adding banners on your website or by adding links to your posts.</p>
                        </div>
                        <div class="col-md-4 col-md-offset-2">
                            <h4 class="text-center">For Publishers</h4>
                            <img src="/static/website/version/images/affiliate/megaphone_64px.png" alt="megaphone" class="center-block"><br>
                            <p>Refer customers through any online marketing medium: email, PPC, Facebook, Twitter and earn commissions for every referral.</p>
                        </div>
                    </div>
                </section>
                <hr class="no-mar">
                <section class="container block-space-sm text-title text-center">
                    <h4>How It Works</h4><br>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="/static/website/version/images/affiliate/clipboard_64px.png" alt="clipboard"><br><br>
                                    <p class="text-15">Step 1 - Apply to Chargebee Affiliate Program</p>
                                </div>
                                <div class="col-md-4">
                                    <img src="/static/website/version/images/affiliate/browser_64px.png" alt="browser"><br><br>
                                    <p class="text-15">Step 2 - Use Banners &amp; Links to Refer Customers</p>
                                </div>
                                <div class="col-md-4">
                                    <img src="/static/website/version/images/affiliate/wallet_64px.png" alt="wallet"><br><br>
                                    <p class="text-15">Step 3 - Earn Commisions</p>
                                </div>
                            </div>
                        </div>
                    </div>        
                </section>
                <hr class="no-mar">
                <section class="container block-space-sm text-title text-center">
                    <h4>Earn referal commisions as a Chargebee Affiliate</h4>
                    <br>
                    <p><a href="https://chargebee.refersion.com/" class="btn btn-success">Create Your Free Account Today</a></p>
                </section>    
                <!-- privacy block End-->        
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