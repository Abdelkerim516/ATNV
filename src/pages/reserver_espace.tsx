const ReserverEspace = () => {
  return (
    <>
      <div className="h-24 w-full border-2 flex items-center justify-center bg-white text-blue-600">
        <p className="text-2xl">Location de l’espace  nessicite de remplir le formulaire</p>
      </div>

      <div className="py-6 px-4 mx-auto max-w-screen-md bg-[#4DA2FF] rounded-md">
        <h2 className="mb-4 text-4xl font-extrabold text-center text-white">Formulaire de location </h2>
       

        <form action="#" className="space-y-4">
          {/* Nom et Prénom */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-sm font-medium text-white">Prénom</label>
              <input type="text" className="mt-1 w-full p-2 rounded-lg text-gray-900" placeholder="Entrez votre prénom" required />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-sm font-medium text-white">Nom</label>
              <input type="text" className="mt-1 w-full p-2 rounded-lg text-gray-900" placeholder="Entrez votre nom" required />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Votre email</label>
            <input type="email" className="mt-1 w-full p-2 rounded-lg text-gray-900" placeholder="Entrez votre email" required />
          </div>

          {/* Adresse */}
          <div>
            <label htmlFor="adresse" className="block text-sm font-medium text-white">Adresse</label>
            <input type="text" className="mt-1 w-full p-2 rounded-lg text-gray-900" placeholder="Entrez votre adresse" required />
          </div>

          {/* Contact */}
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-white">Numéro de contact</label>
            <input type="tel" className="mt-1 w-full p-2 rounded-lg text-gray-900" placeholder="Ex: +235 66 00 00 00" required />
          </div>

          {/* Sujet, Cuisine, Date */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label htmlFor="subject" className="block text-sm font-medium text-white">Sujet</label>
              <input type="text" className="mt-1 w-full p-2 rounded-lg text-gray-900" placeholder="Quel est votre besoin ?" required />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-white mb-1">Utilisation de cuisine</label>
              <div className="flex items-center gap-4 bg-white px-2 py-2 rounded-md">
                <label className="inline-flex items-center">
                  <input type="radio" name="cuisine" value="oui" className="form-radio text-blue-600" />
                  <span className="ml-2 text-sm text-gray-800">Oui</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="cuisine" value="non" className="form-radio text-blue-600" />
                  <span className="ml-2 text-sm text-gray-800">Non</span>
                </label>
              </div>
            </div>

            <div className="flex-1">
              <label htmlFor="date" className="block text-sm font-medium text-white">Date de réservation</label>
              <input type="date" className="mt-1 w-full p-2 rounded-lg text-gray-900" required />
            </div>
          </div>

          {/* Genre de cérémonie */}
          <div>
            <label htmlFor="ceremonie" className="block text-sm font-medium text-white">Genre de cérémonie</label>
            <select id="ceremonie" className="mt-1 w-full p-2 rounded-lg text-gray-900" required>
              <option value="">-- Sélectionnez un type de cérémonie --</option>
              <option value="mariage">Mariage</option>
              <option value="conference">Conférence</option>
              <option value="anniversaire">Anniversaire</option>
              <option value="religieuse">Cérémonie religieuse</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          {/* Choix de salle */}
          <div>
            <label htmlFor="salle" className="block text-sm font-medium text-white">Choisissez une salle</label>
            <select className="mt-1 w-full p-2 rounded-lg text-gray-900" required>
              <option value="">-- Sélectionnez une salle --</option>
              <option value="salle1">Salle 1</option>
              <option value="salle2">Salle 2</option>
              <option value="salle3">Salle 3</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">Votre message</label>
            <textarea rows={5} className="mt-1 w-full p-2 rounded-lg text-gray-900" placeholder="Écrivez ici..."></textarea>
          </div>

          {/* Bouton */}
          <div className="text-right">
            <button type="submit" className="px-5 py-2 mt-2 rounded-lg bg-green-600 text-white hover:scale-105">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReserverEspace;
