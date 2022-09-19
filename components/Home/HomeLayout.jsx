import React from "react"
import Carousel from "./parts/Carousel"

const HomeLayout = ({collections}) => {
    const theHeavies = collections.filter(c => c.title === 'The Heavies')
  return (
    <>
      <Carousel images={theHeavies[0].products} />
    </>
  )
}

export default HomeLayout
