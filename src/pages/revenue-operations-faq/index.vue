<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'Demystifying Revenue Operations - Q&A about all things RevOps'" 
            :cb-desc="'Decode everything about Revenue Operations from definitions to frameworks. Here’s an extensive list of Q&A’s that’ll clear your RevOps queries!'"
            :cb-url="'/revenue-operations-faq/'"
            :cb-image="''"
            :cb-style="'/static/website/version/styles/revenue-operations-faq.css'" 
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false"/>
        <app-header :hasInvert="false" />
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Hero
        ==================================================================== -->
        <section class="cg-hero cg-hero--onboarding">
            <div class="cg-hero__container">
                <div class="cg-hero__content">
                    <h1 class="cg-hero__title">
                        The RevOps FAQs
                    </h1>
                    <p class="cp-hero__desc"> 
                        Answering questions about the newest brewing function in SaaS. Get to know about all things Revenue Operations.
                    </p> 
                    <!--<div class="cg-hero__actions">    
                        <div class="cg-hero__action"><a href="/revenue-operations-framework/" class="cg-btn">Explore Now</a></div>
                    </div>-->
                </div>
            </div> 
        </section>
        <!-- ===================================================================
        End: Website Hero
        ==================================================================== -->

        <!-- ===================================================================
        Start: Website Affix
        ==================================================================== -->
        <div id='before-affix'></div><!-- leave this empty -->
        <!-- ===================================================================
        Start: Affix
        ==================================================================== -->
        <section class="cg-affixs">
            <div class="container">
                <div class="row">
                <!-- ===================================================================
                Start: Affix Left
                ==================================================================== -->
                <div class="col-md-3 hidden-xs hidden-sm">
                    <div class="cg-affix" data-affix-after='#before-affix' id="ca-nav-affix">
                        <div class="cg-affix__header">
                            <div class="cg-affix__title">
                               Categories
                            </div>
                        </div>
                        <ul class="cg-affix__list nav">
                            <li class="cg-affix__item"> 
                                <a href="#general">
                                    Introduction to RevOps
                                </a>  
                            </li> 
                            <li class="cg-affix__item">
                                <a href="#rolesandResponsibilities">
                                   Roles and Responsibilities
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- ===================================================================
                End: Affix Left
                ==================================================================== -->
                <!-- ===================================================================
                Start: Affix Right
                ==================================================================== -->
                <div class="col-sm-10 col-sm-offset-1 col-md-9 col-md-offset-0"> 
                    <div class="cg-affix__body">
                        <!-- ===================================================================
                        Start: Content 1
                        ==================================================================== -->
                        <div class="cg-affix__content" id="general">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                        Introduction to RevOps
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                    <h3 class="cg-article__question">
                                        1.  What is Revenue Operations?
                                    </h3>
                                    <p class="cg-article__desc"> 
                                        <a class="cg-link" href="/blog/what-is-revops/">Revenue Operations</a> is the function in your organization that aligns revenue generators (Marketing, Sales, Success, and Finance) across the revenue cycle, in order to plug inefficiencies existing between them and thereby maximize revenue.
                                    </p>
                                </div>
                                <div class="cg-article__content">
                                    <h3 class="cg-article__question">
                                       2. Why do you need RevOps in your organization?
                                    </h3>
                                    <p class="cg-article__desc"> 
                                        When revenue drivers are siloed with their tools, processes, and goals, there exists a misalignment that causes leaks in your revenue cycle. A <a href="https://www.siriusdecisions.com/blog/how-to-align-revenue-engine" target="_blank" class="cg-link">SiriusDecisions study</a> concluded that companies that aligned their revenue-generating functions had a 19% faster revenue growth and 15% higher profits. RevOps is the unification of Marketing, Sales, Success and Finance so that they work on the same page. 
                                    </p>
                                </div>
                                <div class="cg-article__content">
                                    <h3 class="cg-article__question">
                                       3. Is RevOps the same as SalesOps?

                                    </h3>
                                    <p class="cg-article__desc"> 
                                        No, SalesOps focuses only on the sales function of the organization by refining processes and reducing friction in the sales cycle. Whereas, <a href="/blog/what-is-revops/" class="cg-link">RevOps is a more holistic end-to-end approach</a> which is implemented to manage operations across Marketing, Sales, Success, and Finance to increase and retain your revenue.
                                    </p>
                                </div>
                                <div class="cg-article__content">
                                    <h3 class="cg-article__question">
                                      4. What should the RevOps function in your organization consist of?
                                    </h3>
                                    <p class="cg-article__desc mb-10">  
                                       There are four building blocks of RevOps
                                    </p>
                                    <ul>
                                     <li>
                                        <p class="cg-article__desc">
                                            <b>People:</b>  The RevOps team is the center of all revenue-driving processes. They channelize requests from different teams and prioritize them, reduce friction in onboarding new processes, looking at KPIs that matter and making the right decisions.
                                        </p>
                                     </li>
                                     <li>
                                        <p class="cg-article__desc">
                                            <b>Tools:</b> As you scale you need to migrate data, unplug and plug existing tools and processes, etc. Henceforth you need a solid infrastructure that lets you handle these requirements as and when they arise without being a cog in your process.
                                        </p>
                                      </li>
                                      <li>
                                        <p class="cg-article__desc">
                                            <b>Processes:</b> Processes are required to reduce friction and eliminate practices that hinder revenue growth amongst and between your revenue teams, so that it doesn’t impact your revenue cycle. 
                                        </p>
                                      </li>
                                      <li>
                                        <p class="cg-article__desc">  
                                            <b>Analytics:</b> End-to-end visibility across data is required to function without chasm and uncertainty. Complete visibility of your revenue metrics is required to supercharge your growth. 

                                        </p> 
                                      </li>
                                    </ul>   
                                </div>
                                <div class="cg-article__content">
                                    <h3 class="cg-article__question">
                                        5. What role does finance play in Revenue Operations?
                                    </h3>
                                    <p class="cg-article__desc"> 
                                        Finance plays a pivotal role from an annual operations angle and focuses on controlling your costing, expansion, payback period and growth of your recurring revenue. In SaaS, the lines where sales ends and finance begins are blurry. Most of the metrics like <a href="/resources/glossaries/what-is-lifetime-value/">LTV: CAC</a> and OTE (On-target Earnings) coincide between these functions. Therefore, alignment across these teams is important to meet your revenue guidelines.
                                    </p>
                                </div>


                                <!-- -------------------------------------------------------------------
                                Start: Article
                                -------------------------------------------------------------------  -->
                                <section class="cp-panel" style="margin-bottom:40px"> 
                                    <div class="text-center">
                                        <div href="" class="cp-panel__container">   
                                            <div class="cp-panel__desc">
                                               Take a look at <a href="/revenue-operations-framework/" class="cg-link">Chargebee’s Revenue Operations Framework</a>
                                            </div>
                                        </div> 
                                    </div>
                                </section>
                                <!-- -------------------------------------------------------------------
                                End: Article
                                -------------------------------------------------------------------  -->
                                <div class="cg-article__content">
                                    <h3 class="cg-article__question">
                                        6. When is the right time to build a RevOps team inside your organization?
                                    </h3>
                                    <p class="cg-article__desc mb-10"> 
                                        Ideally, there is no right time to build a RevOps function. If you face similar problems like the ones listed here, you should start thinking RevOps
                                    </p>
                                    <ul class="cg-article__order">
                                        <li>
                                            Your goals aren’t aligned between your revenue-generating teams and your numbers start falling through the cracks. 
                                        </li> 
                                        <li>
                                            Your predicted revenue target and your actual revenue earned aren’t synchronous with each other during every quarter. 
                                        </li>
                                        <li>
                                            Disconnected flow of information between teams, which leads to wrong messaging, execution delays across functions. 
                                        </li>
                                    </ul>
                                     <p class="cg-article__desc"> 
                                        Learn more about the key contributors to an <a class="cg-link" href="/blog/revenue-operations-essentials/">anti-fragile RevOps team</a>
                                    </p>
                                </div>
                                <div class="cg-article__content">
                                    <h3 class="cg-article__question">
                                        7. What are the benefits of implementing RevOps?
                                    </h3>
                                    <p class="cg-article__desc mb-10"> 
                                        By incorporating a RevOps function in your organization, you get 
                                    </p>
                                    <ul class="cg-article__order">
                                        <li>
                                            Entire funnel accountability and clarity
                                        </li> 
                                        <li>
                                            Data-driven collaboration and decision making between your revenue-generating teams. 
                                        </li>
                                        <li>
                                            Predictable business growth. 
                                        </li>
                                        <li>
                                            Higher rates of won deals and faster sales cycle. 
                                        </li>
                                    </ul>
                                </div>
                                <div class="cg-article__content">
                                    <h3 class="cg-article__question">
                                        8. How does RevOps enable customer experience? 
                                    </h3>
                                    <p class="cg-article__desc"> 
                                        Your revenue cycle merges with your prospects' journey at different stages. In subscription businesses, happy customers have a longer LTV. More specifically, happy customers are 74% more likely to stay for one more year. The only way to achieve sustainable revenue growth is by aligning all your revenue-driving functions to deliver a stellar customer experience so that every revenue opportunity can be ready to be cashed.
                                    </p>
                                     <p class="cg-article__desc"> 
                                        Here’s a detailed account of <a href="/blog/other-side-of-revops/" class="cg-link">how customer experience is just another side to RevOps</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 1
                        ==================================================================== -->
                        <!-- ===================================================================
                        Start: Content 2
                        ==================================================================== -->
                        <div class="cg-affix__content" id="rolesandResponsibilities">
                            <div class="cg-article">
                                <div class="cg-article__header">
                                    <h2 class="cg-article__title">
                                        Roles and Responsibilities
                                    </h2>
                                </div>
                                <div class="cg-article__content">
                                    <h3 class="cg-article__question">
                                        9. Who should your Revenue Operations team consist of?
                                    </h3>
                                     <p class="cg-article__desc"> 
                                        Your <a class="cg-link" href="/blog/revenue-operations-heroes-dna/">revenue operations team</a> should consist of a Chief Revenue Officer (CRO) / VP of RevOps leading your Marketing Head, Sales Head, Finance Head and Success Head. As your company grows your RevOps team keeps evolving depending upon your requirements.
                                     </p>
                                </div>
                                <div class="cg-article__content">
                                    <h3 class="cg-article__question">
                                        10. What is the role of a CRO?
                                    </h3>
                                     <p class="cg-article__desc"> 
                                        The Chief Revenue Officer of a company is the guardian of all things revenue. The CRO’s role is to look at ways to generate and retain revenue across multiple channels. A CRO should take a unified view across all the teams and arrive at long-term strategies for steady and positive revenue growth. 
                                     </p>
                                </div>
                                <div class="cg-article__content">
                                     <h3 class="cg-article__question">
                                        11. What should be the key qualities of a CRO?
                                     </h3>
                                     <p class="cg-article__desc mb-10">  
                                          A CRO
                                          <ul class="cg-article__order">
                                              <li>
                                                  Is capable of establishing an infrastructure where all the revenue-generating functions are fully integrated. 
                                              </li>
                                              <li>
                                                  Sets up initiatives to measure and analyze key metrics to ensure productivity across the revenue cycle. 
                                              </li>
                                              <li>
                                                  Manages board expectations, and balances their resources and time to cater to all cross-sectional teams.
                                              </li>
                                          </ul>    
                                    </p>
                                </div>
                                <div class="cg-article__content">
                                    <h3 class="cg-article__question">
                                        12. Why do you need a CRO?
                                    </h3>
                                     <p class="cg-article__desc"> 
                                        A CRO aligns your revenue-generating departments to harness sustained growth. They ensure there’s uniformity in messaging across your organization for prospects to have a seamless user experience throughout their buying journey, creating an environment conducive to sustained growth and minimal churn.
                                     </p>
                                </div>
                                <div class="cg-article__content">
                                    <h3 class="cg-article__question">
                                        13. What are the major responsibilities of a CRO?
                                    </h3>
                                     <p class="cg-article__desc"> 
                                        To define revenue strategy, execute GTM activities, construct and optimize revenue systems, pipeline management, ROI on spend, churn.
                                     </p>
                                </div>
                                <div class="cg-article__content">
                                    <h3 class="cg-article__question">
                                        14. Who does a CRO report to? 
                                    </h3>
                                     <p class="cg-article__desc"> 
                                        In most organizations, the Chief Revenue Officer directly reports to the CEO and the board. 
                                     </p>
                                </div>
                                 <div class="cg-article__content">
                                    <h3 class="cg-article__question">
                                        15. What is the difference between a Chief Revenue Officer and Chief Financial Officer?
                                    </h3>
                                     <p class="cg-article__desc"> 
                                        A CRO is responsible for the alignment of revenue-generating functions and ensuring sustainable revenue growth by successfully executing GTM strategies. A CFO is majorly responsible for raising and managing capital needed to make a business function.
                                     </p>
                                </div>
                                 <div class="cg-article__content">
                                    <h3 class="cg-article__question">
                                        16. What does a revenue operations analyst do?
                                    </h3>
                                     <p class="cg-article__desc">  
                                         A <a class="cg-link" href="/blog/revenue-operations-heroes-dna/">revenue analyst</a> tracks revenue data of the company over a period of time, determines the direction of the revenue trend and works across functions to develop new strategies for growth and retention. They’re responsible for analyzing large sets of numerical data and extracting valuable information for making data-driven decisions. 
                                     </p>
                                </div>
                            </div>
                        </div>
                        <!-- ===================================================================
                        End: Content 2
                        ==================================================================== -->
                    </div>
                </div>
                <!-- ===================================================================
                Start: Affix Right
                ==================================================================== -->
                </div>
            </div>
        </section>
        <!-- ===================================================================
        End: Affix
        ==================================================================== -->
        <!-- ===================================================================
        End: Website Affix
        ==================================================================== -->

        <!-- -------------------------------------------------------------------
        Start: Footer
        -------------------------------------------------------------------  -->
        <section class="cp-footer container">
            <div class="col-sm-8 col-sm-offset-2">
                <div class="cp-footer__container">
                    <div class="cp-footer__title">
                       Learn how Chargebee can enable Revenue Operations for your Fast-Growth SaaS.
                    </div>
                    <div class="cg-footer__actions">
                        <div class="cg-footer__action action_one">
                            <a href="/revenue-operations/" class="cg-btn cg-btn--primary">Explore now</a>
                        </div>
                        <div class="cg-footer__action action_two">
                            <a href="/schedule-a-demo/" class="cg-btn cg-btn--ghost cg-btn--ghost-primary">Schedule a demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------------------------------------------------------------------
        End: Footer
        -------------------------------------------------------------------  -->
    
        <!-- ===================================================================
        Start: Website Footer
        ==================================================================== -->
        <app-footer />
        <!-- ===================================================================
        End: Website Footer
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
    import AppHeader from '~/components/AppHeader.vue';
    import AppFooter from '~/components/AppFooter.vue';

    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
            'app-footer': AppFooter
        },
        data () {
            return {
                structuredData:  {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is Revenue Operations?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Revenue Operations is the function in your organization that converges your revenue generators (Marketing, Sales, Success, and Finance) across your revenue cycle in order to plug inefficiencies existing between them."
                            }
                        },               
                        {
                            "@type": "Question",
                            "name": "Why do you need RevOps in your organization?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "When revenue drivers are siloed with their tools, processes, and goals, there exists a misalignment that causes leaks in your revenue cycle. A SiriusDecisions study concluded that companies that aligned their revenue-generating functions had a 19% faster revenue growth and 15% higher profits. RevOps is the unification of Marketing, Sales, Success and Finance so that they work on the same page."
                            }
                        },               
                        {
                            "@type": "Question",
                            "name": "What is the role of a CRO?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "The Chief Revenue Officer of a company is the guardian of all things revenue. The CRO’s role is to look at ways to generate and retain revenue across multiple channels. A CRO should take a unified view across all the teams and arrive at long-term strategies for steady and positive revenue growth."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What should be the key qualities of a CRO?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "A CRO - 1. Is capable of establishing an infrastructure where all the revenue-generating functions are fully integrated. 2. Sets up initiatives to measure and analyze key metrics to ensure productivity across the revenue cycle. 3. Manages board expectations, and balances their resources and time to cater to all cross-sectional teams."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Why do you need a CRO?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "A CRO aligns your revenue-generating departments to harness sustained growth. They ensure there’s uniformity in messaging across your organization for prospects to have a seamless user experience throughout their buying journey, creating an environment conducive to sustained growth and minimal churn."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What are the major responsibilities of a CRO?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "To define revenue strategy, execute GTM activities, construct and optimize revenue systems, pipeline management, ROI on spend, churn."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What is the difference between a Chief Revenue Officer and Chief Financial Officer?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": " A CRO is responsible for the alignment of revenue-generating functions and ensuring sustainable revenue growth by successfully executing GTM strategies. A CFO is majorly responsible for raising and managing capital needed to make a business function."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What does a revenue operations analyst do?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "A revenue analyst tracks revenue data of the company over a period of time, determines the direction of the revenue trend and works across functions to develop new strategies for growth and retention. They’re responsible for analyzing large sets of numerical data and extracting valuable information for making data-driven decisions. "
                            }
                        }
                    ]
                }
            }
        },
        head () {
            return {
                script: [
                    { type: 'application/ld+json', innerHTML: JSON.stringify(this.structuredData) }
                ]
            }
        },

        mounted() {

                // For Affix
                // Scrollspy
                $('body').scrollspy({ target: '#ca-nav-affix'});

                // Affix onclick to show the section
                $("#ca-nav-affix .cg-affix__item a[href^='#']").on('click', function(e) {
                // prevent default anchor click behavior
                e.preventDefault();

                // store hash
                var hash = this.hash;

                // animate
                    $('html, body').animate({
                    scrollTop: $(this.hash).offset().top
                    }, 1000, function(){

                    // when done, add hash to url
                    // (default click behaviour)
                    window.location.hash = hash;
                    });
                });

                //Affix scroll
                $('[data-affix-after]').each( function() {
                    var elem = $(this);
                    var parent_panel = elem.parent();
                    var prev = $( elem.data('affix-after') );

                    if( prev.length != 1 ) {
                    /* Create a new element immediately before. */
                    prev = elem.before( '<div></div>' ).prev();
                    }

                    var resizeFn = function() {
                    /* Set the width to it's natural width in the parent. */
                    var sideBarNavWidth = parent_panel.width()
                        - parseInt(elem.css('paddingLeft'))
                        - parseInt(elem.css('paddingRight'))
                        - parseInt(elem.css('marginLeft'))
                        - parseInt(elem.css('marginRight'))
                        - parseInt(elem.css('borderLeftWidth'))
                        - parseInt(elem.css('borderRightWidth'));
                    elem.css('width', sideBarNavWidth);

                    elem.affix({
                        offset: {
                            top: prev.offset().top + prev.outerHeight(true),
                            bottom: function () {
                                return (this.bottom = $('#cb-affix-footer').outerHeight(true) + $('.cg-footer').outerHeight(true) + 120)
                            }
                        }
                    });
                    };

                    resizeFn();
                        $(window).resize(resizeFn);
                });

                $('.cg-hero__actiona').on('click', function(){
                    $('html, body').animate({
                        scrollTop: $(".cg-article").offset().top - 150
                    }, 500);
                })
            }
        }
