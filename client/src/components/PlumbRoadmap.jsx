import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Fix a Leaky Faucet",
    description: "Stop water waste by replacing worn-out washers or seals.",
    image: "https://images.unsplash.com/photo-1583947215254-48ed35a3a59b",
  },
  {
    title: "Unclog a Drain",
    description: "Use a plunger or drain snake to clear blockages.",
    image: "https://images.unsplash.com/photo-1581591524425-1d0d4e1e01e0",
  },
  {
    title: "Fix a Running Toilet",
    description: "Replace the flapper or adjust the float to stop water flow.",
    image: "https://images.unsplash.com/photo-1616627452327-e7e03b99e731",
  },
  {
    title: "Low Water Pressure",
    description: "Clean the faucet aerator to restore proper flow.",
    image: "https://images.unsplash.com/photo-1565967511847-6f5e94d69a46",
  },
  {
    title: "Dripping Showerhead",
    description: "Tighten loose parts or soak the showerhead in vinegar.",
    image: "https://images.unsplash.com/photo-1590646295835-6e8d3db44383",
  },
  {
    title: "Leaking Pipe",
    description: "Seal small leaks with plumber’s tape or epoxy putty.",
    image: "https://images.unsplash.com/photo-1601040616227-b2c0c89f04f4",
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
        Plumbing Task Timeline
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
            {/* Connecting string like a stem */}
            {index < timelineData.length - 1 && (
              <div className={`absolute w-1 h-10 bg-gray-300 ${index % 2 === 0 ? "left-1/2" : "right-1/2"} transform -translate-x-1/2`} style={{ top: '50%', zIndex: -1 }} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
