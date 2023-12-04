import "./footer.css";
import yt from "../../assets/icons/yt.png";
import tw from "../../assets/icons/tw.png";
import fb from "../../assets/icons/fb.png";
import locationImg from "../../assets/icons/location.png";
import phoneImg from "../../assets/icons/phone.png";
import mailImg from "../../assets/icons/mail.png";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#F4F1EE" }}>
      <div
        className="footer-top"
        style={{
          heigth: "110px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "0.5vh 1vw 0",
          gap: "1vw",
        }}
      >
        <div className="footer-p-div" style={{ width: "50%" }}>
          <p
            className="footer-p"
            style={{ padding: "0.5vh 1vw", lineHeight: "1em", }}
          >
            La Sociedad de Mejoras y Ornato de Bogotá es una entidad privada que
            tiene como objeto social principal el de trabajar por la civilidad
            fortaleciendo el centro de pensamiento y reflexión, promoviendo y
            fomentando la participación ciudadana, el arte, la cultura y en
            general, el desarrollo humano sostenible de los habitantes de la
            ciudad y la región. Fue creada en 1917. En la actualidad su sede se
            encuentra en el Parque Museo El Chicó.
          </p>
        </div>
        <div className="footer-info">
          <ul style={{ listStyle: "none" }} className="footer-ul">
            <li className="s">
              <img src={locationImg} className="social-media" />
              Cra 7 # 93 - 01
            </li>
            <li className="s">
              <img src={phoneImg} className="social-media"></img>
              601 623 1066
            </li>
            <li className="s">
              <img src={mailImg} className="social-media"></img>{" "}
              info@sosmejorasbogota.org
            </li>
          </ul>
        </div>
        <div className="footer-logos" style={{ display: "flex" }}>

          <img
            src="https://smob-storage.s3.us-east-2.amazonaws.com/Logo_Plataforma.png"
            alt="logo"
            height="60px"
            width="60px"
          />
          <img
            src="https://smob-storage.s3.us-east-2.amazonaws.com/logo.png"
            alt="logo"
            height="60px"
            width="60px"
          />
        </div>
      </div>
      <div
        className="footer-dowm"
        style={{
          heigth: "110px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "0 3vw 1vh",
          gap: "1vw",
        }}
      >
        <div
          className="footer-social_media"
          style={{ display: "flex", gap: "1vw", marginBottom: "2vh" }}
        >
          <a
            href="https://twitter.com/mejoras_bogota"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tw} className="social-media" />
          </a>
          <a
            href="https://www.facebook.com/mejorasbogota/?locale=es_LA"
            target="_blank"
            rel="noreferrer"
          >
            <img src={fb} className="social-media" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC_mabSU7fDU3dw0TTc79l-A"
            target="_blank"
            rel="noreferrer"
          >
            <img src={yt} className="social-media" />
          </a>
        </div>
        <div className="footer-derechos">
          <article id="footer-links">
            <p>
              Sociedad de Mejoras y Ornato de Bogotá © 2023 .
              <br />
              Todos los Derechos Reservados Semillero de Innovación Geográfica
              GeoGeeks - Esri Colombia
            </p>
          </article>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
