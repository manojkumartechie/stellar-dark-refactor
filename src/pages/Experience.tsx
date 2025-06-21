import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, TrendingUp, Users, Code, Download } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Scientist",
      company: "TechCorp Financial",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading a team of 5 data scientists in developing ML models for fraud detection and risk assessment. Implemented end-to-end ML pipelines processing 10M+ transactions daily.",
      achievements: [
        "Reduced fraud losses by $50M annually through advanced ML models",
        "Improved model accuracy from 85% to 98.5% using ensemble methods",
        "Led cross-functional team of 12 members across 3 departments",
        "Published 3 research papers in top-tier ML conferences"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "Kubernetes", "Apache Spark"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Scientist",
      company: "FinanceAI Solutions",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed predictive models for credit scoring and portfolio optimization. Built real-time analytics dashboards for C-level executives.",
      achievements: [
        "Increased loan approval accuracy by 25% while reducing defaults by 18%",
        "Developed real-time risk monitoring system processing 1M+ events/hour",
        "Created executive dashboards used by 50+ stakeholders daily",
        "Mentored 3 junior data scientists and 2 interns"
      ],
      technologies: ["Python", "R", "PostgreSQL", "Docker", "Tableau"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Junior Data Analyst",
      company: "DataInsights Corp",
      location: "Boston, MA",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Performed statistical analysis and created data visualizations for business intelligence. Automated reporting processes and built ETL pipelines.",
      achievements: [
        "Automated 15+ manual reporting processes, saving 40 hours/week",
        "Built ETL pipelines processing 500GB+ data daily",
        "Created interactive dashboards increasing data adoption by 60%",
        "Completed advanced ML certification with 98% score"
      ],
      technologies: ["Python", "SQL", "Power BI", "Apache Airflow"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2017 - 2019",
      gpa: "3.9/4.0",
      achievements: [
        "Thesis: 'Deep Learning for Financial Time Series Prediction'",
        "Teaching Assistant for Machine Learning course (CS229)",
        "President of Data Science Student Association",
        "Winner of Stanford AI Hackathon 2018"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "MIT",
      location: "Cambridge, MA",
      period: "2013 - 2017",
      gpa: "3.8/4.0",
      achievements: [
        "Magna Cum Laude graduate",
        "Captain of Programming Competition Team",
        "Research Assistant in AI Lab for 2 years",
        "Dean's List for 6 consecutive semesters"
      ],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-MLS-2023-001"
    },
    {
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PDE-2022-001"
    },
    {
      name: "Certified Analytics Professional (CAP)",
      issuer: "INFORMS",
      date: "2021",
      credentialId: "CAP-2021-001"
    }
  ];

  const pageVariants = {
    initial: {
      opacity: 0,
      x: -100,
      rotateY: -90
    },
    in: {
      opacity: 1,
      x: 0,
      rotateY: 0
    },
    out: {
      opacity: 0,
      x: 100,
      rotateY: 90
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-indigo-900/30 to-purple-900/50 backdrop-blur-3xl" />
      
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
            Experience & Education
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            A comprehensive timeline of my professional journey, academic achievements, and continuous learning in data science and AI.
          </motion.p>

          {/* Download CV Button */}
          <motion.a
            href="https://drive.google.com/file/d/1I3trn1h04xdu1u-Exw6edlgC1PVmOi22/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600/50 hover:bg-blue-500/50 text-white rounded-lg transition-all duration-200 glass-morphism"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Download size={20} />
            Download Full CV
          </motion.a>
        </motion.div>

        {/* Professional Experience */}
        <motion.section 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 
            className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
            variants={itemVariants}
          >
            <TrendingUp className="w-8 h-8 text-blue-400" />
            Professional Experience
          </motion.h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="glass-morphism p-8 rounded-2xl relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0`}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <motion.h4 
                        className="text-2xl font-bold text-white mb-2"
                        whileHover={{ color: "#3b82f6" }}
                      >
                        {exp.title}
                      </motion.h4>
                      <motion.p 
                        className="text-xl text-blue-400 mb-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        {exp.company}
                      </motion.p>
                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-yellow-400" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li 
                            key={achIndex}
                            className="flex items-start gap-2 text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: achIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5 text-green-400" />
                        Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 
            className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
            variants={itemVariants}
          >
            <Users className="w-8 h-8 text-purple-400" />
            Education
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="glass-morphism p-8 rounded-2xl relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0`}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.h4 
                    className="text-xl font-bold text-white mb-2"
                    whileHover={{ color: "#8b5cf6" }}
                  >
                    {edu.degree}
                  </motion.h4>
                  <motion.p 
                    className="text-lg text-purple-400 mb-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    {edu.institution}
                  </motion.p>
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {edu.period}
                    </div>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
                      GPA: {edu.gpa}
                    </span>
                  </div>

                  <h5 className="text-lg font-semibold text-white mb-3">Achievements</h5>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <motion.li 
                        key={achIndex}
                        className="flex items-start gap-2 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: achIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 
            className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
            variants={itemVariants}
          >
            <Award className="w-8 h-8 text-yellow-400" />
            Certifications
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="glass-morphism p-6 rounded-xl text-center"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                <p className="text-gray-400 mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mb-2">{cert.date}</p>
                <p className="text-xs text-gray-600">ID: {cert.credentialId}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Experience;