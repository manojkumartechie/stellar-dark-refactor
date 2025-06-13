
import { motion } from "framer-motion";
import { Code, Brain, BarChart3, Cloud, Settings, Database, Calculator, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & DBs",
    icon: Code,
    skills: ["Python", "R", "Java", "SQL (PL/SQL)", "MongoDB", "XML"]
  },
  {
    title: "Data Analysis & ML",
    icon: Brain,
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "CUDA"]
  },
  {
    title: "Visualization & BI",
    icon: BarChart3,
    skills: ["Tableau", "Power BI", "Excel (VBA)"]
  },
  {
    title: "Big Data & Cloud",
    icon: Cloud,
    skills: ["Apache Spark", "Hadoop", "AWS (S3, EC2)"]
  },
  {
    title: "DevOps & Tools",
    icon: Settings,
    skills: ["GitHub", "Linux Bash", "Docker", "Kubernetes", "Airflow", "Kafka"]
  },
  {
    title: "Data Handling",
    icon: Database,
    skills: ["Data Cleaning", "Wrangling", "ETL", "Data Quality"]
  },
  {
    title: "Statistics",
    icon: Calculator,
    skills: ["Regression", "Hypothesis Testing", "A/B Testing", "Trend Analysis"]
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Teamwork", "Communication", "Time Management", "Learning"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the full data science and AI technology stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm mr-2 mb-2 border border-slate-600/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
