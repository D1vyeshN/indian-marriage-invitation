import React, { useEffect } from 'react';
import {gsap} from 'gsap';

function App() {
  return (
    <div className="bg-yellow-100 mx-auto  max-w-[425px] text-gray-800">
      <Intro />
      <RingCeremony />
      <Haldi />
      <Marriage />
    </div>
  );
}

export default App;


const Intro = () => {
  useEffect(() => {
    gsap.from('.intro-title', { duration: 1, y: -50, opacity: 0 });
  }, []);

  return (
    <section className=" text-center min-h-screen border border-black">
      <div>
        <img src="/toran.gif" alt="torn" className='border border-black'/>
      </div>
      <h1 className="intro-title text-4xl font-bold text-black">Welcome to Our Wedding Celebration!</h1>
      <p className="mt-4 text-lg">Join us as we embark on this beautiful journey together.</p>
    </section>
  );
};

const RingCeremony = () => {
  return (
    <section className="py-20 bg-red-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center">Ring Ceremony</h2>
      <p className="mt-4 text-center">Join us for the ring ceremony where we exchange our vows of love.</p>
    </section>
  );
};

const Haldi = () => {
  return (
    <section className="py-20 min-h-screen">
      <h2 className="text-3xl font-bold text-center">Haldi Ceremony</h2>
      <p className="mt-4 text-center">Celebrate the Haldi ceremony filled with joy and laughter!</p>
    </section>
  );
};

const Marriage = () => {
  return (
    <section className="py-20 bg-green-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center">Marriage Ceremony</h2>
      <p className="mt-4 text-center">Join us as we tie the knot and celebrate our love.</p>
    </section>
  );
};