</script>
<!-- ===========================================================================
End: Scripts
============================================================================ -->
<!-- ===========================================================================
Start: Style
============================================================================ -->
<style type="text/css"> 
.cp-footer__container {
    text-align: center;
}

.cp-footer.container {
    margin-top: 50px;
}

.cp-footer__container .cp-footer__title {
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 42px;
    font-weight: 700;
    color: #000000;  
    letter-spacing: -.6px;
    margin-bottom: 32px;
    font-family: basis-grotesque,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
.cp-hero__desc{width: 62%;}
.mb-10 {
    margin-bottom: 10px;
} 
    #ch-js-header-cloned{
        display: none;
    }
    @media (min-width: 991px) {
        .cg-affix{
            margin-top: 70px;
        }
    }

    .affix { top: 70px;margin-top: 0 }
    .affix-bottom { position: absolute; }
    .cg-hero__actions{
        justify-content: center;
    }
    .cg-affix__item > a,.cg-affix__subitem > a{
        white-space: initial;
    }
    .cg-affix__item > a{
        line-height: 24px;
        padding: 2px 0px !important; 
    }
    .cg-affix__item:before{
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 18px;
    }
    .cg-affix__subitem{
        margin-bottom: 8px;
    }
    .cg-article__subhead{
        font-size: 24px;
        line-height: 32px;
        text-align: center;
        font-weight: bold;
        max-width: 520px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
    }
    .cg-article__content .cg-article__desc:last-child {
        margin-bottom: 0;
    }
    .cg-article__heading{
        margin-bottom: -16px;
    }
    .cg-link--bordered {
        border: 1px solid #E2E9F9;
        padding: 16px 32px;
        border-radius: 8px;
        margin: auto;
        margin-bottom: 120px;
        font-size: 18px;
        line-height: normal;
    }
    @media (max-width: 767px){
        .cg-link--bordered {
            margin-left: auto;
            margin-right: auto;
            display: block;
            max-width: none;
        }
    }
    .cg-link--bordered:hover{
        box-shadow: 0 1px 1px 0 rgba(90,122,190,.1), 0 10px 20px 0 rgba(90,122,190,.2);
    }
    .cg-links .cg-link{
        margin: 8px 16px;
    }
    @media (min-width: 992px){
        .cg-hero__container {
            min-height: 480px;
            padding-bottom: 60px;
        }
        .cg-hero__title {
            margin-top: 0;
        }
    }
</style>
<!-- ===========================================================================
End: Style
================================================================================
