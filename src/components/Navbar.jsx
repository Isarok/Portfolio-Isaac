import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed lg:flex hidden items-center justify-start left-0 top-10 h-full  z-40">
      <div className="container_navbar mx-auto">
        <div className="max-w-[500px] h-full bg-black/20 w-[70px] backdrop-blur-2x1 flex flex-col items-center justify-between gap-y-6 rounded-xl py-2 ">
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="home"
            className="flex items-center justify-center w-[60px] h-[60px]"
          >
            <IoHomeOutline className="cursor-pointer text-xl" />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            className="flex items-center justify-center w-[60px] h-[60px]"
          >
            <MdOutlineMail className="cursor-pointer text-xl" />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="services"
            className="flex items-center justify-center w-[60px] h-[60px]"
          >
            <FaUserAlt className="cursor-pointer text-xl" />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="projects"
            className="flex items-center justify-center w-[60px] h-[60px]"
          >
            <BiCommentDetail className="cursor-pointer text-xl" />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            className="flex items-center justify-center w-[60px] h-[60px]"
          >
            <MdOutlineWorkOutline className="cursor-pointer text-xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
