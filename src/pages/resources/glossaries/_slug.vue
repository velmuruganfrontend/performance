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
            :cb-title="glossary.fields.seoTitle" 
            :cb-desc="glossary.fields.seoDescription" 
            :cb-url="'/resources/glossaries/'+glossary.fields.slug+'/'" 
            :cb-image="glossaryOgImg"
            :cb-style="'/static/website/version/styles/glossaries.css'"
            :cb-head-script="''"
            :cb-body-script="'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js'"
            :cb-has-noindex="glossaryNoIndex" />
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
        <app-body>
			<div class="cg-row">
				<div class="container">
					<div class="row">
						<div class="col-md-3 col-lg-2 hidden-sm hidden-xs">
							<!-- ===================================================================
							Start: Affix or Left Nav
							==================================================================== -->
							<div class="cg-grid" data-affix-after='#before-affix'>
								<div class="cg-back text-right">
									<a href="/resources/glossaries/" class="cg-link">&larr; Glossaries</a>
								</div>
								<div class="cg-leftnav">
									<ul class="nav cg-leftnav__list">
										<li class="cg-leftnav__title">
											Further Reads
										</li>
										<li class="cg-leftnav__item" v-for="(categoryData, index) in categories" :key="index" :class="categoryData.fields.slug == glossary.fields.slug ? 'active': ''">
											<a :href="`/resources/glossaries/${categoryData.fields.slug}/`">
												{{ categoryData.fields.title.split("|")[1].trim() }}
											</a>
										</li>
									</ul>
								</div>
							</div>
							<!-- ===================================================================
							End: Affix or Left Nav
							==================================================================== -->
						</div>
						<div class="col-md-9 col-lg-10">
							<div class="cg-row--inner">
								<!-- ===================================================================
								Start: Intro or Hero
								==================================================================== -->
								<div class="row">
									<div class="col-sm-10 col-sm-offset-1 col-md-9 col-md-offset-2">
										<div class="cg-intro">
											<div class="cg-md-pull-2">
												<h2 class="cg-intro__label">
													{{ glossary.fields.category[0] }}
												</h2>
												<h1 class="cg-intro__title">
													<span>{{ glossary.fields.title.split("|")[0].trim() +" "+ glossary.fields.title.split("|")[1].trim() + glossary.fields.title.split("|")[2].trim() }}</span>
												</h1>
											</div>
											<div class="cg-intro__desc">
												{{ glossary.fields.description }}
											</div>
										</div>
									</div>
								</div>
								<!-- ===================================================================
								Start: Intro or Hero
								==================================================================== -->
							</div>
							<div class="row">
								<div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
									<div class="cg-row--inner">
										<!-- ===================================================================
										Start: Article
										==================================================================== -->
										<div class="cg-article" v-html="glossary_main_content"></div>
										<!-- ===================================================================
										End: Article
										==================================================================== -->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="cg-affix--stop">
				<div class="cg-row">
					<div class="container">
						<div class="row">
							<div class="col-sm-10 col-sm-offset-1">
								<!-- ===================================================================
								Start: Slider
								==================================================================== -->
								<div class="cg-sliders">
									<div class="cg-slider" id="cg-slider">
										<div class="cg-slider__item" v-for="(categoryData, index) in categories" :key="index">
											<a :href="`/resources/glossaries/${categoryData.fields.slug}/`" class="cg-slider__action">
												<div class="cg-slider__label">
													{{ categoryData.fields.title.split("|")[0].trim() }}
												</div>
												<div class="cg-slider__title">
													{{ categoryData.fields.title.split("|")[1].trim() + categoryData.fields.title.split("|")[2].trim() }}
												</div>
											</a>
										</div>
									</div>
									<div class="cg-action">
										<a href="/resources/" class="cg-link cg-link--icon">Head back to Resources homepage for more</a>
									</div>
								</div>
								<!-- ===================================================================
								End: Slider
								==================================================================== -->
							</div>
						</div>
					</div>
				</div>
				<div class="cg-row" v-if="glossary_footer_content">
					<div class="container">
						<div class="row">
							<div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
								<!-- ===================================================================
								Start: Subscription or Footer CTA
								==================================================================== -->
								<div class="cg-footer">
									<div v-html="glossary_footer_content"></div>
								</div>
								<!-- ===================================================================
								End: Subscription or Footer CTA
								==================================================================== -->
							</div>
						</div>
					</div>
				</div>
			</div>
        </app-body>
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
	import GlosseryBook from '~/components/glosseryBook.vue';

	import {createClient} from '~/plugins/contentful.js';
	import { BLOCKS, MARKS } from '@contentful/rich-text-types';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	const client = createClient()

    export default {
		asyncData ({ env, params }) {
			return Promise.all([
				client.getEntries({
					'content_type': env.CTF_GLOSSARIES_ID,
					'fields.slug': params.slug
				}),
				client.getEntries({
					'content_type': env.CTF_GLOSSARIES_ID,
					'fields.slug': params.slug
				})
				.then(categories => {
					return client.getEntries({
						'content_type': env.CTF_GLOSSARIES_ID,
						'fields.category[in]': categories.items[0].fields.category[0]
					});
				})
			]).then(([glossaries, categories]) => {
				const options = {
					renderNode: {
						[BLOCKS.EMBEDDED_ASSET]: (node) => {
							return `<img class="img-responsive" src="${node.data.target.fields.file.url}"/>`
						}
					},
					renderMark: {
						[MARKS.CODE]: text => {
							return `<div static class="cc-card" id="cc-card">
								<div static class="cc-card__container">
									<div static class="cc-card__main">
										<div static class="cc-card__header">
											<div static class="cc-card__title">
												The Ultimate Guide to Revenue Operations
											</div>
											<div static class="cc-card__desc">
												See how you can drive efficiency into your RevOps with our extensive guide.
											</div>
										</div>
										<div static class="cc-card__action">
											<a static href="/resources/guides/revenue-operations-saas-download/?ref=glossaries" class="cc-link">Download Guide</a>
										</div>
									</div>
								</div>
							</div>`
						}
					}
				}

				return {
					glossary: glossaries.items[0],
					glossaryOgImg: glossaries.items[0].fields.seoImage ? glossaries.items[0].fields.seoImage.fields.file.url : '',
					glossaryNoIndex: glossaries.items[0].fields.seoNoIndex ? glossaries.items[0].fields.seoNoIndex : false,
					glossary_main_content: documentToHtmlString(glossaries.items[0].fields.mainContent, options),
					glossary_footer_content: glossaries.items[0].fields.footerContent ? documentToHtmlString(glossaries.items[0].fields.footerContent) : '',
					categories: categories.items
				}
			}).catch(console.error)
		},
		components: {
			'app-meta': AppMeta,
			'app-header': AppHeader,
			'app-footer': AppFooter,
			'glossery-book': GlosseryBook
		},
		// jQuery methods/functions should be placed inside the methods
		methods: {},
		// jQuery interaction should be placed inside the mounted method
		mounted() {
			window.addEventListener('load', (event) => {
				$('#cg-slider').slick({
					centerMode: true,
					slidesToShow: 3,
					responsive: [
						{
							breakpoint: 1199,
							settings: {
								arrows: false,
								centerMode: true,
								slidesToShow: 2
							}
						},
						{
							breakpoint: 480,
							settings: {
								arrows: false,
								centerMode: true,
								slidesToShow: 1
							}
						}
					]
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
									return (this.bottom = $('#cb-affix-footer').outerHeight(true) + $('.cg-affix--stop').outerHeight(true) + 300)
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
End: Script Section
============================================================================ -->
<!-- ===========================================================================
Start: Style Section
============================================================================ -->
<style type="text/css">
	#ch-js-header{background-color: #fff;}
	.ch-js-header-cloned{display: none;}
	.affix-bottom { position: absolute; }
	.affix{ top: 0;}
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->