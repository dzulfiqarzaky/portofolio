import { motion } from "framer-motion";

const LinkMotion = ({ children }: any) => (
  <motion.div
  whileTap={{ scale: 0.9 }}
  transition={{ duration: 0.3 }} // Adjust the transition duration as needed

   class="flat-button">
    <div>
      <span class="bg"></span>
      <span class="base"></span>
      <span class="text">
        {children}
      </span>
    </div>
  </motion.div>
);

export default LinkMotion;
