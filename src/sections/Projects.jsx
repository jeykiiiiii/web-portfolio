// Projects.jsx
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card.jsx";
import { Button } from "../components/ui/button";
import { ExternalLink, Github, ArrowLeft, ArrowRight, Filter, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "Queue Management System",
      description: "A full-stack queue management system built with Next.js, TypeScript, and MySQL. Features real-time queue updates, admin dashboard, and customer notifications for efficient service management.",
      technologies: ["Next.js", "TypeScript", "MySQL", "TailwindCSS"],
      github: "https://github.com/jeykiiiiii/queue-management-system",
      features: ["Real-time Queue Updates", "Admin Dashboard", "Customer Notifications", "Queue Analytics", "Multi-branch Support", "Priority Queue System"],
      category: "fullstack",
      status: "completed",
      images: [
        "/src/assets/projects/qms1.png",
        "/src/assets/projects/qms2.png",
        "/src/assets/projects/qms3.png",
        "/src/assets/projects/qms4.png",
        "/src/assets/projects/qms5.png",
        "/src/assets/projects/qms6.png",
        "/src/assets/projects/qms7.png"
      ]
    },
    {
      title: "Student Tracker",
      description: "A comprehensive student management system for tracking academic progress, attendance, and performance metrics with interactive dashboards and reporting features.",
      technologies: ["Php", "JavaScript", "MySQL", "Bootstrap"],
      github: "https://github.com/yourusername/student-tracker",
      features: ["Student Profiles Management", "Enrollment", "Grade Management", "Performance Analytics", "Report Generation"],
      category: "fullstack",
      status: "completed",
      images: [
        "/src/assets/projects/sdbms1.png",
        "/src/assets/projects/sdbms2.png",
        "/src/assets/projects/sdbms3.png",
        "/src/assets/projects/sdbms4.png",
        "/src/assets/projects/sdbms5.png",
        "/src/assets/projects/sdbms6.png",
        "/src/assets/projects/sdbms7.png"
      ]
    },
    {
      title: "Coffee Menu",
      description: "A modern and responsive coffee shop menu application with online ordering, customization options, payment integration, and real-time order tracking.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jeykiiiiii/Cofee-Menu",
      live: "https://jeykiiiiii.github.io/Cofee-Menu/", 
      features: ["Online Ordering System", "Menu Customization"],
      category: "frontend",
      status: "completed",
      images: [
        "/src/assets/projects/cm1.png",
        "/src/assets/projects/cm2.png",
        "/src/assets/projects/cm3.png",
        "/src/assets/projects/cm4.png"
      ]
    },
    {
      title: "One Piece",
      description: "A simple sign-up page created for school purposes. It serves as a basic user registration form that currently opens a game in development.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jeykiiiiii/SignUp",
      live: "https://jeykiiiiii.github.io/SignUp/", 
      features: ["User Registration", "Basic Form Validation", "Game Launch (Under Development)"],
      category: "frontend",
      status: "in progress",
      images: [
        "/src/assets/projects/op1.png",
        "/src/assets/projects/op2.png"
      ]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const project = filteredProjects[currentProject];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const openGallery = (index = 0) => {
    setCurrentImageIndex(index);
    setShowGallery(true);
  };

  const projectVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          My Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto"
        >
          Here are some of my projects showcasing my skills in full-stack and frontend development.
        </motion.p>

        {/* Project Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Filter size={20} className="text-foreground/60" />
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setCurrentProject(0);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border-2 ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                  : 'bg-background/80 backdrop-blur-sm border-muted hover:border-primary/50 text-foreground/70'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-2 shadow-2xl bg-background/80 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Project Image Gallery */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-64 lg:h-auto flex items-center justify-center overflow-hidden relative group bg-muted"
              >
                {/* Project Image */}
                <img 
                  src={project.images[0]} 
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => openGallery(0)}
                />
                
                {/* Gallery Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => openGallery(0)}
                    className="bg-white text-primary rounded-full p-4 shadow-2xl"
                  >
                    <span className="text-sm font-medium">View Gallery</span>
                  </motion.button>
                </div>

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {project.images.length} images
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-green-500/90 text-white' 
                      : 'bg-yellow-500/90 text-white'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-white">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
              </motion.div>

              {/* Project Details */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject}
                    variants={projectVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl md:text-3xl">{project.title}</CardTitle>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/70 leading-relaxed"
                      >
                        {project.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h4 className="font-semibold mb-3 text-lg">Key Features:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.features.map((feature, index) => (
                            <motion.div 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                              className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                            >
                              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                              <span className="text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h4 className="font-semibold mb-3 text-lg">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Updated Button Section */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4 pt-6"
                      >
                        {/* Conditionally render Live Demo button only if project.live exists */}
                        {project.live && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button 
                              size="lg" 
                              className="gap-3 bg-accent hover:bg-accent/90 rounded-full px-8"
                              onClick={() => window.open(project.live, '_blank')}
                            >
                              <ExternalLink size={18} />
                              Live Demo
                            </Button>
                          </motion.div>
                        )}
                        
                        {/* Always show Source Code button */}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button 
                            variant="outline" 
                            size="lg" 
                            className="gap-3 rounded-full px-8 border-2"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            <Github size={18} />
                            Source Code
                          </Button>
                        </motion.div>
                      </motion.div>
                    </CardContent>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Card>

          {/* Project Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-between items-center mt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" onClick={prevProject} className="gap-3 rounded-full px-6">
                <ArrowLeft size={18} />
                Previous
              </Button>
            </motion.div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-foreground/60">
                {currentProject + 1} of {filteredProjects.length}
              </span>
              <div className="flex space-x-2">
                {filteredProjects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.8 }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentProject ? "bg-accent" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" onClick={nextProject} className="gap-3 rounded-full px-6">
                Next
                <ArrowRight size={18} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowGallery(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-background rounded-2xl p-6 max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{project.title} - Screenshots</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowGallery(false)}
                  className="rounded-full"
                >
                  <X size={20} />
                </Button>
              </div>
              
              {/* Main Image */}
              <div className="flex-1 flex items-center justify-center relative">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="max-h-[70vh] max-w-full object-contain rounded-lg"
                />
                
                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full"
                    >
                      <ChevronLeft size={24} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full"
                    >
                      <ChevronRight size={24} />
                    </Button>
                  </>
                )}
              </div>

              {/* Image Counter */}
              <div className="text-center mt-4 text-foreground/60">
                {currentImageIndex + 1} of {project.images.length}
              </div>

              {/* Thumbnail Navigation */}
              {project.images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-accent" : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;