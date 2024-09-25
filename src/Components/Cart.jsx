import React, { useContext } from 'react'
import { CartContext } from '../assets/Context/CartContext'

const Cart = () => {
    const {Cartitems, removeitemfromcart} = useContext(CartContext)
    console.log('yeloo', Cartitems);
    
  return (
    <div className='container px-10 min-h-screen mx-auto'>
        { Cartitems.length >= 1 ? 
            Cartitems.map((item) => (
                <div className='flex flex-col justify-center items-center md:flex-row shadow-lg p-4 mt-4'>
                    <img className='w-[70%] md:w-[20%]' src={item.thumbnail} alt="" />
                    <div className="details pl-4">
                    <h1 className='text-lg font-bold text-gray-800'>{item.title}</h1>
                    <p className='max-w-[100%] text-xs text-gray-600 md:max-w-[70%] md:text-base'>{item.description}</p>
                    <p className='text-sm my-2 md:text-lg text-orange-600'>Price: ${item.price}</p>
                    <p onClick={() => removeitemfromcart(item.id)} className='text-center my-3 px-2 text-red-600 font-bold border border-red-600 cursor-pointer'>Remove Item</p>
                    </div>
                </div>
            )) :
            <h1 className='text-black text-center mt-20 text-3xl'>No Item Added</h1>
        }
    </div>
  )
}

export default Cart