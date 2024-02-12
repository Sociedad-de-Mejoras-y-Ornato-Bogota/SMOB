import Panels from "../../components/panels/paneles";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const videoSrc = "https://smob-storage.s3.us-east-2.amazonaws.com/Gif_Modelo.mp4";

  return (
    <div className="Home" id="Home">
      <div className="home-main-background">
        <div className="home-main-title-overlay">
          <p className="bienvenido"> Bienvenidos a<br></br><span>DATACIVILIDAD</span></p>
        </div>
        <img src="https://smob-storage.s3.us-east-2.amazonaws.com/aplicaci%C3%B3n+de+logotipos+DATA+CIVILIDAD_Mesa+de+trabajo+1_Mesa+de+trabajo+1.png" className="ocultarImg" style={{ width: '22rem', position:'absolute', height:'5rem', top:'10vh'}} />
        <img src="https://smob-storage.s3.us-east-2.amazonaws.com/FondoJ.png" alt="marca de agua Construyendo Civilidad"></img>
      </div>
      <div className="home-content">
        <div className="home-content-text">
          <p
            className="text-principal"
          >
            La trayectoria de la organización cívica más antigua de la ciudad, la Sociedad de Mejoras y Ornato de Bogotá, se entreteje con la historia misma de la ciudad. La SMOB halla en la memoria colectiva la razón para crear lazos profundos de fraternidad y solidaridad en la ciudadanía, cuyo ademán ideal es la civilidad. Llevamos más de un siglo empeñados en fortalecer una ciudadanía responsable, participativa e incidente, en el ámbito de una ciudad compleja y en permanente cambio, de manera que prevalezca la civilidad como el camino a una vida plena, digna y sostenible.
            <br/> <br/>
            En ese propósito, la SMOB se ha valido de novedosas tecnologías digitales para construir esta plataforma interactiva llamada Data Civilidad, que contiene información suficiente para conocer la historia de la ciudad y permite organizarla de manera objetiva y contrastada.
            <br/><br/>
            ¡Bienvenidos!
          </p>
        </div>
        <div
          className="home-content-video"
        >
          <video controls style={{ objectFit: "cover" }}>
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no admite la reproducción de video.
          </video>
        </div>
      </div>
      <div className="home-panels">
        <Panels />
      </div>
    </div>
  );
};
export default Home;
