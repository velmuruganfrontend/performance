<template>
    <div>
        <app-meta 
            :cb-title="'Compare '+compareCompetitors.fields.companyName+' with Chargebee for Subscriptions'" 
            :cb-desc="'Looking for '+compareCompetitors.fields.companyName+' alternatives? See why Chargebee is the best way to handle subscription billing.'" 
            :cb-url="'/compare-competitors/'+compareCompetitors.fields.slug+'/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/new.css,/static/website/version/styles/main.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="true" />
        <app-header :hasInvert="true" />
        <div class="cb-body">
            <div class="l-blk">
                <div class="l-blk__banner">
                    <div class="container">
                        <div class="l-blk__hero">
                            <h1 class="l-blk__title">
                                Looking for an alternative to {{ compareCompetitors.fields.companyName }}?
                            </h1>
                            <p class="l-blk__desc">
                                You’ve come to the right place. More than 10,000 businesses worldwide use Chargebee to deliver an exceptional subscription experience.
                            </p>

                            <a cn-mark-signup="true" href="/trial-signup/" class="btn btn-sec btn-primary btn-primary-sec btn-md btn-suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');" style="margin-top: 35px;">
                                <img src="/static/resources/brand/chargebee-icon-white.svg" alt="Chargebee Logo Mark" style="width: 30px; margin-top: -7px; margin-right: 10px;"> Sign up for free
                            </a>

                            <a href="/schedule-a-demo/?ref=comp" style="padding-top: 15px; font-size: 20px; display: table; margin: 0 auto; color: white !important;"><small>Schedule a Demo</small></a>
                        </div>
                    </div>
                </div>
            </div>

            <section class="container">    
                <article class="tpcompare">
                    <div class="tpcompare__header">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2">
                                <h2 class="tpmain-content__subtitle">
                                    You need a partner. Not a vendor.
                                </h2>
                                <p class="tpmain-content__text" style="margin: auto; color: #130D23; margin-top: 40px;">
                                    Meet Chargebee. It’s designed to be easy and flexible, so you can integrate it without rethinking your entire architecture. It’s powerful enough to solve every subscription use case you can think of. And it’s affordable, so you can <em>make</em> bank, not break it.
                                </p>

                                <p class="tpmain-content__text" style="margin: auto; color: #130D23; margin-top: 20px;">
                                    Do your team a favor—give today’s subscription experience a spin. And you can rely on us to deliver.</p>

                                <p class="tpmain-content__text" style="margin: auto; color: #130D23; margin-top: 20px;"> If it’s your problem, it’s ours!</p>
                            </div>
                        </div>
                    </div>
                </article>
                <!-- ==================================================================
                scrollspy Part start 
                =================================================================== -->
                <div class="l-main__row">
                    <div data-parent>
                        <div class="row">
                            <div class="col-sm-12">
                                <p class="cb-scrollspy-head"></p>
                            </div>
                        </div>

                        <div class="row cb-scrollspy">
                            <div class="col-sm-6 col-md-6 hidden-sm hidden-xs">
                                <!-- ===================================================
                                Affix title Part start 
                                ==================================================== -->
                                <div class="cb-scrollspy__header" data-sidebar-fixed>
                                    <ul class="cb-scrollspy__list" data-sidebar-item>
                                        <li class="cb-scrollspy__item">
                                            Chargebee puts your business first. <br clas="hidden-xs">Not itself.
                                        </li>
                                    </ul>
                                </div>
                                <!-- ===================================================
                                scrollspy title Part start 
                                ==================================================== -->
                            </div>
                            <div class="col-sm-8 col-sm-offset-1 col-md-6 col-md-offset-0">
                                <!-- ===================================================
                                scrollspy content Part start 
                                ==================================================== -->
                                <div class="cb-scrollspy__body" data-nav-content>
                                    <div class="cb-scrollspy__content">
                                        <h3 class="cb-scrollspy__title" style="color: #5110B1; line-height: 26px;">Complex problems don’t need complex solutions </h3>
                                        <p class="cb-scrollspy__desc">Chargebee’s interface is intuitive and easy to use — even for the most complex use case. Take a look around and you’ll notice that setting up revenue recovery is as quick and as simple as generating an invoice.</p>
                                    </div>
                                    <div class="cb-scrollspy__content">
                                        <h3 class="cb-scrollspy__title"  style="color: #5110B1; line-height: 26px;">Lasting relationships are built on trust</h3>
                                        <p class="cb-scrollspy__desc">
                                            And trust is built on transparency. Everything from our pricing to our API docs are open, obvious, and easy to understand. We don’t do hidden costs, lock-ins, and operational curveballs. We’ve built a solution that we want you to enjoy using. Period.
                                        </p>
                                    </div>
                                    <div class="cb-scrollspy__content">
                                        <h3 class="cb-scrollspy__title" style="color: #5110B1; line-height: 26px;">
                                            What if software knew what you needed before you needed it?
                                        </h3>
                                        <p class="cb-scrollspy__desc" >
                                            From expanding into a new geography to onboarding a bigger team and anticipating customer requests better, Chargebee is built for teams that are growing and scaling. It brings the personal touch of small teams and the process efficiency of large ones together. So you can stay two steps ahead of your growth pains.
                                        </p>
                                    </div>
                                </div>
                                <!-- ===================================================
                                scrollspy content Part start 
                                ==================================================== -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ==================================================================
                scrollspy Part end 
                =================================================================== -->
                <!-- ==================================================================
                Banner Part Start 
                =================================================================== -->
                <div class="l-main__row">
                    <div>
                        <div class="row">
                            <div class="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1">
                                <div class="cb-bannera">
                                    <div class="cb-bannera__container">
                                        <div class="cb-bannera__left">
                                            <div class="cb-bannera__test">
                                                <div>
                                                    “We didn't have another choice, we never had to choose between Chargebee and another provider. Chargebee was the clear winner. There were other enterprise solutions which weren't consumer focussed and that was a strict no for us.”
                                                </div>
                                                <div class="cb-bannera__author">
                                                    - Fred Stutzman | Co Founder, Freedom
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cb-bannera__right">
                                            <a href="/features/?ref=comp" class="cb-bannera__btn">
                                                Explore all Features
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ==================================================================
                Banner Part end 
                =================================================================== -->
                <!-- ==================================================================
                scrollspy Part start 
                =================================================================== -->
                <div class="l-main__row">
                    <div data-parent>
                        <div class="row">
                            <div class="col-sm-12">
                                <p class="cb-scrollspy-head"></p>
                            </div>
                        </div>

                        <div class="row cb-scrollspy">
                            <div class="col-sm-6 col-md-6 hidden-sm hidden-xs">
                                <!-- ===================================================
                                Affix title Part start 
                                ==================================================== -->
                                <div class="cb-scrollspy__header" data-sidebar-fixed>
                                    <ul class="cb-scrollspy__list" data-sidebar-item>
                                        <li class="cb-scrollspy__item">
                                            We’ve tied our growth to yours. We grow <em>only</em> when you do.
                                        </li>
                                    </ul>
                                </div>
                                <!-- ===================================================
                                scrollspy title Part start 
                                ==================================================== -->
                            </div>
                            <div class="col-sm-8 col-sm-offset-1 col-md-6 col-md-offset-0">
                                <!-- ===================================================
                                scrollspy content Part start 
                                ==================================================== -->
                                <div class="cb-scrollspy__body">
                                    <div class="cb-scrollspy__content">
                                        <h3 class="cb-scrollspy__title" style="color: #5110B1">Chargebee is ever-evolving</h3>
                                        <p class="cb-scrollspy__desc">
                                            At an average of three new features a month, Chargebee is forever improving. With customer expectations changing as the subscription market evolves, it’s integral you have a system that can handle left field subscription requests as effectively as everyday ones.
                                        </p>
                                    </div>
                                    <div class="cb-scrollspy__content">
                                        <h3 class="cb-scrollspy__title"  style="color: #5110B1">Chargebee grows with you </h3>
                                        <p class="cb-scrollspy__desc">
                                            The journey from idea to IPO is about a continuous shift of complexities from acquiring and retaining subscribers to scaling your business and navigating multiple taxation, revenue recognition, and accounting practices. You need a deeper subscription engine like Chargebee that meets your ever-evolving edge-cases, while balancing security and performance.
                                        </p>
                                    </div>
                                </div>
                                <!-- ===================================================
                                scrollspy content Part start 
                                ==================================================== -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ==================================================================
                scrollspy Part end 
                =================================================================== -->
            </section>

            <section>
                <div class="container">
                    <article class="tpcompare" style="padding-bottom: 40px;">
                        <div class="tpcompare__header">
                            <div class="row">
                                <div class="col-sm-10 col-sm-offset-1">
                                    <h2 class="tpmain-content__subtitle" style="margin: 0 0 60px;">
                                    Today’s businesses need more than subscription economy basics. Because today’s customers deserve subscription experiences that make an impression.
                                    </h2>

                                    <a cn-mark-signup="true" href="/trial-signup/" class="cb-btn cb-btn--lg cb-btn--primary cb-btn--shadow cb-btn--suffix" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');" style="font-size: 18px;"><strong>Try Chargebee for free</strong></a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section>
                <div class="container">
                    <div class="row">
                        <!-- =====================================================
                        Pricing Footer content Start 
                        ====================================================== -->
                        <div class="col-sm-5">
                            <!-- =================================================
                            Testimonial Start 
                            ================================================== -->
                            <div class="cpr-footer__content">
                                <div class="cb-testimonial cb-testimonial--secondary">
                                    <div class="cb-testimonial__content">
                                        Switching to Chargebee has helped us streamline our development resources. We're now able to experiment better and iterate much faster. <span class="cb-testimonial__mark"></span>
                                    </div>
                                    <div class="cb-testimonial__footer">
                                        <div class="cb-testimonial__author">Justin Louie</div>
                                        <div class="cb-testimonial__role">CTO, GuavaPass</div>
                                    </div>
                                </div>
                                <!-- =============================================
                                Testimonial End 
                                ============================================== -->
                            </div>
                        </div>
                        <!-- =====================================================
                        Pricing Footer content End 
                        ====================================================== -->
                        <!-- =====================================================
                        FAQ Start 
                        ====================================================== -->
                        <div class="col-sm-6 col-sm-offset-1">
                            <div class="cb-panels">
                                <div class="cb-panels__title">
                                    Frequently Asked Questions
                                </div>
                                <div class="cb-panels__container">
                                    <!-- =============================================
                                    Panel Start 
                                    ============================================== -->
                                    <div class="cb-panel" data-panel="true" style="margin-bottom: 0;">
                                        <div class="cb-panel__bg"></div>
                                        <div class="cb-panel__title">
                                            Do you provide a consultant for implementing Chargebee?
                                        </div>
                                        <div class="cb-panel__desc" data-panel-desc="true">
                                            Yes! From the moment you sign up to the moment you start processing customers with Chargebee (and beyond), our product consultants will be available to answer any questions that you might have about how things work.
                                        </div>
                                        <div class="cb-panel__desc" data-panel-desc="true">Apart from getting your team familiar with the product, Chargebee also provides an expedited onboarding program. As a part of the program, our onboarding team will assist with migrating your customer data to Chargebee.</div>

                                        <div class="cb-panel__desc" data-panel-desc="true">Between our product and our onboarding team, we’ll make sure there are neither roadblocks nor bottlenecks to your delivering an exceptional subscription experience to customers.</div>
                                    </div>
                                    <!-- =============================================
                                    Panel End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Panel Start 
                                    ============================================== -->
                                    <div class="cb-panel" data-panel="true" style="margin-bottom: 0;">
                                        <div class="cb-panel__bg"></div>
                                        <div class="cb-panel__title">
                                            What is Chargebee’s pricing? 
                                        </div>
                                        <div class="cb-panel__desc" data-panel-desc="true">Glad you asked! You’d be even glad-er to know you don’t even have to ask. Unlike {{ compareCompetitors.fields.companyName }}, Chargebee has an <a href="/pricing/">open pricing model</a> so you know exactly what you’d pay right away. </div>
                                        <div class="cb-panel__desc" data-panel-desc="true">Our pricing model is based on the volume of revenue or transactions that you process through Chargebee. But if you have a unique business model, or process high value transactions where an invoice based pricing may be more amenable, <a href="/pricing-enquiry/">let us know</a> and we’d be glad to accommodate. </div>
                                        <div class="cb-panel__desc" data-panel-desc="true">There’s no end to how flexible we’re willing to be to put you and your business first.</div>
                                    </div>
                                    <!-- =============================================
                                    Panel End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Panel Start 
                                    ============================================== -->
                                    <div class="cb-panel" data-panel="true" style="margin-bottom: 0;">
                                        <div class="cb-panel__bg"></div>
                                        <div class="cb-panel__title">
                                            Will you help migrate my data from {{ compareCompetitors.fields.companyName }}? 
                                        </div>
                                        <div class="cb-panel__desc" data-panel-desc="true">Thanks to our experience with a few other customers, we’ve been able to map your migration from {{ compareCompetitors.fields.companyName }} down to a T! </div>
                                        <div class="cb-panel__desc" data-panel-desc="true">
                                            Apart from helping you through it, we’ve mapped out a process that won’t interfere with your customers’ subscription experience. They won’t even know you’ve made the switch.
                                        </div>
                                    </div>
                                    <!-- =============================================
                                    Panel End 
                                    ============================================== -->
                                </div>
                            </div>
                        </div>
                        <!-- =====================================================
                        FAQ End 
                        ====================================================== -->
                    </div>
                </div>
            </section>
        </div>
        <app-footer />
    </div>
