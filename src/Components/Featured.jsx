import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Pagination } from 'antd';
import { BarLoader } from "react-spinners";
import Banner from "./Banner";

const Featured = () => {
  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const [loading, setloading] = useState(true)
  const [categoryitem, setcategoryitem] = useState('All')
  const [skip, setskip] = useState(0)
  const [limit, setlimit] = useState(20)
  const categoriesarr = [
    {
      img: '/Images/smartphones.png',
      slug: 'SmartPhones'
    },
    {
      img: '/Images/beauty.png',
      slug: 'Beauty'
    },
    {
      img: '/Images/vehicle.png',
      slug: 'Vehicle'
    },
    {
      img: '/Images/bikes.png',
      slug: 'Motorcycle'
    },
    {
      img: '/Images/furniture.png',
      slug: 'Furniture'
    },
    {
      img: '/Images/electronics.png',
      slug: 'Laptops'
    },
  ]
  
  useEffect(() => {
    setloading(true)
    const url = categoryitem === 'All' ? 
    `https://dummyjson.com/products?limit=8&skip=40&select=title,price,thumbnail` :
    `https://dummyjson.com/products/category/${categoryitem}` 
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setproducts(res.products);
          
      });
      setloading(false)
    }, [categoryitem, skip]);
    
    useEffect(() => {
      setloading(true)
      fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        setcategories(res);
        setloading(false)
      });
  }, []);
  window.scroll(0, 0)

  return (
    <div className="min-h-screen" >
    {loading ? 
     <div className="w-full h-screen flex justify-center items-center -translate-y-36"><BarLoader color="#1aafc2" className="" /></div> :
     <div>
       <Banner/>
      <div className="flex flex-col justify-center flex-wrap mb-8 mx-5">
        <h3 className="text-4xl my-8 font-semibold text-center">Top Categories</h3>
      <div className="flex w-full justify-center gap-2">

      {
        categoriesarr.map((category) => (
          // <button onClick={() => setcategoryitem(category.slug)} className={`${categoryitem === category.slug ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} px-3 rounded mx-1 my-1 text-center text-[10px] md:text-lg `}>{category.name}</button>
          <div>
            <img onClick={() => setcategoryitem(category.slug)} className="w-[50px] md:w-[80px] mx-1 md:mx-10 my-4" src={`${category.img}`} alt="" />
          </div>
           ))
          }
          </div>
     </div>
     <h3 className="text-4xl my-10 font-semibold text-center">Featured Products</h3>

     <div className="flex w-full flex-wrap px-4 justify-center gap-5 gap-y-14 md:px-8">
     { products.map((item) => (
      <ProductCard key={item.id} item={item}/>
     ))}
     </div> 
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img
            alt="testimonial"
            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="/Images/shahab.jfif"
          />
          <p className="leading-relaxed">
          Shahabuddin is a skilled software developer with expertise in creating innovative solutions. he excels at crafting modern, user-friendly interfaces. 
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            Shahabuddin Ghori
          </h2>
          <p className="text-gray-500">Software Developer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img
            alt="testimonial"
            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="/Images/siddiqui.jfif"
          />
          <p className="leading-relaxed">
          Siddiqui Ahmed is a creative UI/UX designer, crafting user-friendly and visually appealing digital experiences.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            Siddiqui Ahmed
          </h2>
          <p className="text-gray-500">UI/UX Designer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <img
            alt="testimonial"
            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="/Images/inam.jfif"
          />
          <p className="leading-relaxed">
          Inam Ullah is a skilled SQA engineer, ensuring software quality through meticulous testing and efficient debugging techniques.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            Inam Ullah Khan
          </h2>
          <p className="text-gray-500">SQA Engineer</p>
        </div>
      </div>
    </div>
  </div>
</section>

     <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <img className="w-36" src="/Images/logo.PNG" alt="" />
      <p className="mt-2 text-sm text-gray-500">
      EliteBazaar is an online shopping website offering quality products with secure payment and fast delivery.
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container py-4 px-5 flex flex-wrap flex-col justify-center gap-5 sm:flex-row">
      <p className="text-gray-500 text-sm text-center ">
        © 2024 Elitebazaar — All Rights Reserved
      </p>
      <span className="inline-flex  sm:mt-0 mt-2 justify-center">
        <a className="text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>


     </div>
     }
    </div>
  );
};
export default Featured;
