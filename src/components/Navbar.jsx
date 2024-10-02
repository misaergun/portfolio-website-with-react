import logo from "../assets/nisaLogo.png";
import { FaLinkedin, FaGithub, FaMedium, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/m%C3%BCberra-nisa-erg%C3%BCn-856a0923b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/misaergun" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://medium.com/@nisaergun.21" target="_blank" rel="noopener noreferrer">
          <FaMedium />
        </a>
        <a href="https://www.instagram.com/misaergun/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
