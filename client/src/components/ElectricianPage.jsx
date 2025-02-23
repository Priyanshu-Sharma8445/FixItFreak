import { useState } from "react";
import { motion } from "framer-motion";
import ElectTimeline from "./fixcktRoadmap";
import FreeTimeline from "./tripcktRoadmap";
import CloggingTimeline from "./UnclogRoadmap"; // Importing the Clogging-specific Timeline
import fix from '../assets/fixckt.jpg';
import tripped from '../assets/resettripped.webp';
import switc from '../assets/changeswitch.jpg';
import fan from '../assets/installfan.avif';
import outlet from '../assets/replaceoutlet.jpeg';
import bulb from '../assets/replace.jpg';

const cardsData = [
  { id: 1, title: "Fix a Loose Electrical Outlet", content: "Loose outlets can cause sparking, poor connections, and potential fire hazards if not addressed promptly.", image: fix },
  { id: 2, title: "Reset a Tripped Circuit Breaker", content: "Circuit breakers protect your home’s electrical system from overloading. Knowing how to reset them can restore power quickly.", image: tripped },
  { id: 3, title: "Change a Light Switch", content: "Replacing a faulty or outdated light switch can enhance functionality and improve your home’s aesthetics.", image: switc },
  { id: 4, title: "Install a Ceiling Fan", content: "A ceiling fan enhances comfort by improving air circulation and can reduce heating and cooling costs.", image: fan },
  { id: 5, title: "Replace a Power Outlet", content: "A damaged or outdated power outlet can be safely replaced with a few basic tools and precautions.", image: outlet },
  { id: 6, title: "Fix a Blown Fuse", content: "Replacing a light bulb is a simple yet essential home maintenance task that can brighten your space efficiently.", image: bulb },
];

const ElectricianPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const getTimelineComponent = (id) => {
    if (id === 2) return <FreeTimeline />;
    return <ElectTimeline />;
  };

  const getVideoSrc = (id) => {
    if (id === 2) return "https://www.youtube.com/embed/z1GhnuaAJKw"; // Different video for "Unclog a Drain"
    return "https://www.youtube.com/embed/7ppBrL7aaYc"; // Default video
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gradient-to-br from-black via-gray-900 to-black m-0">
      <motion.h1
        className="text-5xl font-extrabold text-white mb-10 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Electrician DIY Guides
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardsData.map((card) => (
          <motion.div
            key={card.id}
            onClick={() => setSelectedCard(card)}
            className="cursor-pointer bg-white shadow-xl rounded-3xl p-6 hover:shadow-3xl transition duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-2xl mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.content}</p>
          </motion.div>
        ))}
      </div>
      {selectedCard && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="p-8 bg-white shadow-2xl rounded-3xl w-full md:w-3/4 lg:w-1/2 max-h-[85vh] overflow-y-auto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {getTimelineComponent(selectedCard.id)}

            {/* YouTube Video Embed */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Watch the Tutorial</h2>
              <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-lg"> {/* Responsive Aspect Ratio 16:9 */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={getVideoSrc(selectedCard.id)}
                  title="Plumbing Tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <motion.button
              onClick={() => setSelectedCard(null)}
              className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ElectricianPage;
