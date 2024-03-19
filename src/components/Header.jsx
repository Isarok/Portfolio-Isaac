/* const Header = () => {
  return (
    <div className="py-12 ">
      <div className="container mx-auto">
        <div className="flex h-8 w-full justify-around items-center ">
          <span className="text-lg font-bold">{"Isaac Garcia Romero"}</span>

          <button className="btn btn-lg rounded-full bg-[#5b21b6] px-6 py-2 transition-colors hover:text-[#5b21b6] hover:bg-transparent">
            Contactame
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header; */

const Header = () => {
  const nombre = "Isaac Garcia Romero";
  const email = "isaac.lucerito@gmail.com"; // Reemplaza con tu dirección de email

  return (
    <div className="py-12 ">
      <div className="container mx-auto">
        <div className="flex h-8 w-full justify-around items-center ">
          <span className="text-xl font-bold">{nombre}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
