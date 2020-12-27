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
    <div class="pad-top-head-height">
        <!-- ===================================================================
        Start: Meta Section
        ==================================================================== -->
        <app-meta 
        :cb-title="'About Relay'" 
        :cb-desc="'Relay is an online community for SaaS founders from around the around. Join in to network, learn, and share your stories with fellow founders.'" 
        :cb-url="'/about-relay/'" 
        :cb-image="''"
        :cb-style="'https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap'"
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
            <!-- =====================================================================================
            Header Part start 
            ====================================================================================== -->
            <header class="l-header">
                <div class="l-header__container">
                    <div class="l-header__row">
                        <!-- ========================================= 
                        Header menu left start
                        ========================================== -->
                        <div class="l-header__col l-header__col--left">
                            <nav class="ch-nav">
                                <ul class="ch-nav__list">
                                    <li class="ch-nav__item">
                                        <a href="https://www.gorelay.co/?ref=website" class="ch-nav__logo"> <!-- data-ch-js-asset for right click logo-->
                                            <img src="/static/website/version/images/about-relay/relay-logo.svg" alt="Chargebee Logo" width="110">
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <!-- ========================================= 
                        Header menu left end
                        ========================================== -->
                        <div class="l-header__col l-header__col--middle"></div>
                        <!-- ========================================= 
                        Header menu right start
                        ========================================== -->
                        <div class="l-header__col l-header__col--right">
                            <nav class="ch-nav">
                                <ul class="ch-nav__list">
                                    <li class="ch-nav__item ch-nav__item--cta">
                                        <a href="https://www.gorelay.co/?ref=website" class="ch-nav__btn ch-nav__arrow ch-nav__arrow--white">Go to Relay</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <!-- ========================================= 
                        Header menu right end
                        ========================================== -->
                    </div>
                </div>
            </header>
            <!-- ===============================================================
            Start: Hero
            ================================================================ -->
            <section class="l-row l-row--main">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-1 col-md-offset-2">
                            <div class="cb-main">
                                <div class="cb-main__content">
                                    <div class="cb-main__desc">
                                        <img src="/static/website/version/images/about-relay/hello-fellow-founder.png" width="236" alt="Chargebee" class="img-responsive">
                                    </div>
                                    <div class="cb-main__desc">
                                        It was just a few years ago that the four of us started out on our journey of building a business, a journey, also, of learning everything first-hand. Everything. We were toddlers in a school. Learning about shapes, colors, and alphabets of the startup world. The teachers? Well, there were many.
                                    </div>
                                    <div class="cb-main__desc">
                                        One who influenced us the most was Joel Spolsky. It wouldn’t be unfair to say that if it wasn’t for him, Chargebee wouldn’t have existed. Yep.
                                    </div>
                                    <div class="cb-main__desc">
                                        Whether it was learning the nuances of building a team or understanding the powerful difference between creating a business and creating a product, the journal of his journey helped us navigate through this new, uncharted world like nothing else. Even as we sat in a different corner of the world, his advice found us and brought in a sense of calm to those early days of overwhelm.
                                    </div>
                                    <div class="cb-main__desc">
                                        Tracing Joel’s footsteps in our small ways, we have attempted to share whatever it is we’ve learned with fellow founders — over coffee chats, at meetups, and in 2 AM HN threads. We have enjoyed being a part of these conversations, learned from them, and with each one of them, witnessed the one big relay race that the startup journey is.
                                    </div>
                                    <div class="cb-main__desc">
                                        A relay you run with a team of people. Not alone.
                                    </div>
                                    <div class="cb-main__desc">
                                        People whom you train with day in and day out, people who mentor and coach you, people who cheer you on, and people who take the baton of passion and wisdom and carry it forward. 
                                    </div>
                                    <div class="cb-main__desc">
                                        So, with the intent of paying it forward and helping fellow founders, we’re excited to share Relay with you. It’s a founders-only community for the all-defining days 0 to 1M, where you can connect with fellow founders from around the world, learn from their journeys, share your stories, and root for each other.
                                    </div>
                                    <div class="cb-main__desc">
                                        A place where, hopefully, you can find a Joel for yourself. And be a Joel for someone else, too.
                                    </div>
                                    <div class="cb-main__desc">
                                        We have built Relay as a community. But honestly, it will be what you make of it. We hope you find a space here that pushes you to grow, people who root for you, and more reasons to keep running.
                                    </div>
                                    <div class="cb-main__desc cb-main__desc--mark">
                                        All yours now! 
                                    </div>
                                    <div class="cb-main__desc">
                                        <img src="/static/website/version/images/about-relay/with-love.png" width="123" alt="Chargebee" class="img-responsive">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ===============================================================
            End: Hero
            ================================================================ -->
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
      mounted() {
      }
    }
</script>
<!-- ===========================================================================
End: Script Section
============================================================================ -->
<style>
    .l-row--main{
        padding-top: 40px;
        padding-bottom: 180px;
    }
    .cb-main__desc{
        font-family: 'IBM Plex Mono', Roboto;
        margin-bottom: 24px;
    }
    .cb-main__desc--mark{
        background: linear-gradient(to bottom,transparent 62%,#ffe6ab 0) center center/0 75% no-repeat;
        background-size: 100%;
        display: inline-block;
    }
    @media (min-width: 768px){
        .l-row--main {
            background: url('/static/website/version/images/launch/bootstrapper-bg-launch.svg') no-repeat;
            background-position: top center;
            background-size: contain;
            padding-top: 100px;
        }
        .cb-main__desc{
            font-size: 20px;
            line-height: 30px;
            letter-spacing: -0.22px;
        }
    }
    @media (min-width: 1024px){
        .l-row--main {
            padding-top: 160px;
        }
    }
    @media (min-width: 1200px){
        .l-row--main {
            padding-top: 200px;
        }
    }
</style>