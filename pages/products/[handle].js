import client from "../../lib/shopify"
import Layout from '../../components/Product/Layout'

export async function getStaticProps({ params }) {
  const { handle } = params
  const product = await client.product.fetchByHandle(handle)

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  }
}

export async function getStaticPaths() {
  const products = await client.product.fetchAll()

  return {
    paths: products.map((p) => ({
      params: {
        handle: p.handle,
      },
    })),
    fallback: false,
  }
}

export default function ProductPage({ product }) {
  return (
    <>
      <Layout product={product} />
    </>
  )
}
