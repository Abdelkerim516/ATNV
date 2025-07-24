import { Link } from "react-router-dom";
import myBackgroundImage from "../assets/hero1.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${myBackgroundImage})` }}
    >
      <div className="absolute inset-0 " />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          La non-violence est le respect absolu de la personne humaine et de toute la création.
        </h1>

        <p className="text-lg md:text-xl mb-8">
          Engagez-vous pour un monde plus juste, libre et solidaire. Ensemble, défendons les droits humains.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/faire_un_don">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition duration-300">
              Faire un don
            </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
