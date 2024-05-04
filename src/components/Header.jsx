import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const nombre = (
    <div className=" py-[20vh] xl:min-h-[80vh] flex justify-center items-center h-screen">
      <span className="Center text-center text-cyan-400">
        <TypeAnimation
          sequence={[
            "Cada experto en algún momento fue un principiante. - Helen Hayes",

            "No importa cuántas veces fracases. Debes seguir intentándolo. Esto es lo que diferencia a los grandes de los mediocres.- Albert Einstein",

            "El aprendizaje es un tesoro que seguirá siendo nuestro hasta el último aliento. - Mahatma Gandhi",

            "No es la más fuerte de las especies la que sobrevive, ni la más inteligente, sino la que responde mejor al cambio.- Charles Darwin",

            "Nunca es demasiado tarde para ser quien podrías haber sido.- George Eliot",

            "No se trata de rehacerse, sino de deshacerse de lo que ya no te hace bien.- Oprah Winfrey",
          ]}
          speed={0.1}
          className="text-cyan-400"
          wrapper="span"
          repeat={Infinity}
        />
      </span>
    </div>
  );

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <div className="flex h-8 w-full justify-around items-center">
          <span className="text-xl font-semibold">{nombre}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
