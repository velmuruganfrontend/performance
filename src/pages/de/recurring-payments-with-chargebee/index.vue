<template>
    <div>
        <app-meta
            :cb-title="'Maximize Recurring Payments With Chargebee'"
            :cb-desc="'Supplement your subscription growth with this guide that summarizes ways you can use Chargebee to achieve key metrics in your Revenue Operations.'"
            :cb-url="'/de/recurring-payments-with-chargebee/'"
            :cb-image="''"
            :cb-style="'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.8.0/css/flag-icon.min.css,/static/website/version/styles/sprint.css'"
            :cb-head-script="''"
            :cb-body-script="'https://js.chilipiper.com/marketing.js,https://js.hsforms.net/forms/v2.js,/static/website/version/scripts/product.js,https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js'"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" :disableLogoClick="true" :hideMiddleMenu="true" :hideHeaderCta="true" />
        <!-- ===================================================================
        End: Website Meta and Header
        ==================================================================== -->
        <div class="ct-body">
            <div class="ct-row" style="position: relative">
                <!-- -------------------------------------------------------------------
                Start: Hero
                -------------------------------------------------------------------  -->
                <section class="ct-hero" style="position: relative; z-index: 1;">
                    <div class="container">
                        <div class="row ct-hero__flex">
                            <div class="col-sm-6 col-sm-offset-0 col-md-6 col-md-offset-0">
                                <div class="ct-hero__container">
                                    <div class="ct-hero__header">
                                        <div class="ct-hero__label">
                                            <span class="ct-hero__icon">
                                                <img src="/static/website/version/images/sprint/g2.png" alt="Best Recurring Billing Software | G2 Crowd 2020" width="24" class="img-responsive" style="margin-right: 12px;">
                                            </span>
                                            <span class="ct-hero__heading">
                                                Best Recurring Billing Software | G2 Crowd 2020
                                            </span>
                                        </div>
                                        <h1 class="ct-hero__title">
                                            Mit Chargebee vereinfachte Paiements récurrents <br class="visible-lg"><span class="ct-hero__highlight">wiederkehrende Zahlungen</span>
                                        </h1>
                                    </div>
                                    <div class="ct-hero__footer">
                                        <div class="ct-hero__desc">
                                            Integriert mit 24+ Zahlungsgateways und akzeptiert wiederkehrende Zahlungen in mehr als 100 Währungen und Zahlungsmethoden.
                                        </div>
                                        <div class="ct-hero__figure">
                                            <img src="/static/website/version/images/sprint/pg.svg" alt="" class="img-responsive">
                                        </div>
                                    </div>
                                </div>

                                <!-- -------------------------------------------------------------------
                                Start: Side media
                                -------------------------------------------------------------------  -->
                                <div class="ct-medias">
                                    <div class="ct-media">
                                        <div class="ct-media__head">
                                            <img src="/static/website/version/images/sprint/icons/completely-customizable-pci-compliant-checkout.svg" alt="Customer Acquisition" width="52">
                                        </div>
                                        <div class="ct-media__header">
                                            <h3 class="ct-media__label" style="display: none;">
                                                acquisition de clients
                                            </h3>
                                            <div class="ct-media__heading">
                                                Vollständig Anpassbarer PCI-Konformer Checkout
                                            </div>
                                        </div>
                                        <div class="ct-media__footer">
                                            <div class="ct-media__desc">
                                                Sorgt für einen reibungslosen und sicheren Ablauf an der Kasse, indem Zahlungen per Kreditkarte, Digital Wallets, Lastschriften und mehr akzeptiert werden.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ct-media">
                                        <div class="ct-media__head">
                                            <img src="/static/website/version/images/sprint/icons/sell-across-geographies-with-global-tax-support.svg" alt="Dunning Management" width="48">
                                        </div>
                                        <div class="ct-media__header">
                                            <h3 class="ct-media__label" style="display: none;">
                                                gestion de fiscalité
                                            </h3>
                                            <div class="ct-media__heading">
                                                Geografisch übergreifend verkaufen mit Unterstützung des internationalen Steuerrechts.
                                            </div>
                                        </div>
                                        <div class="ct-media__footer">
                                            <div class="ct-media__desc">
                                                Sorgt für eine friedliche Anpassung durch Vorwegnahme von weltweite Änderungen der Steuerregeln, Vorschriften und Compliance.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ct-media">
                                        <div class="ct-media__head">
                                            <img src="/static/website/version/images/sprint/icons/recover-failed-payments-and-maximize-revenue-opportunities.svg" alt="Dunning Management" width="52">
                                        </div>
                                        <div class="ct-media__header">
                                            <h3 class="ct-media__label" style="display: none;">
                                                gestion de relance
                                            </h3>
                                            <div class="ct-media__heading">
                                                Gescheiterte Zahlungen wiederherstellen und Einnahmemöglichkeiten maximieren
                                            </div>
                                        </div>
                                        <div class="ct-media__footer">
                                            <div class="ct-media__desc">
                                                Einrichtung einer intelligenten Retry-Logik und von Backup-Zahlungsoptionen, um zahlungsbedingte unfreiwillige Abwanderung zu verhindern.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- -------------------------------------------------------------------
                                End: Side media
                                -------------------------------------------------------------------  -->
                            </div>

                            <div class="col-sm-6 col-sm-offset-0 col-md-6 col-md-offset-0 col-lg-5 col-lg-offset-1">
                                <div class="ct-hero__tall">
                                    <div class="ct-hero__affix">
                                        <demo-form :page-name="'demo-website-de'" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- -------------------------------------------------------------------
                End: Hero
                -------------------------------------------------------------------  -->
                <div style="background: #F5F7FF; max-height: 660px; position: absolute; top: 0; right: 0; left: 0; min-height: 660px; z-index: 0;"></div>
            </div>
            <!-- -------------------------------------------------------------------
            Start: Billing Logic
            -------------------------------------------------------------------  -->
            <div class="ct-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="ct-media__header">
                                <h2 class="ct-media__title ct-media__title--alt">
                                    Richten Sie Ihren wiederkehrenden <br class="visible-lg" />Rechnungs-Workflow ein
                                </h2>
                                <div class="ct-media__desc ct-media__desc--alt">
                                    Automatisieren Sie alle Ihre wiederkehrenden Rechnungsvorgänge von der Invoice Logic, angepassten Rechnungsdaten, anteilige Berechnungen, Upgrades, Selbstbedienungsportalen und mehr.
                                </div>
                            </div>
                            <img src="/static/website/version/images/sprint/how-chargebee-works--de.png" alt="" width="" class="img-responsive">
                        </div>
                    </div>
                </div>
            </div>
            <!-- -------------------------------------------------------------------
            End: Billing Logic
            -------------------------------------------------------------------  -->
            <!-- -------------------------------------------------------------------
            Start: Payment gateways
            -------------------------------------------------------------------  -->
            <div class="ct-row">
                <!-- -------------------------------------------------------------------
                Start: Payment gateways
                -------------------------------------------------------------------  -->
                <payment-gateway title="Wir unterstützen wiederkehrende Zahlungen in über 150 Ländern" />
                <!-- -------------------------------------------------------------------
                End: Payment gateways
                -------------------------------------------------------------------  -->
            </div>
            <!-- -------------------------------------------------------------------
            Start: Testimonial Section
            -------------------------------------------------------------------  -->
            <div class="ct-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 col-md-12 col-md-offset-0">
                            <div class="cc-casestudy">
                                <div class="cc-casestudy__container">
                                    <div class="cc-casestudy__aside" style="background: url('/static/website/version/images/case-study/study/study-testimonial.png') center / cover no-repeat">
                                        <div class="cc-casestudy__logo" >
                                            <img src="/static/website/version/images/case-study/study/study-logo-white.png" alt="" class="img-responsive" style="filter: brightness(100%) invert(0);"/>
                                        </div>
                                    </div>
                                    <div class="cc-casestudy__main">
                                        <div class="cc-casestudy__content">
                                            "Wir verwenden Stripe als unsere Prozesslösung, und Chargebee konnte sich ohne Komplikationen "oben draufsetzen", hatte besseren Zugang zu Echtzeit-Informationen bezüglich der Abonnementmetriken und bietete die Möglichkeit, eine breitere Palette von Zahlungsmethoden zu akzeptieren."
                                        </div>
                                        <div class="cc-casestudy__footer">
                                            <div class="cc-casestudy__author">
                                                <div class="cc-casestudy__name">
                                                    Tim Beiser
                                                </div>
                                                <div class="cc-casestudy__desig">
                                                    Finanzdirektor
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
            <!-- -------------------------------------------------------------------
            Start: Customer Logo
            -------------------------------------------------------------------  -->
            <div class="ct-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="ct-slider ct-slider--customers">
                                <h2 class="ct-slider__info">
                                    Des milliers d'entreprises effectuent des paiements sans problème grâce à Chargebee
                                </h2>

                                <div class="ct-slider__figure">
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
                                <div class="ct-slider__actions">
                                    <div class="ct-slider__action">
                                        <div class="cb-formscroll ct-btn">
                                            Demo starten
                                        </div>
                                    </div>
                                    <div class="ct-slider__action">
                                        <a href="/pricing/" class="ct-btn ct-btn--ghost">
                                            View Pricing
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- -------------------------------------------------------------------
            Start: Footer Section
            -------------------------------------------------------------------  -->
            <!-- -------------------------------------------------------------------
            Start: Billing Logic
            -------------------------------------------------------------------  -->
            <div class="ct-row ct-row--hidden" allFeatures>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="ct-media__header" style="margin-bottom: 80px;">
                                <h2 class="ct-media__title">
                                    Simplifier la facturation récurrente <br class="visible-lg">de la <span class="ct-media__highlight">commande à l'encaissement</span>
                                </h2>
                            </div>
                            <div class="ct-media__container">
                                <div class="ct-media__section">
                                    <div class="row">
                                        <!-- -------------------------------------------------------------------
                                        Start: Section one
                                        -------------------------------------------------------------------  -->
                                        <div class="col-sm-6 col-md-5">
                                            <div class="ct-media__content" style="padding-bottom: 32px;">
                                                <h4 class="ct-media__heading" style="font-weight: normal;">Wiederkehrende Zahlungen </h4>
                                            </div>
                                            
                                            <div class="ct-media__lists">
                                                <ul class="ct-media__list">
                                                    <li class="ct-media__item">
                                                        <strong>Mehrere Zahlungs-Gateways</strong>
                                                        Verbinden Sie sich mit mehr als 23 Zahlungs-Gateways auf der ganzen Welt, einschließlich Stripe, Braintree, Adyen, GoCardless, usw.
                                                    </li>

                                                    <li class="ct-media__item">
                                                        <strong>Mehrere Zahlungsmethoden</strong>
                                                        Von der Kreditkarte bis zum Lastschriftverfahren, ermöglichen Sie Ihren Kunden mehrere Online- und Offline-Zahlungsmethoden zu benutzen.
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Unterstützung des internationalen Steuerrechts</strong>
                                                        Wenden Sie globale Steuern wie US Sales Tax, EU VAT, GST, usw. für alle Ihre Rechnungen an.
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Wiederholungsversuche und Zahlungserinnerung</strong>
                                                        Wiederherstellen potenziell verlorener Einnahmen über den Autopiloten - Anpassen von Wiederholungsversuchen, E-Mails und der gesamten Sequenz.
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Individueller Checkout</strong>
                                                        Von der Bereitstellung mehrerer Zahlungsmethoden bis hin zur Minimierung der Formularfelder - bietet Chargebee eine reibungslose Abwicklung des Checkouts.
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                         <!-- -------------------------------------------------------------------
                                        Start: Section Two
                                        -------------------------------------------------------------------  -->
                                        <div class="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-2">
                                            <div class="ct-media__content" style="padding-bottom: 32px;">
                                                <h4 class="ct-media__heading" style="font-weight: normal;">Fakturierung und Rechnungsstellung</h4>
                                            </div>
                                            
                                            <div class="ct-media__lists">
                                                <ul class="ct-media__list">
                                                    <li class="ct-media__item">
                                                        <strong>Rechnungserstellung</strong>
                                                        Erstellen und Anpassen von Rechnungen, Hinzufügen oder Entfernen von Positionen, Ausstellen von Gutschriften, Rückerstattungen und mehr.
                                                    </li>

                                                    <li class="ct-media__item">
                                                        <strong>Flexible Fakturierung</strong>
                                                        Wählen Sie ein individuelles Fakturierungsdatum und -häufigkeit für jeden einzelnen Kunden.
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Handhabung der anteilige Berechnungen</strong>
                                                        Passen Sie den Rechnungsbetrag Ihres Kunden an alle Planänderungen während des Abrechnungszyklus an.
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Geplante Rechnungsstellung</strong>
                                                        Wählen Sie das Rechnungsdatum (wöchentlich, monatlich und jährlich) für Ihre Kunden, unabhängig vom Datum ihrer Anmeldung.
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Konsolidierte Rechnungsstellung</strong>
                                                        Fassen Sie alle erzeugten Einzelrechnungen zu einer einzigen Rechnung zusammen und senden Sie diese an Ihre Kunden.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <!-- -------------------------------------------------------------------
                                        Start: Section Three
                                        -------------------------------------------------------------------  -->
                                        <div class="col-sm-6 col-md-5">
                                            <div class="ct-media__content" style="padding-bottom: 32px;">
                                                <h4 class="ct-media__heading" style="font-weight: normal;">Verwaltung der Abonnements</h4>
                                            </div>
                                            
                                            <div class="ct-media__lists">
                                                <ul class="ct-media__list">
                                                    <li class="ct-media__item">
                                                        <strong>Mehrere Preismodelle</strong>
                                                        Ermöglichen Sie benutzerdefinierte Preise, Grandfathering, Rechnungsstellung an Ihre Kunden auf Basis der Nutzung und mehr.
                                                    </li>

                                                    <li class="ct-media__item">
                                                        <strong>Trial & Plan Management</strong>
                                                        Erstellen Sie verschiedene Pläne und Preismodelle, die für verschiedene Personen geeignet sind.
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Rabatte, Coupons und Addons</strong>
                                                        Erstellen Sie effektive Rabatt- und Coupon-Kampagnen, verfolgen Sie diese und steigern Sie Ihren Umsatz.
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Self-Service-Portal für Kunden</strong>
                                                        Lassen Sie Kunden ihre Konten verwalten, Upgrade-/Downgrade-Pläne erstellen, Zahlungsinformationen aktualisieren usw.
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>E-Mail-Nachrichten</strong>
                                                        Senden Sie leistungsstarke, benutzerdefinierte und kontextbezogene E-Mails an Ihre Kunden.
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                        <!-- -------------------------------------------------------------------
                                        Start: Section Four
                                        -------------------------------------------------------------------  -->
                                        <div class="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-2">
                                            <div class="ct-media__content" style="padding-bottom: 32px;">
                                                <h4 class="ct-media__heading" style="font-weight: normal;">Buchhaltung und Berichterstattung</h4>
                                            </div>
                                            
                                            <div class="ct-media__lists">
                                                <ul class="ct-media__list">
                                                    <li class="ct-media__item">
                                                        <strong>Umsatzrealisierung</strong>
                                                        Bewältigen Sie Problemen in der Buchhaltung und im Finanzwesen für Ihr Unternehmen mit ASC 606 und IFRS 15 konformer RevRec.
                                                    </li>

                                                    <li class="ct-media__item">
                                                        <strong>Metriken und Analysen</strong>
                                                        Verfolgen Sie MRR, Churn, LTV/CAC und mehr, um Wachstumshebel mit einer 360°-Sicht auf Ihr gesamtes Unternehmen zu identifizieren.
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Zahlungsabgleich</strong>
                                                        Abgleich von Gateway-Transaktionen mit Kontoauszügen durch One-Click-Automatisierung.
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Benutzerdefinierte Berichte</strong>
                                                        Analysieren Sie Ihr Unternehmenswachstum mit benutzerdefinierten Berichten, die auf Ihre Anforderungen abgestimmt sind.
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Filter und Dashboards</strong>
                                                        Richten Sie Filter und Dashboards ein, um kritische Stellen zu identifizieren.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- -------------------------------------------------------------------
                                        Start: Section Four
                                        -------------------------------------------------------------------  -->
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div showAll class="ct-row__btn">
                            View more &darr;
                        </div>
                    </div>
                </div>
            </div>
            <!-- -------------------------------------------------------------------
            End: Billing Logic
            -------------------------------------------------------------------  -->
            <div class="ct-row">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="ct-panel">
                                <div class="ct-panel__header">
                                    <div class="ct-panel__title">
                                        Synchronisieren Sie Ihre Daten mit Integrationen, die für Ihre Lieblingsplattformen erstellt wurden.
                                    </div>
                                    <div class="ct-panel__desc">
                                        Erleben Sie mit Chargebee den intelligentesten Ansatz zur Automatisierung wiederkehrender Zahlungen.
                                    </div>
                                </div>
                                <div class="ct-panel__content">
                                    <div class="ct-panel__figure">
                                        <img src="/static/website/version/images/sprint/integration.svg" alt="" class="img-responsive">
                                    </div>
                                </div>
                                <div class="ct-panel__actions">
                                    <div class="ct-panel__action">
                                        <div class="cb-formscroll ct-btn">
                                            Demo starten
                                        </div>
                                    </div>
                                    <div class="ct-panel__action">
                                        <a href="/pricing/" class="ct-btn ct-btn--ghost">
                                            View pricing
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
        End: Website Footer
        ==================================================================== -->
    </div>
