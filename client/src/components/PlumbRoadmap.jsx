import { motion } from "framer-motion";
import turnoff from '../assets/turnoff.webp';
import plug from '../assets/plug.webp';
import disassemble from '../assets/disassemble.jpg';
import inspect from '../assets/inspect.jpg';
import replace from '../assets/replace.jpeg';
import reassemble from '../assets/reassemble.webp';
import turnon from '../assets/turnon.jpeg';

const timelineData = [
  {
    title: "Turn Off the Water Supply",
    description: "Locate the shut-off valves under the sink and turn them off to stop water flow.",
    image: turnoff,
  },
  {
    title: "Plug the Drain",
    description: "Use a sink plug or a cloth to prevent small parts from falling down the drain..",
    image: plug,
  },
  {
    title: "Disassemble the Faucet",
    description: "Remove the handle by loosening the screw underneath or behind it. Use a wrench if necessary.",
    image: disassemble,
  },
  {
    title: "Inspect the Parts",
    description: "Check the washer, O-rings, and cartridge for signs of wear or damage..",
    image: inspect,
  },
  {
    title: "Replace Damaged Components",
    description: "Swap out any worn washers, O-rings, or cartridges with new ones compatible with your faucet model.",
    image: replace,
  },
  {
    title: "Reassemble the Faucet",
    description: "Carefully put the faucet back together in the reverse order of disassembly.",
    image: reassemble,
  },
  {
    title: "Turn On the Water Supply",
    description: "Open the shut-off valves and test the faucet to ensure there are no more leaks.",
    image: turnon,
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

export default function PlumbingTimeline() {
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
