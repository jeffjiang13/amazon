import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

import { ShoppingCart, MenuIcon } from "../../icons";
import { selectItems } from "../slices/basketSlice";
import { allItems } from "../constants";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const ref = useRef();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        showAll && setShowAll(false);
      }
    });
  }, [ref, showAll]);
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow">
        <div
          onClick={() => router.push("/")}
          className="mt-2 flex items-center flex-grow sm:flex-grow-0"
        >
          <Image
            width={150}
            height={40}
            src="/amazon-png-logo-vector-1.png"
            alt="amazon/logo"
            className="cursor-pointer p-4 hidden sm:inline-block" // hide the logo on mobile
          />
          <Image
            width={290}
            height={50}
            src="/amazon-png-logo-vector-1.png"
            alt="amazon/logo"
            className="cursor-pointer p-4 sm:hidden" // show the smaller logo on mobile
          />
        </div>
        <div className="flex items-center w-full">
          <form
            onSubmit={handleSearch}
            className="flex items-center rounded-md h-10 flex-grow bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md"
          >
            <div className="hidden lg:inline-flex h-10 relative">
              <span
                onClick={() => setShowAll(!showAll)}
                className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
              >
                All{" "}
                <span>
                  <ArrowDropDownOutlinedIcon />
                </span>
              </span>
              {showAll && (
                <div>
                  <ul
                    ref={ref}
                    className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50"
                  >
                    {allItems.map((item) => (
                      <li
                        className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                        key={item._id}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <input
              className="p-2 h-full w-full lg:w-auto flex-grow flex-shrink focus:outline-none px-4"
              type="text"
              placeholder="Search Amazon"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="w-10 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md"
            >
              <SearchIcon />
            </button>
          </form>
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            onClick={() => (session ? signOut() : signIn())}
            className="link"
          >
            <p>{session ? `Hello ${session?.user?.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div onClick={() => router.push("/orders")} className="link">
            <p>Return</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="link relative flex items-center"
          >
            <span className="absolute text-xs top-0 left-6 w-4 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
              {items.length}
            </span>
            <ShoppingCart className="h-10 text-white" />
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
              Cart
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" /> All
        </p>
        <p className="link">{`Today's Deals`}</p>
        <p className="link">Prime Video</p>
        <p className="link">Customer Service</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Foods & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
