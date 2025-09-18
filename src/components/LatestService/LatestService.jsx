import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";

const LatestService = () => {
  return (
    <section className="py-8 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="w-full sm:w-3/4 mx-auto text-center space-y-4 py-4">
          <SectionHeader
            title={"Latest Services"}
            subTitle={"Inspiring The World One"}
            subtitle1={"Project"}
            descriptions={
              "Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational"
            }
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10">
          <ServiceCard />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false }}
            className="col-lg-6 w-full sm:w-1/2 flex items-center justify-center"
          >
            <img
              className="rounded-[100px] w-full h-auto"
              src="/profile.jpeg"
              alt="latest-user-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LatestService;
