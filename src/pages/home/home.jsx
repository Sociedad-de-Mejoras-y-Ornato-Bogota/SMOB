import Panels from "../../components/panels/paneles";
import Index from "../../components/cards/cards";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const videoSrc = "https://smob-storage.s3.us-east-2.amazonaws.com/Gif_Modelo.mp4";

  return (
    <div className="Home" id="Home">
      <div className="home-main-background">
        <div className="row">
          <div className="col">
            <div className="home-main-title-overlay">
              <p className="bienvenido">
                Bienvenidos a la Plataforma<br></br>
                <span>Construyendo Civilidad</span>
              </p>
            </div>
            <img
              src="https://smob-storage.s3.us-east-2.amazonaws.com/FondoJ.png"
              alt=""
            ></img>
          </div>
        </div>
      </div>

      <div
        className="home-content"
        style={{
          minHeight: "400px",
          width: "100vw",
          display: "flex",
          fontSize: "18px",
          padding: "5vh 2vw",
        }}
      >
        <div
          className="home-content-text"
          style={{
            width: "45vw",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            className="text-principal"
            style={{ fontSize: "0.9vw", lineHeight: "2.5vh" }}
          >
         
            La trayectoria de la organización cívica más antigua, la Sociedad de
            Mejoras y Ornato de Bogotá, que está inmersa en la historia misma de
            la ciudad encuentra en la memoria colectiva una fuerza poderosa
            capaz de tejer lazos profundos de respeto y solidaridad, esencia de
            la civilidad, entendida como la relación armónica entre ciudadanos.
            <br />
            Con el más profundo respeto por el pasado trabajamos para fortalecer
            una ciudadanía responsable, participativa e incidente, en el entorno
            de una ciudad compleja y en permanente cambio, donde prevalezca la
            civilidad como garante de un hábitat digno, sostenible y
            satisfactorio. La Sociedad de Mejoras apelando a novedosas
            tecnologías digitales ha diseñado esta plataforma interactiva, que
            permite organizar información, objetiva, ordenada y contrastada.
            <br />
            {/* En el marco de la lógica de los procesos del ordenamiento del
            territorio vistos desde la óptica del pensamiento complejo se
            elaboró una metodología que permite caracterizar la dinámica y los
            cambios en los Modelos Urbanos, constituidos por tres componentes
            que interactúan entorno a un marco institucional, conformados por
            grupos de estructuras, que a vez se subdividen en sistemas que
            orbitan entre sí en un proceso continuo y cambiante, como se ilustra
            en el siguiente esquema. */}
          </p>
        </div>
        <div
          className="home-content-video"
          style={{
            width: "55vw",
            height: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <video controls style={{ width: "80%", height: "50vh" }}>
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no admite la reproducción de video.
          </video>
        </div>
      </div>
      <Panels></Panels>
      {/* <Index></Index> */}
    </div>
  );
};
export default Home;
