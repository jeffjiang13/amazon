import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import Image from "next/image";
import styles from "./ProductDetail.module.css";
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
      className="grid grid-cols-5 bg-white shadow-lg gap-4"
    >
      <Toaster />

        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-contain"
        />
      <div className="col-span-3 mx-5">
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
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}
          onClick={addItemToBasket}
          className="button"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}

export default ProductDetail;
