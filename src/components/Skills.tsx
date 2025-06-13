
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

const SkillSphere = ({ text, position, color }) => {
  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[0, 0.5]}
    >
      <mesh position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={color} />
        <Text
          position={[0, 0, 0.6]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      </mesh>
    </Float>
  );
};

const Skills3D = () => {
  const skills = [
    { text: "Python", position: [-2, 1, 0], color: "#3776ab" },
    { text: "R", position: [2, 1, 0], color: "#276dc3" },
    { text: "SQL", position: [0, 2, 0], color: "#f29111" },
    { text: "TensorFlow", position: [-1, -1, 0], color: "#ff6f00" },
    { text: "PyTorch", position: [1, -1, 0], color: "#ee4c2c" },
    { text: "Pandas", position: [0, 0, 2], color: "#150458" },
    { text: "Scikit-learn", position: [0, 0, -2], color: "#f7931e" },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        {skills.map((skill, index) => (
          <SkillSphere key={index} {...skill} />
        ))}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Suspense>
    </Canvas>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "R", "JavaScript", "SQL", "Java", "C++"]
    },
    {
      title: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "LightGBM"]
    },
    {
      title: "Data Tools",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Tableau"]
    },
    {
      title: "Cloud & Big Data",
      skills: ["AWS", "Azure", "GCP", "Spark", "Hadoop", "Docker"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the full data science stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="h-96">
              <Skills3D />
            </div>
          </div>
          
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
