import client from "../lib/shopify"
import HomeLayout from "../components/Home/HomeLayout"

const Home = ({ collections }) => {
  return (
    <>
      <HomeLayout collections={collections} />
    </>
  )
}

export default Home

export async function getStaticProps() {
  const collections = await client.collection.fetchAllWithProducts()
  return {
    props: {
      collections: JSON.parse(JSON.stringify(collections)),
    },
  }
}
