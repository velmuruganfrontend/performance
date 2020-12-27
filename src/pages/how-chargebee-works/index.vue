<template>
    <div>
        <app-meta 
            :cb-title="'How Chargebee Works'" 
            :cb-desc="'A series of illustrations explaining how recurring billing for SaaS businesses works and how Chargebee fits into the picture.'" 
            :cb-url="'/how-chargebee-works/'" 
            :cb-image="''"
            :cb-style="'/static/website/version/styles/new.css,/static/website/version/styles/how-it-works.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body">
            <article id="cb-carousel" class="carousel slide" data-ride="carousel">
                <!-- HW = How it works -->
                <section class="cb-hw-slider mar-y-md">
                    <div class="container">
                        
                            

                            <!-- Wrapper for slides -->
                            <div class="carousel-inner" role="listbox">
                                <!--slides 1-->
                                <div class="item active">
                                <div class="cb-hw-item">
                                    <h1 class="cb-hw-item__title text-center mar-t-60">How Chargebee Works<br>A day in the life of a subscription billing platform.</h1>
                                    <div class="media cb-hw-item__media max-wid-md">
                                        <div class="media-left cb-hw-item__media-img">
                                            <img src="/static/website/version/images/how-it-work/act-of-commerce.svg" alt="act of commerce" class="media-object">
                                        </div>
                                        <div class="media-body cb-hw-item__media-text">
                                            <p>Two fellow earthlings indulge in an act of commerce.</p>
                                            <div class="bg-label">Promise, hope, and trust are found in the air. </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <!--End: slides 1-->
                                <!--slides 2-->
                                <div class="item">
                                <div class="cb-hw-item mar-t-80">
                                    <div class="media cb-hw-item__media">
                                        <div class="media-left cb-hw-item__media-img">
                                            <img src="/static/website/version/images/how-it-work/signup-form.svg" alt="signing up with payment information" class="media-object">
                                        </div>
                                        <div class="media-body cb-hw-item__media-text max-wid-xs">
                                            The price seems perfect. The customer summons a credit card and duly fills the signup form. And we take it from there.
                                        </div>
                                    </div>

                                    <div class="media cb-hw-item__media mar-t-bz">
                                        <div class="media-left cb-hw-item__media-img">
                                            <img src="/static/website/version/images/how-it-work/future-billing.svg" alt="storing of payment info" class="media-object">
                                        </div>
                                        <div class="media-body cb-hw-item__media-text max-wid-xs">
                                            The information gets transported to a special vault - a place known for its peace and quiet - and is stored there for future billing.
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <!--End: slides 2-->
                                <!--slides 3-->
                                <div class="item">
                                <div class="cb-hw-item">

                                    <div class="media cb-hw-item__media">
                                        <div class="media-left cb-hw-item__media-img">
                                            <img src="/static/website/version/images/how-it-work/send-response.svg" alt="response from gateway" class="media-object">
                                        </div>
                                        <div class="media-body cb-hw-item__media-text">
                                            For processing a payment, the credit card information is sent to a payment gateway, which, in turn, sends out a response.
                                        </div>
                                    </div>

                                    <div class="media cb-hw-item__media cb-hw-item__media-right F-right">
                                        <div class="media-body cb-hw-item__media-text text-right hidden-xs">
                                            The response is decoded and translated into human-speak, as we let the customer know about it. The business owner gets a nod too, along with the details of the subscription. 
                                        </div>
                                        <div class="media-right cb-hw-item__media-img">
                                            <img src="/static/website/version/images/how-it-work/details-subscription.svg" alt="response and subscription details" class="media-object" style="position:relative; top:-30px;">
                                        </div>
                                        <div class="media-body cb-hw-item__media-text visible-xs">
                                            The response is decoded and translated into human-speak, as we let the customer know about it. The business owner gets a nod too, along with the details of the subscription. 
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <!--End: slides 3-->
                                <!--slides 4-->
                                <div class="item">
                                <div class="cb-hw-item mar-t-80">
                                    <div class="cb-hw-item__media cb-hw-item__media-ctxt max-wid-md">
                                        <div class="cb-hw-item__media-img">
                                            <img src="/static/website/version/images/how-it-work/recurring-billing-loop.svg" alt="recurring billing loop" class="media-object center-block">
                                        </div>
                                        <div class="cb-hw-item__media-text text-center">
                                            The customer continues to enjoy the subscription service while Chargebee manages the recurring billing loop.
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <!--End: slides 4-->
                                <!--slides 5-->
                                <div class="item">
                                <div class="cb-hw-item">
                                    <h2 class="cb-hw-item__title cb-hw-item__title_alt text-center visible-xs visible-sm visible-md" style="margin-bottom:40px;">Recurring billing loop</h2>
                                    <div class="media cb-hw-item__media cb-hw-item__media-cr max-wid-sm cb-hw-arrow-after">
                                        <div class="media-left cb-hw-item__media-img">
                                            <img src="/static/website/version/images/how-it-work/beautiful-invoice.svg" alt="next billing cycle" class="media-object">
                                        </div>
                                        <div class="media-body cb-hw-item__media-text max-wid-xs pad-l-xs">
                                            <span class="bg-label-num"> 1</span>
                                            <div class="over-hide">The sun sank, a decided number of times. And the next billing cycle, arrives on time. An honest, clear, and beautiful invoice is created with care.</div>
                                        </div>
                                    </div>
                                    <div class="media cb-hw-item__media cb-hw-item__media-ctxt max-wid-xs F-left cb-hw-arrow-after2">
                                        <div class="cb-hw-item__media-img">
                                            <img src="/static/website/version/images/how-it-work/invoice-logs.svg" alt="response to customer" class="img-responsive center-block max-wid-75">
                                        </div>
                                        <div class="cb-hw-item__media-text">
                                            <span class="bg-label-num">3</span>
                                            <div class="over-hide">By the means of an email, the news is shared with the customer. And the business owner gets an update in the invoice logs. </div>
                                        </div>
                                    </div>
                                    <div class="media cb-hw-item__media cb-hw-item__media-ctxt F-right cb-hw-arrow-after3">
                                        <div class="cb-hw-item__media-img">
                                            <img src="/static/website/version/images/how-it-work/payment-approved.svg" alt="payment approved" class="img-responsive center-block max-wid-75">
                                        </div>
                                        <div class="cb-hw-item__media-text max-wid-4">
                                            <span class="bg-label-num">2</span>
                                            <div class="over-hide">The vault’s door is knocked, and the customer’s credit card information is sent to the payment gateway, once again. The payment is pronounced as approved. </div>
                                        </div>
                                    </div>
                                    <h2 class="cb-hw-item__title cb-hw-item__title_alt text-center hidden-xs hidden-sm hidden-md">Recurring billing loop</h2>

                                </div>
                                </div>
                                <!--End: slides 5-->
                                <!--slides 6-->
                                <div class="item">
                                <div class="cb-hw-item">
                                    <div class="row">
                                        <div class="col-sm-8 col-md-6">
                                                <div class="media cb-hw-item__media">
                                                    <div class="media-left cb-hw-item__media-img">
                                                        <img src="/static/website/version/images/how-it-work/deals-discount.svg" alt="deals and discounts" class="media-object">
                                                    </div>
                                                    <div class="media-body cb-hw-item__media-text cb-hw__text-lit pad-l-xs">
                                                        Discounts and coupons are vehicles of happiness. And they’re managed within one dashboard.
                                                    </div>
                                                </div>
                                        </div>

                                        <div class="col-sm-8 col-sm-offset-4 col-md-6 col-md-offset-0">
                                                <div class="media cb-hw-item__media">
                                                    <div class="media-left cb-hw-item__media-img">
                                                        <img src="/static/website/version/images/how-it-work/extend-trial.svg" alt="extend trial" class="media-object">
                                                    </div>
                                                    <div class="media-body cb-hw-item__media-text cb-hw__text-lit pad-l-xs">
                                                        When the customer seeks more time with the app, the business owner can extend the trial, with some generosity and a click.
                                                    </div>
                                                </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <h2 class="cb-hw-item__title cb-hw-item__title_alt-h2 text-center">Lifecycle events. Some recur. Some don't.<br> Both need attention and care. </h2>
                                        </div>
                                        <div class="col-sm-8 col-md-6">
                                                <div class="media cb-hw-item__media">
                                                    <div class="media-left cb-hw-item__media-img">
                                                        <img src="/static/website/version/images/how-it-work/upgrade-available.svg" alt="upgrade available" class="media-object">
                                                    </div>
                                                    <div class="media-body cb-hw-item__media-text cb-hw__text-lit pad-l-xs">
                                                        When the customer seeks more value, an upgrade is available in the blink of an eye.
                                                    </div>
                                                </div>
                                        </div>

                                        <div class="col-sm-8 col-sm-offset-4 col-md-6 col-md-offset-0">
                                                <div class="media cb-hw-item__media">
                                                    <div class="media-left cb-hw-item__media-img">
                                                        <img src="/static/website/version/images/how-it-work/customer-moves.svg" alt="change of address" class="media-object">
                                                    </div>
                                                    <div class="media-body cb-hw-item__media-text cb-hw__text-lit pad-l-xs">
                                                        When a customer moves to a new place, a change of address is all but a few seconds away.
                                                    </div>
                                                </div>
                                        </div>

                                    </div>
                                </div>
                                </div>
                                <!--End: slides 6-->
                                <!--slides 7-->
                                <div class="item">
                                <div class="cb-hw-item">
                                    <div class="row">

                                            <div class="col-sm-4">
                                                <div class="cb-hw-cb-img mar-t-100">
                                                    <img src="/static/website/version/images/how-it-work/credit-card.svg" alt="dunning retries" class="img-responsive max-wid-75">
                                                </div>
                                                <div class="cb-hw-item__media-text text-center cb-hw-item__cen-text">
                                                    Lost revenue. Lost relationships. Cards without funds are cold blooded culprits. Automated retries save the day. 
                                                </div>
                                        </div>

                                        <div class="col-sm-4">
                                                <div class="cb-hw-cb-img">
                                                    <img src="/static/website/version/images/how-it-work/fixed-billing.svg" alt="metered billing" class="img-responsive center-block">
                                                </div>
                                                <div class="cb-hw-item__media-text text-center cb-hw-item__cen-text">
                                                    If a business’s value metric works best when based on usage, simple metered billing is the answer. 
                                                </div>
                                        </div>

                                        <div class="col-sm-4">
                                            <div class="cb-hw-cb-img mar-l-n50">
                                                    <img src="/static/website/version/images/how-it-work/refund-request.svg" alt="refunds easy" class="img-responsive center-block">
                                                </div>
                                                <div class="cb-hw-item__media-text text-center cb-hw-item__cen-text">
                                                    A refund request?  We communicate with Mr. Banker, and settle things with ease. 
                                                </div>
                                        </div>

                                        <div class="col-sm-6 col-sm-offset-6">
                                                <div class="btn-align-hw">
                                                    <div class="cb-hw__hap-mer">
                                                    <img src="/static/website/version/images/how-it-work/happymerchant.svg" alt="happy merchant" class="img-responsive">
                                                </div>
                                                <div class="cb-hw__signup" style="text-align: center">
                                                    <p><a cn-mark-signup="true" href="/trial-signup/" class="btn btn-sm btn-primary btn-suffix-alt" onclick="ga('send', 'event', 'website', 'signup-intent', 'button-signup');">SIGN UP FOR FREE</a></p>
                                                    <a href="/pricing/" class="btn-flat" onclick="ga('send', 'event', 'website', 'click', 'pricing');" style="padding-top: 10px; font-size: 12px">View our Plans & Pricing</a>  
                                                </div>

                                                </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                </div>
                                <!--End: slides 7-->

                            </div>

                            
                            
                    </div>
                </section>

                <section class="cb-hw-bg-primary navbar-fixed-bottom">
                    <div class="cb-hw__btm-control">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#cb-carousel" data-slide-to="0" class="active"></li>
                        <li data-target="#cb-carousel" data-slide-to="1"></li>
                        <li data-target="#cb-carousel" data-slide-to="2"></li>
                        <li data-target="#cb-carousel" data-slide-to="3"></li>
                        <li data-target="#cb-carousel" data-slide-to="4"></li>
                        <li data-target="#cb-carousel" data-slide-to="5"></li>
                        <li data-target="#cb-carousel" data-slide-to="6"></li>
                    </ol>
                    <!-- Controls -->
                    <div class="cb-hw-btm-arrow">
                        <a class="left carousel-control" href="#cb-carousel" role="button" data-slide="prev">
                            <span aria-hidden="true">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#cb-carousel" role="button" data-slide="next">
                            <span aria-hidden="true">Next</span>
                        </a>  
                    </div>
                    </div>
                </section>
            </article>
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
            $('.carousel').carousel({
              interval: false,
              wrap:false 
            });

            var slideNo = window.location.hash.substr(1);
            if(slideNo !== ''){
                var liObj = $('.carousel-indicators > li[data-slide-to="' + slideNo + '"]');
                if(liObj.length ==1){
                    $('.carousel-indicators > li[data-slide-to]').removeClass('active');
                    $('.carousel-inner > .item').removeClass('active');
                    $('.carousel-indicators > li[data-slide-to="' + slideNo + '"]').addClass('active');
                    $('.carousel-inner > .item:nth-child('+ slideNo + ')').addClass('active')
                }
            }
                        

            // Register keyboard events
            $(document).keydown(function(e) {
                if (e.keyCode === 37) {
                   // Previous
                   $(".carousel-control.left").click();
                   return false;
                }
                if (e.keyCode === 39) {
                   // Next
                   $(".carousel-control.right").click();
                   return false;
                }
            });


            // hidden arrows
            $('.left').hide();

            $('#cb-carousel').on('slid.bs.carousel', function (ev) {
              var carouselData = $(this).data('bs.carousel');
              var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));

              if (currentIndex >= 1) {
                $('.left').show();
              }
              else {
                $('.left').hide();
              }

              if (currentIndex === (carouselData.$items.length-1)) {
                $('.right').hide();
                $('.left').show();
              }
              else {
                $('.right').show();
              }
            })
            // Add hash

            $('.carousel').on('slid.bs.carousel', function () {
                setTimeout(function(){ 
                    var slide_no = $('.carousel-indicators > .active').attr('data-slide-to');
                    if(typeof(slide_no) !== 'undefined'){
                        window.location.hash = slide_no;

                        if(typeof(Storage) !== "undefined"  && slide_no === '6' && typeof(sessionStorage.viewed) === 'undefine'){   
                        sessionStorage.viewed = true;
                        logUserCount('how_chargebee_works');
                    }
                }

                 }, 400);
                
                        
                var slide = window.location.hash.substr(1);
                
            })
            
            function logUserCount(eventName){
                $.ajax({url: "/static/resources/licenses/cssheader.txt?event=" + eventName});
                ga('send', 'event', eventName, 'visited', 'true');
            }
        },
        methods: {}
    }
</script>

<style type="text/css">
    body{
        font-family: merriweather,georgia,cambria,serif;
    }    
</style>