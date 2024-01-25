import { Button } from '@/components/ui/button';
import macbook from '@/assets/images/macbook-exposed.png';
import { motion } from 'framer-motion';

const heroText = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

const heroTextChildren = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: 'spring',
      bounce: 0.5,
    },
  },
};

const heroImage = {
  initial: { y: 0, rotate: 0, scale: 5 },
  animate: {
    y: 20,
    rotate: -30,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 gap-2 place-items-center py-32">
      <motion.div
        variants={heroText}
        initial="hidden"
        animate="visible"
        // transition={{ duration: 1, type: "tween", staggerChildren:0.5, delayChildren:0.5 }}
        className="text-center md:text-left"
      >
        <motion.h1
          variants={heroTextChildren}
          className="md:text-7xl lg:text-8xl font-bold"
        >
          <span className="text-gray">Don't worry.</span> <br />{' '}
          <span>We'll fix it.</span>
        </motion.h1>
        <motion.p
          variants={heroTextChildren}
          className="text-dark-gray text-base md:text-xl max-w-[40ch] my-5"
        >
          Welcome to <span className="text-black font-semibold">iRepair</span>,
          your one-stop place for all kinds of{' '}
          <span className="text-black font-semibold">Macbook repairs</span> and
          diagnostics.
        </motion.p>
        <motion.div variants={heroTextChildren}>
          <Button>Book a service</Button>
        </motion.div>
      </motion.div>
      <motion.div
        variants={heroImage}
        initial="initial"
        animate="animate"
        className="md:rotate-[-30deg] "
      >
        <img
          className="object-contain w-full mx-auto md:w-10/12"
          src={macbook}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
