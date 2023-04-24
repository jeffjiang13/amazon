import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

import { ShoppingCart, MenuIcon } from "../../../icons";
import { selectItems } from "../../slices/basketSlice";
import { allItems } from "../../constants";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import HeaderBottom from "./HeaderBottom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

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
    <div className="sticky top-0 z-50">
      <header>
        <div className="flex items-center bg-amazon_blue p-1 flex-grow">
          <div
            onClick={() => router.push("/")}
            className="mt-2 flex items-center flex-grow sm:flex-grow-0"
          >
            <Image
              width={220}
              height={50}
              src="/amazon-png-logo-vector-1.png"
              alt="amazon/logo"
              className="cursor-pointer p-4 hidden sm:inline-block" // hide the logo on mobile
            />
            <Image
              width={320}
              height={50}
              src="/amazon-png-logo-vector-1.png"
              alt="amazon/logo"
              className="cursor-pointer p-4 sm:hidden" // show the smaller logo on mobile
            />
          </div>
          <div className="hidden md:inline-flex headerHover text-white">
            <LocationOnOutlinedIcon />
            <p className="flex flex-col text-xs text-lightText font-light">
              Hello{" "}
              <span className="text-sm font-semibold -mt-1 text-whiteText w-max">
                Select your address
              </span>
            </p>
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
      </header>

      <HeaderBottom />
    </div>
  );
};

export default Header;
