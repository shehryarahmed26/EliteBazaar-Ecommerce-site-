import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../assets/Context/CartContext'

const ProductCard = ({item}) => {
    const { id, title, price, rating, thumbnail, brand, category} = item
    const {Addtocart} = useContext(CartContext)

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
      <p class="mt-1 text-orange-700">${price}.00</p>
      {/* <h2 className='bg-blue-700 text-white text-center w-fit px-6 my-3 py-1 mx-auto'>Add to Cart</h2> */}
    </div>
  </div>
  </Link>
  )
}

export default ProductCard