
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Qui_somme_nous from '../src/pages/Qui_Somme_nous';
import Layout from './layouts/layout';
import Que_faisons_nous from '../src/pages/Que_faisons_nous';
import Nos_services from '../src/pages/nos_service';
import Contact from '../src/pages/Contact';
import Faire_un_don from '../src/pages/faire_un_don';
import VoirPlus from './pages/voir_plus';
import Reserver from './pages/reserver';
import ReserverEspace from './pages/reserver_espace';
function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="/Qui_Somme_nous" element={<Qui_somme_nous />} />
           <Route path="/Que_faisons_nous" element={<Que_faisons_nous />} />
            <Route path="/Nos_services" element={<Nos_services />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Faire_un_don" element={<Faire_un_don />} />
            <Route path="/voir_plus" element={<VoirPlus />} />
            <Route path="/reserver" element={<Reserver />} />
            <Route path="/reserver_espace" element={<ReserverEspace />} />
         </Route>
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>


     
      {/* Add other components or content here as needed */}
    </>
  )
}

export default App