</template>
<script>
    import AppMeta from '~/components/AppMeta.vue';
    import AppHeader from '~/components/AppHeader.vue';
    import AppFooter from '~/components/AppFooter.vue';
    import demoForm from '~/components/demoForm.vue';
    import paymentGateway from '~/components/paymentGateway.vue';
    import caseStudy from '~/components/caseStudy.vue';

    export default {
        components: {
            'app-meta': AppMeta,
            'app-header': AppHeader,
            'app-footer': AppFooter,
            'demo-form' : demoForm,
            'payment-gateway': paymentGateway,
            'case-study': caseStudy
        },

        mounted() {
            $( window ).load(function() {
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


                function hsFormLoaded() {
                    if ($('.cc-demo__form form').length) {
                        $('.cc-demo__form form label[id*="label-firstname"] span:first-child').text('Vorname')
                        $('.cc-demo__form form label[id*="label-phone"] span:first-child').text('Telefonnummer')
                        $('.cc-demo__form form label[id*="label-website"] span:first-child').text('Webadresse')
                        $('.cc-demo__form form input[type="submit"]').val('Demo starten')
                        clearInterval(checkIsHsFormLoaded);
                    }
                }
                var checkIsHsFormLoaded = setInterval(hsFormLoaded, 1000);

                //For show all features
                $('[showAll]').on('click', function(){
                    $(this).remove();
                    $('[allFeatures]').removeClass('ct-row--hidden').addClass('ct-row--visible');
                });

                //Click to scroll top
                $('.cb-formscroll').on("click",function(){
                        $(window).scrollTop(0);
                });
            })
        }
    }
