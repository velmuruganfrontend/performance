<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div style="background-color: #000;">
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'Champions of Change | Virtual Conference by Chargebee'"
            :cb-desc="'Join us as we bring together the largest gathering of Champions of Change, and tear into the stories behind the transformations'"
            :cb-url="'/champions-of-change-summit-thankyou/'"
            :cb-image="'/static/resources/og/events/coc/og.png'"
            :cb-style="'/static/website/version/styles/coc-submit.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="true"/>
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Body
        ==================================================================== -->
        <main class="fr-main coc-thankyou">
            <!-- ===============================================================
            Start: Hero
            ================================================================ -->
            <section class="coc-thankyou-hero revealOnScroll" data-animate='fadeInUp'>
                <img src="/static/resources/brand/chargebee-logo-white.svg" width="120" class="img-responsive coc-thankyou__logo" />
                <img src="/static/website/version/images/coc-submit/banner.png" width="840" class="img-responsive coc-thankyou__img" />
            </section>
            <!-- ===============================================================
            End: Hero
            ================================================================ -->
            <!-- ===============================================================
            End: Body
            ================================================================ -->
            <section class="coc-thankyou-body revealOnScroll" data-animate='fadeInUp'>
                <div class="coc-grid">
                    <div class="coc-grid__content">
                        <img src="/static/website/version/images/coc-submit/tag-us.svg" class="img-responsive" />
                        <div class="coc-thankyou__icons">
                            <a class="coc-thankyou__icon coc-thankyou__icon--fb" href="https://www.facebook.com/sharer/sharer.php?u=https://www.chargebee.com/champions-of-change-summit/"></a>
                            <a class="coc-thankyou__icon coc-thankyou__icon--tw" href="https://twitter.com/intent/tweet?text=Champions of Change | Virtual Conference by Chargebee&url=https://www.chargebee.com/champions-of-change-summit/"></a>
                            <a class="coc-thankyou__icon coc-thankyou__icon--ln" href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.chargebee.com/champions-of-change-summit/"></a>
                        </div>
                    </div>
                    <div class="coc-grid__content">
                        <h1 class="coc-thankyou__title">
                            Thanks for signing up!
                        </h1>
                        <div class="coc-thankyou__desc">
                            Block the time on your calendar right away 🎉 
                        </div>
                       <p class="logos">
                            <a href="https://www.addevent.com/event/Sj5401416+apple" title="Apple" target="_blank"><img src="https://www.addevent.com/gfx/icon-emd-share-apple-t1.png" alt="Apple" width="60" border="0" ></a>
                            <a href="https://www.addevent.com/event/Sj5401416+google" title="Google" target="_blank"><img src="https://www.addevent.com/gfx/icon-emd-share-google-t1.png" alt="Google" width="60" border="0" ></a>
                            <a href="https://www.addevent.com/event/Sj5401416+office365" title="Office 365" target="_blank"><img src="https://www.addevent.com/gfx/icon-emd-share-office365-t1.png" alt="Office 365" width="60" border="0"></a>
                            <a href="https://www.addevent.com/event/Sj5401416+outlook" title="Outlook" target="_blank"><img src="https://www.addevent.com/gfx/icon-emd-share-outlook-t1.png" alt="Outlook" width="60" border="0" ></a>
                            <a href="https://www.addevent.com/event/Sj5401416+outlookcom" title="Outlook.com" target="_blank"><img src="https://www.addevent.com/gfx/icon-emd-share-outlookcom-t1.png" alt="Outlook.com" width="60" ></a>
                            <a href="https://www.addevent.com/event/Sj5401416+yahoo" title="Yahoo" target="_blank"><img src="https://www.addevent.com/gfx/icon-emd-share-yahoo-t1.png" alt="Yahoo" width="60" border="0" ></a>
                        </p> 
                        <div class="coc-thankyou__desc">
                            Know someone who would be thrilled about this Summit? Invite them to join you as well! And don't forget to tag us. We'll send you a little something for your love 😀
                        </div>
                    </div>
                </div>
            </section>
            <!-- ===============================================================
            End: Body
            ================================================================ -->

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
        },
        mounted() {
            window.scrollTo(0,1)
        },
    }
</script>
<!-- ===========================================================================
End: Scripts
============================================================================ -->
<style>
    body{
        background-color: #000000;
    }
    .logos{
        margin:0px 0px 10px 0px;
        font-size:0px;
        padding-left: 45px;
    }
    .logos a{
        display: inline-block;
    }
    .logos a img{ 
        width: 60px; 
        display: inline;
    }
    @media only screen and (max-width: 767px) {
       .logos{
           padding-left: 0; 
       }
    }
</style>
