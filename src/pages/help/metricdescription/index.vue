<template>
    <div>
        <app-meta 
            :cb-title="'RevenueStory Metric Description'" 
            :cb-desc="'RevenueStory has various in-built metrics that is used in creating insightful reports and KPI. This page contains all the key metrics available in RevenueStory.'" 
            :cb-url="'/help/metricdescription/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/metricsmanual.css'"
            :cb-head-script="''"
            :cb-body-script="'/static/website/version/scripts/metricsmanual.js'"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <div id="RSAppEl" class="rs-help-center rs-block--absolutecenter rs-block--flex">
                <div class="rs-help-center__body rs-tabs rs-flex--one">
                    <div id="RSTabsContainer" class="rs-hcbtabs__container">
                        <div id="RSFaqEl" class="rs-help-faq rs-block--hidden"></div>
                        <div id="RSHelpVideosEl" class="rs-help-video rs-block--hidden"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="rs-block--hidden">
                            <symbol id="search" viewBox="0 0 24 24">
                                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path>
                            </symbol>
                        </svg>
                        <div id="RSReportHelpContainerEl" class="rs-metricsmanual rs-block--hidden">
                            <div class="rs-reporthelp__content">
                                <div class="rs-reporthelp__mcontent-old">
                                    <div class="rs-rhcontent__header">
                                        <h1 class="rs-rhcheader__title">Metric Description</h1>
                                        <div class="rs-rhcheader__search rs-flex--one">
                                            <div class="rs-textbox rs-flex--aligncenter" rs-view="textbox">
                                                <svg class="s-icon rs-textbox--icon rs-fill--grey" rs-view="">
                                                    <use xlink:href="#search"></use>
                                                    <rect x="0" y="0" height="100%" width="100%" rs-view="" fill="transparent" />
                                                </svg>
                                                <input id="RSHelpSearchTextBoxEl" class="rs-textbox__input rs-flex__one rs-flex--one rs-input--nofocus rs-input--light" type="text" placeholder="Search metrics" value="" rs-view="text" textField="true" tabindex="-1" style='min-width:610px' onkeyup='RSMetricsManualController.filter(event, this)'>
                                                <div class="rs-textbox__message" rs-view="message"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="RSReportHelpEl" class="rs-rhcontent__container">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="RSDomCache" class="rs-block--hidden">
                    <div id="RSPopUpEl" class="rs-popup rs-block--absolutecenter">
                        <div class="rs-popup__header" rs-view="header">
                            <div class="rs-pheader__prefix"></div>
                            <div class="rs-pheader__name rs-tooltip--right" rs-view="name"></div>
                            <div class="rs-pheader__suffix"></div>
                            <div class="rs-pheader__actions" rs-view="actions">
                                <div class="rs-phactions__custom">
                                    <div class="btn rs-phacustom__button rs-block--hidden gutter__right--small" rs-view="action"></div>
                                </div>
                                <div class="btn btn-icon btn--icon-only rs--noborder btn-secondary" rs-view="close">
                                    <svg class="s-icon rs-fill--grey" rs-view="">
                                        <use xlink:href="#close"></use>
                                        <rect x="0" y="0" height="100%" width="100%" rs-view="" fill="transparent" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="rs-popup__container" rs-view="container"></div>
                    </div>
                    <div id="RSPopUpActionEl" class="rs-popupaction rs-block--absolutecenter" rs-click="$stopPropagation(event)">
                        <div class="rs-popupaction__header">
                            <div class="rs-paheader__left">
                                <div class="rs-paheader__title" rs-view="name"></div>
                            </div>
                            <div class="rs-paheader__right" rs-view="buttons">
                                <div class="btn btn--hl" rs-view="action"></div>
                                <svg class="s-icon" rs-view="">
                                    <use xlink:href="#"></use>
                                    <rect x="0" y="0" height="100%" width="100%" rs-view="" fill="transparent" />
                                </svg>
                                <div class="btn btn-icon btn--icon-only rs--noborder rs-paheader__close btn-secondary" rs-view="close">
                                    <svg class="s-icon rs-fill--grey" rs-view="">
                                        <use xlink:href="#close"></use>
                                        <rect x="0" y="0" height="100%" width="100%" rs-view="" fill="transparent" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="rs-popupaction__container" rs-view="container">
                        </div>
                    </div>
                    <div id="RSPopUpAlertEl" class="rs-popupalert rs-block--absolutecenter" rs-click="$stopPropagation(event)">
                        <div class="rs-popupalert__header" rs-view="name">
                            <svg class="s-icon rs-cursor--pointer rs-fill--orange rs-block--hidden" rs-view="icon">
                                <use xlink:href="#warning"></use>
                                <rect x="0" y="0" height="100%" width="100%" rs-view="" fill="transparent" />
                            </svg>
                            <div class="rs-paheader__name" rs-view="name"></div>
                        </div>
                        <div class="rs-popupalert__container" rs-view="container"></div>
                        <div class="rs-popupalert__actions" rs-view="actions">
                            <div class="btn gutter__right rs--noborder btn-secondary" rs-view="cancel"></div>
                            <div class="btn" rs-view="ok"></div>
                        </div>
                    </div>
                    <div id="RSFAQSectionEl" class="rs-faq__section">
                        <div class="rs-faqs__name" rs-view="name"></div>
                        <div class="rs-faqs__ques" rs-view="ques"></div>
                    </div>
                    <div id="RSFAQQuestionHolderEl" class="rs-fhelp__question" rs-question>
                        <div class="rs-fhelpq__ques" rs-view="question"></div>
                        <div class="rs-fhelpq__icon"></div>
                        <div class="rs-fhelpq__ans" rs-view="answer"></div>
                    </div>
                    <div id="RSReportHelpItemEl" class="rs-reporthelp__item">
                        <div class="rs-rhitem__title" rs-view="name"></div>
                        <div class="rs-rhitem__oneliner">
                            <div class="rs-rhitem__content" rs-view="oneliner"></div>
                            <div class="rs-rhionliner__more rs-readmore" rs-view="more">More</div>
                        </div>
                        <div class="rs-rhicontent__collapse">
                            <div class="rs-rhitem__heading" rs-view="descname">Explanation of metric</div>
                            <div class="rs-rhitem__content" rs-view="desc"></div>
                            <div class="rs-rhitem__heading" rs-view="calcname">How it's measured</div>
                            <div class="rs-rhitem__content" rs-view="calc"></div>
                            <div class="rs-rhitem__heading" rs-view="indicatorname">Reading</div>
                            <div class="rs-rhitem__content" rs-view="indicator"></div>
                            <div class="rs-rhitem__heading" rs-view="interpretationname">Interpretation</div>
                            <div class="rs-rhitem__content" rs-view="interpretation"></div>
                            <div class="rs-rhitem__less rs-readmore" rs-view="less">Less</div>
                        </div>
                    </div>
                </div>
                <div id="RSModalEl" class="rs-app__modal rs-block--absolutecenter rs-animation--modal" rs-click="ON_MODEL_CLICK_HIDE"></div>
                <div id="RSLoaderEl" class="rs-app__loader rs-block--absolutecenter icon icon-loader icon--xxl"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import AppMeta from '~/components/AppMeta.vue';
    import AppHeader from '~/components/AppHeader.vue';
    
    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader
        },
        mounted() {
            var metricsManual = document.createElement("script");
            metricsManual.type ="text/javascript";
            var metricsManualCodeSnippet = document.createTextNode(
				`RSHelpCenterController.changeAppMode('metricsmanual');`
			);
            metricsManual.appendChild(metricsManualCodeSnippet);
            // $("body").append(metricsManual);
        }
    }
</script>
<style>
    .rs-hcbtabs__container{
        margin-top: 80px;
        height: calc(100% - 80px);
    }
    .rs-help-center__body.rs-tabs.rs-flex--one{
        position: relative;
    }
    .rs-help-center__body.rs-tabs.rs-flex--one:before,
    .rs-help-center__body.rs-tabs.rs-flex--one:after{
        content: '';
        width: 100%;
        height: 30px;
        display: inline-block;
        z-index: 99;
        position: absolute;
    }

    .rs-help-center__body.rs-tabs.rs-flex--one:before {
        top: 80px;
        background: linear-gradient(180deg,#eff1f8 0,rgb(239, 241, 248, 0) 100%);
    }
    .rs-help-center__body.rs-tabs.rs-flex--one:after {
        bottom: 0;
        background: linear-gradient(0deg,#eff1f8,rgba(239,241,248,0));
    }
</style>