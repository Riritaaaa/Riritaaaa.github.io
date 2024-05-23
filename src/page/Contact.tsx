import { useEffect, useRef } from "react";
import "@component/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import cat from "@assets/38_20240516193927.png";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Contact() {
  const controls = useAnimation();
  const contactRef = useRef<HTMLDivElement | null>(null);

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          const container = document.querySelector(".copy-message-container");
          if (container) {
            const message = document.createElement("div");
            message.textContent = "Copied!";
            message.classList.add("copy-message");
            container.appendChild(message);
  
            setTimeout(() => {
              message.remove();
            }, 3000);
          }
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        const container = document.querySelector(".copy-message-container");
        if (container) {
          const message = document.createElement("div");
          message.textContent = "Copied!";
          message.classList.add("copy-message");
          container.appendChild(message);
  
          setTimeout(() => {
            message.remove();
          }, 3000);
        }
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
      document.body.removeChild(textArea);
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (contactRef.current) {
        const top = contactRef.current.getBoundingClientRect().top;
        const height = window.innerHeight;
        if (top < height) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div
      className="z-40 relative w-full xl:min-h-screen min-h-fit flex flex-row justify-between bg-black  containercontact"
      ref={contactRef}
    >
      <div className="bg-[#efb358] stripe-1 "></div>

      <div className="contactt text-[#fafafa] flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="flex flex-row namecontact">
            <span className="text-black">&nbsp;C</span>
            <img className="cat self-center mr-1" src={cat} />
            <span className="text-black">N</span>
            <span className="half-black-white">T</span>
            ACT&nbsp;
          </div>
        </motion.div>
        <motion.ul
          className="grid xl:grid-cols-2 gap-20 gap-y-14 lg:mt-[80px] mt-[55px]"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          <a
            className="w-fit m-auto acontact"
            href="https://github.com/Riritaaaa"
          >
            <motion.li
              className="item"
              variants={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className="contactbox md:px-[40px] md:py-[15px] px-[25px] py-[8px]">
                <FontAwesomeIcon className="icon" icon={faGithub} />
                <div className="md:pt-1">github.com/Riritaaaa</div>
              </div>
            </motion.li>
          </a>
          <a
            className="acontact w-fit m-auto"
            href="mailto:rita_ch@kkumail.com"
          >
            <motion.li
              className="item"
              variants={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="contactbox md:px-[37px] md:py-[15px] py-[8px] px-[22px]">
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                <div className="md:pt-1">rita_ch@kkumail.com</div>
              </div>
            </motion.li>
          </a>
          <a
            className="acontact w-fit m-auto"
            href="https://www.facebook.com/profile.php?id=100009352617261"
          >
            <motion.li
              className="item"
              variants={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="contactbox md:px-[40px] md:py-[15px] py-[8px] px-[25px]">
                <FontAwesomeIcon className="icon" icon={faFacebook} />
                <div className="md:pt-1">facebook.com/Rita Rt</div>
              </div>
            </motion.li>
          </a>
          <a
            className="acontact w-fit m-auto cursor-pointer"
            onClick={() => copyToClipboard("095-138-3141")}
          >
            <motion.li
              className="item"
              variants={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="contactbox md:px-[65px] md:py-[16px] py-[9px] px-[40px]">
                <FontAwesomeIcon className="icon2" icon={faPhone} />
                <div className="md:pt-1">(+66) 95-138-3141</div>
              </div>
            </motion.li>
          </a>
        </motion.ul>
        <div className="copy-message-container font-normal"></div>
      </div>

      <div className="bg-[#efb358] stripe-1"></div>
    </div>
  );
}
