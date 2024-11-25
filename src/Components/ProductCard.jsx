import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../assets/Context/CartContext'
import aos, { AOS } from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles

const ProductCard = ({item}) => {
  aos.init()
    const { id, title, price, rating, thumbnail, brand, category} = item
    const {Addtocart} = useContext(CartContext)
    console.log(item);
    

  

  return (
    // <Link>
    // <div className='flex flex-col w-[120px]'>
    // <img src={thumbnail} alt="" />
    // <h3>{category}</h3>
    // <h2>{title}</h2>
    // </div>
    // </Link>
    <Link to={`/Products/${id}`}>
      {/* <div className='w-[40%]'> */}
    <div data-aos="zoom-in" class="w-[150px] lg:w-[300px] md:h-[330px] md:w-1/2 p-4 shadow-sm shadow-gray-500">
    <a class="block relative h-24  rounded md:h-48">
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
      <h2 class="text-gray-900 title-font text-xs md:text-lg font-medium">
        {title}
      </h2>
      <p class="mt-1 ">${price}.00</p>
      {/* <p>{crossprice}</p> */}
      {/* <h2 className='bg-blue-700 text-white text-center w-fit px-6 my-3 py-1 mx-auto'>Add to Cart</h2> */}
    </div>
  </div>
  {/* </div> */}
  </Link>
  )
}

export default ProductCard