import React, { useContext } from 'react'
import { CartContext } from '../assets/Context/CartContext'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
// /import {PlusOutlined} from 'antd';
// import {PlusSquareFilled} from 'antd/'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {Cartitems, removeitemfromcart, addquantity, Addtocart, decreasequantity} = useContext(CartContext)
    const Deliverycharges = 12;
    // console.log('yeloo', Cartitems);
    const  TotalAmouont = Cartitems.reduce((total, obj) => total + obj.quantity * obj.price, 0)
    const Grandtotal = TotalAmouont + Deliverycharges
    const  TotalQuantity = Cartitems.reduce((total, obj) => total + obj.quantity, 0)
    // console.log(TotalAmouont);
    const removetoast = () => toast('Item Remove')
    
  return (
    <div className='min-h-screen'>
        { Cartitems.length >= 1 ? 
      <div className='flex flex-col md:flex-row justify-center px-2'>
        <div className='container px-0 min-h-screen mx-auto'>
        {    Cartitems.map((item) => (
                <div key={item.id} className='flex flex-col justify-center items-center md:flex-row shadow-lg p-4 mt-4'>
                    <img className='w-[70%] md:w-[20%]' src={item.thumbnail} alt="" />
                    <div className="details pl-4">
                    <h1 className='text-lg font-bold text-gray-800'>{item.title}</h1>
                    <p className='max-w-[100%] text-xs text-gray-600 md:max-w-[70%] md:text-base'>{item.description}</p>
                    <p className='text-sm my-2 md:text-lg text-orange-600'>Price: ${item.price}</p>
                    <div className='flex items-center gap-4'>
                        <div onClick={() => decreasequantity(item.id)} className='hover:bg-yellow-600 border hover:text-white px-1'><MinusOutlined/></div>
                     <p>{item.quantity}</p>
                     <div onClick={() => Addtocart(item)} className='hover:bg-red-600 border hover:text-white px-1'><PlusOutlined/></div>
                     </div>
                    <p onClick={() => { removetoast(), removeitemfromcart(item.id)}} className='text-center my-3 px-2 text-red-600 font-bold border border-red-600 cursor-pointer'>Remove Item</p>
                    </div>
                </div>
            )) }
    </div>
    <div className="payment-section  flex-col mt-5 md:mt-0 flex-wrap justify-center md:justify-start gap-4 md:gap-5 md:flex-col w-[100%] md:w-[350px] md:h-[400px] md:p-8 md:border">
        <h2 className='text-2xl  md:text-3xl hidden md:block font-bold'>Summary</h2>
        <div className='flex justify-between items-center w-[110px] md:w-full'>
            <h3 className='text-sm my-2 md:text-base font-bold gap-2'>Total Quantity</h3>
            <p className='font-semibold text-xs md:text-base'>{TotalQuantity}</p>
        </div>
        <div className='flex md:justify-between items-center gap-2 w-[120px] md:w-full'>
            <h3 className='text-sm my-2 md:text-base font-bold'>Subtotal</h3>
            <p className='font-semibold text-xs md:text-base'>${TotalAmouont}</p>
        </div>
        <div className='flex justify-between items-center gap-2 w-[170px] md:w-full'>
            <h3 className='text-sm my-2 md:text-base font-bold'>Delivery Charges</h3>
            <p className='font-semibold text-xs md:text-base'>${Deliverycharges}.00</p>
        </div>
        <hr />
        <div className='flex md:justify-between items-center gap-2 w-[150px] md:w-full'>
            <h3 className='text-sm my-2 md:text-base font-bold'>Grand Total</h3>
            <p className='font-semibold text-xs md:text-base'>${Grandtotal}</p>
        </div>
        <Link to={'/Checkout'}>
        <button className='bg-black my-6 sm:my-0 w-full text-xs md:text-base px-2 text-white font-semibold rounded-md py-1'>Go To Checkout</button>
        </Link>
    </div> 
    </div> : 
    <div>
        <h1 className='text-black text-center mt-20 text-3xl'>No Item Added</h1>
    </div>
}
</div>
  )
}

export default Cart