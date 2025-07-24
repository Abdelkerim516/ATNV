import im1 from "../assets/im1.jpeg"
import im2 from "../assets/im2.jpeg"
import im3 from "../assets/im3.jpeg"

const Que_faisons_nous = () => {
  return (
    <>
    <div>
      <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Nos Actualités</h2>
      </div>
    </div>
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">        
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div className="relative"><a href="#">
                    <img className="w-full"
                        src={im1}
                        alt="Sunset in the mountains"/>
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                      Voir plus
                    </div>
                </a>
            </div>
            <div className="px-6 py-4 mb-auto">
                <a href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest
                   Succès de l'atelier de médiation communautaire</a>
                <p className="text-gray-500 text-sm">
                    Publié le 15 juillet 2025
                </p>
                <p className="text-bold-500 text-sm">Notre dernier atelier de médiation a permis de  résoudre plusieurs différends agro-pastoraux dans la région de Moundou,  renforçant la cohésion sociale...</p>
            </div>
            
        </div>



        <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div className="relative"><a href="#">
                        <img className="w-full"
                            src={im2}
                        alt="Sunset in the mountains"/>
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a><a href="#!">
                    <div
                        className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Voir plus
                    </div>
                </a>
            </div>
            <div className="px-6 py-4 mb-auto">
                <a href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Best
                    Nouvelles formations pour l'autonomisation des femmes</a>
                <p className="text-gray-500 text-sm">
                    Publié le 15 juillet 2025
                </p>
                <p className='text-bold-500 text-sm'>L'ATNV lance un nouveau cycle de formations professionnelles pour les  femmes, incluant l'atelier de couture, afin de favoriser leur  indépendance économique...</p>
            </div>
            
        </div>


        
      
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div className="relative"><a href="#">
                    <img className="w-full"
                        src={im3}
                        alt="Sunset in the mountains"/>
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a><a href="#!">
                    <div
                        className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Voir plus
                    </div>
                </a>
            </div>
            <div className="px-6 py-4 mb-auto">
                <a href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Why
                    La jeunesse tchadienne s'engage pour la paix</a>
                <p className="text-gray-500 text-sm">
                    Publié le 15 juillet 2025
                </p>
                <p className='text-bold-500 text-sm'>Notre troupe de théâtre "La Colombe" a effectué une tournée réussie,  sensibilisant des milliers de jeunes aux valeurs de non-violence et de  dialogue...</p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                

               
            </div>
        </div>

    </div>

</div>
    </>
  );
};

export default Que_faisons_nous;
