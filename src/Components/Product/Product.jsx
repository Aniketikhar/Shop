import React from 'react'

const Product = ({product}) => {
  return (
    <div className='w-[8rem] md:w-[12rem] h-20 border m-2 lg:m-5'>
      {product.title}
    </div>
  )
}

export default Product
