import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Neural Search Engine",
    description: "Semantic search platform using BERT embeddings and vector databases for enterprise document retrieval with 98% accuracy.",
    tags: ["Python", "BERT", "Pinecone", "FastAPI"],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "AI Code Assistant",
    description: "Fine-tuned LLM for code completion and explanation, integrated with VS Code extension serving 10k+ developers.",
    tags: ["LangChain", "OpenAI", "TypeScript", "RAG"],
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Real-time Object Detection",
    description: "Computer vision system for manufacturing defect detection, reducing quality control time by 70%.",
    tags: ["PyTorch", "YOLO", "OpenCV", "Docker"],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "ML Pipeline Orchestrator",
    description: "End-to-end MLOps platform for automated model training, versioning, and deployment at scale.",
    tags: ["Kubernetes", "MLflow", "Airflow", "AWS"],
    gradient: "from-accent/20 to-primary/20",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm mb-4 block"
            >
              // Featured Work
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Recent Projects
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={18} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ArrowUpRight size={18} />
                      </motion.button>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-xs font-mono text-muted-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
