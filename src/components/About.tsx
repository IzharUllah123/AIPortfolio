import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Cpu, Sparkles } from "lucide-react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "20+", label: "ML Models Deployed" },
  { value: "10M+", label: "Predictions Served" },
];

const highlights = [
  { icon: Brain, label: "Deep Learning" },
  { icon: Sparkles, label: "Gen AI & LLMs" },
  { icon: Cpu, label: "MLOps" },
  { icon: Code, label: "Full Stack" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="text-primary font-mono text-sm mb-4 block"
              >
                // About Me
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Transforming Ideas into{" "}
                <span className="text-gradient">Intelligent Solutions</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                I'm an AI Engineer passionate about building systems that learn and adapt. 
                With a background in computer science and mathematics, I specialize in 
                developing production-ready machine learning solutions that solve real-world problems.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground leading-relaxed mb-8"
              >
                Currently focused on Large Language Models, computer vision applications, 
                and building scalable ML infrastructure. I believe in writing clean, 
                maintainable code and creating AI systems that are both powerful and interpretable.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm"
                  >
                    <item.icon size={16} className="text-primary" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-gradient-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
