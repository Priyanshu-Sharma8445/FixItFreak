import { useState } from "react";
import { motion } from "framer-motion";
import PlumbingTimeline from "./PlumbRoadmap"; // Importing the Roadmap component

const cardsData = [
  { id: 1, title: "Fix a Leaky Faucet", content: "Step-by-step guide to fix a leaky faucet and save water.", image: "/images/faucet.jpg" },
  { id: 2, title: "Unclog a Drain", content: "Learn how to use a plunger or a drain snake to clear blockages.", image: "/images/drain.jpg" },
  { id: 3, title: "Install a New Shower Head", content: "Upgrade your bathroom by installing a modern shower head.", image: "/images/shower.jpg" },
  { id: 4, title: "Replace a Toilet Flapper", content: "Fix a running toilet by replacing the flapper easily.", image: "/images/toilet.jpg" },
  { id: 5, title: "Seal Pipe Leaks", content: "Use plumber's tape and sealants to stop minor leaks.", image: "/images/pipe-leak.jpg" },
  { id: 6, title: "Clean Shower Drains", content: "Prevent clogs by regularly cleaning hair and debris.", image: "/images/shower-drain.jpg" },
];

const PlumbingPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-black">
      <motion.h1
        className="text-4xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Plumbing DIY Guides
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardsData.map((card) => (
          <motion.div
            key={card.id}
            onClick={() => setSelectedCard(card)}
            className="cursor-pointer bg-white shadow-lg rounded-2xl p-4 hover:shadow-2xl transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-lg mb-2" />
            <h2 className="text-xl font-semibold text-gray-700">{card.title}</h2>
          </motion.div>
        ))}
      </div>
      {selectedCard && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="p-6 bg-white shadow-lg rounded-2xl w-full md:w-2/3 max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <PlumbingTimeline /> {/* Existing Plumbing Timeline Component */}

            {/* YouTube Video Embed */}
            <div className="mt-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Watch the Tutorial</h2>
              <div className="relative w-full h-0 pb-[56.25%]"> {/* Responsive Aspect Ratio 16:9 */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/SsPtZqOAf4s"
                  title="Plumbing Tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <motion.button
              onClick={() => setSelectedCard(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition transform hover:scale-110"
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

export default PlumbingPage;