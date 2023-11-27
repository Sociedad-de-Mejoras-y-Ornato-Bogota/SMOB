import data from './Libros.json';
import { useState } from 'react';
import diacritics from 'diacritics';
import './Libros.css'

const LazyLibros = () => {
  const [input, setInput] = useState('');
  const [filterType, setFilterType] = useState('titulo');
  const [selectedLetter, setSelectedLetter] = useState('');
  const [selectedType, setSelectedType] = useState('Publicaciones SMOB');
  const [selectedPresentacion, setSelectedPresentacion] = useState("Construyendo  civilidad")
  const [selectedPresentacion2, setSelectedPresentacion2] = useState("Estructura demográfica")
  const [infoPresentacion, setInfoPresentacion] = useState([])
  const [modal, setModal] = useState(false)
  const normalizedInput = diacritics.remove(input.trim().toLowerCase());

  const resetFilters = () => {
    setInput('');
    setSelectedLetter('');
  };

  const filteredData = data.filter((item) => {
    const normalizedTitle = diacritics.remove(item.title.toLowerCase());
    const normalizedAutor = diacritics.remove(item.autor.toLowerCase());

    if (selectedType !== item.type) {
      return false;
    }

    if (selectedType === "Presentaciones SMOB") {
      if(selectedPresentacion === "Componente Poblacional"){
        return item.subtype === selectedPresentacion2
      }else{
        return item.autor === selectedPresentacion
      }
  
    }

    if (selectedLetter && !normalizedInput && filterType === 'titulo') {
      return normalizedTitle.startsWith(selectedLetter);
    } else if (selectedLetter && !normalizedInput && filterType === 'autor') {
      return normalizedAutor.startsWith(selectedLetter);
    }

    if (!selectedLetter && !normalizedInput) {
      return true;
    }

    if (normalizedInput && filterType === 'titulo') {
      return normalizedTitle.includes(normalizedInput);
    } else if (normalizedInput && filterType === 'autor') {
      return normalizedAutor.includes(normalizedInput);
    }

    return false;
  });

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter.toLowerCase());
  };
  return (
    <div id='biblioteca'>
      {modal && <dialog open className='modal-reseña' >
        <header>
          <h4>{infoPresentacion[0]}</h4>
          <span style={{ position: "absolute", right: "0px", top: "0px", padding: "0.5vw", cursor: "pointer" }}
            onClick={() => {
              setModal(!modal)
            }}
          >

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40px" height="40px" fill="#91583b"><g fill="#91583b" fill-rule="nonzero"><g transform="scale(5.33333,5.33333)"><path transform="translate(24.00059,-9.94113) rotate(45.001)" d="M21.5,4.5h5.001v39h-5.001z"></path><path transform="translate(57.94113,24.00474) rotate(135.008)" d="M21.5,4.5h5v39.001h-5z"></path></g></g></svg></span>
        </header>
        <section>
          <p>{infoPresentacion[1]}</p>
        </section>
      </dialog>}
      <div className='row r-filtros-biblioteca' style={{ height: "70px", width: "100vw" }}>
        <div className="col filtros-biblioteca" style={{ display: "flex", flexDirection: "row", justifyContent: 'center', gap: "3vw", padding: "1vh 1vw" }}>
          <select className='form-select'
            style={{ width: "230px", height: "50px" }}
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)} >
            <option>Publicaciones SMOB</option>
            <option>Presentaciones SMOB</option>
            <option>Biblioteca</option>


          </select>
          <select
            className='form-select'
            style={{ width: "220px", height: "50px" }}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="titulo">Título</option>
            <option value="autor">Autor</option>
          </select>

          <input
            type='search'
            className='form-control'
            style={{ width: "300px", height: "50px" }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Escriba el título o nombre del autor a buscar'
          />

          <button onClick={resetFilters} style={{ height: "50px", width: "50px", color: "#91583B", backgroundColor: "transparent", border: "none" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48px" height="48px" fill="#91583b">
              <g fill="#91583b" fillRule="nonzero">
                <g transform="scale(5.33333,5.33333)">
                  <path transform="translate(24.00059,-9.94113) rotate(45.001)" d="M21.5,4.5h5.001v39h-5.001z"></path>
                  <path transform="translate(57.94113,24.00474) rotate(135.008)" d="M21.5,4.5h5v39.001h-5z"></path>
                </g>
              </g>
            </svg>
          </button>

        </div>
      </div>
      <div className='row' style={{ width: "100vw", height: "100px" }}>
        <div className="col abecedario" style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
          {Array.from({ length: 26 }, (_, index) => {
            const letter = String.fromCharCode(65 + index);
            return (
              <button key={letter} onClick={() => handleLetterClick(letter)} style={{ border: "none", width: "3vw", color: "#91583B" }} className='letter'>
                {letter}
              </button>
            );
          })}
          <hr />
        </div>
      </div>

      <div className='row' style={{ width: "100vw", height: "auto" }}>
        <div className="col" style={{ height: "auto", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: "3vw" }}>
          {selectedType !== "Presentaciones SMOB" && filteredData.map((item) => {
            return (
              <div className='card card-b' key={item.id} style={{ height: "auto", marginBottom: "3vh", backgroundColor: "transparent", alignItems: "center" }}>
                <img src={item.url_image} alt={item.title} style={{ height: "45vh", width: "20vw", marginBottom: "1vh" }} className='image-b' />
                <spam className="publicaciones-card-title">{item.title}</spam>
                <address className="publicaciones-card-title">{item.autor}</address>
                <a href={item.link} target='_blank' className='publicaciones-verMas'>Ver más</a>
                {/* <button className='publicaciones-verMas'>Ver más</button> */}
              </div>
            );
          })}

          {selectedType === "Presentaciones SMOB" &&
            <div className='row' style={{ height: "auto" }}>
              <div className="col filtro-publicaciones-div" style={{ display: "flex", justifyContent: "center" }}>
                <div className="filtro-publicaciones">
                  <div className={`filtro-p ${selectedPresentacion === "Construyendo  civilidad" ? "filtro-p-select" : ""}`} onClick={() => {
                    setSelectedPresentacion("Construyendo  civilidad")
                  }}>Construyendo Civilidad</div>
                  <div className={`filtro-p ${selectedPresentacion === "Marco institucional" ? "filtro-p-select" : ""}`} onClick={() => {
                    setSelectedPresentacion("Marco institucional")
                  }}>Marco Institucional</div>
                  <div className={`filtro-p ${selectedPresentacion === "Componente Poblacional" ? "filtro-p-select" : ""}`} onClick={() => {
                    setSelectedPresentacion("Componente Poblacional")
                  }}>Componente Poblacional</div>
                  <div className={`filtro-p ${selectedPresentacion === "Componente Bienestar" ? "filtro-p-select" : ""}`} onClick={() => {
                    setSelectedPresentacion("Componente Bienestar")
                  }}>Componente Bienestar</div></div>
                <hr />
              </div>
            </div>}

            {selectedPresentacion === "Componente Poblacional" &&
            <div className='row' style={{ height: "auto" }}>
              <div className="col filtro-publicaciones-div" style={{ display: "flex", justifyContent: "center" }}>
                <div className="filtro-publicaciones">
                  <div className={`filtro-p ${selectedPresentacion2 === "Estructura demográfica" ? "filtro-p-select" : ""}`} onClick={() => {
                    setSelectedPresentacion2("Estructura demográfica")
                  }}>Estructura demográfica</div>
                  <div className={`filtro-p ${selectedPresentacion2 === "Estructura socioespacial" ? "filtro-p-select" : ""}`} onClick={() => {
                    setSelectedPresentacion2("Estructura socioespacial")
                  }}>Estructura socioespacial</div>
                  <div className={`filtro-p ${selectedPresentacion2 === "Estructura socioeconómica" ? "filtro-p-select" : ""}`} onClick={() => {
                    setSelectedPresentacion2("Estructura socioeconómica")
                  }}>Estructura socioeconómica</div>
                  </div>
                <hr />
              </div>
            </div>}
            
          {selectedType === "Presentaciones SMOB" && filteredData.map((item) => {
            return (

              <div className='card pdf-b' key={item.id} style={{ height: "auto", marginBottom: "3vh", backgroundColor: "transparent", alignItems: "center" }}>
                <iframe src={item.url_image} alt={item.title} style={{ height: "45vh", width: "40vw", marginBottom: "1vh" }} className='pdf-b' />
                <spam className="publicaciones-card-title">{item.title}</spam>
                <button className='publicaciones-verMas' onClick={() => {
                  setInfoPresentacion([item.title, item.link])
                  setModal(true)
                }}>Ver más</button>
              </div>
            );
          })}

          {filteredData.length === 0 && <address className="publicaciones-card-title">No se encontraron resultados.</address>}
        </div>
      </div>

    </div>
  );
};

export default LazyLibros;