import React, { useContext } from 'react'
import { CartContext } from '../assets/Context/CartContext'

const Cart = () => {
    const {Cartitems, removeitemfromcart} = useContext(CartContext)
    console.log('yeloo', Cartitems);
    
  return (
    <div className='container px-10'>
        {
            Cartitems.map((item) => (
                <div className='flex'>
                    <img className='h-[190px]' src={item.thumbnail} alt="" />
                    <div className="details pl-4">
                    <h1 className='text-lg font-bold'>{item.title}</h1>
                    <p className='max-w-[70%]'>{item.description}</p>
                    <p className='text-lg text-orange-600'>Price: ${item.price}</p>
                    <p onClick={() => removeitemfromcart(item.id)} className=' w-fit px-2 text-red-600 font-bold underline cursor-pointer'>Remove Item</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Cart