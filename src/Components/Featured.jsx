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
        <h3 data-aos="zoom-in" className="text-4xl my-4 font-semibold text-center">Top Categories</h3>
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
     <div className="banner my-8">
      <img src="/Images/lcd.webp" alt="" />
     </div>
     <section data-aos='zoom-in' className="text-gray-600 body-font">
      <h2 className="text-center font-bold text-4xl text-gray-950">Our Customers</h2>
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img
            alt="testimonial"
            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9SRsi3j5OKr7Ta5wIlIJ35EOONmuCQnWWw&s"
          />
          <p className="leading-relaxed">
          Exceptional service and attention to detail! Highly recommended for anyone seeking quality and professionalism.          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            Dean Jordon
          </h2>
          <p className="text-gray-500">HR at Rychostech</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img
            alt="testimonial"
            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4AOjbFhFPkkyixBi5-aw5xOiV4rOhyiCRy8tcZhppdRR8_Z4iyIoZvQKDhU4Hs5Fauo&usqp=CAU"
          />
          <p className="leading-relaxed">
          Truly impressed with the dedication and expertise! Delivered more than expected, a fantastic experience.          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            Micheal Brick
          </h2>
          <p className="text-gray-500">CEO at Ezeon</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <img
            alt="testimonial"
            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="data:image/jpeg;base64,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"
          />
          <p className="leading-relaxed">
          Timely, reliable, and outstanding quality. The team exceeded expectations, making the process seamless and stress-free          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            Kelian greese
          </h2>
          <p className="text-gray-500">Bank Manager</p>
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
