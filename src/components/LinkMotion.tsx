import { motion } from "framer-motion";

const LinkMotion = ({ children }: any) => (
  <motion.div
    whileHover={{ scale: 1.1, backgroundColor: "#ff5100" }} // Replace with your desired background color
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.3 }} // Adjust the transition duration as needed
  >
    {children}
  </motion.div>
);

export default LinkMotion;
