import background from '../../assets/background01.jpg';
import '../styles.css';
import logoImage from "../../assets/images/pioneira_agronegcio_logo.jpeg";
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

function Home() {

    useLayoutEffect(() =>{
      gsap.to(".logo", {
        x: 0,
        opacity: 1,
        duration: 2
      })

      gsap.to(".marca", {
        x: 0,
        opacity: 1,
        duration: 3
      })

      // Para retirar o plugin para nao perder a performace (DESTROI)
      return () => {
        gsap.killTweensOf(".logo");
        gsap.killTweensOf(".marca");
      };
    },[]);

  return (
    <div className='Home' style={{ backgroundImage: `url(${background})` }}>
        <div className='overlay'>
            <div>
                
                <h2 className='logo'>
                  <img src={logoImage} width="100" height="100" className="d-inline-block align-top" alt='Logo pioneira' />
                  Pioneiro</h2>
                <h3 className="display-5 marca">Agronegócios</h3>
            </div>
        </div>
    </div>
  )
}

export default Home;