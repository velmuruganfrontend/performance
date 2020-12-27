<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="case_study.fields.seoTitle"
            :cb-desc="case_study.fields.seoDescription"
            :cb-url="'/customers/'+case_study.fields.slug+'/'"
            :cb-image="''"
            :cb-style="'/static/website/version/styles/case-study.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="case_study_no_index"
            :cb-region-list="''"
            :cb-region-url="''"
			:disable-bootstrap-css="true"
			:disable-bootstrap-js="true" />
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
        <div class="cs-main">
            <div class="cs-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="cs-hero">
                                <div class="cs-hero__container">
                                    <div class="cs-hero__row">
                                        <div v-if="!case_study.fields.heroBannerVideo" class="cs-hero__img" :style="'background-image: url('+case_study.fields.heroBannerImage.fields.file.url+'); background-position: center top;'">
                                            <div class="cs-hero__desc--banner" v-if="case_study.fields.heroBannerDescription" v-html="case_study.fields.heroBannerDescription"></div>
                                        </div>
                                        <div v-else class="cs-hero__img cs-hero__img--alt" :style="'background-image: url(https://img.youtube.com/vi/'+case_study.fields.heroBannerVideo.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop()+'/maxresdefault.jpg); background-position: center top;'">
                                            <iframe frameborder="0" height="100%" width="100%" :src="case_study.fields.heroBannerVideo" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                                        </div>
                                    </div>
                                    <div class="cs-hero__row">
                                        <div class="cs-hero__logo">
                                            <img width="120" class="img-responsive" :src="case_study.fields.companyLogo.fields.file.url" alt="" />
                                        </div>
                                        <h2 class="cs-hero__label" v-if="case_study.fields.heroTag" v-html="case_study.fields.heroTag"></h2>
                                        <h1 class="cs-hero__title" v-html="case_study.fields.heroTitle"></h1>
                                        <div class="cs-hero__desc" v-html="case_study.fields.heroDescription"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cs-row" v-if="case_study.fields.highlightOne || case_study.fields.highlightTwo || case_study.fields.highlightThree">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="cs-highlights">
                                <div class="cs-highlights__container">
                                    <div class="cs-highlights__row" v-if="case_study.fields.highlightOne">
                                        <div class="cs-highlight" v-html="case_study.fields.highlightOne"></div>
                                    </div>
                                    <div class="cs-highlights__row" v-if="case_study.fields.highlightTwo">
                                        <div class="cs-highlight" v-html="case_study.fields.highlightTwo"></div>
                                    </div>
                                    <div class="cs-highlights__row" v-if="case_study.fields.highlightThree">
                                        <div class="cs-highlight" v-html="case_study.fields.highlightThree"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cs-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="cs-info">
                                <div class="cs-info__container">
                                    <div class="cs-info__row">
                                        <div class="cs-info__before" v-html="case_study_before_chargebee"></div>
                                    </div>
                                    <div class="cs-info__row"></div>
                                    <div class="cs-info__row">
                                        <div class="cs-info__after" v-html="case_study_after_chargebee"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cs-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="cs-demo">
                                <div class="cs-demo__container">
                                    <div class="cs-demo__title">
                                        Still unsure? Step Inside and See <br class="hidden-xs" /> What The Feature Looks Like.
                                    </div>
                                    <div class="cs-actions">
                                        <a href="/schedule-a-demo/" class="cs-action">Schedule a demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cs-row cs-row--bb0">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="cs-row--bb"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cs-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="cs-article">
                                <div class="cs-article__container">
                                    <div class="cs-article__main">
                                        <div class="content" v-html="case_study_main_content"></div>
                                    </div>
                                    <div class="cs-article__aside">
                                        <div class="content" v-html="case_study_address_and_tech_stack"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cs-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="cs-testimonial">
                                <div class="cs-testimonial__container">
                                    <div class="cs-testimonial__row">
                                        <div class="cs-testimonial__img" :style="'background-image: url('+case_study.fields.testimonialImage.fields.file.url+'); background-position: center top;'"></div>
                                    </div>
                                    <div class="cs-testimonial__row">
                                        <div class="cs-testimonial__desc" v-html="case_study.fields.testimonialDescription"></div>
                                        <div class="cs-testimonial__author" v-html="case_study.fields.testimonialAuthor"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cs-row" v-if="case_study.fields.moreCaseStudies">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="cs-medias">
                                <div class="cs-media__title">
                                    More Case Studies
                                </div>
                                <div class="cs-media">
                                    <div class="cs-media__container" v-for="(item, index) in case_study.fields.moreCaseStudies" :key="index">
                                        <a :href="'/customers/'+item.fields.slug+'/'">
                                            <div v-if="!item.fields.heroBannerVideo" class="cs-media__img" :style="'background-image: url('+item.fields.heroBannerImage.fields.file.url+'); background-position: center top;'"></div>
                                            <div v-else class="cs-media__img" :style="'background-image: url(https://img.youtube.com/vi/'+item.fields.heroBannerVideo.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop()+'/maxresdefault.jpg); background-position: center top;'"></div>
                                            <div class="cs-media__logo">
                                                <img width="120" :src="item.fields.companyLogo.fields.file.url" alt="" />
                                            </div>
                                            <div class="cs-media__desc" v-html="item.fields.heroDescription"></div>
                                            <div class="cs-link--alt">Learn More</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
					'content_type': env.CTF_CASESTUDIES_ID,
					'fields.slug': params.slug
				})
			]).then(([caseStudies]) => {
                const options = {
					renderNode: {
						[BLOCKS.EMBEDDED_ASSET]: (node) => {
							return `<img class="img-responsive" src="${node.data.target.fields.file.url}"/>`
						}
                    }
                }
				return {
					case_study: caseStudies.items[0],
					case_study_no_index: caseStudies.items[0].fields.seoNoIndex ? caseStudies.items[0].fields.seoNoIndex : false,
                    case_study_before_chargebee: documentToHtmlString(caseStudies.items[0].fields.beforeChargebee),
                    case_study_after_chargebee: documentToHtmlString(caseStudies.items[0].fields.afterChargebee),
                    case_study_main_content: documentToHtmlString(caseStudies.items[0].fields.mainContent, options),
                    case_study_address_and_tech_stack: documentToHtmlString(caseStudies.items[0].fields.addressAndTechStack)
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
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
