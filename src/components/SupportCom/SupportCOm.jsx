import { motion } from "framer-motion";

const logos = [
  'company-logo-1.svg',
  'company-logo-2.svg',
  'company-logo-3.svg',
  'company-logo-4.svg',
  'company-logo-5.svg',
  'company-logo-6.svg',
  'company-logo-7.svg',
  'company-logo-8.svg',
];

const SupportCom = () => {
  return (
    <div className="our-supported-company-area tmp-section-gapTop pt-10 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6">
          {logos.map((logo, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: false }}
              key={index}
              className="border border-gray-900 p-12 flex justify-center items-center"
            >
              <img
                src={`/images/our-supported-company/${logo}`}
                alt={`Company Logo ${index + 1}`}
                className="h-16 w-[200px] object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportCom;
