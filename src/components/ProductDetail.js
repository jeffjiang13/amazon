import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { StarIcon } from "../../icons";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

function ProductDetail({ product }) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const productToAdd = {
      id: product.id,
      title: product.title,
      category: product.category,
      description: product.description,
      image: product.image,
      price: product.price,
      rating: product.rating,
      hasPrime: product.hasPrime,
    };
    dispatch(addToBasket(productToAdd));
    toast.success("Item Added to Cart", {
      position: "bottom-right",
      style: {
        textAlign: "center",
        padding: "18px",
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex flex-col md:flex-row m-5 bg-white z-30 p-5 shadow-lg"
    >
      <Toaster />
      <div className="mx-auto md:mx-0">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col mt-5 md:mt-0 md:mx-10">
        <h4 className="font-bold text-lg mb-4">{product.title}</h4>
        <div className="flex">
          {Array(product.rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{product.description}</p>
        <Currency quantity={product.price} currency="USD" />
        {product.hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              src="https://www.nicepng.com/png/detail/115-1159983_amazon-prime-logo-prime-amazon.png"
              alt=""
              loading="lazy"
              className="w-12"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
        <div className="flex my-auto justify-self-end">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            onClick={addItemToBasket}
  className="p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500 hover:bg-gradient-to-b hover:from-orange-200 hover:to-orange-400 hover:border hover:border-orange-300"
>
  Add to Cart
</motion.button>

        </div>

      </div>

    </motion.div>

  );
}

export default ProductDetail;
