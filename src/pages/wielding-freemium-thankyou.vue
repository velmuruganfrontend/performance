<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div style="background-color: #000;">
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'Wielding Freemium Vol. 1 | Oct. 24 2019'"
            :cb-desc="'Tune in to explore the perennially perplexing freemium model. Learn from masters who’ve honed their craft at companies like Atlassian, Dribbble, and Skype.'"
            :cb-url="'/wielding-freemium-thankyou/'"
            :cb-image="'/static/resources/og/freemium/og-image.png'"
            :cb-style="'/static/website/version/styles/freemium.css,https://use.typekit.net/hye2gik.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false"/>
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Body
        ==================================================================== -->
        <main class="fr-main fr-thankyou">
            <!-- ===============================================================
            Start: Hero
            ================================================================ -->
            <section class="fr-thankyou-hero revealOnScroll" data-animate='fadeInUp'>
                <img src="/static/website/version/images/freemium/freemium-thank-you.svg" style="margin: auto;" class="img-responsive" />
            </section>
            <!-- ===============================================================
            End: Hero
            ================================================================ -->
            <!-- ===============================================================
            End: Body
            ================================================================ -->
            <section class="fr-thankyou-body revealOnScroll" data-animate='fadeInUp'>
                <h1 class="fr-thankyou__title">
                    Thanks for signing up!
                </h1>
                <div class="fr-thankyou__desc" style="font-size: 24px; color: #B8B8B8; line-height: 34px;">
                    We’ve just sent you an access link for all the talks. <br><br>And some hard-won insights are waiting for you. <br><br>
                    Before you head to your inbox, here’s the first freemium thought to ponder, from a master who has successfully wielded it for a good decade.
                </div>
                

                <div class="fr-thankyou__author">
                    <div class="fr-thankyou__aimage">
                        <img src="/static/website/version/images/freemium/speakers/ryan-holmes.png" alt="" class="img-responsive">
                    </div>
                    <div class="fr-thankyou__adesc">
                        Ryan Holmes, CEO, Hootsuite
                    </div>
                </div>
                
                <div class="fr-thankyou__desc">
                    "For starters, freemium dramatically reduces the need for traditional marketing and sales efforts. Our free users — in steady, predictable numbers — became paid users. Instead of having to sell them on the merits of our product with expensive ads, we let them see for themselves. Our product became our best marketing tool and salesperson. On average more than half our paying customers, including large clients, start out as free users.<br><br>
                    Meanwhile, our free user base fulfilled another key function: It kept us honest. Free users are fickle; they’re not locked in by a contract or any other obligations. They can, at any moment, pick up and take their 'business' elsewhere. So to maintain and grow our free user base, we had to continually update our product, rolling out new features to stay ahead of the pack.<br><br>
                    These same features helped us win and keep paying customers. While other corporate tools were years behind the social media curve, our efforts to satisfy free users meant we could offer big enterprise customers the latest technology.”
                </div>
                
            </section>
            <!-- ===============================================================
            End: Body
            ================================================================ -->
            <!-- ===============================================================
            Start: Footer
            ================================================================ -->
            <footer class="fr-thankyou-footer">
                <div class="fr-thankyou-grid revealOnScroll" data-animate='fadeInUp'>
                    <div class="fr-thankyou__company">
                        Produced by <strong>Chargebee</strong>
                    </div>
                    <div class="fr-thankyou__icons">
                        <a class="fr-thankyou__icon fr-thankyou__icon--fb" href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.chargebee.com/wielding-freemium/"></a>
                        <a class="fr-thankyou__icon fr-thankyou__icon--tw" href="https://twitter.com/home?status=https%3A//www.chargebee.com/wielding-freemium/"></a>
                        <a class="fr-thankyou__icon fr-thankyou__icon--ln" href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.chargebee.com/wielding-freemium/"></a>
                    </div>
                </div>
            </footer>
            <!-- ===============================================================
            End: Footer
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
</style>
