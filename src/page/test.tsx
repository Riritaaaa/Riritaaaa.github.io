import { useEffect, useState } from "react";
import cat from "@assets/40_20240520220812.png";

const Test = () => {
  const [imagesCount, setImagesCount] = useState(20);

  useEffect(() => {
    const updateImagesCount = () => {
      const screenWidth = window.innerWidth;
      const imgWidth = 60;
      const count = Math.ceil(screenWidth / imgWidth) * 2;
      setImagesCount(count);
    };

    updateImagesCount();
    window.addEventListener("resize", updateImagesCount);

    return () => {
      window.removeEventListener("resize", updateImagesCount);
    };
  }, []);

  return (
    <div className="containersection relative z-50 select-none">
      <div className="divscroll">
        <div className="scroll">
          <div className="flex flex-row">
            {Array.from({ length: imagesCount }).map((_, index) => (
              <>
                <img
                  key={index}
                  className="self-center imgcat"
                  src={cat}
                  alt="cat"
                />

                <div className="self-center text-[#bc2872] text-[18px]">✿</div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
