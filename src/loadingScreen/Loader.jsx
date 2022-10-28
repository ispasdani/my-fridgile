import "./loader.css";
import { motion, AnimatePresence } from "framer-motion";

const firstPackLettersVariants = {
  hidden: {
    x: "-200%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
  exit: {
    x: "-200",
    opacity: 0,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

const secondPackLettersVariants = {
  hidden: {
    y: "-400%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
  exit: {
    y: "-400",
    opacity: 0,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

const thirdPackLettersVariants = {
  hidden: {
    y: "400%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
  exit: {
    y: "400",
    opacity: 0,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

const fourthPackLettersVariants = {
  hidden: {
    x: "200%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
  exit: {
    x: "200",
    opacity: 0,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

const container = {
  show: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        className="loaderContainer"
        variants={container}
        animate="show"
        onAnimationComplete={() => setLoading(false)}
      >
        <motion.p
          key="modal1"
          variants={firstPackLettersVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          FR
        </motion.p>
        <motion.p
          key="modal2"
          variants={secondPackLettersVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          ID
        </motion.p>
        <motion.p
          key="modal3"
          variants={thirdPackLettersVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          GI
        </motion.p>
        <motion.p
          key="modal4"
          variants={fourthPackLettersVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          LE
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
