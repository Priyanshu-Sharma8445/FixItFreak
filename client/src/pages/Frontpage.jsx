
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import D3Element from '../components/D3Element';
import Footer from '../components/Footer';
import Ai from '../components/Ai';
import Card from '../components/Card';
import myImage from '../assets/plumber.jpg';
import myImage2 from '../assets/electrician.jpeg';
import myImage3 from '../assets/cleaning.jpg';
import myImage4 from '../assets/carpentary.jpg';
import FAQ from '../components/Questions';
import { Link } from 'react-router-dom';

function Frontpage() {
  const [showLightning, setShowLightning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLightning((prev) => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative min-h-screen">
        {/* 🌌 3D Background */}
        <div className="absolute inset-0 bg-black overflow-hidden -z-10">
          {/* You can use a video background, canvas animation, or a cool Tailwind background effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1a1a2e,_#16213e,_#0f3460)] opacity-80">
            
          </div>

          {/* 🌀 Animated Blur Effect */}
          <div className="absolute inset-0 bg-[url('/path-to-your-3d-bg.svg')] opacity-40 blur-2xl"></div>

          {/* ✨ 3D Floating Particles (Optional) */}
          <div className="absolute inset-0 mix-blend-overlay animate-[pulse_5s_infinite] bg-[url('/path-to-particles.svg')] opacity-20"></div>
        </div>

        {/* 🏠 Navbar */}
        <Navbar />

        {/* 🔥 Hero Section */}
        <div className="relative text-white flex flex-col min-h-[90vh] pt-24 pb-20">
          <div className="flex flex-wrap items-start justify-center px-12">

            {/* 🏆 Left Side - Branding & Info */}
            <div className="w-full md:w-[60%] flex flex-col justify-center px-8">
              <h1 className={`text-7xl font-extrabold transition-all duration-500 ${showLightning ? "text-white drop-shadow-[0_0_40px_rgba(255,255,255,1)]" : "text-blue-400"
                }`}>
                FixItFreak
              </h1>
              <p className="text-2xl font-semibold text-gray-300 mt-2 italic drop-shadow-md">
                "Master the art of fixing, because every problem has a solution."
              </p>

              {/* 🛠️ Skill Categories */}
              <div className="mt-8 space-y-4">
                {[
                  { icon: "🔧", title: "Plumbing", desc: "Fix leaks, pipes, and faucets like a pro." },
                  { icon: "⚡", title: "Electrical Work", desc: "Handle wiring, outlets, and circuits safely." },
                  { icon: "🛠️", title: "Carpentry", desc: "Learn woodwork repairs, furniture assembly, and more." },
                  { icon: "🧹", title: "Cleaning", desc: "Tackle tough stains and keep things organized." },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-800 bg-opacity-60 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-lg font-semibold text-white">{item.title}</p>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 💡 Did You Know? */}
              <div className="mt-10 bg-gray-900 bg-opacity-60 p-6 rounded-lg shadow-lg max-w-lg border-l-4 border-blue-400 backdrop-blur-lg">
                <h2 className="text-2xl font-bold text-blue-400">Did You Know?</h2>
                <p className="text-gray-300 mt-2">
                  A <strong>leaky faucet</strong> can waste up to <strong>3,000 gallons of water</strong> per year? Fixing it saves water <strong>and</strong> your bill!
                </p>
              </div>
            </div>

            {/* 🎥 Right Side - 3D Element */}
            <div className="w-full md:w-[40%] justify-center items-start min-h-[80vh] h-[80vh] scale-105">
              
              <D3Element />
              
            </div>
          </div>
        </div>

        {/* 🤖 AI Chat Button */}
        <div className="fixed bottom-[-50px] right-0 z-50">
          <Ai />
        </div>

        {/* 🔹 Card Section */}
        <div className="flex flex-wrap justify-center bg-gradient-to-b from-gray-900 to-black py-10 gap-8">
            <Link to="/page/plumbing">
          <Card image={myImage} heading="Plumbing" description="Fix common issues like leaky faucets, clogged drains, and running toilets using basic tools and simple techniques." />
                
            </Link>
            <Link to="/page/electrician">
          <Card image={myImage2} heading="Electrician" description="Handle tasks like replacing outlets, fixing light fixtures, and troubleshooting minor electrical faults safely." /></Link>
          <Card image={myImage3} heading="Cleaning" description="Maintain a clean home by tackling tough stains, organizing spaces, and using effective cleaning solutions." />
          <Card image={myImage4} heading="Carpentry" description="Perform basic woodwork repairs, assemble furniture, and install shelves or cabinets with essential tools." />
        </div>

        {/* ❓ FAQ Section */}
        <FAQ />

        {/* 🔻 Footer */}
        <Footer />
      </div>

    </>
  );
}

export default Frontpage;
