import { motion } from "framer-motion";

const LinkMotion = ({ children }: any) => (
  <motion.div
  whileTap={{ scale: 0.9 }}
  transition={{ duration: 0.3 }} // Adjust the transition duration as needed

   className="flat-button">
    <div>
      <span className="bg"></span>
      <span className="base"></span>
      <span className="text">
        {children}
      </span>
    </div>
  </motion.div>
);

export default LinkMotion;
