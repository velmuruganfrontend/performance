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
// app-header 		=	App header will add header to the page. Need a white header in page use :hasInvert="true" attribute
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
        :cb-title="'Chargebee: Webinars'" 
        :cb-desc="'Chargebee Webinars'" 
        :cb-url="'/open-source-ruby-gem/'" 
        :cb-image="'/static/resources/og/home-og@2x.png'"
        :cb-style="'/static/website/version/styles/chargebee.css'"
        :cb-head-script="''"
        :cb-body-script="''"
        :cb-has-noindex="true" />
        <!-- ===================================================================
        End: Meta Section
        ==================================================================== -->
        <!-- ===================================================================
        Start: Body Section
        ==================================================================== -->
        <div class="cb-body">
            <main class="hs-web">
                <div class="hs-web__container">
                    <!-- -------------------------------------------------------------------
                    Start: Aside
                    -------------------------------------------------------------------- -->
                    <div class="hs-web__aside">
                        <div class="hs-web__content">
                        <!-- ---------------------------------------------------------------
                        Start: Head
                        ---------------------------------------------------------------- -->
                        <div class="hs-head">
                            <img src="/static/resources/brand/chargebee-icon-brand.svg" alt="Chargebee Logo" width="36">
                        </div>
                        <!-- ---------------------------------------------------------------
                        Start: Hero
                        ---------------------------------------------------------------- -->
                        <div class="hs-hero">
                            <div class="hs-hero__content">
                                <div class="hs-hero__label">
                                    8th Nov, 11:00 AM PST
                                </div>
                                <div class="hs-hero__title">
                                    Building a Customer-Centric Culture: Livestorm’s Way
                                </div>
                                <div class="hs-hero__desc">
                                    Livestorm is one such up and coming SaaS company where ‘Customer Centricity’ lies in the core of their business. Let’s hear from Gilles Bertaux, CEO of Livestorm on how Livestorm acheives this.
                                </div>
                            </div>
                            <div class="hs-hero__footer">
                                <div class="hs-hero__speakers">
                                    <!-- ---------------------------------------------------
                                    Start: Speaker
                                    ---------------------------------------------------- -->
                                    <div class="hs-speaker">
                                        <div class="hs-speaker__object">
                                            <img src="/static/website/version/images/webinars/speakers/vikram.png" alt="Avatar Icon" class="img-responsive">
                                        </div>
                                        <div class="hs-speaker__content">
                                            <div class="hs-speaker__name">
                                                Vikram Bhaskaran
                                            </div>
                                            <div class="hs-speaker__designation">
                                                VP of Finance & Operations
                                            </div>
                                        </div>
                                    </div>
                                    <!-- ---------------------------------------------------
                                    End: Speaker
                                    ---------------------------------------------------- -->
                                    <!-- ---------------------------------------------------
                                    Start: Speaker
                                    ---------------------------------------------------- -->
                                    <div class="hs-speaker">
                                        <div class="hs-speaker__object">
                                            <img src="/static/website/version/images/webinars/speakers/gilles.png" alt="Avatar Icon" class="img-responsive">
                                        </div>
                                        <div class="hs-speaker__content">
                                            <div class="hs-speaker__name">
                                                Sandy Amberg
                                            </div>
                                            <div class="hs-speaker__designation">
                                                Director of Sales and Support
                                            </div>
                                        </div>
                                    </div>
                                    <!-- ---------------------------------------------------
                                    End: Speaker
                                    ---------------------------------------------------- -->
                                </div>
                            </div>
                        </div>
                        <!-- ---------------------------------------------------------------
                        End: Hero
                        ---------------------------------------------------------------- -->
                        </div>
                    </div>
                    <!-- -------------------------------------------------------------------
                    End: Aside
                    -------------------------------------------------------------------- -->
                    <!-- -------------------------------------------------------------------
                    Start: Main
                    -------------------------------------------------------------------- -->
                    <div class="hs-web__main">
                        <!-- ---------------------------------------------------------------
                        Start: Form
                        ---------------------------------------------------------------- -->
                        <div class="hs-form">
                            <div class="hs-form__title">
                                Signup for our webinar
                            </div>
            
                            <div class="hs-form__group">
                                <input type="text" placeholder="Name" name="" class="hs-form__control">
                            </div>
            
                            <div class="hs-form__group">
                                <input type="text" placeholder="Email Address" name="" class="hs-form__control">
                            </div>
            
                            <div class="hs-form__group">
                                <input type="text" placeholder="Company" name="" class="hs-form__control">
                            </div>
            
                            <div class="hs-form__group">
                                <input type="submit" value="Sign up now" class="hs-form__btn">
                            </div>
                        </div>
                        <!-- ---------------------------------------------------------------
                        End: Form
                        ---------------------------------------------------------------- -->
                        <!-- ---------------------------------------------------------------
                        Start: Article
                        ---------------------------------------------------------------- -->
                        <div class="hs-article">
                            <div class="hs-article__heading">
                                Long Description
                            </div>
                            <div class="hs-article__desc">
                                By now, most SaaS product companies are already bought in on the idea of customer-centricity. However, putting this spirit into action is often only expected of customer-facing teams such as Customer Success and Support. Add to this conflicting
                            </div>
                            <div class="hs-article__desc">
                                Business-first considerations, and the hurdles that stand in the way of being truly customer-centric, as an organization, are many.
                            </div>
                            <div class="hs-article__desc">
                                Livestorm is one such up and coming SaaS company where ‘Customer Centricity’ lies in the core of their business. Let’s hear from Gilles Bertaux, CEO of Livestorm on how Livestorm is able to stick with and build on the customer-centric vision and how they use customer feedback to align themselves on the customer needs.
                            </div>
                            <div class="hs-article__desc">
                                Business-first considerations, and the hurdles that stand in the way of being truly customer-centric, as an organization, are many.
                            </div>
                            <div class="hs-article__desc">
                                Livestorm is one such up and coming SaaS company where ‘Customer Centricity’ lies in the core of their business. Let’s hear from Gilles Bertaux, CEO of Livestorm on how Livestorm is able to stick with and build on the customer-centric vision and how they use customer feedback to align themselves on the customer needs.
                            </div>
            
                            <div class="hs-article__desc">
                                Business-first considerations, and the hurdles that stand in the way of being truly customer-centric, as an organization, are many.
                            </div>
                            <div class="hs-article__desc">
                                Livestorm is one such up and coming SaaS company where ‘Customer Centricity’ lies in the core of their business. Let’s hear from Gilles Bertaux, CEO of Livestorm on how Livestorm is able to stick with and build on the customer-centric vision and how they use customer feedback to align themselves on the customer needs.
                            </div>
                        </div>
                        <!-- ---------------------------------------------------------------
                        End: Article
                        ---------------------------------------------------------------- -->
                    </div>
                    <!-- -------------------------------------------------------------------
                    End: Main
                    -------------------------------------------------------------------- -->
                </div>
            </main>
        </div>
        <!-- ===================================================================
        End: Body Section
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

export default {
    components: {
    'app-meta': AppMeta
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
