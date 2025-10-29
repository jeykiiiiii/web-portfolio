import { Card, CardContent } from "../components/ui/card.jsx";
import { Code, Palette, Database, Smartphone, Award, School } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { name: 'Frontend', icon: Code, items: [
      { name: 'React', level: 40 },
      { name: 'JavaScript', level: 40 },
      { name: 'TypeScript', level: 20 },
      { name: 'HTML/CSS', level: 60 }
    ]},
    { name: 'UI/UX', icon: Palette, items: [
      { name: 'TailwindCSS', level: 30 },
      { name: 'Figma', level: 30 },
      { name: 'shadcn/ui', level: 20 },
      { name: 'Responsive Design', level: 40 }
    ]},
    { name: 'Backend', icon: Database, items: [
      { name: 'Node.js', level: 40 },
      { name: 'MongoDB', level: 30 },
      { name: 'REST APIs', level: 40 },
    ]},
    { name: 'Mobile', icon: Smartphone, items: [
      { name: 'React Native', level: 10 },
      { name: 'Flutter', level: 10 }
    ]},
  ];

  const education = [
    {
      school: "Cavite State University – Bacoor Campus",
      location: "Sampaguita, Soldiers IV, Bacoor, Cavite",
      period: "2023-present",
      description: "Bachelor of Science in Computer Science"
    },
    {
      school: "LPCNSHS-Doña Josefa Campus",
      location: "Dona Josefa Ave, Almanza Uno, Las Pinas City",
      period: "2019-2021",
      description: "Senior High School - ABM Strand"
    },
    {
      school: "Golden Acres National High School",
      location: "Marcos Alvares Avenue Talon I, Las Piñas City",
      period: "2015-2019",
      description: "Junior High School"
    },
    {
      school: "Golden Acres-Moonwalk Elementary School",
      location: "Mansanitas Street Golden Acres Talon I, Las Piñas City",
      period: "2009-2015",
      description: "Elementary Education"
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
        Hey there! I’m Jake, a tech enthusiast and student who loves learning by building. I enjoy experimenting with code, designing simple systems, and turning small ideas into working applications. Every project I make helps me grow and discover something new about technology.
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
              { id: 'education', label: 'Education', icon: School }
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

              {activeTab === 'education' && (
                <motion.div
                  key="education"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ x: 10 }}
                    >
                      <Card className="border-2 hover:border-primary/30 transition-all duration-300 bg-background/80 backdrop-blur-sm">
                        <CardContent className="p-8">
                          <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                              <motion.div 
                                whileHover={{ scale: 1.1 }}
                                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"
                              >
                                <School className="text-primary" size={24} />
                              </motion.div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-xl text-primary mb-1">{edu.school}</h3>
                                <p className="text-foreground/80 font-medium text-sm mb-2">{edu.location}</p>
                                <p className="text-foreground/60 text-sm mb-3">{edu.period}</p>
                                <p className="text-foreground/70">{edu.description}</p>
                              </div>
                            </div>
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
