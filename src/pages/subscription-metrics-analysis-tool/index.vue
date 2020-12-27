<template>
    <div>
        <app-meta 
            :cb-title="'RevenueMD | A Subscription metric analysis tool for your SaaS business'" 
            :cb-desc="'RevenueMD empowers you to analyse revenue problems, and offers you solutions along-with a list SaaS metrics and reports to track for your business problems and goals.'" 
            :cb-url="'/subscription-metrics-analysis-tool/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/revenuemd.css'"
            :cb-head-script="''"
            :cb-body-script="'https://js.hsforms.net/forms/v2.js,https://js.hscta.net/cta/current.js,/static/website/version/scripts/revenuemd/lib/jquery.scrollbox.js'"
            :cb-has-noindex="false" />
        <div class="cb-body">
            <NoSsr>
            <!-- ===================================================================================
            Start - SVG Sprite 
            ==================================================================================== -->
            <svg-sprite />
            <!-- ===================================================================================
            End - Svg Sprite
            ==================================================================================== -->
            <!-- ===========================================================================
            Header - start
            ============================================================================ -->
            <header class="rmd-header rmd-header--fixed">
                <div class="rmd-header__wrapper">
                    <div class="rmd-header__container" v-bind:class="{flexEnd: showSolutionPage}">
                        <div v-on:click="reloadPage()" v-if="!showSolutionPage" class="rmd-header__item rmd-logo">
                            <svg class="icon-rw-logo">
                                <use xlink:href="#icon-rw-logo"></use>
                            </svg>
                            <span class="rmd-logo__text">RevenueMD</span>
                        </div>
                        <div class="rmd-header__item hidden-xs" v-if="showLaunchPage || showSolutionPage">
                            <div class="rs-linker">
                                <svg class="icon-rs-logo">
                                    <use xlink:href="#chargebee-icon"></use>
                                </svg>
                                <div class="rs-linker__addtn-label">Powered by
                                <a href="https://www.chargebee.com/" target="_blank" class="rs-linker__link">
                                    <span class="rs-linker__name"> Chargebee</span>
                                </a>
                                </div>
                            </div>
                        </div>
                        <div class="rmd-header__item hidden-xs" v-else>
                            <div class="rs-ctas">
                                <span v-on:click="reloadPage()" class="rs-cta__restart">
                                    <svg style="width: 24px;height: 24px;" class="icon-rs-restart">
                                        <use xlink:href="#icon-rs-restart"></use>
                                    </svg>
                                    <span class="rs-cta__name">Restart Diagnosis</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <!-- ===========================================================================
            Header - end
            ============================================================================ -->
            <!-- ===========================================================================
            Section - start
            ============================================================================ -->
            <section class="container-fluid fixed-width">
                <!-- ===========================================================================
                Launch page - start
                ============================================================================ -->
                <div class="rmd-launch-page" v-if="showLaunchPage">
                    <div class="rmd-launch-page__content">
                        <div class="rmd-launch-page__left">
                            <div class="rmd-launch-page__title">Diagnose your <br />recurring revenue problems</div>
                            <div style="font-size: 18px;line-height: 1.5;margin-bottom: 24px;max-width: 450px;">Identify possible conditions, problems, and resolutions in your subscription flow</div>
                            <button type="button" class="rmd-btn rmd-primary-btn" v-on:click="displayQuestionPage()" v-bind:disabled="!showStartDiagnoseBtn" v-bind:class="{hide: hideStartDiagnoseBtn}" ref="diagnoseStartBtn">
                                <div class="rmd-btn__container">
                                    <svg class="icon-rw-barrow hidden-xs" v-bind:class="{hide : !showStartDiagnoseBtn}">
                                        <use xlink:href="#icon-rw-barrow"></use>
                                    </svg>
                                    <div class="rmd-spinner" v-if="showLoader"></div>
                                    <div class="rmd-btn__text" v-bind:class="{hide : !showStartDiagnoseBtn}">Press Enter to Diagnose</div>
                                </div>
                            </button>
                        </div>
                        <div class="rmd-launch-page__right">
                            <div class="rmd-launch-page__carousel-block hidden-xs">
                                <svg class="icon-rw-logo">
                                    <use xlink:href="#icon-rw-logo"></use>
                                </svg>
                                <!-- ===========================================================================
                                Carousel slider - start
                                ============================================================================ -->
                                <div class="rmd-carousel">
                                    <div id="card-slider" class="rmd-carousel__container">
                                        <ul>
                                            <li class="rmd-carousel__item">
                                                <div class="rmd-carousel__item-label">Sudden spike in churn?</div>
                                                <div class="rmd-carousel__item-sublabel">See if it can be attributed to recent pricing or product changes</div>
                                            </li>
                                            <li class="rmd-carousel__item">
                                                <div class="rmd-carousel__item-label">Customers aren’t upgrading to higher plans?</div>
                                                <div class="rmd-carousel__item-sublabel">Revisit the distribution of features among all your plans</div>
                                            </li>
                                            <li class="rmd-carousel__item">
                                                <div class="rmd-carousel__item-label">Not too happy with your New MRR?</div>
                                                <div class="rmd-carousel__item-sublabel">Experiment with your acquisition channels.</div>
                                            </li>
                                            <li class="rmd-carousel__item">
                                                <div class="rmd-carousel__item-label">Involuntary churn shooting up?</div>
                                                <div class="rmd-carousel__item-sublabel">Consider getting a backup payment gateway.</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- ===========================================================================
                                Carousel slider - start
                                ============================================================================ -->
                            </div>
                            <div class="rmd-launch-page__hint-block">
                                <div class="rmd-launch-page__hint-text">Preview of probable causes for revenue loss.
                                    <br>Nail down on what’s affecting your revenue now.</div>
                                <svg class="icon-rw-rarrow--up hidden-xs" style="width: 60px;height: 100px;">
                                    <use xlink:href="#icon-rw-rarrow--up"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ===========================================================================
                Launch page - end
                ============================================================================ -->
                <!-- ===========================================================================
                Answer question section - start
                ============================================================================ -->
                <div class="rmd-question-page" v-if="showQuestionPage">
                    <div class="row">
                        <div class="col-sm-offset-2 col-sm-8 col-md-7 col-lg-6" v-show="showQuestion">
                            <div class="rmd-question-page__container">
                                <div class="rmd-question-page__item" v-for="questionObj in questionList" v-bind:key="questionObj.question_id" v-bind:class="{'rmd-attended-question': questionObj.isAnswered, 'rmd-question': !questionObj.isAnswered}">
                                    <!-- ===========================================================================
                                    Answered question block - start
                                    ============================================================================ -->
                                    <template v-if="questionObj.isAnswered">
                                        <div class="rmd-attended-question__block">
                                            <div class="rmd-attended-question__label" v-html="escapeHtmlEntities(questionObj.question_label)"></div>
                                            <div class="rmd-attended-question__answer" v-for='(optionObj,  index) in questionObj.optionItems' v-bind:key='index' v-if="optionObj.isSelected" v-html="escapeHtmlEntities(optionObj.option_label)"></div>
                                            <div class="rmd-reanswer-link" v-on:click="reanswerQuestion(questionObj, $event)">
                                                <svg class="icon-rw-carrow">
                                                    <use xlink:href="#icon-rw-carrow"></use>
                                                </svg>
                                                <span class="rmd-reanswer-link__text">Change answer to this question</span>
                                            </div>
                                        </div>
                                    </template>
                                    <!-- ===========================================================================
                                    Answered question block - end
                                    ============================================================================ -->
                                    <!-- ===========================================================================
                                    Focused question to answer - start
                                    ============================================================================ -->
                                    <template v-else>
                                        <div class="rmd-question__block">
                                            <svg class="icon-rw-logo">
                                                <use xlink:href="#icon-rw-logo"></use>
                                            </svg>
                                            <div class="rmd-question__label" v-html="escapeHtmlEntities(questionObj.question_label)"></div>
                                            <ul class="rmd-question__options">
                                                <li v-for='(optionObj,  index) in questionObj.optionItems' v-bind:key='index'>
                                                <div class="rmd-question__option" v-on:click="answerChosen(questionObj, optionObj, index, $event)" v-bind:class="{ active: optionObj.isSelected, focus: index == focused_answer}" ref="optList">
                                                    <div>
                                                    <svg class="icon-rw-tick">
                                                        <use xlink:href="#icon-rw-tick"></use>
                                                    </svg>
                                                    </div>
                                                    <span class="rmd-question__options--text" v-html="escapeHtmlEntities(optionObj.option_label)"></span>
                                                </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </template>
                                    <!-- ===========================================================================
                                    Focused question to answer - end
                                    ============================================================================ -->
                                </div>
                                <div class="rmd-thanks-fr-answring" v-if="canSubmitFeedback">
                                    <div class="rmd-thanks-fr-answring__text">
                                        Thanks for answering all the questions. We have computed the results and treatments for your revenue problems.
                                    </div>
                                    <button type="button" class="rmd-btn rmd-primary-btn" v-on:click="generateHSFormPage()" ref="diagnoseEndBtn">
                                        <div class="rmd-btn__container">
                                            <svg class="icon-rw-barrow hidden-xs">
                                                <use xlink:href="#icon-rw-barrow"></use>
                                            </svg>
                                            <div class="rmd-btn__text">See diagnostic report</div>
                                        </div>
                                    </button>
                                </div>
                                <!-- ===========================================================================
                                Focused question to answer - end
                                ============================================================================ -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ===========================================================================
                Answer questions section - end
                ============================================================================ -->

                <!-- =====================================================================================
                Modal Part Start
                ====================================================================================== -->
                <div class="rmd-hs-form-page" v-if="showHSFormPage">
                    <div class="cc-popup-section">
                        <div class="cc-popup-container">
                            <div id="rmd-hs-modal"></div>
                        </div>
                    </div>
                </div>
                <!-- =====================================================================================
                Modal Part end
                ====================================================================================== -->
                <!-- ===========================================================================
                Solution section - start
                ============================================================================ -->
                <div class="rmd-solution-page" v-if="showSolutionPage">
                    <div v-if="solutionData != undefined">
                        <div class="row">
                            <div class="col-sm-8 col-md-7 col-md-offset-1 col-lg-6 col-lg-offset-1 rmd-solution-page__content">
                                <div class="rmd-solution-page__header">
                                <div class="rmd-header__item rmd-logo">
                                    <svg class="icon-rw-logo">
                                        <use xlink:href="#icon-rw-logo"></use>
                                    </svg>
                                    <span class="rmd-logo__text">RevenueMD Diagnosis</span>
                                </div>
                                </div>
                                <div class="rmd-solution-page__title">
                                    {{solutionData.title}}
                                </div>
                                <div id="section0">
                                    <div class="rmd-note" v-if="solutionData.note">
                                        <div class="rmd-note__content"><b>Note: </b>{{solutionData.note}}</div>
                                    </div>
                                </div>
                                <div id="section1">
                                    <div class="rmd-problem-summary" v-if="solutionData.problem_summary.length > 0">
                                        <div class="rmd-problem-summary__heading">These are the most common problems</div>
                                        <ul class="rmd-problem-summary__list">
                                            <li v-for="(label, index) in solutionData.problem_summary" v-bind:key="index">{{label}}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="section2">
                                    <div class="rmd-solution" v-if="solutionData.solution_list.length > 0">
                                        <!-- <span class="rmd-solution__title">Solution</span> -->
                                        <ul class="rmd-solution__list">
                                            <li v-for="(solutionObj, index) in solutionData.solution_list" v-bind:key="index">
                                                <div class="rmd-solution__cause" v-if="solutionObj.cause != ''">{{solutionObj.cause}}</div>
                                                <div class="rmd-solution__block">
                                                    <div class="rmd-solution__text" v-if="solutionObj.solution != ''">{{solutionObj.solution}}</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="section3">
                                    <div class="rmd-metrics-header" v-if="solutionData.metrics_to_check.length > 0">How to keep it in check?</div>
                                    <div class="rmd-metrics" v-if="solutionData.metrics_to_check.length > 0">
                                        <!-- <div class="rmd-metrics__heading">Keep these metrics in check</div> -->
                                        <ul class="rmd-metrics__list">
                                            <li v-for="(label, index) in solutionData.metrics_to_check" v-bind:key="index">
                                            <div class="rmd-metrics__title">{{label}}</div>
                                            <div class="rmd-track">
                                                <!-- <div class="rmd-track__title">Track</div> -->
                                                <div class="rmd-track__list">
                                                    <div>
                                                        <div class="rmd-track__block">
                                                            <div class="rmd-track__text" v-if="solutionData.track_list[index] != ''">{{solutionData.track_list[index].label}}</div>
                                                        </div>
                                                        <img class="rmd-track__image" v-if="solutionData.track_list[index].imageName != ''" v-bind:class="solutionData.track_list[index].imageName" v-bind:src="require(`~/assets/images/track-references/${solutionData.track_list[index].imageName}.png`)" v-bind:alt="solutionData.track_list[index].imageName" />
                                                    </div>
                                                </div>
                                            </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="rmd-metrics-header">Get a Revenue analytics platform to constantly monitor your revenue growth</div>
                                    <div class="rmd-metrics">
                                        <div class="rmd-metrics__heading">How can RevenueStory help?</div>
                                        <div class="rmd-metrics__text">
                                            For starters, we have a dedicated churn dashboard called "Churn Watch" to monitor every single churn-related metric and report. RevenueStory lets you probe different perspectives for the same problem.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-md-4 col-lg-3 col-lg-offset-2 rmd-nav-block hidden-xs" id="navBar">
                                <ul class="nav">
                                    <li>
                                    <div class="rmd-affix__block">
                                        <div class="rmd-affix__content">
                                        <div class="rmd-affix__icon"></div>
                                        <div class="rmd-affix__title">
                                            Fix your revenue operations today
                                        </div>
                                        <div class="rmd-affix__desc">
                                            Schedule a demo to find out how Chargebee can help you streamline your revenue operations.
                                        </div>
                                        <div class="rmd-affix__links">
                                            <a href="/schedule-a-demo/?utm_source=RevMD" class="rmd-affix__link">Schedule a demo</a>
                                        </div>
                                        </div>
                                        <div class="rmd-ctas">
                                            <span v-on:click="reloadPage()" class="rmd-cta__restart">
                                                <svg style="width: 24px;height: 24px;" class="icon-rs-restart">
                                                    <use xlink:href="#icon-rs-restart"></use>
                                                </svg>
                                                <span class="rmd-cta__name">Restart Diagnosis</span>
                                            </span>
                                        </div>
                                    </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="rmd-failure-msg" v-else>
                        <div class="alert alert-danger">Failed to provide the solution.</div>
                    </div>
                </div>
                <!-- ===========================================================================
                Solution section - end
                ============================================================================ -->
            </section>
            <!-- ===========================================================================
            Section - end
            ============================================================================ -->
            <!-- ===========================================================================
            Mailchimp form - Start
            ============================================================================ -->
            <div class="rmd-form" id="rmd-form" v-if="showForm">
                <div class="container-fluid fixed-width">
                    <div class="row">
                    <div class="col-sm-push-4 col-sm-8 col-md-push-3 col-md-6 rmd-form__container">
                        <div class="icon-handbook"></div>
                        <div class="rmd-form__label">Fix your revenue operations today</div>
                        <div class="rmd-form__sublabel">
                            Schedule a demo to find out how Chargebee can help you streamline your revenue operations.
                        </div>
                        <div class="rmd-form__block">
                            <!--HubSpot Call-to-Action Code -->
                            <span class="hs-cta-wrapper" id="hs-cta-wrapper-fc8ff3a4-3eed-4198-9c90-b14034068495">
                                <span class="hs-cta-node hs-cta-fc8ff3a4-3eed-4198-9c90-b14034068495" id="hs-cta-fc8ff3a4-3eed-4198-9c90-b14034068495">
                                    <!--[if lte IE 8]><div id="hs-cta-ie-element"></div><![endif]-->
                                    <a href="https://cta-redirect.hubspot.com/cta/redirect/3732359/fc8ff3a4-3eed-4198-9c90-b14034068495"  target="_blank" >
                                        <img class="hs-cta-img" id="hs-cta-img-fc8ff3a4-3eed-4198-9c90-b14034068495" style="border-width:0px;" src="https://no-cache.hubspot.com/cta/default/3732359/fc8ff3a4-3eed-4198-9c90-b14034068495.png"  alt="Download the solutions handbook"/>
                                    </a>
                                </span>
                                <span class="rmd-hs-cta"></span>
                            </span><!-- end HubSpot Call-to-Action Code -->
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <!-- ===========================================================================
            Mailchimp form - end
            ============================================================================ -->
            <!-- ===========================================================================
            Footer - start
            ============================================================================ -->
            <footer class="rmd-footer rmd-footer--fixed">
                <div class="rmd-footer__wrapper" v-if="showLaunchPage | showSolutionPage">
                    <div class="rmd-footer__container">
                        <div class="rmd-footer__item">
                            <div class="cb-linker">
                                <a href="/" target="_blank" class="cb-linker__link">
                                    <svg class="chargebee-logo-black">
                                        <use xlink:href="#chargebee-logo-black"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <!-- <div class="footer__item hidden-xs">
                            <div class="text-with-link">
                            <a href="/" target="_blank" class="text-royal-blue">
                                Talk to our experts
                            </a>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="rmd-footer__wrapper hidden-xs rmd-question-page-footer" v-if='showQuestionPage'>
                    <div class="rmd-footer__container">
                        <div class="rmd-pb-footer">
                            <div class="rmd-help-icons">
                                <div>
                                    <svg class="icon-rw-udarrow">
                                        <use xlink:href="#icon-rw-udarrow"></use>
                                    </svg>
                                    <div>Use arrows to choose</div>
                                </div>
                                <div>
                                    <svg class="icon-rw-earrow">
                                        <use xlink:href="#icon-rw-earrow"></use>
                                    </svg>
                                    <div>Hit enter to submit</div>
                                </div>
                            </div>
                            <div class="rmd-pb-footer__percentage-display">
                                {{progressPercentageDisplayVal}}%
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- ===========================================================================
            Footer - end
            ============================================================================ -->
            <!-- ===========================================================================
            Progress bar - start
            ============================================================================ -->
            <div id="progress" v-if="showQuestionPage">
                <div id="progress-bar"></div>
            </div>
            <!-- ===========================================================================
            Progress bar - end
            ============================================================================ -->
            <!-- ===========================================================================
            Snackbar - start
            ============================================================================ -->
            <div id="snackbar" v-html="escapeHtmlEntities(snackbar.msg)" v-bind:data-status="snackbar.status"></div>
            <!-- ===========================================================================
            Snackbar - end
            ============================================================================ -->
            </NoSsr>
        </div>
    </div>
