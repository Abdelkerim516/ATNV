

import { Link } from "react-router-dom";

import sale3 from "../assets/sale3.jpg"
import sale4 from "../assets/sale4.jpg"
import sale5 from "../assets/sale5.jpg"
import sale6 from "../assets/sale6.jpg"
import espace from "../assets/espace.jpg"
const VoirPlus = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Nos Salle</h1>
    </div>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative">
            <img className="w-full h-48 object-cover" src={sale3}/>
           
        </div>
        <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Salle 1</div>
            <p className="text-gray-500 text-sm">Amphi500 Salle de 500 places</p>
        </div>
<Link to="/reserver">
  <button className="text-white bg-green-600 px-3 py-1 rounded hover:bg-white hover:text-green-600 border transition">Réserver</button>
</Link>
    </div>


    <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative">
            <img className="w-full h-48 object-cover" src={sale4}/>
            
        </div>
        <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Salle 2</div>
            <p className="text-gray-500 text-sm">Salle de 25 places</p>
        </div>
<Link to="/reserver">
  <button className="text-white bg-green-600 px-3 py-1 rounded hover:bg-white hover:text-green-600 border transition">Réserver</button>
</Link>
    </div>


    <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative">
            <img className="w-full h-48 object-cover" src={sale5}/>
           

        </div>
        <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Salle 3</div>
            <p className="text-gray-500 text-sm">Salle de 80 places</p>
        </div>
<Link to="/reserver">
  <button className="text-white bg-green-600 px-3 py-1 rounded hover:bg-white hover:text-green-600 border transition">Réserver</button>
</Link>
    </div>

    <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative">
            <img className="w-full h-48 object-cover" src={sale6}/>
            
        </div>
        <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Salle 4</div>
            <p className="text-gray-500 text-sm">Salle de 30 places</p>
        </div>
<Link to="/reserver">
  <button className="text-white bg-green-600 px-3 py-1 rounded hover:bg-white hover:text-green-600 border transition">Réserver</button>
</Link>
    </div>


    <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative">
            <img className="w-full h-48 object-cover" src={sale5}/>
           
        </div>
        <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Salle 5</div>
            <p className="text-gray-500 text-sm">Salle de 50 places</p>
        </div>
<Link to="/reserver">
    <button className="text-white bg-green-600 px-3 py-1 rounded hover:bg-white hover:text-green-600 border transition">Réserver</button>
</Link>
    </div>


    <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative">
            <img className="w-full h-48 object-cover" src={sale3}/>
            
        </div>
        <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Salle 6</div>
            <p className="text-gray-500 text-sm">Amphi500 Salle de 500 places</p>
        </div>
<Link to="/reserver">
  <button className="text-white bg-green-600 px-3 py-1 rounded hover:bg-white hover:text-green-600 border transition">Réserver</button>
</Link>
    </div>


</div>
 <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Nos Espaces libre</h1>
    </div>
<div className="container mx-auto px-4 py-8">
    </div>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative">
            <img className="w-full h-48 object-cover" src={espace}/>
           
        </div>
        <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Espace 1</div>
            <p className="text-gray-500 text-sm"></p>
        </div>
                  <Link to="/reserver_espace">
                    <button className="text-white bg-green-600 px-3 py-1 rounded hover:bg-white hover:text-green-600 border transition">Réserver</button>
                  </Link>

    </div>
</div>
</>
  );
};

export default VoirPlus;
