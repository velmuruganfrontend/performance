<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'Get Chargebee and Emerge Stronger from Covid-19'"
            :cb-desc="'Chargebee’s subscription management capabilities can help you retain customers, drive predictable cash flow and build long-lasting relationships.'"
            :cb-url="'/covid19-how-we-help/'"
            :cb-image="'/static/resources/og/corona/og-image.png'"
            :cb-style="'/static/website/version/styles/corona.css,https://use.typekit.net/hye2gik.css'"
            :cb-head-script="''"
            :cb-body-script="'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js'"
            :cb-has-noindex="false"/>
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Header
        ==================================================================== -->
        <app-header :hasInvert="true" />
        <!-- ===================================================================
        End: Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Body
        ==================================================================== -->
        <div class="co-body">
			<div class="co-row">
				<div class="co-hero">
					<div class="hidden-xs hidden-sm">
						<img src="/static/website/version/images/corona/hero-img.svg" class="co-body__img" />
						<div class="rain front-row"></div>
						<div class="rain back-row"></div>
					</div>
					<div class="container" style="z-index: 1;position: relative;">
						<div class="row">
							<div class="col-sm-10 col-sm-offset-1 col-md-6">
								<div class="co-hero__container">
									<h1 class="co-hero__title">
										In Times<br /> Such as Now,<br /> Survival = Growth
									</h1>
									<div class="co-hero__heading">
										"When disaster strikes, just say to yourself, ok, this was what Paul was talking about. What did he say to do? Oh, yeah. Don't give up."
									</div>
									<div class="co-hero__label">
										PAUL GRAHAM, HOW NOT TO DIE
									</div>
									<div class="co-hero__desc">
										<p>
											Back in 2007, right before the 2008 burst, Paul Graham noted this in one of his essays titled ‘How Not to Die’.
										</p>
										<p>
											And today, in the midst of these uncertain times, those words ring just as true as they did back then.
										</p>
										<p>
											While some of our 2020 revenue plans look bleaker than before, this is exactly the time to not give up. Double down on retention, find hotspots for growth. 
										</p>
										<p>
											At Chargebee, we don’t have all the answers. But what we do have are a very particular set of capabilities, capabilities we perfected over a decade working with 10,000+ SaaS businesses, capabilities that make us an ark for subscription businesses in times like these.
										</p>
										<p>
											And here’s how we can help.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="co-row co-row--custom">
				<div class="co-article">
					<div class="container">
						<div class="row">
							<div class="col-sm-8 col-sm-offset-1 col-md-10 col-sm-offset-1 col-lg-8 col-lg-offset-2">
								<div class="co-article__container">
									<div class="co-tab" cb-vtab>
										<div class="co-tab__container" cb-vtab-container>
											<!-- ===============================================================
											Start: Tab Right Content
											================================================================ -->
											<div class="co-tab__select hidden-md hidden-lg">
												<select cb-vtab-selectbox>
													<option value="one">Survive</option> 
													<option value="two">Grow</option> 
													<option value="three">Streamline</option>
													<option value="four">Relax</option>
												</select>
											</div>

											<div class="co-tab__aside" cb-vtab-aside>
												<span cb-vtab-item-bg></span>
												<div class="co-tab__items" cb-vtab-items>
													<div class="co-tab__item" cb-vtab-item="one" cb-vtab-item-selected>
														<span cb-vtab-txt>Survive</span>
													</div>
													<div class="co-tab__item" cb-vtab-item="two">
														<span cb-vtab-txt>Grow</span>
													</div>
													<div class="co-tab__item" cb-vtab-item="three">
														<span cb-vtab-txt>Streamline</span>
													</div>
													<div class="co-tab__item" cb-vtab-item="four">
														<span cb-vtab-txt>Relax</span>
													</div>
												</div>
											</div><!--aside--> 
											<div class="co-tab__content" cb-vtab-contents>
												<div cb-vtab-content="one">
													<div class="co-tab__title">
														Spend discretion is at an all-time high. Understand your customer’s cash constraints and meet them halfway. Build a relationship that survives and thrives beyond this situation.
													</div>
													<div class="co-tab__desc">
														<ul>
															<li>Allow payments to be deferred by a time period and let them stay with you</li>
															<li>Give credit notes or gift a subscription to the truly struggling</li>
															<li>Let subscribers pause their subscription instead of canceling</li>
															<li>Run discount/coupon campaigns to give sales a boost</li>
															<li>Transition customers who pay by offline payments to online by offering preferred payment option</li>
														</ul>
													</div>
												</div><!--One-->

												<div cb-vtab-content="two">
													<div class="co-tab__title">
														<p>
															While the economy has indeed slowed down in general, there's been a redistribution of available demand. Some industries are actually booming. Make hay wherever the sun shines; even pass off the benefits to your most hit segments.
														</p>
													</div>
													<div class="co-tab__desc">
														<ul>
															<li>Find your growth hotspots with comprehensive subscription analytics </li>
															<li>Move across market segments with out-of-the-box support for low-touch and high-touch sales workflows</li>
															<li>Manage upsells, with support for recurring addons and one-time purchases </li>
															<li>Expand across geographies with support for local taxation, compliances, currencies and language</li>
														</ul>
													</div>
												</div><!--Two-->

												<div cb-vtab-content="three">
													<div class="co-tab__title">
														Nature’s way of surviving hard conditions is through great efficiency - hibernation. It’s a great time to take stock of how efficiently you spend time, and effort, just as much as budget.
													</div>
													<div class="co-tab__desc">
														<ul>
															<li>Manage your entire quote-to-cash remotely - from CRM to Bank and Books, with a brilliant Salesforce integration</li>
															<li>Save your accounting team all that manual effort, and gift them 'one-click reconciliation' and seamless integration with accounting systems</li>
															<li>Reduce the load on your support team and improve customer experience with the self-service customer portal</li>
															<li>Maximize collections and minimize gateway fees with intelligent dunning that retries payment at the optimal time</li>
														</ul>
													</div>
												</div><!--Three-->

												<div cb-vtab-content="four">
													<div class="co-tab__title">
														We're a business, but also a collective of close to 400 people. And we're here for you.
													</div>
													<div class="co-tab__desc">
														<ul>
															<li>Migrate your billing data, even while WFH, with a completely guided experience through our customer champions</li>
															<li>24x7 support over email</li>
														</ul>
													</div>
												</div><!--Three-->
											</div><!--Content-->
										</div>
										<!-- ===============================================================
										End: Tab Right Content
										================================================================ -->
									</div>
									<div class="co-action">
										<a href="/schedule-a-demo/?ref=covid-lp" class="co-btn ch-nav__arrow ch-nav__arrow--white">Let's Discuss This</a>
									</div>
									<div class="co-slider co-slider--customers hidden-xs hidden-sm">
										<div class="co-slider__figure">
											<section class="customer-logos customer-logos__one slider">
												<div class="slide">
													<div class="doodle_bg"></div>
												</div>
												<div class="slide">
													<div class="envoy_bg"></div>
												</div>
												<div class="slide">
													<div class="freedom_bg"></div>
												</div>
												<div class="slide">
													<div class="freshworks_blck_bg"></div>
												</div>
												<div class="slide">
													<div class="knewton_logo_bg"></div>
												</div>
												<div class="slide">
													<div class="okta_bg"></div>
												</div>
												<div class="slide">
													<div class="percona_bg"></div>
												</div>
												<div class="slide">
													<div class="study_bg"></div>
												</div>
											</section>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="co-row__bg"></div>
			</div>
			<div class="co-row">
				<div class="co-media">
					<div class="container">
						<div class="row">
							<div class="col-sm-6 col-sm-offset-1 col-md-5">
								<div class="co-media__title">
									SaaS in a COVID-19 World
								</div>
								<div class="co-media__desc">
									<p>None of this changes the fact that the immediate future looks as hard to predict as weather, and there's a lot to get adjusted to.</p>
									<p>While we all battle these uncertainties, it's more important than ever to exchange thoughts, perhaps, potential answers.</p>
									<p>We're sharing ours and of those we look upto, here:</p>
								</div>
							</div>
							<div class="col-sm-5 col-sm-offset-0 col-md-5 col-md-offset-0 col-lg-5 col-lg-offset-0">
								<a target="_blank" href="https://fast.wistia.net/embed/channel/n6w2nzsi67?wchannelid=n6w2nzsi67&wvideoid=whholgamzr" class="co-media__video">
									<img alt="" class="co-media__img img-responsive" src="https://fast.wistia.net/embed/medias/whholgamzr/thumbnail-640.jpg" style="height: 100%; object-fit: cover; width: 100%;">
									<span class="co-media__overlay"></span>
									<span class="co-media__play"></span>
								</a>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-10 col-sm-offset-1">
								<ul class="co-list">
									<li class="co-list__item">
										<a target="_blank" href="https://fast.wistia.net/embed/channel/n6w2nzsi67?wchannelid=n6w2nzsi67&wvideoid=1vmu3wbzun" class="co-media__video">
											<img alt="" class="co-media__img img-responsive" src="https://fast.wistia.net/embed/medias/1vmu3wbzun/thumbnail-640.jpg" style="height: 100%; object-fit: cover; width: 100%;">
											<span class="co-media__overlay"></span>
											<span class="co-media__play"></span>
										</a>
									</li>
									<li class="co-list__item">
										<a target="_blank" href="https://fast.wistia.net/embed/channel/n6w2nzsi67?wchannelid=n6w2nzsi67&wvideoid=oht9j6jzt1" class="co-media__video">
											<img alt="" class="co-media__img img-responsive" src="https://fast.wistia.net/embed/medias/oht9j6jzt1/thumbnail-640.jpg" style="height: 100%; object-fit: cover; width: 100%;">
											<span class="co-media__overlay"></span>
											<span class="co-media__play"></span>
										</a>
									</li>
									<li class="co-list__item">
										<a target="_blank" href="https://fast.wistia.net/embed/channel/n6w2nzsi67?wchannelid=n6w2nzsi67&wvideoid=ql8qlngcbr" class="co-media__video">
											<img alt="" class="co-media__img img-responsive" src="https://fast.wistia.net/embed/medias/ql8qlngcbr/thumbnail-640.jpg" style="height: 100%; object-fit: cover; width: 100%;">
											<span class="co-media__overlay"></span>
											<span class="co-media__play"></span>
										</a>
									</li>
								</ul>
								<div class="co-action">
									<a href="/saas-in-covid-19/" class="co-btn ch-nav__arrow ch-nav__arrow--white">Explore Now</a>
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

	export default {
		components: {
			'app-meta': AppMeta,
			'app-header': AppHeader,
			'app-footer': AppFooter
		},
        mounted() {

			var makeItRain = function() {
				//clear out everything
				$('.rain').empty();

				var increment = 0;
				var drops = "";
				var backDrops = "";

				while (increment < 100) {
					//couple random numbers to use for various randomizations
					//random number between 98 and 1
					var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
					//random number between 5 and 2
					var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
					//increment
					increment += randoFiver;
					//add in a new raindrop with various randomizations to certain CSS properties
					drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
					backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
				}

				$('.rain.front-row').append(drops);
				$('.rain.back-row').append(backDrops);
			}
			makeItRain();
			
			$('.customer-logos__one').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
				arrows: false,
				dots: false,
				speed: 2000,
				pauseOnHover: false,
				responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 3
					}
				}, {
					breakpoint: 520,
					settings: {
						slidesToShow: 2
					}
				}]
			});
		}
	}
</script>
<!-- ===========================================================================
End: Scripts
============================================================================ -->
