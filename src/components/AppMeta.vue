<template>
  <div class="cb-meta"></div>
</template>

<script>
export default {
  props: ['cbTitle','cbDesc','cbUrl','cbImage','cbStyle','cbHeadScript','cbBodyScript','cbHasNoindex','cbHasViewport','disableBootstrapCss','disableHeaderFooterCss','cbRegionList','cbRegionUrl','disableBootstrapJs'],
  data: function(){
    return{
      params: {
        cbTitleVal : this.cbTitle ? this.cbTitle : 'Chargebee: Subscription Management Platform for SaaS, e-commerce, digital businesses and more',
        cbDescVal : this.cbDesc ? this.cbDesc : 'Chargebee is a comprehensive subscription management and recurring billing solution. Manage your customers\' subscriptions at scale. Deliver exceptional subscription experience. Free up to $50K of your revenue.',
        cbUrlVal : this.cbUrl ? this.cbUrl.includes("www.chargebee.com") ? this.cbUrl : 'https://www.chargebee.com'+this.cbUrl : 'https://www.chargebee.com/',
        cbImageVal : this.cbImage ? this.cbImage.includes("www.chargebee.com") ? this.cbImage : this.cbImage.includes("images.ctfassets.net") ? this.cbImage : 'https://www.chargebee.com'+this.cbImage : 'https://www.chargebee.com/static/resources/og/chargebee.png',
        cbHasNoindexVal : this.cbHasNoindex,
        cbHasViewportVal: this.cbHasViewport,
        metaTags : [],
        links : [],
        scripts : [],
        hideBootstrapCSS : this.disableBootstrapCss ? this.disableBootstrapCss : false,
        hideHeaderFoooter : this.disableHeaderFooterCss ? this.disableHeaderFooterCss : false,
        hideBootstrapJS : this.disableBootstrapJs ? this.disableBootstrapJs : false,
        structuredData: {
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Chargebee",
          "url": "https://www.chargebee.com/",
          "logo": "https://www.chargebee.com/static/resources/brand/chargebee-icon-brand.png",

          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Showplace Square, 350 Rhode Island St, Suite 240, South Building",
            "addressLocality": "San Francisco",
            "addressRegion": "California",
            "postalCode": "94103",
            "addressCountry": "United States of America"
          },

          "description": "Chargebee lets you manage subscriptions at scale, handle custom recurring billing scenarios, reduce subscription churn and simplify accounting.",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1 (877) 900 1818",
            "contactType": "sales",
            "contactOption": "TollFree",
            "areaServed": "US"
          },
          "sameAs": [
            "https://www.facebook.com/chargebee",
            "https://twitter.com/chargebee",
            "https://plus.google.com/+Chargebee",
            "https://www.instagram.com/chargebee",
            "https://www.youtube.com/channel/UCZcvXvgyGbP46U0TLcI4f2A",
            "https://www.linkedin.com/company/chargebee"
          ]
        }
      }
    }
  },
  head () {
    return {
      title: this.params.cbTitleVal,
      meta: this.params.metaTags,
      link: this.params.links,
      noscript: [{ innerHTML: '' }],
      script: this.params.scripts,
      __dangerouslyDisableSanitizers: ['script']
    }
  },
  created(){
    // Meta Tags
    let metaTags = [
      { charset: 'utf-8' },
      {
        name: 'google-site-verification',
        content: 'F53LIq9XK0wpbOxoXVy_etqAoHNIuhvC2S8wt46cwcE'
      },
      {
        name: 'theme-color',
        content: '#320E6A'
      },
      {
        name: 'description',
        content: this.params.cbDescVal
      },
      //Og Meta Part Start
      {
        property: 'og:url',
        content: this.params.cbUrlVal
      },
      {
        property: 'og:title',
        content: this.params.cbTitleVal
      },
      {
        property: 'og:description',
        content: this.params.cbDescVal
      },
      {
        property: 'og:image',
        content: this.params.cbImageVal
      },
      {
        property: 'og:site_name',
        content: 'Chargebee'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      //Twitter Meta Part Start
      {
        name: 'twitter:url',
        content: this.params.cbUrlVal
      },
      {
        name: 'twitter:title',
        content: this.params.cbTitleVal
      },
      {
        name: 'twitter:description',
        content: this.params.cbDescVal
      },
      {
        name: 'twitter:account_id',
        content: '321192908'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:site',
        content: '@Chargebee'
      },
      {
        name: 'twitter:creator',
        content: '@Chargebee'
      },
      {
        name: 'twitter:image:src',
        content: this.params.cbImageVal
      },
      {
        name: 'twitter:domain',
        content: 'https://www.chargebee.com'
      },
      {
        name: 'msvalidate.01',
        content: '2BDFBE565908FC3899BBA4BD498C57C2'
      }
    ];
    // Has No Index Meta Tag
    if(this.params.cbHasNoindexVal){
      let hasNoindex = {};
        hasNoindex['name'] = 'robots';
        hasNoindex['content'] = 'noindex, nofollow';
        metaTags.unshift(hasNoindex);
    }
    // Has Viewport Meta Tag
    if(this.params.cbHasViewportVal || this.params.cbHasViewportVal === undefined){
      let hasViewport = {};
        hasViewport['name'] = 'viewport';
        hasViewport['content'] = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
        metaTags.unshift(hasViewport);
    }
    this.params.metaTags = metaTags;
    // Style links and fav icon
    let links = [
      { 
        rel: 'shortcut icon',
        type: 'image/x-icon', 
        href: '/static/resources/brand/favicon.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/static/resources/brand/apple-touch-icon.png'
      },
      {
        rel: 'canonical',
        href: this.params.cbUrlVal
      }
    ];
    // Bootstrap CSS
    if(!this.params.hideBootstrapCSS){
      let bootstrapUrl = {};
      bootstrapUrl['rel'] = 'stylesheet';
      bootstrapUrl['type'] = 'text/css';
      bootstrapUrl['href'] = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/css/bootstrap.min.css';
      links.push(bootstrapUrl);
    }
    // Header & Footer CSS
    if(!this.params.hideHeaderFoooter){
      let headerUrl = {};
      headerUrl['rel'] = 'stylesheet';
      headerUrl['type'] = 'text/css';
      headerUrl['href'] = '/static/website/version/styles/header.css';
      links.push(headerUrl);
    }
    //Page Level Styles Tag Generation Start
    let styleUrlArray = this.cbStyle ? this.cbStyle.split(',') : '';
    let styleUrlArrayLength = styleUrlArray.length;
    if(styleUrlArray[0] != ''){
      for(let i=0; i<styleUrlArrayLength; i++){
        let styleUrl = {};
        styleUrl['rel'] = 'stylesheet';
        styleUrl['type'] = 'text/css';
        styleUrl['href'] = styleUrlArray[i].trim();
        links.push(styleUrl);
      }
    }
    //Language Tag Generation Start
    let regionListArray = this.cbRegionList ? this.cbRegionList.split(',') : '';
    let regionUrlArray = this.cbRegionUrl ? this.cbRegionUrl.split(',') : '';
    let regionListArrayLength = regionListArray.length;
    if(regionListArray[0] != '' && regionUrlArray[0] != ''){
      for(let i=0; i<regionListArrayLength; i++){
        let regionList = {};
        regionList['rel'] = 'alternate';
        regionList['hreflang'] = regionListArray[i].trim();
        regionList['href'] = regionUrlArray[i].trim().includes("www.chargebee.com") ? regionUrlArray[i].trim() : 'https://www.chargebee.com'+regionUrlArray[i].trim();
        links.push(regionList);
      }
    }
    this.params.links = links;
    //Page Level Style Tag Generation End
    //Page Level Head Script Tag Generation Start
    let scripts = [
      {
        src: 'https://s3.amazonaws.com/vwo-integrations/clearbit.min.js'
      },
      {
        src: '/static/website/version/scripts/vwo.js'
      },
      {
        src: '/static/website/version/scripts/factors-customfit.js'
      },
      {
        src: '//js.hs-scripts.com/3732359.js',
        id: 'hs-script-loader',
        body: true,
        async: true
      },
      {
        src: 'https://www.influ2.com/tracker?clid=2ae8f282-88f3-418a-9685-ef107b11e754',
        body: true,
        async: true
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js',
        body: true
      },
      {
        src: '/static/website/version/scripts/tp_snippets.js',
        body: true
      },
      {
        src: '/static/website/version/scripts/application.js',
        body: true
      },
      {
        innerHTML: JSON.stringify(this.params.structuredData),
        type: 'application/ld+json'
      }
    ];
    let headScriptUrlArray = this.cbHeadScript ? this.cbHeadScript.split(',') : '';
    let headScriptUrlArrayLength = headScriptUrlArray.length;
    if(headScriptUrlArray[0] != ''){
      for(let j=0; j<headScriptUrlArrayLength; j++){
        let headScriptUrl = {};
        headScriptUrl['src'] = headScriptUrlArray[j].trim();
        scripts.push(headScriptUrl);
      }
    }
    //Page Level Head Script Tag Generation End
    //Page Level Body Script Tag Generation Start
    let bodyScriptUrlArray = this.cbBodyScript ? this.cbBodyScript.split(',') : '';
    let bodyScriptUrlArrayLength = bodyScriptUrlArray.length;
    if(bodyScriptUrlArray[0] != ''){
      for(let k=0; k<bodyScriptUrlArrayLength; k++){
        let bodyScriptUrl = {};
        bodyScriptUrl['src'] = bodyScriptUrlArray[k].trim();
        bodyScriptUrl['body'] = true;
        //bodyScriptUrl['async'] = true;
        scripts.push(bodyScriptUrl);
      }
    }
    // Bootstrap JS
    if(!this.params.hideBootstrapJS){
      let bootstrapJSUrl = {};
      bootstrapJSUrl['src'] = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js';
      bootstrapJSUrl['body'] = 'true';
      bootstrapJSUrl['async'] = 'true';
      scripts.push(bootstrapJSUrl);
    }
    
    this.params.scripts = scripts;
    //Page Level Body Script Tag Generation End
  }
}
</script>