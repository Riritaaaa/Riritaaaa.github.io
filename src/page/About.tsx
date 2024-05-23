import { useState, useEffect, useRef } from "react";
import "@component/style.css";
import person from "@assets/person.png";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, scale: 1 });
        } else {
          controls.start({ opacity: 0, scale: 0.5 });
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const translateY = -scrollY * 0.6;

  return (
    <div className="w-full min-h-fit xl:min-h-screen relative bg-black containerabout">
      <motion.div
        className="text-white w-full lg:mt-12 mt-8"
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="cont">
          <div className="hi text-center font-semibold">
            Hi, my name is
          </div>
          <div className="flex xl:flex-row flex-col-reverse justify-evenly 2xl:mx-16 md:mx-16 mx-5">
            <img
              className="person self-center mt-4"
              src={person}
            />
            <div className="leftabout">
              <div className="name font-semibold mt-2 2xl:ml-12">
                Rita Chimnoi
              </div>
              <div className="des">
                I am 21 years old and currently a third-year student in the
                Computer Science. I have a particular interest in developing web
                applications and mobile applications. I am a quick learner and
                always ready to embrace new knowledge, experiences and I am
                dedicated and constantly strive to improve myself.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col leading-none text-[#efb358] about w-fit lg:pl-[60px] pl-[20px]">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className={`title ${
              index % 2 === 0 ? "" : "bg-[#efb358] text-black"
            }`}
            style={{
              transform: `translateY(${translateY}px)`,
              paddingTop: "30px",
              border: "2px solid #efb358",
            }}
          >
            ABOUT.
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
