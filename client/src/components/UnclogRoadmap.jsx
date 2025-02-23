import { motion } from "framer-motion";
import remove from '../assets/debris.jpeg';
import boiling from '../assets/boiling.webp';
import cleaner from '../assets/cleaner.jpg';
import plunge from '../assets/plunge.jpeg';
import snake from '../assets/snake.jpg';
import flush from '../assets/flush.jpeg';
import check from '../assets/checkflow.jpg';


const timelineData = [
  {
    title: "Remove Visible Debris",
    description: "Clear any hair, soap scum, or other debris near the drain opening.",
    image: remove,
  },
  {
    title: "Use Boiling Water",
    description: "Pour a pot of boiling water slowly down the drain to break down grease and soap buildup.",
    image: boiling,
  },
  {
    title: "Apply a Drain Cleaner",
    description: "Remove the handle by loosening the screw underneath or behind it. Use a wrench if necessary.",
    image: cleaner,
  },
  {
    title: "Plunge the Drain",
    description: "Use a plunger to create suction and dislodge the blockage. Ensure the drain opening is fully covered.",
    image: plunge,
  },
  {
    title: "Use a Drain Snake",
    description: "Insert a drain snake or auger to reach deeper clogs. Rotate and pull it out carefully.",
    image:  snake,
  },
  {
    title: "Flush with Hot Water",
    description: "Rinse the drain thoroughly with hot water to clear any remaining residue.",
    image: flush,
  },
  {
    title: "Check for Flow",
    description: "Test the drain by running water to confirm the clog is cleared.",
    image: check,
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

export default function CloggingTimeline() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        Fix a Leaky Saucet
      </motion.h1>
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          className="absolute left-1/2 top-0 w-1 bg-gray-300 h-full transform -translate-x-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleVariants}
        />

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`mb-12 flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInVariants}
          >
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg w-[90%] md:w-[45%]"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p>{item.description}</p>
            </motion.div>
            {index < timelineData.length - 1 && (
              <div className={`absolute w-1 h-10 bg-gray-300 ${index % 2 === 0 ? "left-1/2" : "right-1/2"} transform -translate-x-1/2`} style={{ top: '50%', zIndex: -1 }} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
