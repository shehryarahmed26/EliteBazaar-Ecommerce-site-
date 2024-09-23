const Category = ({ data }) => {
  const { name } = data;
//   let handlecategory = () => {
//     fetch(`https://dummyjson.com/products/category/${name}`)
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
        
//       });
//   };
  return (
    <button
    //   onClick={handlecategory}
      className="bg-gray-200 px-3 rounded mx-1 my-1 text-center"
    >
      {name}
    </button>
  );
};

export default Category;