</template>
<script>
    import AppMeta from '~/components/AppMeta.vue';
    import svgSprite from '~/components/svgSprite.vue';

    const axios = require('axios');
    const urlQuestions = 'https://sheets.googleapis.com/v4/spreadsheets/1ioOCjZR71we7BzqLt1AQFM-vhwbkP7tnsfFeVAm12tM/values:batchGet?ranges=Questions&key=AIzaSyBFpNLJB1M3LOyXdiZQACQnkdJjY6jjHQU';
    const urlSolution = 'https://sheets.googleapis.com/v4/spreadsheets/1ioOCjZR71we7BzqLt1AQFM-vhwbkP7tnsfFeVAm12tM/values:batchGet?ranges=Solution&key=AIzaSyBFpNLJB1M3LOyXdiZQACQnkdJjY6jjHQU';

    var optionPattern = ['a', 'b', 'c', 'd', 'e', 'f']
    var animateSpeed = 400
    
    export default {
        components: {
            'app-meta': AppMeta,
            'svg-sprite': svgSprite
        },
        data() {
            return {
                getQuestionsFromLocal: false,
                showQuestion: false,
                wholeQuestionSet: [],
                wholeSolutionSet: [],
                questionList: [],
                answeredQuestionSet: {},
                solutionSetJson: {},
                focused_answer: -1,
                maxOptionCount: 0,
                canSubmitFeedback: false,
                showForm: false,
                formData: {
                    emailAddress: '',
                    subscribeCheckbox: 'N'
                },
                remainingProgressPercentage: 100,
                progressPercentage: '0',
                progressPercentageDisplayVal: 0,
                showLaunchPage: true,
                showQuestionPage: false,
                showSolutionPage: false,
                answeredQuestionId: undefined,
                finalQuestionWithAnswer: '',
                solutionData: undefined,
                showStartDiagnoseBtn: false,
                hideStartDiagnoseBtn: false,
                disableFeedbackBtn: false,
                showLoader: false,
                showEmailError: false,
                emailError: '',
                formSubmitted: false,
                snackbar: {
                    msg: '',
                    status: ''
                },
                token: '',
                showHSFormPage: false
            }
        },
        watch: {
            progressPercentage: function(newVal, oldVal) {
                let oldValue = oldVal
                let newValue = newVal
                let self = this
                if (typeof oldValue === 'string') {
                    oldValue = parseInt(oldValue)
                }
                if (typeof newValue === 'string') {
                    newValue = parseInt(newValue)
                }
                if (oldValue < newValue) {
                    let i = oldValue
                    let percentageDispFunc = function() {
                        if (i > newValue) {
                            clearInterval(callPercentageDispFuncOnInterval)
                            return
                        }
                        self.progressPercentageDisplayVal = i
                        i++
                    }
                    let callPercentageDispFuncOnInterval = setInterval(percentageDispFunc, 10)
                } else {
                    let i = oldValue
                    let percentageDispFunc = function() {
                        if (i < newValue) {
                            clearInterval(callPercentageDispFuncOnInterval)
                            return
                        }
                        self.progressPercentageDisplayVal = i
                        i--
                    }
                    let callPercentageDispFuncOnInterval = setInterval(percentageDispFunc, 10)
                }
            }
        },
        beforeCreate() {

        },
        mounted() {
            let self = this
            if (this.getQuestionsFromLocal) {
                let qList = require('~/assets/revenuemd/questions.json')
                this.populateQuestion(qList)
            } else {
                this.createInitialQuestionList()
            }
            this.solutionSetJson = require('~/assets/revenuemd/solution_set.json')
            $('#card-slider').scrollbox({
                speed: 50
            })
            this.adjustUI()
            document.addEventListener('keyup', this.keyEventHandler)
            window.addEventListener('resize', this.adjustUI)
            window.addEventListener('message', event => {
                if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
                    self.showHSFormPage = false
                    self.displayResultPage()
                }
            })
        },
        updated: function() {
            this.$nextTick(function() {
                if ($('#navBar ul').length === 1) {
                    $('#navBar ul').affix({
                        offset: {
                            top: $('#navBar ul').offset().top,
                            bottom: function() {
                                return ($('.rmd-form').outerHeight(true) + $('footer').outerHeight(true)) + 15
                            }
                        }
                    })
                }
            })
            this.adjustUI()
        },
        methods: {
            handleClientLoad() {
                let selfInstance = this
                selfInstance.getQuestionFromSpreadsheet()
                selfInstance.getSolutionSetFromSpreadsheet()
            },
            getQuestionFromSpreadsheet() {
                let selfInstance = this
                axios.get(urlQuestions)
                    .then((response) => {
                        let resQuestionList = selfInstance.prepareQuestionPattern(response)
                        this.populateQuestion(resQuestionList)
                    })
            },
            getSolutionSetFromSpreadsheet() {
                let selfInstance = this
                axios.get(urlSolution)
                    .then((response) => {
                        selfInstance.prepareSolutionSetPattern(response)
                    })
            },
            prepareQuestionPattern(resData) {
                let rowValues = resData.data.valueRanges[0].values
                let rowValLength = rowValues.length
                if (rowValLength > 0) {
                    let objKeyArray = rowValues[0]
                    if (rowValLength > 1) {
                        for (let i = 0; i < rowValLength; i++) {
                            if (i === 0) {
                                continue
                            }
                            let eachRowItem = rowValues[i]
                            let questionObj = {}
                            for (let j = 0; j < objKeyArray.length; j++) {
                                questionObj[objKeyArray[j]] = eachRowItem[j]
                            }
                            this.createQuestionObj(questionObj)
                            this.wholeQuestionSet.push(questionObj)
                        }
                    }
                }
                let self = this
                var setMaxNestedQuesCountForEachOptn = function(currentQuesObj, count) {
                    if (currentQuesObj.dependent !== undefined) {
                        let dependents = currentQuesObj.dependent
                        let dependentInArray = dependents.split(',')
                        for (var z = 0; z < dependentInArray.length; z++) {
                            let depQuesAns = dependentInArray[z].split(/(\d+)/)
                            self.wholeQuestionSet.map(obj => {
                                if (obj.question_id === depQuesAns[1]) {
                                    let depOptionIndex = optionPattern.indexOf(depQuesAns[2])
                                    if (obj.optionItems[depOptionIndex]['max_nested_questions'] !== undefined) {
                                        let availableCount = obj.optionItems[depOptionIndex]['max_nested_questions']
                                        obj.optionItems[depOptionIndex]['max_nested_questions'] = Math.max(availableCount, count)
                                    } else {
                                        obj.optionItems[depOptionIndex]['max_nested_questions'] = count
                                    }
                                    count++
                                    setMaxNestedQuesCountForEachOptn(obj, count)
                                }
                            })
                        }
                    }
                }
                for (let x = 0; x < this.wholeQuestionSet.length; x++) {
                    let currentQuesObj = this.wholeQuestionSet[x]
                    let count = 1
                    setMaxNestedQuesCountForEachOptn(currentQuesObj, count)
                }
                return this.wholeQuestionSet
            },
            prepareSolutionSetPattern(resData) {
                this.wholeSolutionSet = []
                let rowValues = resData.data.valueRanges[0].values
                let rowValLength = rowValues.length
                if (rowValLength > 0) {
                    let objKeyArray = rowValues[0]
                    if (rowValLength > 1) {
                        for (let i = 0; i < rowValLength; i++) {
                            if (i === 0) {
                                continue
                            }
                            let eachRowItem = rowValues[i]
                            let solutionObj = {}
                            for (let j = 0; j < objKeyArray.length; j++) {
                                solutionObj[objKeyArray[j]] = eachRowItem[j]
                            }
                            this.wholeSolutionSet.push(solutionObj)
                        }
                    }
                }
            },
            populateQuestion(questionSet) {
                let quesObj = JSON.parse(JSON.stringify(questionSet[0]))
                let quesList = []
                quesList.push(quesObj)
                this.questionList = quesList
                this.showLoader = false
                this.showStartDiagnoseBtn = !this.showLoader
                this.maxOptionCount = quesObj.optionItems.length
                this.showQuestion = true
            },
            createInitialQuestionList() {
                this.showQuestion = false
                this.questionList = []
                this.answeredQuestionSet = {}
                this.wholeQuestionSet = []
                this.showLoader = true
                this.showStartDiagnoseBtn = !this.showLoader
                this.handleClientLoad()
            },
            createQuestionObj(quesObj) {
                quesObj.isAnswered = false
                quesObj.optionItems = []
                if (quesObj.options !== '') {
                    if (quesObj.options.indexOf('|') >= 0) {
                        let optionArr = quesObj.options.split('|')
                        let constructedOptionsArr = []
                        for (let i = 0; i < optionArr.length > 0; i++) {
                            let optionObj = {
                                'option_label': optionArr[i]
                            }
                            constructedOptionsArr.push(optionObj)
                        }
                        quesObj.optionItems = constructedOptionsArr
                    } else {
                        let optionObj = {
                            'option_label': quesObj.options
                        }
                        quesObj.optionItems.push(optionObj)
                    }
                }
                return quesObj
            },
            answerChosen(questionObj, optionObj, chosenOptnIndex, event) {
                this.canSubmitFeedback = false
                this.resetForm()
                for (let i = 0; i < questionObj.optionItems.length; i++) {
                    questionObj.optionItems[i].isSelected = false
                }
                questionObj.isAnswered = true
                optionObj.isSelected = true
                optionObj.initialProgressPercentage = this.progressPercentage
                optionObj.actualRemProgressPercentage = this.remainingProgressPercentage
                let InputtedQuestionIndex = this.questionList.findIndex(function(quesObj) {
                    return quesObj.question_id === questionObj.question_id
                })
                let resultantQuestionList = this.questionList.slice(0, InputtedQuestionIndex + 1)
                let resultantAnswerSet = {}
                for (let k = 0; k < resultantQuestionList.length; k++) {
                    resultantAnswerSet[resultantQuestionList[k].question_id] = this.answeredQuestionSet[resultantQuestionList[k].question_id]
                }
                this.answeredQuestionSet = resultantAnswerSet
                this.answeredQuestionSet[questionObj.question_id] = questionObj.question_label + '\n' + optionObj.option_label
                let constructedAnswer = questionObj.question_id + optionPattern[chosenOptnIndex]
                let resultQuestion = this.wholeQuestionSet.filter(obj => {
                    let dependentAnswer = obj.dependent
                    if (dependentAnswer !== undefined) {
                        let dependentAnswerInArray = dependentAnswer.split(',')
                        return dependentAnswerInArray.indexOf(constructedAnswer) > -1
                    }
                })
                if (resultQuestion.length > 0) {
                    let clonedResultQuestion = JSON.parse(JSON.stringify(resultQuestion))
                    let quesObj = clonedResultQuestion[0]
                    this.maxOptionCount = quesObj.optionItems.length
                    resultantQuestionList.push(quesObj)
                } else {
                    this.finalQuestionWithAnswer = constructedAnswer
                    this.canSubmitFeedback = true
                }
                this.questionList = resultantQuestionList
                if (optionObj.max_nested_questions === undefined) {
                    optionObj.max_nested_questions = 0
                }
                if (this.remainingProgressPercentage < 100) {
                    let temp = 100 - this.remainingProgressPercentage
                    this.remainingProgressPercentage = this.remainingProgressPercentage + (temp / parseInt(optionObj.max_nested_questions + 1))
                } else {
                    this.remainingProgressPercentage = this.remainingProgressPercentage / parseInt(optionObj.max_nested_questions + 1)
                }
                let roundedVal = Math.round(this.remainingProgressPercentage)
                this.progressPercentage = roundedVal
                this.updateProgressBar(this.progressPercentage)
                var currentlyAnswrdQues = $(event.target).closest('.rmd-question-page__item')
                this.$nextTick(function() {
                    let positionAnswredQuestion = ($('.rmd-question').length > 0) ? $('.rmd-question').outerHeight(true) : $('.rmd-thanks-fr-answring').outerHeight(true)
                    currentlyAnswrdQues.animate({
                        bottom: positionAnswredQuestion
                    }, animateSpeed, 'linear')
                    currentlyAnswrdQues.addClass('prev').prevAll().removeClass('prev').addClass('old')
                    $('.old').each(function(index) {
                        let setBottom = 0
                        $(this).nextAll().each(function() {
                            setBottom = setBottom + $(this).outerHeight(true)
                        })
                        $(this).animate({
                            bottom: setBottom,
                            opacity: 0.2
                        }, animateSpeed, 'linear')
                    })
                })
            },
            updateProgressBar(percentage) {
                $('#progress-bar').css({
                    'width': percentage + '%'
                })
            },
            reanswerQuestion(questionObj, event) {
                var reanswerQuesItem = $(event.target).closest('.rmd-question-page__item')
                var nextItem = reanswerQuesItem.next()
                nextItem.animate({
                    bottom: -nextItem.outerHeight(true),
                    opacity: 0
                }, animateSpeed, 'linear')
                reanswerQuesItem.animate({
                    bottom: '0'
                }, animateSpeed, 'linear')
                this.canSubmitFeedback = false
                this.resetForm()
                questionObj.isAnswered = false
                let InputtedQuestionIndex = this.questionList.findIndex(function(quesObj) {
                    return quesObj.question_id === questionObj.question_id
                })
                let resultantQuestionList = this.questionList.slice(0, InputtedQuestionIndex + 1)
                this.questionList = resultantQuestionList
                let chosenOption = questionObj.optionItems.filter(obj => {
                    return obj.isSelected
                })
                this.remainingProgressPercentage = chosenOption[0].actualRemProgressPercentage
                this.progressPercentage = chosenOption[0].initialProgressPercentage
                this.updateProgressBar(this.progressPercentage)
                this.$nextTick(function() {
                    $('.old').each(function(index) {
                        let setBottom = 0
                        $(this).nextAll().each(function() {
                            setBottom = setBottom + $(this).outerHeight(true)
                        })
                        $(this).animate({
                            bottom: setBottom,
                            opacity: 0.2
                        }, animateSpeed, 'linear')
                    })
                    reanswerQuesItem.prev().removeClass('old').addClass('prev').animate({
                        opacity: 1
                    }, animateSpeed, 'linear')
                })
            },
            escapeHtmlEntities(text) {
                let sanitizedText = text.replace(/\u2028/g, '')
                return sanitizedText
            },
            constructedAnswerSet() {
                let finalAnswerSet = []
                let answerObj = this.answeredQuestionSet
                for (var answer in answerObj) {
                    if (answerObj.hasOwnProperty(answer)) {
                        finalAnswerSet.push(answerObj[answer])
                    }
                }
                return finalAnswerSet
            },
            resetForm() {
                this.canSubmitFeedback = false
                this.showForm = false
                this.formData = {
                    emailAddress: '',
                    subscribeCheckbox: 'N'
                }
                this.showEmailError = false
                this.emailError = ''
                this.formSubmitted = false
                this.focused_answer = -1
            },
            resetPage() {
                this.resetForm()
                this.createInitialQuestionList()
            },
            displayQuestionPage() {
                this.showLaunchPage = false
                this.showQuestionPage = true
                this.showSolutionPage = false
                this.scrollToTop()
            },
            displayResultPage() {
                this.showLaunchPage = false
                this.showQuestionPage = false
                this.showSolutionPage = true
                this.generateForm()
                let finalQuesWithAns = this.finalQuestionWithAnswer
                let solutionDataKeyArr = this.wholeSolutionSet.filter(obj => {
                    let finalAnswerList = obj.final_answer.replace(/\s/g, '').split(',')
                    return finalAnswerList.indexOf(finalQuesWithAns) > -1
                })
                if (solutionDataKeyArr !== undefined && solutionDataKeyArr.length >= 1 && solutionDataKeyArr[0].solution_key !== undefined) {
                    this.solutionData = this.solutionSetJson[solutionDataKeyArr[0].solution_key]
                } else {
                    let defaultSolutionData = this.solutionSetJson['default']
                    if (defaultSolutionData !== undefined) {
                        this.solutionData = defaultSolutionData
                    } else {
                        this.solutionData = undefined
                    }
                }
                this.scrollToTop()
            },
            scrollToTop() {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            },
            toggleSnackBar(message, status) {
                if (status === 'success') {
                    this.scrollToTop()
                }
                this.snackbar = {
                    msg: message,
                    status: status
                }
                var snackBarRef = $('#snackbar')
                snackBarRef.animate({
                    visibility: 'visible',
                    bottom: '50px',
                    opacity: '1'
                }, 500, function() {
                    setTimeout(function() {
                        snackBarRef.animate({
                            visibility: 'hidden',
                            bottom: '0',
                            opacity: '0'
                        }, 500)
                    }, 5000)
                })
            },
            keyEventHandler() {
                let eventKeyCode = event.keyCode
                if (this.showLaunchPage) {
                    if (eventKeyCode === 13) {
                        this.$refs.diagnoseStartBtn.click()
                    }
                } else if (this.showQuestionPage) {
                    if (eventKeyCode === 13) {
                        let chosenOptn = this.$refs.optList[this.focused_answer]
                        if (chosenOptn !== undefined) {
                            chosenOptn.click()
                        } else if (this.canSubmitFeedback) {
                            this.$refs.diagnoseEndBtn.click()
                        }
                    } else if (this.focused_answer === -1) {
                        this.focused_answer++
                    } else if (eventKeyCode === 38 && this.focused_answer > 0) {
                        this.focused_answer--
                    } else if (eventKeyCode === 40 && this.focused_answer < (this.maxOptionCount - 1)) {
                        this.focused_answer++
                    }
                } else if (this.showSolutionPage && this.showForm) {
                    if (eventKeyCode === 13) {
                        this.$refs.feedbackSubmitBtn.click()
                    }
                }
            },
            adjustUI() {
                let windowWidth = $(window).width()
                let windowHeight = $(window).outerHeight(true)
                let appHeight = $('header').outerHeight(true) + $('footer').outerHeight(true) + $('section').outerHeight()
                $('section').css({
                    'margin-top': $('header').outerHeight(true)
                })
                if (windowHeight >= appHeight) {
                    $('section').css({
                        'margin-bottom': $('footer').outerHeight(true)
                    })
                    $('.cb-body').addClass('full-screen')
                    $('footer').addClass('rmd-footer--fixed')
                } else {
                    $('section').css({
                        'margin-bottom': '0px'
                    })
                    $('.cb-body').removeClass('full-screen')
                    $('footer').removeClass('rmd-footer--fixed')
                }
                if (windowWidth <= 767) { // xs
                    $('#progress').css({
                        'top': $('header').outerHeight(true)
                    })
                } else {
                    $('#progress').css({
                        'top': 'initial'
                    })
                }
            },
            reloadPage() {
                location.reload()
            },
            generateHSFormPage(){
                let self = this
                self.showHSFormPage = true
                let scriptTag = document.createElement('script')
                var hsScript = document.createTextNode('hbspt.forms.create({portalId: "3732359",formId: "347a498d-6309-4d6a-b658-50d6ee0d387c"})')
                scriptTag.appendChild(hsScript);
                setTimeout(function() {
                    var targetElement = document.getElementById('rmd-hs-modal');
                    if(targetElement){
                        targetElement.appendChild(scriptTag)
                    }
                },100)
            },
            generateForm(){
                let self = this
                self.showForm = true
                let scriptTagCTA = document.createElement('script')
                var hsScriptCTA = document.createTextNode('hbspt.cta.load(3732359, "fc8ff3a4-3eed-4198-9c90-b14034068495", {});')
                scriptTagCTA.appendChild(hsScriptCTA);
                setTimeout(function() {
                    var targetElementCTA = document.getElementById('rmd-hs-cta');
                    if(targetElementCTA){
                        targetElementCTA.appendChild(scriptTagCTA)
                    }
                },100)
            }
        }
    }
</script>