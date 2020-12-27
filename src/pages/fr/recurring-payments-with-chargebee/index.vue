<template>
    <div>
        <app-meta
            :cb-title="'Maximize Recurring Payments With Chargebee'"
            :cb-desc="'Supplement your subscription growth with this guide that summarizes ways you can use Chargebee to achieve key metrics in your Revenue Operations.'"
            :cb-url="'/fr/recurring-payments-with-chargebee/'"
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
                                            Paiements récurrents <br class="visible-lg"><span class="ct-hero__highlight">simplifiés</span> avec Chargebee
                                        </h1>
                                    </div>
                                    <div class="ct-hero__footer">
                                        <div class="ct-hero__desc">
                                            Plus de 24 passerelles de paiement compatibles <br class="visible-lg">avec le logiciel et 100 devises et mode de paiement acceptés pour les paiements récurrents.
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
                                            <h3 class="ct-media__label">
                                                acquisition de clients
                                            </h3>
                                            <div class="ct-media__heading">
                                                Paiement entièrement personnalisable en conformant à la norme de sécurité PCI
                                            </div>
                                        </div>
                                        <div class="ct-media__footer">
                                            <div class="ct-media__desc">
                                                Offrir une expérience de paiement fluide et sécurisée en acceptant les paiements par carte de crédit, portefeuille électronique, débit direct, etc.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ct-media">
                                        <div class="ct-media__head">
                                            <img src="/static/website/version/images/sprint/icons/sell-across-geographies-with-global-tax-support.svg" alt="Dunning Management" width="48">
                                        </div>
                                        <div class="ct-media__header">
                                            <h3 class="ct-media__label">
                                                gestion de fiscalité
                                            </h3>
                                            <div class="ct-media__heading">
                                                Vendre dans toutes les zones géographiques avec un soutien fiscal mondial
                                            </div>
                                        </div>
                                        <div class="ct-media__footer">
                                            <div class="ct-media__desc">
                                                Évoluer en toute tranquillité en restant au courant des changements des lois fiscales, des réglementations et des conformités dans le monde entier. 
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ct-media">
                                        <div class="ct-media__head">
                                            <img src="/static/website/version/images/sprint/icons/recover-failed-payments-and-maximize-revenue-opportunities.svg" alt="Dunning Management" width="52">
                                        </div>
                                        <div class="ct-media__header">
                                            <h3 class="ct-media__label">
                                                gestion de relance
                                            </h3>
                                            <div class="ct-media__heading">
                                                Récupérer les paiements manqués et maximiser les opportunités de revenus
                                            </div>
                                        </div>
                                        <div class="ct-media__footer">
                                            <div class="ct-media__desc">
                                                Mettre en place une logique de relance intelligente et des options de paiement de secours afin d'éliminer les rejets involontaires liés au paiement.
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
                                        <demo-form :page-name="'demo-website-fr'" />
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
                                    Mettre en place votre processus de <br class="visible-lg" />facturation récurrente
                                </h2>
                                <div class="ct-media__desc ct-media__desc--alt">
                                    Automatisez toutes vos opérations de facturation récurrente à partir de la logique de facturation, des dates de facturation personnalisées, des prorata, des mises à jour, des portails en libre-service et plus encore.
                                </div>
                            </div>
                            <img src="/static/website/version/images/sprint/how-chargebee-works--fr.png" alt="" width="" class="img-responsive">
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
                <payment-gateway title="Nous soutenons les paiements récurrents dans plus de 150 pays" />
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
                                            "Nous utilisons Stripe comme solution de traitement et Chargebee a pu "se placer au dessus" sans complications, avec un meilleur accès aux informations en temps réel, concernant les paramètres d’abonnement et la capacité d’accepter un ensemble plus diversifié de types de paiement."
                                        </div>
                                        <div class="cc-casestudy__footer">
                                            <div class="cc-casestudy__author">
                                                <div class="cc-casestudy__name">
                                                    Tim Beiser
                                                </div>
                                                <div class="cc-casestudy__desig">
                                                    directeur des finances
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
                                            Obtenir une démo
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
                                                <h4 class="ct-media__heading" style="font-weight: normal;">Paiements récurrents </h4>
                                            </div>
                                            
                                            <div class="ct-media__lists">
                                                <ul class="ct-media__list">
                                                    <li class="ct-media__item">
                                                        <strong>Passerelles de paiement multiples</strong>
                                                        Connectez-vous à plus de 23 passerelles de paiement dans le monde entier, dont Stripe, Braintree, Adyen, GoCardless, etc,
                                                    </li>

                                                    <li class="ct-media__item">
                                                        <strong>Multiples méthodes de paiement</strong>
                                                        Des cartes de crédit au débit direct, permettez à vos clients de choisir parmi plusieurs méthodes de paiement en ligne et hors ligne
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Support fiscal global</strong>
                                                        Appliquez des taxes globales comme la taxe de vente américaine, la TVA de l'UE, la TPS, etc. pour toutes vos factures
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Logique de relance et rappel de paiement</strong>
                                                        Récupérez les revenus potentiellement perdus sur le pilote automatique - personnalisez les tentatives, les courriels et la séquence entière
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Paiement personnalisé</strong>
                                                        De l'offre de plusieurs méthodes de paiement à la réduction des champs de formulaire, offrez une expérience de paiement sans friction
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                         <!-- -------------------------------------------------------------------
                                        Start: Section Two
                                        -------------------------------------------------------------------  -->
                                        <div class="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-2">
                                            <div class="ct-media__content" style="padding-bottom: 32px;">
                                                <h4 class="ct-media__heading" style="font-weight: normal;">Facturation </h4>
                                            </div>
                                            
                                            <div class="ct-media__lists">
                                                <ul class="ct-media__list">
                                                    <li class="ct-media__item">
                                                        <strong>Génération de factures</strong>
                                                        Créer et personnaliser des factures, ajouter ou supprimer des rubriques, émettre des crédits, des remboursements, etc.
                                                    </li>

                                                    <li class="ct-media__item">
                                                        <strong>Facturation flexible</strong>
                                                        Choisissez une date et une fréquence de facturation personnalisées pour chaque client
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Traitement des prorata</strong>
                                                        Ajustez le montant de la facture de votre client pour tenir compte de tout changement de régime au milieu du cycle de facturation
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Facturation programmée</strong>
                                                        Choisissez la date de facturation (hebdomadaire, mensuelle et annuelle) pour vos clients, quelle que soit la date de leur inscription
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Facturation consolidée</strong>
                                                        Combinez toutes les factures individuelles générées en une seule et même facture et envoyez-la à vos clients
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
                                                <h4 class="ct-media__heading" style="font-weight: normal;">Gestion des abonnements</h4>
                                            </div>
                                            
                                            <div class="ct-media__lists">
                                                <ul class="ct-media__list">
                                                    <li class="ct-media__item">
                                                        <strong>Modèles de tarification multiples</strong>
                                                        Permettez la tarification personnalisée, les droits acquis, la facturation de vos clients en fonction de l'utilisation et plus encore
                                                    </li>

                                                    <li class="ct-media__item">
                                                        <strong>Gestion des essais et des plans</strong>
                                                        Créer différents plans et modèles de tarification conçus pour servir différentes personnalités
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Remises, coupons et suppléments</strong>
                                                        Mettez en place des campagnes de remise et de coupons efficaces, suivez-les et augmentez vos revenus
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Portail libre-service pour les clients</strong>
                                                        Permet aux clients de gérer leurs comptes, de mettre à niveau leurs plans, de mettre à jour les informations relatives aux paiements, etc,
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Notifications par courriel</strong>
                                                        Envoyez à vos clients des e-mails personnalisés et contextualisés
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                        <!-- -------------------------------------------------------------------
                                        Start: Section Four
                                        -------------------------------------------------------------------  -->
                                        <div class="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-2">
                                            <div class="ct-media__content" style="padding-bottom: 32px;">
                                                <h4 class="ct-media__heading" style="font-weight: normal;">Comptabilité et rapports</h4>
                                            </div>
                                            
                                            <div class="ct-media__lists">
                                                <ul class="ct-media__list">
                                                    <li class="ct-media__item">
                                                        <strong>Reconnaissance des revenus</strong>
                                                        Traiter les complexités de la comptabilité et des finances de votre entreprise avec le RevRec conforme à l'ASC 606 et à l'IFRS 15
                                                    </li>

                                                    <li class="ct-media__item">
                                                        <strong>Mesures et analyses</strong>
                                                        Suivez les MRR, les rejets, les VLT/CAC et autres pour identifier les facteurs de croissance grâce à une vue à 360° de l'ensemble de votre entreprise
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Rapprochement des paiements</strong>
                                                        Rapprocher les transactions de la passerelle avec les relevés bancaires grâce One Click Automation
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Rapports personnalisés</strong>
                                                        Analysez la croissance de votre entreprise grâce à des rapports personnalisés adaptés à vos besoins
                                                    </li>
                                                    <li class="ct-media__item">
                                                        <strong>Filtres et tableaux de bord</strong>
                                                        Mettez en place des filtres et des tableaux de bord détaillés pour identifier les points critiques.
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
                                        Synchronisez vos données avec des intégrations conçues pour vos plateformes préférées
                                    </div>
                                    <div class="ct-panel__desc">
                                        Découvrez la manière la plus intelligente d'automatiser les paiements récurrents avec Chargebee.
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
                                            Obtenir une démo
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
                        $('.cc-demo__form form label[id*="label-firstname"] span:first-child').text('Prénom')
                        $('.cc-demo__form form label[id*="label-phone"] span:first-child').text('Numéro de téléphone')
                        $('.cc-demo__form form label[id*="label-website"] span:first-child').text('URL de site web')
                        $('.cc-demo__form form input[type="submit"]').val('Obtenir une démo')
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
