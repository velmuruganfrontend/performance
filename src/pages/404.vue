<template>
    <div>
        <app-meta 
            :cb-title="'Page Not Found - Chargebee'" 
            :cb-desc="'Oops! We can\'t find the page you\'re looking for'" 
            :cb-url="'/404.html'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/bootstrap.css,/static/website/version/styles/404.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <div class="pad-top-head-height">
                <!-- ===========================================================================
                START: Main Body Content
                ============================================================================ -->
                <div class="cw-main__wrap">
                <!-- ===========================================================================
                START: Main Content
                ============================================================================ -->
                <main class="cw-main">
                    <!-- ===========================================================================
                    START: Article
                    ============================================================================ -->
                    <div class="cw-article">
                        <div class="cw-article__inwrap">
                            <div class="cw-article__title">Whoops!<br>  Can’t find the page <br class="visible-xs">you’re looking for.</div>
                            <div class="cw-article__desc">Head back to our <a href="/" class="cw-article__link">homepage.</a></div>
                            <div class="cw-article__graphic">
                            <img class="img-responsive cw-article__image" src="/static/website/version/images/404/404-graphic.svg">
                            <img class="img-responsive cw-article__image-bg" src="/static/website/version/images/404/404-graphic-bg.svg">
                            </div>
                        </div>
                    </div>
                    <!-- ===========================================================================
                    END: Article
                    ============================================================================ -->
                </main>
                <!-- ===========================================================================
                END: Main Content
                ============================================================================ -->
                </div>
                <!-- ===========================================================================
                END: Main Body Content
                ============================================================================ -->
            </div>
        </div>        
        <!-- ===================================================================
        Start: Website Footer
        ==================================================================== -->
        <app-footer />
        <!-- ===================================================================
        End: Website Footer
        ==================================================================== -->
    </div>
</template>

<script>
  import AppMeta from '~/components/AppMeta.vue';
  import AppHeader from '~/components/AppHeader.vue';
  import AppFooter from '~/components/AppFooter.vue';
    
	export default {
		components: {
			'app-meta': AppMeta,
			'app-header': AppHeader,
			'app-footer': AppFooter
        }
    }
</script>
<style type="text/css" media="screen">
    .features-block .media-list{
        display: inline-block;
    }
    .signup-block{
        display: none;
    }
</style>