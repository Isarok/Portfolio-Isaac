import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const sentences = (
    <div className=" max-w-1200px py-[20vh] xl:min-h-[80vh] flex justify-center items-center h-screen">
      <h1 className="Center text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[30px] text-center text-cyan-400">
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
          className="text-cyan-300 "
          wrapper="span"
          repeat={Infinity }
        />
      </h1>
    </div>
  );

  return (
    <div className="py-12">
        <div className="flex h-8 max-w-1000px justify-around items-center">
          <p className="text-xl font-semibold">{sentences}</p>
        </div>
    </div>
  );
};

export default Header;
