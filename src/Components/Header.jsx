import { Badge } from 'antd'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../assets/Context/CartContext'
import { AuthContext } from '../assets/Context/AuthContext'
import { auth, onAuthStateChanged, signOut } from '../utils/firebase'
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoCartOutline } from 'react-icons/io5'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {
  const {user, setuser} = useContext(AuthContext) 
  const {Cartitems} = useContext(CartContext)
  const [shadow, setshadow] = useState('')
  const [search, setsearch] = useState('')
  const searchalert = () => toast.error('Please Write something in Search Bar !')
  const logouttoast = () => toast('logout Successfull')
  const Navigate = useNavigate()
  const [logoutflang, setlogoutflang] = useState(true)

useEffect(() => {
  // console.log(Cartitems);
  
}, [Cartitems])

window.addEventListener('scroll', () => {
  if(window.scrollY > 30) {
    setshadow('shadow-md')
  }
  else {
    setshadow('')
  }
})
const handlesearch = (e) => {
  if(e.key === 'Enter') {
  handlesearchbtn();
  }
}
const handlesearchbtn = () => {
  if (search) {
    Navigate(`/Search/${search}`)
    setsearch('') 
  }
  else {
    searchalert();
  }
}
const handlelogout = async () => {
  try {
    await signOut(auth)
    console.log('User Signout Successfully');
    setuser('')
    setlogoutflang(false)
    logouttoast();
    
      }
      catch (e) {
        console.log(e);       
      }
    }

  return (
    <div className={`sticky top-0 bg-white ${shadow}  z-20`}>
    {/* Main navigation container */}
    <nav className="flex-no-wrap relative flex w-full items-center justify-betwee py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        
          {/* Logo */}

          <Link to={'/'}><img
              src="/Images/logo.PNG"
              className='w-16 md:w-24'
              alt="TE Logo"
              loading="lazy"
            /> </Link>

            {/* Left Links */}

          <div className="links hidden sm:flex">
          <Link to={'/products'}>
            <a href="#" className='mx-4 hover:text-blue-900 transition-all'>Products</a>
            </Link>
            <Link to={'/Features'}>
            <a href="#" className='mx-4 hover:text-blue-900 transition-all' >Features</a>
            </Link>
            <Link to={'/Aboutus'}>
            <a href="#" className='mx-4 hover:text-blue-900 transition-all'>About us</a>
            </Link>
          </div>
        
          <div className='search-bar hidden sm:flex mx-auto '>
                        <input onKeyDown={handlesearch} value={search} onChange={(e) => setsearch(e.target.value)} className='border border-gray-500 mr-5 rounded px-2 w-[400px] py-1 placeholder:text-sm placeholder:font-thin focus:border-1 focus:outline-none placeholder:text-gray-700' placeholder='Search Your Item' type="text" name="" id="" />
                        <button onClick={handlesearchbtn} className='bg-blue-500 text-white px-4 py-1 rounded-md'>Search</button>
                        <ToastContainer theme='dark' />


          </div>

     
        {/* Right elements */}

        <div className="relative flex items-center">
          {/* Icon */}
            {/* <a className=" me-1 text-neutral-600 dark:text-white" href="#"> */}
          <Link to={'/Cart'}>
            <span className="[&>svg]:w-5 flex text-xl mx-2">
              <MdOutlineShoppingCart />
              <Badge className='relative -top-3' count={Cartitems.length}/>
            </span>
                </Link>
          {/* </a> */}
        
          <div
            className="relative"
            data-twe-dropdown-ref=""
            data-twe-dropdown-alignment="end"
          >
            {/* Second dropdown trigger */}
            {
            user ? 
            <div className="user relative">
              <p onClick={() => setlogoutflang(!logoutflang)} className='text-xs hover:text-blue-950 transition-all cursor-pointer'>{user?.displayName}</p>
              {logoutflang ? <button onClick={handlelogout} className='logoutbtn absolute top-4 right-14 bg-slate-300 text-sm my-1 px-2 rounded '>Logout</button> : ''}
              </div> : 
              <div className="authentication">
              <Link to={'/signup'}>
            {/* <a href="#"  className='bg-blue-500 rounded px-2 py-1 mx-2 text-white'>Signup</a> */}
            </Link>
            <div className='flex gap-3'>
              <Link to={'/login'}>
            <p className='text-lg'><FaRegHeart /></p>

            </Link>
            <Link to={'/login'}>
            <p className='text-lg'><FaRegUser /></p>

            </Link>
            </div>
            </div>
            }
            
          </div>
        </div>
      </div>
    </nav>
    <div className='mobile-search flex justify-center px-10 py-4 sm:hidden'>
                        <input onKeyDown={handlesearch} value={search} onChange={(e) => setsearch(e.target.value)} className='border border-gray-500 mr-5 rounded px-2 w-[400px] py-1 placeholder:text-sm placeholder:font-thin focus:border-1 focus:outline-none placeholder:text-gray-700' placeholder='Search Your Item' type="text" name="" id="" />
                        <button onClick={handlesearchbtn} className='bg-blue-500 text-white px-4 py-1 rounded-md'>Search</button>
                        <ToastContainer theme='dark' limit={1} autoClose={1000}   />


          </div>
  </div>
  

  )
}

export default Header