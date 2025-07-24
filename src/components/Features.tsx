import hero from "../assets/IMgG2.jpg";
import paix from "../assets/paix.jpg"
import femme from "../assets/femme.jpg"
import justice from "../assets/justice.jpg"
import part1 from "../assets/AFRICA CIRLULAR LOGO.png"
import part2 from "../assets/ID logo.jpg"
import part3 from "../assets/F3Elogo.svg"
import part4 from "../assets/ambassade FR logo.png"
import fea1 from "../assets/fea1.jpg";
import media from "../assets/media.jpg"
import couture from "../assets/couture.jpg"
const Features = () => {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center p-8 bg-gray-100">

          <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col lg:h-svh justify-center">
            <div className="flex flex-col ">

              <div className="mt-6 border-t pt-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center ">
                  <div> <span className="text-gray-600  uppercase text-xs font-medium "> Notre organisation </span>
                    <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance"> Aider et accompagner : </p>
                    <p className="text-sm  mt-4 text-gray-700 text-balance">L'Association Tchadienne pour la Non-Violence (ATNV) est une Organisation Non Gouvernementale (ONG) fondée en 1992. Son siège social est situé au Centre Martin Luther King, BP : 397 Moundou, Tchad.
                      Sa mission principale est de promouvoir une culture de paix, de non-violence et de justice sociale au Tchad. L'ATNV œuvre pour une transformation sociale durable et apporte une assistance concrète aux femmes, aux jeunes et aux communautés, en particulier dans la résolution pacifique des conflits.

                      Sa mission principale est de promouvoir une culture de paix, de non-violence et de justice sociale au Tchad. L'ATNV œuvre pour une transformation sociale durable et apporte une assistance concrète aux femmes, aux jeunes et aux communautés, en particulier dans la résolution pacifique des conflits.
                      La vision de l'ATNV est un Tchad où la paix est ancrée, la non-violence est la norme pour la résolution des différends, et la justice sociale assure l'équité et le respect des droits humains pour tous, permettant aux communautés de s'épanouir harmonieusement.
                      Les valeurs fondamentales qui guident l'ATNV sont la Paix, la Non-Violence, la Transformation Sociale, la Justice et la Solidarité.</p>

                  </div>
                  <div className="h-full md:order-first"> <img src={hero} alt="#_" className=" bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full object-cover object-center" /> </div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center md:flex-row-reverse">
                  <div>
                    <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">  Valeurs fondamentales </p>
                    <p className="text-sm  mt-4 text-gray-700 text-balance">
                      <ul>
                        <li>Paix : Engagement profond pour la construction de la paix, le dialogue intercommunautaire et la promotion de la coexistence pacifique.</li>
                        <li>Non-Violence : Adhésion et promotion des principes et méthodes de résolution pacifique des conflits, rejetant toute forme de violence.</li>
                        <li>Transformation Sociale : Volonté d'initier et d'accompagner des changements positifs et durables au sein des communautés, favorisant le développement et l'équité.</li>
                        <li>Justice : Défense des droits humains, lutte contre les inégalités et promotion de l'accès équitable à la justice pour tous.</li>
                        <li>Solidarité : Soutien mutuel et collaboration avec les populations vulnérables et les partenaires.</li>
                      </ul>
                    </p>
                    <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">




                    </div>
                  </div>
                  <div className="h-full "> <img src={fea1} alt="#_" className=" bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full object-cover object-center" /> </div>
                </div>
              </div>


            </div>
          </div>

        </div>
      </section>
      <div className="mt-6 border-t pt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center ">
          <div>
            <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance"> Notre Media Labs </p>
            <p className="text-sm mt-4 text-gray-700 text-balance"> Notre Media Labs est un espace dédié à l'innovation et à la création de contenus pour promouvoir la paix et la non-violence. Nous y développons des outils de communication modernes et engageants.

              Nous explorons de nouvelles manières de raconter des histoires, de sensibiliser et de mobiliser les communautés, en utilisant des formats variés tels que le podcast, la vidéo, et le contenu numérique interactif. C'est un lieu d'expérimentation et de formation pour nos jeunes talents. </p>
            <div className="">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition duration-300">
                En savoir plus sur le projet media labs
              </button>
            </div>
          </div>
          <div className="h-full md:order-first"> <img src={media} alt="#_" className=" bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full object-cover object-center " /> </div>
        </div>
      </div>
      <div className="mt-6 border-t pt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center ">
          <div>
            <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance"> Couture feminine </p>
            <p className="text-sm mt-4 text-gray-700 text-balance">  Notre salle de couture féministe est un espace sûr et stimulant où les femmes peuvent acquérir des compétences en couture, développer leur créativité et renforcer leur autonomie économique. Ce programme est conçu pour les émanciper et les aider à construire un avenir meilleur.

              Au-delà de l'apprentissage technique, cet atelier est un lieu d'échange, de soutien mutuel et de renforcement de la confiance en soi. Les participantes apprennent à confectionner divers articles, ouvrant la voie à des opportunités d'emploi ou à la création de leurs propres entreprises. </p>
            <div className="">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition duration-300">
                En savoir plus sur les couture feminine
              </button>
            </div>
          </div>
          <div className="h-full md:order-first"> <img src={couture} alt="#_" className=" bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-full object-cover object-center " /> </div>
        </div>
      </div>
      {/*Sectioo*/}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Actions et Programmes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src={paix} alt="" />
              <h3 className="text-xl font-bold mb-2">Éducation à la Non-Violence</h3>
              <p className="text-gray-600">Ateliers et formations pour sensibiliser les communautés, en particulier les jeunes, aux principes de la non-violence et du respect mutuel.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src={femme} alt="" />
              <h3 className="text-xl font-bold mb-2">Assistance aux Femmes et Jeunes</h3>
              <p className="text-gray-600">Programmes d'autonomisation, d'éducation à la paix, de protection contre la violence et de promotion de leur participation citoyenne.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src={justice} alt="" />
              <h3 className="text-xl font-bold mb-2">Promotion des Droits Humains</h3>
              <p className="text-gray-600">Plaidoyer et sensibilisation pour le respect des droits fondamentaux de  chaque individu, avec un focus sur les populations vulnérables.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nos Partenaires
          </h2>

          <div className="overflow-hidden relative">
            <div className="flex animate-slide space-x-12">
              {/* Remplace les logos par les tiens dans /assets */}
              <img src={part1} alt="Partenaire 1" className="h-50 w-auto" />
              <img src={part2} alt="Partenaire 2" className="h-50 w-auto" />
              <img src={part3} alt="Partenaire 3" className="h-50 w-auto" />
              <img src={part4} alt="Partenaire 4" className="h-50 w-auto" />

            </div>
          </div>
        </div>
      </section>
      <section className="bg-yellow-300">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl ">Abonnez-vous à notre newsletter</h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl ">Recevez nos actualités, interventions et conseils sur la promotion de la paix  directement dans votre boîte email.</p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label className="hidden mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  </div>
                  <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your email" type="email" id="email" />
                </div>
                <div>
                  <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-black rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

    </>


  );
};

export default Features;
