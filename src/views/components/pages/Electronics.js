import React, { useState } from 'react'
import ProductsJson from '../../../Data/Products.json'

const Electronics = () => {
  return (
    <>
      {
        ProductsJson.mobileProducts.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.image} />
            </div>
          )
        })
      }
    </>
  )
}

export default Electronics