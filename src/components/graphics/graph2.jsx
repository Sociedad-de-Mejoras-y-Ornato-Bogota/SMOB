import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import './graph.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Popup from './pupUp';
import 'reactjs-popup/dist/index.css';


var tama = ((window.innerWidth/8)*6)-10
var options = {
    chart: {
        type: 'line',
        width: tama,
        height:600,
        
    },
    title: {
        text: 'Crecimiento de la población de Bogotá 1900 - 2025 con Planes de Desarrollo y Ordenamiento',
        align: 'center'
    },
    plotOptions: { line: { marker: { enabled: false } } },
    yAxis: {
        min: 0,
        max: 9000000,
        title: {
            text: ''
        },
        labels: {   
            format: '{value}'
        },
        tickInterval: 1000000,
        gridLineWidth: 0
    },
    xAxis: {
        tickPixelInterval: '1',
        categories: ['1900','1901','1902','1903','1904','1905','1906','1907','1908','1909','1910','1911','1912','1913','1914','1915','1916','1917','1918','1919','1920','1921','1922','1923','1924','1925','1926','1927','1928','1929','1930','1931','1932','1933','1934','1935','1936','1937','1938','1939','1940','1941','1942','1943','1944','1945','1946','1947','1948','1949','1950','1951','1952','1953','1954','1955','1956','1957','1958','1959','1960','1961','1962','1963','1964','1965','1966','1967','1968','1969','1970','1971','1972','1973','1974','1975','1976','1977','1978','1979','1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025','2026'],
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
        name:'Poblacion Bogotá',
        data:[96668,97748,98848,99908,100988,103778,107431,111255,115238,119410,123757,128311,133058,138048,143266,148710,154379,160279,166434,172842,179514,186461,193695,201230,209078,217253,225750,234578,243780,253350,263325,273750,284628,295977,307790,320123,333057,346658,361032,376459,393654,412532,433618,456615,482113,510390,542527,578424,617874,661026,708139,759227,813739,871698,933126,997993,1066460,1138618,1214544,1294515,1379142,1468145,1560911,1657855,1759954,1866846,1977912,2093021,2210232,2330135,2452015,2575981,2700141,2825125,2950241,3075832,3201841,3328164,3454966,3581986,3709114,3836722,3964513,4092162,4218993,4344995,4471624,4597845,4723948,4849900,4975531,5100589,5225574,5349677,5473625,5597162,5720138,5841838,5962880,6083860,6203175,6321544,6437668,6553211,6666694,6776691,6881787,6976654,7064548,7145212,7214673,7272166,7319643,7355223,7379697,7396539,7407099,7411099,7412566,7592871,7732161,7823334,7873316,7907281,7929539,7937898,''
        ],
        color:'rgb(42, 121, 75)',
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

const Graph2 = () =>{
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
        <>{showPopup && (
            <Popup
            imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.1-Bogota-futuro.png"
            onClose={handleClosePopup}
            url="https://geoapps.esri.co/recursos/smob/grafica/pdf/ACUERDO 74 DE 1925 BOGOTA FUTURO.pdf"
          />
         )}
         {showPopup1 && (
            <Popup
            imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.2-Brunner.png"
            onClose={handleClosePopup1}
            url="https://geoapps.esri.co/recursos/smob/grafica/pdf/ACUERDO 28 DE 1933-BRUNNER.pdf"
          />
         )}
         {showPopup2 && (
            <Popup
            imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.3-Le-Corbusier.png"
            onClose={handleClosePopup2}
            url="https://geoapps.esri.co/recursos/smob/grafica/pdf/DECRETO 185 DE 1951-LE CORBUSIER.pdf"
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
            url="https://geoapps.esri.co/recursos/smob/grafica/pdf/ACUERDO 7 1979.pdf"
          />
         )}
         {showPopup6 && (
            <Popup
            imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.7-Acuerdo-6-1990.png"
            onClose={handleClosePopup6}
            url="https://geoapps.esri.co/recursos/smob/grafica/pdf/Acuerdo 6 de 1990.pdf"
          />
         )}
         {showPopup7 && (
            <Popup
            imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.8-Decreto-619-2000.png"
            onClose={handleClosePopup7}
            url="https://geoapps.esri.co/recursos/smob/grafica/pdf/DECRETO 619 DE 2000.pdf"
          />
         )}
         {showPopup8 && (
            <Popup
            imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.9-Decreto-190-2004.png"
            onClose={handleClosePopup8}
            url="https://geoapps.esri.co/recursos/smob/grafica/pdf/DECRETO190 DE 2004.pdf"
          />
         )}
         {showPopup9 && (
            <Popup
            imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.10-Mepot-2013.png"
            onClose={handleClosePopup9}
            url="https://geoapps.esri.co/recursos/smob/grafica/pdf/DECRETO 364 DE 2013.pdf"
          />
         )}
         {showPopup10 && (
            <Popup
            imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.11-proyecto-POT-2019.png"
            onClose={handleClosePopup10}
            url="https://geoapps.esri.co/recursos/smob/grafica/pdf/PROYECTO DE ACUERDO POT BOGOTA 2019.pdf"
          />
         )}{showPopup11 && (
           <Popup
           imageUrl="https://geoapps.esri.co/recursos/smob/grafica/E.1.12-Decreto-555-2021.png"
           onClose={handleClosePopup11}
           url="https://geoapps.esri.co/recursos/smob/grafica/pdf/DECRETO 555 DE 2021.pdf"
         />
        )}
        <div className="graphs">
        <div className="graphs-2">
        <div className="linea1G2"></div>
            <div className="cuadro1G2" onClick={handleDivClick}><p><h1 className="h1-c"> <strong>1902</strong></h1>
            <h3 className="h3-c">Acuerdo 10.</h3>
            <h3 className="h3-c">679 ha</h3>
            <h3 className="h3-c">Pobl. 98.848</h3>
            </p>
            </div>
            <div className="linea2G2"></div>
            <div className="cuadro2G2" onClick={handleDivClick1}><p><h1 className="h1-c"> <strong>1925</strong></h1>
            <h3 className="h3-c">Bogotá futuro.</h3>
            <h3 className="h3-c">1.120 ha</h3>
            <h3 className="h3-c">Pobl. 217.253</h3>
            </p>
            </div>
            <div className="linea3G2"></div>
            <div className="cuadro3G2" onClick={handleDivClick2}><p><h1 className="h1-c"> <strong>1936</strong></h1>
            <h3 className="h3-c">Plan Brunner.</h3>
            <h3 className="h3-c">1.609 ha</h3>
            <h3 className="h3-c">Pobl. 333.057</h3>
            </p>
            </div>
            <div className="linea4G2"></div>
            <div className="cuadro4G2" onClick={handleDivClick3}><p><h1 className="h1-c"><strong>1951</strong></h1>
            <h3 className="h3-c">Plan Piloto.</h3>
            <h3 className="h3-c">5.558 ha</h3>
            <h3 className="h3-c">Pobl. 759.227</h3>
            </p>
            </div>
            <div className="linea5G2"></div>
            <div className="cuadro5G2" onClick={handleDivClick4}><p><h1 className="h1-c"><strong> 1972</strong></h1>
            <h3 className="h3-c">Fase II </h3>
            <h3 className="h3-c">(ciudades</h3>
            <h3 className="h3-c">entre</h3>
            <h3 className="h3-c"> ciudades)</h3>
            <h3 className="h3-c">5.558 ha</h3>
            <h3 className="h3-c">Pobl. 759.227</h3>
            </p>
            </div>
            <div className="linea6G2"></div>
            <div className="cuadro6G2" onClick={handleDivClick5}><p><h1 className="h1-c"><strong>1975</strong></h1>
            <h3 className="h3-c">Plan de desarrollo urbano</h3>
            <h3 className="h3-c">26.526 ha</h3>
            <h3 className="h3-c">Pobl. 3.075.832</h3>
            </p>
            </div>
            <div className="linea7G2"></div>
            <div className="cuadro7G2" onClick={handleDivClick6}><p><h1 className="h1-c"> <strong>1979</strong></h1>
            <h3 className="h3-c">Acuerdo 7.</h3>
            <h3 className="h3-c">28.961 ha</h3>
            <h3 className="h3-c">Pobl. 3.581.986</h3>
            </p>
            </div>
            <div className="linea8G2"></div>
            <div className="cuadro8G2" onClick={handleDivClick7}><p><h1 className="h1-c"> <strong>1990</strong></h1>
            <h3 className="h3-c">Acuerdo 6.</h3>
            <h3 className="h3-c">29.564 ha</h3>
            <h3 className="h3-c">Pobl. 4.975.531</h3>
            </p>
            </div>
            <div className="linea9G2"></div>
            <div className="cuadro9G2" onClick={handleDivClick8}><p><h1 className="h1-c"> <strong>2000</strong></h1>
            <h3 className="h3-c">Decreto 619.</h3>
            <h3 className="h3-c">39.395 ha</h3>
            <h3 className="h3-c">Pobl. 6.203.175</h3>
            </p>
            </div>
            <div className="linea10G2"></div>
            <div className="cuadro10G2" onClick={handleDivClick9}><p><h1 className="h1-c"> <strong>2004</strong></h1>
            <h3 className="h3-c">Decreto 190.</h3>
            <h3 className="h3-c">40.958 ha</h3>
            <h3 className="h3-c">Pobl. 6.666.694</h3>
            </p>
            </div>
            <div className="linea11G2"></div>
            <div className="cuadro11G2" onClick={handleDivClick10}><p><h1 className="h1-c"> <strong>2013</strong></h1>
            <h3 className="h3-c">MePOT</h3>
            <h3 className="h3-c">41.598 ha</h3>
            <h3 className="h3-c">Pobl. 7.355.223</h3>
            </p>
            </div>
            <div className="linea12G2"></div>
            <div className="cuadro12G2" onClick={handleDivClick11}><p><h1 className="h1-c"> <strong>2021</strong></h1>
            <h3 className="h3-c">Decreto 555.</h3>
            <h3 className="h3-c">39.405 ha</h3>
            <h3 className="h3-c">Pobl. 7.823.334</h3>
            </p>
            </div>
            <div className="m1G2"><p>
            <h3 className="h3-c">118.405</h3>
            </p>
            </div>
            <div className="m2G2"><p>
            <h3 className="h3-c">115.804</h3>
            </p>
            </div>
            <div className="m3G2"><p>
            <h3 className="h3-c">426.170</h3>
            </p>
            </div>
            <div className="m4G2"><p>
            <h3 className="h3-c">1.940.914</h3>
            </p>
            </div>
            <div className="m5G2"><p>
            <h3 className="h3-c">375. 691</h3>
            </p>
            </div>
            <div className="m6G2"><p>
            <h3 className="h3-c">506.154</h3>
            </p>
            </div>
            <div className="m7G2"><p>
            <h3 className="h3-c">1.393.545</h3>
            </p>
            </div>
            <div className="m8G2"><p>
            <h3 className="h3-c">93.545</h3>
            </p>
            </div>
            <div className="m9G2"><p>
            <h3 className="h3-c">463. 519</h3>
            </p>
            </div>
            <div className="m10G2"><p>
            <h3 className="h3-c">688.529</h3>
            </p>
            </div>
            <div className="m11G2"><p>
            <h3 className="h3-c">688.529</h3>
            </p>
            </div>
            <div className="m12G2"><p>
            <h3 className="h3-c">375.691</h3>
            </p>
            </div>
            <div className="circulo1G2"><p>
                <h3></h3>
            <h3 className="h3-c-1"><strong>541</strong></h3>
            <h3 className="h3-c-1"><strong>ha</strong></h3>
            </p>
            </div>
            <div className="circulo2G2"><p>
                <h3></h3>
            <h3 className="h3-c-1"><strong>489</strong></h3>
            <h3 className="h3-c-1"><strong>ha</strong></h3>
            </p>
            </div>
            <div className="circulo3G2"><p>
                <h3></h3>
            <h3 className="h3-c-1"><strong>3.950</strong></h3>
            <h3 className="h3-c-1"><strong>ha</strong></h3>
            </p>
            </div>
            <div className="circulo4G2"><p>
                <h3></h3>
            <h3 className="h3-c-1"><strong>10.910</strong></h3>
            <h3 className="h3-c-1"><strong>ha</strong></h3>
            </p>
            </div>
            <div className="circulo5G2"><p>
                <h3></h3>
            <h3 className="h3-c-2"><strong>10.0858</strong></h3>
            <h3 className="h3-c-2"><strong>ha</strong></h3>
            </p>
            </div>
            <div className="circulo6G2"><p>
                <h3></h3>
            <h3 className="h3-c-2"><strong>2.435</strong></h3>
            <h3 className="h3-c-2"><strong>ha</strong></h3>
            </p>
            </div>
            <div className="circulo7G2"><p>
                <h3></h3>
            <h3 className="h3-c-1"><strong>602</strong></h3>
            <h3 className="h3-c-1"><strong>ha</strong></h3>
            </p>
            </div>
            <div className="circulo8G2"><p>
                <h3></h3>
            <h3 className="h3-c-1"><strong>9.831</strong></h3>
            <h3 className="h3-c-1"><strong>ha</strong></h3>
            </p>
            </div>
            <div className="circulo9G2"><p>
                <h3></h3>
            <h3 className="h3-c-1"><strong>1.563</strong></h3>
            <h3 className="h3-c-1"><strong>ha</strong></h3>
            </p>
            </div>
            <div className="circulo10G2"><p>
                <h3></h3>
            <h3 className="h3-c-1"><strong>640</strong></h3>
            <h3 className="h3-c-1"><strong>ha</strong></h3>
            </p>
            </div>
            <div className="circulo11G2"><p>
                <h3></h3>
            <h3 className="h3-c-1"><strong>4.460</strong></h3>
            <h3 className="h3-c-1"><strong>ha</strong></h3>
            </p>
            </div>
            <div className="circulo12G2"><p>
                <h3></h3>
            <h3 className="h3-c-1"><strong>-6.653</strong></h3>
            <h3 className="h3-c-1"><strong>ha</strong></h3>
            </p>
            </div>
            <hr></hr>
            <HighchartsReact highcharts={Highcharts} options={options}/>
        </div>
        </div></>
    )}

export default Graph2;