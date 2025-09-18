import { motion } from "framer-motion";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import EducationCard from "./EducationCard";

const experienceData = [
  {
    company: "Freelance / Remote (5+ Years)",
    role: "Full Stack Developer (MERN)",
    description:
      "Developed scalable web apps with React, Redux, Node, Express, and MongoDB. Designed authentication, role-based systems, dashboards, and APIs.",
  },
  {
    company: "CloudOps Team",
    role: "DevOps Engineer",
    description:
      "Implemented CI/CD pipelines with Jenkins, containerized applications using Docker, and managed AWS infrastructure (EC2, S3, Lambda).",
  },
  {
    company: "AI Research Projects",
    role: "Generative AI Developer",
    description:
      "Worked on LLM training, agentic workflows, and automation systems for smart and intelligent business solutions.",
  },
];

const projectData = [
  {
    name: "Youline API (Social App)",
    description:
      "iOS app backend with authentication, media storage (S3), and scalable deployment on AWS EC2.",
    tech: "Node, Express, MongoDB, AWS",
  },
  {
    name: "Blog API",
    description:
      "Auth, Roles, Followers, Categories, Tags, Blogs, Notifications, Likes, Comments, Analytics.",
    tech: "Node, Express, MongoDB",
  },
  {
    name: "School Management System",
    description:
      "Admins, Teachers, Students, Parents, Attendance, Exams, Results, Events, Notifications.",
    tech: "Node, Express, MongoDB",
  },
  {
    name: "MERN e-Commerce (PWA)",
    description:
      "Full-stack e-commerce platform with cart, orders, payments, authentication, Redux state management.",
    tech: "React, Node, Express, MongoDB",
  },
  {
    name: "Chat Application (Real-Time)",
    description:
      "Socket.io powered real-time chat app built with Express.js and MongoDB following MVC pattern.",
    tech: "Express, MongoDB, Socket.io",
  },
];

const EducationExperience = () => {
  return (
    <section className="education-experience tmp-section-gapTop py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          title={"Education & Experience"}
          subTitle={"Empowering Creativity"}
          subtitle1={"through"}
          descriptions={
            "Blending Computer Science education with practical development and cloud experience, I’ve built modern solutions across web, DevOps, and AI domains."
          }
        />

        {/* Education Section */}
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false }}
            className="text-4xl font-extrabold text-white mb-8 flex items-center gap-2"
        >
          Education
          <img
            src="/images/custom-line/custom-line.png"
            alt="custom-line"
            className="inline-block"
          />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <EducationCard />
        </motion.div>

        {/* Experience Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mt-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: false }}
              className="text-4xl font-extrabold text-white mb-8 flex items-center gap-2"
            >
              Experiences
              <img
                src="/images/custom-line/custom-line.png"
                alt="custom-line"
                className="inline-block"
              />
            </motion.h2>

            {experienceData.map((exp, index) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                key={index}
                className="mb-8 space-y-4 py-5 rounded-[20px] shadow-md transition"
              >
                <p className="uppercase text-md primary mb-2">experience</p>
                <h2 className="text-lg font-bold text-white">{exp.company}</h2>
                <h3 className="text-md font-semibold text-gray-300">
                  {exp.role}
                </h3>
                <p className="text-gray-200 mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              className="rounded-lg w-full h-auto object-cover"
              src="/images/experiences/expert-img.jpg"
              alt="expert-img"
            />
          </motion.div>
        </div>

        {/* Projects Section */}
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl  mt-16 text-white font-extrabold mb-8 flex items-center gap-2"
        >
          My Projects 
          <img
            src="/images/custom-line/custom-line.png"
            alt="custom-line"
            className="inline-block"
          />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projectData.map((proj, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              key={index}
              className="p-6 rounded-[20px] shadow-md bg-gray-900 space-y-2"
            >
              <h2 className="text-lg font-bold text-white">{proj.name}</h2>
              <p className="text-gray-300">{proj.description}</p>
              <p className="text-sm text-pink-400">Tech: {proj.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
