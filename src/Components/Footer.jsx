import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="sub-footer container px-8 py-1 mx-auto flex md:items-center justify-between lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className=" md:mx-0 w-[300px] flex flex-col justify-center items-center sm:block mx-auto text-center md:text-left">
          <img className="w-36" src="/Images/logo.PNG" alt="" />
          <p className="mt-2 text-sm text-gray-500">
            EliteBazaar is an online shopping website offering quality products
            with secure payment and fast delivery.
          </p>
        </div>
        <div className=" flex flex-wrap justify-between sm:gap-14  md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className=" px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              General
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Beauty</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fragnances</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Furniture</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Groceries</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Electronics
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Laptops</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Tablets</a>
              </li>
              <Link to={`/search/smartphones`} >
              <li>
                <a className="text-gray-600 hover:text-gray-800">Smartphones</a>
              </li>
              </Link>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Mobile Accessories
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Womens
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Skin Care</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Sun Glasses</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Women Jewellery
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Women Dresses
                </a>
              </li>
            </nav>
          </div>
          {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Vehicles
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Vehicle</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Motorcycle</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Sports Accessories</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Kitchen Accessories</a>
                </li>
              </nav>
            </div> */}
        </div>
      </div>
      <div className="footer bg-gray-100">
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
  );
};
export default Footer;
