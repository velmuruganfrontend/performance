<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="integration.fields.seoTitle"
            :cb-desc="integration.fields.seoDescription"
            :cb-url="'/integrations/'+integration.fields.slug+'/'"
            :cb-image="''"
            :cb-style="'/static/website/version/styles/integrations.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="integration_no_index"
            :cb-region-list="''"
            :cb-region-url="''"
			:disable-bootstrap-css="true" />
        <app-header :hasInvert="false" />
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Body
        ==================================================================== -->
		<!-- ===============================================================
		Start: Hero
		================================================================ -->
        <div class="in-main">
            <div class="in-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 col-md-offset-0 col-md-11">
                            <ul class="in-breadcrumb">
                                <li><a href="/integrations/">Integration</a></li>
                                <li>/</li>
                                <li>{{ integration.fields.integrationName }}</li>
                            </ul>
                            <div class="in-article">
                                <div class="in-article__aside visible-md visible-lg">
                                    <div class="in-article__logo">
                                        <img :src="integration.fields.logo.fields.file.url" alt="" />
                                    </div>
                                    <div class="in-article__desc" v-html="integration.fields.asideDescription"></div>
                                    <div class="in-actions">
                                        <a href="/schedule-a-demo/" class="in-action">Schedule a demo</a>
                                    </div>
                                    <div class="in-navs" v-html="integration_aside_menus"></div>
                                </div>
                                <div class="in-article__main">
                                    <h1 class="in-article__title" v-html="integration.fields.title"></h1>
                                    <div class="in-card">
                                        <img width="80" src="/static/resources/brand/chargebee-icon-black.svg" alt="" />
                                        <span>+</span>
                                        <img width="80" :src="integration.fields.favicon.fields.file.url" alt="" />
                                    </div>
                                    <div class="in-article__content" v-html="integration_main_content"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ===================================================================
            Start: Website Affix
            ==================================================================== -->
            <div id='before-affix'></div><!-- leave this empty -->
            <!-- ===================================================================
            Start: Affix
            ==================================================================== -->
            <div class="in-row pt-0">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 col-md-offset-0 col-md-12 col-lg-11">
                            <div class="in-grid">
                                <div class="in-grid__column">
                                    <!-- ===================================================================
                                    Start: Affix Left
                                    ==================================================================== -->
                                    <div class="in-affix visible-md visible-lg" data-affix-after='#before-affix' id="ca-nav-affix">
                                        <ul class="in-affix__list nav">
                                            <li class="in-affix__item">
                                                <a href="#one">
                                                    {{ integration.fields.tabOneTitle }}
                                                </a>
                                            </li>
                                            <li class="in-affix__item">
                                                <a href="#two">
                                                    {{ integration.fields.tabTwoTitle }}
                                                </a>
                                            </li>
                                            <li class="in-affix__item" v-if="integration.fields.tabThreeTitle">
                                                <a href="#three">
                                                    {{ integration.fields.tabThreeTitle }}
                                                </a>
                                            </li>
                                            <li class="in-affix__item" v-if="integration.fields.tabFourTitle">
                                                <a href="#four">
                                                    {{ integration.fields.tabFourTitle }}
                                                </a>
                                            </li>
                                            <li class="in-affix__item" v-if="integration.fields.tabFiveTitle">
                                                <a href="#five">
                                                    {{ integration.fields.tabFiveTitle }}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- ===================================================================
                                    End: Affix Left
                                    ==================================================================== -->
                                </div>
                                <div class="in-grid__column">
                                    <!-- ===================================================================
                                    Start: Affix Right
                                    ==================================================================== -->
                                    <div class="in-affix__body">
                                        <!-- ===================================================================
                                        Start: Content 1
                                        ==================================================================== -->
                                        <div class="in-affix__content" id="one">
                                            <h2 class="visible-xs visible-sm">{{ integration.fields.tabOneTitle }}</h2>
                                            <div v-html="integration_tab_one_content"></div>
                                        </div>
                                        <!-- ===================================================================
                                        End: Content 1
                                        ==================================================================== -->
                                        <!-- ===================================================================
                                        Start: Content 2
                                        ==================================================================== -->
                                        <div class="in-affix__content" id="two">
                                            <h2 class="visible-xs visible-sm">{{ integration.fields.tabTwoTitle }}</h2>
                                            <div v-html="integration_tab_two_content"></div>
                                        </div>
                                        <!-- ===================================================================
                                        End: Content 2
                                        ==================================================================== -->
                                        <!-- ===================================================================
                                        Start: Content 3
                                        ==================================================================== -->
                                        <div class="in-affix__content" v-if="integration.fields.tabThreeTitle" id="three">
                                            <h2 class="visible-xs visible-sm">{{ integration.fields.tabThreeTitle }}</h2>
                                            <div v-html="integration_tab_three_content"></div>
                                        </div>
                                        <!-- ===================================================================
                                        End: Content 3
                                        ==================================================================== -->
                                        <!-- ===================================================================
                                        Start: Content 4
                                        ==================================================================== -->
                                        <div class="in-affix__content" v-if="integration.fields.tabFourTitle" id="four">
                                            <h2 class="visible-xs visible-sm">{{ integration.fields.tabFourTitle }}</h2>
                                            <div v-html="integration_tab_four_content"></div>
                                        </div>
                                        <!-- ===================================================================
                                        End: Content 4
                                        ==================================================================== -->
                                        <!-- ===================================================================
                                        Start: Content 5
                                        ==================================================================== -->
                                        <div class="in-affix__content" v-if="integration.fields.tabFiveTitle" id="five">
                                            <h2 class="visible-xs visible-sm">{{ integration.fields.tabFiveTitle }}</h2>
                                            <div v-html="integration_tab_five_content"></div>
                                        </div>
                                        <!-- ===================================================================
                                        End: Content 5
                                        ==================================================================== -->
                                    </div>
                                    <!-- ===================================================================
                                    Start: Affix Right
                                    ==================================================================== -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ===================================================================
            End: Affix
            ==================================================================== -->

            <!-- ===================================================================
            Start: FAQ
            ==================================================================== -->
            <div class="in-row in-footer" v-if="integration.fields.faq">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                            <!-- =============================================================================
                            Testimonial and Faq Start 
                            ============================================================================== -->
                            <!-- =====================================================
                            FAQ Start 
                            ====================================================== -->
                            <div class="in-panels">
                                <div class="in-panels__title">
                                    Frequently Asked Questions
                                </div>
                                <div class="in-panels__container">
                                    <!-- =============================================
                                    Panel Start 
                                    ============================================== -->
                                    <div class="in-panel" v-for="(item, index) in integration.fields.faq" :key="index" data-panel="true">
                                        <div class="in-panel__bg"></div>
                                        <div class="in-panel__title" v-html="item.Question"></div>
                                        <div class="in-panel__desc" data-panel-desc="true" v-html="item.Answer"></div>
                                    </div>
                                    <!-- =============================================
                                    Panel End 
                                    ============================================== -->
                                    <!-- =============================================
                                    Panel Start 
                                    ============================================== -->
                                    <div class="in-panel" style="padding: 0;">
                                        <a href="/faq/" class="in-link in-panel__link">
                                            Read more
                                        </a>
                                    </div>
                                    <!-- =============================================
                                    Panel End 
                                    ============================================== -->
                                </div>
                            </div>
                            <!-- =====================================================
                            FAQ End 
                            ====================================================== -->
                            <!-- =============================================================================
                            Testimonial and Faq End 
                            ============================================================================== -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- ===================================================================
            End: FAQ
            ==================================================================== -->
		</div>
        <!-- ===================================================================
        End: Website Body
        ==================================================================== -->
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


    import {createClient} from '~/plugins/contentful.js';
    import { BLOCKS, MARKS } from '@contentful/rich-text-types';
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

    const client = createClient()

    export default {
		asyncData ({ env, params }) {
			return Promise.all([
				client.getEntries({
					'content_type': env.CTF_INTEGRATIONS_ID,
					'fields.slug': params.slug
				})
			]).then(([integrations]) => {
                const options = {
					renderNode: {
						[BLOCKS.EMBEDDED_ASSET]: (node) => {
							return `<img class="img-responsive" src="${node.data.target.fields.file.url}"/>`
						}
                    }
                }
				return {
					integration: integrations.items[0],
                    integration_no_index: integrations.items[0].fields.seoNoIndex ? integrations.items[0].fields.seoNoIndex : false,
                    integration_aside_menus: documentToHtmlString(integrations.items[0].fields.asideMenus),
                    integration_main_content: documentToHtmlString(integrations.items[0].fields.mainContent, options),
                    integration_tab_one_content: documentToHtmlString(integrations.items[0].fields.tabOneContent, options),
                    integration_tab_two_content: documentToHtmlString(integrations.items[0].fields.tabTwoContent, options),
                    integration_tab_three_content: documentToHtmlString(integrations.items[0].fields.tabThreeContent, options),
                    integration_tab_four_content: documentToHtmlString(integrations.items[0].fields.tabFourContent, options),
                    integration_tab_five_content: documentToHtmlString(integrations.items[0].fields.tabFiveContent, options)
				}
			}).catch(console.error)
		},
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
			'app-footer': AppFooter
        },
        data() {
            return{
            }
        },
        watch: {
        },
        methods: {
        },
        created() {
        },
        mounted() {
            window.addEventListener("load", (event) => {
                //For Panel = FAQ list click
                $('[data-panel]').click(function() {
                    $(this).toggleClass('in-panel--active').siblings().removeClass('in-panel--active');
                });
                // Scrollspy
                $('body').scrollspy({ target: '#ca-nav-affix'});

                // Affix onclick to show the section
                $("#ca-nav-affix .in-affix__item a[href^='#']").on('click', function(e) {
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
                                    return (this.bottom = $('#cb-affix-footer').outerHeight(true) + $('.in-footer').outerHeight(true) + 90)
                                }
                            }
                        });
                    };

                    resizeFn();
                    $(window).resize(resizeFn);
                });
            })
        }
    }
</script>
<!-- ===========================================================================
End: Scripts
============================================================================ -->

<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css">
    #ch-js-header-cloned{
        display: none;
    }
    .affix { 
        top: 0;
        position: fixed;
    }
    .affix-bottom { 
        position: absolute; 
    }
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
