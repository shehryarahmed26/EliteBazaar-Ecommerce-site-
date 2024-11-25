import { Badge } from 'antd'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../assets/Context/CartContext'
import { AuthContext } from '../assets/Context/AuthContext'
import { auth, onAuthStateChanged, signOut } from '../utils/firebase'

const Header = () => {
  const {user, setuser} = useContext(AuthContext)
  // console.log(user);
  
const {Cartitems} = useContext(CartContext)
const [shadow, setshadow] = useState('')
const [search, setsearch] = useState('')
const Navigate = useNavigate()
const [logoutflang, setlogoutflang] = useState(true)
useEffect(() => {
  console.log(Cartitems);
  
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
  Navigate(`/Search/${search}`)
  setsearch('')
  }
}
const handlelogout = async () => {
  try {
    await signOut(auth)
    console.log('User Signout Successfully');
    setuser('')
    setlogoutflang(false)
    
      }
      catch (e) {
        console.log(e);       
      }
    }
  


  return (
    <div className={`sticky top-0 bg-white ${shadow}  z-20`}>
    {/* Main navigation container */}
    <nav className="flex-no-wrap relative flex w-full items-center justify-betwee py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        
          {/* Hamburger icon */}
          <Link to={'/'}><img
              src="/Images/logo.PNG"
              className='w-16 md:w-24'
              alt="TE Logo"
              loading="lazy"
            /> </Link>
            <Link to={'/products'}>
            <a href="#" className='mx-4 hover:text-blue-900 transition-all'>Products</a>
            </Link>
            <Link to={'/Features'}>
            <a href="#" className='mx-4 hover:text-blue-900 transition-all' >Features</a>
            </Link>
            <Link to={'/Aboutus'}>
            <a href="#" className='mx-4 hover:text-blue-900 transition-all'>About us</a>
            </Link>
        {/* </button> */}
        {/* Collapsible navigation container */}
        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent1"
          data-twe-collapse-item=""
        >
          {/* Logo */}
          <a
            className="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
            href="#"
          >
           
          </a>
          {/* Left navigation links */}
          
          {/* Left links */}
        </div>
        {/* Right elements */}
        <div className="relative flex items-center">
          {/* Icon */}
            <input onKeyDown={handlesearch} value={search} onChange={(e) => setsearch(e.target.value)} className='border mr-5 rounded px-2 placeholder:text-sm placeholder:font-thin focus:border-1 focus:outline-none' placeholder='Search Your Item' type="text" name="" id="" />
          <a className=" me-1 text-neutral-600 dark:text-white" href="#">
          <Link to={'/Cart'}>
            <span className="[&>svg]:w-5 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill=""
                >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
              <Badge className='relative -top-3' count={Cartitems.length}/>
            </span>
                </Link>
          </a>
          {/* First dropdown container */}
          <div
            className="relative"
            data-twe-dropdown-ref=""
            data-twe-dropdown-alignment="end"
          >
            {/* First dropdown trigger */}
            
            {/* First dropdown menu */}
            <ul
              className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
              aria-labelledby="dropdownMenuButton1"
              data-twe-dropdown-menu-ref=""
            >
              {/* First dropdown menu items */}
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                  href="#"
                  data-twe-dropdown-item-ref=""
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                  href="#"
                  data-twe-dropdown-item-ref=""
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                  href="#"
                  data-twe-dropdown-item-ref=""
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          {/* Second dropdown container */}
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
            <Link to={'/login'}>
            <a href="#"  className='bg-black rounded px-2 py-1 text-white'>Login</a>
            </Link>
            </div>
            }
            {/* Second dropdown menu */}
            <ul
              className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
              aria-labelledby="dropdownMenuButton2"
              data-twe-dropdown-menu-ref=""
            >
              {/* Second dropdown menu items */}
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                  href="#"
                  data-twe-dropdown-item-ref=""
                >
                  Action
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                  href="#"
                  data-twe-dropdown-item-ref=""
                >
                  Another action
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                  href="#"
                  data-twe-dropdown-item-ref=""
                >
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Right elements */}
      </div>
    </nav>
  </div>
  

  )
}

export default Header