import React, { useState } from "react";
import "./Certificates.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import { Navigation} from 'swiper';

import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const certificates = [
  {
    name: "Certified Application Developer",
    image: "./assets/cad.jpg",
    from: "- By ServiceNow",
    
  },
  {
    name: "Certified System Administrator",
    image: "./assets/CSA.jpg",
    from: "- By ServiceNow",
  
  },
  {
    name: "Ethical Hacking",
    image: "./assets/ethicalhacking.jpg",
    from: "- By NPTEL",
  
  },
  
  {
    name: "NCC",
    image: "./assets/ncc.jpg",
    from: "- NCC",
    
  },
{
    name: "Data Analytics Basics for Everyone",
    image: "./assets/DAIBM.jpg",
    from: "- By IBM",
   
  },

  {
    name: "Python Interview Questions",
    image: "./assets/pythoncodechef.jpg",
    from: "- By CodeChef",
   
  },
  {
    name: "Python(Basics)",
    image: "./assets/pythonhackerrank.jpg",
    from: "- By Hackerrank",
   
  },
  {
    name: "AWS Academy Graduate",
    image: "./assets/aws.jpg",
    from: "- By AWS Academy",
   
  },
  {
    name: "Object Oriented Programming in Java",
    image: "./assets/oopscoursera.jpg",
    from: "- By AWS",
  
  },
  {
    name: "Python Essentials",
    image: "./assets/pythoncisco.jpg",
    from: "- By CISCO Network Academy",

  },
  {
    name: "SQL Interview Questions",
    image: "./assets/SQL.jpg",
    from: "- By CodeChef",
    
  },
  {
    name: "Flipkart Grid 6.0",
    image: "./assets/unstop.jpg",
    from: "- By Unstop",

  },
];

const Certificates = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="certificates-section" >
      <h2 className="certificates-title" id="certificates">My Certificates</h2>

      <div className="certificates-container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={setSwiperRef}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
      
          className="certificates-swiper"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <div className="certificate-scene">
                {/* Inside content */}
                <div className="certificate-inside">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="certificate-image"
                  />
                  <p className="certificate-name">{cert.from}</p>
                </div>

                {/* Door */}
                <div className="certificate-door">
                  
                  <p className="door-label">{cert.name}</p>
                  {/* <div className="power-icon"></div> */}
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom arrows */}
        <div className="certificates-arrows">
          <FaChevronLeft
            className="arrow-icon"
            onClick={() => swiperRef?.slidePrev()}
          />
          <span className="cert-counter">
            {currentIndex + 1} / {certificates.length}
          </span>
          <FaChevronRight
            className="arrow-icon"
            onClick={() => swiperRef?.slideNext()}
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
