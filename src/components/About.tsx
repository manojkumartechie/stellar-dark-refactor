
import { motion } from "framer-motion";
import { TrendingUp, Brain, PieChart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Dedicated Data Analyst with extensive experience in developing predictive analytics platforms, 
              fraud detection systems, and financial risk models. Specialized in leveraging Python, machine learning, 
              and big data technologies to drive data-driven decision making.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Proven track record in implementing end-to-end data solutions from ETL pipelines to interactive 
              dashboards, with expertise in cloud deployment and real-time analytics systems.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span>📞 +91 7826807488</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span>✉️ manojkumar9384@outlook.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span>📍 Dindigul, Tamil Nadu, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Core Strengths</h3>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-start space-x-4 bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <TrendingUp className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" style={{ filter: 'none' }} />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Data Analytics</h4>
                  <p className="text-gray-300">Advanced statistical analysis and predictive modeling with expertise in Python, R, and SQL for extracting actionable insights from complex datasets.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start space-x-4 bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <Brain className="w-8 h-8 text-purple-400 mt-1 flex-shrink-0" style={{ filter: 'none' }} />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Machine Learning</h4>
                  <p className="text-gray-300">Deep learning, neural networks, time series forecasting, and risk assessment using TensorFlow, PyTorch, and scikit-learn.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start space-x-4 bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <PieChart className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" style={{ filter: 'none' }} />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Financial Analytics</h4>
                  <p className="text-gray-300">Portfolio optimization, algorithmic trading, fraud detection, and comprehensive risk management solutions for financial institutions.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