</script>

<style type="text/css">
    #ch-js-header-cloned{
        display: none;
    }
    :root{
        --ff_base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        --ff_primary: basis-grotesque, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        --ff_mono: "SFMono-Regular", monospace, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

        --clr_base: #00000A;
        --clr_base_dark: #00000A;
    }



    .cc-casestudy__container {
        overflow: hidden;
        border: 1px solid #EFEFF1;
        box-shadow: 0 4px 16px 0 rgba(0,0,0,0.09);
        margin: 0 -15px;
    }
    .cc-casestudy__logo {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,0.5);
        padding: 120px 60px;
    }
    .cc-casestudy__logo > img{
        min-width: 320px;
        max-width: 320px;
        filter: brightness(0) invert(1);
        -webkit-filter: brightness(0) invert(1);
    }
    .cc-casestudy__main {
        padding: 32px 40px;
        position: relative;
    }
    .cc-casestudy__footer {
        text-align: right;
        margin-top: 30px;
    }
    .cc-casestudy__content{
        color: var(--clr_base);
        font-family: var(--ff_base);
        font-size: 20px; 
        letter-spacing: -0.2px; 
        line-height: 32px;
    }
    .cc-casestudy__author {
        display: inline-flex;
        flex-flow: column;
        align-items: center;
    }
    .cc-casestudy__name{
        font-family: var(--ff_mono);
        font-size: 24px;
        font-weight: bold;
        line-height: 28px;
        margin-bottom: 3px;
    }
    .cc-casestudy__desig{
        color: #00000A;
        font-family: var(--ff_base);
        font-size: 18px;
        font-weight: 500;
        line-height: 21px;
    }
    @media (min-width: 768px){
        .cc-casestudy__container {
            border-radius: 12px;
        }
        .cc-casestudy__content{
            font-size: 18px; 
            line-height: 28px;
        }

        .cc-casestudy__footer {
            margin-top: 60px;
        }
        .cc-casestudy__main {
            padding: 50px 80px 50px 60px;
        }
        .cc-casestudy__main:before {
            content: "";
            width: 60px;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            margin-left: -30px;
            /*background: linear-gradient(85deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0) 50%,rgba(255,255,255,1) 50%,rgba(255,255,255,1) 100%);*/
            background: #fff;
            transform: rotate(-5deg) scale(1.025);
        }
    }
    @media (min-width: 992px){
        .cc-casestudy__container {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (min-width: 1200px){
        .cc-casestudy__container {
            margin: 0 -40px;
        }
        .cc-casestudy__content{
            font-size: 24px; 
            line-height: 34px;
        }
        .cc-casestudy__name{
            font-size: 34px;
            line-height: 40px;
            margin-bottom: 8px;
        }
    }
    .pg-component__feature__block a{
        color: #00000a !important;
        pointer-events: none !important;
    }
    .pg-component .pg-component__desc{
        display: none !important;
    }
    .ct-media__title--alt{
        margin-bottom: 12px;
    }
    .ct-media__desc--alt{
        margin-bottom: 30px;
    }
    @media (min-width: 768px){
        .ct-media__title--alt,.ct-media__desc--alt{
            text-align: center;
        }
        .ct-media__desc--alt{
            max-width: 480px;
            margin: auto;
            margin-bottom: 40px;
        }
    }
</style>
