<!-- ===========================================================================
Start: Template
============================================================================ -->
<template>
    <div>
        <!-- ===================================================================
        Start: Website Meta and Header
        ==================================================================== -->
        <app-meta 
            :cb-title="'Implement different SaaS Pricing Models with Chargebee'" 
            :cb-desc="'Learn about pricing models in SaaS businesses. With use cases of when to use them to improve business value.'" 
            :cb-url="'/saas-pricing-models/'" 
            :cb-image="''"
            :cb-style="'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/10.6.1/css/bootstrap-slider.min.css,/static/website/version/styles/pricing-model.css'"
            :cb-head-script="''"
            :cb-body-script="'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/10.6.1/bootstrap-slider.min.js'"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <!-- ===================================================================
        Start: Website Body
        ==================================================================== -->
        <main class="cj-main">
        <!-- ===================================================================
        Start: Grid 
        ==================================================================== -->
        <section class="cpm-grid ">
            <div class="cpm-grid__container">
            <!-- ===============================================================
            Start: Hero 
            ================================================================ -->
            <div class="cpm-hero cpm-pt--lg cpm-mb--sm">

                <div class="cpm-hero__container">
                    <div class="cpm-hero__body">
                        <div class="cpm-hero__header">
                            <h1 class="cpm-hero__title">
                                Bill the way your <span class="cpm-hero__highlight">pricing strategy</span> demands
                            </h1>
                            <p class="cpm-hero__desc">
                                With Chargebee's platter of pricing options, find the pricing model that works the best for your subscription business.
                            </p>
                            <div class="cpm-hero__figure visible-xs" style="margin-bottom: -35px">
                                <img src="/static/website/version/images/pricing-model/banner-img.svg" alt="Pricing Model" width="300" class="img-responsive" style="margin-left: auto; margin-right: auto" />
                            </div>
                        </div>
                        <div class="cpm-hero__footer">
                            <div class="cpm-hero__actions">
                                <div class="cpm-hero__action">
                                    <a href="/trial-signup/?ref=PmheroCTA" class="cpm-btn">Sign up for free</a>
                                </div>
                                <div class="cpm-hero__action" style="margin-top: 16px;">
                                    <a href="/schedule-a-demo/?ref=PmheroCTA" class="cpm-link cpm-link--icon">Schedule a Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cpm-hero__figure hidden-xs">
                        <img src="/static/website/version/images/pricing-model/banner-img.svg" alt="Pricing Model" class="img-responsive" style="margin-left: auto; margin-right: auto" />
                    </div>
                </div>


                <div  class="startAffix"></div>
                <div class="cpm-hero__nav hidden-xs">
                    <ul class="cpm-hero__list nav nav-tabs" id="nav">
                        <li class="cpm-hero__item active"><a href="#flatFee">Flat Fee</a></li>
                        <li class="cpm-hero__item"><a href="#usageBased">Usage Based</a></li>
                        <li class="cpm-hero__item"><a href="#hybrid">Hybrid</a></li>
                    </ul>
                </div>
            </div>
            <!-- ===============================================================
            End: Hero 
            ================================================================ -->

            <!-- ===============================================================
            Start: Tab - Desktop & Tablet
            ================================================================ -->
            <div class="cpm-main hidden-xs">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="cpm-tabs">
                                <div class="cpm-tabs__head">
                                    
                                </div>
                                <div class="cpm-tabs__body">
                                    <div class="tab-content">
                                        <div class="tab-pane fade active in" id="flatFee">
                                            <div class="cpm-tabs__desc">
                                                Flat fee is a universal subscription pricing model for SaaS businesses. The plans have a fixed cost and can be bundled to serve different audiences.
                                            </div>
                                            <div class="cpm-tab">
                                                <div class="cpm-tab__body">
                                                    <div class="cpm-flatFee">
                                                        <div class="row">
                                                            <div class="col-sm-5 col-sm-offset-1">
                                                                <div class="cpm-plan__display">
                                                                    <div class="cpm-plan__title">
                                                                        Charge your customers a fixed amount on a recurring basis.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-5">
                                                                <div class="cpm-plan__asside">
                                                                    <div class="cpm-radios">
                                                                        <div class="cpm-radio">
                                                                            <label class="cpm-radio__label">
                                                                                <input type="radio" class="cpm-radio__element" name="flatFee" v-model.number="flatFee" value="20">
                                                                                <div class="cpm-radio__container">
                                                                                    <div class="cpm-radio__main">
                                                                                        <div class="cpm-plan__desc colorLink">
                                                                                            <div><strong><span>$20/month</span></strong> Basic</div>
                                                                                            <div><small>(Basic feature set)</small></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                        </div>

                                                                        <div class="cpm-radio">
                                                                            <label class="cpm-radio__label">
                                                                                <input type="radio" class="cpm-radio__element" name="flatFee" v-model.number="flatFee" value="100" checked>
                                                                                <div class="cpm-radio__container">
                                                                                    <div class="cpm-radio__main">
                                                                                        <div class="cpm-plan__desc colorLink">
                                                                                            <div><strong><span>$100/month</span></strong> Gold</div>
                                                                                            <div><small>(Standard feature set)</small></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                        </div>

                                                                        <div class="cpm-radio">
                                                                            <label class="cpm-radio__label">
                                                                                <input type="radio" class="cpm-radio__element" name="flatFee" v-model.number="flatFee" value="150">
                                                                                <div class="cpm-radio__container">
                                                                                    <div class="cpm-radio__main">
                                                                                        <div class="cpm-plan__desc colorLink">
                                                                                            <div><strong><span>$150/month</span></strong> Platinum</div>
                                                                                            <div><small>(Advanced feature set)</small></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="cpm-breakdown cpm-breakdown__view">
                                                            <div class="cpm-breakdown__footer">
                                                                <div class="row">
                                                                    <div class="col-md-6 col-md-push-6">
                                                                        <div class="cpm-plan__desc">
                                                                            Your customer will be paying:
                                                                        </div>
                                                                        <div class="cpm-plan__desc mTopXS">
                                                                            <span class="cpm-plan__pay">${{flatFee}}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>      
                                        </div>
                                        <div class="tab-pane fade" id="usageBased">
                                            <div class="cpm-tabs__desc">
                                                There are 4 different ways to charge your customers when you opt for a usage-based pricing model. The common theme to all of them is, you get to grow with your customers. 
                                            </div>
                                            <div class="cpm-tab">
                                                <div class="tabbable">
                                                    <div class="cpm-tab__head">
                                                        <ul class="nav nav-tabs">
                                                            <li class="active">
                                                                <a href="#quantity">Quantity</a>
                                                            </li>
                                                            <li>
                                                                <a href="#volume">Volume</a>
                                                            </li>
                                                            <li>
                                                                <a href="#tiered">Tiered</a>
                                                            </li>
                                                            <li>
                                                                <a href="#stairStep">Stair-Step</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="cpm-tab__body">
                                                        <div class="tab-content">
                                                            <div class="tab-pane fade active in" id="quantity">
                                                                <div class="cpm-quantity">
                                                                    <div class="row">
                                                                        <div class="col-sm-5 col-sm-offset-1">
                                                                            <div class="cpm-plan__display">
                                                                                <div class="cpm-plan__title">
                                                                                    Bill your customers for the units they sign up for.
                                                                                </div>
                                                                                <div class="cpm-plan__heading">
                                                                                    Fits best when pricing varies based on the number of units - be it a number of licenses, users or items. 
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-sm-5">
                                                                            <div class="cpm-plan__asside">
                                                                                <div class="cpm-plan__desc">
                                                                                    <div><strong>Standard Plan: </strong></div>
                                                                                </div>
                                                                                <div class="cpm-plan__desc">
                                                                                    $10 per license per month
                                                                                </div>
                                                                                <div class="cpm-sliders__container mTopMD" plan-type="quantity">
                                                                                    <div class="cpm-plan__desc cpm-flex__twoclmn--spacebw">
                                                                                        <div>Number of license(s)</div>
                                                                                        <div class="">{{quantitySliderValue}}</div>
                                                                                    </div>
                                                                                    <input id="quantity_Slider" style="width: 80%;margin: auto;" 
                                                                                    data-slider-ticks="[1, 50, 100]" 
                                                                                    data-slider-ticks-labels="[1, 50, 100]" 
                                                                                    data-slider-ticks-positions="[1, 50, 100]" 
                                                                                    data-slider-tooltip="show" 
                                                                                    data-slider-max="100" 
                                                                                    data-slider-value="1" 
                                                                                    class="pmSlider" type="text" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="cpm-breakdown cpm-breakdown__view">
                                                                        <div class="cpm-breakdown__footer">
                                                                            <div class="row">
                                                                                <div class="col-md-6 col-md-push-6">
                                                                                    <div class="cpm-plan__desc">
                                                                                        Your customer will be paying:
                                                                                    </div>
                                                                                    <div class="cpm-plan__desc mTopXS">
                                                                                        <div class="cpm-plan__pay">${{quantitySliderValue * 10}}</div>
                                                                                        <div style="margin-top: 8px;"><small>Breakdown: {{quantitySliderValue}} license(s) X $10</small></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane fade" id="volume">
                                                                <div class="cpm-volume">
                                                                    <div class="row">
                                                                        <div class="col-sm-5 col-sm-offset-1">
                                                                            <div class="cpm-plan__display">
                                                                                <div class="cpm-plan__title">
                                                                                    Different slabs are assigned different per unit prices.
                                                                                </div>
                                                                                <div class="cpm-plan__heading">
                                                                                    A customer using 15 licenses pays $10 per license.
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-sm-5">
                                                                            <div class="cpm-plan__asside">
                                                                                <div class="cpm-plan__desc">
                                                                                    <div><strong>Number of license(s) and cost: </strong></div>
                                                                                </div>
                                                                                <div class="cpm-plan__desc cpm-flex__twoclmn">
                                                                                    <div>
                                                                                        1-9:
                                                                                    </div>
                                                                                    <div>
                                                                                        $15/month (per license)
                                                                                    </div>
                                                                                </div>
                                                                                <div class="cpm-plan__desc cpm-flex__twoclmn">
                                                                                    <div>
                                                                                        10-49:
                                                                                    </div>
                                                                                    <div>
                                                                                        $10/month (per license)
                                                                                    </div>
                                                                                </div>
                                                                                <div class="cpm-plan__desc cpm-flex__twoclmn">
                                                                                    <div>
                                                                                        50-100:
                                                                                    </div>
                                                                                    <div>
                                                                                        $5/month (per license)
                                                                                    </div>
                                                                                </div>
                                                                                <div class="cpm-sliders__container mTopMD" plan-type="volume">
                                                                                    <div class="cpm-plan__desc cpm-flex__twoclmn--spacebw">
                                                                                        <div>Number of license(s)</div>
                                                                                        <div class="">{{volumeSliderValue}}</div>
                                                                                    </div>
                                                                                    <input id="volume_Slider" style="width: 80%;margin: auto;" 
                                                                                    data-slider-ticks="[1, 50, 100]" 
                                                                                    data-slider-ticks-labels="[1, 50, 100]" 
                                                                                    data-slider-ticks-positions="[1, 50, 100]" 
                                                                                    data-slider-tooltip="show" 
                                                                                    data-slider-max="100" 
                                                                                    data-slider-value="1" 
                                                                                    class="pmSlider" type="text" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="cpm-breakdown cpm-breakdown__view">
                                                                        <div class="cpm-breakdown__footer">
                                                                            <div class="row">
                                                                                <div class="col-md-6 col-md-push-6">
                                                                                    <div class="cpm-plan__desc">
                                                                                        Your customer will be paying:
                                                                                    </div>
                                                                                    <div class="cpm-plan__desc mTopXS">
                                                                                        <div class="cpm-plan__pay">${{volumeSliderValue * volumeSliderCost}}</div>
                                                                                        <div style="margin-top:8px"><small>Breakdown: {{volumeSliderValue}} license(s) X ${{volumeSliderCost}}</small></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane fade" id="tiered">
                                                                <div class="cpm-tiered">
                                                                    <div class="row">
                                                                        <div class="col-sm-5 col-sm-offset-1">
                                                                            <div class="cpm-plan__display">
                                                                                <div class="cpm-plan__title">
                                                                                    The number of licenses purchased will be priced for the tiers it covers.
                                                                                </div>
                                                                                <div class="cpm-plan__heading">
                                                                                    A customer using 15 licenses will have to pay $15 for the first 9 licenses and $10 for the rest.
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-sm-5">
                                                                            <div class="cpm-plan__asside">
                                                                                <div class="cpm-plan__desc">
                                                                                    <div><strong>Number of license(s) and cost: </strong></div>
                                                                                </div>
                                                                                <div class="cpm-plan__desc cpm-flex__twoclmn">
                                                                                    <div>
                                                                                        1-9:
                                                                                    </div>
                                                                                    <div>
                                                                                        $15/month (per license)
                                                                                    </div>
                                                                                </div>
                                                                                <div class="cpm-plan__desc cpm-flex__twoclmn">
                                                                                    <div>
                                                                                        10-49:
                                                                                    </div>
                                                                                    <div>
                                                                                        $10/month (per license)
                                                                                    </div>
                                                                                </div>
                                                                                <div class="cpm-plan__desc cpm-flex__twoclmn">
                                                                                    <div>
                                                                                        50-99:
                                                                                    </div>
                                                                                    <div>
                                                                                        $5/month (per license)
                                                                                    </div>
                                                                                </div>
                                                                                <div class="cpm-sliders__container mTopMD" plan-type="tiered">
                                                                                    <div class="cpm-plan__desc cpm-flex__twoclmn--spacebw">
                                                                                        <div>Number of license(s)</div>
                                                                                        <div class="">{{tieredSliderValue}}</div>
                                                                                    </div>
                                                                                    <input id="tiered_Slider" style="width: 80%;margin: auto;" 
                                                                                    data-slider-ticks="[1, 50, 100]" 
                                                                                    data-slider-ticks-labels="[1, 50, 100]" 
                                                                                    data-slider-ticks-positions="[1, 50, 100]" 
                                                                                    data-slider-tooltip="show" 
                                                                                    data-slider-max="100" 
                                                                                    data-slider-value="1" 
                                                                                    class="pmSlider" type="text" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="cpm-breakdown cpm-breakdown__view">
                                                                        <div class="cpm-breakdown__footer">
                                                                            <div class="row">
                                                                                <div class="col-md-6 col-md-push-6">
                                                                                    <div class="cpm-plan__desc">
                                                                                        Your customer will be paying:
                                                                                    </div>
                                                                                    <div class="cpm-plan__desc mTopXS">
                                                                                        <div class="cpm-plan__pay">${{tieredSubTotal}}</div>
                                                                                        <div style="margin-top: 8px;"><small>Breakdown: ({{tieredCategoryOne}} license(s) X $15) + ({{tieredCategoryTwo}} license(s) X $10) + ({{tieredCategoryThree}} license(s) X $5)</small></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane fade" id="stairStep">
                                                                <div class="cpm-stairStep">
                                                                    <div class="row">
                                                                        <div class="col-sm-5 col-sm-offset-1">
                                                                            <div class="cpm-plan__display">
                                                                                <div class="cpm-plan__title">
                                                                                    The price for consumption depends on the slab it falls under, irrespective of the usage.
                                                                                </div>
                                                                                <div class="cpm-plan__heading">
                                                                                    A cloud storage business charges $100 for 500GB, $200 for 2 TB and $400 for 4 TB of storage space.
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-sm-5">
                                                                            <div class="cpm-plan__asside">
                                                                                <div class="cpm-radios">
                                                                                    <div class="cpm-radio">
                                                                                        <label class="cpm-radio__label">
                                                                                            <input type="radio" class="cpm-radio__element" name="stairStep" v-model.number="stairStep" value="100" checked>
                                                                                            <div class="cpm-radio__container">
                                                                                                <div class="cpm-radio__main">
                                                                                                    <div class="cpm-plan__desc colorLink">
                                                                                                        <div><strong><span>$100/month</span></strong> for 500 GB</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </label>
                                                                                    </div>

                                                                                    <div class="cpm-radio">
                                                                                        <label class="cpm-radio__label">
                                                                                            <input type="radio" class="cpm-radio__element" name="stairStep" v-model.number="stairStep" value="200">
                                                                                            <div class="cpm-radio__container">
                                                                                                <div class="cpm-radio__main">
                                                                                                    <div class="cpm-plan__desc colorLink">
                                                                                                        <div><strong><span>$200/month</span></strong> for 2 TB</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </label>
                                                                                    </div>

                                                                                    <div class="cpm-radio">
                                                                                        <label class="cpm-radio__label">
                                                                                            <input type="radio" class="cpm-radio__element" name="stairStep" v-model.number="stairStep" value="400">
                                                                                            <div class="cpm-radio__container">
                                                                                                <div class="cpm-radio__main">
                                                                                                    <div class="cpm-plan__desc colorLink">
                                                                                                        <div><strong><span>$400/month</span></strong> for 4 TB</div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="cpm-breakdown cpm-breakdown__view">
                                                                        <div class="cpm-breakdown__footer">
                                                                            <div class="row">
                                                                                <div class="col-md-6 col-md-push-6">
                                                                                    <div class="cpm-plan__desc">
                                                                                        Your customer will be paying:
                                                                                    </div>
                                                                                    <div class="cpm-plan__desc mTopXS">
                                                                                        <div class="cpm-plan__pay">${{stairStep}}</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="hybrid">
                                            <div class="cpm-tabs__desc">
                                                Can’t pick one? You don’t have to. With a hybrid pricing model, you can charge one-time setup fee, grant discounts, and combine the best of usage-based and flat fee pricing. Whatever you pick, Chargebee can back.
                                            </div>
                                            <div class="cpm-tab">
                                                <div class="tabbable">
                                                    <div class="cpm-tab__head">
                                                        <ul class="nav nav-tabs">
                                                            <li class="active">
                                                                <a href="#planA">Plan A</a>
                                                            </li>
                                                            <li>
                                                                <a href="#planB">Plan B</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="cpm-tab__body">
                                                        <div class="tab-content">
                                                            <div class="tab-pane fade active in" id="planA">
                                                                <div class="cpm-plan-a">
                                                                    <div class="row">
                                                                        <div class="col-sm-5 col-sm-offset-1">
                                                                            <div class="cpm-plan__display">
                                                                                <div class="cpm-plan__title">
                                                                                    Accommodate any complex pricing strategy and bill your customers accordingly.
                                                                                </div>
                                                                                <div class="cpm-plan__desc">
                                                                                    For instance, a customer who signs up for Plan A has to pay a uniform fee for every unit he consumes. And if he signs up for Plan B, he is charged based on the slab his consumption falls under.
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-sm-5">
                                                                            <div class="cpm-plan__asside">
                                                                                <div class="cpm-plan__desc cpm-flex__twoclmn">
                                                                                    <div><strong>One time set up fee: </strong></div>
                                                                                    <div>$500</div>
                                                                                </div>
                                                                                <div class="cpm-plan__desc">
                                                                                    $2 for each unit
                                                                                </div>
                                                                                <div class="cpm-sliders__container" plan-type="planA">
                                                                                    <div class="cpm-plan__desc cpm-flex__twoclmn--spacebw">
                                                                                        <div>Number of unit(s)</div>
                                                                                        <div class="">{{planASliderValue}}</div>
                                                                                    </div>
                                                                                    <input id="planA_Slider" style="width: 80%;margin: auto;" 
                                                                                    data-slider-ticks="[1, 100, 500]" 
                                                                                    data-slider-ticks-labels="[1, 100, 500]" 
                                                                                    data-slider-ticks-positions="[1, 50, 100]" 
                                                                                    data-slider-tooltip="show" 
                                                                                    data-slider-max="500" 
                                                                                    data-slider-value="1" 
                                                                                    class="pmSlider" type="text" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="cpm-breakdown cpm-breakdown__view">
                                                                        <div class="cpm-breakdown__footer">
                                                                            <div class="row">
                                                                                <div class="col-md-6 col-md-push-6">
                                                                                    <div class="cpm-plan__desc">
                                                                                        Your customer will be paying:
                                                                                    </div>
                                                                                    <div class="cpm-plan__desc mTopXS">
                                                                                        <div><span class="cpm-plan__pay">${{planAFirstTotal}}</span> <small>For the first month (including first time setup fee)</small></div>
                                                                                        <div style="margin-top: 16px;"><span class="cpm-plan__pay">${{planAEveryTotal}}</span> <small> Every other month</small></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane fade" id="planB">
                                                                <div class="cpm-plan-b">
                                                                    <div class="row">
                                                                        <div class="col-sm-5 col-sm-offset-1">
                                                                            <div class="cpm-plan__display">
                                                                                <div class="cpm-plan__title">
                                                                                    Accommodate any complex pricing strategy and bill your customers accordingly.
                                                                                </div>
                                                                                <div class="cpm-plan__desc">
                                                                                    For instance, a customer who signs up for Plan A has to pay a uniform fee for every unit he consumes. And if he signs up for Plan B, he is charged based on the slab his consumption falls under.
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-sm-5">
                                                                            <div class="cpm-plan__asside">
                                                                                <div class="cpm-plan__desc cpm-flex__twoclmn">
                                                                                    <div><strong>One time set up fee: </strong></div>
                                                                                    <div>$500</div>
                                                                                </div>
                                                                                <div class="cpm-plan__desc cpm-flex__twoclmn">
                                                                                    <div>1-50 units:</div>
                                                                                    <div>$4/unit</div>
                                                                                </div>
                                                                                <div class="cpm-plan__desc cpm-flex__twoclmn">
                                                                                    <div>51-100 units:</div>
                                                                                    <div>$3/unit</div>
                                                                                </div>
                                                                                <div class="cpm-plan__desc cpm-flex__twoclmn">
                                                                                    <div>101+ units:</div>
                                                                                    <div>$2/unit</div>
                                                                                </div>
                                                                                <div class="cpm-sliders__container" plan-type="planB">
                                                                                    <div class="cpm-plan__desc cpm-flex__twoclmn--spacebw">
                                                                                        <div>Number of unit(s)</div>
                                                                                        <div class="">{{planBSliderValue}}</div>
                                                                                    </div>
                                                                                    <input id="planB_Slider" style="width: 80%;margin: auto;" 
                                                                                    data-slider-ticks="[1, 100, 500]" 
                                                                                    data-slider-ticks-labels="[1, 100, 500]" 
                                                                                    data-slider-ticks-positions="[0, 50, 100]" 
                                                                                    data-slider-tooltip="show" 
                                                                                    data-slider-max="500" 
                                                                                    data-slider-value="1" 
                                                                                    class="pmSlider" type="text" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="cpm-breakdown cpm-breakdown__view">
                                                                        <div class="cpm-breakdown__footer">
                                                                            <div class="row">
                                                                                <div class="col-md-6 col-md-push-6">
                                                                                    <div class="cpm-plan__desc">
                                                                                        Your customer will be paying:
                                                                                    </div>
                                                                                    <div class="cpm-plan__desc mTopXS">
                                                                                        <div><span class="cpm-plan__pay">${{planBFirstTotal}}</span> <small>First month (including first time setup fee)</small></div>
                                                                                        <div style="margin-top: 16px;"><span class="cpm-plan__pay">${{planBEveryTotal}}</span> <small>Every other month</small></div>
                                                                                        <div style="margin-top: 8px;"><small>Breakdown: {{planBSliderValue}} unit(s) X ${{planBTransactionFee}}</small></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ===============================================================
            End: Tab - Desktop & Tablet
            ================================================================= -->
            <div  class="stopAffix"></div>
            <!-- ===============================================================
            Start: Feature 
            ================================================================ -->
            <div class="cpm-features cpm-mt--md cpm-mb--xs visible-xs">
                <div class="cpm-features__container">
                    <div class="cpm-features__body">
                        <div class="cpm-feature">
                            <h3 class="cpm-feature__heading">
                                Flat Fee
                            </h3>
                            <p class="cpm-feature__desc">
                                Charge your customers a fixed amount on a recurring basis.
                            </p>
                        </div>

                        <div class="cpm-feature">
                            <h3 class="cpm-feature__heading" style="margin-top: 24px;">
                                Usage Based
                            </h3>
                            <p class="cpm-feature__desc">
                                There are 4 different ways to charge your customers when you opt for a usage-based pricing model. The common theme to all of them is, you get to grow with your customers.
                            </p>
                        </div>

                        <div class="cpm-feature">
                            <h3 class="cpm-feature__heading cpm-feature__heading--alt">
                                Quantity
                            </h3>
                            <p class="cpm-feature__desc">
                                Charge your customers based on how many units they sign up for.
                            </p>
                            <p class="cpm-feature__desc">
                                Fits best when pricing varies based on the number of units - be it a number of licenses, users or items.
                            </p>
                        </div>

                        <div class="cpm-feature">
                            <h3 class="cpm-feature__heading cpm-feature__heading--alt">
                                Volume
                            </h3>
                            <p class="cpm-feature__desc">
                                Different slabs are assigned different per unit prices.
                            </p>
                            <p class="cpm-feature__desc">
                                A customer using 15 licenses pays $10 per license.
                            </p>
                        </div>

                        <div class="cpm-feature">
                            <h3 class="cpm-feature__heading cpm-feature__heading--alt">
                                Tiered
                            </h3>
                            <p class="cpm-feature__desc">
                                The number of licenses purchased will be priced for the tiers it covers.
                            </p>
                            <p class="cpm-feature__desc">
                                A customer using 15 licenses will have to pay $20 for the first 9 licenses and $15 for the rest.
                            </p>
                        </div>

                        <div class="cpm-feature">
                            <h3 class="cpm-feature__heading cpm-feature__heading--alt">
                                Stair-Step
                            </h3>
                            <p class="cpm-feature__desc">
                                The price for consumption depends on the slab it falls under, irrespective of the usage.
                            </p>
                            <p class="cpm-feature__desc">
                                A cloud storage business charges $100 for 500GB, $200 for 2 TB and $400 for 4 TB of storage space.
                            </p>
                        </div>

                        <div class="cpm-feature">
                            <h3 class="cpm-feature__heading" style="margin-top: 24px;">
                                Hybrid
                            </h3>
                            <p class="cpm-feature__desc">
                                Can’t pick one? You don’t have to. With a hybrid pricing model, you can charge one-time setup fee, grant discounts, and combine the best of usage-based and flat fee pricing. Whatever you pick, Chargebee can back.
                            </p>
                        </div>

                        <div class="cpm-feature">
                            <div class="cpm-feature__desc">
                                Accommodate any complex pricing strategy and bill your customers accordingly.
                            </div>
                            <div class="cpm-feature__desc">
                                For instance, a customer who signs up for Plan A has to pay a uniform fee for every unit he consumes. And if he signs up for Plan B, he is charged based on the slab his consumption falls under.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ===============================================================
            End: Feature 
            ================================================================ -->
            <!-- ===============================================================
            Start: Feature 
            ================================================================ -->
            <div class="cpm-features cpm-mt--md cpm-mb--xs">
                <div class="cpm-features__container">
                    <div class="cpm-features__header">
                        <h2 class="cpm-features__title">
                            Getting your subscription pricing right is just the beginning. With the appropriate levers, bring flexiblility to your billing.
                        </h2>
                    </div>
                    <div class="cpm-features__body">
                        <div class="cpm-feature">
                            <h3 class="cpm-feature__heading">
                                Calendar billing:
                            </h3>
                            <p class="cpm-feature__desc">
                                Wish to bill on a specific date irrespective of the sign-up? Have a custom billing date for certain customers? Or do you want to bill quarterly? On the 17th of the month? Or on every Thursday? Do it all with Chargebee’s flexible billing rules.
                            </p>
                            <a href="/recurring-billing-invoicing/" class="cpm-feature__action cpm-link cpm-link--icon">
                                Know about Recurring billing 
                            </a>
                        </div>


                        <div class="cpm-feature">
                            <h3 class="cpm-feature__heading">
                                Custom Pricing:
                            </h3>
                            <p class="cpm-feature__desc">
                                If you have a product or service that is unique to every customer, this one's for you. Give your sales team the ability to quote custom prices for each unique subscription offering.
                            </p>
                        </div>


                        <div class="cpm-feature">
                            <h3 class="cpm-feature__heading">
                                Trial management:
                            </h3>
                            <p class="cpm-feature__desc">
                                Reap the most out of your freemium model. Easily manage free or paid trials. Start trials with or without payment info, provide extensions to retain, and send engaging emails to convert them to paying customers as the trial period runs its course.
                            </p>
                            <a href="/subscription-management/saas-trial-management/" class="cpm-feature__action cpm-link cpm-link--icon">
                                Manage free and paid trials
                            </a>
                        </div>


                        <div class="cpm-feature">
                            <h3 class="cpm-feature__heading">
                                Grandfathering support:
                            </h3>
                            <p class="cpm-feature__desc">
                                You made a promise to your customers that you wouldn't bait and switch. Keep up that promise by grandfathering prices for them even as you change your pricing plan for new customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ===============================================================
            End: Feature 
            ================================================================ -->
            <!-- ===============================================================
            Start: Hero 
            ================================================================ -->
            <div class="cpm-hero cpm-hero--footer cpm-mb--sm">
                <div class="cpm-hero__container">
                    <div class="cpm-hero__body">
                        <div class="cpm-hero__header">
                            <h1 class="cpm-hero__title">
                                Get billing in full swing with Chargebee’s support for  <span class="cpm-hero__highlight">every possible pricing model.</span>
                            </h1>
                        </div>
                        <div class="cpm-hero__footer">
                            <div class="cpm-hero__actions">
                                <div class="cpm-hero__action">
                                    <a href="/trial-signup/?ref=PmheroCTA" class="cpm-btn">Sign up for free</a>
                                </div>
                                <div class="cpm-hero__action">
                                    <a href="/schedule-a-demo/?ref=PmheroCTA" class="cpm-btn cpm-btn--ghost">Schedule a Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ===============================================================
            End: Hero 
            ================================================================ -->
            </div>
        </section>
        <!-- ==================================================================
        End: Grid
        =================================================================== -->
        </main>
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
                planASliderValue: 100,
                planBSliderValue: 100,
                planACostConsumption: 200,
                planAFirstTotal: 700,
                planAEveryTotal: 200,
                planBCostConsumption: 300,
                planBFirstTotal: 800,
                planBEveryTotal: 300,
                planBTransactionFee: 3,
                quantitySliderValue: 10,
                volumeSliderValue: 10,
                volumeSliderCost: 10,
                tieredSliderValue: 10,
                tieredCategoryOne: 9,
                tieredCategoryTwo: 1,
                tieredCategoryThree: 0,
                tieredSubTotal: 145,
                tieredTax: 7.25,
                tieredTotal: 152.25,
                stairStep: 100,
                flatFee: 100
            }
        },
        methods: {
            
        },
        created() {

        },
        mounted() {
            let vueData = this 
            $(".pmSlider").slider()
            $(window).on('scroll resise', function() {
                if($(window).width() > 991){
                    //console.log($(this).scrollTop());
                    if($(this).scrollTop() < $('.startAffix').offset().top - 24) {
                        $('#nav').removeClass('affix-bottom affix').addClass('affix-top');
                    }else{
                        if($(this).scrollTop() > $('.stopAffix').offset().top - 24){
                            $('#nav').removeClass('affix affix-top').addClass('affix-bottom');
                        }else{
                            $('#nav').removeClass('affix-top affix-bottom').addClass('affix');
                        }
                    }
                }
            })
            $(".pmSlider").on("change", function(slideEvt) {
                //console.log(slideEvt.value.newValue);
                let planType = $(this).parents('[plan-type]').attr('plan-type');
                if(planType == 'planA'){
                    vueData.planASliderValue = slideEvt.value.newValue
                    vueData.planACostConsumption = Math.round(vueData.planASliderValue * 2)
                    vueData.planAFirstTotal = Math.round(vueData.planACostConsumption + 500)
                    vueData.planAEveryTotal = Math.round(vueData.planACostConsumption)
                }else if(planType == 'planB'){
                    vueData.planBSliderValue = slideEvt.value.newValue
                    if(vueData.planBSliderValue < 51){
                        vueData.planBTransactionFee = 4
                    }else if(vueData.planBSliderValue < 101){
                        vueData.planBTransactionFee = 3
                    }else{
                        vueData.planBTransactionFee = 2
                    }
                    vueData.planBCostConsumption = Math.round(vueData.planBSliderValue * vueData.planBTransactionFee)
                    vueData.planBFirstTotal = Math.round(vueData.planBCostConsumption + 500)
                    vueData.planBEveryTotal = Math.round(vueData.planBCostConsumption)
                }else if(planType == 'quantity'){
                    vueData.quantitySliderValue = slideEvt.value.newValue
                }else if(planType == 'volume'){
                    vueData.volumeSliderValue = slideEvt.value.newValue
                    if(vueData.volumeSliderValue < 10){
                        vueData.volumeSliderCost = 15
                    }else if(vueData.volumeSliderValue < 50){
                        vueData.volumeSliderCost = 10
                    }else{
                        vueData.volumeSliderCost = 5
                    }
                }else if(planType == 'tiered'){
                    vueData.tieredSliderValue = slideEvt.value.newValue

                    if(vueData.tieredSliderValue < 10){
                        // No of Transaction under $15
                        vueData.tieredCategoryOne = vueData.tieredSliderValue;

                        // No of Transaction under $10
                        vueData.tieredCategoryTwo = 0;

                        // No of Transaction under $5
                        vueData.tieredCategoryThree = 0;

                        // Sub total
                        vueData.tieredSubTotal = vueData.tieredCategoryOne * 15

                        // Total
                        vueData.tieredTax = vueData.tieredSubTotal / 100 * 5
                        vueData.tieredTotal = vueData.tieredSubTotal + vueData.tieredTax
                        
                    }else if(vueData.tieredSliderValue < 50){
                        // No of Transaction under $15
                        vueData.tieredCategoryOne = 9;

                        // No of Transaction under $10
                        vueData.tieredCategoryTwo = vueData.tieredSliderValue - vueData.tieredCategoryOne;

                        // No of Transaction under $5
                        vueData.tieredCategoryThree = 0;

                        // Sub total
                        vueData.tieredSubTotal = (vueData.tieredCategoryOne * 15) + (vueData.tieredCategoryTwo * 10)

                        // Total
                        vueData.tieredTax = vueData.tieredSubTotal / 100 * 5
                        vueData.tieredTotal = vueData.tieredSubTotal + vueData.tieredTax
                    }else{
                        // No of Transaction under $15
                        vueData.tieredCategoryOne = 9;

                        // No of Transaction under $10
                        vueData.tieredCategoryTwo = 40;

                        // No of Transaction under $5
                        vueData.tieredCategoryThree = vueData.tieredSliderValue - 49;

                        // Sub total
                        vueData.tieredSubTotal = (vueData.tieredCategoryOne * 15) + (vueData.tieredCategoryTwo * 10) + (vueData.tieredCategoryThree * 5)

                        // Total
                        vueData.tieredTax = vueData.tieredSubTotal / 100 * 5
                        vueData.tieredTotal = vueData.tieredSubTotal + vueData.tieredTax
                    }
                }
            })
            $("ul.nav-tabs a").click(function (e) {
                e.preventDefault();
                $(this).tab('show');
                $(".pmSlider").slider()
                var tabName = $(this).attr('href');
                var slideName = '';
                
                if(tabName == '#usageBased' || tabName == '#hybrid'){
                    slideName = $(tabName).find('.tab-pane.active .cpm-sliders__container').attr('plan-type');
                }else if(tabName == '#flatFee' || tabName == '#stairStep'){}else{
                    slideName = $(tabName).find('.cpm-sliders__container').attr('plan-type');
                }
                setTimeout(function(){
                    if(slideName == '#hybrid' || slideName == 'planA' && vueData.planASliderValue == 100){
                        $('#planA_Slider').slider('setValue', 100);
                    }
                    if(slideName == '#hybrid' || slideName == 'planB' && vueData.planBSliderValue == 100){
                        $('#planB_Slider').slider('setValue', 100);
                    }
                    if(slideName == '#usageBased' || slideName == 'quantity' && vueData.quantitySliderValue == 10){
                        $('#quantity_Slider').slider('setValue', 10);
                    }
                    if(slideName == '#usageBased' || slideName == 'volume' && vueData.volumeSliderValue == 10){
                        $('#volume_Slider').slider('setValue', 10);
                    }
                    if(slideName == '#usageBased' || slideName == 'tiered' && vueData.tieredSliderValue == 10){
                        $('#tiered_Slider').slider('setValue', 10);
                    }
                }, 500);
            });
            if($(window).width() > 991){
                $(".cpm-hero__list li a").click(function() {
                    var whereTo = $(".cpm-tabs__body").offset().top - 75;
                    $('html,body').animate({
                        scrollTop: whereTo
                    }, 'slow');
                });
            }
        }
    }