</template>

<script>
    import AppMeta from '~/components/AppMeta.vue'
    import AppHeader from '~/components/AppHeader.vue'
    import AppFooter from '~/components/AppFooter.vue'

    import {createClient} from '~/plugins/contentful.js'

    const client = createClient()

    export default {
        asyncData ({ env, params }) {
            return client.getEntries({
                'content_type': env.CTF_COMPARE_COMPETITORS_ID,
                'fields.slug': params.slug
            }).then(entries => {
                return {
                    compareCompetitors: entries.items[0]
                }
            }).then()
            .catch(console.error)
        },
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
            'app-footer': AppFooter
        },
        mounted() {
            $('[data-panel]').click(function() {
                $(this).toggleClass('cb-panel--active').siblings().removeClass('cb-panel--active');
            });

            //For tooltip
            $('[data-toggle="tooltip"]').tooltip({
                'placement': 'bottom'
            });
        }
    }
</script>
<style type="text/css" media="screen">
    #ch-js-header-cloned{
        display: none;
    }
    .cb-scrollspy__item--active{
        color: rgba(0,0,0,0.87);
    }    
    .cb-scrollspy__desc{
        color: rgba(0,0,0,0.87);
    }
    .cb-jd__heading{
        font-size: 36px;
        line-height: 52px;
    }
    .cb-jd__author{
        opacity: 0.7;
        color: #130D2D;
        font-size: 21px;
        font-weight: bold;
        line-height: 25px;
        margin-top: 24px;
    }
    @media (max-width: 1024px) {
        .cb-scrollspy-head{
            display: none;
        }
        .cb-bannera{
            margin-top: 0;
        }
        .l-main__row:last-child{
            margin-bottom: 0;
        }

        .cb-bannera__container{
            display: block;
        }
        .cb-bannera__right{
            margin-top: 30px;
        }
    }
    @media (max-width: 767px) {
        .tpcompare{
            margin-top: 0;
        }
        .tpmain-content__subtitle {
            font-size: 20px;
            line-height: 30px;
        }
        .cb-bannera{
            padding: 40px 30px;
        }
        .cb-jd__heading {
            font-size: 26px;
            line-height: 35px;
        }
        .cb-jd__author {
            font-size: 17px;
        }
    }
    .cb-panel__desc {
        color: rgba(0,0,0,0.87) !important;
    }
</style>