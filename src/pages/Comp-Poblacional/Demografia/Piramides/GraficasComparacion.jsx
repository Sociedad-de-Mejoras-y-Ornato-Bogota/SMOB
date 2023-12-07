import { useState } from "react"
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
var categories = [
    '0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-40', '40-45',
    '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89',
    '90-94', '95-99', '100 +'
];
export default function GraficasComparacion() {
    let [censo, setCenso] = useState(false)
    let [comunidad, setComunidad] = useState(false)
    let [censo1938, setCenso1938] = useState(false)
    let [censo1951, setCenso1951] = useState(false)
    let [censo1964, setCenso1964] = useState(false)
    let [censo1973, setCenso1973] = useState(false)
    let [censo1985, setCenso1985] = useState(false)
    let [censo1993, setCenso1993] = useState(false)
    let [censo2005, setCenso2005] = useState(false)
    let [censo2018, setCenso2018] = useState(false)

    let [comunidad38_51, setcomunidad38_51] = useState(false)
    let [comunidad38_64, setcomunidad38_64] = useState(false)
    let [comunidad38_73, setcomunidad38_73] = useState(false)
    let [comunidad38_85, setcomunidad38_85] = useState(false)
    let [comunidad38_93, setcomunidad38_93] = useState(false)
    let [comunidad38_05, setcomunidad38_05] = useState(false)
    let [comunidad38_18, setcomunidad38_18] = useState(false)
    let [comunidad51_64, setcomunidad51_64] = useState(false)
    let [comunidad51_73, setcomunidad51_73] = useState(false)
    let [comunidad51_85, setcomunidad51_85] = useState(false)
    let [comunidad51_93, setcomunidad51_93] = useState(false)
    let [comunidad51_05, setcomunidad51_05] = useState(false)
    let [comunidad51_18, setcomunidad51_18] = useState(false)
    let [comunidad64_73, setcomunidad64_73] = useState(false)
    let [comunidad64_85, setcomunidad64_85] = useState(false)
    let [comunidad64_93, setcomunidad64_93] = useState(false)
    let [comunidad64_05, setcomunidad64_05] = useState(false)
    let [comunidad64_18, setcomunidad64_18] = useState(false)
    let [comunidad73_85, setcomunidad73_85] = useState(false)
    let [comunidad73_93, setcomunidad73_93] = useState(false)
    let [comunidad73_05, setcomunidad73_05] = useState(false)
    let [comunidad73_18, setcomunidad73_18] = useState(false)
    let [comunidad85_93, setcomunidad85_93] = useState(false)
    let [comunidad85_05, setcomunidad85_05] = useState(false)
    let [comunidad85_18, setcomunidad85_18] = useState(false)
    let [comunidad93_05, setcomunidad93_05] = useState(false)
    let [comunidad93_18, setcomunidad93_18] = useState(false)
    let [comunidad05_18, setcomunidad05_18] = useState(false)

    let [bcomunidad38_51, setbcomunidad38_51] = useState(false)
    let [bcomunidad38_64, setbcomunidad38_64] = useState(false)
    let [bcomunidad38_73, setbcomunidad38_73] = useState(false)
    let [bcomunidad38_85, setbcomunidad38_85] = useState(false)
    let [bcomunidad38_93, setbcomunidad38_93] = useState(false)
    let [bcomunidad38_05, setbcomunidad38_05] = useState(false)
    let [bcomunidad38_18, setbcomunidad38_18] = useState(false)
    let [bcomunidad51_64, setbcomunidad51_64] = useState(false)
    let [bcomunidad51_73, setbcomunidad51_73] = useState(false)
    let [bcomunidad51_85, setbcomunidad51_85] = useState(false)
    let [bcomunidad51_93, setbcomunidad51_93] = useState(false)
    let [bcomunidad51_05, setbcomunidad51_05] = useState(false)
    let [bcomunidad51_18, setbcomunidad51_18] = useState(false)
    let [bcomunidad64_73, setbcomunidad64_73] = useState(false)
    let [bcomunidad64_85, setbcomunidad64_85] = useState(false)
    let [bcomunidad64_93, setbcomunidad64_93] = useState(false)
    let [bcomunidad64_05, setbcomunidad64_05] = useState(false)
    let [bcomunidad64_18, setbcomunidad64_18] = useState(false)
    let [bcomunidad73_85, setbcomunidad73_85] = useState(false)
    let [bcomunidad73_93, setbcomunidad73_93] = useState(false)
    let [bcomunidad73_05, setbcomunidad73_05] = useState(false)
    let [bcomunidad73_18, setbcomunidad73_18] = useState(false)
    let [bcomunidad85_93, setbcomunidad85_93] = useState(false)
    let [bcomunidad85_05, setbcomunidad85_05] = useState(false)
    let [bcomunidad85_18, setbcomunidad85_18] = useState(false)
    let [bcomunidad93_05, setbcomunidad93_05] = useState(false)
    let [bcomunidad93_18, setbcomunidad93_18] = useState(false)
    let [bcomunidad05_18, setbcomunidad05_18] = useState(false)



    const disabledCenso = () => {

        setCenso1938(false)
        setCenso1951(false)
        setCenso1964(false)
        setCenso1973(false)
        setCenso1985(false)
        setCenso1993(false)
        setCenso2005(false)
        setCenso2018(false)
    }

    const disabledComunidad = () => {
        setcomunidad38_51(false)
        setcomunidad38_64(false)
        setcomunidad38_73(false)
        setcomunidad38_85(false)
        setcomunidad38_93(false)
        setcomunidad38_05(false)
        setcomunidad38_18(false)
        setcomunidad51_64(false)
        setcomunidad51_73(false)
        setcomunidad51_85(false)
        setcomunidad51_93(false)
        setcomunidad51_05(false)
        setcomunidad51_18(false)
        setcomunidad64_73(false)
        setcomunidad64_85(false)
        setcomunidad64_93(false)
        setcomunidad64_05(false)
        setcomunidad64_18(false)
        setcomunidad73_85(false)
        setcomunidad73_93(false)
        setcomunidad73_05(false)
        setcomunidad73_18(false)
        setcomunidad85_93(false)
        setcomunidad85_05(false)
        setcomunidad85_18(false)
        setcomunidad93_05(false)
        setcomunidad93_18(false)
        setcomunidad05_18(false)

        setbcomunidad38_51(false)
        setbcomunidad38_64(false)
        setbcomunidad38_73(false)
        setbcomunidad38_85(false)
        setbcomunidad38_93(false)
        setbcomunidad38_05(false)
        setbcomunidad38_18(false)
        setbcomunidad51_64(false)
        setbcomunidad51_73(false)
        setbcomunidad51_85(false)
        setbcomunidad51_93(false)
        setbcomunidad51_05(false)
        setbcomunidad51_18(false)
        setbcomunidad64_73(false)
        setbcomunidad64_85(false)
        setbcomunidad64_93(false)
        setbcomunidad64_05(false)
        setbcomunidad64_18(false)
        setbcomunidad73_85(false)
        setbcomunidad73_93(false)
        setbcomunidad73_05(false)
        setbcomunidad73_18(false)
        setbcomunidad85_93(false)
        setbcomunidad85_05(false)
        setbcomunidad85_18(false)
        setbcomunidad93_05(false)
        setbcomunidad93_18(false)
        setbcomunidad05_18(false)
    }

    return (
        <center style={{ width: "100%" }}>
            <div className="select-container" id="select-container" style={{ display: "flex", width: "100%", height: "6rem", gap: "1rem", padding: "3rem", backgroundColor: "#762f0b", justifyContent: "center", alignItems: "center" }}>
                <p style={{ color: "white", fontSize: "1.25vw", margin: "0" }}>¿Qué desea comparar, censo o comunidad?</p>

                <select id="select-type" style={{ width: "25%", height: "3rem" }} onChange={(e) => {
                    if (e.target.value === "Censo") {
                        setCenso(true)
                        setComunidad(false)
                        disabledComunidad()
                    } else if (e.target.value === "Comunidad") {
                        setCenso(false)
                        setComunidad(true)
                        disabledCenso()
                    } else {
                        setCenso(false)
                        setComunidad(false)
                        disabledCenso()
                        disabledComunidad()
                    }
                }}>
                    <option selected>...</option>
                    <option>Censo</option>
                    <option>Comunidad</option>
                </select>
            </div>
            {censo && <div className="container-censo" style={{ display: "flex", width: "100%",height: "6rem", gap: "3em", padding: "3rem", backgroundColor: "#cbc5c0", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>


                <p style={{ color: "white", fontSize: "1vw", margin: "0" }}>Elige el censo a comparar:</p>

                <select style={{ width: "25%", height: "3rem" }} id="select-type-censo">
                    <option selected>1938</option>
                    <option>1951</option>
                    <option>1964</option>
                    <option>1973</option>
                    <option>1985</option>
                    <option>1993</option>
                    <option>2005</option>
                    <option>2018</option>
                </select>

                <button style={{padding: "0.8rem", width:"15%", borderRadius:"5px",  color:"#5e2609",borderColor:"transparent"}} onClick={() => {
                    disabledCenso()
                    let value = document.getElementById("select-type-censo").value
                    if (value === '1938') {
                        setCenso1938(true)
                    } else if (value === '1951') {
                        setCenso1951(true)
                    } else if (value === '1964') {
                        setCenso1964(true)
                    } else if (value === '1973') {
                        setCenso1973(true)
                    } else if (value === '1985') {
                        setCenso1985(true)
                    } else if (value === '1993') {
                        setCenso1993(true)
                    } else if (value === '2005') {
                        setCenso2005(true)
                    } else if (value === '2018') {
                        setCenso2018(true)
                    }
                }
                }>Comparar</button>

            </div>}
            {comunidad && <div style={{ display: "flex", width: "100%", height: "6rem", gap: "3em", padding: "3rem", backgroundColor: "#cbc5c0", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>

                <p style={{ color: "white", fontSize: "1vw", margin: "0" }}>Elige la comunidad</p>
                <select id="select-type-comunidad" className="select-type-comunidad medio" style={{ width: "10%", height: "3rem" }}>
                    <option selected>Colombia</option>
                    <option>Bogotá</option>
                </select>

                <p style={{ color: "white", fontSize: "1vw", margin: "0" }}>Elige el año del censo inicial:</p>

                <select id="año_inicio_input" className="año_inicio_input medio" style={{ width: "10%", height: "3rem" }}>
                    <option selected>1938</option>
                    <option>1951</option>
                    <option>1964</option>
                    <option>1973</option>
                    <option>1985</option>
                    <option>1993</option>
                    <option>2005</option>
                </select>

                <p style={{ color: "white", fontSize: "1vw", margin: "0" }}>Elige el año del censo final:</p>

                <select id="año_fin_input" className="año_fin_input medio" style={{ width: "10%", height: "3rem" }}>
                    <option selected>1951</option>
                    <option>1964</option>
                    <option>1973</option>
                    <option>1985</option>
                    <option>1993</option>
                    <option>2005</option>
                    <option>2018</option>
                </select>


                <button className="medio" style={{padding: "0.8rem", width:"15%", color:"#5e2609", borderRadius:"5px", borderColor:"transparent"}} onClick={() => {
                    let tipo = document.getElementById("select-type-comunidad").value
                    let inicio = document.getElementById("año_inicio_input").value
                    let final = document.getElementById("año_fin_input").value
                    disabledComunidad()
                    if (tipo === 'Colombia') {
                        if (inicio === '1938' && final === '1951') {
                            setcomunidad38_51(true)
                        } else if (inicio === '1938' && final === '1964') {
                            setcomunidad38_64(true)
                        } else if (inicio === '1938' && final === '1973') {
                            setcomunidad38_73(true)
                        } else if (inicio === '1938' && final === '1985') {
                            setcomunidad38_85(true)
                        } else if (inicio === '1938' && final === '1993') {
                            setcomunidad38_93(true)
                        } else if (inicio === '1938' && final === '2005') {
                            setcomunidad38_05(true)
                        } else if (inicio === '1938' && final === '2018') {
                            setcomunidad38_18(true)
                        } else if (inicio === '1951' && final === '1964') {
                            setcomunidad51_64(true)
                        } else if (inicio === '1951' && final === '1973') {
                            setcomunidad51_73(true)
                        } else if (inicio === '1951' && final === '1985') {
                            setcomunidad51_85(true)
                        } else if (inicio === '1951' && final === '1993') {
                            setcomunidad51_93(true)
                        } else if (inicio === '1951' && final === '2005') {
                            setcomunidad51_05(true)
                        } else if (inicio === '1951' && final === '2018') {
                            setcomunidad51_18(true)
                        } else if (inicio === '1964' && final === '1973') {
                            setcomunidad64_73(true)
                        } else if (inicio === '1964' && final === '1985') {
                            setcomunidad64_85(true)
                        } else if (inicio === '1964' && final === '1993') {
                            setcomunidad64_93(true)
                        } else if (inicio === '1964' && final === '2005') {
                            setcomunidad64_05(true)
                        } else if (inicio === '1964' && final === '2018') {
                            setcomunidad64_18(true)
                        } else if (inicio === '1973' && final === '1985') {
                            setcomunidad73_85(true)
                        } else if (inicio === '1973' && final === '1993') {
                            setcomunidad73_93(true)
                        } else if (inicio === '1973' && final === '2005') {
                            setcomunidad73_05(true)
                        } else if (inicio === '1973' && final === '2018') {
                            setcomunidad73_18(true)
                        } else if (inicio === '1985' && final === '1993') {
                            setcomunidad85_93(true)
                        } else if (inicio === '1985' && final === '2005') {
                            setcomunidad85_05(true)
                        } else if (inicio === '1985' && final === '2018') {
                            setcomunidad85_18(true)
                        } else if (inicio === '1993' && final === '2005') {
                            setcomunidad93_05(true)
                        } else if (inicio === '1993' && final === '2018') {
                            setcomunidad93_18(true)
                        } else if (inicio === '2005' && final === '2018') {
                            setcomunidad05_18(true)
                        } else {
                            alert("El año de censo inicial debe ser menor al año de censo final")
                        }

                    } else if (tipo === 'Bogotá') {
                        if (inicio === '1938' && final === '1951') {
                            setbcomunidad38_51(true)
                        } else if (inicio === '1938' && final === '1964') {
                            setbcomunidad38_64(true)
                        } else if (inicio === '1938' && final === '1973') {
                            setbcomunidad38_73(true)
                        } else if (inicio === '1938' && final === '1985') {
                            setbcomunidad38_85(true)
                        } else if (inicio === '1938' && final === '1993') {
                            setbcomunidad38_93(true)
                        } else if (inicio === '1938' && final === '2005') {
                            setbcomunidad38_05(true)
                        } else if (inicio === '1938' && final === '2018') {
                            setbcomunidad38_18(true)
                        } else if (inicio === '1951' && final === '1964') {
                            setbcomunidad51_64(true)
                        } else if (inicio === '1951' && final === '1973') {
                            setbcomunidad51_73(true)
                        } else if (inicio === '1951' && final === '1985') {
                            setbcomunidad51_85(true)
                        } else if (inicio === '1951' && final === '1993') {
                            setbcomunidad51_93(true)
                        } else if (inicio === '1951' && final === '2005') {
                            setbcomunidad51_05(true)
                        } else if (inicio === '1951' && final === '2018') {
                            setbcomunidad51_18(true)
                        } else if (inicio === '1964' && final === '1973') {
                            setbcomunidad64_73(true)
                        } else if (inicio === '1964' && final === '1985') {
                            setbcomunidad64_85(true)
                        } else if (inicio === '1964' && final === '1993') {
                            setbcomunidad64_93(true)
                        } else if (inicio === '1964' && final === '2005') {
                            setbcomunidad64_05(true)
                        } else if (inicio === '1964' && final === '2018') {
                            setbcomunidad64_18(true)
                        } else if (inicio === '1973' && final === '1985') {
                            setbcomunidad73_85(true)
                        } else if (inicio === '1973' && final === '1993') {
                            setbcomunidad73_93(true)
                        } else if (inicio === '1973' && final === '2005') {
                            setbcomunidad73_05(true)
                        } else if (inicio === '1973' && final === '2018') {
                            setbcomunidad73_18(true)
                        } else if (inicio === '1985' && final === '1993') {
                            setbcomunidad85_93(true)
                        } else if (inicio === '1985' && final === '2005') {
                            setbcomunidad85_05(true)
                        } else if (inicio === '1985' && final === '2018') {
                            setbcomunidad85_18(true)
                        } else if (inicio === '1993' && final === '2005') {
                            setbcomunidad93_05(true)
                        } else if (inicio === '1993' && final === '2018') {
                            setbcomunidad93_18(true)
                        } else if (inicio === '2005' && final === '2018') {
                            setbcomunidad05_18(true)
                        } else {
                            alert("El año de censo inicial debe ser menor al año de censo final")
                        }
                    }
                }
                }>Comparar</button>

            </div>}

            <div className="graficas-censo">
                {censo2018 && <div className="grafica grafica-censo-2018 ">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 2018',
                                    data: [
                                        -3.84, -3.84, -4.11, -4.43, -4.50,
                                        -4.33, -3.92, -3.57, -3.11, -2.81,
                                        -2.72, -2.31, -1.81, -1.43, -0.97,
                                        -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 2018',
                                    data: [
                                        -2.94, -3.18, -3.36, -3.90, -4.83,
                                        -4.71, -4.19, -3.87, -3.11, -2.89,
                                        -2.84, -2.47, -1.89, -1.36, -0.93,
                                        -0.64, -0.39, -0.21, -0.06, -0.02, -0.01],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 2018',
                                    data: [
                                        3.67, 3.67, 3.94, 4.25, 4.37,
                                        4.25, 3.94, 3.72, 3.43, 3.18,
                                        3.03, 2.64, 2.13, 1.68, 1.18,
                                        0.83, 0.56, 0.31, 0.13, 0.04, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 2018',
                                    data: [
                                        2.80, 3.06, 3.24, 3.84, 4.87,
                                        4.76, 4.28, 4.13, 3.56, 3.42,
                                        3.46, 3.11, 2.44, 1.80, 1.28,
                                        0.92, 0.64, 0.37, 0.16, 0.04, 0.02],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {censo2005 && <div className="grafica grafica-censo-2005">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 2005',
                                    data: [
                                        -5.04, -5.19, -5.26, -4.88, -4.51,
                                        -4.04, -3.49, -3.39, -3.13, -2.50,
                                        -2.11, -1.63, -1.21, -0.95, -0.72,
                                        -0.48, -0.27, -0.11, -0.04, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 2005',
                                    data: [
                                        -4.26, -4.69, -4.54, -4.23, -4.58,
                                        -4.34, -3.80, -3.64, -3.44, -2.85,
                                        -2.21, -1.71, -1.25, -0.87, -0.62,
                                        -0.44, -0.22, -0.11, -0.03, -0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 2005',
                                    data: [
                                        4.82, 4.97, 5.04, 4.72, 4.49,
                                        4.22, 3.85, 3.72, 3.43, 2.85,
                                        2.40, 1.83, 1.40, 1.11, 0.88,
                                        0.62, 0.37, 0.17, 0.07, 0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 2005',
                                    data: [
                                        4.08, 4.53, 4.43, 4.39, 4.98,
                                        4.72, 4.15, 4.09, 3.96, 3.37,
                                        2.65, 2.05, 1.51, 1.15, 0.86,
                                        0.64, 0.36, 0.17, 0.06, 0.02, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {censo1993 && <div className="grafica grafica-censo-1993">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1993',
                                    data: [
                                        -6.34, -5.95, -5.62, -5.04, -4.58,
                                        -4.43, -3.80, -3.06, -2.57, -1.95,
                                        -1.54, -1.29, -1.05, -0.79, -0.54,
                                        -0.35, -0.20, -0.08, -0.03, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1993',
                                    data: [
                                        -5.09, -4.97, -4.93, -4.24, -4.75,
                                        -4.90, -4.57, -3.54, -2.80, -2.03,
                                        -1.67, -1.21, -1.03, -0.66, -0.46,
                                        -0.26, -0.15, -0.06, -0.02, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1993',
                                    data: [
                                        6.08, 5.72, 5.47, 5.08, 4.74,
                                        4.57, 4.04, 3.36, 2.78, 2.13,
                                        1.72, 1.46, 1.20, 0.92, 0.66,
                                        0.44, 0.27, 0.11, 0.04, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1993',
                                    data: [
                                        4.95, 4.84, 4.96, 5.07, 5.68,
                                        5.65, 5.18, 4.11, 3.09, 2.27,
                                        1.90, 1.42, 1.26, 0.84, 0.62,
                                        0.39, 0.24, 0.11, 0.04, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {censo1985 && <div className="grafica grafica-censo-1985">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1985',
                                    data: [
                                        -6.89, -6.41, -5.75, -5.67, -5.22,
                                        -4.18, -3.45, -2.68, -2.06, -1.75,
                                        -1.49, -1.22, -0.93, -0.69, -0.50,
                                        -0.29, -0.15, -0.06, -0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1985',
                                    data: [
                                        -5.71, -5.51, -4.68, -4.82, -5.57,
                                        -4.82, -3.87, -3.27, -2.43, -1.88,
                                        -1.59, -1.17, -0.84, -0.57, -0.38,
                                        -0.23, -0.11, -0.04, -0.01, -0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1985',
                                    data: [
                                        6.62, 6.22, 5.69, 5.64, 5.25,
                                        4.39, 3.64, 2.84, 2.25, 1.91,
                                        1.65, 1.35, 1.05, 0.79, 0.60,
                                        0.38, 0.20, 0.09, 0.03, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1985',
                                    data: [
                                        5.46, 5.35, 4.76, 6.00, 6.20,
                                        5.74, 4.35, 3.61, 2.45, 2.02,
                                        1.71, 1.30, 1.01, 0.73, 0.52,
                                        0.32, 0.17, 0.09, 0.02, 0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {censo1973 && <div className="grafica grafica-censo-1973">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1973',
                                    data: [
                                        -7.83, -7.79, -6.97, -5.67, -4.44,
                                        -3.38, -2.72, -2.33, -2.01, -1.67,
                                        -1.33, -1.09, -0.87, -0.61, -0.39,
                                        -0.22, -0.11, -0.05, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1973',
                                    data: [
                                        -5.93, -6.42, -6.32, -5.53, -4.94,
                                        -3.95, -3.06, -2.47, -2.17, -1.68,
                                        -1.28, -1.19, -0.79, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1973',
                                    data: [
                                        7.62, 7.61, 6.92, 5.72, 4.50,
                                        3.50, 2.89, 2.49, 2.15, 1.78,
                                        1.44, 1.19, 0.97, 0.70, 0.50,
                                        0.31, 0.16, 0.07, 0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1973',
                                    data: [
                                        5.93, 6.62, 6.92, 7.11, 6.13,
                                        4.74, 3.26, 2.96, 2.47, 1.88,
                                        1.38, 0.99, 0.89, 0.79, 0.59,
                                        0.30, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {censo1964 && <div className="grafica grafica-censo-1964">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1964',
                                    data: [
                                        -9.59, -7.92, -6.41, -5.04, -4.02,
                                        -3.26, -2.82, -2.37, -1.94, -1.62,
                                        -1.40, -1.06, -0.80, -0.54, -0.36,
                                        -0.21, -0.11, -0.04, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1964',
                                    data: [
                                        -8.19, -6.90, -5.13, -4.44, -4.24,
                                        -3.75, -3.45, -2.47, -1.97, -1.70,
                                        -1.18, -0.99, -0.89, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1964',
                                    data: [
                                        9.35, 7.82, 6.39, 5.06, 4.11,
                                        3.39, 2.96, 2.50, 2.04, 1.70,
                                        1.48, 1.11, 0.90, 0.69, 0.47,
                                        0.29, 0.13, 0.05, 0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1964',
                                    data: [
                                        7.99, 7.00, 5.92, 6.11, 5.72,
                                        4.73, 3.94, 2.96, 2.27, 1.97,
                                        1.87, 1.08, 0.99, 0.69, 0.49,
                                        0.20, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {censo1951 && <div className="grafica grafica-censo-1951">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1951',
                                    data: [
                                        -8.98, -7.13, -5.89, -5.19, -4.49,
                                        -3.72, -3.05, -2.66, -2.15, -1.74,
                                        -1.33, -1.04, -0.84, -0.60, -0.39,
                                        -0.26, -0.13, -0.04, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1951',
                                    data: [
                                        -6.82, -6.54, -6.07, -5.23, -5.11,
                                        -4.02, -3.08, -2.80, -2.15, -1.40,
                                        -1.21, -0.93, -0.47, -0.28, -0.19,
                                        -0.09, -0.09, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1951',
                                    data: [
                                        8.87, 7.08, 5.88, 5.19, 4.51,
                                        3.74, 3.06, 2.68, 2.17, 1.76,
                                        1.49, 1.20, 0.97, 0.71, 0.47,
                                        0.32, 0.19, 0.06, 0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1951',
                                    data: [
                                        6.54, 6.45, 5.70, 5.61, 5.30,
                                        5.05, 4.00, 3.55, 2.71, 1.87,
                                        1.78, 0.93, 0.75, 0.47, 0.28,
                                        0.19, 0.19, 0.20, 0.11, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {censo1938 && <div className="grafica grafica-censo-1938">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1938',
                                    data: [
                                        -9.00, -6.97, -5.92, -5.11, -4.36,
                                        -3.75, -3.27, -2.86, -2.35, -1.83,
                                        -1.35, -0.98, -0.74, -0.53, -0.31,
                                        -0.15, -0.05, -0.01, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1938',
                                    data: [
                                        -6.70, -6.00, -5.40, -4.90, -4.60,
                                        -4.00, -3.30, -2.70, -2.20, -1.60,
                                        -1.40, -1.11, -0.60, -0.40, -0.30,
                                        -0.20, -0.20, -0.20, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1938',
                                    data: [
                                        8.87, 6.92, 5.89, 5.07, 4.32,
                                        3.72, 3.26, 2.85, 2.29, 1.84,
                                        1.55, 1.26, 1.02, 0.76, 0.48,
                                        0.24, 0.09, 0.02, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1938',
                                    data: [
                                        7.00, 6.60, 6.20, 5.80, 5.20,
                                        4.50, 4.11, 3.20, 2.80, 2.30,
                                        2.00, 1.20, 0.90, 0.60, 0.40,
                                        0.30, 0.30, 0.30, 0.11, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
            </div>
            <div className="graficas-censo">
                {/* Colombia */}
                {comunidad38_51 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1938',
                                    data: [
                                        -3.84, -3.84, -4.11, -4.43, -4.50,
                                        -4.33, -3.92, -3.57, -3.11, -2.81,
                                        -2.72, -2.31, -1.81, -1.43, -0.97,
                                        -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 1951',
                                    data: [
                                        -8.98, -7.13, -5.89, -5.19, -4.49,
                                        -3.72, -3.05, -2.66, -2.15, -1.74,
                                        -1.33, -1.04, -0.84, -0.60, -0.39,
                                        -0.26, -0.13, -0.04, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1938',
                                    data: [
                                        8.87, 6.92, 5.89, 5.07, 4.32,
                                        3.72, 3.26, 2.85, 2.29, 1.84,
                                        1.55, 1.26, 1.02, 0.76, 0.48,
                                        0.24, 0.09, 0.02, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 1951',
                                    data: [
                                        8.87, 7.08, 5.88, 5.19, 4.51,
                                        3.74, 3.06, 2.68, 2.17, 1.76,
                                        1.49, 1.20, 0.97, 0.71, 0.47,
                                        0.32, 0.19, 0.06, 0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad38_64 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1938',
                                    data: [
                                        -3.84, -3.84, -4.11, -4.43, -4.50,
                                        -4.33, -3.92, -3.57, -3.11, -2.81,
                                        -2.72, -2.31, -1.81, -1.43, -0.97,
                                        -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 1964',
                                    data: [
                                        -9.59, -7.92, -6.41, -5.04, -4.02,
                                        -3.26, -2.82, -2.37, -1.94, -1.62,
                                        -1.40, -1.06, -0.80, -0.54, -0.36,
                                        -0.21, -0.11, -0.04, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1938',
                                    data: [
                                        8.87, 6.92, 5.89, 5.07, 4.32,
                                        3.72, 3.26, 2.85, 2.29, 1.84,
                                        1.55, 1.26, 1.02, 0.76, 0.48,
                                        0.24, 0.09, 0.02, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 1964',
                                    data: [
                                        9.35, 7.82, 6.39, 5.06, 4.11,
                                        3.39, 2.96, 2.50, 2.04, 1.70,
                                        1.48, 1.11, 0.90, 0.69, 0.47,
                                        0.29, 0.13, 0.05, 0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad38_73 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1938',
                                    data: [
                                        -3.84, -3.84, -4.11, -4.43, -4.50,
                                        -4.33, -3.92, -3.57, -3.11, -2.81,
                                        -2.72, -2.31, -1.81, -1.43, -0.97,
                                        -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 1973',
                                    data: [
                                        -5.93, -6.42, -6.32, -5.53, -4.94,
                                        -3.95, -3.06, -2.47, -2.17, -1.68,
                                        -1.28, -1.19, -0.79, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1938',
                                    data: [
                                        8.87, 6.92, 5.89, 5.07, 4.32,
                                        3.72, 3.26, 2.85, 2.29, 1.84,
                                        1.55, 1.26, 1.02, 0.76, 0.48,
                                        0.24, 0.09, 0.02, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 1973',
                                    data: [
                                        5.93, 6.62, 6.92, 7.11, 6.13,
                                        4.74, 3.26, 2.96, 2.47, 1.88,
                                        1.38, 0.99, 0.89, 0.79, 0.59,
                                        0.30, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad38_85 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1938',
                                    data: [
                                        -3.84, -3.84, -4.11, -4.43, -4.50,
                                        -4.33, -3.92, -3.57, -3.11, -2.81,
                                        -2.72, -2.31, -1.81, -1.43, -0.97,
                                        -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 1985',
                                    data: [
                                        -6.89, -6.41, -5.75, -5.67, -5.22,
                                        -4.18, -3.45, -2.68, -2.06, -1.75,
                                        -1.49, -1.22, -0.93, -0.69, -0.50,
                                        -0.29, -0.15, -0.06, -0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1938',
                                    data: [
                                        8.87, 6.92, 5.89, 5.07, 4.32,
                                        3.72, 3.26, 2.85, 2.29, 1.84,
                                        1.55, 1.26, 1.02, 0.76, 0.48,
                                        0.24, 0.09, 0.02, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 1985',
                                    data: [
                                        5.46, 5.35, 4.76, 6.00, 6.20,
                                        5.74, 4.35, 3.61, 2.45, 2.02,
                                        1.71, 1.30, 1.01, 0.73, 0.52,
                                        0.32, 0.17, 0.09, 0.02, 0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad38_93 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1938',
                                    data: [
                                        -3.84, -3.84, -4.11, -4.43, -4.50,
                                        -4.33, -3.92, -3.57, -3.11, -2.81,
                                        -2.72, -2.31, -1.81, -1.43, -0.97,
                                        -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 1993',
                                    data: [
                                        -6.34, -5.95, -5.62, -5.04, -4.58,
                                        -4.43, -3.80, -3.06, -2.57, -1.95,
                                        -1.54, -1.29, -1.05, -0.79, -0.54,
                                        -0.35, -0.20, -0.08, -0.03, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1938',
                                    data: [
                                        8.87, 6.92, 5.89, 5.07, 4.32,
                                        3.72, 3.26, 2.85, 2.29, 1.84,
                                        1.55, 1.26, 1.02, 0.76, 0.48,
                                        0.24, 0.09, 0.02, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 1993',
                                    data: [
                                        6.08, 5.72, 5.47, 5.08, 4.74,
                                        4.57, 4.04, 3.36, 2.78, 2.13,
                                        1.72, 1.46, 1.20, 0.92, 0.66,
                                        0.44, 0.27, 0.11, 0.04, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad38_05 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1938',
                                    data: [
                                        -3.84, -3.84, -4.11, -4.43, -4.50,
                                        -4.33, -3.92, -3.57, -3.11, -2.81,
                                        -2.72, -2.31, -1.81, -1.43, -0.97,
                                        -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 2005',
                                    data: [
                                        -5.04, -5.19, -5.26, -4.88, -4.51,
                                        -4.04, -3.49, -3.39, -3.13, -2.50,
                                        -2.11, -1.63, -1.21, -0.95, -0.72,
                                        -0.48, -0.27, -0.11, -0.04, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1938',
                                    data: [
                                        8.87, 6.92, 5.89, 5.07, 4.32,
                                        3.72, 3.26, 2.85, 2.29, 1.84,
                                        1.55, 1.26, 1.02, 0.76, 0.48,
                                        0.24, 0.09, 0.02, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 2005',
                                    data: [
                                        4.82, 4.97, 5.04, 4.72, 4.49,
                                        4.22, 3.85, 3.72, 3.43, 2.85,
                                        2.40, 1.83, 1.40, 1.11, 0.88,
                                        0.62, 0.37, 0.17, 0.07, 0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad38_18 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1938',
                                    data: [
                                        -3.84, -3.84, -4.11, -4.43, -4.50,
                                        -4.33, -3.92, -3.57, -3.11, -2.81,
                                        -2.72, -2.31, -1.81, -1.43, -0.97,
                                        -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 2018',
                                    data: [
                                        -3.84, -3.84, -4.11, -4.43, -4.50,
                                        -4.33, -3.92, -3.57, -3.11, -2.81,
                                        -2.72, -2.31, -1.81, -1.43, -0.97,
                                        -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1938',
                                    data: [
                                        8.87, 6.92, 5.89, 5.07, 4.32,
                                        3.72, 3.26, 2.85, 2.29, 1.84,
                                        1.55, 1.26, 1.02, 0.76, 0.48,
                                        0.24, 0.09, 0.02, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 2018',
                                    data: [
                                        3.67, 3.67, 3.94, 4.25, 4.37,
                                        4.25, 3.94, 3.72, 3.43, 3.18,
                                        3.03, 2.64, 2.13, 1.68, 1.18,
                                        0.83, 0.56, 0.31, 0.13, 0.04, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad51_64 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1951',
                                    data: [
                                        -8.98, -7.13, -5.89, -5.19, -4.49,
                                        -3.72, -3.05, -2.66, -2.15, -1.74,
                                        -1.33, -1.04, -0.84, -0.60, -0.39,
                                        -0.26, -0.13, -0.04, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 1964',
                                    data: [
                                        -9.59, -7.92, -6.41, -5.04, -4.02,
                                        -3.26, -2.82, -2.37, -1.94, -1.62,
                                        -1.40, -1.06, -0.80, -0.54, -0.36,
                                        -0.21, -0.11, -0.04, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1951',
                                    data: [
                                        8.87, 7.08, 5.88, 5.19, 4.51,
                                        3.74, 3.06, 2.68, 2.17, 1.76,
                                        1.49, 1.20, 0.97, 0.71, 0.47,
                                        0.32, 0.19, 0.06, 0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 1964',
                                    data: [
                                        9.35, 7.82, 6.39, 5.06, 4.11,
                                        3.39, 2.96, 2.50, 2.04, 1.70,
                                        1.48, 1.11, 0.90, 0.69, 0.47,
                                        0.29, 0.13, 0.05, 0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    /></div>}
                {comunidad51_73 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1951',
                                    data: [
                                        -8.98, -7.13, -5.89, -5.19, -4.49,
                                        -3.72, -3.05, -2.66, -2.15, -1.74,
                                        -1.33, -1.04, -0.84, -0.60, -0.39,
                                        -0.26, -0.13, -0.04, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 1973',
                                    data: [
                                        -7.83, -7.79, -6.97, -5.67, -4.44,
                                        -3.38, -2.72, -2.33, -2.01, -1.67,
                                        -1.33, -1.09, -0.87, -0.61, -0.39,
                                        -0.22, -0.11, -0.05, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1951',
                                    data: [
                                        8.87, 7.08, 5.88, 5.19, 4.51,
                                        3.74, 3.06, 2.68, 2.17, 1.76,
                                        1.49, 1.20, 0.97, 0.71, 0.47,
                                        0.32, 0.19, 0.06, 0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 1973',
                                    data: [
                                        7.62, 7.61, 6.92, 5.72, 4.50,
                                        3.50, 2.89, 2.49, 2.15, 1.78,
                                        1.44, 1.19, 0.97, 0.70, 0.50,
                                        0.31, 0.16, 0.07, 0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad51_85 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1951',
                                    data: [
                                        -8.98, -7.13, -5.89, -5.19, -4.49,
                                        -3.72, -3.05, -2.66, -2.15, -1.74,
                                        -1.33, -1.04, -0.84, -0.60, -0.39,
                                        -0.26, -0.13, -0.04, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 1985',
                                    data: [
                                        -6.89, -6.41, -5.75, -5.67, -5.22,
                                        -4.18, -3.45, -2.68, -2.06, -1.75,
                                        -1.49, -1.22, -0.93, -0.69, -0.50,
                                        -0.29, -0.15, -0.06, -0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1951',
                                    data: [
                                        8.87, 7.08, 5.88, 5.19, 4.51,
                                        3.74, 3.06, 2.68, 2.17, 1.76,
                                        1.49, 1.20, 0.97, 0.71, 0.47,
                                        0.32, 0.19, 0.06, 0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 1985',
                                    data: [
                                        6.62, 6.22, 5.69, 5.64, 5.25,
                                        4.39, 3.64, 2.84, 2.25, 1.91,
                                        1.65, 1.35, 1.05, 0.79, 0.60,
                                        0.38, 0.20, 0.09, 0.03, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad51_93 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1951',
                                    data: [
                                        -8.98, -7.13, -5.89, -5.19, -4.49,
                                        -3.72, -3.05, -2.66, -2.15, -1.74,
                                        -1.33, -1.04, -0.84, -0.60, -0.39,
                                        -0.26, -0.13, -0.04, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 1993',
                                    data: [
                                        -6.34, -5.95, -5.62, -5.04, -4.58,
                                        -4.43, -3.80, -3.06, -2.57, -1.95,
                                        -1.54, -1.29, -1.05, -0.79, -0.54,
                                        -0.35, -0.20, -0.08, -0.03, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1951',
                                    data: [
                                        8.87, 7.08, 5.88, 5.19, 4.51,
                                        3.74, 3.06, 2.68, 2.17, 1.76,
                                        1.49, 1.20, 0.97, 0.71, 0.47,
                                        0.32, 0.19, 0.06, 0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 1993',
                                    data: [
                                        6.08, 5.72, 5.47, 5.08, 4.74,
                                        4.57, 4.04, 3.36, 2.78, 2.13,
                                        1.72, 1.46, 1.20, 0.92, 0.66,
                                        0.44, 0.27, 0.11, 0.04, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad51_05 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1951',
                                    data: [
                                        -8.98, -7.13, -5.89, -5.19, -4.49,
                                        -3.72, -3.05, -2.66, -2.15, -1.74,
                                        -1.33, -1.04, -0.84, -0.60, -0.39,
                                        -0.26, -0.13, -0.04, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 2005',
                                    data: [
                                        -5.04, -5.19, -5.26, -4.88, -4.51,
                                        -4.04, -3.49, -3.39, -3.13, -2.50,
                                        -2.11, -1.63, -1.21, -0.95, -0.72,
                                        -0.48, -0.27, -0.11, -0.04, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1951',
                                    data: [
                                        8.87, 7.08, 5.88, 5.19, 4.51,
                                        3.74, 3.06, 2.68, 2.17, 1.76,
                                        1.49, 1.20, 0.97, 0.71, 0.47,
                                        0.32, 0.19, 0.06, 0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 2005',
                                    data: [
                                        4.82, 4.97, 5.04, 4.72, 4.49,
                                        4.22, 3.85, 3.72, 3.43, 2.85,
                                        2.40, 1.83, 1.40, 1.11, 0.88,
                                        0.62, 0.37, 0.17, 0.07, 0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad51_18 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1951',
                                    data: [
                                        -8.98, -7.13, -5.89, -5.19, -4.49,
                                        -3.72, -3.05, -2.66, -2.15, -1.74,
                                        -1.33, -1.04, -0.84, -0.60, -0.39,
                                        -0.26, -0.13, -0.04, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 2018',
                                    data: [
                                        -3.84, -3.84, -4.11, -4.43, -4.50,
                                        -4.33, -3.92, -3.57, -3.11, -2.81,
                                        -2.72, -2.31, -1.81, -1.43, -0.97,
                                        -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1951',
                                    data: [
                                        8.87, 7.08, 5.88, 5.19, 4.51,
                                        3.74, 3.06, 2.68, 2.17, 1.76,
                                        1.49, 1.20, 0.97, 0.71, 0.47,
                                        0.32, 0.19, 0.06, 0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 2018',
                                    data: [
                                        3.67, 3.67, 3.94, 4.25, 4.37,
                                        4.25, 3.94, 3.72, 3.43, 3.18,
                                        3.03, 2.64, 2.13, 1.68, 1.18,
                                        0.83, 0.56, 0.31, 0.13, 0.04, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    /></div>}
                {comunidad64_73 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1964',
                                    data: [
                                        -9.59, -7.92, -6.41, -5.04, -4.02,
                                        -3.26, -2.82, -2.37, -1.94, -1.62,
                                        -1.40, -1.06, -0.80, -0.54, -0.36,
                                        -0.21, -0.11, -0.04, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 1973',
                                    data: [
                                        -7.83, -7.79, -6.97, -5.67, -4.44,
                                        -3.38, -2.72, -2.33, -2.01, -1.67,
                                        -1.33, -1.09, -0.87, -0.61, -0.39,
                                        -0.22, -0.11, -0.05, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1964',
                                    data: [
                                        9.35, 7.82, 6.39, 5.06, 4.11,
                                        3.39, 2.96, 2.50, 2.04, 1.70,
                                        1.48, 1.11, 0.90, 0.69, 0.47,
                                        0.29, 0.13, 0.05, 0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 1973',
                                    data: [
                                        7.62, 7.61, 6.92, 5.72, 4.50,
                                        3.50, 2.89, 2.49, 2.15, 1.78,
                                        1.44, 1.19, 0.97, 0.70, 0.50,
                                        0.31, 0.16, 0.07, 0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad64_85 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1964',
                                    data: [
                                        -9.59, -7.92, -6.41, -5.04, -4.02,
                                        -3.26, -2.82, -2.37, -1.94, -1.62,
                                        -1.40, -1.06, -0.80, -0.54, -0.36,
                                        -0.21, -0.11, -0.04, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 1985',
                                    data: [
                                        -6.89, -6.41, -5.75, -5.67, -5.22,
                                        -4.18, -3.45, -2.68, -2.06, -1.75,
                                        -1.49, -1.22, -0.93, -0.69, -0.50,
                                        -0.29, -0.15, -0.06, -0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1964',
                                    data: [
                                        9.35, 7.82, 6.39, 5.06, 4.11,
                                        3.39, 2.96, 2.50, 2.04, 1.70,
                                        1.48, 1.11, 0.90, 0.69, 0.47,
                                        0.29, 0.13, 0.05, 0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 1985',
                                    data: [
                                        6.62, 6.22, 5.69, 5.64, 5.25,
                                        4.39, 3.64, 2.84, 2.25, 1.91,
                                        1.65, 1.35, 1.05, 0.79, 0.60,
                                        0.38, 0.20, 0.09, 0.03, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad64_93 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1964',
                                    data: [
                                        -9.59, -7.92, -6.41, -5.04, -4.02,
                                        -3.26, -2.82, -2.37, -1.94, -1.62,
                                        -1.40, -1.06, -0.80, -0.54, -0.36,
                                        -0.21, -0.11, -0.04, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 1993',
                                    data: [
                                        -6.34, -5.95, -5.62, -5.04, -4.58,
                                        -4.43, -3.80, -3.06, -2.57, -1.95,
                                        -1.54, -1.29, -1.05, -0.79, -0.54,
                                        -0.35, -0.20, -0.08, -0.03, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1964',
                                    data: [
                                        9.35, 7.82, 6.39, 5.06, 4.11,
                                        3.39, 2.96, 2.50, 2.04, 1.70,
                                        1.48, 1.11, 0.90, 0.69, 0.47,
                                        0.29, 0.13, 0.05, 0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 1993',
                                    data: [
                                        6.08, 5.72, 5.47, 5.08, 4.74,
                                        4.57, 4.04, 3.36, 2.78, 2.13,
                                        1.72, 1.46, 1.20, 0.92, 0.66,
                                        0.44, 0.27, 0.11, 0.04, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad64_05 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1964',
                                    data: [
                                        -9.59, -7.92, -6.41, -5.04, -4.02,
                                        -3.26, -2.82, -2.37, -1.94, -1.62,
                                        -1.40, -1.06, -0.80, -0.54, -0.36,
                                        -0.21, -0.11, -0.04, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 2005',
                                    data: [
                                        -5.04, -5.19, -5.26, -4.88, -4.51,
                                        -4.04, -3.49, -3.39, -3.13, -2.50,
                                        -2.11, -1.63, -1.21, -0.95, -0.72,
                                        -0.48, -0.27, -0.11, -0.04, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1964',
                                    data: [
                                        4.82, 4.97, 5.04, 4.72, 4.49,
                                        4.22, 3.85, 3.72, 3.43, 2.85,
                                        2.40, 1.83, 1.40, 1.11, 0.88,
                                        0.62, 0.37, 0.17, 0.07, 0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 2005',
                                    data: [
                                        6.62, 6.22, 5.69, 5.64, 5.25,
                                        4.39, 3.64, 2.84, 2.25, 1.91,
                                        1.65, 1.35, 1.05, 0.79, 0.60,
                                        0.38, 0.20, 0.09, 0.03, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad64_18 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1964',
                                    data: [
                                        -9.59, -7.92, -6.41, -5.04, -4.02,
                                        -3.26, -2.82, -2.37, -1.94, -1.62,
                                        -1.40, -1.06, -0.80, -0.54, -0.36,
                                        -0.21, -0.11, -0.04, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 2018',
                                    data: [
                                        -3.84, -3.84, -4.11, -4.43, -4.50,
                                        -4.33, -3.92, -3.57, -3.11, -2.81,
                                        -2.72, -2.31, -1.81, -1.43, -0.97,
                                        -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1964',
                                    data: [
                                        4.82, 4.97, 5.04, 4.72, 4.49,
                                        4.22, 3.85, 3.72, 3.43, 2.85,
                                        2.40, 1.83, 1.40, 1.11, 0.88,
                                        0.62, 0.37, 0.17, 0.07, 0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 2018',
                                    data: [
                                        3.67, 3.67, 3.94, 4.25, 4.37,
                                        4.25, 3.94, 3.72, 3.43, 3.18,
                                        3.03, 2.64, 2.13, 1.68, 1.18,
                                        0.83, 0.56, 0.31, 0.13, 0.04, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad73_85 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1973',
                                    data: [
                                        -7.83, -7.79, -6.97, -5.67, -4.44,
                                        -3.38, -2.72, -2.33, -2.01, -1.67,
                                        -1.33, -1.09, -0.87, -0.61, -0.39,
                                        -0.22, -0.11, -0.05, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 1985',
                                    data: [
                                        -6.89, -6.41, -5.75, -5.67, -5.22,
                                        -4.18, -3.45, -2.68, -2.06, -1.75,
                                        -1.49, -1.22, -0.93, -0.69, -0.50,
                                        -0.29, -0.15, -0.06, -0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1973',
                                    data: [
                                        7.62, 7.61, 6.92, 5.72, 4.50,
                                        3.50, 2.89, 2.49, 2.15, 1.78,
                                        1.44, 1.19, 0.97, 0.70, 0.50,
                                        0.31, 0.16, 0.07, 0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 1985',
                                    data: [
                                        6.62, 6.22, 5.69, 5.64, 5.25,
                                        4.39, 3.64, 2.84, 2.25, 1.91,
                                        1.65, 1.35, 1.05, 0.79, 0.60,
                                        0.38, 0.20, 0.09, 0.03, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad73_93 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1973',
                                    data: [
                                        -7.83, -7.79, -6.97, -5.67, -4.44,
                                        -3.38, -2.72, -2.33, -2.01, -1.67,
                                        -1.33, -1.09, -0.87, -0.61, -0.39,
                                        -0.22, -0.11, -0.05, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 1993',
                                    data: [
                                        -6.34, -5.95, -5.62, -5.04, -4.58,
                                        -4.43, -3.80, -3.06, -2.57, -1.95,
                                        -1.54, -1.29, -1.05, -0.79, -0.54,
                                        -0.35, -0.20, -0.08, -0.03, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1973',
                                    data: [
                                        7.62, 7.61, 6.92, 5.72, 4.50,
                                        3.50, 2.89, 2.49, 2.15, 1.78,
                                        1.44, 1.19, 0.97, 0.70, 0.50,
                                        0.31, 0.16, 0.07, 0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 1993',
                                    data: [
                                        6.08, 5.72, 5.47, 5.08, 4.74,
                                        4.57, 4.04, 3.36, 2.78, 2.13,
                                        1.72, 1.46, 1.20, 0.92, 0.66,
                                        0.44, 0.27, 0.11, 0.04, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad73_05 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1973',
                                    data: [
                                        -7.83, -7.79, -6.97, -5.67, -4.44,
                                        -3.38, -2.72, -2.33, -2.01, -1.67,
                                        -1.33, -1.09, -0.87, -0.61, -0.39,
                                        -0.22, -0.11, -0.05, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 2005',
                                    data: [
                                        -5.04, -5.19, -5.26, -4.88, -4.51,
                                        -4.04, -3.49, -3.39, -3.13, -2.50,
                                        -2.11, -1.63, -1.21, -0.95, -0.72,
                                        -0.48, -0.27, -0.11, -0.04, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1973',
                                    data: [
                                        7.62, 7.61, 6.92, 5.72, 4.50,
                                        3.50, 2.89, 2.49, 2.15, 1.78,
                                        1.44, 1.19, 0.97, 0.70, 0.50,
                                        0.31, 0.16, 0.07, 0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 2005',
                                    data: [
                                        4.82, 4.97, 5.04, 4.72, 4.49,
                                        4.22, 3.85, 3.72, 3.43, 2.85,
                                        2.40, 1.83, 1.40, 1.11, 0.88,
                                        0.62, 0.37, 0.17, 0.07, 0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad73_18 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1973',
                                    data: [
                                        -7.83, -7.79, -6.97, -5.67, -4.44,
                                        -3.38, -2.72, -2.33, -2.01, -1.67,
                                        -1.33, -1.09, -0.87, -0.61, -0.39,
                                        -0.22, -0.11, -0.05, -0.01, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 2018',
                                    data: [
                                        -3.84, -3.84, -4.11, -4.43, -4.50,
                                        -4.33, -3.92, -3.57, -3.11, -2.81,
                                        -2.72, -2.31, -1.81, -1.43, -0.97,
                                        -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1973',
                                    data: [
                                        7.62, 7.61, 6.92, 5.72, 4.50,
                                        3.50, 2.89, 2.49, 2.15, 1.78,
                                        1.44, 1.19, 0.97, 0.70, 0.50,
                                        0.31, 0.16, 0.07, 0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 2018',
                                    data: [
                                        3.67, 3.67, 3.94, 4.25, 4.37,
                                        4.25, 3.94, 3.72, 3.43, 3.18,
                                        3.03, 2.64, 2.13, 1.68, 1.18,
                                        0.83, 0.56, 0.31, 0.13, 0.04, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad85_93 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1985',
                                    data: [
                                        -6.89, -6.41, -5.75, -5.67, -5.22,
                                        -4.18, -3.45, -2.68, -2.06, -1.75,
                                        -1.49, -1.22, -0.93, -0.69, -0.50,
                                        -0.29, -0.15, -0.06, -0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 1993',
                                    data: [
                                        -6.34, -5.95, -5.62, -5.04, -4.58,
                                        -4.43, -3.80, -3.06, -2.57, -1.95,
                                        -1.54, -1.29, -1.05, -0.79, -0.54,
                                        -0.35, -0.20, -0.08, -0.03, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1985',
                                    data: [
                                        6.62, 6.22, 5.69, 5.64, 5.25,
                                        4.39, 3.64, 2.84, 2.25, 1.91,
                                        1.65, 1.35, 1.05, 0.79, 0.60,
                                        0.38, 0.20, 0.09, 0.03, 0.01, 0.00
                                    ],
                                    pointWidth: 4,

                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 1993',
                                    data: [
                                        6.08, 5.72, 5.47, 5.08, 4.74,
                                        4.57, 4.04, 3.36, 2.78, 2.13,
                                        1.72, 1.46, 1.20, 0.92, 0.66,
                                        0.44, 0.27, 0.11, 0.04, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad85_05 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1985',
                                    data: [
                                        -6.89, -6.41, -5.75, -5.67, -5.22,
                                        -4.18, -3.45, -2.68, -2.06, -1.75,
                                        -1.49, -1.22, -0.93, -0.69, -0.50,
                                        -0.29, -0.15, -0.06, -0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 2005',
                                    data: [
                                        -5.04, -5.19, -5.26, -4.88, -4.51,
                                        -4.04, -3.49, -3.39, -3.13, -2.50,
                                        -2.11, -1.63, -1.21, -0.95, -0.72,
                                        -0.48, -0.27, -0.11, -0.04, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1985',
                                    data: [
                                        6.62, 6.22, 5.69, 5.64, 5.25,
                                        4.39, 3.64, 2.84, 2.25, 1.91,
                                        1.65, 1.35, 1.05, 0.79, 0.60,
                                        0.38, 0.20, 0.09, 0.03, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 2005',
                                    data: [
                                        4.82, 4.97, 5.04, 4.72, 4.49,
                                        4.22, 3.85, 3.72, 3.43, 2.85,
                                        2.40, 1.83, 1.40, 1.11, 0.88,
                                        0.62, 0.37, 0.17, 0.07, 0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad85_18 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1985',
                                    data: [
                                        -6.89, -6.41, -5.75, -5.67, -5.22,
                                        -4.18, -3.45, -2.68, -2.06, -1.75,
                                        -1.49, -1.22, -0.93, -0.69, -0.50,
                                        -0.29, -0.15, -0.06, -0.02, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 2018',
                                    data: [
                                        -3.84, -3.84, -4.11, -4.43, -4.50,
                                        -4.33, -3.92, -3.57, -3.11, -2.81,
                                        -2.72, -2.31, -1.81, -1.43, -0.97,
                                        -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1985',
                                    data: [
                                        6.62, 6.22, 5.69, 5.64, 5.25,
                                        4.39, 3.64, 2.84, 2.25, 1.91,
                                        1.65, 1.35, 1.05, 0.79, 0.60,
                                        0.38, 0.20, 0.09, 0.03, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 2018',
                                    data: [
                                        3.67, 3.67, 3.94, 4.25, 4.37,
                                        4.25, 3.94, 3.72, 3.43, 3.18,
                                        3.03, 2.64, 2.13, 1.68, 1.18,
                                        0.83, 0.56, 0.31, 0.13, 0.04, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad93_05 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1993',
                                    data: [
                                        -6.34, -5.95, -5.62, -5.04, -4.58,
                                        -4.43, -3.80, -3.06, -2.57, -1.95,
                                        -1.54, -1.29, -1.05, -0.79, -0.54,
                                        -0.35, -0.20, -0.08, -0.03, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 2005',
                                    data: [
                                        -5.04, -5.19, -5.26, -4.88, -4.51,
                                        -4.04, -3.49, -3.39, -3.13, -2.50,
                                        -2.11, -1.63, -1.21, -0.95, -0.72,
                                        -0.48, -0.27, -0.11, -0.04, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1993',
                                    data: [
                                        6.08, 5.72, 5.47, 5.08, 4.74,
                                        4.57, 4.04, 3.36, 2.78, 2.13,
                                        1.72, 1.46, 1.20, 0.92, 0.66,
                                        0.44, 0.27, 0.11, 0.04, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 2005',
                                    data: [
                                        4.82, 4.97, 5.04, 4.72, 4.49,
                                        4.22, 3.85, 3.72, 3.43, 2.85,
                                        2.40, 1.83, 1.40, 1.11, 0.88,
                                        0.62, 0.37, 0.17, 0.07, 0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad93_18 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 1993',
                                    data: [
                                        -6.34, -5.95, -5.62, -5.04, -4.58,
                                        -4.43, -3.80, -3.06, -2.57, -1.95,
                                        -1.54, -1.29, -1.05, -0.79, -0.54,
                                        -0.35, -0.20, -0.08, -0.03, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 2018',
                                    data: [
                                        -3.84, -3.84, -4.11, -4.43, -4.50,
                                        -4.33, -3.92, -3.57, -3.11, -2.81,
                                        -2.72, -2.31, -1.81, -1.43, -0.97,
                                        -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 1993',
                                    data: [
                                        6.08, 5.72, 5.47, 5.08, 4.74,
                                        4.57, 4.04, 3.36, 2.78, 2.13,
                                        1.72, 1.46, 1.20, 0.92, 0.66,
                                        0.44, 0.27, 0.11, 0.04, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 2018',
                                    data: [
                                        3.67, 3.67, 3.94, 4.25, 4.37,
                                        4.25, 3.94, 3.72, 3.43, 3.18,
                                        3.03, 2.64, 2.13, 1.68, 1.18,
                                        0.83, 0.56, 0.31, 0.13, 0.04, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {comunidad05_18 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Colombia Hombres 2005',
                                    data: [
                                        -5.04, -5.19, -5.26, -4.88, -4.51,
                                        -4.04, -3.49, -3.39, -3.13, -2.50,
                                        -2.11, -1.63, -1.21, -0.95, -0.72,
                                        -0.48, -0.27, -0.11, -0.04, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Colombia Hombres 2018',
                                    data: [
                                        -3.84, -3.84, -4.11, -4.43, -4.50,
                                        -4.33, -3.92, -3.57, -3.11, -2.81,
                                        -2.72, -2.31, -1.81, -1.43, -0.97,
                                        -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Colombia Mujeres 2005',
                                    data: [
                                        4.82, 4.97, 5.04, 4.72, 4.49,
                                        4.22, 3.85, 3.72, 3.43, 2.85,
                                        2.40, 1.83, 1.40, 1.11, 0.88,
                                        0.62, 0.37, 0.17, 0.07, 0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Colombia Mujeres 2018',

                                    data: [
                                        3.67, 3.67, 3.94, 4.25, 4.37,
                                        4.25, 3.94, 3.72, 3.43, 3.18,
                                        3.03, 2.64, 2.13, 1.68, 1.18,
                                        0.83, 0.56, 0.31, 0.13, 0.04, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}



                {/* Bogota */}
                {bcomunidad38_51 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1938',
                                    data: [
                                        -6.70, -6.00, -5.40, -4.90, -4.60,
                                        -4.00, -3.30, -2.70, -2.20, -1.60,
                                        -1.40, -1.11, -0.60, -0.40, -0.30,
                                        -0.20, -0.20, -0.20, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1951',
                                    data: [
                                        -6.82, -6.54, -6.07, -5.23, -5.11,
                                        -4.02, -3.08, -2.80, -2.15, -1.40,
                                        -1.21, -0.93, -0.47, -0.28, -0.19,
                                        -0.09, -0.09, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1938',
                                    data: [
                                        7.00, 6.60, 6.20, 5.80, 5.20,
                                        4.50, 4.11, 3.20, 2.80, 2.30,
                                        2.00, 1.20, 0.90, 0.60, 0.40,
                                        0.30, 0.30, 0.30, 0.11, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1951',
                                    data: [
                                        6.54, 6.45, 5.70, 5.61, 5.30,
                                        5.05, 4.00, 3.55, 2.71, 1.87,
                                        1.78, 0.93, 0.75, 0.47, 0.28,
                                        0.19, 0.19, 0.20, 0.11, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad38_64 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1938',
                                    data: [
                                        -3.84, -3.84, -4.11, -4.43, -4.50,
                                        -4.33, -3.92, -3.57, -3.11, -2.81,
                                        -2.72, -2.31, -1.81, -1.43, -0.97,
                                        -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1964',
                                    data: [
                                        -8.19, -6.90, -5.13, -4.44, -4.24,
                                        -3.75, -3.45, -2.47, -1.97, -1.70,
                                        -1.18, -0.99, -0.89, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1938',
                                    data: [
                                        8.87, 6.92, 5.89, 5.07, 4.32,
                                        3.72, 3.26, 2.85, 2.29, 1.84,
                                        1.55, 1.26, 1.02, 0.76, 0.48,
                                        0.24, 0.09, 0.02, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1964',
                                    data: [
                                        7.99, 7.00, 5.92, 6.11, 5.72,
                                        4.73, 3.94, 2.96, 2.27, 1.97,
                                        1.87, 1.08, 0.99, 0.69, 0.49,
                                        0.20, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad38_73 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1938',
                                    data: [
                                        -6.70, -6.00, -5.40, -4.90, -4.60,
                                        -4.00, -3.30, -2.70, -2.20, -1.60,
                                        -1.40, -1.11, -0.60, -0.40, -0.30,
                                        -0.20, -0.20, -0.20, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1973',
                                    data: [
                                        -5.93, -6.42, -6.32, -5.53, -4.94,
                                        -3.95, -3.06, -2.47, -2.17, -1.68,
                                        -1.28, -1.19, -0.79, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1938',
                                    data: [
                                        7.00, 6.60, 6.20, 5.80, 5.20,
                                        4.50, 4.11, 3.20, 2.80, 2.30,
                                        2.00, 1.20, 0.90, 0.60, 0.40,
                                        0.30, 0.30, 0.30, 0.11, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1973',
                                    data: [
                                        5.93, 6.62, 6.92, 7.11, 6.13,
                                        4.74, 3.26, 2.96, 2.47, 1.88,
                                        1.38, 0.99, 0.89, 0.79, 0.59,
                                        0.30, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad38_85 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1938',
                                    data: [
                                        -6.70, -6.00, -5.40, -4.90, -4.60,
                                        -4.00, -3.30, -2.70, -2.20, -1.60,
                                        -1.40, -1.11, -0.60, -0.40, -0.30,
                                        -0.20, -0.20, -0.20, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1985',
                                    data: [
                                        -5.71, -5.51, -4.68, -4.82, -5.57,
                                        -4.82, -3.87, -3.27, -2.43, -1.88,
                                        -1.59, -1.17, -0.84, -0.57, -0.38,
                                        -0.23, -0.11, -0.04, -0.01, -0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1938',
                                    data: [
                                        7.00, 6.60, 6.20, 5.80, 5.20,
                                        4.50, 4.11, 3.20, 2.80, 2.30,
                                        2.00, 1.20, 0.90, 0.60, 0.40,
                                        0.30, 0.30, 0.30, 0.11, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1985',
                                    data: [
                                        5.46, 5.35, 4.76, 6.00, 6.20,
                                        5.74, 4.35, 3.61, 2.45, 2.02,
                                        1.71, 1.30, 1.01, 0.73, 0.52,
                                        0.32, 0.17, 0.09, 0.02, 0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad38_93 && <div className="grafica">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1938',
                                    data: [
                                        -6.70, -6.00, -5.40, -4.90, -4.60,
                                        -4.00, -3.30, -2.70, -2.20, -1.60,
                                        -1.40, -1.11, -0.60, -0.40, -0.30,
                                        -0.20, -0.20, -0.20, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1993',
                                    data: [
                                        -5.09, -4.97, -4.93, -4.24, -4.75,
                                        -4.90, -4.57, -3.54, -2.80, -2.03,
                                        -1.67, -1.21, -1.03, -0.66, -0.46,
                                        -0.26, -0.15, -0.06, -0.02, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1938',
                                    data: [
                                        7.00, 6.60, 6.20, 5.80, 5.20,
                                        4.50, 4.11, 3.20, 2.80, 2.30,
                                        2.00, 1.20, 0.90, 0.60, 0.40,
                                        0.30, 0.30, 0.30, 0.11, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1993',
                                    data: [
                                        4.95, 4.84, 4.96, 5.07, 5.68,
                                        5.65, 5.18, 4.11, 3.09, 2.27,
                                        1.90, 1.42, 1.26, 0.84, 0.62,
                                        0.39, 0.24, 0.11, 0.04, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad38_05 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1938',
                                    data: [
                                        -6.70, -6.00, -5.40, -4.90, -4.60,
                                        -4.00, -3.30, -2.70, -2.20, -1.60,
                                        -1.40, -1.11, -0.60, -0.40, -0.30,
                                        -0.20, -0.20, -0.20, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 2005',
                                    data: [
                                        -4.26, -4.69, -4.54, -4.23, -4.58,
                                        -4.34, -3.80, -3.64, -3.44, -2.85,
                                        -2.21, -1.71, -1.25, -0.87, -0.62,
                                        -0.44, -0.22, -0.11, -0.03, -0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1938',
                                    data: [
                                        7.00, 6.60, 6.20, 5.80, 5.20,
                                        4.50, 4.11, 3.20, 2.80, 2.30,
                                        2.00, 1.20, 0.90, 0.60, 0.40,
                                        0.30, 0.30, 0.30, 0.11, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 2005',
                                    data: [
                                        4.08, 4.53, 4.43, 4.39, 4.98,
                                        4.72, 4.15, 4.09, 3.96, 3.37,
                                        2.65, 2.05, 1.51, 1.15, 0.86,
                                        0.64, 0.36, 0.17, 0.06, 0.02, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad38_18 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1938',
                                    data: [
                                        -6.70, -6.00, -5.40, -4.90, -4.60,
                                        -4.00, -3.30, -2.70, -2.20, -1.60,
                                        -1.40, -1.11, -0.60, -0.40, -0.30,
                                        -0.20, -0.20, -0.20, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 2018',
                                    data: [
                                        -2.94, -3.18, -3.36, -3.90, -4.83,
                                        -4.71, -4.19, -3.87, -3.11, -2.89,
                                        -2.84, -2.47, -1.89, -1.36, -0.93,
                                        -0.64, -0.39, -0.21, -0.06, -0.02, -0.01],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1938',
                                    data: [
                                        8.87, 6.92, 5.89, 5.07, 4.32,
                                        3.72, 3.26, 2.85, 2.29, 1.84,
                                        1.55, 1.26, 1.02, 0.76, 0.48,
                                        0.24, 0.09, 0.02, 0.00, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 2018',
                                    data: [
                                        2.80, 3.06, 3.24, 3.84, 4.87,
                                        4.76, 4.28, 4.13, 3.56, 3.42,
                                        3.46, 3.11, 2.44, 1.80, 1.28,
                                        0.92, 0.64, 0.37, 0.16, 0.04, 0.02],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad51_64 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1951',
                                    data: [
                                        -6.82, -6.54, -6.07, -5.23, -5.11,
                                        -4.02, -3.08, -2.80, -2.15, -1.40,
                                        -1.21, -0.93, -0.47, -0.28, -0.19,
                                        -0.09, -0.09, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1964',
                                    data: [
                                        -8.19, -6.90, -5.13, -4.44, -4.24,
                                        -3.75, -3.45, -2.47, -1.97, -1.70,
                                        -1.18, -0.99, -0.89, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1951',
                                    data: [
                                        6.54, 6.45, 5.70, 5.61, 5.30,
                                        5.05, 4.00, 3.55, 2.71, 1.87,
                                        1.78, 0.93, 0.75, 0.47, 0.28,
                                        0.19, 0.19, 0.20, 0.11, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1964',
                                    data: [
                                        7.99, 7.00, 5.92, 6.11, 5.72,
                                        4.73, 3.94, 2.96, 2.27, 1.97,
                                        1.87, 1.08, 0.99, 0.69, 0.49,
                                        0.20, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    /></div>}
                {bcomunidad51_73 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1951',
                                    data: [
                                        -6.82, -6.54, -6.07, -5.23, -5.11,
                                        -4.02, -3.08, -2.80, -2.15, -1.40,
                                        -1.21, -0.93, -0.47, -0.28, -0.19,
                                        -0.09, -0.09, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1973',
                                    data: [
                                        -5.93, -6.42, -6.32, -5.53, -4.94,
                                        -3.95, -3.06, -2.47, -2.17, -1.68,
                                        -1.28, -1.19, -0.79, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1951',
                                    data: [
                                        6.54, 6.45, 5.70, 5.61, 5.30,
                                        5.05, 4.00, 3.55, 2.71, 1.87,
                                        1.78, 0.93, 0.75, 0.47, 0.28,
                                        0.19, 0.19, 0.20, 0.11, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                }, {
                                    name: 'Bogotá Mujeres 1973',
                                    data: [
                                        5.93, 6.62, 6.92, 7.11, 6.13,
                                        4.74, 3.26, 2.96, 2.47, 1.88,
                                        1.38, 0.99, 0.89, 0.79, 0.59,
                                        0.30, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad51_85 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1951',
                                    data: [
                                        -6.82, -6.54, -6.07, -5.23, -5.11,
                                        -4.02, -3.08, -2.80, -2.15, -1.40,
                                        -1.21, -0.93, -0.47, -0.28, -0.19,
                                        -0.09, -0.09, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1985',
                                    data: [
                                        -5.71, -5.51, -4.68, -4.82, -5.57,
                                        -4.82, -3.87, -3.27, -2.43, -1.88,
                                        -1.59, -1.17, -0.84, -0.57, -0.38,
                                        -0.23, -0.11, -0.04, -0.01, -0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1951',
                                    data: [
                                        6.54, 6.45, 5.70, 5.61, 5.30,
                                        5.05, 4.00, 3.55, 2.71, 1.87,
                                        1.78, 0.93, 0.75, 0.47, 0.28,
                                        0.19, 0.19, 0.20, 0.11, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1985',
                                    data: [
                                        5.46, 5.35, 4.76, 6.00, 6.20,
                                        5.74, 4.35, 3.61, 2.45, 2.02,
                                        1.71, 1.30, 1.01, 0.73, 0.52,
                                        0.32, 0.17, 0.09, 0.02, 0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad51_93 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1951',
                                    data: [
                                        -6.82, -6.54, -6.07, -5.23, -5.11,
                                        -4.02, -3.08, -2.80, -2.15, -1.40,
                                        -1.21, -0.93, -0.47, -0.28, -0.19,
                                        -0.09, -0.09, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1993',
                                    data: [
                                        -5.09, -4.97, -4.93, -4.24, -4.75,
                                        -4.90, -4.57, -3.54, -2.80, -2.03,
                                        -1.67, -1.21, -1.03, -0.66, -0.46,
                                        -0.26, -0.15, -0.06, -0.02, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1951',
                                    data: [
                                        6.54, 6.45, 5.70, 5.61, 5.30,
                                        5.05, 4.00, 3.55, 2.71, 1.87,
                                        1.78, 0.93, 0.75, 0.47, 0.28,
                                        0.19, 0.19, 0.20, 0.11, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1993',
                                    data: [
                                        4.95, 4.84, 4.96, 5.07, 5.68,
                                        5.65, 5.18, 4.11, 3.09, 2.27,
                                        1.90, 1.42, 1.26, 0.84, 0.62,
                                        0.39, 0.24, 0.11, 0.04, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad51_05 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1951',
                                    data: [
                                        -6.82, -6.54, -6.07, -5.23, -5.11,
                                        -4.02, -3.08, -2.80, -2.15, -1.40,
                                        -1.21, -0.93, -0.47, -0.28, -0.19,
                                        -0.09, -0.09, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 2005',
                                    data: [
                                        -4.26, -4.69, -4.54, -4.23, -4.58,
                                        -4.34, -3.80, -3.64, -3.44, -2.85,
                                        -2.21, -1.71, -1.25, -0.87, -0.62,
                                        -0.44, -0.22, -0.11, -0.03, -0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1951',
                                    data: [
                                        6.54, 6.45, 5.70, 5.61, 5.30,
                                        5.05, 4.00, 3.55, 2.71, 1.87,
                                        1.78, 0.93, 0.75, 0.47, 0.28,
                                        0.19, 0.19, 0.20, 0.11, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 2005',
                                    data: [
                                        4.08, 4.53, 4.43, 4.39, 4.98,
                                        4.72, 4.15, 4.09, 3.96, 3.37,
                                        2.65, 2.05, 1.51, 1.15, 0.86,
                                        0.64, 0.36, 0.17, 0.06, 0.02, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad51_18 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1951',
                                    data: [
                                        -6.82, -6.54, -6.07, -5.23, -5.11,
                                        -4.02, -3.08, -2.80, -2.15, -1.40,
                                        -1.21, -0.93, -0.47, -0.28, -0.19,
                                        -0.09, -0.09, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 2018',
                                    data: [
                                        -2.94, -3.18, -3.36, -3.90, -4.83,
                                        -4.71, -4.19, -3.87, -3.11, -2.89,
                                        -2.84, -2.47, -1.89, -1.36, -0.93,
                                        -0.64, -0.39, -0.21, -0.06, -0.02, -0.01],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1951',
                                    data: [
                                        6.54, 6.45, 5.70, 5.61, 5.30,
                                        5.05, 4.00, 3.55, 2.71, 1.87,
                                        1.78, 0.93, 0.75, 0.47, 0.28,
                                        0.19, 0.19, 0.20, 0.11, 0.00, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 2018',
                                    data: [
                                        2.80, 3.06, 3.24, 3.84, 4.87,
                                        4.76, 4.28, 4.13, 3.56, 3.42,
                                        3.46, 3.11, 2.44, 1.80, 1.28,
                                        0.92, 0.64, 0.37, 0.16, 0.04, 0.02],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    /></div>}
                {bcomunidad64_73 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1964',
                                    data: [
                                        -8.19, -6.90, -5.13, -4.44, -4.24,
                                        -3.75, -3.45, -2.47, -1.97, -1.70,
                                        -1.18, -0.99, -0.89, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1973',
                                    data: [
                                        -5.93, -6.42, -6.32, -5.53, -4.94,
                                        -3.95, -3.06, -2.47, -2.17, -1.68,
                                        -1.28, -1.19, -0.79, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1964',
                                    data: [
                                        7.99, 7.00, 5.92, 6.11, 5.72,
                                        4.73, 3.94, 2.96, 2.27, 1.97,
                                        1.87, 1.08, 0.99, 0.69, 0.49,
                                        0.20, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1973',
                                    data: [
                                        5.93, 6.62, 6.92, 7.11, 6.13,
                                        4.74, 3.26, 2.96, 2.47, 1.88,
                                        1.38, 0.99, 0.89, 0.79, 0.59,
                                        0.30, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad64_85 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1964',
                                    data: [
                                        -8.19, -6.90, -5.13, -4.44, -4.24,
                                        -3.75, -3.45, -2.47, -1.97, -1.70,
                                        -1.18, -0.99, -0.89, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1985',
                                    data: [
                                        -5.71, -5.51, -4.68, -4.82, -5.57,
                                        -4.82, -3.87, -3.27, -2.43, -1.88,
                                        -1.59, -1.17, -0.84, -0.57, -0.38,
                                        -0.23, -0.11, -0.04, -0.01, -0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1964',
                                    data: [
                                        7.99, 7.00, 5.92, 6.11, 5.72,
                                        4.73, 3.94, 2.96, 2.27, 1.97,
                                        1.87, 1.08, 0.99, 0.69, 0.49,
                                        0.20, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1985',
                                    data: [
                                        5.46, 5.35, 4.76, 6.00, 6.20,
                                        5.74, 4.35, 3.61, 2.45, 2.02,
                                        1.71, 1.30, 1.01, 0.73, 0.52,
                                        0.32, 0.17, 0.09, 0.02, 0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad64_93 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1964',
                                    data: [
                                        -8.19, -6.90, -5.13, -4.44, -4.24,
                                        -3.75, -3.45, -2.47, -1.97, -1.70,
                                        -1.18, -0.99, -0.89, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1993',
                                    data: [
                                        -5.09, -4.97, -4.93, -4.24, -4.75,
                                        -4.90, -4.57, -3.54, -2.80, -2.03,
                                        -1.67, -1.21, -1.03, -0.66, -0.46,
                                        -0.26, -0.15, -0.06, -0.02, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1964',
                                    data: [
                                        7.99, 7.00, 5.92, 6.11, 5.72,
                                        4.73, 3.94, 2.96, 2.27, 1.97,
                                        1.87, 1.08, 0.99, 0.69, 0.49,
                                        0.20, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1993',
                                    data: [
                                        4.95, 4.84, 4.96, 5.07, 5.68,
                                        5.65, 5.18, 4.11, 3.09, 2.27,
                                        1.90, 1.42, 1.26, 0.84, 0.62,
                                        0.39, 0.24, 0.11, 0.04, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad64_05 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1964',
                                    data: [
                                        -8.19, -6.90, -5.13, -4.44, -4.24,
                                        -3.75, -3.45, -2.47, -1.97, -1.70,
                                        -1.18, -0.99, -0.89, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 2005',
                                    data: [
                                        -4.26, -4.69, -4.54, -4.23, -4.58,
                                        -4.34, -3.80, -3.64, -3.44, -2.85,
                                        -2.21, -1.71, -1.25, -0.87, -0.62,
                                        -0.44, -0.22, -0.11, -0.03, -0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1964',
                                    data: [
                                        7.99, 7.00, 5.92, 6.11, 5.72,
                                        4.73, 3.94, 2.96, 2.27, 1.97,
                                        1.87, 1.08, 0.99, 0.69, 0.49,
                                        0.20, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 2005',
                                    data: [
                                        4.08, 4.53, 4.43, 4.39, 4.98,
                                        4.72, 4.15, 4.09, 3.96, 3.37,
                                        2.65, 2.05, 1.51, 1.15, 0.86,
                                        0.64, 0.36, 0.17, 0.06, 0.02, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad64_18 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1964',
                                    data: [
                                        -8.19, -6.90, -5.13, -4.44, -4.24,
                                        -3.75, -3.45, -2.47, -1.97, -1.70,
                                        -1.18, -0.99, -0.89, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 2018',
                                    data: [
                                        -2.94, -3.18, -3.36, -3.90, -4.83,
                                        -4.71, -4.19, -3.87, -3.11, -2.89,
                                        -2.84, -2.47, -1.89, -1.36, -0.93,
                                        -0.64, -0.39, -0.21, -0.06, -0.02, -0.01],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1964',
                                    data: [
                                        7.99, 7.00, 5.92, 6.11, 5.72,
                                        4.73, 3.94, 2.96, 2.27, 1.97,
                                        1.87, 1.08, 0.99, 0.69, 0.49,
                                        0.20, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 2018',
                                    data: [
                                        2.80, 3.06, 3.24, 3.84, 4.87,
                                        4.76, 4.28, 4.13, 3.56, 3.42,
                                        3.46, 3.11, 2.44, 1.80, 1.28,
                                        0.92, 0.64, 0.37, 0.16, 0.04, 0.02],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad73_85 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1973',
                                    data: [
                                        -5.93, -6.42, -6.32, -5.53, -4.94,
                                        -3.95, -3.06, -2.47, -2.17, -1.68,
                                        -1.28, -1.19, -0.79, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1985',
                                    data: [
                                        -5.71, -5.51, -4.68, -4.82, -5.57,
                                        -4.82, -3.87, -3.27, -2.43, -1.88,
                                        -1.59, -1.17, -0.84, -0.57, -0.38,
                                        -0.23, -0.11, -0.04, -0.01, -0.01, 0.00],
                                    pointWidth: 4,

                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1973',
                                    data: [
                                        5.93, 6.62, 6.92, 7.11, 6.13,
                                        4.74, 3.26, 2.96, 2.47, 1.88,
                                        1.38, 0.99, 0.89, 0.79, 0.59,
                                        0.30, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1985',
                                    data: [
                                        5.46, 5.35, 4.76, 6.00, 6.20,
                                        5.74, 4.35, 3.61, 2.45, 2.02,
                                        1.71, 1.30, 1.01, 0.73, 0.52,
                                        0.32, 0.17, 0.09, 0.02, 0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad73_93 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1973',
                                    data: [
                                        -5.93, -6.42, -6.32, -5.53, -4.94,
                                        -3.95, -3.06, -2.47, -2.17, -1.68,
                                        -1.28, -1.19, -0.79, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1993',
                                    data: [
                                        -5.09, -4.97, -4.93, -4.24, -4.75,
                                        -4.90, -4.57, -3.54, -2.80, -2.03,
                                        -1.67, -1.21, -1.03, -0.66, -0.46,
                                        -0.26, -0.15, -0.06, -0.02, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1973',
                                    data: [
                                        5.93, 6.62, 6.92, 7.11, 6.13,
                                        4.74, 3.26, 2.96, 2.47, 1.88,
                                        1.38, 0.99, 0.89, 0.79, 0.59,
                                        0.30, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1993',
                                    data: [
                                        4.95, 4.84, 4.96, 5.07, 5.68,
                                        5.65, 5.18, 4.11, 3.09, 2.27,
                                        1.90, 1.42, 1.26, 0.84, 0.62,
                                        0.39, 0.24, 0.11, 0.04, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad73_05 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1973',
                                    data: [
                                        -5.93, -6.42, -6.32, -5.53, -4.94,
                                        -3.95, -3.06, -2.47, -2.17, -1.68,
                                        -1.28, -1.19, -0.79, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 2005',
                                    data: [
                                        -4.26, -4.69, -4.54, -4.23, -4.58,
                                        -4.34, -3.80, -3.64, -3.44, -2.85,
                                        -2.21, -1.71, -1.25, -0.87, -0.62,
                                        -0.44, -0.22, -0.11, -0.03, -0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1973',
                                    data: [
                                        5.93, 6.62, 6.92, 7.11, 6.13,
                                        4.74, 3.26, 2.96, 2.47, 1.88,
                                        1.38, 0.99, 0.89, 0.79, 0.59,
                                        0.30, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 2005',
                                    data: [
                                        4.08, 4.53, 4.43, 4.39, 4.98,
                                        4.72, 4.15, 4.09, 3.96, 3.37,
                                        2.65, 2.05, 1.51, 1.15, 0.86,
                                        0.64, 0.36, 0.17, 0.06, 0.02, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad73_18 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1973',
                                    data: [
                                        -5.93, -6.42, -6.32, -5.53, -4.94,
                                        -3.95, -3.06, -2.47, -2.17, -1.68,
                                        -1.28, -1.19, -0.79, -0.49, -0.30,
                                        -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 2018',
                                    data: [
                                        -2.94, -3.18, -3.36, -3.90, -4.83,
                                        -4.71, -4.19, -3.87, -3.11, -2.89,
                                        -2.84, -2.47, -1.89, -1.36, -0.93,
                                        -0.64, -0.39, -0.21, -0.06, -0.02, -0.01],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1973',
                                    data: [
                                        5.93, 6.62, 6.92, 7.11, 6.13,
                                        4.74, 3.26, 2.96, 2.47, 1.88,
                                        1.38, 0.99, 0.89, 0.79, 0.59,
                                        0.30, 0.20, 0.20, 0.11, 0.11, 0.00],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 2018',
                                    data: [
                                        2.80, 3.06, 3.24, 3.84, 4.87,
                                        4.76, 4.28, 4.13, 3.56, 3.42,
                                        3.46, 3.11, 2.44, 1.80, 1.28,
                                        0.92, 0.64, 0.37, 0.16, 0.04, 0.02],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad85_93 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1985',
                                    data: [
                                        -5.71, -5.51, -4.68, -4.82, -5.57,
                                        -4.82, -3.87, -3.27, -2.43, -1.88,
                                        -1.59, -1.17, -0.84, -0.57, -0.38,
                                        -0.23, -0.11, -0.04, -0.01, -0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 1993',
                                    data: [
                                        -5.09, -4.97, -4.93, -4.24, -4.75,
                                        -4.90, -4.57, -3.54, -2.80, -2.03,
                                        -1.67, -1.21, -1.03, -0.66, -0.46,
                                        -0.26, -0.15, -0.06, -0.02, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1985',
                                    data: [
                                        5.46, 5.35, 4.76, 6.00, 6.20,
                                        5.74, 4.35, 3.61, 2.45, 2.02,
                                        1.71, 1.30, 1.01, 0.73, 0.52,
                                        0.32, 0.17, 0.09, 0.02, 0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 1993',
                                    data: [
                                        4.95, 4.84, 4.96, 5.07, 5.68,
                                        5.65, 5.18, 4.11, 3.09, 2.27,
                                        1.90, 1.42, 1.26, 0.84, 0.62,
                                        0.39, 0.24, 0.11, 0.04, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad85_05 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1985',
                                    data: [
                                        -5.71, -5.51, -4.68, -4.82, -5.57,
                                        -4.82, -3.87, -3.27, -2.43, -1.88,
                                        -1.59, -1.17, -0.84, -0.57, -0.38,
                                        -0.23, -0.11, -0.04, -0.01, -0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 2005',
                                    data: [
                                        -4.26, -4.69, -4.54, -4.23, -4.58,
                                        -4.34, -3.80, -3.64, -3.44, -2.85,
                                        -2.21, -1.71, -1.25, -0.87, -0.62,
                                        -0.44, -0.22, -0.11, -0.03, -0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1985',
                                    data: [
                                        5.46, 5.35, 4.76, 6.00, 6.20,
                                        5.74, 4.35, 3.61, 2.45, 2.02,
                                        1.71, 1.30, 1.01, 0.73, 0.52,
                                        0.32, 0.17, 0.09, 0.02, 0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 2005',
                                    data: [
                                        4.08, 4.53, 4.43, 4.39, 4.98,
                                        4.72, 4.15, 4.09, 3.96, 3.37,
                                        2.65, 2.05, 1.51, 1.15, 0.86,
                                        0.64, 0.36, 0.17, 0.06, 0.02, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad85_18 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1985',
                                    data: [
                                        -5.71, -5.51, -4.68, -4.82, -5.57,
                                        -4.82, -3.87, -3.27, -2.43, -1.88,
                                        -1.59, -1.17, -0.84, -0.57, -0.38,
                                        -0.23, -0.11, -0.04, -0.01, -0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 2018',
                                    data: [
                                        -2.94, -3.18, -3.36, -3.90, -4.83,
                                        -4.71, -4.19, -3.87, -3.11, -2.89,
                                        -2.84, -2.47, -1.89, -1.36, -0.93,
                                        -0.64, -0.39, -0.21, -0.06, -0.02, -0.01],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1985',
                                    data: [
                                        5.46, 5.35, 4.76, 6.00, 6.20,
                                        5.74, 4.35, 3.61, 2.45, 2.02,
                                        1.71, 1.30, 1.01, 0.73, 0.52,
                                        0.32, 0.17, 0.09, 0.02, 0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 2018',
                                    data: [
                                        2.80, 3.06, 3.24, 3.84, 4.87,
                                        4.76, 4.28, 4.13, 3.56, 3.42,
                                        3.46, 3.11, 2.44, 1.80, 1.28,
                                        0.92, 0.64, 0.37, 0.16, 0.04, 0.02],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad93_05 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1993',
                                    data: [
                                        -5.09, -4.97, -4.93, -4.24, -4.75,
                                        -4.90, -4.57, -3.54, -2.80, -2.03,
                                        -1.67, -1.21, -1.03, -0.66, -0.46,
                                        -0.26, -0.15, -0.06, -0.02, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 2005',
                                    data: [
                                        -4.26, -4.69, -4.54, -4.23, -4.58,
                                        -4.34, -3.80, -3.64, -3.44, -2.85,
                                        -2.21, -1.71, -1.25, -0.87, -0.62,
                                        -0.44, -0.22, -0.11, -0.03, -0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1993',
                                    data: [
                                        4.95, 4.84, 4.96, 5.07, 5.68,
                                        5.65, 5.18, 4.11, 3.09, 2.27,
                                        1.90, 1.42, 1.26, 0.84, 0.62,
                                        0.39, 0.24, 0.11, 0.04, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 2005',
                                    data: [
                                        4.08, 4.53, 4.43, 4.39, 4.98,
                                        4.72, 4.15, 4.09, 3.96, 3.37,
                                        2.65, 2.05, 1.51, 1.15, 0.86,
                                        0.64, 0.36, 0.17, 0.06, 0.02, 0.00],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad93_18 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 1993',
                                    data: [
                                        -5.09, -4.97, -4.93, -4.24, -4.75,
                                        -4.90, -4.57, -3.54, -2.80, -2.03,
                                        -1.67, -1.21, -1.03, -0.66, -0.46,
                                        -0.26, -0.15, -0.06, -0.02, -0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 2018',
                                    data: [
                                        -2.94, -3.18, -3.36, -3.90, -4.83,
                                        -4.71, -4.19, -3.87, -3.11, -2.89,
                                        -2.84, -2.47, -1.89, -1.36, -0.93,
                                        -0.64, -0.39, -0.21, -0.06, -0.02, -0.01],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 1993',
                                    data: [
                                        4.95, 4.84, 4.96, 5.07, 5.68,
                                        5.65, 5.18, 4.11, 3.09, 2.27,
                                        1.90, 1.42, 1.26, 0.84, 0.62,
                                        0.39, 0.24, 0.11, 0.04, 0.01, 0.00
                                    ],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 2018',
                                    data: [
                                        2.80, 3.06, 3.24, 3.84, 4.87,
                                        4.76, 4.28, 4.13, 3.56, 3.42,
                                        3.46, 3.11, 2.44, 1.80, 1.28,
                                        0.92, 0.64, 0.37, 0.16, 0.04, 0.02],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}
                {bcomunidad05_18 && <div className="">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            chart: {
                                type: 'bar',
                                events: {
                                    load: function () {
                                        var chart = this;
                                        var xAxis = chart.xAxis[0];
                                        var categories = xAxis.categories;

                                        // Calcular y agregar líneas para cada categoría
                                        categories.forEach(function (category, index) {
                                            xAxis.addPlotLine({
                                                value: index + 0.5,  // Añadir 0.5 para centrar la línea en la categoría
                                                color: 'gray', // Color de la línea
                                                width: 0.5, // Ancho de la línea
                                            });
                                        });
                                    }
                                },
                            },

                            title: {
                                text: 'Pirámide de la  distribución de población por edad y sexo. ',
                                align: 'center'
                            },
                            accessibility: {
                                point: {
                                    valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                                }
                            },
                            xAxis: [{
                                reversed: false,
                                categories: categories,
                                tickInterval: 1,
                                plotLines: [{
                                    color: 'gray', // Color de la línea
                                    width: 2, // Ancho de la línea
                                }],
                                labels: {
                                    step: 1,
                                },
                                accessibility: {
                                    description: 'Edad (Hombres)'
                                }, title: {
                                    text: 'Grupo por edad'
                                }
                            }, { // mirror axis on right side
                                opposite: true,
                                reversed: false,
                                categories: categories,
                                linkedTo: 0,
                                labels: {
                                    step: 1
                                },
                                accessibility: {
                                    description: 'Edad (Mujeres)'
                                }
                            }],
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    formatter: function () {
                                        return Math.abs(this.value) + '%';
                                    }
                                },
                                accessibility: {
                                    description: 'Porcentaje de población',
                                    rangeDescription: 'Rango: 0 to 5%'
                                },

                            },

                            plotOptions: {
                                column: {
                                    stacking: 'normal',
                                    grouping: false
                                },

                            },

                            tooltip: {
                                formatter: function () {
                                    return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                        'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                                }
                            },

                            series: [
                                {
                                    name: 'Bogotá Hombres 2005',
                                    data: [
                                        -4.26, -4.69, -4.54, -4.23, -4.58,
                                        -4.34, -3.80, -3.64, -3.44, -2.85,
                                        -2.21, -1.71, -1.25, -0.87, -0.62,
                                        -0.44, -0.22, -0.11, -0.03, -0.01, 0.00],
                                    pointWidth: 4,
                                    color: "#6a5441"
                                },
                                {
                                    name: 'Bogotá Hombres 2018',
                                    data: [
                                        -2.94, -3.18, -3.36, -3.90, -4.83,
                                        -4.71, -4.19, -3.87, -3.11, -2.89,
                                        -2.84, -2.47, -1.89, -1.36, -0.93,
                                        -0.64, -0.39, -0.21, -0.06, -0.02, -0.01],
                                    pointWidth: 4,
                                    color: "#faaf35"
                                },
                                {
                                    name: 'Bogotá Mujeres 2005',
                                    data: [
                                        4.08, 4.53, 4.43, 4.39, 4.98,
                                        4.72, 4.15, 4.09, 3.96, 3.37,
                                        2.65, 2.05, 1.51, 1.15, 0.86,
                                        0.64, 0.36, 0.17, 0.06, 0.02, 0.00],
                                    pointWidth: 4,
                                    color: "#e57c32"
                                }, {
                                    name: 'Bogotá Mujeres 2018',
                                    data: [
                                        2.80, 3.06, 3.24, 3.84, 4.87,
                                        4.76, 4.28, 4.13, 3.56, 3.42,
                                        3.46, 3.11, 2.44, 1.80, 1.28,
                                        0.92, 0.64, 0.37, 0.16, 0.04, 0.02],
                                    pointWidth: 4,
                                    color: "#6b0d39"
                                }
                            ]

                        }}
                    />
                </div>}




            </div>

        </center>
    )
}