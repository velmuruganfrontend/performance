const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_WEBINARS_ID',
  'CTF_GLOSSARIES_ID',
  'CTF_CASESTUDIES_ID',
  'CTF_INTEGRATIONS_ID',
  'CTF_COMPARE_COMPETITORS_ID',
  'CTF_COMPARE_PAYMENT_GATEWAY_PROVIDERS_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CMA_ACCESS_TOKEN',
  'CTF_CPA_ACCESS_TOKEN'
])
const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)

const config = {
  /*
  ** Build configuration
  */
  build: {
    standalone: true, 
    /*
    ** Run ESLINT on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'vue-loader',
          exclude: /(node_modules)/
        })
      }
      config.node = {
        fs: 'empty',
        child_process: 'empty'
      }
    },

    postcss: [
      require('autoprefixer')({
        browsers: ['> 5%']
      })
    ]
  },
  cssSourceMap: false,
  cacheBusting: true,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },

  mode: 'universal',
  /*
  ** ᕕ( ᐛ )ᕗ CTF-BLOG-IN-5-MINUTES
  ** Make client available everywhere via Nuxt plugins
  */
  plugins: [
    '~/plugins/contentful'
  ],

  /*
  ** ᕕ( ᐛ )ᕗ CTF-BLOG-IN-5-MINUTES
  ** Get all blog posts from Contentful
  ** and generate the needed files upfront
  **
  ** Included:
  ** - blog posts
  ** - available blog post tags
  */
  generate: {
    routes () {
      return Promise.all([
        // get all glossaries entries
        cdaClient.getEntries({
          'content_type': ctfConfig.CTF_GLOSSARIES_ID
        }),
        // get all compare-competitors entries
        cdaClient.getEntries({
          'content_type': ctfConfig.CTF_COMPARE_COMPETITORS_ID
        }),
        // compare-payment-gateway-providers
        cdaClient.getEntries({
          'content_type': ctfConfig.CTF_COMPARE_PAYMENT_GATEWAY_PROVIDERS_ID
        })
      ])
      .then(([glossaries,compareCompetitors,comparePaymentGatewayProviders]) => {
        return [
          // map glossaries entries to URLs
          ...glossaries.items.map(entry => `/resources/glossaries/${entry.fields.slug}`),
          // map compare-competitors entries to URLs
          ...compareCompetitors.items.map(entry => `/compare-competitors/${entry.fields.slug}`),
          // map compare-payment-gateway-providers entries to URLs
          ...comparePaymentGatewayProviders.items.map(entry => `/resources/tools/compare-payment-gateway-providers/${entry.fields.slug}`)
        ]
      })
    }
  },

  /*
  ** Define environment variables being available
  ** in generate and browser context
  */
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_CPA_ACCESS_TOKEN: ctfConfig.CTF_CPA_ACCESS_TOKEN,
    CTF_WEBINARS_ID: ctfConfig.CTF_WEBINARS_ID,
    CTF_GLOSSARIES_ID: ctfConfig.CTF_GLOSSARIES_ID,
    CTF_CASESTUDIES_ID: ctfConfig.CTF_CASESTUDIES_ID,
    CTF_INTEGRATIONS_ID: ctfConfig.CTF_INTEGRATIONS_ID, 
    CTF_COMPARE_COMPETITORS_ID: ctfConfig.CTF_COMPARE_COMPETITORS_ID,
    CTF_COMPARE_PAYMENT_GATEWAY_PROVIDERS_ID: ctfConfig.CTF_COMPARE_PAYMENT_GATEWAY_PROVIDERS_ID
  }
}

module.exports = config