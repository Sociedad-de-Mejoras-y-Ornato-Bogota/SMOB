import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import './graph.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import Popup from './pupUp';
import Popup2 from "./popUp2";
import 'reactjs-popup/dist/index.css';
import PopupSlide from "./popUpSlide";
// import icono from '../../assets/icons/imagen.png';
// import icono1 from '../../assets/icons/pdf.png';

const Graph = () => {

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
      setChartHeight((window.innerHeight / 10) * 8.5);  // Ajustar el alto según el tamaño de la ventana
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
      zIndex: 9000 // Establecer el zIndex para el tooltip
      // Otras configuraciones del tooltip...
    },
    title: {
      text: '',
      align: 'center'
    },
    plotOptions: { line: { marker: { enabled: false } } },
    yAxis: {
      min: -0.6,
      max: 10,
      title: {
        text: ''
      },
      labels: {
        format: '{value} %'
      },
      tickInterval: 1,
      gridLineWidth: 0
    },
    xAxis: {
      tickInterval: 5,
      tickPixelInterval: 1,
      gridLineWidth: 0,
      categories: ['1920', '1921', '1922', '1923', '1924', '1925', '1926', '1927', '1928', '1929', '1930', '1931', '1932', '1933', '1934', '1935', '1936', '1937', '1938', '1939', '1940', '1941', '1942', '1943', '1944', '1945', '1946', '1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
      labels: {
        format: '{value}',
        style: {
          font: '16px Lora, sans-serif'
        }

      },
    },
    series: [

      {
        name: 'Tasa de crecimiento',
        data: [3.66,
          3.68,
          3.70,
          3.72,
          3.74,
          3.76,
          3.78,
          3.82,
          3.84,
          3.88,
          3.92,
          3.96,
          4.02,
          4.10,
          4.18,
          4.24,
          4.32,
          4.44,
          4.54,
          4.62,
          4.78,
          4.92,
          5.16,
          5.38,
          5.58,
          5.86,
          6.20,
          6.51,
          6.72,
          6.86,
          6.96,
          6.98,
          7.02,
          7.00,
          6.98,
          6.94,
          6.90,
          6.82,
          6.74,
          6.68,
          6.60,
          6.48,
          6.38,
          6.28,
          6.20,
          6.08,
          5.94,
          5.80,
          5.70,
          5.56,
          5.45,
          5.32,
          5.14,
          4.96,
          4.64,
          4.44,
          4.10,
          3.80,
          3.64,
          3.52,
          3.38,
          3.28,
          3.20,
          3.12,
          3.05,
          2.96,
          2.90,
          2.80,
          2.72,
          2.66,
          2.60,
          2.53,
          2.48,
          2.43,
          2.36,
          2.30,
          2.24,
          2.14,
          2.08,
          2.00,
          1.92,
          1.84,
          1.78,
          1.68,
          1.56,
          1.42,
          1.22,
          1.04,
          0.92,
          0.76,
          0.57,
          0.48,
          0.46,
          0.44,
          0.45,
          0.48,
          0.50,
          0.66,
          1.03,
          2.52,
          1.90,
          1.03,
          0.64,
          0.43,
          0.28,
          0.11,
          -0.03,
        ],
        color: 'rgb(42, 121, 75)',
        zIndex: 5
      },
      {
        name: 'Tasa vegetativa',
        data: [1.35,
          1.36,
          1.37,
          1.37,
          1.38,
          1.39,
          1.41,
          1.42,
          1.43,
          1.43,
          1.43,
          1.45,
          1.45,
          1.46,
          1.48,
          1.50,
          1.52,
          1.53,
          1.56,
          1.58,
          1.61,
          1.65,
          1.70,
          1.78,
          1.85,
          1.93,
          1.99,
          2.06,
          2.15,
          2.22,
          2.28,
          2.33,
          2.39,
          2.42,
          2.48,
          2.52,
          2.56,
          2.60,
          2.62,
          2.64,
          2.66,
          2.67,
          2.68,
          2.67,
          2.68,
          2.68,
          2.67,
          2.64,
          2.62,
          2.59,
          2.56,
          2.51,
          2.44,
          2.40,
          2.36,
          2.30,
          2.24,
          2.18,
          2.12,
          2.07,
          2.01,
          1.97,
          1.93,
          1.90,
          1.86,
          1.82,
          1.79,
          1.75,
          1.73,
          1.70,
          1.68,
          1.65,
          1.62,
          1.58,
          1.55,
          1.51,
          1.48,
          1.44,
          1.41,
          1.37,
          1.33,
          1.30,
          1.26,
          1.23,
          1.19,
          1.15,
          1.11,
          1.08,
          1.06,
          1.02,
          0.98,
          0.95,
          0.92,
          0.89,
          0.85,
          0.82,
          0.79,
          0.75,
          0.70,
          0.54,
          0.00,
          0.06,
          0.14,
          0.18,
          0.22,
          0.20,
          0.18,
        ], color: 'rgb(109, 40, 31)',
        zIndex: 5

      },
      {
        name: 'Tasa de  migración',
        data: [2.31,
          2.32,
          2.33,
          2.35,
          2.36,
          2.37,
          2.37,
          2.40,
          2.41,
          2.45,
          2.49,
          2.51,
          2.57,
          2.64,
          2.70,
          2.74,
          2.80,
          2.91,
          2.98,
          3.04,
          3.17,
          3.27,
          3.46,
          3.60,
          3.73,
          3.93,
          4.21,
          4.45,
          4.57,
          4.64,
          4.68,
          4.65,
          4.63,
          4.58,
          4.50,
          4.42,
          4.34,
          4.22,
          4.12,
          4.04,
          3.94,
          3.81,
          3.70,
          3.61,
          3.52,
          3.40,
          3.27,
          3.16,
          3.08,
          2.97,
          2.89,
          2.81,
          2.70,
          2.56,
          2.28,
          2.14,
          1.86,
          1.62,
          1.52,
          1.45,
          1.37,
          1.31,
          1.27,
          1.22,
          1.19,
          1.14,
          1.11,
          1.05,
          0.99,
          0.96,
          0.92,
          0.88,
          0.86,
          0.85,
          0.81,
          0.79,
          0.76,
          0.70,
          0.67,
          0.63,
          0.59,
          0.54,
          0.52,
          0.45,
          0.37,
          0.27,
          0.11,
          -0.04,
          -0.14,
          -0.26,
          -0.41,
          -0.47,
          -0.46,
          -0.45,
          -0.40,
          -0.34,
          -0.29,
          -0.09,
          0.33,
          1.98,
          1.90,
          0.97,
          0.50,
          0.25,
          0.06,
          -0.09,
          -0.21,
        ],
        color: 'blue',
        zIndex: 5
      },
    ],
    responsive: {
      rules: [{
        condition: {

        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }

  //primero
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [showPopup4_1, setShowPopup4_1] = useState(false);
  const [showPopup4_2, setShowPopup4_2] = useState(false);
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
  const [showPopup4_1E, setShowPopup4_1E] = useState(false);
  const [showPopup4_2E, setShowPopup4_2E] = useState(false);
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
  const handleDivClick4_1 = () => {
    setShowPopup4_1(true);
  };
  const handleDivClick4_2 = () => {
    setShowPopup4_2(true);
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
  const handleDivClick4_1E = () => {
    setShowPopup4_1E(true);
  };
  const handleDivClick4_2E = () => {
    setShowPopup4_2E(true);
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
    console.log('Cerrando el pop-up');
    setShowPopup(false);
  };
  const handleClosePopup1 = () => {
    console.log('Cerrando el pop-up');
    setShowPopup1(false);
  };
  const handleClosePopup2 = () => {
    console.log('Cerrando el pop-up');
    setShowPopup2(false);
  };
  const handleClosePopup3 = () => {
    console.log('Cerrando el pop-up');
    setShowPopup3(false);
  };
  const handleClosePopup4_1 = () => {
    console.log('Cerrando el pop-up');
    setShowPopup4_1(false);
  };
  const handleClosePopup4_2 = () => {
    console.log('Cerrando el pop-up');
    setShowPopup4_2(false);
  };
  const handleClosePopup4 = () => {
    console.log('Cerrando el pop-up');
    setShowPopup4(false);
  };
  const handleClosePopup5 = () => {
    console.log('Cerrando el pop-up');
    setShowPopup5(false);
  };
  const handleClosePopup6 = () => {
    console.log('Cerrando el pop-up');
    setShowPopup6(false);
  };
  const handleClosePopup7 = () => {
    console.log('Cerrando el pop-up');
    setShowPopup7(false);
  };
  const handleClosePopup8 = () => {
    console.log('Cerrando el pop-up');
    setShowPopup8(false);
  };
  const handleClosePopup9 = () => {
    console.log('Cerrando el pop-up');
    setShowPopup9(false);
  };
  const handleClosePopup10 = () => {
    console.log('Cerrando el pop-up');
    setShowPopup10(false);
  };
  const handleClosePopup11 = () => {
    console.log('Cerrando el pop-up');
    setShowPopup11(false);
  };
  //segundo
  const handleClosePopupE = () => {
    console.log('Cerrando el pop-up');
    setShowPopupE(false);
  };
  const handleClosePopup1E = () => {
    console.log('Cerrando el pop-up');
    setShowPopup1E(false);
  };
  const handleClosePopup2E = () => {
    console.log('Cerrando el pop-up');
    setShowPopup2E(false);
  };
  const handleClosePopup3E = () => {
    console.log('Cerrando el pop-up');
    setShowPopup3E(false);
  };
  const handleClosePopup4_1E = () => {
    console.log('Cerrando el pop-up');
    setShowPopup4_1E(false);
  };
  const handleClosePopup4_2E = () => {
    console.log('Cerrando el pop-up');
    setShowPopup4_2E(false);
  };
  const handleClosePopup4E = () => {
    console.log('Cerrando el pop-up');
    setShowPopup4E(false);
  };
  const handleClosePopup5E = () => {
    console.log('Cerrando el pop-up');
    setShowPopup5E(false);
  };
  const handleClosePopup6E = () => {
    console.log('Cerrando el pop-up');
    setShowPopup6E(false);
  };
  const handleClosePopup7E = () => {
    console.log('Cerrando el pop-up');
    setShowPopup7E(false);
  };
  const handleClosePopup8E = () => {
    console.log('Cerrando el pop-up');
    setShowPopup8E(false);
  };
  const handleClosePopup9E = () => {
    console.log('Cerrando el pop-up');
    setShowPopup9E(false);
  };
  const handleClosePopup10E = () => {
    console.log('Cerrando el pop-up');
    setShowPopup10E(false);
  };
  const handleClosePopup11E = () => {
    console.log('Cerrando el pop-up');
    setShowPopup11E(false);
  };
  return (
    <>
      {showPopup && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.1-Bogota-futuro.png"
          onClose={handleClosePopup}
        />
      )}
      {showPopup1 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.2-Brunner.png"
          onClose={handleClosePopup1}

        />
      )}
      {showPopup2 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.3-Le-Corbusier.png"
          onClose={handleClosePopup2}
        />
      )}
      {showPopup3 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.4-Fase-2-1972.png"
          onClose={handleClosePopup3}

        />
      )}
      {showPopup4_1 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.5-plan-desarrollo-urbano-1975.png"
          onClose={handleClosePopup4_1}

        />
      )}


      {showPopup4_2 && (
        <PopupSlide
          imageUrls={images}
          onClose={handleClosePopup4_2}
        />
      )}
      {showPopup4 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.5-plan-desarrollo-urbano-1975.png"
          onClose={handleClosePopup4}

        />
      )}
      {showPopup5 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.6-Acuerdo-7-1979.png"
          onClose={handleClosePopup5}

        />
      )}
      {showPopup6 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.7-Acuerdo-6-1990.png"
          onClose={handleClosePopup6}

        />
      )}
      {showPopup7 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.8-Decreto-619-2000.png"
          onClose={handleClosePopup7}

        />
      )}
      {showPopup8 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.9-Decreto-190-2004.png"
          onClose={handleClosePopup8}

        />
      )}
      {showPopup9 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.10-Mepot-2013.png"
          onClose={handleClosePopup9}

        />
      )}
      {showPopup10 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.11-proyecto-POT-2019.png"
          onClose={handleClosePopup10}

        />
      )}{showPopup11 && (
        <Popup
          imageUrl="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/E.1.12-Decreto-555-2021.png"
          onClose={handleClosePopup11}

        />
      )}

      {showPopupE && (
        <Popup2
          onClose={handleClosePopupE}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/ACUERDO 74 DE 1925 BOGOTA FUTURO.pdf"
        />
      )}
      {showPopup1E && (
        <Popup2
          onClose={handleClosePopup1E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/ACUERDO 28 DE 1933-BRUNNER.pdf"
        />
      )}
      {showPopup2E && (
        <Popup2
          onClose={handleClosePopup2E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/DECRETO 185 DE 1951-LE CORBUSIER.pdf"
        />
      )}
      {showPopup3E && (
        <Popup2
          onClose={handleClosePopup3E}
          url=""
        />
      )}
      {showPopup4_1E && (
        <Popup2
          onClose={handleClosePopup4_1E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/ACUERDO+65+DE+1967.pdf"
        />
      )}
      {showPopup4_2E && (
        <Popup2
          onClose={handleClosePopup4_2E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/recursos_15_02_2024/DECRETO+1119+DE+1968.pdf"
        />
      )}
      {showPopup4E && (
        <Popup2
          onClose={handleClosePopup4E}
          url=""
        />
      )}
      {showPopup5E && (
        <Popup2
          onClose={handleClosePopup5E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/ACUERDO 7 1979.pdf"
        />
      )}
      {showPopup6E && (
        <Popup2
          onClose={handleClosePopup6E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/Acuerdo 6 de 1990.pdf"
        />
      )}
      {showPopup7E && (
        <Popup2
          onClose={handleClosePopup7E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/DECRETO 619 DE 2000.pdf"
        />
      )}
      {showPopup8E && (
        <Popup2
          onClose={handleClosePopup8E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/DECRETO190 DE 2004.pdf"
        />
      )}
      {showPopup9E && (
        <Popup2
          onClose={handleClosePopup9E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/DECRETO 364 DE 2013.pdf"
        />
      )}
      {showPopup10E && (
        <Popup2
          onClose={handleClosePopup10E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/PROYECTO DE ACUERDO POT BOGOTA 2019.pdf"
        />
      )}{showPopup11E && (
        <Popup2
          onClose={handleClosePopup11E}
          url="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/pdf/DECRETO 555 DE 2021.pdf"
        />
      )}
      <div className="contentG">
        <div className="graphs">
          <div className="graphs-2">
            <span style={{ position: "absolute", zIndex: "9", fontSize: "0.8vw", width: "97%", textAlign: "center", color: "red", marginBottom: "-83vh" }}>*Los años marcados en color rojo corresponden a años censales</span>
            <div className="linea1"></div>
            <div className="cuadro1">
              <p><h1 className="h1-c"> 1925</h1>
                <h2 className="h2-c">Bogotá futuro</h2>
                <h3 className="h3-c">- Crecimiento: <strong className="str">3,76</strong></h3>
                <h3 className="h3-c">- Vegetativa: <strong className="str">1,39</strong></h3>
                <h3 className="h3-c">- Migración: <strong className="str">2,37</strong></h3>
                {/* <div className="div-graph-button">
                  <button className="cus">
                    <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png" alt="Icono" width="20" height="20" onClick={handleDivClick} />
                  </button>
                  <button className="cus2">
                    <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png" alt="Icono" width="20" height="20" onClick={handleDivClickE} />
                  </button>
                </div> */}
              </p>
            </div>
            <div className="linea2"></div>
            <div className="cuadro2"><p><h1 className="h1-c"> 1936</h1>
              <h2 className="h2-c">Plan Brunner</h2>
              <h3 className="h3-c">- Crecimiento: <strong className="str">4,32</strong></h3>
              <h3 className="h3-c">- Vegetativa: <strong className="str">1,52</strong></h3>
              <h3 className="h3-c">- Migración: <strong className="str">2,80</strong></h3>
              {/* <div className="div-graph-button">
                <button className="cus">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png" alt="Icono" width="20" height="20" onClick={handleDivClick1} />
                </button>
                <button className="cus2">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png" alt="Icono" width="20" height="20" onClick={handleDivClick1E} />
                </button>
              </div> */}

            </p>
            </div>
            <div className="linea3"></div>
            <div className="cuadro3"><p><h1 className="h1-c"> 1951</h1>
              <h2 className="h2-c">Decreto 185.</h2>
              <h2 className="h2-c">Plan Piloto</h2>
              <h3 className="h3-c">- Crecimiento: <strong className="str">6,98</strong></h3>
              <h3 className="h3-c">- Vegetativa: <strong className="str">2,33</strong></h3>
              <h3 className="h3-c">- Migración: <strong className="str">4,65</strong></h3>
              {/* <div className="div-graph-button">
                <button className="cus">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png" alt="Icono" width="20" height="20" onClick={handleDivClick2} />
                </button>
                <button className="cus2">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png" alt="Icono" width="20" height="20" onClick={handleDivClick2E} />
                </button>
              </div> */}

            </p>
            </div>
            <div className="linea13"></div>
            <div className="cuadro13"><p><h1 className="h1-c"> 1967</h1>
              <h2 className="h2-c">Acuerdo 65 de 1967</h2>
              <h3 className="h3-c">Crecimiento: <strong className="str">5,80</strong></h3>
              <h3 className="h3-c">Vegetativa: <strong className="str">2,64</strong></h3>
              <h3 className="h3-c">Migración: <strong className="str">3,16</strong></h3>
            </p>
            </div>
            <div className="linea14"></div>
            <div className="cuadro14"><p><h1 className="h1-c">1968</h1>
              <h2 className="h2-c">Decreto 1119 de 1968</h2>
              <h3 className="h3-c">Crecimiento: <strong className="str">5,70</strong></h3>
              <h3 className="h3-c">Vegetativa: <strong className="str">2,62</strong></h3>
              <h3 className="h3-c">Migración: <strong className="str">3,08</strong></h3>
            </p>
            </div>
            <div className="linea4"></div>
            <div className="cuadro4"><p><h1 className="h1-c"> 1972</h1>
              <h2 className="h2-c">Fase II</h2>
              <h2 className="h2-c">(Ciudades</h2>
              <h2 className="h2-c">entre</h2>
              <h2 className="h2-c">Ciudades)</h2>
              <h3 className="h3-c">- Crecimiento: <strong className="str">5,14</strong></h3>
              <h3 className="h3-c">- Vegetativa: <strong className="str">2,44</strong></h3>
              <h3 className="h3-c">- Migración: <strong className="str">2,70</strong></h3>
              {/* <div className="div-graph-button">
                <button className="cus-e">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png" alt="Icono" width="20" height="20" onClick={handleDivClick3} />
                </button>
                <button className="cus2-e">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png" alt="Icono" width="20" height="20" onClick={handleDivClick3E} />
                </button>
              </div> */}
            </p>
            </div>
            <div className="linea5"></div>
            <div className="cuadro5"><p><h1 className="h1-c"> 1975</h1>
              <h2 className="h2-c">Plan de</h2>
              <h2 className="h2-c">desarrollo</h2>
              <h2 className="h2-c">urbano</h2>
              <h3 className="h3-c">- Crecimiento: <strong className="str">4,44</strong></h3>
              <h3 className="h3-c">- Vegetativa: <strong className="str">2,30</strong></h3>
              <h3 className="h3-c">- Migración: <strong className="str">2,14</strong></h3>
              {/* <div className="div-graph-button">
                <button className="cus">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png" alt="Icono" width="20" height="20" onClick={handleDivClick4} />
                </button>
                <button className="cus2">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png" alt="Icono" width="20" height="20" onClick={handleDivClick4E} />
                </button>
              </div> */}
            </p>
            </div>
            {/* <div className="linea5_1"></div>
            <div className="cuadro5_1"><p><h1 className="h1-c"> 1967</h1>
              <h2 className="h2-c">Acuerdo 65 de 1967</h2>
              <h3 className="h3-c">Crecimiento: <strong className="str">5,80</strong></h3>
              <h3 className="h3-c">Vegetativa: <strong className="str">2,64</strong></h3>
              <h3 className="h3-c">Migración: <strong className="str">3,16</strong></h3>
              <div className="div-graph-button">
                <button className="cus2">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png" alt="Icono" width="20" height="20" onClick={handleDivClick4_1E} />
                </button>
              </div>
              {/* <div className="div-graph-button">
                <button className="cus">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png" alt="Icono" width="20" height="20" onClick={handleDivClick4} />
                </button>
                <button className="cus2">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png" alt="Icono" width="20" height="20" onClick={handleDivClick4E} />
                </button>
              </div> */}

            <div className="linea6"></div>
            <div className="cuadro6"><p><h1 className="h1-c"> 1979</h1>
              <h2 className="h2-c">Acuerdo 7</h2>
              <h3 className="h3-c">- Crecimiento: <strong className="str">3,52</strong></h3>
              <h3 className="h3-c">- Vegetativa: <strong className="str">2,07</strong></h3>
              <h3 className="h3-c">- Migración: <strong className="str">1,45</strong></h3>
              {/* <div className="div-graph-button">
                <button className="cus">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png" alt="Icono" width="20" height="20" onClick={handleDivClick5} />
                </button>
                <button className="cus2">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png" alt="Icono" width="20" height="20" onClick={handleDivClick5E} />
                </button>
              </div> */}
            </p>
            </div>
            <div className="linea7"></div>
            <div className="cuadro7"><p><h1 className="h1-c"> 1990</h1>
              <h2 className="h2-c">Acuerdo 6</h2>
              <h3 className="h3-c">- Crecimiento: <strong className="str">2,60</strong></h3>
              <h3 className="h3-c">- Vegetativa: <strong className="str">1,68</strong></h3>
              <h3 className="h3-c">- Migración: <strong className="str">0,92</strong></h3>
              {/* <div className="div-graph-button">
                <button className="cus">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png" alt="Icono" width="20" height="20" onClick={handleDivClick6} />
                </button>
                <button className="cus2">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png" alt="Icono" width="20" height="20" onClick={handleDivClick6E} />
                </button>
              </div> */}
            </p>
            </div>
            <div className="linea8"></div>
            <div className="cuadro8"><p><h1 className="h1-c"> 2000</h1>
              <h2 className="h2-c">Decreto 619</h2>
              <h3 className="h3-c">- Crecimiento: <strong className="str">1,92</strong></h3>
              <h3 className="h3-c">- Vegetativa: <strong className="str">1,33</strong></h3>
              <h3 className="h3-c">- Migración: <strong className="str">0,59</strong></h3>
              {/* <div className="div-graph-button">
                <button className="cus">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png" alt="Icono" width="20" height="20" onClick={handleDivClick7} />
                </button>
                <button className="cus2">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png" alt="Icono" width="20" height="20" onClick={handleDivClick7E} />
                </button>
              </div> */}
            </p>
            </div>
            <div className="linea9"></div>
            <div className="cuadro9"><p><h1 className="h1-c"> 2004</h1>
              <h2 className="h2-c">Decreto 190</h2>
              <h3 className="h3-c">- Crecimiento: <strong className="str">1,56</strong></h3>
              <h3 className="h3-c">- Vegetativa: <strong className="str">1,19</strong></h3>
              <h3 className="h3-c">- Migración: <strong className="str">0,37</strong></h3>
              {/* <div className="div-graph-button">
                <button className="cus">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png" alt="Icono" width="20" height="20" onClick={handleDivClick8} />
                </button>
                <button className="cus2">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png" alt="Icono" width="20" height="20" onClick={handleDivClick8E} />
                </button>
              </div> */}
            </p>
            </div>
            <div className="linea10"></div>
            <div className="cuadro10"><p><h1 className="h1-c"> 2013</h1>
              <h2 className="h2-c">MePOT</h2>
              <h3 className="h3-c">- Crecimiento: <strong className="str">0,44</strong></h3>
              <h3 className="h3-c">- Vegetativa: <strong className="str">0,89</strong></h3>
              <h3 className="h3-c">- Migración: <strong className="str">-0,45</strong></h3>
              {/* <div className="div-graph-button">
                <button className="cus">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png" alt="Icono" width="20" height="20" onClick={handleDivClick9} />
                </button>
                <button className="cus2">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png" alt="Icono" width="20" height="20" onClick={handleDivClick9E} />
                </button>
              </div> */}

            </p>
            </div>
            <div className="linea11"></div>
            <div className="cuadro11"><p><h1 className="h1-c"> 2019</h1>
              <h2 className="h2-c">Proyecto POT</h2>
              <h3 className="h3-c">- Crecimiento: <strong className="str">2,52</strong></h3>
              <h3 className="h3-c">- Vegetativa: <strong className="str">0,54</strong></h3>
              <h3 className="h3-c">- Migración: <strong className="str">1,98</strong></h3>
              <div className="div-graph-button">
                <button className="cus">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png" alt="Icono" width="20" height="20" onClick={handleDivClick10} />
                </button>
                <button className="cus2">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png" alt="Icono" width="20" height="20" onClick={handleDivClick10E} />
                </button>
              </div>
              {/* <div className="div-graph-button">
                <button className="cus">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png" alt="Icono" width="20" height="20" onClick={handleDivClick10} />
                </button>
                <button className="cus2">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png" alt="Icono" width="20" height="20" onClick={handleDivClick10E} />
                </button>
              </div> */}
            </p>
            </div>
            <div className="linea12"></div>
            <div className="cuadro12"><p><h1 className="h1-c"> 2021</h1>
              <h2 className="h2-c">Decreto 555</h2>
              <h3 className="h3-c">- Crecimiento: <strong className="str">1,03</strong></h3>
              <h3 className="h3-c">- Vegetativa: <strong className="str">0,06</strong></h3>
              <h3 className="h3-c">- Migración: <strong className="str">0,97</strong></h3>
              {/* <div className="div-graph-button">
                <button className="cus">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/plano.png" alt="Icono" width="20" height="20" onClick={handleDivClick11} />
                </button>
                <button className="cus2">
                  <img src="https://smob-storage.s3.us-east-2.amazonaws.com/grafica/imgs/pdf.png" alt="Icono" width="20" height="20" onClick={handleDivClick11E} />
                </button>
              </div> */}
            </p>
            </div>
            <hr></hr>
            <div className="divHigcharts">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          </div>
        </div >
      </div >
    </>
  )
}

export default Graph;