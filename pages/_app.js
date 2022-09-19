import "../styles/globals.scss"
import Header from "../components/Header/Header"
import { AnimatePresence } from "framer-motion"
import ShopProvider from "../context/shopContext"

function MyApp({ Component, pageProps }) {
  return (
    <ShopProvider>
      <Header />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <main>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
    </ShopProvider>
  )
}

export default MyApp
