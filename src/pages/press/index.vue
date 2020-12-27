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
  <div>
    <!-- ===================================================================
    Start: Meta Section
    ==================================================================== -->
    <app-meta
      :cb-title="'Chargebee in the Press'"
      :cb-desc="'Browse recent press releases of Chargebee. Find brand logos and other company resources.'"
      :cb-url="'/press/'"
      :cb-image="''"
      :cb-style="'/static/website/version/styles/main.css,/static/website/version/styles/press.css'"
      :cb-head-script="'https://s3.amazonaws.com/cb-dev-brand-temp/news.js'"
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
        <!-- =========================================================================================
        Content Part Start
        ========================================================================================== -->
        <main class="l-main">
            <!-- =====================================================================================
            Banner Part Start
            ====================================================================================== -->
            <section class="l-main__banner">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-1 col-md-5 col-md-offset-1">
                            <div class="cb-hero cb-hero--middle" style="text-align: left;">
                                <div class="cb-hero__header">
                                    <h1 class="cb-hero__title">
                                        Chargebee Newsroom
                                    </h1>
                                    <p class="cb-hero__desc">
                                        Discover what’s new at Chargebee, the world class billing solution that powers subscriptions for <span class="totalCustomer"></span> businesses.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-5 col-sm-offset-1 hidden-sm hidden-xs">
                            <div class="cb-article">
                                <a href="/static/press/chargebee-press-resources.zip" class="cb-guide">
                                    <div class="cb-guide__icon">
                                        <img src="/static/resources/brand/chargebee-icon-brand.svg" alt="Chargebee Icon" width="60">
                                    </div>
                                    <div class="cb-guide__container">
                                        Download the Chargebee Press Kit here &rarr;
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- =====================================================================================
            Banner Part End
            ====================================================================================== -->
            <!-- =====================================================================================
            Content Part Start
            ====================================================================================== -->
            <section class="l-main__content">
                <div class="l-main__row">
                    <div class="container">
                        <div class="row">
                            <!-- =====================================================================================
                            Tab Part Start
                            ====================================================================================== -->
                            <div class="cp-tab">
                                <!-- =====================================================================================
                                Tab Nav Start
                                ====================================================================================== -->
                                <ul class="cp-tab__nav nav nav-tabs">
                                    <li class="cp-tab__item active">
                                        <a href="#home" data-toggle="tab">In the News</a>
                                    </li>
                                    <li class="cp-tab__item">
                                        <a href="#press-release" data-toggle="tab">Press Releases</a>
                                    </li>
                                </ul>
                                <!-- =====================================================================================
                                Tab Nav End
                                ====================================================================================== -->
                                <!-- =====================================================================================
                                Tab Content Start
                                ====================================================================================== -->
                                <div class="cp-tab__content tab-content">
                                    <!-- =====================================================================================
                                    Content press Start
                                    ====================================================================================== -->
                                    <div class="tab-pane active" id="home">
                                    <!-- =====================================================================================
                                    Medias Start
                                    ====================================================================================== -->
                                    <!-- VUE Template Start -->
                                    <div class="cp-medias" v-if="news && news.length > 0">
                                        <div v-for="(item,index) in news" class="cp-media" :key="index">
                                            <div class="cp-media__label">{{item.type}}</div>
                                            <div class="cp-media__title">
                                                <a :href="item.url" target="_blank">
                                                    {{item.headline}}
                                                </a>
                                            </div>
                                            <div class="cp-media__info">
                                                <div class="cp-media__duration">{{item.date}}</div>
                                                <div class="cp-media__source">{{item.media}}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- VUE Template End -->
                                    <!-- =====================================================================================
                                    Medias Ends
                                    ====================================================================================== -->
                                    </div>
                                    <!-- =====================================================================================
                                    Content press End
                                    ====================================================================================== -->
                                    <!-- =====================================================================================
                                    Content Announcement Start
                                    ====================================================================================== -->
                                    <div class="tab-pane" id="press-release">
                                        <div class="cp-medias">
                                            <!-- =====================================================================================
                                            Media Start 3
                                            ====================================================================================== -->
                                            <div class="cp-media">
                                                <div class="cp-media__title">
                                                    <a href="/press/best-subscription-revenue-recogniton/" target="_blank">
                                                        Chargebee Unveils Features to Improve Revenue Recognition and Optimize Revenue Operations for Subscription-Based Businesses
                                                    </a>
                                                </div>
                                                <div class="cp-media__info">
                                                    <div class="cp-media__duration">May 21, 2019</div>
                                                </div>
                                            </div>
                                            <!-- =====================================================================================
                                            Media End 3
                                            ====================================================================================== -->
                                            <!-- =====================================================================================
                                            Media Start 1
                                            ====================================================================================== -->
                                            <div class="cp-media">
                                                <div class="cp-media__title">
                                                    <a href="/press/piesync-chargebee-integration/" target="_blank">
                                                        Sync Customer Contacts into Your Favorite Cloud Application from Chargebee, Using PieSync
                                                    </a>
                                                </div>
                                                <div class="cp-media__info">
                                                    <div class="cp-media__duration">Mar 06, 2018</div>
                                                </div>
                                            </div>
                                            <!-- =====================================================================================
                                            Media End 1
                                            ====================================================================================== -->
                                            <!-- =====================================================================================
                                            Media Start 2
                                            ====================================================================================== -->
                                            <div class="cp-media">
                                                <div class="cp-media__title">
                                                    <a href="/press/chargebee-cart-abandonment-reporting-feature/" target="_blank">
                                                        Improve Sales Conversions Against Checkout Drops With Chargebee’s Cart Abandonment Reporting
                                                    </a>
                                                </div>
                                                <div class="cp-media__info">
                                                    <div class="cp-media__duration">Mar 06, 2018</div>
                                                </div>
                                            </div>
                                            <!-- =====================================================================================
                                            Media End 2
                                            ====================================================================================== -->
                                        </div>
                                    </div>
                                    <!-- =====================================================================================
                                    Content press End
                                    ====================================================================================== -->
                                </div>
                                <!-- =====================================================================================
                                Tab Content Start
                                ====================================================================================== -->
                            </div>
                            <!-- =====================================================================================
                            Tab Part End
                            ====================================================================================== -->
                        </div>
                    </div>
                </div>
            </section>
            <!-- =====================================================================================
            Content Part End
            ====================================================================================== -->
        </main>
        <!-- =========================================================================================
        Content Part End
        ========================================================================================== -->
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
    data: function() {
      return {
        news: []
      }
    },
    // jQuery interaction should be placed inside the mounted method
    mounted() {
        this.news = news
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
