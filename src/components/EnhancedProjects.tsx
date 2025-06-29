import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from 'gsap';
import { Github, ExternalLink, Sparkles, Shield, TrendingUp, BarChart3, Brain, Activity } from 'lucide-react';

const EnhancedProjects: React.FC = () => {
  const { registerRef, staggerReveal, hoverScale, hoverGlow, hoverLift, spotlight } = useGSAP();
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Synthia - Synthetic Financial Data Generator",
      category: "ai",
      description: "A generative AI platform that creates high-fidelity, privacy-preserving synthetic financial data using GANs and LLMs for training ML models without exposing sensitive customer information.",
      technologies: ["GANs", "LLMs", "Python", "TensorFlow", "PyTorch", "AWS"],
      github: "https://github.com/manojkumartechie/synthia-ai",
      demo: "#",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-500",
      businessImpact: "Reduced data privacy compliance costs by 60% and accelerated ML model development by 3x",
      metrics: {
        accuracy: "98.5%",
        performance: "40% faster",
        cost_savings: "$2.3M annually"
      }
    },
    {
      id: 2,
      title: "QuantumLeap - Explainable Credit Scoring",
      category: "fintech",
      description: "Advanced credit scoring model incorporating alternative data sources with Explainable AI (XAI) to provide highly accurate risk scores and transparent decision-making.",
      technologies: ["XGBoost", "SHAP", "LIME", "Python", "Apache Spark", "Kafka"],
      github: "https://github.com/manojkumartechie/quantumleap-credit",
      demo: "#",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500",
      businessImpact: "Improved loan approval accuracy by 25% while reducing default rates by 18%",
      metrics: {
        accuracy: "94.2%",
        precision: "91.8%",
        recall: "89.5%"
      }
    },
    {
      id: 3,
      title: "Cerberus - Multi-Layered Fraud Detection",
      category: "security",
      description: "Real-time fraud detection engine analyzing credit, debit, and trading transactions using supervised and unsupervised ML models to detect known and emerging fraud patterns.",
      technologies: ["Graph Neural Networks", "Autoencoders", "Kafka", "Redis", "Python"],
      github: "https://github.com/manojkumartechie/cerberus-fraud",
      demo: "#",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      businessImpact: "Prevented $50M in fraudulent transactions while reducing false positives by 35%",
      metrics: {
        detection_rate: "99.1%",
        false_positive: "0.8%",
        latency: "< 50ms"
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'fintech', label: 'FinTech' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'security', label: 'Security' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    // Stagger reveal projects
    const projectIds = filteredProjects.map(p => `project-${p.id}`);
    staggerReveal(projectIds, 0.2);
  }, [filter, staggerReveal]);

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
    spotlight(`project-${projectId}`, '#3b82f6');
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={(el) => registerRef(`project-${project.id}`, el)}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
              initial={{ opacity: 0, y: 100, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                scale: 1.02
              }}
              {...hoverGlow(`project-${project.id}`, '#3b82f6')}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30`} />
              </div>

              <div className="p-6 space-y-4">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2 cursor-pointer"
                  onClick={() => handleProjectClick(project.id)}
                  whileHover={{ color: '#3b82f6' }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-lg transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600/50 hover:bg-blue-500/50 text-white rounded-lg transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedProjects; 