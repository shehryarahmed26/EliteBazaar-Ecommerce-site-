import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Pagination } from 'antd';
import { BarLoader } from "react-spinners";
import Banner from "./Banner";
import aos, { AOS } from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Featured = () => {
  aos.init()
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
    `https://dummyjson.com/products?limit=8&skip=77&select=title,price,thumbnail` :
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
        <h3 data-aos="zoom-in" className="text-4xl my-8 font-semibold text-center">Top Categories</h3>
      <div className="flex w-full justify-center gap-2">

      {
        categoriesarr.map((category) => (
          // <button onClick={() => setcategoryitem(category.slug)} className={`${categoryitem === category.slug ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} px-3 rounded mx-1 my-1 text-center text-[10px] md:text-lg `}>{category.name}</button>
          <div data-aos="zoom-in">
            <img onClick={() => setcategoryitem(category.slug)} className="w-[50px] md:w-[80px] mx-1 md:mx-10 my-4" src={`${category.img}`} alt="" />
          </div>
           ))
          }
          </div>
     </div>
     <h3 data-aos="zoom-in" className="text-4xl my-10 font-semibold text-center">Featured Products</h3>

     <div className="flex w-full flex-wrap px-4 justify-center gap-5 gap-y-14 md:px-8">
     { products.map((item) => (
      <ProductCard key={item.id} item={item}/>
     ))}
     </div> 
     <section data-aos='zoom-in' className="text-gray-600 body-font">
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



     </div>
     }
    </div>
  );
};
export default Featured;
