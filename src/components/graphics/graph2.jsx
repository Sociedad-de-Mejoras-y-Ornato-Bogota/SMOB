import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import "./graph.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Popup from "./pupUp";
import Popup2 from "./popUp2";
import PopupSlide from "./popUpSlide";
import PopupInfo from "./popUpInfo";
import PopupDiff from "./popUpDifference";
import "reactjs-popup/dist/index.css";
import PopupDifference from "./popUpDifference";

const Graph2 = () => {
  const d1 = ((window.innerWidth / 10) * 9.2);
  const d2 = ((window.innerHeight / 10) * 8.5);
  const [chartWidth, setChartWidth] = useState(d1); // Ancho inicial del gráfico
  const [chartHeight, setChartHeight] = useState(d2); // Alto inicial del gráfico


  const images = [
    'https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/recursos_15_02_2024/E.1.4-Decreto-1119-1968.png',
    'https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/recursos_15_02_2024/PLANO 1968.PNG',
  ];

  useEffect(() => {
    const handleResize = () => {
      setChartWidth((window.innerWidth / 10) * 9.2); // Ajustar el ancho según el tamaño de la ventana
      setChartHeight((window.innerHeight / 10) * 8.5); // Ajustar el alto según el tamaño de la ventana
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
      backgroundColor: '#00FF0000',
    },

    tooltip: {
      enabled: true,
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Color de fondo del tooltip
      borderColor: '#000', // Color del borde del tooltip
      borderRadius: 5, // Radio de borde del tooltip
      borderWidth: 1, // Ancho del borde del tooltip
      style: {
        color: '#333', // Color del texto del tooltip
        fontSize: '12px' // Tamaño de fuente del texto del tooltip
      },
      zIndex: 9000, // Establecer el zIndex para el tooltip
      // Otras configuraciones del tooltip...
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
      gridLineWidth: 0,
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
          106745,
          110289,
          113973,
          117802,
          121807,
          125973,
          130332,
          134867,
          139615,
          144557,
          149703,
          155063,
          160645,
          166460,
          172519,
          178834,
          185415,
          192275,
          199428,
          206886,
          214665,
          222780,
          231290,
          240171,
          249490,
          259270,
          269537,
          280372,
          291868,
          304068,
          316960,
          330653,
          345334,
          361012,
          377691,
          395744,
          415215,
          436640,
          460131,
          485807,
          514275,
          546160,
          581715,
          620806,
          663394,
          709566,
          759093,
          812382,
          869249,
          929922,
          994459,
          1063076,
          1135578,
          1212116,
          1293085,
          1378429,
          1467751,
          1561394,
          1659449,
          1762335,
          1869485,
          1980533,
          2095403,
          2214841,
          2337987,
          2465407,
          2596567,
          2730030,
          2865440,
          2998396,
          3131525,
          3259917,
          3383794,
          3506964,
          3630409,
          3753117,
          3876219,
          4000258,
          4125066,
          4250881,
          4376707,
          4503632,
          4629733,
          4755662,
          4882163,
          5009197,
          5135929,
          5263300,
          5390988,
          5518215,
          5645134,
          5771303,
          5894809,
          6017421,
          6137769,
          6255614,
          6370718,
          6484116,
          6593050,
          6695901,
          6790992,
          6873842,
          6945389,
          7009432,
          7062402,
          7102952,
          7136774,
          7169750,
          7201046,
          7233450,
          7268171,
          7304512,
          7352743,
          7428317,
          7615712,
          7760096,
          7839641,
          7889727,
          7923763,
          7946067,
          7954444,
          7952295
        ],
        color: "rgb(42, 121, 75)",

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

  const [showPopupImg68, setShowPopupImg68] = useState(false);

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

  const [showPopupPDF67, setShowPopupPDF67] = useState(false);
  const [showPopupPDF68, setShowPopupPDF68] = useState(false);

  // USE STATE -- TERCERO -- INFORMACIÓN
  const [showPopupInfo, setShowPopupInfo] = useState(false);
  const [popupText, setPopupText] = useState([]);

  // USE STATE -- CUARTO -- DIFERENCIA
  const [activeDivId, setActiveDivId] = useState(null);

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

  const handleDivClickImg68 = () => {
    setShowPopupImg68(true);
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
  const handleDivClickPDF67 = () => {
    setShowPopupPDF67(true);
  };
  const handleDivClickPDF68 = () => {
    setShowPopupPDF68(true);
  };

  /** TERCERO - INFO CUADROS */
  const handleDivClickInfo = (text) => {
    setShowPopupInfo(true);
    setPopupText(text);
  };

  /** CUARTO - DIFERENCIAS */
  const handleDivMouseOver = (divId) => {
    setActiveDivId(divId);
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

  const handleClosePopupImg68 = () => {
    console.log("Cerrando el pop-up");
    setShowPopupImg68(false);
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

  const handleClosePopupPDF67 = () => {
    console.log("Cerrando el pop-up");
    setShowPopupPDF67(false);
  };

  const handleClosePopupPDF68 = () => {
    console.log("Cerrando el pop-up");
    setShowPopupPDF68(false);
  };

  // Cerrar popup -- TERCERO -- INFORMACIÓN
  const handleClosePopupInfo = () => {
    console.log("Cerrando el pop-up");
    setShowPopupInfo(false);
  };

  // Cerrar popup -- CUARTO -- DIFERENCIAS
  const handleDivMouseOut = () => {
    setActiveDivId(null);
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
      {showPopupImg68 && (
        <PopupSlide
          imageUrls={images}
          onClose={handleClosePopupImg68}
        />
      )}

      {showPopupE && (
        <Popup2
          onClose={handleClosePopupE}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/recursos_15_02_2024/ACUERDO NUMERO 10 DE 1902.pdf"
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
      {showPopup4E && <Popup2 onClose={handleClosePopup4E} url="https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/recursos_15_02_2024/Breve reseña de la Fase II.pdf" />}
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
      {showPopupPDF67 && (
        <Popup2
          onClose={handleClosePopupPDF67}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/ACUERDO+65+DE+1967.pdf"
        />
      )}
      {showPopupPDF68 && (
        <Popup2
          onClose={handleClosePopupPDF68}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/recursos_15_02_2024/DECRETO+1119+DE+1968.pdf"
        />
      )}

      {showPopupInfo && (
        <PopupInfo onClose={handleClosePopupInfo} text={[popupText]} />
      )}

      {/* POPUPS DIFERENCIA */}
      {activeDivId === 2 && (
        <PopupDifference content={'115.817'} valueHA={'541'} />
      )}

      {activeDivId === 3 && (
        <PopupDifference content={'115.988'} valueHA={'489'} />
      )}
      {activeDivId === 4 && (
        <PopupDifference content={'428.440'} valueHA={'3.950'} />
      )}
      {activeDivId === 5 && (
        <PopupDifference content={'1.970.937'} valueHA={'10.910'} />
      )}
      {activeDivId === 6 && (
        <PopupDifference content={'117.211'} valueHA={'Value'} />
      )}
      {activeDivId === 7 && (
        <PopupDifference content={'4.567'} valueHA={'Value'} />
      )}
      {activeDivId === 8 && (
        <PopupDifference content={'401.495'} valueHA={'10.0858'} />
      )}
      {activeDivId === 9 && (
        <PopupDifference content={'498.884'} valueHA={'2.435'} />
      )}
      {activeDivId === 10 && (
        <PopupDifference content={'1.378.788'} valueHA={'602'} />
      )}
      {activeDivId === 11 && (
        <PopupDifference content={'1.246.617'} valueHA={'9.831'} />
      )}
      {activeDivId === 12 && (
        <PopupDifference content={'440.287'} />
      )}
      {activeDivId === 13 && (
        <PopupDifference content={'505.147'} />
      )}
      {activeDivId === 14 && (
        <PopupDifference content={'638.595'} />
      )}
      {activeDivId === 15 && (
        <PopupDifference content={'122.654'} />
      )}

      <div className="contentG">
        <div className="graphs">
          <div className="graphs-2">
            <div className="linea2G2" />
            <div className="linea3G2" />
            <div className="linea4G2" />
            <div className="linea5G2" />
            <div className="linea7G2" />
            <div className="linea8G2" />
            <div className="linea9G2" />
            <div className="linea10G2" />
            <div className="linea11G2" />
            <div className="linea12G2" />
            <div className="linea13G2" />
            <div className="linea14G2" />
            <div className="linea15G2" />
            <span style={{ position: "absolute", zIndex: "9", fontSize: "0.8vw", width: "97%", textAlign: "center", color: "red", marginBottom: "-83vh" }}>*Los años marcados en color rojo corresponden a años censales</span>
            <div className="linea1G2"></div>
            <div className="cuadro1G2">
              <p style={{ width: '100%' }}>
                <h1 className="h1-c">
                  {" "}
                  <strong>1902</strong>
                </h1>
                <div className="div-graph-button">
                  <button className="cu2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Information-icon.svg/2048px-Information-icon.svg.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={() => handleDivClickInfo(["Acuerdo 10.", "679 ha", "Pobl. 98.848"])}
                    />
                  </button>
                  <button className="cu2">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={handleDivClickE}
                    />
                  </button>
                </div>
              </p>
            </div>
            <div className="cuadro2G2">
              <p style={{ width: '100%' }}>
                <h1 className="h1-c">
                  {" "}
                  <strong>1925</strong>
                </h1>
                <div className="div-graph-button">
                  <button className="cu">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={handleDivClick1}
                    />
                  </button>
                  <button className="cu2">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={handleDivClick1E}
                    />
                  </button>

                </div>
                <div className="div-graph-button">
                  <button className="cu2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Information-icon.svg/2048px-Information-icon.svg.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={() => handleDivClickInfo(["Bogotá futuro.", "1.120 ha", "Pobl. 214.665"])}
                    />
                  </button>
                </div>

              </p>
            </div>
            <div className="cuadro3G2">
              <p>
                <h1 className="h1-c">
                  {" "}
                  <strong>1936</strong>
                </h1>
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
                <div className="div-graph-button">
                  <button className="cu2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Information-icon.svg/2048px-Information-icon.svg.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={() => handleDivClickInfo(["Plan Brunner.", "1.609 ha", "Pobl. 330.653"])}
                    />
                  </button>
                </div>
              </p>
            </div>
            <div className="cuadro4G2">
              <p>
                <h1 className="h1-c">
                  <strong>1951</strong>
                </h1>
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
                <div className="div-graph-button">
                  <button className="cu2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Information-icon.svg/2048px-Information-icon.svg.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={() => handleDivClickInfo(["Plan Piloto.", "5.558 ha", "Pobl. 759.093"])}
                    />
                  </button>
                </div>
              </p>
            </div>
            <div className="cuadro5_1G2">
              <p>
                <h1 className="h1-c">
                  <strong>1967</strong>
                </h1>
                <div className="div-graph-button">
                  <button className="cu">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Information-icon.svg/2048px-Information-icon.svg.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={() => handleDivClickInfo(["Acuerdo 65", "de 1967", "26.526 ha", "Pobl. 2.095.403"])}
                    />
                  </button>
                  <button className="cu2">
                    <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png" alt="Icono" width="20" height="20" onClick={handleDivClickPDF67} />
                  </button>
                </div>
              </p>
            </div>

            <div className="cuadro5_2G2">
              <p>
                <h1 className="h1-c">
                  <strong>1968</strong>
                </h1>
                <div className="div-graph-button">
                  <button className="cu">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClickImg68}
                    />
                  </button>
                  <button className="cu2">
                    <img
                      src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png"
                      alt="Icono"
                      width="20"
                      height="20"
                      onClick={handleDivClickPDF68}
                    />
                  </button>
                </div>
                <div className="div-graph-button">
                  <button className="cu2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Information-icon.svg/2048px-Information-icon.svg.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={() => handleDivClickInfo(["Decreto 1119", "de 1968", "26.526 ha", "Pobl. 2.214.841"])}
                    />
                  </button>
                </div>

              </p>
            </div>
            <div className="cuadro5G2">
              <p>
                <h1 className="h1-c">
                  <strong> 1972</strong>
                </h1>
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
                <div className="div-graph-button">
                  <button className="cu2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Information-icon.svg/2048px-Information-icon.svg.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={() => handleDivClickInfo(["Fase II (ciudades ciudades)", "entre", "5.558 ha", "Pobl. 2.730.030"])}
                    />
                  </button>
                </div>
              </p>
            </div>
            <div className="cuadro6G2">
              <p>
                <h1 className="h1-c">
                  <strong>1975</strong>
                </h1>
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
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Information-icon.svg/2048px-Information-icon.svg.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={() => handleDivClickInfo(["Plan de", "desarrollo", "urbano", "26.526 ha", "Pobl. 3.131.525"])}
                    />
                  </button>
                </div>

              </p>
            </div>
            <div className="cuadro7G2">
              <p>
                <h1 className="h1-c">
                  {" "}
                  <strong>1979</strong>
                </h1>
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
                <div className="div-graph-button">
                  <button className="cu2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Information-icon.svg/2048px-Information-icon.svg.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={() => handleDivClickInfo(["Acuerdo 7.", "28.961 ha", "Pobl. 3.630.409"])}
                    />
                  </button>
                </div>

              </p>
            </div>
            <div className="cuadro8G2">
              <p>
                <h1 className="h1-c">
                  {" "}
                  <strong>1990</strong>
                </h1>
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
                <div className="div-graph-button">
                  <button className="cu2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Information-icon.svg/2048px-Information-icon.svg.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={() => handleDivClickInfo(["Acuerdo 6.", "29.564 ha", "Pobl. 5.009.197"])}
                    />
                  </button>
                </div>
              </p>
            </div>
            <div className="cuadro9G2">
              <p>
                <h1 className="h1-c">
                  {" "}
                  <strong>2000</strong>
                </h1>
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
                <div className="div-graph-button">
                  <button className="cu2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Information-icon.svg/2048px-Information-icon.svg.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={() => handleDivClickInfo(["Decreto 619.", "39.395 ha", "Pobl. 6.255.614"])}
                    />
                  </button>
                </div>
              </p>
            </div>
            <div className="cuadro10G2">
              <p>
                <h1 className="h1-c">
                  {" "}
                  <strong>2004</strong>
                </h1>
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
                <div className="div-graph-button">
                  <button className="cu2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Information-icon.svg/2048px-Information-icon.svg.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={() => handleDivClickInfo(["Decreto 190.", "40.958 ha", "Pobl. 6.695.901"])}
                    />
                  </button>
                </div>
              </p>
            </div>
            <div className="cuadro11G2">
              <p>
                <h1 className="h1-c">
                  {" "}
                  <strong>2013</strong>
                </h1>
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
                <div className="div-graph-button">
                  <button className="cu2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Information-icon.svg/2048px-Information-icon.svg.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={() => handleDivClickInfo(["MePOT.", "41.598 ha", "Pobl. 7.201.046"])}
                    />
                  </button>
                </div>
              </p>
            </div>
            <div className="cuadro12G2">
              <p>
                <h1 className="h1-c">
                  {" "}
                  <strong>2021</strong>
                </h1>
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
                <div className="div-graph-button">
                  <button className="cu2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Information-icon.svg/2048px-Information-icon.svg.png"
                      alt="Icono"
                      className="tamañoimagen"
                      onClick={() => handleDivClickInfo(["Decreto 555.", "39.405 ha", "Pobl. 7.839.641"])}
                    />
                  </button>
                </div>
              </p>
            </div>

            <div className="m1G2">
              <p>
                <h3 className="h3-c1">115.817</h3>
              </p>
            </div>
            <div className="m2G2">
              <p>
                <h3 className="h3-c1">115.988</h3>
              </p>
            </div>
            <div className="m3G2">
              <p>
                <h3 className="h3-c1">428.440</h3>
              </p>
            </div>
            <div className="m4G2">
              <p>
                <h3 className="h3-c1">1.970.937</h3>
              </p>
            </div>
            <div className="m13G2">
              <p>
                <h3 className="h3-c1">14.026</h3>
              </p>
            </div>
            <div className="m5G2">
              <p>
                <h3 className="h3-c1">401.495</h3>
              </p>
            </div>
            <div className="m6G2">
              <p>
                <h3 className="h3-c1">498.884</h3>
              </p>
            </div>
            <div className="m7G2">
              <p>
                <h3 className="h3-c1">1.378.788</h3>
              </p>
            </div>
            <div className="m8G2">
              <p>
                <h3 className="h3-c1">1.246.617</h3>
              </p>
            </div>
            <div className="m9G2">
              <p>
                <h3 className="h3-c1">440.287</h3>
              </p>
            </div>
            <div className="m10G2">
              <p>
                <h3 className="h3-c1">505.147</h3>
              </p>
            </div>
            <div className="m11G2">
              <p>
                <h3 className="h3-c1">638.595</h3>
              </p>
            </div>
            <div className="m12G2">
              <p>
                <h3 className="h3-c1">112.654</h3>
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
            <div className="divHigcharts">
              <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
          </div>
        </div>
        <div className="linea6G2" onMouseOver={() => handleDivMouseOver(7)} onMouseOut={handleDivMouseOut} />
      </div>

    </>
  );
};

export default Graph2;
