// Home.jsx
import { Button } from "../components/ui/button";
import { Download, Github, Linkedin, ArrowDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeRef = useRef(null);
  const fullText = "Student/Gamer/Developer in Progress";
  
  // Typewriter effect
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

  const resumeFile = "/JakeMarlonDestura.pdf";
  const githubLink = "https://github.com/Jeykiiiiii";
  const linkedinLink = "https://www.linkedin.com/in/jake-marlon-destura-1b7b14396/";

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = "Jake_Marlon_Destura_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleIframeLoad = () => {
    console.log('Spline scene loaded successfully');
    setIframeLoaded(true);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 lg:pt-20 bg-transparent relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 lg:w-72 lg:h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            >
              Hi, I'm <span className="text-primary">Jake</span>
            </motion.h1>
            
            <motion.div
              variants={itemVariants}
              className="mb-6 lg:mb-8"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-4 min-h-[2rem] sm:min-h-[2.5rem] font-mono">
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
              className="text-base sm:text-lg text-foreground/60 mb-8 lg:mb-12 leading-relaxed"
            >
              I’m a <span className="text-primary font-semibold">student and tech enthusiast</span> passionate about technology, gaming, and creative problem-solving. 
              A math wizard and logic lover at heart, I enjoy exploring how systems work, 
              building projects that challenge my thinking, and continuously learning new skills. 
              Also, a proud dog lover.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-12 lg:mb-16"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="gap-2 rounded-full px-6 sm:px-8 shadow-lg text-sm sm:text-base"
                  onClick={handleDownloadResume}
                >
                  <Download size={18} />
                  Download Resume
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2 rounded-full px-6 sm:px-8 border-2 text-sm sm:text-base">
                    <Github size={18} />
                    GitHub
                  </Button>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2 rounded-full px-6 sm:px-8 border-2 text-sm sm:text-base">
                    <Linkedin size={18} />
                    LinkedIn
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Scroll indicator - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="hidden lg:flex flex-col items-center lg:items-start gap-2"
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

         {/* Spline 3D Scene*/}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden bg-transparent order-1 lg:order-2"
            >

              <div className="absolute inset-0 overflow-hidden">
                <div 
                  className="w-full h-full"
                  style={{
                    clipPath: 'inset(0 0 15% 0)', 
                  }}
                >
                  <iframe 
                    ref={iframeRef}
                    src='https://my.spline.design/jakethedog-slORiodK7izwk0FbEC7osgLL'
                    width='100%'
                    height='100%'
                    className="w-full h-full"
                    onLoad={handleIframeLoad}
                    title="3D Interactive Scene"
                    loading="lazy"
                    allow="accelerometer; gyroscope"
                  />
                </div>
              </div>
              
              <div className="absolute inset-0 rounded-2xl pointer-events-none"></div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
