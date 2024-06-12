
const config = {

  url: process.env.NEXT_PUBLIC_URL,

  umami: {
    script: process.env.NEXT_PUBLIC_UMAMI_SCRIPT || null,
    websiteID: process.env.NEXT_PUBLIC_UMAMI_WEBSITEID || null,
  }

}

export default config;