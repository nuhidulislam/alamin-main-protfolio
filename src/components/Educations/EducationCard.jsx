import { motion } from "framer-motion";

const EducationCard = () => {
  const educationData = [
    {
      title: "B.Sc. in Computer Science & Engineering",
      year: "2020 - Present",
      description:
        "Currently pursuing CSE, focusing on Data Structures, Algorithms, Software Engineering, Databases, Networking, and Artificial Intelligence.",
    },
    {
      title: "Self-Taught MERN Stack Developer",
      year: "2018 - Present",
      description:
        "Built expertise in React.js, Node.js, Express.js, and MongoDB. Developed scalable REST APIs, SPAs, authentication systems, dashboards, and admin panels.",
    },
    {
      title: "DevOps & Cloud Practitioner",
      year: "2021 - Present",
      description:
        "Mastered Docker for containerization, Jenkins for CI/CD pipelines, and AWS services (EC2, S3, Lambda). Skilled in Linux server administration.",
    },
    {
      title: "Generative AI & Automation Explorer",
      year: "2024 - Present",
      description:
        "Exploring LLM fine-tuning, agentic workflows, and automation projects with cutting-edge AI technologies.",
    },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 cursor-pointer py-4 xl:py-8">
      {educationData.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          key={index}
          className="tmponhover my_border p-12 rounded-[20px] shadow-md transition space-y-2"
          onMouseMove={handleMouseMove}
          style={{
            "--color-primary": "#fb1359",
            "--color-gray-2": "#1a1a1a",
          }}
        >
          <h1 className="font-bold text-white">{item.title}</h1>
          <p className="mr-4 font-bold">{item.year}</p>
          <p className="text-gray-200">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationCard;
