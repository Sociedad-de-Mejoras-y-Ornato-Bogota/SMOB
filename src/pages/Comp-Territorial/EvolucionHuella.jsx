import Map from "../../components/map/map";
import Data from "./HuellaUrbana.json";
import Gif from "./Gif.json"
import Popup from './popUp';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function EvolucionHuella() {
  const [scrollTop, setScrollTop] = useState(0)
  const [opacity, setOpacity] = useState(false);
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState("Historia de la huella urbana");
  const [dataFilter, setFilter] = useState({
    titulo:
      "Visualice en la siguiente línea temporal el crecimiento de la huella urbana para la ciudad de Bogotá.",
    año: "Historia de la huella urbana",
    layers: [],
    img_url: "https://smob-storage.s3.us-east-2.amazonaws.com/huella-urbana-imgs/0.gif",
    zoom: ""
  });
  const [gif, setGif] = useState({
    link_url: "1600",
    img_url: "https://smob-storage.s3.us-east-2.amazonaws.com/huella-urbana-imgs/gif/1600.jpg"
  })
  const [gifI, setGifI] = useState(0)

  const [showPopup, setShowPopup] = useState(true)
  const handleClosePopup = () => {
    console.log('Cerrando el pop-up');
    setShowPopup(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
      var elem = document.getElementById('nav-huella');
      var pant = screen.height;
      pant = (pant / 8) * 1.5;
      if (window.scrollY > pant) {
        elem.classList.remove("navbar-principal");
        elem.classList.add("pegar");
      }
      else {
        elem.classList.remove("pegar");
        elem.classList.add("navbar-principal");
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  useEffect(() => {
    let i = 0
    const gifInterval = setInterval(() => {
      // let i = gifI

      if (i <= 17) {
        setGifI(i)
        setGif(Gif[i]);
        i = i + 1
      } else {
        i = 0
        setGifI(i)
        setGif(Gif[i]);
      }

    }, 2000);


    if (year != "Historia de la huella urbana") {
      clearInterval(gifInterval)
      i = 0
      setGif(Gif[i]);
      setGifI(i)
    }

    return () => {
      clearInterval(gifInterval)
      i = 0
      setGif(Gif[i]);
      setGifI(i)
    }

  }, [year]);
  return (
    <div className={`general-container`}>
      {showPopup && <Popup
        onClose={handleClosePopup}
      />}
      <div
        className="row responsive-columna"
        style={{ height: "12.5vh", width: "100%", color: "black" }}
      >
        <div className="col-lg-2"></div>
        <div
          className="col-lg-8"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          <p
            style={{ color: "#762f0b", paddingTop: "3vh" }}
            className="general-title"
          >
            Evolución de la huella urbana
          </p>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="row" style={{ height: "auto" }}>
        <div className="col-lg-12">
          <ul
            style={{
              backgroundColor: "#762f0b",
              height: "60px",
              width: "100vw",
              display: "flex",
              color: "white",
              justifyContent: "space-evenly",
              alignItems: "center",
              listStyle: "none",
              fontSize: ".8vw",
              cursor: "pointer",
            }}
            className={`menu-huella-responsive ${opacity ? "opacity" : " "}`}
            id="nav-huella"
          >
            {Data.map((item) => {
              return (
                <li
                  key={item.año}
                  className={`${item.año == year ? "selected-year" : ""}`}
                  onClick={() => {
                    setYear(item.año);
                    setFilter(item);
                    setOpen(false);
                  }}
                >
                  {item.año}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="row" style={{ height: "auto" }}>
        <div className="col-lg-12">

          {(year === 2023 || year === 1991 || year === 2006) &&
            <div
              style={{
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4 style={{ color: "rgb(118, 47, 11)", fontWeight: "bold" }}>
                {dataFilter?.titulo}
              </h4>

              <Map map_id={dataFilter?.map_id} layers={dataFilter?.layers} zoom={dataFilter?.zoom} center={dataFilter?.center} />
            </div>
          }

          {(year !== 2023 && year !== "Historia de la huella urbana" && year !== 1991 && year !== 2006) &&
            <div
              style={{
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {open && (
                <dialog
                  className="modal-responsive"
                  open
                  style={{
                    width: "80vw",
                    height: "600px",
                    position: "absolute",
                    left: "10%",
                    top: "40%",
                    border: "none",
                    zIndex: "9",
                  }}
                >
                  <Map
                    map_id={dataFilter?.map_id}
                    layers={dataFilter?.layers}
                    zoom={dataFilter?.zoom}
                    center={dataFilter?.center}
                  />
                  <button
                    className="boton-modal-responsive"
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      backgroundColor: "#91583b",
                      border: "none",
                      color: "#fff",
                      width: "10vw",
                      height: "5vh",
                      padding: "10px",
                      fontSize: "14px",
                    }}
                    onClick={() => {
                      setOpen(false);
                      setOpacity(false);
                      document
                        .querySelector(`#frame`)
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Ver indicadores
                  </button>
                </dialog>
              )}

              <h4 style={{ color: "rgb(118, 47, 11)", fontWeight: "bold" }} className="text-responsive">
                {dataFilter?.titulo}
              </h4>
              <i style={{ color: "#762f0b" }} className="text-responsive">
                Haga clic en la imagen del plano escaneado del año {year} para
                poder ver el plano digitalizado por la Sociedad de Mejoras y
                Ornato de Bogotá.
              </i>
              <img
                className="img-responsive"
                onClick={() => {
                  setOpacity(true);
                  setOpen(!open);
                }}
                src={dataFilter?.img_url}
                style={{
                  width: "40vw",
                  height: "50vh",
                  margin: "1vh 1vw",
                  cursor: "pointer",
                }}
              ></img>
            </div>
          }
          {(year == "Historia de la huella urbana") && (
            <div
              style={{
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i style={{ color: "#762f0b", textAlign: "center", padding: "2vw" }} className="text-responsive">
                En esta sección puede explorar la línea de tiempo de la huella
                urbana para la ciudad de Bogotá. Observará la evolución de los
                planos originales a su estado digitalizado, el crecimiento
                urbano entre los diferentes años cartográficos y una línea
                temporal general de la huella urbana.
              </i>
              <h4
                style={{
                  color: "rgb(118, 47, 11)",
                  fontWeight: "bold",
                  margin: "1vh 1vw",
                }}
                className="text-responsive"
              >
                {dataFilter?.titulo}
              </h4>

              <Link onClick={() => {
                setFilter(Data[gifI+1])
                console.log(gifI+1)
                console.log(Data[gifI+1])
                setYear(gif?.link_url);
              }}>
                <img src={gif?.img_url} style={{ width: "40vw", height: "50vh", margin: "1vh 1vw" }}></img>
              </Link>
            </div>
          )}
        </div>
      </div>
      {year != "Historia de la huella urbana" && (
        <div className="row" style={{ height: "auto", marginTop: "5vh" }}>
          <div className="col-lg-12">
            <iframe
              className={` ${opacity ? "opacity" : " "}`}
              id="frame"
              src={dataFilter.iframe_url}
              style={{ width: "100vw", height: "90vh" }}
              sandbox="allow-scripts allow-same-origin allow-popups"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default EvolucionHuella;
