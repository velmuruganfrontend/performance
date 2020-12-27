<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta
            :cb-title="'Subscription Management & Recurring Billing Software | Chargebee'"
            :cb-desc="'Chargebee is the leading subscription billing software powering end-to-end recurring billing, subscription management & auto invoicing for 2000+ SaaS businesses'"
            :cb-url="'/'"
            :cb-image="''"
            :cb-style="'/static/website/version/styles/homev3.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false"
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
        <div class="l-main">
			<section class="l-row l-row--hero">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="cj-hero">
								<div class="cj-hero__header cj-hero__header--hide text-center">
									<a class="cj-notification" href="/revops-intervention/?ref=HeroBanner" >
										<span class="cj-notification__icon"> 
											<!-- <img src="/static/website/version/images/home/lemon/notification-bell.svg" alt="Billing Analytics Chargebee" width="22" class="img-responsive"> -->
											<svg width="22" height="21">
												<use xlink:href="#notification"></use>
											</svg>
										</span>
										<span class="cj-notification__desc">
											Virtual Summit for Revenue Leaders: The RevOps Intervention. Register now
										</span>
										<span class="cj-link cj-link--icon"></span>
									</a>
								</div>
								<div class="cj-hero__body">
									<h1 class="cj-hero__title">
										<span class="cj-font__color--primary">Subscription Billing & Revenue Operations</span> <br class="visible-md visible-lg" /><span>for Fast-growth B2B SaaS</span>
									</h1>
									<div class="cj-hero__desc">
										Get the operational sophistication to achieve, sustain, <br class="visible-md visible-lg" />and scale recurring revenue.
									</div>
									<!-- <div class="cj-form"></div> -->
									<div class="cj-hero__actions">
										<div class="cj-hero__action">
											<a href="/schedule-a-demo/?ref=heroCTA" class="cj-btn cj-btn--purple">Schedule a Demo</a>
										</div>
										<div class="cj-hero__action">
											<a href="/trial-signup/?ref=heroCTA" class="cj-btn cj-btn--ghost">Sign up for free</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="l-row l-row--nopad">
				<div class="container">
					<div class="col-sm-12">
						<div class="cj-hero">
							<div class="cj-hero__footer">
								<!-- <figure class="cj-hero__figure visible-xs visible-sm">
									<img data-src="/static/website/version/images/home/lemon/home-banner-mobile.svg" style="margin-left: auto;margin-right: auto;" alt="Billing Analytics Chargebee" class="img-responsive">
								</figure> -->
								<figure class="cj-hero__figure hidden-xs hidden-sm">
									<div id="heroAnimation"></div>
								</figure>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- ===============================================================
			End: Hero
			================================================================ -->
			<!-- ===============================================================
			Start: Customers
			================================================================ -->
			<section class="l-row l-row--nopad">
				<div class="container">
					<div class="row">
						<div class="col-sm-10 col-sm-offset-1">
							<div class="cj-slider cj-slider--customers">
								<div class="cj-slider__content">
									Thousands of Scaling SaaS Businesses Love Us
								</div>
								<div class="cj-slider__figure">
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
											<div class="freshworks_bg"></div>
										</div>
										<div class="slide">
											<div class="knewton_bg"></div>
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
			</section>
			<!-- ===============================================================
			End: Customers
			================================================================ -->
			<!-- ===============================================================
			Start: Article
			================================================================ -->
			<section class="l-row">
				<div class="container">
					<div class="row">
						<div class="col-sm-8 col-sm-offset-2 col-md-12 col-md-offset-0">
							<div class="cj-article" with_in_this_section>
								<div class="row">
									<div class="col-md-6 col-lg-5 col-lg-offset-1">
										<div class="cj-article__header">
											<div class="cj-article__label">
												No more spreadsheet errors
											</div>
										</div>
										<div class="cj-article__body">
											<h2 class="cj-article__title">
												Automate Recurring Billing
											</h2>
											<div move_here></div>
											<div class="cj-article__desc">
												Scale your SaaS through 480+ recurring billing scenarios that automate who you bill, when, and how. No humans, no spreadsheets, no missed payments!
											</div>
										</div>
										<div class="cj-article__footer">
											<ul class="cj-article__list">
												<li class="cj-article__item revealOnScroll" data-animate='fadeInUp' style="animation-delay: .2s">
													Billing Schedules
												</li>
												<li class="cj-article__item revealOnScroll" data-animate='fadeInUp' style="animation-delay: .4s">
													Proration & Invoicing
												</li>
												<li class="cj-article__item revealOnScroll" data-animate='fadeInUp' style="animation-delay: .6s">
													Tax management
												</li>
												<li class="cj-article__item revealOnScroll" data-animate='fadeInUp' style="animation-delay: .8s">
													Payment Methods
												</li>
											</ul>
											<div class="cj-article__actions">
												<a class="cj-article__link cj-link--icon" href="/recurring-billing-invoicing/">
													Learn more
												</a>
											</div>
										</div>
									</div>
									<div class="col-md-6 col-lg-6"> 
										<div move_this>
											<figure class="cj-article__figure">
												<img data-src="/static/website/version/images/home/lemon/recurring-billing-graphic.svg" alt="Give marketing automation a boost" class="img-responsive"/>
											</figure>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- ===============================================================
			End: Article
			================================================================ -->
			<!-- ===============================================================
			Start: Article
			================================================================ -->
			<section class="l-row">
				<div class="container">
					<div class="row">
						<div class="col-sm-8 col-sm-offset-2 col-md-12 col-md-offset-0">
							<div class="cj-article" with_in_this_section>
								<div class="row">
									<div class="col-md-6 col-lg-6">
										<div move_this>
											<figure class="cj-article__figure">
												<img data-src="/static/website/version/images/home/lemon/subscription-graphic.svg" alt="Give marketing automation a boost" class="img-responsive"/>
											</figure>
										</div>
									</div>
									<div class="col-md-6 col-lg-5 col-lg-offset-1">
										<div class="cj-article__header">
											<div class="cj-article__label">
												No more developer dependency
											</div>
										</div>
										<div class="cj-article__body">
											<h2 class="cj-article__title">
												Smarter Subscription Management
											</h2>
											<div move_here></div>
											<div class="cj-article__desc">
												Experiment rapidly with pricing structures, product catalogs, and subscription lifecycles with a business-user-first experience.
											</div>
										</div>
										<div class="cj-article__footer">
											<ul class="cj-article__list">
												<li class="cj-article__item revealOnScroll" data-animate='fadeInUp' style="animation-delay: .2s">
													Price modeling
												</li>
												<li class="cj-article__item revealOnScroll" data-animate='fadeInUp' style="animation-delay: .4s">
													Product Catalog
												</li>
												<li class="cj-article__item revealOnScroll" data-animate='fadeInUp' style="animation-delay: .6s">
													Trial management
												</li>
												<li class="cj-article__item revealOnScroll" data-animate='fadeInUp' style="animation-delay: .8s">
													Lifecycle automation
												</li>
											</ul>
											<div class="cj-article__actions">
												<a class="cj-article__link cj-link--icon" href="/subscription-management/">
													Learn more
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- ===============================================================
			End: Article
			================================================================ -->
			<!-- ===============================================================
			Start: Article
			================================================================ -->
			<section class="l-row">
				<div class="container">
					<div class="row">
						<div class="col-sm-8 col-sm-offset-2 col-md-12 col-md-offset-0">
							<div class="cj-article" with_in_this_section>
								<div class="row">
									<div class="col-md-6 col-lg-5 col-lg-offset-1">
										<div class="cj-article__header">
											<div class="cj-article__label">
												No more lost opportunities
											</div>
										</div>
										<div class="cj-article__body">
											<h2 class="cj-article__title">
												Streamline Revenue Operations
											</h2>
											<div move_here></div>
											<div class="cj-article__desc">
												Plug revenue leaks by aligning GTM & Finance. Uncover growth opportunities across processes, geographies, and business models. 
											</div>
										</div>
										<div class="cj-article__footer">
											<ul class="cj-article__list">
												<li class="cj-article__item revealOnScroll" data-animate='fadeInUp' style="animation-delay: .2s">
													SaaS Analytics
												</li>
												<li class="cj-article__item revealOnScroll" data-animate='fadeInUp' style="animation-delay: .4s">
													Quote-to-cash
												</li>
												<li class="cj-article__item revealOnScroll" data-animate='fadeInUp' style="animation-delay: .6s">
													Order-to-revenue
												</li>
												<li class="cj-article__item revealOnScroll" data-animate='fadeInUp' style="animation-delay: .8s">
													Revenue Recognition
												</li>
											</ul>
											<div class="cj-article__actions">
												<a class="cj-article__link cj-link--icon" href="/revenue-operations/">
													Learn more
												</a>
											</div>
										</div>
									</div>
									<div class="col-md-6 col-lg-6">
										<div move_this>
											<figure class="cj-article__figure">
												<img data-src="/static/website/version/images/home/lemon/revenue-operations-graphic.svg" alt="Give marketing automation a boost" class="img-responsive"/>
											</figure>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- ===============================================================
			End: Article
			================================================================ -->
			<!-- ===============================================================
			Start: Article
			================================================================ -->
			<section class="l-row l-row--article">
				<div class="cj-article__bg--top"></div>
				<div class="cj-article__bg--bottom"></div>
				<div class="container">
					<div class="row">
						<div class="col-sm-10 col-sm-offset-1">
							<div class="cj-article cj-article--white" style="margin-top: 0;">
								<div class="cj-article__header">
									<div class="cj-article__title cj-article__title--big">
										Works With Your <br class="visible-md visible-lg" />Revenue Management Stack
									</div>
								</div>
								<div class="cj-article__body">
									<div class="cj-article__desc" style="max-width: none;">
										Managing sales, payments, customer experience or your books: <br />if it affects your revenue cycle, Chargebee works with it.
									</div>
								</div>
								<div class="cj-article__footer">
									<figure class="cj-article__figure">

										<img data-src="/static/website/version/images/home/lemon/revenue-management.svg" alt="Give marketing automation a boost" class="img-responsive"/>
										<!-- <div id="articleAnimation"></div> -->
									</figure>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-10 col-lg-offset-1">
							<div class="row">
								<div class="col-sm-6 col-md-5">
									<div class="cj-article cj-article--white">
										<div class="cj-article__header">
											<h3 class="cj-article__label">
												Quote-to-Cash Automation
											</h3>
											<h2 class="cj-article__title">
												Powers Sales and Marketing CRM
											</h2>
										</div>
										<div class="cj-article__body">
											<figure class="cj-article__figure">
												<img  data-src="/static/website/version/images/home/lemon/crm-logos.png" alt="Give marketing automation a boost" class="img-responsive"/>
											</figure>
											<div class="cj-article__desc">
												Handle quotes, approvals, acceptance, and collections seamlessly from within the CRM.
											</div>
										</div>
										<div class="cj-article__footer">
											<div class="cj-article__actions">
												<a href="/for-sales-driven-saas/" class="cj-article__link cj-link--icon cj-font__color--white">
													Learn more
												</a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-sm-6 col-md-5 col-md-offset-1">
									<div class="cj-article cj-article--white">
										<div class="cj-article__header">
											<h3 class="cj-article__label">
												Offer More Payment Methods
											</h3>
											<h2 class="cj-article__title">
												25+ Payment Gateways
											</h2>
										</div>
										<div class="cj-article__body">
											<div style="border-bottom: 1px solid #1b094a;">
												<span style="font-size: 10px; font-weight: 500; line-height: 18px; margin-bottom: 8px; color: #bea7ff; background: #1f0d52; display: inline-block; padding: 1px 8px; border-radius: 30px; letter-spacing: -0.2px;">
													Preferred Partners
												</span>
											</div>
											<figure class="cj-article__figure">
												<img data-src="/static/website/version/images/home/lemon/pg-logos.png" alt="Give marketing automation a boost" class="img-responsive"/>
											</figure>
											<div class="cj-article__desc">
												Accept payments across a wide array of gateways, geographies, and  currencies. 
											</div>
										</div>
										<div class="cj-article__footer">
											<div class="cj-article__actions">
												<a href="/payment-gateways/" class="cj-article__link cj-link--icon cj-font__color--white">
													Learn more
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-10 col-lg-offset-1">
							<div class="row">
								<div class="col-sm-6 col-md-5">
									<div class="cj-article cj-article--white">
										<div class="cj-article__header">
											<h3 class="cj-article__label">
												Streamline Finance Operations
											</h3>
											<h2 class="cj-article__title">
												Syncs with Accounting Software
											</h2>
										</div>
										<div class="cj-article__body">
											<figure class="cj-article__figure">
												<img data-src="/static/website/version/images/home/lemon/acc-logos.png" alt="Give marketing automation a boost" class="img-responsive" style="opacity: 0.8"/>
											</figure>
											<div class="cj-article__desc">
												Reconcile books in seconds, handle compliance, and recognize revenue painlessly.
											</div>
										</div>
										<div class="cj-article__footer">
											<div class="cj-article__actions">
												<a href="/saas-accounting-and-taxes/" class="cj-article__link cj-link--icon cj-font__color--white">
													Learn more
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="cj-page__footer">
								<div class="cj-page__footer--title">
									Talk to us today about <br />your revenue workflow
								</div>
								<div class="cj-page__footer--form">
									<div class="cj-hero__action">
										<a href="/schedule-a-demo/?ref=mid-page-cta" class="cj-btn cj-btn--purple">Schedule a Demo</a>
									</div>
									<!-- <div class="cj-form"></div> -->
									<!-- <div class="cj-form">
										<form class="cj-hs-form">
											<div class="hs_email hs-email hs-fieldtype-text field hs-form-field">
												<div class="input">
													<input class="hs-input" type="email" name="email" placeholder="Business Email Address">
												</div>
											</div>
											<div class="hs_submit hs-submit">
												<div class="actions">
													<input type="submit" value="Count Me In" class="hs-button primary large">
												</div>
											</div>
										</form>
									</div> -->
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-10 col-sm-offset-1">
							<div class="cj-article cj-article--white">
								<div class="cj-article__header">
									<h2 class="cj-article__title cj-article__title--big text-center">
										Great Products Deserve Hyper Growth. <br class="visible-md visible-lg" />Chargebee Makes it Easy.
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- ===============================================================
			End: Article
			================================================================ -->
            <!-- ===============================================================
            Start: Tab
            ================================================================ -->
            <section class="l-row" style="padding-bottom:0;">
                <div class="container">
                    <div class="row">
                        <div class="cj-tab" cb-vtab>
                            <div class="cj-tab__container" cb-vtab-container>
                                <!-- ===============================================================
                                Start: Tab Right Content
                                ================================================================ -->
                                <div class="col-sm-10 col-sm-offset-1 col-md-12 col-md-offset-0 cj-tab__row">  
                                	<div class="cj-tab__select hidden-md hidden-lg">
                                        <select cb-vtab-selectbox>
                                            <option value="one">Rethink Pricing</option> 
                                            <option value="two">Automate FinOps</option> 
                                            <option value="three">Go Global</option>
                                        </select>
                                    </div>

									<div class="cj-tab__aside" cb-vtab-aside>
                                        <span cb-vtab-item-bg></span>
                                        <div class="cj-tab__items" cb-vtab-items>
                                            <div class="cj-tab__item" cb-vtab-item="one" cb-vtab-item-selected>
                                                <span cb-vtab-txt>Rethink Pricing</span>
                                            </div>
                                            <div class="cj-tab__item" cb-vtab-item="two">
                                                <span cb-vtab-txt>Automate FinOps</span>
                                            </div>
                                            <div class="cj-tab__item" cb-vtab-item="three">
                                                <span cb-vtab-txt>Go Global</span>
                                            </div>
                                        </div>
                                    </div><!--aside--> 
									<div class="cj-tab__content revealOnScroll" data-animate='fadeInUp' cb-vtab-contents>

                                        <div cb-vtab-content="one">
                                            <a href="/customers/drawboard/">  
												<div class="cj-tab__item"> 
													<div class="cj-tab__left">
														<div class="cj-tab__parent cj-tab__two">
															<div class="cj-tab__header">
                                                                <p>Achieved</p>
                                                                <div class="cj-tab__count">
                                                                    <img data-src="/static/website/version/images/home/testimonial/lemon/drawboard-20x.svg" class="img-responsive" />
                                                                </div>
															</div>
															<div class="cj-tab__footer">
																<h2 class="cj-tab__headings">ROI with Chargebee.</h2>
																<div class="read-story hidden-xs">
																	<div class="read-story__link">Read Story →</div>
																</div>
															</div>
														</div>
													</div><!--cj-tab__left--> 
													<div class="cj-tab__right">
														<div class="cj-tab__rtop">
															<p>
																“Chargebee has all the concepts of metered billing, flat and tiered pricing. If we decided to change the way we want to bill or the price structure, it would be accounted for, excuse the pun.”
															</p>
														</div>
														<div class="cj-tab__rbottom">
															<div class="cj-tab__rbleft">
																<p class="cj-tab__name">Nathan Field</p>
																<p class="cj-tab__role">Marketing</p>
															</div> 
															<div class="cj-tyab__rbright"> 
																<img width="160" data-src="/static/website/version/images/case-study/drawboard/logo.svg" alt="" class="img-responsive" />     
															</div>
														</div> 
													</div><!--cj-tab__right-->
												</div>  
											</a> 
                                        </div><!--Two-->

                                        <div cb-vtab-content="two">
                                            <a href="/customers/fishburners/">  
												<div class="cj-tab__item"> 
													<div class="cj-tab__left">
														<div class="cj-tab__parent cj-tab__three">
															<div class="cj-tab__header">
                                                                <p>Saved</p>
                                                                <div class="cj-tab__count">
                                                                    <img data-src="/static/website/version/images/home/testimonial/lemon/fishburners-105.svg" class="img-responsive" />
                                                                </div>
															</div>
															<div class="cj-tab__footer">
																<h2 class="cj-tab__headings">in manual accounting.</h2>
																<div class="read-story hidden-xs">
																	<div class="read-story__link">Read Story →</div>
																</div>
															</div>
														</div>
													</div><!--cj-tab__left--> 
													<div class="cj-tab__right">
														<div class="cj-tab__rtop">
															<p>“Our finance and accounting teams now save up to 105 hours of manual accounting every month. We now have more time to do financial analysis and make strategic business decisions.”</p>
														</div>
														<div class="cj-tab__rbottom">
															<div class="cj-tab__rbleft">
																<p class="cj-tab__name">Ayush Patel</p>
																<p class="cj-tab__role">Finance</p>
															</div> 
															<div class="cj-tyab__rbright"> 
																<img width="160" data-src="/static/website/version/images/customers/logos/fishburners.png" alt="" class="img-responsive" />     
															</div>
														</div> 
													</div><!--cj-tab__right-->
												</div>  
											</a> 
                                        </div><!--Three-->

                                        <div cb-vtab-content="three">
                                            <a href="/customers/harvestr/">  
												<div class="cj-tab__item"> 
													<div class="cj-tab__left">
														<div class="cj-tab__parent cj-tab__four">
															<div class="cj-tab__header">
																<p>Grew MRR by</p>
																<div class="cj-tab__count">
																	<img data-src="/static/website/version/images/home/testimonial/lemon/harvestr-15percent.svg" class="img-responsive" />
																</div>
															</div>
															<div class="cj-tab__footer">
																<h2 class="cj-tab__headings">and expanded globally from Europe.</h2>
																<div class="read-story hidden-xs">
																	<div class="read-story__link">Read Story →</div>
																</div>
															</div>
														</div>
													</div><!--cj-tab__left--> 
													<div class="cj-tab__right">
														<div class="cj-tab__rtop">
															<p>“As a European company selling in Europe but also outside of Europe, it was critical for us to be able to have two currencies - euros and dollars. VAT was another aspect we really wanted to be automated. This was a gamechanger with Chargebee. ”</p>
														</div>
														<div class="cj-tab__rbottom">
															<div class="cj-tab__rbleft">
																<p class="cj-tab__name">Valentin Huang</p>
																<p class="cj-tab__role">Co-founder</p>
															</div> 
															<div class="cj-tyab__rbright"> 
																<img width="160" data-src="/static/website/version/images/case-study/harvestr/logo.png" alt="" class="img-responsive" />     
															</div>
														</div> 
													</div><!--cj-tab__right-->
												</div>  
											</a>   
                                        </div><!--Four-->

										<div class="cj-tab__actions" cb-vtab-actions>
											<span cb-vtab-action cb-vtab-action--prev class="cj-tab__action cj-tab__action--prev"></span>
											<span cb-vtab-action cb-vtab-action--next class="cj-tab__action cj-tab__action--next"></span>
										</div>
                                    </div><!--Content-->
                                      
                                </div>
                                <!-- ===============================================================
                                End: Tab Right Content
                                ================================================================ -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ===============================================================
            End: Tab
            ================================================================= -->
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
			var movin = document.createElement("script");
			movin.type = "text/javascript";
			movin.src = "/static/website/version/scripts/movein-plugin.js";
			
			var animationHero = document.createElement("script");
			animationHero.type = "text/javascript";
			animationHero.src = "/static/website/version/scripts/hero-animation.js";
			
			var slickSlider = document.createElement("script");
			slickSlider.type = "text/javascript";
			slickSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js";

            var slickScript = document.createElement("script");
            slickScript.type = "text/javascript";
            var slickCodeSnippet = document.createTextNode(
				`$('.customer-logos__one').slick({
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
				});`
			);
			slickScript.appendChild(slickCodeSnippet);
			
            if(screen.width < 992){
                $(window).one('scroll',function() {
					$("body").append(slickSlider);
                })
            }else{
				$("body").append(movin);
				function testMovin() {
					if (typeof lottie == 'object') {
						$("body").append(animationHero);
						window.clearInterval(movinInterval)
					}
				}
				var movinInterval = window.setInterval(testMovin, 300);

				$(window).one('scroll',function() {
					$("body").append(slickSlider);
				})
			}
			function testSlick() {
				if (typeof $.fn.slick == 'function') {
					$("body").append(slickScript);
					window.clearInterval(slickInterval)
				}
			}
			var slickInterval = window.setInterval(testSlick, 300);

			$('.cj-tab__action--prev').on('click', function(){
				var prevEle = $('[cb-vtab-item-selected]').prev('[cb-vtab-item]')
				if(prevEle.length){
					prevEle.trigger('click')
				}else{
					$('[cb-vtab-item]:last-child').trigger('click')
				}
			})
			$('.cj-tab__action--next').on('click', function(){
				var nextEle = $('[cb-vtab-item-selected]').next('[cb-vtab-item]')
				if(nextEle.length){
					nextEle.trigger('click')
				}else{
					$('[cb-vtab-item]:first-child').trigger('click')
				}
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
	img[data-src].fancy {
		animation-duration: .5s;
		animation-fill-mode: both;
		animation-name: fadeInImg
	}
	@keyframes fadeInImg {
		from {
			opacity: .5;
		}
		to { opacity: 1 } 
	}
</style>
<!-- ===========================================================================
End: Style Section
============================================================================ -->
