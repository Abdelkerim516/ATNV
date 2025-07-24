import { useState } from "react"
import logo from "../assets/logo.gif"
import { Link } from 'react-router-dom';
function Header() {
  const [nav, setNav] = useState(false)
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5  shadow">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              <img src={logo} alt="Logo" className="w-30 h-30" />
            </span>
          </Link>

          <div
            className={`flex-col md:flex md:flex-row items-center w-full md:w-auto md:order-2 transition-all duration-300 ${nav
              ? "block w-full bg-white shadow-md p-4 md:relative md:w-auto md:bg-transparent md:shadow-none"
              : "hidden md:flex gap-6"
              }`}
          >
            <ul className

              ="flex flex-col md:flex-row md:gap-8 gap-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-primary-700 md:p-0 "
                  aria-current="page"
                >
                  Acceuil
                </Link>
              </li>
              <li>
                <Link
                  to="/Qui_Somme_nous"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-primary-700 md:p-0 "
                  aria-current="page"
                >
                  Qui Somme-Nous ?
                </Link>
              </li>
              <li>
                <Link
                  to="/Que_faisons_nous"

                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0"
                >
                  Que faisons-nous ?
                </Link>
              </li>
              <li>
                <Link
                  to="/Nos_services"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 "
                >
                  Nos Services
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0   "
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link to="/Faire_un_don" className="flex justify-center">
              <button
                className="mt-4 md:mt-0 rounded-full bg-yellow-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                FAITES UN DON
              </button>
            </Link>
          </div>

          <div className="md:hidden flex items-center lg:order-1">
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
              aria-controls="mobile-menu"
              aria-expanded={nav}
              onClick={() => setNav(!nav)}
            >
              <span className="sr-only">Open main menu</span>
              {nav ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;