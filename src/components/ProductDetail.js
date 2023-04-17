import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

import { addToBasket } from "../features/basket/basketSlice";
import { getProducts } from "../utils/getProducts";

export default function ProductDetails() {
  const [details, setDetails] = useState(null);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const result = await getProducts(id);
      setDetails(result);
    };

    fetchDetails();
  }, [id]);

  const { title, category, description, image, price, rating } = details
    ? details
    : "";

  const addItemToBasket = () => {
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
  };

  return (
    <div className="h-screen m-8">
      <div className="flex space-x-4 mb-4 items-center">
        <Link to="/" className="inline-flex text-orange-400">
          <FaArrowLeft />
        </Link>
        <span className="text-gray-300">|</span>
        <span className="font-semibold ">{title}</span>
      </div>
      <div className="bg-white p-12 shadow-xl flex items-center gap-12">
        {/* left */}
        <div className="flex-1">
          <img
            src={image}
            className="mx-auto w-[400px] h-[400px] object-contain"
            alt={title}
          />
        </div>
        {/* right */}
        {details && (
          <div className="flex-1 text-center flex items-center flex-col gap-5">
            <h2 className="font-bold text-2xl">{title}</h2>
            <span className="font-bold text-4xl text-amazonOrange">
              ${price}
            </span>
            <button onClick={addItemToBasket} className="btn uppercase">
              Add to Cart
            </button>
            <p className="text-sm capitalize">{description}</p>
            <span className="w-fit text-blue-700 border border-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500">
              {category}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
