import { Card, CardContent } from "../components/ui/card.jsx";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Your actual contact information
  const contactInfo = {
    email: "desturajakemarlon@gmail.com",
    phone: "09561581530",
    location: "Las Pinas City, Philippines"
  };

  // Your social links
  const socialLinks = [
    { 
      name: "GitHub", 
      icon: Github, 
      url: "https://github.com/Jeykiiiiii" 
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://www.linkedin.com/in/jake-marlon-destura-1b7b14396/" 
    },
    { 
      name: "Facebook", 
      icon: Facebook, 
      url: "https://www.facebook.com/jeykiiiiii/" 
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Let’s Connect
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto"
        >
          Got an idea? Let’s explore how we can make it happen together.
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div variants={itemVariants}>
              <Card className="border-2 hover:border-primary/20 transition-colors">
                <CardContent className="p-6 space-y-6">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-foreground/60">{contactInfo.email}</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-foreground/60">{contactInfo.phone}</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-foreground/60">{contactInfo.location}</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <Card className="border-2 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Follow Me</h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {socialLinks.map((social) => (
                      <motion.div
                        key={social.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 min-w-0"
                      >
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full gap-2 px-3"
                          onClick={() => window.open(social.url, '_blank')}
                        >
                          <social.icon size={16} />
                          <span className="truncate">{social.name}</span>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div variants={itemVariants}>
              <Card className="border-2">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div 
                        whileFocus={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label htmlFor="name" className="text-sm font-medium">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                          className="focus:border-primary focus:ring-primary"
                        />
                      </motion.div>
                      <motion.div 
                        whileFocus={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label htmlFor="email" className="text-sm font-medium">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className="focus:border-primary focus:ring-primary"
                        />
                      </motion.div>
                    </div>

                    <motion.div 
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Project Discussion"
                          className="focus:border-primary focus:ring-primary"
                        />
                    </motion.div>

                    <motion.div 
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell me about your project..."
                        rows={6}
                        className="focus:border-primary focus:ring-primary resize-none"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="w-full gap-2 bg-accent hover:bg-accent/90"
                      >
                        <motion.div
                          animate={isSubmitting ? { rotate: 360 } : {}}
                          transition={isSubmitting ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
                        >
                          <Send size={16} />
                        </motion.div>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;