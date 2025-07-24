import { Link } from "react-router-dom";
import sale1 from "../assets/sal1.jpg";
import sale2 from "../assets/sale2.jpg";
import espace from "../assets/espace.jpg"
const Nos_services = () => {
  return (
   <>
   <div className="h-24 w-full border-2 flex items-center justify-center bg-emerald-500 text-white">
     <p className="text-2xl">Bienvenue sur la page des services ATNV</p>
   </div>
   <div className="py-6 px-4 mx-auto max-w-screen-md">
     <h2 className="mb-6 text-4xl font-extrabold text-center text-gray-900">
       Nos Services
     </h2>
    <div className="mb-6 font-light text-left text-blue-500 sm:text-xl ">
      <h2 className="text-2xl font-bold">Reservation de salle</h2>
      <p className="mb-6 font-light text-left text-gray-500 sm:text-xl">
     Chez ATNV, nous mettons à votre disposition des espaces professionnels et équipés, spécialement conçus pour répondre aux besoins des formations, séminaires, ateliers et conférences. Que vous soyez un organisme de formation, une entreprise ou un  formateur indépendant, nos salles modulables offrent un environnement propice à l’apprentissage et à la productivité.
    </p>
    </div>
    <div className="flex flex-wrap justify-between gap-6">
  {/* Carte 1 */}
  <div className="rounded overflow-hidden shadow-lg flex flex-col w-full md:w-[48%]">
    <div className="relative">
      <img className="w-full h-64 object-cover"
        src={sale1}
        alt="Salle"/>
    </div>
    <div className="px-6 py-4 flex-1 flex flex-col justify-between">
      
      <div className="flex justify-between mt-auto gap-2">
<Link to="/voir_plus">
  <button className="text-white bg-indigo-600 px-3 py-1 rounded hover:bg-white hover:text-indigo-600 border transition">Voir plus</button>
</Link>
<Link to="/reserver">
  <button className="text-white bg-green-600 px-3 py-1 rounded hover:bg-white hover:text-green-600 border transition">Réserver</button>
</Link>
      </div>
    </div>
  </div>

  

  {/* Carte 2 – copie identique pour l'exemple */}
  <div className="rounded overflow-hidden shadow-lg flex flex-col w-full md:w-[48%]">
    <div className="relative">
      <img className="w-full h-64 object-cover"
        src={sale2}
        alt="Salle"/>
    </div>
    <div className="px-6 py-4 flex-1 flex flex-col justify-between">
     
      <div className="flex justify-between mt-auto gap-2">
       <Link to="/voir_plus">
         <button className="text-white bg-indigo-600 px-3 py-1 rounded hover:bg-white hover:text-indigo-600 border transition">Voir plus</button>
       </Link>
        <Link to="/reserver">
          <button className="text-white bg-green-600 px-3 py-1 rounded hover:bg-white hover:text-green-600 border transition">Réserver</button>
        </Link>
      </div>
    </div>
  </div>
</div>
</div>
<div className="py-6 px-4 mx-auto max-w-screen-md">
    
    <div className="mb-6 font-light text-left text-blue-500 sm:text-xl ">
      <h2 className="text-2xl font-bold">Location de l’espace</h2>
      <p className="mb-6 font-light text-left text-gray-500 sm:text-xl">
ATNV est votre partenaire de confiance pour la location d’espaces dédiés aux cérémonies. Que ce soit pour un mariage élégant, une réception d’anniversaire, une fête de baptême ou tout autre événement mémorable, nous mettons à votre disposition des lieux exceptionnels, modulables et entièrement équipés pour faire de votre journée un moment inoubliable.    </p>
    </div>
    <div className="">
      <img src={espace} alt="" />

    </div>
     <Link to="/voir_plus">
         <button className="text-white bg-indigo-600 px-3 py-1 rounded hover:bg-white hover:text-indigo-600 border transition">Voir plus</button>
       </Link>
     <Link to="/reserver_espace">
          <button className="text-white bg-green-600 px-3 py-1 rounded hover:bg-white hover:text-green-600 border transition">Réserver</button>
        </Link>
        
        
    
    </div>

   </>
  );
};

export default Nos_services;
