
const config = {

  url: process.env.URL,

  umami: {
    script: process.env.UMAMI_SCRIPT || null,
    websiteID: process.env.UMAMI_WEBSITEID || null,
  }

}

export default config;