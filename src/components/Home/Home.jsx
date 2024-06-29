import React, { useEffect, useRef, useState } from "react";
import android_play from "../../assets/HomeImg/android_play.webp";
import ios_play from "../../assets/HomeImg/ios_play.webp";
import app from "../../assets/HomeImg/app.png";
import { Link } from "react-router-dom";
import NewsData from "../../AllData/NewsData";
import NewsItem from "../../ReuseComp/NewsItem";
import PaternsData from "../../AllData/PatnersData";
import bg_video from "../../assets/HomeImg/home_bg_video.mp4";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegCirclePause } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";
// import required modules
import { Pagination } from "swiper/modules";
import PatnerItem from "../../ReuseComp/PatnerItem";

const Home = () => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlay(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setPlay(false);
    }
  };
  return (
    <div>
      {/* ========= herosection ========= */}
      <div className="flex flex-col-reverse xl:flex-row bg-orange-500 min-h-screen w-full relative">
        {/* Video as background */}
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover"
          loop
        >
          <source src={bg_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="xl:w-2/3 flex flex-col justify-center items-center xl:pl-20 py-8 xl:py-0 relative z-10">
          <div>
            {play === true ? (
              <button
                onClick={handlePause}
                className="relative bg-white text-3xl rounded-full"
              >
                <FaRegCirclePause />
              </button>
            ) : (
              <button
                onClick={handlePlay}
                className="relative bg-white text-3xl rounded-full"
              >
                <FaRegCirclePlay />
              </button>
            )}
          </div>
          <div className="text-white text-4xl lg:text-6xl xl:text-8xl font-semibold text-center xl:mb-12">
            INDIA KA BATTLEGROUNDS
          </div>
          <div className="flex justify-center items-center gap-2 xl:space-x-6 mb-8">
            <a
              href="https://play.google.com/store/apps/details?id=com.pubg.imobile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={android_play} alt="Android Play" className="w-40" />
            </a>
            <a
              href="https://apps.apple.com/app/id1526436837?mt=8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ios_play} alt="iOS Play" className="w-40" />
            </a>
          </div>
          <div>
            <a
              href="https://www.unipin.com/in/bgmi?utm_source=Referral&utm_medium=Website&utm_campaign=BGMI-Website"
              className="bg-[#530c0a] text-white font-semibold text-xl lg:text-2xl px-8 lg:px-16 py-2 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              BUY UC AT UniPin
            </a>
          </div>
        </div>
      </div>

      {/* ========= hero second ========= */}
      <div className="flex flex-col items-center justify-center gap-5 py-5 bg-[#e9e9e9]">
        <div className="text-2xl sm:text-4xl lg:text-6xl font-bold text-[#333333]">
          <p>INDIA KI HEARTBEAT</p>
        </div>
        <div>
          <iframe
            className="w-[350px] h-[250px]  md:w-[800px] md:h-[400px] lg:w-[1000px] lg:h-[500px] xl:w-[1200px] xl:h-[600px] sm:px-10 mx:px-0"
            src="https://www.youtube.com/embed/5NfkxxxndRc?si=deTm0DsGEeSeiA_3"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/* ========= news section ========= */}
      <div className="flex flex-col items-center justify-center gap-5 py-10 md:py-20 bg-white">
        <div className="text-2xl sm:text-4xl lg:text-6xl font-bold text-[#333333]">
          <p>News</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 w-full px-10 md:px-20">
          {NewsData.slice(0, 3).map((item, index) => (
            <NewsItem
              key={index}
              image={item.image}
              head={item.head}
              desc={item.desc}
              date={item.date}
            />
          ))}
        </div>
        <div>
          <button className="text-xl font-semibold px-10 py-2 border border-gray-400 hover:border-black ">
            View More
          </button>
        </div>
      </div>

      {/* ========= patners section ========= */}
      <div className="bg-[#1f1f1f] py-20 flex flex-col gap-5">
        <div className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white text-center">
          <p>Patners</p>
        </div>

        <div>
          <Swiper
            slidesPerView={1} // Default slides per view
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            loop={true} // Enable loop
            className="mySwiper"
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {PaternsData.map((item) => (
              <SwiperSlide key={item.id} className="mb-20 sm:mx-10">
                <PatnerItem
                  image={item.image}
                  name={item.name}
                  date={item.date}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* ========= Download now ========= */}
      <div className="bg-orange-500 py-20 flex flex-col items-center justify-center gap-5">
        <div>
          <img src={app} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center text-2xl sm:text-3xl font-semibold">
          <p>INDIA KA BATTLEGROUNDS IS HERE</p>
          <p>DOWNLOAD NOW!</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 ">
          <Link
            to="https://play.google.com/store/apps/details?id=com.pubg.imobile"
            target="_blank"
          >
            <img src={android_play} alt="" className="w-52" />
          </Link>
          <Link
            to="https://apps.apple.com/app/id1526436837?mt=8"
            target="_blank"
          >
            <img src={ios_play} alt="" className="w-52" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
