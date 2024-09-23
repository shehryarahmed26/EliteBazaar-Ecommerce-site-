import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {
    const { id, title, price, rating, thumbnail, brand, category} = item

  return (
    <Link to={`/Products/${id}`}>
    <div class="lg:w-[100%] md:w-1/2 p-4 w-full shadow">
    <a class="block relative h-48 rounded overflow-hidden">
      <img
        alt="ecommerce"
        class="object-cover object-center w-full h-full block"
        src={thumbnail}
      />
    </a>
    <div class="mt-4">
      <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
        {category}
      </h3>
      <h2 class="text-gray-900 title-font text-lg font-medium">
        {title}
      </h2>
      <p class="mt-1">${price}.00</p>
    </div>
  </div>
  </Link>
  )
}

export default ProductCard