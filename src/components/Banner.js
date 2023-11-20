import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20 bottom-0" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
             <div>
          <img loading="lazy" src="https://m.media-amazon.com/images/G/01/FireTV/Inline/5_BackgroundImageNotApproved._CB666803270_._TTW_.jpg" />
        </div>
             <div>
          <img loading="lazy" src="https://www.thesun.co.uk/wp-content/uploads/2022/09/PR_AMZ_PEAS_22_STATIC_3000x1464_UK.jpg" />
        </div>
        <div>
          <img loading="lazy" src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/10/2536848-T1-CLONE-Market-Update-The-Best-Beauty-Health-and-Wellness-Deals-to-Shop-on-Amazon-Prime-Day-2022-1296x728-Header.jpg" />
        </div>
        <div>
          <img loading="lazy" src="https://uploads-ssl.webflow.com/5fd48c67bfe96103e696a791/62e9213361892305a9c37d7e_YfzFEoNMrINjO3sUjPlEJP6-3oiQxO0x7AU19DdE8euIZGAuYVKfsEWBosU1daWoVYjdBgqJNBvubz5wWH98leo0Cr4-zds2skWwyLslla8LRx9DMAQdJvGqSPeZ5THBB-6ASYoHqeazCBPwhy-k1w0.jpeg" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" />
        </div>
      </Carousel>
      <div style={{ height: "50%" }}></div> {/* Add this line */}

    </div>
  );
}

export default Banner;
