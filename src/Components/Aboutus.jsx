import React from "react";

const AboutUs = () => {
  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "500+", label: "Trusted Partners" },
    { value: "5 Years", label: "Industry Experience" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-500 text-white py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            About EliteBazaar
          </h1>
          <p className="mt-6 text-lg sm:text-xl">
            At EliteBazaar, we are committed to delivering premium products and
            exceptional services that redefine online shopping.
          </p>
          <a
            href="#learn-more"
            className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto py-20 px-6 sm:px-12 lg:px-20" id="learn-more">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1599658880436-c61792e70672?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
              alt="Our Journey"
              className="rounded-lg shadow-md"
            />
            <div className="absolute top-0 left-0 bg-blue-500 opacity-50 w-32 h-32 rounded-full blur-xl -z-10"></div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              EliteBazaar was founded on the principles of innovation,
              dedication, and customer satisfaction. Our vision is to build a
              marketplace where quality and affordability go hand in hand.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are looking for everyday essentials or unique finds,
              we ensure a seamless and trustworthy shopping experience.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-50 py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-4xl font-bold text-blue-500">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section data-aos='zoom-in' className="text-gray-600 body-font">
      <h2 className="text-2xl py-8 font-extrabold text-gray-800 text-center sm:text-5xl">
          Our Team Members
        </h2>

  <div className="container px-5 py-6 mx-auto">
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
  );
};

export default AboutUs;
