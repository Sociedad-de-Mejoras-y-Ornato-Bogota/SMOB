import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import './graph.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Popup from './pupUp';
import 'reactjs-popup/dist/index.css';

const tama = ((window.innerWidth/8)*6)-10
const options = {
    chart: {
        type: 'line',
        width: tama,
        height:600,
        
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
        
        tickPixelInterval: 1,
        categories: ['1923','1924','1925','1926','1927','1928','1929','1930','1931','1932','1933','1934','1935','1936','1937','1938','1939','1940','1941','1942','1943','1944','1945','1946','1947','1948','1949','1950','1951','1952','1953','1954','1955','1956','1957','1958','1959','1960','1961','1962','1963','1964','1965','1966','1967','1968','1969','1970','1971','1972','1973','1974','1975','1976','1977','1978','1979','1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'],
        labels: {
            format:'{value}',
            style:{
                font: '16px Lora, sans-serif'
            }
        
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
    series:[
        
        {
        name:'Porcentaje Crecimiento',
        data:[3.74,3.75,3.76,3.76,3.76,3.77,3.78,3.79,3.81,3.82,3.83,3.84,3.85,3.88,3.92,3.98,4.1,4.37,4.58,4.86,5.04,5.29,5.54,5.92,6.21,6.38,6.53,6.65,6.73,6.7,6.65,6.58,6.5,6.42,6.34,6.25,6.18,6.14,6.06,5.94,5.85,5.8,5.73,5.56,5.5,5.3,5.15,4.97,4.81,4.6,4.42,4.24,4.08,3.94,3.8,3.67,3.55,3.43,3.33,3.22,3.12,3.01,2.9,2.83,2.75,2.67,2.6,2.52,2.45,2.39,2.32,2.26,2.21,2.15,2.08,2.03,1.99,1.92,1.87,1.8,1.76,1.7,1.62,1.53,1.36,1.24,1.13,0.96,0.79,0.65,0.48,0.33,0.23,0.14,0.05,0.02,0.02,0.02,1.17,0.63,0.43,0.28,''
        ],
        color:'rgb(42, 121, 75)',
        zIndex:5
    },
    {
        name:'Porcentaje Vegetativa',
        data:[1.72,1.74,1.76,1.78,1.8,1.81,1.84,1.86,1.88,1.9,1.92,1.94,1.97,2.,2.03,2.06,2.09,2.13,2.17,2.22,2.29,2.37,2.44,2.48,2.55,2.6,2.67,2.75,2.82,2.9,2.95,3.,3.07,3.13,3.18,3.22,3.27,3.32,3.35,3.33,3.35,3.33,3.31,3.28,3.26,3.18,3.12,3.01,2.94,2.84,2.75,2.64,2.52,2.39,2.26,2.13,2.02,1.91,1.8,1.73,1.66,1.63,1.59,1.57,1.55,1.53,1.52,1.5,1.49,1.48,1.46,1.45,1.44,1.42,1.41,1.39,1.37,1.34,1.31,1.28,1.25,1.22,1.19,1.17,1.13,1.1,1.07,1.02,1.,0.96,0.91,0.87,0.82,0.78,0.74,0.7,0.66,0.63,0.25,0.22,0.19,0.16,''
        ],color:'rgb(109, 40, 31)',
        zIndex:5
        
    },
    {
        name:'Porcentaje Migración',
        data:[2.03,2.02,2.01,1.99,1.97,1.96,1.94,1.93,1.93,1.92,1.91,1.9,1.88,1.88,1.89,1.92,2.,2.24,2.41,2.64,2.75,2.92,3.1,3.44,3.66,3.79,3.85,3.9,3.91,3.8,3.7,3.58,3.43,3.29,3.16,3.03,2.91,2.82,2.72,2.61,2.5,2.47,2.42,2.28,2.24,2.13,2.02,1.95,1.87,1.76,1.67,1.6,1.55,1.5,1.42,1.39,1.34,1.3,1.25,1.21,1.16,1.1,1.06,1.04,1.,0.97,0.94,0.9,0.87,0.84,0.82,0.8,0.77,0.75,0.72,0.69,0.67,0.63,0.61,0.56,0.55,0.51,0.46,0.39,0.24,0.14,0.06,-0.07,-0.21,-0.31,-0.43,-0.54,-0.6,-0.64,-0.69,-0.69,-0.66,-0.62,0.92,0.42,0.24,0.12,''
        ],
        color:'blue',
        zIndex:5    
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


const Graph = () =>{
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

    return (
        <>
        {showPopup && (
         <Popup
         imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.1-Bogota-futuro.png"
         onClose={handleClosePopup}
         url="https://www.esri.co/es-co/nosotros/sobre-esri/inicio"
       />
      )}
      {showPopup1 && (
         <Popup
         imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.2-Brunner.png"
         onClose={handleClosePopup1}
         url="https://www.esri.co/es-co/nosotros/sobre-esri/inicio"
       />
      )}
      {showPopup2 && (
         <Popup
         imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.3-Le-Corbusier.png"
         onClose={handleClosePopup2}
         url="https://www.esri.co/es-co/nosotros/sobre-esri/inicio"
       />
      )}
      {showPopup3 && (
         <Popup
         imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.4-Fase-2-1972.png"
         onClose={handleClosePopup3}
         url="https://www.esri.co/es-co/nosotros/sobre-esri/inicio"
       />
      )}
      {showPopup4 && (
         <Popup
         imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.5-plan-desarrollo-urbano-1975.png"
         onClose={handleClosePopup4}
         url="https://www.esri.co/es-co/nosotros/sobre-esri/inicio"
       />
      )}
      {showPopup5 && (
         <Popup
         imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.6-Acuerdo-7-1979.png"
         onClose={handleClosePopup5}
         url="https://www.esri.co/es-co/nosotros/sobre-esri/inicio"
       />
      )}
      {showPopup6 && (
         <Popup
         imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.7-Acuerdo-6-1990.png"
         onClose={handleClosePopup6}
         url="https://www.esri.co/es-co/nosotros/sobre-esri/inicio"
       />
      )}
      {showPopup7 && (
         <Popup
         imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.8-Decreto-619-2000.png"
         onClose={handleClosePopup7}
         url="https://www.esri.co/es-co/nosotros/sobre-esri/inicio"
       />
      )}
      {showPopup8 && (
         <Popup
         imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.9-Decreto-190-2004.png"
         onClose={handleClosePopup8}
         url="https://www.esri.co/es-co/nosotros/sobre-esri/inicio"
       />
      )}
      {showPopup9 && (
         <Popup
         imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.10-Mepot-2013.png"
         onClose={handleClosePopup9}
         url="https://www.esri.co/es-co/nosotros/sobre-esri/inicio"
       />
      )}
      {showPopup10 && (
         <Popup
         imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.11-proyecto-POT-2019.png"
         onClose={handleClosePopup10}
         url="https://www.esri.co/es-co/nosotros/sobre-esri/inicio"
       />
      )}{showPopup11 && (
        <Popup
        imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.12-Decreto-555-2021.png"
        onClose={handleClosePopup11}
        url="https://www.esri.co/es-co/nosotros/sobre-esri/inicio"
      />
     )}
        <div className="graphs">
        <div className="graphs-2">
        <div className="linea1"></div>
            <div className="cuadro1" onClick={handleDivClick}>
            
                <p><h1 className="h1-c"> 1925</h1>
            <h2 className="h2-c">Bogotá futuro</h2>
            <h3 className="h3-c">- Crecimiento: <strong className="str">3,7600</strong></h3>
            <h3 className="h3-c">- Vegetativa: <strong className="str">1,7600</strong></h3>
            <h3 className="h3-c">- Migración: <strong className="str">2,0100</strong></h3>
            </p>
            </div>
            <div className="linea2"></div>
            <div className="cuadro2" onClick={handleDivClick1}><p><h1 className="h1-c"> 1936</h1>
            <h2 className="h2-c">Plan Brunner</h2>
            <h3 className="h3-c">- Crecimiento: <strong className="str">3,8800</strong></h3>
            <h3 className="h3-c">- Vegetativa: <strong className="str">2,0000</strong></h3>
            <h3 className="h3-c">- Migración: <strong className="str">1,8800</strong></h3>
            </p>
            </div>
            <div className="linea3"></div>
            <div className="cuadro3"onClick={handleDivClick2}><p><h1 className="h1-c"> 1951</h1>
            <h2 className="h2-c">Decreto 185. Plan Piloto</h2>
            <h3 className="h3-c">- Crecimiento: <strong className="str">6,7300</strong></h3>
            <h3 className="h3-c">- Vegetativa: <strong className="str">2,8200</strong></h3>
            <h3 className="h3-c">- Migración: <strong className="str">3,9100</strong></h3>
            </p>
            </div>
            <div className="linea4"></div>
            <div className="cuadro4"onClick={handleDivClick3}><p><h1 className="h1-c"> 1972</h1>
            <h2 className="h2-c">Fase II (Ciudades entre</h2>
            <h2 className="h2-c">Ciudades)</h2>
            <h3 className="h3-c">- Crecimiento: <strong className="str">4,6000</strong></h3>
            <h3 className="h3-c">- Vegetativa: <strong className="str">2,8400</strong></h3>
            <h3 className="h3-c">- Migración: <strong className="str">1,7600</strong></h3>
            </p>
            </div>
            <div className="linea5"></div>
            <div className="cuadro5"onClick={handleDivClick4}><p><h1 className="h1-c"> 1975</h1>
            <h2 className="h2-c">Plan de desarrollo urbano</h2>
            <h3 className="h3-c">- Crecimiento: <strong className="str">4,0300</strong></h3>
            <h3 className="h3-c">- Vegetativa: <strong className="str">2,5200</strong></h3>
            <h3 className="h3-c">- Migración: <strong className="str">1,5500</strong></h3>
            </p>
            </div>
            <div className="linea6"></div>
            <div className="cuadro6"onClick={handleDivClick5}><p><h1 className="h1-c"> 1979</h1>
            <h2 className="h2-c">Acuerdo 7</h2>
            <h3 className="h3-c">- Crecimiento: <strong className="str">3,5500</strong></h3>
            <h3 className="h3-c">- Vegetativa: <strong className="str">2,0200</strong></h3>
            <h3 className="h3-c">- Migración: <strong className="str">1,3400</strong></h3>
            </p>
            </div>
            <div className="linea7"></div>
            <div className="cuadro7"onClick={handleDivClick6}><p><h1 className="h1-c"> 1990</h1>
            <h2 className="h2-c">Acuerdo 6</h2>
            <h3 className="h3-c">- Crecimiento: <strong className="str">2,5200</strong></h3>
            <h3 className="h3-c">- Vegetativa: <strong className="str">1,5000</strong></h3>
            <h3 className="h3-c">- Migración: <strong className="str">0,9000</strong></h3>
            </p>
            </div>
            <div className="linea8"></div>
            <div className="cuadro8"onClick={handleDivClick7}><p><h1 className="h1-c"> 2000</h1>
            <h2 className="h2-c">Decreto 619</h2>
            <h3 className="h3-c">- Crecimiento: <strong className="str">1,9200</strong></h3>
            <h3 className="h3-c">- Vegetativa: <strong className="str">1,3400</strong></h3>
            <h3 className="h3-c">- Migración: <strong className="str">0,6300</strong></h3>
            </p>
            </div>
            <div className="linea9"></div>
            <div className="cuadro9"onClick={handleDivClick8}><p><h1 className="h1-c"> 2004</h1>
            <h2 className="h2-c">Decreto 190</h2>
            <h3 className="h3-c">- Crecimiento: <strong className="str">1,7000</strong></h3>
            <h3 className="h3-c">- Vegetativa: <strong className="str">1,2200</strong></h3>
            <h3 className="h3-c">- Migración: <strong className="str">0,5100</strong></h3>
            </p>
            </div>
            <div className="linea10"></div>
            <div className="cuadro10"onClick={handleDivClick9}><p><h1 className="h1-c"> 2013</h1>
            <h2 className="h2-c">MePOT</h2>
            <h3 className="h3-c">- Crecimiento: <strong className="str">0,4800</strong></h3>
            <h3 className="h3-c">- Vegetativa: <strong className="str">0,9100</strong></h3>
            <h3 className="h3-c">- Migración: <strong className="str">-0,4300</strong></h3>
            </p>
            </div>
            <div className="linea11"></div>
            <div className="cuadro11"onClick={handleDivClick10}><p><h1 className="h1-c"> 2019</h1>
            <h2 className="h2-c">Proyecto POT</h2>
            <h3 className="h3-c">- Crecimiento: <strong className="str">0,2200</strong></h3>
            <h3 className="h3-c">- Vegetativa: <strong className="str">0,6600</strong></h3>
            <h3 className="h3-c">- Migración: <strong className="str">-0,6600</strong></h3>
            </p>
            </div>
            <div className="linea12"></div>
            <div className="cuadro12"onClick={handleDivClick11}><p><h1 className="h1-c"> 2021</h1>
            <h2 className="h2-c">Decreto 555</h2>
            <h3 className="h3-c">- Crecimiento: <strong className="str">1,1700</strong></h3>
            <h3 className="h3-c">- Vegetativa: <strong className="str">0,2500</strong></h3>
            <h3 className="h3-c">- Migración: <strong className="str">0,9200</strong></h3>
            </p>
            </div>
            <HighchartsReact highcharts={Highcharts} options={options}/>
        </div>
        </div></>
    )}

export default Graph;