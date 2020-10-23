import React, {Fragment} from 'react';
//import logo from './logo.svg';
//import './App.css'; 
import "./styles/styles.scss";
import Curso from './Curso'

const App = () => (
    <>
<div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt= "baneer" src="https://ed.team/cursos/ingles-avanzado"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Curso EDteam</p>
        <p> Tu futuro te esta esperando</p>
        <a href="#" className="button">Suscribirse</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">   
 <Curso/>
 <Curso/>
 <Curso/>
</div>
</>
)

export default App;

//toda eiqueta debe cerrarse
//todos los componenres deben devolver un solo elemento padre
//apoyarse de los fragment si necesito devolver doos elementos <Fragment></Fragment> o <> </>
//img siempre se cierran
//Class pasa a ser className
// for pasa a ser htmlFor


