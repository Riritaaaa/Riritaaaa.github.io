import { useEffect, useRef } from "react";
import vocab from "@assets/vocab.png";
import api from "@assets/api.png";
import card from "@assets/card.png";
import flexcss from "@assets/flex.png";
import formant from "@assets/form.png";
import news from "@assets/new.png";
import pokedex from "@assets/pokedex.png";
import pokemon from "@assets/pokemon.png";
import quiz from "@assets/quiz.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "@component/style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import {
  TailwindSkill,
  APISkill,
  TypeScriptSkill,
  CSSSkill,
  HTMLSkill,
  AntSkill,
} from "@component/SpecificSkill";

const Port = () => {
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

  return (
    <div className="bg-[#bc2872] xl:min-h-screen lg:pb-0 w-full z-40 relative lg:px-0 min-h-fit containerport select-none">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="work text-[#000000] leading-none text-center flex flex-row tracking-wider w-fit m-auto lg:mb-6 justify-center border-b-[6px] border-[#000000] px-2 mt-[-1px]">
          W
          <span className="self-center lg:pr-2 sm:pr-1">
            <div className="box cursor-default">
              <div className="activator white"></div>
              <div className="activator black"></div>
              <div className="drop"></div>
              <svg
                className="cats"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 300"
                height={window.innerWidth >= 640 ? "100" : "70"}
                width={window.innerWidth >= 640 ? "100" : "70"}
              >
                <path
                  d="M198.63 43.54c-8.535-4.018 3.727 22.035-12.55 45.9-20.702 30.36-48.977 21.085-41.787 33.538 6.11 10.582 14.963 5.18 22.04 1.094 14.174-8.184 27.137-10.15 28.113 3.987 1.042 15.096-20.733 19.503-38.7 21.456-14.98 1.746-26.072.598-39.257 7.506-7.503 3.93-12.945 8.577-11.272 16.88 1.543 7.663 6.38 9.685 14.245 8.033 14.377-3.02 29.986-17.01 35.77-5.653 5.19 10.192-17.612 11.026-28.038 18.733-13.19 9.75-18.697 22.952-23.197 36.583-1.806 5.473-6.094 20.647-2.37 25.047 11.313 2.326 21.947-8.24 31.515-4.824 9.426 3.366 18.753 8.822 24.982 16.656 6.99 8.79.88 29.34 11.896 31.524 91.172-57.992 104.09-103.495 104.09-139.778 0-46.43-24.75-92.793-75.48-116.68z"
                  fill="#f2f2f2"
                />
                <path
                  d="M101.38 256.46c8.535 4.018-3.726-22.035 12.55-45.9 20.703-30.36 48.978-21.085 41.788-33.538-6.11-10.582-14.963-5.18-22.04-1.094-14.174 8.184-27.138 10.148-28.113-3.987-1.042-15.096 20.732-19.503 38.7-21.456 14.978-1.746 26.072-.598 39.257-7.506 7.502-3.93 12.943-8.578 11.27-16.88-1.543-7.663-6.38-9.685-14.244-8.033-14.378 3.02-29.987 17.01-35.77 5.653-5.19-10.192 17.612-11.026 28.037-18.733 13.19-9.75 18.697-22.952 23.197-36.583 1.807-5.473 6.094-20.647 2.372-25.047-11.314-2.326-21.948 8.24-31.517 4.824-9.425-3.366-18.752-8.822-24.98-16.656-6.992-8.79-.88-29.34-11.897-31.524C38.82 57.99 25.9 103.495 25.9 139.778c0 46.43 24.75 92.793 75.48 116.68z"
                  fill="#1a1a1a"
                />
                <path
                  d="M110.677 57.635s-1.826 3.912 2.206 7.82c4.032 3.91 7.86.79 7.86.79M143.635 85.076s-1.826 3.912 2.206 7.82c4.032 3.91 7.86.79 7.86.79"
                  fill="none"
                  stroke="#ececec"
                  stroke-width="6.774"
                  stroke-linecap="round"
                />
                <path
                  d="M104.733 80.926s3.077 8.615 6.49 10.237c3.416 1.623 10.488-1.248 10.488-1.248l3.996-4.744 5.243-.25-6.742-3.494 1.498 3.745-4.245 5.494s.47 8.58 2.997 10.736c2.53 2.157 8.74 1 8.74 1"
                  fill="none"
                  stroke="#ececec"
                  stroke-width="6.774"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g
                  stroke="#1a1a1a"
                  fill="none"
                  stroke-width="6"
                  stroke-linecap="round"
                >
                  <path
                    d="M189.063 252.215s1.826-3.912-2.206-7.82c-4.032-3.91-7.86-.79-7.86-.79M156.105 224.773s1.826-3.91-2.206-7.82c-4.033-3.91-7.862-.79-7.862-.79"
                    stroke-width="6.77406"
                  />
                  <path
                    d="M195.007 228.923s-3.077-8.614-6.492-10.236c-3.414-1.623-10.486 1.248-10.486 1.248l-3.996 4.744-5.243.25 6.742 3.494-1.498-3.745 4.245-5.494s-.47-8.58-2.997-10.736c-2.53-2.157-8.74-1-8.74-1"
                    stroke-linejoin="round"
                    stroke-width="6.77406"
                  />
                </g>
              </svg>
            </div>
          </span>
          RKS
        </div>
        <div>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={120}
            initialSlide={0}
            loop={true}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            className="lg:pt-[30px]"
          >
            <div className="card-list">
              <SwiperSlide>
                <div className="hero">
                  <img className="hero-profile-img" src={vocab} />

                  <div className="hero-description-bk"></div>
                  <div className="hero-description">Vocabuary List</div>

                  <Link to={"https://github.com/Riritaaaa/Assignment2.git"}>
                    <FontAwesomeIcon
                      className="fonticon rounded-lg p-[8px] py-1 self-center w-[20px] h-[20px] cursor-pointer right-7 z-100 absolute bg-white mt-1"
                      icon={faCode}
                    />
                  </Link>
                  <div className="text-white absolute mx-7 mt-10 pt-3 border-t-[1px] text-sm">
                    <div className="flex flex-row">
                      <TypeScriptSkill />
                      <HTMLSkill />
                      <CSSSkill />
                    </div>

                    <p>
                      React Typescript based to make a checklist and can auto
                      remove vocab.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero">
                  <img className="hero-profile-img" src={news} />
                  <div className="hero-description-bk"></div>
                  <div className="hero-description">ogs Daily News</div>

                  <Link to={"https://github.com/Riritaaaa/workshop.git"}>
                    <FontAwesomeIcon
                      className="fonticon rounded-lg p-[8px] py-1 self-center w-[20px] h-[20px] cursor-pointer right-7 z-100 absolute bg-white mt-1"
                      icon={faCode}
                    />
                  </Link>

                  <div className="text-white absolute mx-7 mt-10 pt-3 border-t-[1px] text-sm">
                    <div className="flex flex-row">
                      <TypeScriptSkill />
                      <HTMLSkill />
                      <CSSSkill />
                    </div>
                    <p> React Router Dom based to help link to pages.</p>
                  </div>
                  <div className="hero-date"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero">
                  <img className="hero-profile-img" src={flexcss} />
                  <div className="hero-description-bk"></div>
                  <div className="hero-description">Layout Flex</div>

                  <Link to={"https://github.com/Riritaaaa/workshop.git"}>
                    <FontAwesomeIcon
                      className="fonticon rounded-lg p-[8px] py-1 self-center w-[20px] h-[20px] cursor-pointer right-7 z-100 absolute bg-white mt-1"
                      icon={faCode}
                    />
                  </Link>

                  <div className="text-white absolute mx-7 mt-10 pt-3 border-t-[1px] text-sm">
                    <div className="flex flex-row">
                      <HTMLSkill />
                      <CSSSkill />
                    </div>
                    <p>
                      Use Module Style and Layout Flex to help organize website
                      elements.
                    </p>
                  </div>
                  <div className="hero-date"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero">
                  <img className="hero-profile-img" src={card} />
                  <div className="hero-description-bk"></div>
                  <div className="hero-description">Digital Name Card</div>

                  <Link to={"https://github.com/Riritaaaa/workshop.git"}>
                    <FontAwesomeIcon
                      className="fonticon rounded-lg p-[8px] py-1 self-center w-[20px] h-[20px] cursor-pointer right-7 z-100 absolute bg-white mt-1"
                      icon={faCode}
                    />
                  </Link>
                  <div className="text-white absolute mx-7 mt-10 pt-3 border-t-[1px] text-sm">
                    <div className="flex flex-row">
                      <TailwindSkill />
                      <HTMLSkill />
                      <CSSSkill />
                    </div>
                    <p>
                      Use tailwindcss and make responsive when the screen is
                      less than 1024px.
                    </p>
                  </div>
                  <div className="hero-date"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero">
                  <img className="hero-profile-img" src={formant} />
                  <div className="hero-description-bk"></div>
                  <div className="hero-description">Register Form</div>

                  <Link to={"https://github.com/Riritaaaa/workshop.git"}>
                    <FontAwesomeIcon
                      className="fonticon rounded-lg p-[8px] py-1 self-center w-[20px] h-[20px] cursor-pointer right-7 z-100 absolute bg-white mt-1"
                      icon={faCode}
                    />
                  </Link>
                  <div className="text-white absolute mx-7 mt-10 pt-3 border-t-[1px] text-sm">
                    <div className="flex flex-row">
                      <TypeScriptSkill />
                      <AntSkill />
                      <HTMLSkill />
                      <CSSSkill />
                    </div>
                    <p>
                      Use Ant Design's component to create a subscription form
                      and steps.
                    </p>
                  </div>
                  <div className="hero-date"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero">
                  <img className="hero-profile-img" src={api} />
                  <div className="hero-description-bk"></div>
                  <div className="hero-description">Disney Api</div>

                  <Link to={"https://github.com/Riritaaaa/workshop.git"}>
                    <FontAwesomeIcon
                      className="fonticon rounded-lg p-[8px] py-1 self-center w-[20px] h-[20px] cursor-pointer right-7 z-100 absolute bg-white mt-1"
                      icon={faCode}
                    />
                  </Link>
                  <div className="text-white absolute mx-7 mt-10 pt-3 border-t-[1px] text-sm">
                    <div className="flex flex-row">
                      <TypeScriptSkill />
                      <AntSkill />
                      <APISkill />
                      <HTMLSkill />
                      <CSSSkill />
                    </div>
                    <p>
                      Use Axios to call disney api and can search for
                      characters.
                    </p>
                  </div>
                  <div className="hero-date"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero">
                  <img className="hero-profile-img" src={pokedex} />
                  <div className="hero-description-bk"></div>
                  <div className="hero-description">Pokémon Dex</div>

                  <Link to={"https://github.com/Riritaaaa/workshop.git"}>
                    <FontAwesomeIcon
                      className="fonticon rounded-lg p-[8px] py-1 self-center w-[20px] h-[20px] cursor-pointer right-7 z-100 absolute bg-white mt-1"
                      icon={faCode}
                    />
                  </Link>
                  <div className="text-white absolute mx-7 mt-10 pt-3 border-t-[1px] text-sm">
                    <div className="flex flex-row">
                      <TypeScriptSkill />
                      <AntSkill />
                      <APISkill />
                      <HTMLSkill />
                      <CSSSkill />
                    </div>
                    <p>
                      Redux RTK Query based to run api and perform pagination.
                    </p>
                  </div>
                  <div className="hero-date"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero">
                  <img className="hero-profile-img" src={pokemon} />
                  <div className="hero-description-bk"></div>
                  <div className="hero-description">Pokémon Dex v.2</div>

                  <Link to={"https://github.com/Riritaaaa/workshop.git"}>
                    <FontAwesomeIcon
                      className="fonticon rounded-lg p-[8px] py-1 self-center w-[20px] h-[20px] cursor-pointer right-7 z-100 absolute bg-white mt-1"
                      icon={faCode}
                    />
                  </Link>
                  <div className="text-white absolute mx-7 mt-10 pt-3 border-t-[1px] text-sm">
                    <div className="flex flex-row">
                      <TypeScriptSkill />
                      <AntSkill />
                      <APISkill />
                      <HTMLSkill />
                      <CSSSkill />
                    </div>
                    <p>
                      A collection and description of Pokémon and can filter
                      types of Pokémon
                    </p>
                  </div>
                  <div className="hero-date"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero">
                  <img className="hero-profile-img" src={quiz} />
                  <div className="hero-description-bk"></div>
                  <div className="hero-description">Quiz</div>

                  <Link to={"https://github.com/Riritaaaa/workshop.git"}>
                    <FontAwesomeIcon
                      className="fonticon rounded-lg p-[8px] py-1 self-center w-[20px] h-[20px] cursor-pointer right-7 z-100 absolute bg-white mt-1"
                      icon={faCode}
                    />
                  </Link>
                  <div className="text-white absolute mx-7 mt-10 pt-3 border-t-[1px] text-sm">
                    <div className="flex flex-row">
                      <TypeScriptSkill />
                      <TailwindSkill />
                      <HTMLSkill />
                      <CSSSkill />
                    </div>
                    <p>
                      Redux based to collect theme dark/light mode and collect
                      quiz scores.
                    </p>
                  </div>
                  <div className="hero-date"></div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>

          <div className=" flex flex-row w-fit m-auto pb-[40px]">
            <FontAwesomeIcon
              className="prev z-50 bg-[black] rounded-full p-[10px] self-center w-[20px] h-[20px] cursor-pointer mr-[170px] text-[#ffa7d3]"
              icon={faArrowLeft}
            />
            <FontAwesomeIcon
              className="next z-50 bg-[black] rounded-full p-[10px] self-center w-[20px] h-[20px] cursor-pointer text-[#ffa7d3]"
              icon={faArrowRight}
            />
            <div className="swiper-pagination  max-w-fit m-auto"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Port;