</script>
<!-- ===========================================================================
End: Scripts
============================================================================ -->
<style>
    #ch-js-header-cloned{
        display: none;
    }
    input,
    textarea {
        border: 1px solid #eeeeee;
        box-sizing: border-box;
        margin: 0;
        outline: none;
        padding: 10px;
    }
    .affix-top {
        position: relative;
    }
    .affix {
        position: fixed;
        top: 0;
        background-color: #fff;
        width: 100%;
        left: 0;
        right: 0;
        box-shadow: 0 4px 14px -1px rgba(0,0,0,.18);
        padding-bottom: 10px;
        transition: all .3s ease-out;
    }
    .affix-bottom {
        position: absolute;
    }
    label{
        font-weight: normal;
    }
    input[type="radio"] {
        outline-width: 0 !important;
        border-width: 0 !important;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    }
    .cpm-radio {
        position: relative;
        padding-left: 30px;
    }
    .cpm-radio:not(:last-child){
        margin-bottom: 24px; 
    }
    .cpm-radio__container:before {
        content: "";
        width: 16px;
        height: 16px;
        display: inline-block;
        border-radius: 50%;
        position: absolute;
        top: 3px;
        left: 0;
        z-index: 5;
        background: #F5EDFF;
        border: 1px solid #6200EA; 
    }
    .cpm-radio__element:checked + .cpm-radio__container:before {
        border-width: 4px; 
    }
    .slider-handle.min-slider-handle.round {
        border: 2px solid #000FF0;
        background-color: #fff;
        background: #fff;
        margin-top: -4px;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }
    .slider-selection {
        background: #000FF0;
        border-radius: 2px !important;
        height: 2px !important;
        background-image: none !important;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }
    .slider-track {
        height: 2px !important;
    }
    .slider-tick.round {
        display: none;
    }
    .slider-tick-label {
        font-size: 12px;
    }
    .slider.slider-horizontal{
        margin: 24px auto;
        margin-left: 10px;
    }
    .slider-tick-label:before {
        content: "";
        width: 1px;
        height: 4px;
        position: absolute;
        top: 0;
        margin-top: -12px;
        left: 50%;
        margin-left: 0;
        background: #ccccd2;
    }
    .tooltip.top .tooltip-arrow{
        border-top-color: #3A008C;
    }
    .slider .tooltip-inner{
        background-color: #3A008C;
    }
    .slider .tooltip.top.in{
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }
</style>
