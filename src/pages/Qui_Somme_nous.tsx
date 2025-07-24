import Mission from "../assets/mission.jpg";
import hero from "../assets/hero.png";
import Fondament from "../assets/fondameùnt_pp.jpg";
import Valeurs from "../assets/valeur.jpg";
import ava1 from "../assets/ava1.jpg";

function Qui_somme_nous() {
  return (
    <>
     
      <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
        <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-center">À PROPOS DE NOUS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-2xl font-semibold text-gray-700 tracking-tight">
                L'Association Tchadienne pour la Non-Violence (ATNV) œuvre pour une transformation sociale durable,
                l'assistance aux femmes, aux jeunes et aux communautés, et la résolution pacifique des conflits.
              </p>
            </div>
            <div>
              <img
                src={hero}
                alt="À propos"
                className="w-full h-full object-cover rounded-lg shadow-md aspect-square"
              />
            </div>
          </div>
        </div>
      </div>

      
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Notre Mission</h3>
              <div className="flex justify-center mb-4">
                <img src={Mission} alt="Mission" className="w-28 h-28 rounded-full object-cover" />
              </div>
              <p className="text-gray-600">
                Fondée en 1992, l'ATNV s'engage à promouvoir une culture de paix, de non-violence et de justice sociale
                au Tchad. Nous croyons en la capacité des communautés à transformer les conflits en opportunités de
                développement harmonieux.
              </p>
            </div>

            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Nos Fondements et Principes</h3>
              <div className="flex justify-center mb-4">
                <img src={Fondament} alt="Fondement" className="w-28 h-28 rounded-full object-cover" />
              </div>
              <p className="text-gray-600">
                Guidée par la foi chrétienne et les principes universels des droits de l'homme, l'ATNV s'appuie sur des
                valeurs d'amour, de justice et de paix pour inspirer et orienter toutes ses actions. Nous croyons en la
                dignité de chaque individu et en la puissance du dialogue pour surmonter les défis.
              </p>
            </div>

            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Nos Valeurs</h3>
              <div className="flex justify-center mb-4">
                <img src={Valeurs} alt="Valeurs" className="w-28 h-28 rounded-full object-cover" />
              </div>
              <ul className="text-gray-600 text-left list-disc list-inside space-y-2">
                <li><strong>Paix :</strong> Construire des ponts et favoriser la coexistence pacifique.</li>
                <li><strong>Non-Violence :</strong> Promouvoir des méthodes pacifiques de résolution des conflits.</li>
                <li><strong>Transformation Sociale :</strong> Œuvrer pour des changements positifs et durables.</li>
                <li><strong>Justice :</strong> Assurer l'équité et le respect des droits humains.</li>
                <li><strong>Solidarité :</strong> Soutien mutuel et collaboration avec les plus vulnérables.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      <section id="our-team" className="bg-gray-100 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Notre Équipe</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => {
              const team = [
                { name: "Djakasnabeye Lembaindo", role: "Administrateur" },
                { name: "Ido", role: "Gestionnaire" },
                { name: "Bendji", role: "Technicien" },
              ];
              return (
                <div key={i} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <img src={ava1} alt={`Membre ${i + 1}`} className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
                  <h3 className="text-xl font-semibold mb-1">{team[i].name}</h3>
                  <p className="text-gray-600">{team[i].role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Qui_somme_nous;
