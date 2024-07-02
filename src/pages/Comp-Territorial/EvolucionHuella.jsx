import Map from "../../components/map/map";
import Data from "./HuellaUrbana.json";
import Gif from "./Gif.json"
import Popup from './popUp';
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './HistoriaCrecimiento.css'

function EvolucionHuella() {
  //audios
  const audioRef = useRef(null);
    const [reproduciendo, setReproduciendo] = useState(false);
    const [audioCargado, setAudioCargado] = useState(false);
  
    const handlePlayPause = async () => {
      const audioElement = audioRef.current;
  
      if (!audioCargado) {
        await cargarAudio(); // Esperar hasta que el audio esté completamente cargado
      }
  
      if (audioElement && audioElement.paused) {
        audioElement.play().catch(error => {
          console.error('Error al reproducir audio:', error);
        });
      } else if (audioElement) {
        audioElement.pause();
      }
    };
  
    const cargarAudio = async () => {
      const audioElement = audioRef.current;
  
      if (audioElement && audioElement.readyState < 2) {
        // El estado 2 indica que el audio está completamente cargado
        await new Promise((resolve) => {
          const handleCanPlayThrough = () => {
            setAudioCargado(true);
            resolve();
          };
  
          audioElement.addEventListener('canplaythrough', handleCanPlayThrough);
  
          // Si el audio ya está cargado, resolver de inmediato
          if (audioElement.readyState >= 2) {
            setAudioCargado(true);
            resolve();
          }
        });
      }
    };
  
    useEffect(() => {
      const audioElement = audioRef.current;
  
      if (audioElement) {
        const handleStateChange = () => {
          setReproduciendo(!audioElement.paused);
        };
  
        audioElement.addEventListener('play', handleStateChange);
        audioElement.addEventListener('pause', handleStateChange);
  
        return () => {
          audioElement.removeEventListener('play', handleStateChange);
          audioElement.removeEventListener('pause', handleStateChange);
        };
      }
    }, []);

  //fin

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
    <div >
      {showPopup && <Popup
        onClose={handleClosePopup}
      />}
      <div
        style={{ height: "10vh", width: "100%", color: "black" }}
      >
        <diV
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          <p
            style={{ color: "#762f0b", paddingTop: "3vh"}}
            className="general-title"
          >
            Evolución de la huella urbana
          </p>
          <div className="button-container1">
              <button onClick={() => handlePlayPause()}>{reproduciendo ? '⫾⫾' : '⧐'}</button>
              <audio ref={audioRef} src={'https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/recursos_15_02_2024/Audio Apuntes sobre demografía.mp3'} type="audio/mp3" controls={false} autoPlay/>
            </div>
        </diV>
      </div>
      <div style={{ height: "auto" }}>
        <div >
          <ul
            style={{
              backgroundColor: "#762f0b",
              height: "40px",
              width: " 100%",
              display: "flex",
              color: "white",
              justifyContent: "space-between",
              alignItems: "center",
              listStyle: "none",
              fontSize: ".7vw",
              cursor: "pointer",
              padding:"1rem 2rem",
              zIndex: 10
            }}
            className={`menu-huella-responsive ${opacity ? "opacity" : " "}`}
            id="nav-huella"
          >
            {Data.map((item) => {
              return (
                <li
                  key={item.año}
                  className={`${item.año == year ? "selected-year" : ""} `}
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

      <div style={{ height: "auto" }}>
        <div >

          {(year === 2023 || year === 1991) &&
            <div
              style={{
                width: "100%",
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

          {(year !== 2023 && year !== "Historia de la huella urbana" && year !== 1991 && year !== 1885) &&
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {open && (
                <dialog
                  className="modal-huella"
                  open

                >
                  <Map
                    map_id={dataFilter?.map_id}
                    layers={dataFilter?.layers}
                    zoom={dataFilter?.zoom}
                    center={dataFilter?.center}
                  />
                  <button
                    className="boton-modal-huella"
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

              <h4 style={{ color: "rgb(118, 47, 11)", fontWeight: "bold", padding:"1rem" }}>
                {dataFilter?.titulo}
              </h4>
              <i style={{ color: "#762f0b", padding:"1rem" }} >
                Haga clic en la imagen del plano escaneado del año {year} para
                poder ver el plano digitalizado por la Sociedad de Mejoras y
                Ornato de Bogotá.
              </i>
              <img
                className="plano-escaneado"
                alt="Plano escaneado"
                onClick={() => {
                  setOpacity(true);
                  setOpen(!open);
                }}
                src={dataFilter?.img_url}

              ></img>
            </div>
          }
          {(year == "Historia de la huella urbana") && (
            <div
              style={{
                width: "100%",
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
                setFilter(Data[gifI + 1])
                console.log(gifI + 1)
                console.log(Data[gifI + 1])
                setYear(gif?.link_url);
              }}>
                <img src={gif?.img_url} style={{ width: "40vw", height: "50vh", margin: "1vh 1vw" }} alt="plano escaneado"></img>
              </Link>
            </div>
          )}

          {year == 1885 && <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {open && (
              <dialog
                className="modal-huella"
                open
              >
                <Map
                  map_id={dataFilter?.map_id}
                  layers={dataFilter?.layers}
                  zoom={dataFilter?.zoom}
                  center={dataFilter?.center}
                />
                <button
                  className="boton-modal-huella"

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

            <h4 style={{ color: "rgb(118, 47, 11)", fontWeight: "bold",padding:"1rem"  }} className="text-responsive">
              {dataFilter?.titulo}
            </h4>
            <i style={{ color: "#762f0b", padding:"1rem" }} className="text-responsive">
              Haga clic en la imagen del plano escaneado del año {year} para
              poder ver el plano digitalizado por la Sociedad de Mejoras y
              Ornato de Bogotá.
            </i>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: "3rem" }}>
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                  <img
                    className="img-huella-swipe"
                    onClick={() => {
                      setOpacity(true);
                      setOpen(!open);
                    }}
                    src={dataFilter?.img_url}
                    style={{
                      width: "40vw",
                      height: "50vh",
                      cursor: "pointer",

                    }}
                    alt="plano escaneado"
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    alt="plano escaneado"
                    className="img-huella-swipe "
                    onClick={() => {
                      setOpacity(true);
                      setOpen(!open);
                    }}
                    src="https://smob-storage.s3.us-east-2.amazonaws.com/huella-urbana-imgs/1985-2.png"
                    style={{
                      width: "40vw",
                      height: "50vh",
                      cursor: "pointer",
                    }}
                  ></img>
                </SwiperSlide>
              </Swiper>

            </div>

          </div>}
        </div>
      </div>
      {year != "Historia de la huella urbana" && (
        <div style={{ height: "auto", marginTop: "5vh" }}>
          <div >
            <center>
              <h4 style={{ color: "rgb(118, 47, 11)", fontWeight: "bold", padding: "3rem" }} className="text-responsive">
                Indicadores urbanísticos
              </h4>
            </center>
            <iframe
              className={` ${opacity ? "opacity" : " "}`}
              id="frame"
              src={dataFilter.dash}
              style={{ width: "99vw", height: "90vh" }}
              sandbox="allow-scripts allow-same-origin allow-popups"
            ></iframe>
            {year != 1600 && <iframe
              className={` ${opacity ? "opacity" : " "}`}
              id="frame"
              src={dataFilter.iframe_url}
              style={{ width: "99vw", height: "90vh" }}
              sandbox="allow-scripts allow-same-origin allow-popups"
            ></iframe>}


          </div>
        </div>
      )}
    </div>
  );
}

export default EvolucionHuella;
