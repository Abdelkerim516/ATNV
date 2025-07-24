const Faire_un_don = () => {
  return (
    <>
      <div>
        <div className="h-24 w-full border-2 flex items-center justify-center bg-emerald-500 text-white">
          <p className="text-2xl text-center">
            Faites un don à l’ATNV peut importe la nature. Faire un don à une organisation du genre, c’est sauver des vies
          </p>
        </div>

        <div className="py-6 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-6 text-4xl font-extrabold text-center text-gray-900">
            Pourquoi faire un don ?
          </h2>
          <p className="mb-6 font-light text-left text-gray-500 sm:text-xl">
            Votre contribution permet de financer des projets de protection de la nature et de sensibilisation à l'environnement.
          </p>

          <form action="#" className="mb-10">
  <div className="flex flex-row">
    <div className="w-1/2 pr-2">
      <label htmlFor="firstName" className="block my-2 text-left text-sm font-medium text-gray-900">
        Prénom
      </label>
      <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Entrez votre prénom" required />
    </div>
    <div className="w-1/2 pl-2">
      <label htmlFor="lastName" className="block my-2 text-left text-sm font-medium text-gray-900">
        Nom
      </label>
      <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Entrez votre nom" required />
    </div>
  </div>
  <div>
    <label htmlFor="email" className="block my-2 text-left text-sm font-medium text-gray-900">
      Votre email
    </label>
    <input type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Entrez votre email" required />
  </div>
  <div>
    <label htmlFor="amount" className="block my-2 text-left text-sm font-medium text-gray-900">
      Montant du don
    </label>
    <input type="number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Entrez le montant" required />
  </div>
  <button type="submit" className="mt-2 p-2 float-right text-white rounded-lg border-green-600 bg-green-600 hover:scale-105">
    Faire un don
  </button>
</form>

        </div>
      </div>
    </>
  );
};

export default Faire_un_don;
