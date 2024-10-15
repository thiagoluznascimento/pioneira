import background from '../../assets/background01.jpg';
import '../styles.css';
import logoImage from "../../assets/images/pioneira_agronegcio_logo.jpeg";

function Home() {
  return (
    <div className='Home' style={{ backgroundImage: `url(${background})` }}>
        <div className='overlay'>
            <div>
                
                <h2>
                  <img src={logoImage} width="100" height="100" className="d-inline-block align-top" alt='Logo pioneira' />
                  AgroPioneiro</h2>
                <h3 className="display-5">Agronegócios</h3>
            </div>
        </div>
    </div>
  )
}

export default Home;