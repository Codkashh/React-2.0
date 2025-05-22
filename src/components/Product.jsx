import React from 'react'

const Product = ({name, price}) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{price}</h2>
    </div>
  )
}

export default Product
