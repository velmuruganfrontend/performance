<template>
    <section id="payment-gateways" class="pg-component">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2 col-md-offset-1">
                    <h2 class="pg-component__title pg-component__title--hero">{{ title ? title : 'We support Recurring Payments across 150+ countries' }}</h2>
                </div>
            </div>
            
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-1 col-lg-3">
                    <div class="pg-component__dropdown">
                        <!-- <h2 class="pg-component__title">
                            Choose from a list of leading payment gateways in your country
                        </h2> -->
                        <label class="pg-component__label">Choose a country</label>
                        <select class="pg-component__select" id="country-selector">
                            <option value="united-states" id="united-states">United States</option>
                            <option value="united-kingdom" id="united-kingdom">United Kingdom</option>
                            <option value="canada" id="canada">Canada</option>
                            <!-- <option value="argentina" id="argentina">Argentina</option>  -->
                            <option value="australia" id="australia">Australia</option>
                            <option value="andorra" id="andorra">Andorra</option>
                            <option value="austria" id="austria">Austria</option>
                            <!-- <option value="bahrain" id="bahrain">Bahrain</option> -->
                            <option value="belgium" id="belgium">Belgium</option>
                            <option value="brazil" id="brazil">Brazil</option>
                            <option value="bulgaria" id="bulgaria">Bulgaria</option>
                            <!-- <option value="chile" id="chile">Chile</option> -->
                            <!-- <option value="colombia" id="colombia">Colombia</option> -->
                            <option value="croatia" id="croatia">Croatia</option> 
                            <option value="cyprus" id="cyprus">Cyprus</option>
                            <option value="czech-republic" id="czech-republic">Czech Republic</option>
                            <option value="denmark" id="denmark">Denmark</option>
                            <!-- <option value="ecuador" id="ecuador">Ecuador</option> -->
                            <!-- <option value="egypt" id="egypt">Egypt</option> -->
                            <option value="estonia" id="estonia">Estonia</option>
                            <option value="finland" id="finland">Finland</option>
                            <option value="france" id="france">France</option>
                            <option value="germany" id="germany">Germany</option>
                            <option value="gibraltar" id="gibraltar">Gibraltar</option>
                            <option value="greece" id="greece">Greece</option>
                            <option value="guernsey" id="guernsey">Guernsey</option>
                            <option value="hong-kong" id="hong-kong">Hong Kong</option>
                            <option value="hungary" id="hungary">Hungary</option>
                            <option value="iceland" id="iceland">Iceland</option>
                            <option value="india" id="india">India</option>
                            <option value="israel" id="israel">Israel</option>
                            <option value="ireland" id="ireland">Ireland</option>
                            <option value="isle-of-man" id="isle-of-man">Isle of Man</option>
                            <option value="italy" id="italy">Italy</option>
                            <option value="japan" id="japan">Japan</option>
                            <option value="jersey" id="jersey">Jersey</option>
                            <!-- <option value="jordan" id="jordan">Jordan</option> -->
                            <!-- <option value="kuwait" id="kuwait">Kuwait</option> -->
                            <option value="latvia" id="latvia">Latvia</option>
                            <option value="liechtenstein" id="liechtenstein">Liechtenstein</option>
                            <option value="lithuania" id="lithuania">Lithuania</option>
                            <option value="luxembourg" id="luxembourg">Luxembourg</option>
                            <option value="malaysia" id="malaysia">Malaysia</option>
                            <option value="malta" id="malta">Malta</option>
                            <option value="mexico" id="mexico">Mexico</option>
                            <option value="monaco" id="monaco">Monaco</option>
                            <option value="netherlands" id="netherlands">Netherlands</option>
                            <option value="new-zealand" id="new-zealand">New Zealand</option>
                            <option value="norway" id="norway">Norway</option>
                            <!-- <option value="oman" id="oman">Oman</option> -->
                             <!-- <option value="peru" id="peru">Peru</option> -->
                            <option value="poland" id="poland">Poland</option>
                            <option value="portugal" id="portugal">Portugal</option>
                            <!-- <option value="qatar" id="qatar">Qatar</option> -->
                            <option value="romania" id="romania">Romania</option>
                            <!-- <option value="saudiarabia" id="saudiarabia">Saudi Arabia</option>  -->
                            <option value="san-marino" id="san-marino">San Marino</option>
                            <option value="singapore" id="singapore">Singapore</option>
                            <option value="slovakia" id="slovakia">Slovakia</option>
                            <option value="slovenia" id="slovenia">Slovenia</option>
                            <option value="spain" id="spain">Spain</option>
                            <option value="sweden" id="sweden">Sweden</option>
                            <option value="switzerland" id="switzerland">Switzerland</option>
                            <!-- <option value="uae" id="uae">UAE</option> -->
                            <!-- <option value="uruguay" id="uruguay">Uruguay</option> -->
                            <option value="vatican-city" id="vatican-city">Vatican City</option>
                        </select>
                    </div>
                    <p class="pg-component__desc">
                        Try our <a href="/payment-gateways/evaluator-tool/" target="_blank">Gateway Evaluator</a> for Payment Gateway Comparison based on gateway processing fees. 
                    </p>
                </div>
                <div class="col-sm-8 col-sm-offset-2 col-md-5 col-md-offset-1 col-lg-6">
                    <div class="pg-component__content united-states" style="display: block;">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-us"></span>
                            </span>
                            United States
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>

                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/paypal_payments_pro.html">PayPal Payments Pro</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/authorize-net/">Authorize.Net</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/paypal_payflow_pro.html">PayPal Payflow Pro</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/amazon_payments.html">Amazon payments</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/cybersource-recurring-billing/">CyberSource</a>
                            </div>

                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/nmi.html">NMI</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluepay.html">BluePay</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bambora.html">Bambora</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/elavon.html">Elavon</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/orbital.html">Orbital (Chase Paymentech)</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/vantiv_worldpay.html">Worldpay US eCom(Vantiv Litle)</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content united-kingdom">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-gb"></span>
                            </span>
                            United Kingdom
                        </h2>
                                
                        <div class="pg-component__feature">

                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>

                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/docs/paypal_payments_pro.html">PayPal Payments Pro</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/gocardless/">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div> 
                    <div class="pg-component__content canada"> 
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-ca"></span>
                            </span>
                            Canada
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>

                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/authorize-net/">Authorize.Net</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/paypal_payments_pro.html">PayPal Payments Pro</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/paypal_payflow_pro.html">PayPal Payflow Pro</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/moneris.html">Moneris</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/cybersource-recurring-billing/">CyberSource</a>
                            </div>

                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluepay.html">BluePay</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bambora.html">Bambora</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/elavon.html">Elavon</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/orbital.html">Orbital (Chase Paymentech) </a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/vantiv_worldpay.html">Worldpay US eCom(Vantiv Litle)</a>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="pg-component__content argentina">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-ar"></span>
                            </span>
                            Argentina
                        </h2>
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>   
                        </div>
                    </div>     -->
                    <div class="pg-component__content australia">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-au"></span>
                            </span>
                            Australia
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>

                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>   
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/authorize-net/">Authorize.Net</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/eWay.html">eWay</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/paypal_payflow_pro.html">PayPal Payflow Pro</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/pin-payments.html">Pin Payments</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content andorra">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-ad"></span>
                            </span>
                            Andorra
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content austria">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-at"></span>
                            </span>
                            Austria
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/gocardless/">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="pg-component__content bahrain">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-bh"></span>
                            </span>
                            Bahrain
                        </h2>
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>   
                        </div>
                    </div>   -->

                    <div class="pg-component__content belgium">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-be"></span>
                            </span>
                            Belgium
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/gocardless/">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content brazil">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-br"></span>
                            </span>
                            Brazil
                        </h2>
                                
                        <div class="pg-component__feature">
                            <!-- <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div> -->
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content bulgaria">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-bg"></span>
                            </span>
                            Bulgaria
                        </h2>
                                
                        <div class="pg-component__feature"> 
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div> 
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="pg-component__content chile">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-cl"></span>
                            </span>
                            Chile
                        </h2>
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>   
                        </div>
                    </div>   -->
                     <!-- <div class="pg-component__content colombia">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-co"></span>
                            </span>
                            Colombia
                        </h2>
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>   
                        </div>
                    </div>   -->
                    <div class="pg-component__content croatia">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-hr"></span>
                            </span>
                            Croatia
                        </h2>
                                
                        <div class="pg-component__feature">  
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content cyprus">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-cy"></span>
                            </span>
                            Cyprus
                        </h2>
                                
                        <div class="pg-component__feature"> 
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content czech-republic">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-cz"></span>
                            </span>
                            Czech Republic
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div> 
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content denmark">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-dk"></span>
                            </span>
                            Denmark
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div> 
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="pg-component__content ecuador">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-ec"></span>
                            </span>
                            Ecuador
                        </h2>
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>   
                        </div>
                    </div>  
                    <div class="pg-component__content egypt">
                        <h2 class="pg-component__title">
                            <span class="img-icon"> 
                                <span class="flag-icon flag-icon-eg"></span> 
                            </span>
                            Egypt
                        </h2>
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>   
                        </div>
                    </div>   -->
                    <div class="pg-component__content estonia">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-ee"></span>
                            </span>
                            Estonia
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            
                        </div>
                    </div>
                    <div class="pg-component__content finland">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-fi"></span>
                            </span>
                            Finland
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>

                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/gocardless/">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>

                        </div>
                    </div>
                    <div class="pg-component__content france">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-fr"></span>
                            </span>
                            France
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/gocardless/">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content germany">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-de"></span>
                            </span>
                            Germany
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/gocardless/">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content gibraltar">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-gi"></span>
                            </span>
                            Gibraltar
                        </h2>
                                
                        <div class="pg-component__feature"> 
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>   
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content greece">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-gr"></span>
                            </span>
                            Greece
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content guernsey">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-gg"></span>
                            </span>
                            Guernsey
                        </h2>
                                
                        <div class="pg-component__feature">  
                              <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content hong-kong">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-hk"></span>
                            </span>
                            Hong Kong
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>

                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/docs/worldpay.html">Worldpay</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/eWay.html">eWay</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content hungary">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-hu"></span>
                            </span>
                            Hungary
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content iceland">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-is"></span>
                            </span>
                            Iceland
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content india">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-in"></span>
                            </span>
                            India
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content israel">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-il"></span>
                            </span>
                            Israel
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content ireland">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-ie"></span>
                            </span>
                            Ireland
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>

                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/gocardless/">GoCardless</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content isle-of-man">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-im"></span>
                            </span>
                            Isle of Man
                        </h2>
                                
                        <div class="pg-component__feature"> 
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div> 
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content italy">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-it"></span>
                            </span>
                            Italy
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>

                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/gocardless/">GoCardless</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content japan">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-jp"></span>
                            </span>
                            Japan
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>

                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/amazon_payments.html">Amazon Payments</a>
                            </div>

                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/payment-gateways/cybersource-recurring-billing/">CyberSource</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content jersey">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-je"></span>
                            </span>
                            Jersey
                        </h2>
                                
                        <div class="pg-component__feature"> 
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div> 
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="pg-component__content jordan">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-jo"></span>
                            </span>
                            Jordan
                        </h2>
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>   
                        </div>
                    </div>   -->
                    <!-- <div class="pg-component__content kuwait">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-kw"></span> 
                            </span>
                            Kuwait
                        </h2>
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>   
                        </div>
                    </div>   -->
                    <div class="pg-component__content latvia">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-lv"></span>
                            </span>
                            Latvia
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content liechtenstein">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-li"></span>
                            </span>
                            Liechtenstein
                        </h2>
                                
                        <div class="pg-component__feature"> 
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div> 
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content lithuania">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-lt"></span>
                            </span>
                            Lithuania
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div> 
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content luxembourg">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-lu"></span>
                            </span>
                            Luxembourg
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div> 
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/gocardless/">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/gocardless.html">GoCardless </a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content malaysia">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-my"></span>
                            </span>
                            Malaysia
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content malta">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-mt"></span>
                            </span>
                            Malta
                        </h2>
                                
                        <div class="pg-component__feature"> 
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div> 
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>

                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content mexico">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-mx"></span>
                            </span>
                            Mexico
                        </h2>
                                
                        <div class="pg-component__feature">
                            <!-- <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div> -->
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content monaco">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-mc"></span>
                            </span>
                            Monaco
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content netherlands">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-nl"></span>
                            </span>
                            Netherlands
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/gocardless/">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content new-zealand">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-nz"></span>
                            </span>
                            New Zealand
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/eWay.html">eWay</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/paypal_payflow_pro.html">PayPal Payflow Pro</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/pin-payments.html">Pin Payments</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content norway">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-no"></span>
                            </span>
                            Norway
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/elavon.html"> Elavon</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/payment-gateways/cybersource-recurring-billing/">CyberSource</a>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="pg-component__content oman">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-om"></span>
                            </span>
                            Oman
                        </h2>
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>   
                        </div>
                    </div>   -->
                    <!-- <div class="pg-component__content peru">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-pe"></span>
                            </span> 
                            Peru
                        </h2>
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>   
                        </div>
                    </div>   -->

                    <div class="pg-component__content poland">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-pl"></span>
                            </span>
                            Poland
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            
                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content portugal">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-pt"></span>
                            </span>
                            Portugal
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/gocardless/">GoCardless</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="pg-component__content qatar">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-qa"></span> 
                            </span>
                            Qatar
                        </h2>
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>   
                        </div>
                    </div>   -->
                    <div class="pg-component__content romania">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-ro"></span>
                            </span>
                            Romania
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="pg-component__content saudiarabia">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-sa"></span>
                            </span>
                            Saudi Arabia 
                        </h2>
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>   
                        </div>
                    </div>   -->
                    <div class="pg-component__content san-marino">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-sm"></span>
                            </span>
                            San Marino
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content singapore">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-sg"></span>
                            </span>
                            Singapore
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/docs/worldpay.html">Worldpay</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/eWay.html">eWay</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/cybersource-recurring-billing/">CyberSource</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content slovakia">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-sk"></span>
                            </span>
                            Slovakia
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content slovenia">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-si"></span>
                            </span>
                            Slovenia
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content spain">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-es"></span>
                            </span>
                            Spain
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/gocardless/">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content sweden">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-se"></span>
                            </span>
                            Sweden
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/gocardless/">GoCardless</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                        </div>
                    </div>
                    <div class="pg-component__content switzerland">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-ch"></span>
                            </span>
                            Switzerland
                        </h2>
                                
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/stripe/">Stripe <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/docs/gocardless.html">GoCardless</a>
                            </div>
                             <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/braintree/">Braintree</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/bluesnap.html">Bluesnap</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/adyen-recurring-payments/">Adyen</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/worldpay.html">Worldpay</a>
                            </div>
                            <div class="pg-component__feature__block">
                                <a href="https://www.chargebee.com/docs/amazon_payments.html">Amazon payments</a>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="pg-component__content uae">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-ae"></span>
                            </span>
                            UAE
                        </h2>
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>   
                        </div>
                    </div>   -->
                    <!-- <div class="pg-component__content uruguay"> 
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-uy"></span>
                            </span>
                            Uruguay
                        </h2>
                        <div class="pg-component__feature">
                            <div class="pg-component__feature__block">  
                                <a href="/partners/checkout-com/">Checkout.com <span class="pg-component__feature__block--label">Preferred Partner</span></a>
                            </div>   
                        </div>
                    </div>  -->
                    <div class="pg-component__content vatican-city">
                        <h2 class="pg-component__title">
                            <span class="img-icon">
                                <span class="flag-icon flag-icon-va"></span>
                            </span>
                            Vatican City
                        </h2>
                                
                        <div class="pg-component__feature">  
                            <div class="pg-component__feature__block">
                                <a href="/payment-gateways/paypal-recurring-payments/">PayPal Express Checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['title'],
    mounted () {

    }
}
</script>
<style type="text/css">
.pg-component__content{
    display: none;
}
.pg-component__title{
    font-size: 18px;
    color: #212128;
    line-height: 24px;
    text-transform: none;
    margin-bottom: 16px;
    padding-top: 0;
    margin-top: 0;
    font-weight: 700;
}
.pg-component__title--hero{
    font-family: var(--ff_primary);
    font-size: 28px;
    line-height: 40px;
    font-weight: bold;
    margin-bottom: 40px;
    letter-spacing: -0.42px;
}
.pg-component__label{
    color: #787882;
    padding-bottom: 6px;
    display: block;
    font-weight: 400;
}
.pg-component__select{
    border: 1px solid #787882;
    border-radius: 3px;
    height: 42px;
    color: #212128;
    background: #fff;
    margin-bottom: 16px;
    padding-left: 10px;
    background-size: 21px;
    width: 100%;
    box-shadow: inset 0 0 5px #e8e8e9;
}
.pg-component__desc{
    color: #212128;
    max-width: 280px;
    font-size: 14px;
}
.pg-component__dropdown {
    max-width: 280px;
}
.pg-component a,.pg-component a:hover,.pg-component a:focus{
    color: #000FF0;
    font-weight: 500;
    display: inline-block;
    line-height: 20px;
    text-decoration: none;
}
@media (min-width: 480px) {
    .pg-component__feature{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 8px 16px;
        margin: 24px 0;
    }
}
@media (max-width: 479px) {
    .pg-component__feature__block{
        margin-bottom: 8px;
    }
}
@media (max-width: 991px) {
    .pg-component__content{
        margin-top: 40px;
    }
}
.flag-icon {
    /*width: 42.5px;
    height: 30px;*/
    margin-right: 4px;
}
.pg-component__feature__block--label {
    border: 1px solid #d2c8fa;
    font-size: 10px;
    color: #6450f0;
    display: inline-block;
    font-weight: 400;
    border-radius: 2px;
    padding: 0 8px;
    line-height: 18px;
    vertical-align: middle;
    margin: 0 2px;
}
.pg-component__feature__block a{
    font-size: 14px;
}
#payment-gateways{
    padding: 60px 0;
}
</style>