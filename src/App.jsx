import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

function App() {
  return (
    <div className="bg-yellow-100 mx-auto  max-w-[425px] text-gray-800">
      <Intro />
      <RingCeremony />
      <Haldi />
      <Marriage />
      <Last />
    </div>
  );
}

export default App;

const Intro = () => {
  const sloka = "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः";
  const [displayedSloka, setDisplayedSloka] = useState("");
  useEffect(() => {
    gsap.from(".intro-title", { duration: 1, y: -50, opacity: 0 });
    let index = 0;
    const interval = setInterval(() => {
      if (index < sloka.length) {
        setDisplayedSloka((prev) => prev + sloka[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-center min-h-screen bg-[#ffe4cb]">
      <div>
        {/* <img src="/toran.gif" alt="torn" className='border border-black h-[10%] object-cover'/> */}
        <img src="/bg1n.gif" alt="torn" className="min-h-screen object-cover" />
      </div>

      <div className="absolute top-[3%] flex items-center justify-center w-full">
        {/* <img
          src="/bappa.gif"
          alt="torn"
          className="self-center w-[35%] object-contain z-[5]"
        /> */}
        <p className="text-red-900 font-bold">ॐ गं गणपतये नमः</p>
      </div>
      <div className="absolute top-[19%] flex items-center justify-center w-full">
        <img
          src="/bappa.gif"
          alt="torn"
          className="self-center w-[35%] object-contain z-[5]"
        />
      </div>
      <div className="absolute top-[7%] flex items-center justify-center w-full">
        <img
          src="/chakra.gif"
          alt="torn"
          className="self-center w-[75%] object-contain z-[4]"
        />
      </div>
      <div className="absolute top-[50%] flex items-center justify-center w-full">
        <img
          src="/hands.png"
          alt="torn"
          className="self-center w-[12%] object-contain z-[4]"
        />
      </div>
      <div className="absolute top-[34%] flex items-center w-full justify-between ">
        <img
          src="/M1.gif"
          alt="torn"
          className="self-center h-[250px]  object-contain z-[5]"
        />
        <img
          src="/M1.gif"
          alt="torn"
          className="self-center  h-[250px] object-contain z-[5]"
        />
      </div>
      <div className="absolute bottom-[0%] flex items-center justify-center">
        <img
          src="/F1.gif"
          alt="torn"
          className="self-center object-contain z-[5]"
        />
      </div>
      {/* <div className="absolute top-[16%] p-5 flex items-center justify-center">
        <img
          src="/chakra.svg"
          alt="torn"
          className="self-center w-[70%] object-contain z-[5]"
        />
      </div>
      <div className="absolute top-[22.5%] p-5 flex items-center justify-center ">
        <div className="h-fit w-[44%] aspect-square bg-[#ffdf9494] flex items-center justify-center rounded-full z-10">
          <img
            src="/ganesh.svg"
            alt="torn"
            className="self-center w-[50%] object-contain  z-10 mt-2"
          />
        </div>
      </div> */}
      <div className="absolute top-[55.5%] p-5 ">
        <img
          src="/mantra.gif"
          alt="torn"
          className="self-center w-[120%] object-contain  z-10 mt-2"
        />
        {/* <video src="/mantra.mp4" autoPlay controls /> */}
        {/* <div className="text-2xl font-bold">
          {displayedSloka.split("").map((char, index) => (
            <span
              key={index}
              className={`inline-block transition-opacity duration-300 ${
                char ? "opacity-100" : "opacity-0"
              }`}
            >
              {char}
            </span>
          ))}
        </div> */}
      </div>
      {/* <h1 className="intro-title text-4xl font-bold text-black">Welcome to Our Wedding Celebration!</h1>
      <p className="mt-4 text-lg">Join us as we embark on this beautiful journey together.</p> */}
    </section>
  );
};

const RingCeremony = () => {
  return (
    <section className=" bg-[#fed4ff] min-h-screen relative">
      <div className="absolute top-[0%] flex items-center justify-center">
        <img
          src="/H2.png"
          alt="torn"
          className="self-center object-contain z-[5]"
        />
      </div>
      <div className="absolute bottom-[0%] flex items-center justify-center">
        <img
          src="/RCC.png"
          alt="torn"
          className="self-center object-contain z-[5]"
        />
      </div>
      <div className="absolute bottom-[0%] flex items-center justify-center">
        <img
          src="/F2.gif"
          alt="torn"
          className="self-center object-contain z-[5]"
        />
      </div>
      {/* <h2 className="text-3xl font-bold text-center">Ring Ceremony</h2>
      <p className="mt-4 text-center">
        Join us for the ring ceremony where we exchange our vows of love.
      </p> */}
    </section>
  );
};

const Haldi = () => {
  return (
    <section className="py-20 min-h-screen relative">
      <div className="absolute top-[0%] flex items-center justify-center">
        <img
          src="/H3.gif"
          alt="torn"
          className="self-center object-contain z-[5]"
        />
      </div>

      <div className="absolute bottom-[0%] flex items-center justify-center">
        <img
          // src="/F3.png"
          src="/temphaldi.png"
          alt="torn"
          className="self-center object-contain z-[5]"
        />
      </div>
      {/* <h2 className="text-3xl font-bold text-center">Haldi Ceremony</h2>
      <p className="mt-4 text-center">
        Celebrate the Haldi ceremony filled with joy and laughter!
      </p> */}
    </section>
  );
};

const Marriage = () => {
  return (
    <section className=" bg-[#a60046] min-h-screen relative">
      <div className="absolute bottom-[0%] flex items-center justify-center px-10 pb-10">
        <img
          src="/M4.png"
          alt="torn"
          className="self-center object-contain z-[5] "
        />
      </div>
      <div className="absolute bottom-[0%] flex items-center justify-center">
        <img
          src="/5couple.png"
          alt="torn"
          className="self-center object-contain z-[5] "
        />
      </div>
      {/* <h2 className="text-3xl font-bold text-center">Marriage Ceremony</h2>
      <p className="mt-4 text-center">
        Join us as we tie the knot and celebrate our love.
      </p> */}
    </section>
  );
};

const Last = () => {
  return (
    <section className=" bg-[#152647] min-h-screen relative">
      <div className="absolute top-[0%] flex items-center w-full justify-center">
        {/* <div className="flex justify-between items-center w-full z-20">
          <img
            src="/sparkles.gif"
            alt="torn"
            className="self-center w-10 object-contain "
          />
          <img
            src="/sparkles.gif"
            alt="torn"
            className="self-center w-10 object-contain "
          />
          <img
            src="/sparkles.gif"
            alt="torn"
            className="self-center w-10 object-contain"
          />
        </div> */}
        <img
          src="/H5.png"
          alt="torn"
          className="self-center object-contain z-10"
        />
      </div>

      <div className="absolute top-[0%] flex items-center justify-center">
        <img
          src="/goldSpark.gif"
          alt="torn"
          className="self-center object-contain z-[5]"
        />
      </div>
      <div className="absolute bottom-[0%] flex items-center justify-center">
        <img
          src="/F5.png"
          alt="torn"
          className="self-center object-contain z-[5]"
        />
      </div>
      {/* <div className="absolute bottom-[0%] flex items-center justify-center px-10 pb-10">
        <img
          src="/M4.png"
          alt="torn"
          className="self-center object-contain z-[5] "
        />
      </div> */}
      {/* <h2 className="text-3xl font-bold text-center">Marriage Ceremony</h2>
      <p className="mt-4 text-center">
        Join us as we tie the knot and celebrate our love.
      </p> */}
    </section>
  );
};
