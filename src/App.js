import React, {Fragment} from 'react';
//import logo from './logo.svg';
//import './App.css'; 
import "./styles/styles.scss";
import Curso from './Curso'

const cursos = [
  {"title": "React desde cero",
   "image": "https://edteam-media.s3.amazonaws.com/courses/medium/5ffc4c77-cbc3-476d-9c18-e180882a52c9.jpg",
    "price": 80
  },
  {"title": "Go desde cero",
  "image": "https://edteam-media.s3.amazonaws.com/courses/medium/e737f2e3-92b3-400e-8d82-1b19e0277012.png",
   "price": 130
  }, 
  {"title": "HTML desde cero",
  "image": "https://edteam-media.s3.amazonaws.com/courses/medium/38d4a433-cee1-4792-993d-eb7a61f867c4.png",
   "price": 46
  }, 
  {"title": "CSS desde cero",
  "image": "https://edteam-media.s3.amazonaws.com/courses/medium/f0b3c8c9-c922-4839-ae4e-4152b8b43c44.png",
   "price": 30
  }
]

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
        {
          cursos.map( elemento => 
                                <Curso 
                                  title = {elemento.title} 
                                  image = {elemento.image}
                                  price = {elemento.price}
                                  />
                     )
        }
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


