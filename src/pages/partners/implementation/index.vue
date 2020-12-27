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
      :cb-title="'Implementation Partners - Chargebee'" 
      :cb-desc="'Connect with our partner agencies, should you need any consulting or development assistance.'" 
      :cb-url="'/partners/implementation/'" 
      :cb-image="'/static/resources/og/partners/og.png'"
      :cb-style="'/static/website/version/styles/main.css,/static/website/version/styles/pages/partners.css'"
      :cb-head-script="''"
      :cb-body-script="''"
      :cb-has-noindex="false" />
    <!-- ===================================================================
    End: Meta Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Header Section
    ==================================================================== -->
    <app-header :hasInvert="true" />
    <!-- ===================================================================
    End: Header Section
    ==================================================================== -->
    <!-- ===================================================================
    Start: Body Section
    ==================================================================== -->
    <div class="cb-body">
    <!-- ===========================================================================================
    Content Part Start 
    ============================================================================================ -->
    <main class="l-main">
        <!-- =========================================================================================
        Banner Part Start 
        ========================================================================================== -->
        <section class="l-main__banner" style="margin-bottom: 60px; padding-top: 140px;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                        <div class="cb-hero cb-hero--middle">
                            <div class="cb-hero__figure hidden-xs">
                                <div class="ca-partners">
                                    <img src="/static/website/version/images/partners/world_map.png" class="img-responsive">
                                    <div class="partners-plot-area">
                                        <div class="plot plot-a">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <span class="tooltip__content">
                                                    <span class="location">San Francisco</span>
                                                    <span class="company-names">Wolox, YLab, Crossroads Labs</span>
                                                </span>
                                            </span>
                                        </div>
                                        <!-- plot -->
                                        <div class="plot plot-b __cb">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <img src="/static/resources/brand/chargebee-logo-white.svg" alt="Chargebee Logo" width="100">
                                            </span>
                                        </div>
                                        <!-- plot -->
                                        <div class="plot plot-c">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <span class="tooltip__content">
                                                    <span class="location">New York</span>
                                                    <span class="company-names">Crossroads Labs</span>
                                                </span>
                                            </span>
                                        </div>
                                        <!-- plot -->
                                        <div class="plot plot-d">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <span class="tooltip__content">
                                                    <span class="location">Buenos Aires</span>
                                                    <span class="company-names">Wolox</span>
                                                </span>
                                            </span>
                                        </div>
                                        <!-- plot -->
                                        <div class="plot plot-e">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <span class="tooltip__content">
                                                    <span class="location">Kraków</span>
                                                    <span class="company-names">Xfive</span>
                                                </span>
                                            </span>
                                        </div>
                                        <!-- plot -->
                                        <div class="plot plot-f __cb">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <img style="position: absolute; top: 0; left: 0;" src="/static/resources/brand/chargebee-logo-white.svg" alt="Chargebee Logo" width="100">
                                            </span>
                                        </div>
                                        <!-- plot -->
                                        <div class="plot plot-h">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <span class="tooltip__content">
                                                    <span class="location">Wellington</span>
                                                    <span class="company-names">End Game</span>
                                                </span>
                                            </span>
                                        </div>
                                        <!-- plot -->
                                        <div class="plot plot-i" style=" left: 46.3%; top: 32%; ">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <span class="tooltip__content">
                                                    <span class="location">London</span>
                                                    <span class="company-names">Aspire Systems, Net Solutions</span>
                                                </span>
                                            </span>
                                        </div>
                                        <!-- plot -->
                                        <div class="plot plot-j" style=" left: 16.9%; top: 43%; ">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <span class="tooltip__content">
                                                    <span class="location">Dallas</span>
                                                    <span class="company-names">Aspire Systems</span>
                                                </span>
                                            </span>
                                        </div>
                                        <!-- plot -->
                                        <div class="plot plot-k" style=" left: 26.1%; top: 34%; ">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <span class="tooltip__content">
                                                    <span class="location">Toronto</span>
                                                    <span class="company-names">Net Solutions</span>
                                                </span>
                                            </span>
                                        </div>
                                        <!-- plot -->
                                        <div class="plot plot-l" style=" left: 77.8%; top: 59.3%; ">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <span class="tooltip__content">
                                                    <span class="location">Singapore</span>
                                                    <span class="company-names">Aspire Systems</span>
                                                </span>
                                            </span>
                                        </div>
                                        <!-- plot -->
                                        <div class="plot plot-m" style=" left: 70%; top: 46%; ">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <span class="tooltip__content">
                                                    <span class="location">Delhi</span>
                                                    <span class="company-names">Aspire Systems</span>
                                                </span>
                                            </span>
                                        </div>
                                        <!-- plot -->
                                        <div class="plot plot-n" style=" left: 68.9%; top: 43%; ">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <span class="tooltip__content">
                                                    <span class="location">Chandigarh</span>
                                                    <span class="company-names">Net Solutions</span>
                                                </span>
                                            </span>
                                        </div>
                                        <div class="plot plot-o" style=" left: 24.1%; top: 32.5%;">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <span class="tooltip__content">
                                                    <span class="location">Detroit</span>
                                                    <span class="company-names">Altimetrik</span>
                                                </span>
                                            </span>
                                        </div>
                                        <!-- plot -->
                                        <div class="plot plot-p" style=" left: 69.7%; top: 52.4%; ">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <span class="tooltip__content">
                                                    <span class="location">Bengaluru</span>
                                                    <span class="company-names">Altimetrik</span>
                                                </span>
                                            </span>
                                        </div>
                                        <!-- plot -->
                                        <div class="plot plot-q" style=" left: 30.1%; top: 77.3%; ">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <span class="tooltip__content">
                                                    <span class="location">Montevideo</span>
                                                    <span class="company-names">Altimetrik</span>
                                                </span>
                                            </span>
                                        </div>
                                        <!-- plot -->

                                        <div class="plot plot-r" style=" left: 51%; top: 27.6%; ">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <span class="tooltip__content">
                                                    <span class="location">Stockholm</span>
                                                    <span class="company-names">Accenture Interactive</span>
                                                </span>
                                            </span>
                                        </div>
                                        <!-- plot -->

                                        <div class="plot plot-s" style=" left: 50.5%; top: 19.6%; ">
                                            <span class="node"></span>
                                            <span class="tooltip">
                                                <span class="tooltip__content">
                                                    <span class="location">Sweden</span>
                                                    <span class="company-names">Accenture Interactive</span>
                                                </span>
                                            </span>
                                        </div>
                                        <!-- plot -->
                                    </div>
                                    <!-- partners-plot-area -->
                                </div>
                            </div>
                            <div class="cb-hero__header">
                                <h1 class="cb-hero__title" style="color: #fff">
                                    Implementation Partners
                                </h1>
                                <p class="cb-hero__desc"  style="color: rgba(255,255,255, 0.8)">
                                    Need assistance integrating with Chargebee? Let one of our trusted partners help you while your engineers focus on improving your product.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- =========================================================================================
        Banner Part end 
        ========================================================================================== -->
        <section class="l-main__content partners-list-section">
            <!-- =============================================================================
            Contant one Start 
            ============================================================================== -->
            <div class="l-main__row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-push-2">
                            <ul id="implementation-partners" class="ca-implementation-partners-list">
                                <li class="partner" v-for="(partner, index) in partners" v-bind:key="index">
                                    <div class="ca-card">
                                        <a class="ca-hook" :href="partner.url" target="_blank">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <figure class="partner-imgwrap">
                                                        <img class="img-responsive" :src="partner.img.url" :alt="partner.name" :title="partner.name" :style="'max-width:'+partner.img.width+'px'">
                                                    </figure>
                                                </div>
                                                <div class="col-sm-7">
                                                    <div class="partner-info-wrap">
                                                        <div class="location-info">
                                                            <span class="ca-label">Location</span>
                                                            <span class="ca-info">{{partner.location}}</span>
                                                        </div>
                                                        <div class="languages-info">
                                                            <span class="ca-label">Preferred Languages</span>
                                                            <span class="ca-info">{{partner.language_stack}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a v-if="partner.contact.email" :href="'mailto:'+partner.contact.email" class="ca-contact-hook">
                                            <span class="ca-label">Contact:</span>
                                            <span>{{partner.contact.email}}</span>
                                        </a>

                                        <a v-if="partner.contact.url" :href="partner.contact.url" class="ca-contact-hook">
                                            <span class="ca-label">Contact:</span>
                                            <span>{{partner.contact.url}}</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- =============================================================================
            Contant one end 
            ============================================================================== -->
        </section>
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
    data: function() {
        return {
            partners: [{
                name: "Accenture Interactive",
                url: "https://www.accenture.com/se-en/",
                contact: {
                    url: "https://www.accenture.com/se-en/contact-us"
                },
                location: "Stockholm, Sweden",
                language_stack: "Java, Python, Angular.JS, Android, iOS, Ruby, .NET, CURL, and many more",
                img: {
                    url: "/static/website/version/images/partners/accenture.png" ,
                    width: 200
                }
            },
            {
                name: "xfive",
                url: "https://xfive.co",
                contact: {
                    url: "https://www.xfive.co/contact/"
                },
                location: "Kraków",
                language_stack: "Ruby on Rails, PHP, React, Vue, Angular, Ember",
                img: {
                    url: "/static/website/version/images/partners/xfive.png" ,
                    width: 110
                }
            },
            {
                name: "Crossroads Labs",
                url: "http://crossroadslabs.com/",
                contact: {
                    email: "hello@crossroadslabs.co"
                },
                location: "New York, San Francisco",
                language_stack: "Ruby on Rails, PHP, React, Vue, Angular, Ember",
                img: {
                    url: "/static/website/version/images/partners/crossroads_labs.png" ,
                    width: 200
                }
            },  
            {
                name: "wolox",
                url: "https://www.wolox.co",
                contact: {
                    email: "hello@wolox.co"
                },
                location: "San Francisco, Buenos Aires",
                language_stack: "React Native, Ruby on Rails, NodeJs, AngularJs, .NetCore, JAVA, Swift",
                img: {
                    url: "/static/website/version/images/partners/wolox.png",
                    width: 160
                }
            },                                        
            {
                name: "YLab",
                url: "http://ylab.co/",
                contact: {
                    email: "hello@ylab.co"
                },
                location: "San Francisco",
                language_stack: "CURL, PHP, Ruby on Rails",
                img: {
                    url: "/static/website/version/images/partners/ylab.png" ,
                    width: 85
                }
            },
            {
                name: "End Game",
                url: "http://www.end-game.com/",
                contact: {
                    url: "http://www.end-game.com/#contact-us"
                },
                location: "Wellington",
                language_stack: ".NET and NodeJs",
                img: {
                    url: "/static/website/version/images/partners/endgame.png" ,
                    width: 150
                }
            },
            {
                name: "End Game",
                url: "https://www.aspiresys.com/",
                contact: {
                    email: "info@aspiresys.com"
                },
                location: "Dallas, Delhi, Singapore, London",                          
                language_stack: "Java, .Net, PHP, Magento, MySQL",
                img: {
                    url: "/static/website/version/images/partners/aspiresys.png" ,
                    width: 150
                }
            },
            {
                name: "End Game",
                url: "https://www.netsolutions.com",
                contact: {
                    url: "https://www.netsolutions.com/contact-us"
                },
                location: "London, Toronto, Chandigarh",
                language_stack: ".NET, Python, Xamarin, Angular.JS",
                img: {
                    url: "/static/website/version/images/partners/net_solutions_logo_black.svg" ,
                    width: 150
                }
            },
            {
                name: "Altimetrik",
                url: "http://www.altimetrik.com/",
                contact: {
                    email: "Info@altimetrik.com"
                },
                location: "Detroit-USA, Bengaluru-India, Montevideo-Uruguay",
                language_stack: "Salesforce, Java, NodeJS, AngularJS, ReactJS, Android, iOS, AngularJS, ReactNative, Python, Ruby",
                img: {
                    url: "/static/website/version/images/partners/altimetrik.jpg" ,
                    width: 150
                }
            }]
        }
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

