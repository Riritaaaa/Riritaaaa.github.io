import { useEffect, useRef } from "react";
import "@component/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import cat from "@assets/38_20240516193927.png";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";

export default function Contact() {
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

    window.onload = () => {
      const form = document.querySelector("form");
      if (form) {
        form.reset();
      }
    };

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

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
        document.execCommand("copy");
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

  return (
    <div className="z-40 relative w-full xl:min-h-screen min-h-fit flex flex-row justify-between bg-black containercontact ">
      <div className="bg-[#efb358] stripe-1 "></div>
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
        <div className="contactt text-[#fafafa] flex flex-col items-center">
          <div className="flex flex-row namecontact">
            <span className="text-black">&nbsp;C</span>
            <img className="cat self-center mr-1" src={cat} />
            <span className="text-black">N</span>
            <span className="half-black-white">T</span>
            ACT
          </div>
          <div className="contact-container">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="contact-left"
            >
              <input type="hidden" name="redirect" value="#"></input>
              <input
                type="hidden"
                name="access_key"
                value="9b485762-0e2b-4f15-bf7f-03738b0e0edc"
              />
              <div className="input-container">
                <FontAwesomeIcon
                  className="input-icon left-[21px]"
                  icon={faUser}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="contact-inputs"
                  required
                />
              </div>
              <div className="input-container">
                <FontAwesomeIcon className="input-icon" icon={faEnvelope} />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="contact-inputs"
                  required
                />
              </div>
              <div className="input-container">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="contact-inputs"
                  required
                />
              </div>
              <button type="submit">
                Submit
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </form>
            <div className="contact-right">
              <div className="grid gap-20 gap-y-12 lg:mt-[45px] mt-[55px]">
                <a
                  className="w-fit m-auto acontact "
                  href="https://github.com/Riritaaaa"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="contactbox xl:px-[50px] md:py-[12px] md:px-[75px] px-[25px] py-[8px]">
                      <FontAwesomeIcon className="icon" icon={faGithub} />
                      <div className="md:pt-1">
                        github.com/Riritaaaa
                      </div>
                    </div>
                  </motion.div>
                </a>

                <a
                  className="acontact w-fit m-auto"
                  href="mailto:rita_ch@kkumail.com"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="contactbox xl:px-[47px] md:py-[12px] md:px-[72px] py-[8px] px-[22px]">
                      <FontAwesomeIcon className="icon" icon={faEnvelope} />
                      <div className="md:pt-1">
                        rita_ch@kkumail.com
                      </div>
                    </div>
                  </motion.div>
                </a>
                <a
                  className="acontact w-fit m-auto"
                  href="https://www.facebook.com/profile.php?id=100009352617261"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="contactbox xl:px-[50px] md:py-[12px] md:px-[75px] py-[8px] px-[25px]">
                      <FontAwesomeIcon className="icon" icon={faFacebook} />
                      <div className="md:pt-1">
                        facebook.com/Rita Rt
                      </div>
                    </div>
                  </motion.div>
                </a>
                <a
                  className="acontact w-fit m-auto cursor-pointer"
                  onClick={() => copyToClipboard("095-138-3141")}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="contactbox xl:px-[75px] md:py-[13px] md:px-[100px] py-[9px] px-[40px]">
                      <FontAwesomeIcon className="icon2" icon={faPhone} />
                      <div className="md:pt-1">
                        (+66) 95-138-3141
                      </div>
                    </div>
                  </motion.div>
                </a>
                <div className="copy-message-container font-normal"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="bg-[#efb358] stripe-1"></div>
    </div>
  );
}
