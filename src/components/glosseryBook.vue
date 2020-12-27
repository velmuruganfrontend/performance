<template>
    <div class="cc-card" id="cc-card">
        <div class="cc-card__container">
            <div class="cc-card__main">
                <div class="cc-card__header">
                    <div class="cc-card__title">
                        The Ultimate Guide to Revenue Operations
                    </div>
                    <div class="cc-card__desc">
                        See how you can drive efficiency into your RevOps with our extensive guide.
                    </div>
                </div>
                <div class="cc-card__action">
                    <a href="/resources/guides/revenue-operations-saas-download/?ref=glossaries" class="cc-link">Download Guide</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .cc-card {
        margin: 40px -15px;
        padding: 56px 24px;
        background-color: rgba(90, 122, 190, 0.1);
        border-radius: 6px;
        background-image: url('/static/resources/glosserybook/rev-ops-guide.png');  
        background-size: 600px;
        background-repeat: no-repeat;
        background-position: -70px -70px;
    }
    .cc-card__main {
        padding-top: 220px;
        max-width: 320px;
    }
    @media (min-width: 768px) {
        .cc-card {
            margin: 120px auto;
        }
        .cc-card__main {
            margin-right: 0;
            margin-left: auto;
            padding-top: 0;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px) {
        .cc-card__main {
            padding-top: 220px;
            margin: 0;
        }
    }
    .cc-card__title {
        color: #00001E;
        font-family: basis-grotesque, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 24px;
        font-weight: bold;
        line-height: 32px;
        margin-bottom: 18px;
        letter-spacing: -0.3px;
        max-width: 500px;
    }
    .cg-article__desc {
        color: #00001E;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        letter-spacing: 0.11px;
        font-size: 18px;
        line-height: 30px;
    }
    .cc-card__action a {
        color: #00000a;
        padding: 12px;
        border: 1px solid #00000a;
        border-radius: 4px;
        text-align: center;
        max-width: 180px;
        font-weight: bold;
        margin-top: 24px;
        display: block
    }
    .cc-card__action a:hover, .cc-card__action a:focus{
        outline: none;
        text-decoration: none;
        color: #00000a;
    }
</style>