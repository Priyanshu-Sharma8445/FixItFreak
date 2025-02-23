import { motion } from "framer-motion";
import turnoff from '../assets/e1a.jpeg';
import plug from '../assets/e1b.jpeg';
import disassemble from '../assets/e1c.jpeg';
import inspect from '../assets/e1d.jpeg';
import replace from '../assets/e1e.jpeg';
import reassemble from '../assets/e1f.jpeg';

const timelineData = [
  {
    title: "Shut Off Power",
    description: "Turn off the corresponding circuit breaker to the outlet you’ll be working on. Confirm with a voltage tester to ensure no current is flowing.",
    image: turnoff,
  },
  {
    title: "Remove the Outlet Cover",
    description: "Use a flat-head screwdriver to unscrew and remove the outlet cover carefully.",
    image: plug,
  },
  {
    title: "Inspect the Outlet Box",
    description: "Look for any signs of loose mounting screws or disconnected wires that may be causing instability.",
    image: disassemble,
  },
  {
    title: "Tighten Loose Screws",
    description: "CSecure the outlet to the electrical box by tightening the mounting screws on the top and bottom of the outlet.",
    image: inspect,
  },
  {
    title: "Reassemble the Outlet",
    description: "Replace the cover plate, ensuring it fits snugly and aligns properly with the wall surface.",
    image: replace,
  },
  {
    title: "Restore Power & Test",
    description: "urn the breaker back on and check the outlet with a lamp or device to confirm it is secure and functioning.",
    image: reassemble,
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

export default function ElectTimeline() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        Fix a Loose Electrical Outlet
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
