//TODO Libraries
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//TODO Pages
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  //TODO Variables
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductDate] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  //TODO Function
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductDate(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  //---------------------------------
  return productData ? (
    <div className=" border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                src={item}
                key={index}
                alt=""
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* Product Information */}
        <div className="flex-1">
          <h1 className=" font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex gap-1 items-center mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 font-medium text-3xl">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          {/* Select Size */}
          <div className="flex gap-4 flex-col my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {/* ADD TO CART */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w3/4" />
          <div className="text-sm text-gray-500 mt-5 gap-1 flex flex-col">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available in this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* ------------ Description & Review section--------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border text-sm px-5 py-3">Description</b>
          <p className="border text-sm px-5 py-3">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 px-6 py-6 border text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            temporibus harum optio nulla. Amet neque quisquam accusamus?
            Corporis possimus, ad veniam deserunt ullam perferendis alias enim.
            Sit omnis quam amet!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            temporibus harum optio nulla. Amet neque quisquam accusamus?
            Corporis possimus, ad veniam deserunt ullam perferendis alias enim.
            Sit omnis quam amet!
          </p>
        </div>
      </div>
      {/* ----------------Related Products---------------- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className=" opacity-0"></div>
  );
};

export default Product;