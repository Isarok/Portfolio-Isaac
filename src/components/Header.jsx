import logo from "../img/logoIsarok.png";

const Header = () => {
  return (
    <div className="py-12 ">
      <div className="container mx-auto">
        <div className="flex h-8 w-full justify-around items-center ">
          <a href="#">
            <img src={logo} alt="logo" className="lg:w-[130px] w-[100px]" />
          </a>

          <button className="btn btn-lg rounded-full bg-[#5b21b6] px-6 py-2 transition-colors hover:text-[#5b21b6] hover:bg-transparent">
            Contactame
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
