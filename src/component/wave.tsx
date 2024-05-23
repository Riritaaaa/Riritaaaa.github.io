const Wave = () => {
  return (
    <div
      className="wave"
      style={{
        backgroundColor: "transparent",
        position: "relative",
        height: "75px",
      }}
    >
      <svg
        id="wave"
        style={{
          transform: "rotate(0deg)",
          transition: "0.3s",
          position: "absolute",
          bottom: 0,
        }}
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(0, 0, 0, 1)" offset="0%"></stop>
            <stop stopColor="rgba(0, 0, 0, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="#bc2872"
          d="M0,0L20,11.7C40,23,80,47,120,50C160,53,200,37,240,31.7C280,27,320,33,360,30C400,27,440,13,480,20C520,27,560,53,600,63.3C640,73,680,67,720,55C760,43,800,27,840,20C880,13,920,17,960,30C1000,43,1040,67,1080,68.3C1120,70,1160,50,1200,46.7C1240,43,1280,57,1320,56.7C1360,57,1400,43,1440,33.3C1480,23,1520,17,1560,13.3C1600,10,1640,10,1680,13.3C1720,17,1760,23,1800,30C1840,37,1880,43,1920,51.7C1960,60,2000,70,2040,73.3C2080,77,2120,73,2160,71.7C2200,70,2240,70,2280,60C2320,50,2360,30,2400,31.7C2440,33,2480,57,2520,68.3C2560,80,2600,80,2640,81.7C2680,83,2720,87,2760,83.3C2800,80,2840,70,2860,65L2880,60L2880,100L2860,100C2840,100,2800,100,2760,100C2720,100,2680,100,2640,100C2600,100,2560,100,2520,100C2480,100,2440,100,2400,100C2360,100,2320,100,2280,100C2240,100,2200,100,2160,100C2120,100,2080,100,2040,100C2000,100,1960,100,1920,100C1880,100,1840,100,1800,100C1760,100,1720,100,1680,100C1640,100,1600,100,1560,100C1520,100,1480,100,1440,100C1400,100,1360,100,1320,100C1280,100,1240,100,1200,100C1160,100,1120,100,1080,100C1040,100,1000,100,960,100C920,100,880,100,840,100C800,100,760,100,720,100C680,100,640,100,600,100C560,100,520,100,480,100C440,100,400,100,360,100C320,100,280,100,240,100C200,100,160,100,120,100C80,100,40,100,20,100L0,100Z"
        ></path>
      </svg>
    </div>
  );
};

export default Wave;

{
  /*   <svg
        id="wave"
        style={{
          transform: "rotate(180deg)",
          transition: "0.3s",
          position: "absolute",
          bottom: 0,
        }}
        viewBox="0 0 1440 140"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(0, 0, 0, 1)" offset="0%"></stop>
            <stop stop-color="rgba(0, 0, 0, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,70L20,67.7C40,65,80,61,120,53.7C160,47,200,37,240,42C280,47,320,65,360,60.7C400,56,440,28,480,25.7C520,23,560,47,600,46.7C640,47,680,23,720,14C760,5,800,9,840,23.3C880,37,920,61,960,58.3C1000,56,1040,28,1080,21C1120,14,1160,28,1200,37.3C1240,47,1280,51,1320,49C1360,47,1400,37,1440,32.7C1480,28,1520,28,1560,35C1600,42,1640,56,1680,58.3C1720,61,1760,51,1800,58.3C1840,65,1880,89,1920,102.7C1960,117,2000,121,2040,107.3C2080,93,2120,61,2160,49C2200,37,2240,47,2280,49C2320,51,2360,47,2400,39.7C2440,33,2480,23,2520,32.7C2560,42,2600,70,2640,70C2680,70,2720,42,2760,32.7C2800,23,2840,33,2860,37.3L2880,42L2880,140L2860,140C2840,140,2800,140,2760,140C2720,140,2680,140,2640,140C2600,140,2560,140,2520,140C2480,140,2440,140,2400,140C2360,140,2320,140,2280,140C2240,140,2200,140,2160,140C2120,140,2080,140,2040,140C2000,140,1960,140,1920,140C1880,140,1840,140,1800,140C1760,140,1720,140,1680,140C1640,140,1600,140,1560,140C1520,140,1480,140,1440,140C1400,140,1360,140,1320,140C1280,140,1240,140,1200,140C1160,140,1120,140,1080,140C1040,140,1000,140,960,140C920,140,880,140,840,140C800,140,760,140,720,140C680,140,640,140,600,140C560,140,520,140,480,140C440,140,400,140,360,140C320,140,280,140,240,140C200,140,160,140,120,140C80,140,40,140,20,140L0,140Z"
        ></path>
      </svg> */
}
