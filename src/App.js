
import './App.css';
import React from 'react';
import Home from './components/Home';
import PlanosIndividuais from './components/PlanosIndividuais';
import BasePlanos from './components/BasePlanos';
import Depoimentos from './components/Depoimentos';
import SobreMim from './components/SobreMim';
import PlanosConsultoria from './components/PlanosConsultoria';
// import About from './components/About';
// import Contact from './components/Contact';
// import Services from './components/Services';
// import Testimonials from './components/Testimonials';
function App() {
  return (
    <div className="App">
      <Home />
      <BasePlanos/>
      <PlanosIndividuais />
      <Depoimentos/>
<SobreMim/>
<PlanosConsultoria/>
    </div>
  );
}

export default App;
