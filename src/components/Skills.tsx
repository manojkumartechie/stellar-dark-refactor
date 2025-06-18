import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, BarChart3, Cloud, Settings, Database, Calculator, Users } from 'lucide-react';

const Skills = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the full data science and AI technology stack
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass-morphism p-6 card-3d group"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="inline-block px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm mr-2 mb-2 border border-slate-600/50 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;