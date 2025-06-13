
import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Database, BarChart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: User,
      title: "Data Scientist",
      description: "5+ years of experience in data analysis and machine learning"
    },
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "Proficient in Python, R, JavaScript, and modern frameworks"
    },
    {
      icon: Database,
      title: "Database Expert",
      description: "Expert in SQL, NoSQL, and big data technologies"
    },
    {
      icon: BarChart,
      title: "Analytics Specialist",
      description: "Advanced statistical analysis and data visualization"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate data scientist with expertise in machine learning, statistical analysis, 
            and building scalable data solutions that drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">
                <feature.icon size={48} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-300 mb-4">
                Started as a software developer and evolved into a data scientist, 
                combining technical expertise with analytical thinking to solve 
                complex business problems.
              </p>
              <p className="text-gray-300">
                Specialized in predictive modeling, deep learning, and creating 
                data-driven solutions that have impacted millions of users across 
                various industries.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects Completed", value: "50+" },
                { label: "Years Experience", value: "5+" },
                { label: "Technologies", value: "20+" },
                { label: "Client Satisfaction", value: "99%" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-gray-700/30 rounded-lg"
                >
                  <div className="text-2xl font-bold text-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
