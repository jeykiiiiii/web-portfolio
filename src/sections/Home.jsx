// Home.jsx
import { Button } from "../components/ui/button";
import { Download, Github, Linkedin, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Frontend Developer & UI/UX Enthusiast";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-transparent relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Avatar with glass effect */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="w-56 h-56 mx-auto mb-12 rounded-2xl bg-gradient-to-br from-primary to-accent border-4 border-white/20 shadow-2xl overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm group-hover:bg-transparent transition-all duration-300"></div>
            <img 
              src="/src/assets/avatar.jpg" 
              alt="Jake Marlon Destura"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            Hi, I'm <span className="text-primary">Jake</span>
          </motion.h1>
          
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl text-foreground/80 mb-4 min-h-[2.5rem] font-mono">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            </h2>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I create <span className="text-primary font-semibold">beautiful, responsive web applications</span> using modern technologies 
            like React, TailwindCSS, and Node.js. Passionate about clean code and 
            user-centered design.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="gap-2 rounded-full px-8 shadow-lg">
                <Download size={20} />
                Download Resume
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="gap-2 rounded-full px-8 border-2">
                <Github size={20} />
                GitHub
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="gap-2 rounded-full px-8 border-2">
                <Linkedin size={20} />
                LinkedIn
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-foreground/40">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={20} className="text-foreground/40" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;