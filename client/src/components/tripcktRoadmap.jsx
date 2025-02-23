import { motion } from "framer-motion";
import remove from '../assets/e2a.jpeg';
import boiling from '../assets/e2b.jpeg';
import cleaner from '../assets/e2c.jpeg';
import plunge from '../assets/e2d.jpeg';
import snake from '../assets/e2e.jpeg';
import flush from '../assets/e2f.jpeg';


const timelineData = [
  {
    title: "Locate the Circuit Breaker Panel",
    description: "Usually found in basements, garages, or utility closets, identify the main electrical panel.",
    image: remove,
  },
  {
    title: "Identify the Tripped Breaker",
    description: "Look for a breaker that is in a middle position between 'on' and 'off'. Some breakers will show a red or orange indicator.",
    image: boiling,
  },
  {
    title: "Turn the Breaker Off Completely",
    description: "Push the tripped breaker firmly to the 'off' position until it clicks. This resets the internal mechanism.",
    image: cleaner,
  },
  {
    title: "Wait & Reset to 'On'",
    description: "After a few seconds, flip the breaker back to the 'on' position. You should hear a click confirming successful reset.",
    image: plunge,
  },
  {
    title: "Check the Affected Area",
    description: "IEnsure power is restored to the room or appliance. If it trips again, there may be an overload or faulty device.",
    image:  snake,
  },
  {
    title: "Troubleshoot if Repeated Issues Occur",
    description: "Unplug high-wattage appliances and repeat the process. If the issue persists, consult a licensed electrician.",
    image: flush,
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

export default function FreeTimeline() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        Reset a Tripped Circuit Breaker
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
