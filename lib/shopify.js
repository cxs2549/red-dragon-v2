import Client from "shopify-buy"

const client = Client.buildClient({
  domain: "red-dragon-vapors.myshopify.com",
  storefrontAccessToken: "b853974105965de8f5590a50a4064ea9",
})

export default client
