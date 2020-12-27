<template>
    <div>
        <app-meta 
            :cb-title="'The New Invoice - Timeline - Chargebee'" 
            :cb-desc="'Introducing: The New Invoice with a dapper design, invoice notes and mobile friendly render - Timeline - Chargebee'" 
            :cb-url="'/timeline/new-invoice/'" 
            :cb-image="''"
            :cb-style="' /static/website/version/styles/bootstrap.css'"
            :cb-head-script="''"
            :cb-body-script="''"
            :cb-has-noindex="false" />
        <app-header :hasInvert="false" />
        <div class="cb-body pad-top-head-height">
            <!-- InstanceBeginEditable name="Page Content" -->
            <section class="banner-block-multiple">
                <div class="container">
                    <h1>The New Invoice. Better. Minimal. Dapper.</h1>
                </div>
            </section>
            <section class="container text-15">        
                <p><img src="/static/website/version/images/timeline/new-invoice/new-invoice-thumb.png" width="602" class="img-responsive center-block" alt="new invoice thumbnail"></p>
                <p class="text-center"><a href="/static/website/version/images/timeline/new-invoice/new-invoice.png" target="_blank" class="text-success"><u>Preview</u></a></p>

                <div class="row">
                    <div class="col-md-8 col-md-offset-2 block-space">
                        <p>On May 20<a href="#update"><sup class="text-18" style="top:0;">*</sup></a>, the redesigned invoice will hit your test accounts. </p>
                        <div class="block-space-sm"></div>
                        <div class="block-title-alt">WHAT’S CHANGED</div>
                        <div class="block-space-xs"></div>
                        <h2 class="text-24">New Design</h2>
                        <p>Instantly scannable. Stripped down to essentials. Those Extra lines. Gone. That green paid stamp. Gone. When you compare the old vs new, you’ll witness a pursuit of less:</p>
                        <div class="block-pull">
                            <img src="/static/website/version/images/timeline/new-invoice/compare-invoice.png" width="906" class="img-responsive center-block" alt="compare invoice">
                        </div>
                        <h2 class="text-24">Shipping Address</h2>
                        <p>Your customer’s shipping address will also be reflected in the invoice.</p>
                        
                        <h2 class="text-24">Mobile Friendly HTML</h2>
                        <p>PDFs aren’t the best way to see stuff on small screens. Now, you’ll have an option to add inline mobile-friendly HTML invoices via mail merge.</p>
                        <div class="block-pull pr">                        
                            <img src="/static/website/version/images/timeline/new-invoice/mobile-invoice.png" width="906" class="img-responsive center-block" alt="mobile invoice">
                            <div class="block-img-caption">
                                So, here’s how it renders. What do you think?
                            </div>                        
                        </div>
                        <h2 class="text-24">Invoice Notes</h2>
                        <p>This <a href="https://www.chargebee.com/docs/invoice_notes.html" target="_blank">feature</a> is out already. Tasked to work as P.S for your invoices. It’ll fit the new design beautifully.</p>

                        <div class="block-pull">
                            <div class="block-well">
                                <h2 class="text-24">What needs to be done?</h2>
                                <p>The new invoice will reflect in your test site on 20th of May<a href="#update"><sup class="text-18" style="top:0;">*</sup></a>. The system-wide transition, including the live sites will happen within the next 2-3 weeks. <br /><br /> You’ll need to make sure that your invoices look proper before the changes occur in your live site(s). If needed, please upload a new logo that fits the new design. If you face any difficulties whatsoever, please let us know. </p>
                                <p id="update"><sup class="text-18" style="top:0;">*</sup>UPDATE (25/5/15): Yikes! Our clocks were a bit rusty this time around. We're sorry. But, it's out there now.</p>
                            </div>
                        </div>

                        <p>The designers are dying to hear from you. Would you let us in on some feedback? <br>
                        Please drop us a line -  <a href="mailto:experience@chargebee.com">experience@chargebee.com</a></p>
                    </div>
                </div>
                <hr class="no-mar">    
            </section>
            <!-- InstanceEndEditable -->  
        </div>
        <app-footer></app-footer>
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
        },
        methods: {}
    }
</script>
<style type="text/css">.signup-block{display: none;}</style>