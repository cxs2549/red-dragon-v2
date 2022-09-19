import React from "react"

const Photo = ({ photo }) => {
  return (
    <>
      <div className="bg-white rounded-xl max-w-md">
        <img src={photo} className="max-w-xs mx-auto rounded-xl mb-2" alt="" />
      </div>
    </>
  )
}

export default Photo
