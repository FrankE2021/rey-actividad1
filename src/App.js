import image0 from './images/rey_sisebuto.png';
import image1 from './images/rey_atanagildo.png';
import image2 from './images/rey_teodorico.png';
import incognito from './images/rey_incognito.png';

import './miCss.css';

function App() {
  let nombres=["Sisebuto", "Atanagildo","Teodorico"];
  const cambiarImagen=(e)=>{
    if(e.target.src.includes("incognito")){
      e.target.style.visibility="hidden";
    }else{
      e.target.src=incognito;
    }
  }
  const cambiarTexto=(e)=>{
    if(e.target.innerHTML=="Visto"){
      e.target.innerHTML="";
    }else{
      e.target.innerHTML="Visto";
    }
    e.target.parentNode.style.backgroundColor='white';
  }
  return (
    <div className="contenedor">
      <div className='caja'>
        <img onClick={cambiarImagen} src={image0}/>
        <div onClick={cambiarTexto} className='nombre'>{nombres[0]}</div>
      </div>
      <div className='caja'>
        <img onClick={cambiarImagen} src={image1}/>
        <div onClick={cambiarTexto} className='nombre'>{nombres[1]}</div>
      </div>
      <div onClick={cambiarTexto} className='caja'>
        <img onClick={cambiarImagen} src={image2}/>
        <div className='nombre'>{nombres[2]}</div>
      </div>
    </div>
  );
}

export default App;
