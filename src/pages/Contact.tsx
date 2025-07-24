


const Contact = () => {
  return (
     < >
      <div className="h-24 w-full border-2 flex items-center
                        justify-center bg-emerald-500 text-white">
        <p className="text-2xl">  Bienvenue sur la page de contact ATNV </p>
        </div>
   <div className="py-2 px-4 mx-auto max-w-screen-md ">
            <h2 className="mb-4 text-4xl font-extrabold 
                           text-center text-gray-900">
                Contactez-nous
            </h2>
            <p className="mb-4 font-light text-left 
                          text-white sm:text-xl">
                         Une question ? Une remarque ? Besoin d'information ? Envoyez-nous un message.
            </p>
            <form action="#">
                <div className="flex flex-row">
                    <div className="w-1/2 pr-2 ">
                        <label htmlFor="firstName" 
                               className="block my-2 text-left 
                                          text-sm font-medium text-gray-900">
                            Nom
                        </label>
                        <input type="text" 
                               className="shadow-sm bg-gray-50 border
                                          border-gray-300 text-gray-900 
                                          text-sm rounded-lg block w-full p-2.5" 
                               placeholder="Entrer Votre Nom"
                               required/>
                    </div>
                    <div className="w-1/2 pl-2">
                        <label htmlFor="firstName" 
                               className="block my-2 text-left text-sm 
                                          font-medium text-gray-900">
                            Prenom
                        </label>
                        <input type="text" 
                               className="shadow-sm bg-gray-50 border 
                                          border-gray-300 text-gray-900 
                                          text-sm rounded-lg block w-full p-2.5"
                               placeholder="Entrer Votre prenom"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="email" 
                           className="block my-2 text-left text-sm 
                                      font-medium text-gray-900">
                        e-mail
                    </label>
                    <input type="email" 
                           className="shadow-sm bg-gray-50 border 
                                      border-gray-300 text-gray-900 
                                      text-sm rounded-lg block w-full p-2.5" 
                            placeholder="Votre email"
                           required />
                </div>
                <div>
                    <label htmlFor="subject" 
                           className="block my-2 text-left 
                                      text-sm font-medium text-gray-900">
                        Sujet
                    </label>
                    <input type="text" 
                           className="block p-3 w-full text-sm 
                                      text-gray-900 bg-gray-50 rounded-lg 
                                      border border-gray-300 shadow-sm "
                           placeholder="Votre Sujet" 
                           required />
                </div>
                <div >
                    <label htmlFor="message" 
                           className="block my-2 text-left 
                                      text-sm font-medium text-gray-900 ">
                       Votre message
                    </label>
                    <textarea rows={6} 
                              className="block p-2.5 w-full text-sm 
                                         text-gray-900 bg-gray-50 rounded-lg 
                                         shadow-sm border border-gray-300 " 
                              placeholder="Votre message"/>
                </div>
                <button type="submit" 
                        className="mt-2 p-2 float-right text-white  
                                   rounded-lg border-green-600 
                                   bg-green-600 hover:scale-105">
                   Envoyer
                </button>
            </form>
        </div>
        </ >

  );
};

export default Contact;
