import BannerSection from "./components/Banner/BannerSection";
import EducationExperience from "./components/Educations/EducationExperience";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import GetInTouch from "./components/GetInTouch/GetinTouch";
import LatestService from "./components/LatestService/LatestService";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import ServiceSection from "./components/Service/ServiceSection";
import MySkillSection from "./components/Skill/MySkillSection";
import SkillSection from "./components/Skill/SkillSection";
import SupportCom from "./components/SupportCom/SupportCOm";
import "./index.css";

const App = () => {
  return (
    <div className="bg-[#0F0F0F] h-full">
      <Navbar></Navbar>
      <BannerSection></BannerSection>
      <ServiceSection></ServiceSection>
      <Experience></Experience>
      <SkillSection></SkillSection>
      <LatestService></LatestService>
      <EducationExperience></EducationExperience>
      <SupportCom></SupportCom>
      <Portfolio></Portfolio>
      <MySkillSection></MySkillSection>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
    </div>
  );
};
export default App;
