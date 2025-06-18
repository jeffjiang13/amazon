import React, { useEffect, useState } from "react";
import { middleList } from "../../constants";
import FooterMiddleList from "./FooterMiddleList";

const FooterMiddle = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>


      <div className="w-full bg-amazon_light text-white">
        {/* Add the Back to Top button with conditional rendering */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-full bg-navy-400 py-1 font-semibold cursor-pointer hover:bg-gray-600 active:bg-gray-600"
          >
            Back to top
          </button>
        )}
        {/* ======================= Middle Top Start here ========================== */}
        <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center items-start px-6 gap-10 xl:gap-4">
            {middleList.map((item) => (
              <FooterMiddleList
                key={item._id}
                title={item.title}
                listItem={item.listItem}
              />
            ))}
          </div>
        </div>
      </div>
        {/* ======================= Middle Top End here ============================ */}
        {/* ======================= Middle Bottom Start here ======================= */}
        <div className="w-full flex gap-6 items-center justify-center py-6">
          <div>
            <img className="w-20 pt-3" src="/logo1.png" alt="logo" />
          </div>
          <div className="flex gap-2">
            <p className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
              English
            </p>
            <div className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
              <img className="w-6" src="/flag.png" alt="" />
              <p>United States</p>
            </div>
          </div>
        </div>
        {/* ======================= Middle Bottom End here ========================= */}
        {/* ============ Top Start here ================== */}
        {/* ============ Top End here ==================== */}
        {/* ============ Bottom Start here =============== */}
        {/* ============ Bottom End here ================= */}
      </div>
    </>
  );
};

export default FooterMiddle;
