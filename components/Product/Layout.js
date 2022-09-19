import React from "react"
import Photo from "./parts/Photo"
import Details from "./parts/Details"
// import AnimLayout from "../AnimatedLayout"

const Layout = ({ product }) => {
  return (
    <>
      <div className="mx-auto max-w-5xl py-12 tablet:flex tablet:gap-3 px-5 xl:px-0">
        <Photo photo={product.images[0].src} />
        <Details product={product} />
      </div>
    </>
  )
}

export default Layout
