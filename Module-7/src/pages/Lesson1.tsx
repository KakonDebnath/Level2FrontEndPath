import { motion } from "framer-motion";
const test = {
  hide: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 },
};
const child = {
  hide: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 },
};
const Lesson1 = () => {
  return (
    <motion.div
      variants={test}
      initial="hide"
      animate="show"
      transition={{
        ease: "linear",
        delayChildren: 0.5,
        staggerChildren: 0.5,
      }}
      className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 justify-center items-center"
    >
      <motion.div variants={child} className="size-20 bg-white rounded-full"></motion.div>
      <motion.div variants={child} className="size-20 bg-white rounded-full"></motion.div>
      <motion.div variants={child} className="size-20 bg-white rounded-full"></motion.div>
      <motion.div variants={child} className="size-20 bg-white rounded-full"></motion.div>
    </motion.div>
  );
};

export default Lesson1;
