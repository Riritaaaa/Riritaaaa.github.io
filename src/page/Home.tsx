import "@component/style.css";
import Spline from "@splinetool/react-spline";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 10000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -3;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 3;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

const Home = () => {
  return (
    <div className="w-full min-h-screen relative bg-[#bc2872] ">
      <div className="h-screen">
        <ParallaxText baseVelocity={-3}>Welcome to my portfolio</ParallaxText>
        <ParallaxText baseVelocity={3}>Welcome to my portfolio</ParallaxText>
        <ParallaxText baseVelocity={-3}>Welcome to my portfolio</ParallaxText>
        <ParallaxText baseVelocity={3}>Welcome to my portfolio</ParallaxText>
        <ParallaxText baseVelocity={-3}>Welcome to my portfolio</ParallaxText>
        <ParallaxText baseVelocity={3}>Welcome to my portfolio</ParallaxText>
        <ParallaxText baseVelocity={-3}>Welcome to my portfolio</ParallaxText>
      </div>

    <Spline
        scene="https://prod.spline.design/QM1RbVrTepUBtrwM/scene.splinecode"
        style={{
          height: "100%",
          position: "absolute",
          left:"5%",
          top:0,
          width:"90%",
        }}
      /> 
    </div>
  );
};

export default Home;