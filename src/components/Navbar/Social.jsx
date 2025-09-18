import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/devnazmul",
  },
  { name: "Twitter", icon: <FaTwitter />, link: "https://x.com/pronazmul?fbclid=IwY2xjawM3M11leHRuA2FlbQIxMABicmlkETF1ZlVXUVk2TlIxUU5MR1RSAR5-wYDoqv9GZqc8ZYww-yZZVariZHuuKs2pXO2B5NiSpuM7tve6C_7qxtbLBw_aem_oROaOoGpADydcA87xxN2sQ" },
  {
    name: "Instagram",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@m.nazmulhuda",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/pronazmul/?fbclid=IwY2xjawM3Mv5leHRuA2FlbQIxMABicmlkETF1ZlVXUVk2TlIxUU5MR1RSAR5u0TAFx5sdyK4UqamcfykN9RA5-4tCYonEO436I-speMBd6PqHLOCjw1ic8A_aem_WHGRoEswNBhHG3A3-54qfQ",
  },
];

const Social = ({ mobile }) => {
  return (
    <div className={`${mobile ? "flex" : "hidden xl:flex items-center"}`}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden text-white bg-[#262323] rounded-full p-3 text-xl flex items-center justify-center mx-2 group"
        >
          {/* Background hover "pop effect" */}
          <span className="absolute inset-0 rounded-full scale-0 bg-[#fb1359] transition-transform duration-500 ease-out group-hover:scale-100 z-0" />

          {/* Icon (z-10 to stay above the expanding background) */}
          <span className="relative z-10 text-sm">{social.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default Social;
