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
      :cb-title="'Dunning Benchmarks For Subscription Businesses - Infographics - Chargebee'" 
      :cb-desc="'How can Dunning help prevent involuntary churn, and what are the results a subscription business should expect from it? We studied data from a sample of 5.36 million transactions, for benchmarks.'" 
      :cb-url="'/resources/infographics/dunning-benchmarks-subscription-businesses/'" 
      :cb-image="''"
      :cb-style="' /static/website/version/styles/bootstrap.css,/static/website/version/styles/new.css'"
      :cb-head-script="''"
      :cb-body-script="''"
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
        <section class="infograph">
            <div class="container">
                <div class="infograph__block">
                    <div class="row">
                        <div class="col-sm-5 col-md-4" style="position: static;">
                            <div class="infograph__float">
                                <div class="infograph__breadcrumb">
                                    <a class="infograph__breadcrumb-item" href="/resources/">Resources</a>
                                    <a class="infograph__breadcrumb-item active">Infographics</a>
                                </div>
                                <h1 class="infograph__title">Dunning Benchmarks For Subscription Businesses</h1>
                                <p class="infograph__desc">How can Dunning help prevent involuntary churn, and what are the results a subscription business should expect from it?</p>
                                <div class="visible-xs" style="margin-top: 30px;"><img class="img-responsive" src="/static/website/version/images/resources/infographics/dunning-subscription-insights.png"></div>
                                <p class="text"><small>November 2016</small></p>
                                <p style="margin-top: 15px;"><a class="infograph__download" href="/static/resources/downloads/infographics/dunning-benchmarks-for-subscriptions.pdf">Download as PDF </a></p>
                                <div class="infograph__share">Share it on <br>
                                    <a class="infograph__fb" href="https://www.facebook.com/dialog/feed?app_id=184683071273&link=https%3A%2F%2Fwww.chargebee.com%2Fresources%2Finfographics%2Fdunning-benchmarks-subscription-businesses%2F&picture=https%3A%2F%2Fwww.chargebee.com%2Fstatic%2Fresources%2Fog%2Fchargebee.png&name=Dunning%20Benchmarks%20For%20Subscription%20Businesses&caption=%20&description=How%20can%20Dunning%20help%20prevent%20involuntary%20churn%2C%20and%20what%20are%20the%20results%20a%20subscription%20business%20should%20expect%20from%20it%3F&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F"><img src="/static/website/version/images/icon/jan2019/facebook-black.svg" alt=""></a> 
                                    <a class="infograph__twit" href="http://twitter.com/intent/tweet?text=Dunning%20Benchmarks%20For%20Subscription%20Businesses%20by%20%40Chargebee%20https%3A%2F%2Fwww.chargebee.com%2Fresources%2Finfographics%2Fdunning-benchmarks-subscription-businesses%2F"><img src="/static/website/version/images/icon/jan2019/twitter-black.svg" alt=""></a> 
                                    <a class="infograph__pin" href="http://pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.chargebee.com%2Fresources%2Finfographics%2Fdunning-benchmarks-subscription-businesses%2F&media=https%3A%2F%2Fwww.chargebee.com%2Fstatic%2Fresources%2Fog%2Fchargebee.png&description=How%20can%20Dunning%20help%20prevent%20involuntary%20churn%2C%20and%20what%20are%20the%20results%20a%20subscription%20business%20should%20expect%20from%20it%3F"><img src="/static/website/version/images/icon/jan2019/pinterest-black.svg" alt=""></a>
                                </div>
                                <div class="txt-btm"></div>
                            </div>
                        </div>
                        <div class="col-sm-7 col-md-offset-1 hidden-xs">
                            <div class="infograph__preview">
                                <img class="img-responsive" src="/static/website/version/images/resources/infographics/dunning-subscription-insights.png">
                            </div>
                            <div class="img-btm"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End content -->
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
        $(window).on('scroll', function() {
            var img_btm = $('.img-btm').position().top - window.scrollY;
            var txt_btm = $('.txt-btm').position().top;
            if(txt_btm > img_btm){
                $('.infograph__float').addClass('infograph__abs');
            }else{
                $('.infograph__float').removeClass('infograph__abs');
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
<style type="text/css"></style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
