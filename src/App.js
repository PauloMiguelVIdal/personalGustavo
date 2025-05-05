
import './App.css';
import React from 'react';
import Home from './components/Home';
import PlanosIndividuais from './components/PlanosIndividuais';
import BasePlanos from './components/BasePlanos';
import Depoimentos from './components/Depoimentos';
import Depoimentos2 from './components/Depoimentos2';
import SobreMim from './components/SobreMim';
import PlanosConsultoria from './components/PlanosConsultoria';
import PlanosGerais from './components/PlanosGerais';
// import About from './components/About';
// import Contact from './components/Contact';
// import Services from './components/Services';
// import Testimonials from './components/Testimonials';
function App() {
  return (
    <div className="App">
      <Home />
      {/* <BasePlanos /> */}
      {/* <PlanosIndividuais /> */}
      {/* <Depoimentos /> */}
      <Depoimentos2 />
      <SobreMim />
      <PlanosGerais />
      <PlanosConsultoria />
    </div>
  );
}

export default App;
