import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";

import { StarIcon } from "../../icons";
import { addToBasket } from "../slices/basketSlice";
import Link from "next/link";
export default function Product({ data }) {
  const { id, title, category, description, image, price, rating } = data;

  const [hasPrime] = useState(Math.random() < 0.5);

  const dispatch = useDispatch();

  const addToBasket = () => {
    const loadingToast = toast.loading("Adding Item...");

    const product = {
      id,
      title,
      category,
      description,
      image,
      price,
      rating,
    };
    dispatch(addToBasket(product));
    toast.success(`Item Added To Basket`, {
      id: loadingToast,

      position: "bottom-right",
      style: {
        textAlign: "center",
        padding: "18px",
      },
    });
  };

    return (
      <article
        className="flex flex-col bg-white shadow-xl p-8 relative h-full"
        key={id}
      >
      <Toaster />

        <small className="absolute right-2 top-2 opacity-60 text-sm">
          {category}
        </small>
        <Link href={`/products/${id}`}>
          <img
            src={image}
            alt={title}
            className="h-52 w-52 object-contain mb-4 mx-auto"
          />
        </Link>
        <Link href={`/products/${id}`}>
          <h2 className="font-bold text-lg mb-4">{title}</h2>
        </Link>
        <p className="flex mb-3 space-x-1">
          {Array(Math.round(rating?.rate || 0))
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
        </p>
        <p className="line-clamp-3 text-xs mb-3">{description}</p>
        <div className="mb-5">
          <Currency quantity={price} currency="USD" />
        </div>
        {hasPrime && (
          <div className="flex items-center mt-auto">
            <img src="https://links.papareact.com/fdw" alt="Prime" className="w-12 h-12 mr-2" />
            <small className="opacity-70">FREE Next-day delivery</small>
          </div>
        )}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={addItemTOBasket}
        className="mt-auto button"
      >
        Add to Busket
      </motion.button>
      </article>
    );
  }
