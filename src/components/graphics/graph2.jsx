import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import "./graph.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Popup from "./pupUp";
import Popup2 from "./popUp2";
import "reactjs-popup/dist/index.css";
// import icono from '../../assets/icons/imagen.png';
// import icono1 from '../../assets/icons/pdf.png';



const Graph2 = () => {
  const d1 = ((window.innerWidth / 10) * 8);
  const d2 = ((window.innerHeight / 10) * 8);
  const [chartWidth, setChartWidth] = useState(d1); // Ancho inicial del gráfico
  const [chartHeight, setChartHeight] = useState(d2); // Alto inicial del gráfico

  useEffect(() => {
    const handleResize = () => {
      setChartWidth((window.innerWidth / 10) * 8); // Ajustar el ancho según el tamaño de la ventana
      setChartHeight((window.innerHeight / 10) * 8); // Ajustar el alto según el tamaño de la ventana
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const options = {
    chart: {
      type: 'line',
      width: chartWidth,
      height: chartHeight,
    },
    title: {
      // text: "Crecimiento de la población de Bogotá 1900 - 2025 con Planes de Desarrollo y Ordenamiento",
      align: "center",
      text: ""
    },
    plotOptions: { line: { marker: { enabled: false } } },
    yAxis: {
      min: 0,
      max: 9000000,
      title: {
        text: "",
      },
      labels: {
        tickInterval: 1000,
        gridLineWidth: 0,
        formatter: function () {

          const options = {
            groupingSize: 3,
            locale: "en-US",
          };

          const formattedNumber = Intl.NumberFormat("de-DE", options).format(this.value);
          return formattedNumber
        }
      },
      tickInterval: 1000000,
      gridLineWidth: 0,
    },
    xAxis: {
      tickInterval: 5,
      tickPixelInterval: "1",
      categories: [
        "1900",
        "1901",
        "1902",
        "1903",
        "1904",
        "1905",
        "1906",
        "1907",
        "1908",
        "1909",
        "1910",
        "1911",
        "1912",
        "1913",
        "1914",
        "1915",
        "1916",
        "1917",
        "1918",
        "1919",
        "1920",
        "1921",
        "1922",
        "1923",
        "1924",
        "1925",
        "1926",
        "1927",
        "1928",
        "1929",
        "1930",
        "1931",
        "1932",
        "1933",
        "1934",
        "1935",
        "1936",
        "1937",
        "1938",
        "1939",
        "1940",
        "1941",
        "1942",
        "1943",
        "1944",
        "1945",
        "1946",
        "1947",
        "1948",
        "1949",
        "1950",
        "1951",
        "1952",
        "1953",
        "1954",
        "1955",
        "1956",
        "1957",
        "1958",
        "1959",
        "1960",
        "1961",
        "1962",
        "1963",
        "1964",
        "1965",
        "1966",
        "1967",
        "1968",
        "1969",
        "1970",
        "1971",
        "1972",
        "1973",
        "1974",
        "1975",
        "1976",
        "1977",
        "1978",
        "1979",
        "1980",
        "1981",
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025",
        "2026",
      ],
      labels: {
        format: "{value}",
        style: {
          font: "16px Lora, sans-serif",
        },
      },
      /*plotLines: [{
              zIndex: 0,
              color: '#FF0000', // Red
              width: 2,
              value:2, // Position, you'll have to translate this to the values on your x axis
              label: {
                  text: 'Latest value',
                  align: 'right',
                  y: 90,
                  x: 0
              }
          }]*/
    },
    series: [
      {
        name: "Poblacion Bogotá",
        data: [
          96668,
          97748,
          98848,
          99908,
          100988,
          103778,
          107431,
          111255,
          115238,
          119410,
          123757,
          128311,
          133058,
          138048,
          143266,
          148710,
          154379,
          160279,
          166434,
          172842,
          179514,
          186461,
          193695,
          201230,
          209078,
          217253,
          225750,
          234578,
          243780,
          253350,
          263325,
          273750,
          284628,
          295977,
          307790,
          320123,
          333057,
          346658,
          361032,
          376459,
          393654,
          412532,
          433618,
          456615,
          482113,
          510390,
          542527,
          578424,
          617874,
          661026,
          708139,
          759227,
          813739,
          871698,
          933126,
          997993,
          1066460,
          1138618,
          1214544,
          1294515,
          1379142,
          1468145,
          1560911,
          1657855,
          1759954,
          1866846,
          1977912,
          2093021,
          2210232,
          2330135,
          2452015,
          2575981,
          2700141,
          2825125,
          2950241,
          3075832,
          3201841,
          3328164,
          3454966,
          3581986,
          3709114,
          3836722,
          3964513,
          4092162,
          4218993,
          4344995,
          4471624,
          4597845,
          4723948,
          4849900,
          4975531,
          5100589,
          5225574,
          5349677,
          5473625,
          5597162,
          5720138,
          5841838,
          5962880,
          6083860,
          6203175,
          6321544,
          6437668,
          6553211,
          6666694,
          6776691,
          6881787,
          6976654,
          7064548,
          7145212,
          7214673,
          7272166,
          7319643,
          7355223,
          7379697,
          7396539,
          7407099,
          7411099,
          7412566,
          7592871,
          7732161,
          7823334,
          7873316,
          7907281,
          7929539,
          7937898,
          "",
        ],
        color: "rgb(42, 121, 75)",
        zIndex: 5,
      },
    ],
    responsive: {
      rules: [
        {
          condition: {},
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
  //primero
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [showPopup5, setShowPopup5] = useState(false);
  const [showPopup6, setShowPopup6] = useState(false);
  const [showPopup7, setShowPopup7] = useState(false);
  const [showPopup8, setShowPopup8] = useState(false);
  const [showPopup9, setShowPopup9] = useState(false);
  const [showPopup10, setShowPopup10] = useState(false);
  const [showPopup11, setShowPopup11] = useState(false);
  //segundo
  const [showPopupE, setShowPopupE] = useState(false);
  const [showPopup1E, setShowPopup1E] = useState(false);
  const [showPopup2E, setShowPopup2E] = useState(false);
  const [showPopup3E, setShowPopup3E] = useState(false);
  const [showPopup4E, setShowPopup4E] = useState(false);
  const [showPopup5E, setShowPopup5E] = useState(false);
  const [showPopup6E, setShowPopup6E] = useState(false);
  const [showPopup7E, setShowPopup7E] = useState(false);
  const [showPopup8E, setShowPopup8E] = useState(false);
  const [showPopup9E, setShowPopup9E] = useState(false);
  const [showPopup10E, setShowPopup10E] = useState(false);
  const [showPopup11E, setShowPopup11E] = useState(false);
  //primero
  const handleDivClick = () => {
    setShowPopup(true);
  };
  const handleDivClick1 = () => {
    setShowPopup1(true);
  };
  const handleDivClick2 = () => {
    setShowPopup2(true);
  };
  const handleDivClick3 = () => {
    setShowPopup3(true);
  };
  const handleDivClick4 = () => {
    setShowPopup4(true);
  };
  const handleDivClick5 = () => {
    setShowPopup5(true);
  };
  const handleDivClick6 = () => {
    setShowPopup6(true);
  };
  const handleDivClick7 = () => {
    setShowPopup7(true);
  };
  const handleDivClick8 = () => {
    setShowPopup8(true);
  };
  const handleDivClick9 = () => {
    setShowPopup9(true);
  };
  const handleDivClick10 = () => {
    setShowPopup10(true);
  };
  const handleDivClick11 = () => {
    setShowPopup11(true);
  };
  //segundo
  const handleDivClickE = () => {
    setShowPopupE(true);
  };
  const handleDivClick1E = () => {
    setShowPopup1E(true);
  };
  const handleDivClick2E = () => {
    setShowPopup2E(true);
  };
  const handleDivClick3E = () => {
    setShowPopup3E(true);
  };
  const handleDivClick4E = () => {
    setShowPopup4E(true);
  };
  const handleDivClick5E = () => {
    setShowPopup5E(true);
  };
  const handleDivClick6E = () => {
    setShowPopup6E(true);
  };
  const handleDivClick7E = () => {
    setShowPopup7E(true);
  };
  const handleDivClick8E = () => {
    setShowPopup8E(true);
  };
  const handleDivClick9E = () => {
    setShowPopup9E(true);
  };
  const handleDivClick10E = () => {
    setShowPopup10E(true);
  };
  const handleDivClick11E = () => {
    setShowPopup11E(true);
  };
  //primero
  const handleClosePopup = () => {
    console.log("Cerrando el pop-up");
    setShowPopup(false);
  };
  const handleClosePopup1 = () => {
    console.log("Cerrando el pop-up");
    setShowPopup1(false);
  };
  const handleClosePopup2 = () => {
    console.log("Cerrando el pop-up");
    setShowPopup2(false);
  };
  const handleClosePopup3 = () => {
    console.log("Cerrando el pop-up");
    setShowPopup3(false);
  };
  const handleClosePopup4 = () => {
    console.log("Cerrando el pop-up");
    setShowPopup4(false);
  };
  const handleClosePopup5 = () => {
    console.log("Cerrando el pop-up");
    setShowPopup5(false);
  };
  const handleClosePopup6 = () => {
    console.log("Cerrando el pop-up");
    setShowPopup6(false);
  };
  const handleClosePopup7 = () => {
    console.log("Cerrando el pop-up");
    setShowPopup7(false);
  };
  const handleClosePopup8 = () => {
    console.log("Cerrando el pop-up");
    setShowPopup8(false);
  };
  const handleClosePopup9 = () => {
    console.log("Cerrando el pop-up");
    setShowPopup9(false);
  };
  const handleClosePopup10 = () => {
    console.log("Cerrando el pop-up");
    setShowPopup10(false);
  };
  const handleClosePopup11 = () => {
    console.log("Cerrando el pop-up");
    setShowPopup11(false);
  };
  //segundo
  const handleClosePopupE = () => {
    console.log("Cerrando el pop-up");
    setShowPopupE(false);
  };
  const handleClosePopup1E = () => {
    console.log("Cerrando el pop-up");
    setShowPopup1E(false);
  };
  const handleClosePopup2E = () => {
    console.log("Cerrando el pop-up");
    setShowPopup2E(false);
  };
  const handleClosePopup3E = () => {
    console.log("Cerrando el pop-up");
    setShowPopup3E(false);
  };
  const handleClosePopup4E = () => {
    console.log("Cerrando el pop-up");
    setShowPopup4E(false);
  };
  const handleClosePopup5E = () => {
    console.log("Cerrando el pop-up");
    setShowPopup5E(false);
  };
  const handleClosePopup6E = () => {
    console.log("Cerrando el pop-up");
    setShowPopup6E(false);
  };
  const handleClosePopup7E = () => {
    console.log("Cerrando el pop-up");
    setShowPopup7E(false);
  };
  const handleClosePopup8E = () => {
    console.log("Cerrando el pop-up");
    setShowPopup8E(false);
  };
  const handleClosePopup9E = () => {
    console.log("Cerrando el pop-up");
    setShowPopup9E(false);
  };
  const handleClosePopup10E = () => {
    console.log("Cerrando el pop-up");
    setShowPopup10E(false);
  };
  const handleClosePopup11E = () => {
    console.log("Cerrando el pop-up");
    setShowPopup11E(false);
  };
  return (
    <>
      {showPopup && (
        <Popup
          imageUrl=""
          onClose={handleClosePopup}
        />
      )}
      {showPopup1 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.1-Bogota-futuro.png"
          onClose={handleClosePopup1}
        />
      )}
      {showPopup2 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.2-Brunner.png"
          onClose={handleClosePopup2}
        />
      )}
      {showPopup3 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.3-Le-Corbusier.png"
          onClose={handleClosePopup3}
        />
      )}
      {showPopup4 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.4-Fase-2-1972.png"
          onClose={handleClosePopup4}
        />
      )}
      {showPopup5 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.5-plan-desarrollo-urbano-1975.png"
          onClose={handleClosePopup5}
        />
      )}
      {showPopup6 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.6-Acuerdo-7-1979.png"
          onClose={handleClosePopup6}
        />
      )}
      {showPopup7 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.7-Acuerdo-6-1990.png"
          onClose={handleClosePopup7}
        />
      )}
      {showPopup8 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.8-Decreto-619-2000.png"
          onClose={handleClosePopup8}
        />
      )}
      {showPopup9 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.9-Decreto-190-2004.png"
          onClose={handleClosePopup9}
        />
      )}
      {showPopup10 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.10-Mepot-2013.png"
          onClose={handleClosePopup10}
        />
      )}
      {showPopup11 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.12-Decreto-555-2021.png"
          onClose={handleClosePopup11}
        />
      )}
      {showPopupE && (
        <Popup2
          onClose={handleClosePopupE}
          url=""
        />
      )}
      {showPopup1E && (
        <Popup2
          onClose={handleClosePopup1E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/ACUERDO%2074%20DE%201925%20BOGOTA%20FUTURO.pdf"
        />
      )}
      {showPopup2E && (
        <Popup2
          onClose={handleClosePopup2E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/ACUERDO%2028%20DE%201933-BRUNNER.pdf"
        />
      )}
      {showPopup3E && <Popup2 onClose={handleClosePopup3E} url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/DECRETO%20185%20DE%201951-LE%20CORBUSIER.pdf" />}
      {showPopup4E && <Popup2 onClose={handleClosePopup4E} url="" />}
      {showPopup5E && (
        <Popup2
          onClose={handleClosePopup5E}
          url=""
        />
      )}
      {showPopup6E && (
        <Popup2
          onClose={handleClosePopup6E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/ACUERDO 7 1979.pdf"
        />
      )}
      {showPopup7E && (
        <Popup2
          onClose={handleClosePopup7E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/Acuerdo 6 de 1990.pdf"
        />
      )}
      {showPopup8E && (
        <Popup2
          onClose={handleClosePopup8E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/DECRETO 619 DE 2000.pdf"
        />
      )}
      {showPopup9E && (
        <Popup2
          onClose={handleClosePopup9E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/DECRETO190 DE 2004.pdf"
        />
      )}
      {showPopup10E && (
        <Popup2
          onClose={handleClosePopup10E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/DECRETO 364 DE 2013.pdf"
        />
      )}
      {showPopup11E && (
        <Popup2
          onClose={handleClosePopup11E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/DECRETO 555 DE 2021.pdf"
        />
      )}
      <div className="contentG">
        <div className="graphs">
          <div className="graphs-2">
          <span style={{position:"absolute", zIndex:"9", fontSize:"0.8vw",width:"80%", textAlign:"center",color:"red", marginBottom:"-78vh"}}>*Los años marcados en color rojo corresponden a años censales</span>
            <div className="linea1G2"></div>
            <div className="cuadro1G2">
              <p>
                <h1 className="h1-c">
                  {" "}
                  <strong>1902</strong>
                </h1>
                <h3 className="h3-c">Acuerdo 10.</h3>
                <h3 className="h3-c">679 ha</h3>
                <h3 className="h3-c">Pobl. 98.848</h3>
                <div className="div-graph-button">
                  <button className="cu">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick}
                    />
                  </button>
                  <button className="cu2">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClickE}
                    />
                  </button>
                </div>
              </p>
            </div>
            <div className="linea2G2"></div>
            <div className="cuadro2G2">
              <p>
                <h1 className="h1-c">
                  {" "}
                  <strong>1925</strong>
                </h1>
                <h3 className="h3-c">Bogotá futuro.</h3>
                <h3 className="h3-c">1.120 ha</h3>
                <h3 className="h3-c">Pobl. 217.253</h3>
                <div className="div-graph-button">
                  <button className="cu">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick1}
                    />
                  </button>
                  <button className="cu2">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick1E}
                    />
                  </button>

                </div>

              </p>
            </div>
            <div className="linea3G2"></div>
            <div className="cuadro3G2">
              <p>
                <h1 className="h1-c">
                  {" "}
                  <strong>1936</strong>
                </h1>
                <h3 className="h3-c">Plan Brunner.</h3>
                <h3 className="h3-c">1.609 ha</h3>
                <h3 className="h3-c">Pobl. 333.057</h3>
                <div className="div-graph-button">
                  <button className="cu">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick2}
                    />
                  </button>
                  <button className="cu2">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick2E}
                    />
                  </button>
                </div>

              </p>
            </div>
            <div className="linea4G2"></div>
            <div className="cuadro4G2">
              <p>
                <h1 className="h1-c">
                  <strong>1951</strong>
                </h1>
                <h3 className="h3-c">Plan Piloto.</h3>
                <h3 className="h3-c">5.558 ha</h3>
                <h3 className="h3-c">Pobl. 759.227</h3>
                <div className="div-graph-button">
                  <button className="cu">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick3}
                    />
                  </button>
                  <button className="cu2">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick3E}
                    />
                  </button>
                </div>

              </p>
            </div>
            <div className="linea5G2"></div>
            <div className="cuadro5G2">
              <p>
                <h1 className="h1-c">
                  <strong> 1972</strong>
                </h1>
                <h3 className="h3-c">Fase II </h3>
                <h3 className="h3-c">(ciudades</h3>
                <h3 className="h3-c">entre</h3>
                <h3 className="h3-c"> ciudades)</h3>
                <h3 className="h3-c">5.558 ha</h3>
                <h3 className="h3-c">Pobl. 759.227</h3>
                <div className="div-graph-button">
                  <button className="cu-e">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick4}
                    />
                  </button>
                  <button className="cu2-e">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick4E}
                    />
                  </button>
                </div>

              </p>
            </div>
            <div className="linea6G2"></div>
            <div className="cuadro6G2">
              <p>
                <h1 className="h1-c">
                  <strong>1975</strong>
                </h1>
                <h3 className="h3-c">Plan de desarrollo urbano</h3>
                <h3 className="h3-c">26.526 ha</h3>
                <h3 className="h3-c">Pobl. 3.075.832</h3>
                <div className="div-graph-button">
                  <button className="cu">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick5}
                    />
                  </button>
                  <button className="cu2">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick5E}
                    />
                  </button>
                </div>

              </p>
            </div>
            <div className="linea7G2"></div>
            <div className="cuadro7G2">
              <p>
                <h1 className="h1-c">
                  {" "}
                  <strong>1979</strong>
                </h1>
                <h3 className="h3-c">Acuerdo 7.</h3>
                <h3 className="h3-c">28.961 ha</h3>
                <h3 className="h3-c">Pobl. 3.581.986</h3>
                <div className="div-graph-button">
                  <button className="cu">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick6}
                    />
                  </button>
                  <button className="cu2">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick6E}
                    />
                  </button>
                </div>

              </p>
            </div>
            <div className="linea8G2"></div>
            <div className="cuadro8G2">
              <p>
                <h1 className="h1-c">
                  {" "}
                  <strong>1990</strong>
                </h1>
                <h3 className="h3-c">Acuerdo 6.</h3>
                <h3 className="h3-c">29.564 ha</h3>
                <h3 className="h3-c">Pobl. 4.975.531</h3>
                <div className="div-graph-button">
                  <button className="cu">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick7}
                    />
                  </button>
                  <button className="cu2">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick7E}
                    />
                  </button>
                </div>

              </p>
            </div>
            <div className="linea9G2"></div>
            <div className="cuadro9G2">
              <p>
                <h1 className="h1-c">
                  {" "}
                  <strong>2000</strong>
                </h1>
                <h3 className="h3-c">Decreto 619.</h3>
                <h3 className="h3-c">39.395 ha</h3>
                <h3 className="h3-c">Pobl. 6.203.175</h3>
                <div className="div-graph-button">
                  <button className="cu">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick8}
                    />
                  </button>
                  <button className="cu2">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick8E}
                    />
                  </button>
                </div>

              </p>
            </div>
            <div className="linea10G2"></div>
            <div className="cuadro10G2">
              <p>
                <h1 className="h1-c">
                  {" "}
                  <strong>2004</strong>
                </h1>
                <h3 className="h3-c">Decreto 190.</h3>
                <h3 className="h3-c">40.958 ha</h3>
                <h3 className="h3-c">Pobl. 6.666.694</h3>
                <div className="div-graph-button">
                  <button className="cu">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick9}
                    />
                  </button>
                  <button className="cu2">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClick9E}
                    />
                  </button>
                </div>

              </p>
            </div>
            <div className="linea11G2"></div>
            <div className="cuadro11G2">
              <p>
                <h1 className="h1-c">
                  {" "}
                  <strong>2013</strong>
                </h1>
                <h3 className="h3-c">MePOT</h3>
                <h3 className="h3-c">41.598 ha</h3>
                <h3 className="h3-c">Pobl. 7.355.223</h3>
                <div className="div-graph-button">
                <button className="cu">
                  <img
                    src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png"
                    alt="Icono"
                    width="20"
                    height="20"
                    onClick={handleDivClick10}
                  />
                </button>
                <button className="cu2">
                  <img
                    src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png"
                    alt="Icono"
                    width="20"
                    height="20"
                    onClick={handleDivClick10E}
                  />
                </button>
                </div>
              </p>
            </div>
            <div className="linea12G2"></div>
            <div className="cuadro12G2">
              <p>
                <h1 className="h1-c">
                  {" "}
                  <strong>2021</strong>
                </h1>
                <h3 className="h3-c">Decreto 555.</h3>
                <h3 className="h3-c">39.405 ha</h3>
                <h3 className="h3-c">Pobl. 7.823.334</h3>
                <div className="div-graph-button">
                <button className="cu">
                  <img
                    src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png"
                    alt="Icono"
                    width="20"
                    height="20"
                    onClick={handleDivClick11}
                  />
                </button>
                <button className="cu2">
                  <img
                    src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png"
                    alt="Icono"
                    width="20"
                    height="20"
                    onClick={handleDivClick11E}
                  />
                </button>
                </div>
               
              </p>
            </div>
            <div className="m1G2">
              <p>
                <h3 className="h3-c">118.405</h3>
              </p>
            </div>
            <div className="m2G2">
              <p>
                <h3 className="h3-c">115.804</h3>
              </p>
            </div>
            <div className="m3G2">
              <p>
                <h3 className="h3-c">426.170</h3>
              </p>
            </div>
            <div className="m4G2">
              <p>
                <h3 className="h3-c">1.940.914</h3>
              </p>
            </div>
            <div className="m5G2">
              <p>
                <h3 className="h3-c">375. 691</h3>
              </p>
            </div>
            <div className="m6G2">
              <p>
                <h3 className="h3-c">506.154</h3>
              </p>
            </div>
            <div className="m7G2">
              <p>
                <h3 className="h3-c">1.393.545</h3>
              </p>
            </div>
            <div className="m8G2">
              <p>
                <h3 className="h3-c">93.545</h3>
              </p>
            </div>
            <div className="m9G2">
              <p>
                <h3 className="h3-c">463. 519</h3>
              </p>
            </div>
            <div className="m10G2">
              <p>
                <h3 className="h3-c">688.529</h3>
              </p>
            </div>
            <div className="m11G2">
              <p>
                <h3 className="h3-c">688.529</h3>
              </p>
            </div>
            <div className="m12G2">
              <p>
                <h3 className="h3-c">375.691</h3>
              </p>
            </div>
            <div className="circulo1G2">
              <p>
                <h3></h3>
                <h2 className="h3-c-1">
                  <strong>541</strong>
                </h2>
                <h3 className="h3-c-1">
                  <strong>ha</strong>
                </h3>
              </p>
            </div>
            <div className="circulo2G2">
              <p>
                <h3></h3>
                <h3 className="h3-c-1">
                  <strong>489</strong>
                </h3>
                <h3 className="h3-c-1">
                  <strong>ha</strong>
                </h3>
              </p>
            </div>
            <div className="circulo3G2">
              <p>
                <h3></h3>
                <h3 className="h3-c-1">
                  <strong>3.950</strong>
                </h3>
                <h3 className="h3-c-1">
                  <strong>ha</strong>
                </h3>
              </p>
            </div>
            <div className="circulo4G2">
              <p>
                <h3></h3>
                <h3 className="h3-c-1">
                  <strong>10.910</strong>
                </h3>
                <h3 className="h3-c-1">
                  <strong>ha</strong>
                </h3>
              </p>
            </div>
            <div className="circulo5G2">
              <p>
                <h3></h3>
                <h3 className="h3-c-2">
                  <strong>10.0858</strong>
                </h3>
                <h3 className="h3-c-2">
                  <strong>ha</strong>
                </h3>
              </p>
            </div>
            <div className="circulo6G2">
              <p>
                <h3></h3>
                <h3 className="h3-c-2">
                  <strong>2.435</strong>
                </h3>
                <h3 className="h3-c-2">
                  <strong>ha</strong>
                </h3>
              </p>
            </div>
            <div className="circulo7G2">
              <p>
                <h3></h3>
                <h3 className="h3-c-1">
                  <strong>602</strong>
                </h3>
                <h3 className="h3-c-1">
                  <strong>ha</strong>
                </h3>
              </p>
            </div>
            <div className="circulo8G2">
              <p>
                <h3></h3>
                <h3 className="h3-c-1">
                  <strong>9.831</strong>
                </h3>
                <h3 className="h3-c-1">
                  <strong>ha</strong>
                </h3>
              </p>
            </div>
            <div className="circulo9G2">
              <p>
                <h3></h3>
                <h3 className="h3-c-1">
                  <strong>1.563</strong>
                </h3>
                <h3 className="h3-c-1">
                  <strong>ha</strong>
                </h3>
              </p>
            </div>
            <div className="circulo10G2">
              <p>
                <h3></h3>
                <h3 className="h3-c-1">
                  <strong>640</strong>
                </h3>
                <h3 className="h3-c-1">
                  <strong>ha</strong>
                </h3>
              </p>
            </div>
            <div className="circulo11G2">
              <p>
                <h3></h3>
                <h3 className="h3-c-1">
                  <strong>4.460</strong>
                </h3>
                <h3 className="h3-c-1">
                  <strong>ha</strong>
                </h3>
              </p>
            </div>
            <div className="circulo12G2">
              <p>
                <h3></h3>
                <h3 className="h3-c-1">
                  <strong>6.653</strong>
                </h3>
                <h3 className="h3-c-1">
                  <strong>ha</strong>
                </h3>
              </p>
            </div>
            <hr></hr>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph2;
