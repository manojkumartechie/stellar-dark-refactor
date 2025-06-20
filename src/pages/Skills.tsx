import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, BarChart3, Cloud, Settings, Database, Calculator, Users } from 'lucide-react';

const Skills = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 100,
      scale: 0.8
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: -100,
      scale: 1.2
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  const skillCategories = [
    {
      title: "Programming & DBs",
      icon: Code,
      skills: ["Python", "R", "Java", "SQL (PL/SQL)", "MongoDB", "XML"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Analysis & ML",
      icon: Brain,
      skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "CUDA"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Visualization & BI",
      icon: BarChart3,
      skills: ["Tableau", "Power BI", "Excel (VBA)"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Big Data & Cloud",
      icon: Cloud,
      skills: ["Apache Spark", "Hadoop", "AWS (S3, EC2)"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      skills: ["GitHub", "Linux Bash", "Docker", "Kubernetes", "Airflow", "Kafka"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Data Handling",
      icon: Database,
      skills: ["Data Cleaning", "Wrangling", "ETL", "Data Quality"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Statistics",
      icon: Calculator,
      skills: ["Regression", "Hypothesis Testing", "A/B Testing", "Trend Analysis"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem Solving", "Teamwork", "Communication", "Time Management", "Learning"],
      color: "from-rose-500 to-pink-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen py-20 relative overflow-hidden"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Gradient Blur Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/40 to-pink-900/30 backdrop-blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Comprehensive expertise across the full data science and AI technology stack
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass-morphism p-6 card-3d group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10`}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <motion.div 
                    className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-3`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360,
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {category.title}
                  </motion.h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="inline-block px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm mr-2 mb-2 border border-slate-600/50 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-200"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                        y: -2
                      }}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        delay: 0.5 + index * 0.1 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;