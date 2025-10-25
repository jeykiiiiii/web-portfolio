// About.jsx
import { Card, CardContent } from "../components/ui/card.jsx";
import { Code, Palette, Database, Smartphone, Award, Calendar } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { name: 'Frontend', icon: Code, items: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 95 }
    ]},
    { name: 'UI/UX', icon: Palette, items: [
      { name: 'TailwindCSS', level: 90 },
      { name: 'Figma', level: 75 },
      { name: 'shadcn/ui', level: 85 },
      { name: 'Responsive Design', level: 95 }
    ]},
    { name: 'Backend', icon: Database, items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'REST APIs', level: 85 }
    ]},
    { name: 'Mobile', icon: Smartphone, items: [
      { name: 'React Native', level: 75 },
      { name: 'Expo', level: 70 },
      { name: 'PWA', level: 80 }
    ]},
  ];

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Developed and maintained web applications using React and TypeScript.",
      achievements: ["Improved performance by 40%", "Led a team of 3 developers", "Implemented CI/CD pipeline"]
    },
    {
      title: "Web Developer Intern",
      company: "Startup Inc",
      period: "2021 - 2022",
      description: "Built responsive websites and collaborated with design teams.",
      achievements: ["Built 10+ client websites", "Reduced load time by 60%", "Implemented responsive designs"]
    }
  ];

  const education = [
    {
      degree: "BS in Computer Science",
      school: "University of Technology",
      period: "2018-2022",
      gpa: "3.8/4.0",
      achievements: ["Dean's List", "Tech Club President", "Hackathon Winner"]
    },
    {
      degree: "Web Development Bootcamp",
      school: "Code Academy",
      period: "2021",
      achievements: ["Top 5% of cohort", "Built 15+ projects", "Mentored 20+ students"]
    }
  ];

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          About Me
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto"
        >
          Passionate developer with 2+ years of experience creating digital solutions 
          that make a difference.
        </motion.p>

        <div className="max-w-6xl mx-auto">
          {/* Enhanced Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="flex space-x-1 mb-12 bg-background/80 backdrop-blur-sm p-2 rounded-2xl w-fit mx-auto shadow-lg border"
          >
            {[
              { id: 'skills', label: 'Skills', icon: Award },
              { id: 'experience', label: 'Experience', icon: Calendar },
              { id: 'education', label: 'Education', icon: Award }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-xl transition-all duration-300 capitalize flex items-center gap-3 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'hover:bg-muted/50 text-foreground/70'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Enhanced Tab Content */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="border-2 hover:border-primary/30 transition-all duration-300 bg-background/80 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center"
                          >
                            <skill.icon className="text-primary" size={28} />
                          </motion.div>
                          <h3 className="font-semibold text-lg mb-6 text-center">{skill.name}</h3>
                          <div className="space-y-4">
                            {skill.items.map((item, itemIndex) => (
                              <motion.div 
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                                className="space-y-2"
                              >
                                <div className="flex justify-between text-sm">
                                  <span>{item.name}</span>
                                  <span className="text-foreground/60">{item.level}%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.level}%` }}
                                    transition={{ delay: index * 0.1 + itemIndex * 0.05 + 0.3, duration: 0.8 }}
                                    className="bg-primary h-2 rounded-full"
                                  />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'experience' && (
                <motion.div
                  key="experience"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ x: 10 }}
                    >
                      <Card className="border-2 hover:border-primary/30 transition-all duration-300 bg-background/80 backdrop-blur-sm">
                        <CardContent className="p-8">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="font-semibold text-xl text-primary">{exp.title}</h3>
                              <p className="text-foreground/80 font-medium">{exp.company}</p>
                              <p className="text-foreground/60 text-sm mt-1">{exp.period}</p>
                              <p className="mt-4 text-foreground/70">{exp.description}</p>
                              
                              <div className="mt-4 space-y-2">
                                {exp.achievements.map((achievement, achIndex) => (
                                  <motion.div
                                    key={achIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.2 + achIndex * 0.1 + 0.5 }}
                                    className="flex items-center gap-3 text-sm"
                                  >
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    {achievement}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'education' && (
                <motion.div
                  key="education"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="border-2 hover:border-primary/30 transition-all duration-300 bg-background/80 backdrop-blur-sm h-full">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg text-primary mb-2">{edu.degree}</h3>
                          <p className="text-foreground/80 font-medium">{edu.school}</p>
                          <p className="text-foreground/60 text-sm mb-4">{edu.period}</p>
                          {edu.gpa && (
                            <p className="text-foreground/70 mb-4">GPA: {edu.gpa}</p>
                          )}
                          
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, achIndex) => (
                              <motion.div
                                key={achIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 + achIndex * 0.1 + 0.3 }}
                                className="flex items-center gap-3 text-sm text-foreground/70"
                              >
                                <Award size={16} className="text-accent" />
                                {achievement}
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;