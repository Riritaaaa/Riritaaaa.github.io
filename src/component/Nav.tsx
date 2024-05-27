import "./style.css";
import React, { useEffect, useRef, useState } from "react";
import Home from "@page/Home";
import Port from "@page/Port";
import About from "@page/About";
import Contact from "@page/Contact";
import { motion } from "framer-motion";
import Test from "@page/test";
import Wave from "@component/wave";
import Wave2 from "@component/wave2";
import Lenis from "lenis";

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1025);
  const [isHome, setIsHome] = useState(true);

  const lenis = useRef<Lenis>();
  useEffect(() => {

      lenis.current = new Lenis();

      function raf(time: DOMHighResTimeStamp) {
        lenis.current&&lenis.current.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1025);
      if (window.innerWidth >= 1025) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("nav a");

      sections.forEach((sec: HTMLElement) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
          navLinks.forEach((link: Element) => {
            link.classList.remove("active");
            const navId = id ? id : "";
            document
              .querySelector(`nav a[id*='${navId}']`)
              ?.classList.add("active");
          });

          document.body.className = `color-${sec.dataset.color}`;
          setIsHome(id === "home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const menuItems = document.querySelectorAll(".navbar.menu-items a");

    const handleMenuClick = () => {
      if (window.innerWidth <= 1025) {
        setMenuOpen(false);
      }
    };

    menuItems.forEach((item) => {
      item.addEventListener("click", handleMenuClick);
    });

    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener("click", handleMenuClick);
      });
    };
  }, []);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  return (
    <div >
      <nav className={isHome ? "transparent-nav" : ""}>
        <div className="navbarres select-none">
          {!isDesktop && (
            <>
              <input
                className="checkbox hidden mt-1 mr-5"
                type="checkbox"
                id="active"
                checked={menuOpen}
                onChange={() => setMenuOpen(!menuOpen)}
              />
              <label
                className="hamburger-lines hidden mt-1 mr-5"
                htmlFor="active"
              >
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </label>
            </>
          )}

          <div>
            <a onClick={() => {lenis.current?.scrollTo(`#home`)}} className="logo uppercase tracking-wider">
              Portfolio
            </a>
          </div>

          <motion.div
            className={`navbar menu-items wrapper ${
              !isDesktop && isHome ? "transparent-menu" : ""
            }`}
          >
            {["Home", "About", "Portfolio", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                onClick={() => {lenis.current?.scrollTo(`#${item.toLowerCase()}`)}}
                id={`#${item.toLowerCase()}`}
                custom={index}
                animate={isDesktop || menuOpen ? "visible" : "hidden"}
                variants={menuVariants}
                className={index === 0 ? "active" : ""}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </nav>

       <section id="home">
        <Home />
      </section>
      <Test />
      <section id="about">
        <About />
      </section>
       <Wave />
      <section id="portfolio">
        <Port />
      </section>
      <Wave2 />
      <section id="contact">
        <Contact />
      </section> 
    </div>
  );
};

export default Nav;
