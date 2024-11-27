import React from "react";

const Features = () => {
  window.scroll(0, 0)

  const features = [
    {
      title: "Free Shipping",
      description:
        "Enjoy free delivery on all orders above $50, with no hidden costs or delays.",
      icon: "🚚",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our dedicated support team is here to assist you anytime, anywhere.",
      icon: "📞",
    },
    {
      title: "Secure Payments",
      description:
        "Experience safe and secure transactions with our top-notch payment encryption.",
      icon: "🔒",
    },
    {
      title: "Easy Returns",
      description:
        "Return or exchange products hassle-free within 30 days of purchase.",
      icon: "↩️",
    },
    {
      title: "Exclusive Deals",
      description:
        "Get access to limited-time offers and discounts, available only to our customers.",
      icon: "🎉",
    },
    {
      title: "Quality Assurance",
      description:
        "Every product is quality-checked and guaranteed to meet your expectations.",
      icon: "✅",
    },
  ];

  return (
    <div className="bg-gray-50 pt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
          Why Shop With Us?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover what makes us stand out and why millions of customers trust
          us for their shopping needs.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl text-blue-500 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="banner bg-blue-700 py-10 px-6 my-8 rounded flex items-center">
        <div className="left">
        <h2 className="text-white font-bold text-5xl max-w-[90%]">Special Offer: 30% Off on Custom Orders!</h2>
        <p className="text-white py-4">Personalize your order today and enjoy a special discount. Limited time only!</p>
        </div>
        <a href="#_" class="relative inline-block text-lg group">
    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span class="relative">Shop Now</span>
    </span>
    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>      </div>
    </div>
  );
};

export default Features;
