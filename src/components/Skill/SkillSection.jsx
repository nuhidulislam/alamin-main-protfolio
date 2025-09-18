import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = {
  frontend: [
    { label: "React.js", value: 95 },
    { label: "Next.js", value: 85 },
    { label: "JavaScript (ES6+)", value: 90 },
    { label: "Redux / RTK Query", value: 85 },
    { label: "Tailwind CSS", value: 90 },
  ],
  backend: [
    { label: "Node.js", value: 95 },
    { label: "Express.js", value: 90 },
    { label: "MongoDB", value: 85 },
    { label: "REST APIs", value: 95 },
    { label: "Authentication (JWT/OAuth)", value: 80 },
  ],
  devops: [
    { label: "Docker", value: 80 },
    { label: "Jenkins (CI/CD)", value: 75 },
    { label: "Linux Server", value: 85 },
    { label: "Nginx", value: 70 },
    { label: "AWS (EC2, S3, Lambda)", value: 80 },
  ],
  emerging: [
    { label: "Generative AI", value: 70 },
    { label: "Model Training", value: 65 },
    { label: "Agentic Workflows", value: 60 },
  ],
};

const SkillProgressBar = ({ label, value, index }) => {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    const timeout = setTimeout(() => setWidth(`${value}%`), 200 + index * 150);
    return () => clearTimeout(timeout);
  }, [value, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <h6 className="text-white text-sm font-semibold mb-2 tracking-wide">
        {label}
      </h6>
      <div className="w-full h-3 bg-gray-800 rounded overflow-hidden">
        <div
          className="h-full bg-[#fb1359] rounded transition-all duration-1000 ease-out relative shadow-lg shadow-[#fb1359]/50"
          style={{ width }}
        >
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white">
            {value}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#fb1359] pl-4">
      {title}
    </h2>
    {skills.map((skill, i) => (
      <SkillProgressBar
        key={i}
        label={skill.label}
        value={skill.value}
        index={i}
      />
    ))}
  </motion.div>
);

const SkillSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-12 bg-gray-900 rounded-3xl border border-[#fb1359]/20">
      <SkillCategory title="Frontend Skills" skills={skills.frontend} />
      <SkillCategory title="Backend Skills" skills={skills.backend} />
      <SkillCategory title="DevOps & Cloud" skills={skills.devops} />
      <SkillCategory title="Emerging Tech" skills={skills.emerging} />
    </div>
  );
};

export default SkillSection;
