// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import introVideo from "../assets/intro.mp4";
export default function Hero() {
  return (
    <section className="hero">
      <video autoPlay muted loop className="bg-video">
        <source src={introVideo} type="video/mp4" />
      </video>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1>THE DUBAI MALL</h1>
        <p>Where the world comes to shop</p>
      </motion.div>
    </section>
  );
}