import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
var categories = [
    '0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-40', '40-45',
    '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89',
    '90-94', '95-99', '100 +'
];

export default function GraficasDistribucionBogota() {
    return (
        <div className='grafica-middle'style={{backgroundColor:"#F4F1EE"}}>
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Pirámide de distribución por edad y sexo de Bogotá censo 1938 ',
                        align: 'center'
                    },
                    accessibility: {
                        point: {
                            valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                        }
                    },
                    xAxis: [{
                        categories: categories,
                        reversed: false,
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
                            description: 'Edad (Mujeres'
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
                        }
                    },


                    plotOptions: {
                        series: {
                            stacking: 'normal',
                        }
                    },

                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                        }
                    },

                    series: [
                        {
                            name: 'Hombres 1938',
                            data: [
                                -6.70, -6.00, -5.40, -4.90, -4.60,
                                -4.00, -3.30, -2.70, -2.20, -1.60,
                                -1.40, -1.11, -0.60, -0.40, -0.30,
                                -0.20, -0.20, -0.20, 0.00, 0.00, 0.00
                            ],
                            pointWidth: 11,
                            color: "#6a5a41"
                        },
                        {
                            name: 'Mujeres 1938',
                            data: [
                                7.00, 6.60, 6.20, 5.80, 5.20,
                                4.50, 4.11, 3.20, 2.80, 2.30,
                                2.00, 1.20, 0.90, 0.60, 0.40,
                                0.30, 0.30, 0.30, 0.11, 0.00, 0.00
                            ],
                            pointWidth: 11,
                            color: "#faaf35"
                        }
                    ]
                }}
            />
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Pirámide de distribución por edad y sexo de Bogotá censo 1951',
                        align: 'center'
                    },
                    accessibility: {
                        point: {
                            valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                        }
                    },
                    xAxis: [{
                        categories: categories,
                        reversed: false,
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
                            description: 'Edad (Mujeres'
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
                        }
                    },


                    plotOptions: {
                        series: {
                            stacking: 'normal',
                        }
                    },

                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                        }
                    },

                    series: [
                        {
                            name: 'Hombres 1951',
                            data: [
                                -6.82, -6.54, -6.07, -5.23, -5.11,
                                -4.02, -3.08, -2.80, -2.15, -1.40,
                                -1.21, -0.93, -0.47, -0.28, -0.19,
                                -0.09, -0.09, -0.11, 0.00, 0.00, 0.00],
                            pointWidth: 11,
                            color: "#6a5a41"
                        },
                        {
                            name: 'Mujeres 1951',
                            data: [
                                6.54, 6.45, 5.70, 5.61, 5.30,
                                5.05, 4.00, 3.55, 2.71, 1.87,
                                1.78, 0.93, 0.75, 0.47, 0.28,
                                0.19, 0.19, 0.20, 0.11, 0.00, 0.00
                            ],
                            pointWidth: 11,
                            color: "#faaf35"
                        }

                    ]
                }}
            />
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Pirámide de distribución por edad y sexo de Bogotá censo 1964 ',
                        align: 'center'
                    },
                    accessibility: {
                        point: {
                            valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                        }
                    },
                    xAxis: [{
                        categories: categories,
                        reversed: false,
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
                            description: 'Edad (Mujeres'
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
                        }
                    },


                    plotOptions: {
                        series: {
                            stacking: 'normal',
                        }
                    },

                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                        }
                    },

                    series: [
                        {
                            name: 'Hombres 1964',
                            data: [
                                -8.19, -6.90, -5.13, -4.44, -4.24,
                                -3.75, -3.45, -2.47, -1.97, -1.70,
                                -1.18, -0.99, -0.89, -0.49, -0.30,
                                -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                            pointWidth: 11,
                            color: "#6a5a41"
                        },
                        {
                            name: 'Mujeres 1964',
                            data: [
                                7.99, 7.00, 5.92, 6.11, 5.72,
                                4.73, 3.94, 2.96, 2.27, 1.97,
                                1.87, 1.08, 0.99, 0.69, 0.49,
                                0.20, 0.20, 0.20, 0.11, 0.11, 0.00],
                            pointWidth: 11,
                            color: "#faaf35"
                        }
                    ]

                }}
            />
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Pirámide de distribución por edad y sexo de Bogotá censo 1973',
                        align: 'center'
                    },
                    accessibility: {
                        point: {
                            valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                        }
                    },
                    xAxis: [{
                        categories: categories,
                        reversed: false,
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
                            description: 'Edad (Mujeres'
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
                        }
                    },


                    plotOptions: {
                        series: {
                            stacking: 'normal',
                        }
                    },

                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                        }
                    },
                    series: [
                        {
                            name: 'Hombres 1973',
                            data: [
                                -5.93, -6.42, -6.32, -5.53, -4.94,
                                -3.95, -3.06, -2.47, -2.17, -1.68,
                                -1.28, -1.19, -0.79, -0.49, -0.30,
                                -0.11, -0.11, -0.11, 0.00, 0.00, 0.00],
                            pointWidth: 11,
                            color: "#6a5a41"
                        },
                        {
                            name: 'Mujeres 1973',
                            data: [
                                5.93, 6.62, 6.92, 7.11, 6.13,
                                4.74, 3.26, 2.96, 2.47, 1.88,
                                1.38, 0.99, 0.89, 0.79, 0.59,
                                0.30, 0.20, 0.20, 0.11, 0.11, 0.00],
                            pointWidth: 11,
                            color: "#faaf35"
                        }
                    ]
                }}
            />
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Pirámide de distribución por edad y sexo de Bogotá censo 1985 ',
                        align: 'center'
                    },
                    accessibility: {
                        point: {
                            valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                        }
                    },
                    xAxis: [{
                        categories: categories,
                        reversed: false,
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
                            description: 'Edad (Mujeres'
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
                        }
                    },


                    plotOptions: {
                        series: {
                            stacking: 'normal',
                        }
                    },

                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                        }
                    },
                    series: [
                        {
                            name: 'Hombres 1985',
                            data: [
                                -5.71, -5.51, -4.68, -4.82, -5.57,
                                -4.82, -3.87, -3.27, -2.43, -1.88,
                                -1.59, -1.17, -0.84, -0.57, -0.38,
                                -0.23, -0.11, -0.04, -0.01, -0.01, 0.00],
                            pointWidth: 11,
                            color: "#6a5a41"
                        },
                        {
                            name: 'Mujeres 1985',
                            data: [
                                5.46, 5.35, 4.76, 6.00, 6.20,
                                5.74, 4.35, 3.61, 2.45, 2.02,
                                1.71, 1.30, 1.01, 0.73, 0.52,
                                0.32, 0.17, 0.09, 0.02, 0.01, 0.00],
                            pointWidth: 11,
                            color: "#faaf35"
                        }
                    ]
                }}
            />
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Pirámide de distribución por edad y sexo de Bogotá censo 1993 ',
                        align: 'center'
                    },
                    accessibility: {
                        point: {
                            valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                        }
                    },
                    xAxis: [{
                        categories: categories,
                        reversed: false,
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
                            description: 'Edad (Mujeres'
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
                        }
                    },


                    plotOptions: {
                        series: {
                            stacking: 'normal',
                        }
                    },

                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                        }
                    },
                    series: [
                        {
                            name: 'Hombres 1993',
                            data: [
                                -5.09, -4.97, -4.93, -4.24, -4.75,
                                -4.90, -4.57, -3.54, -2.80, -2.03,
                                -1.67, -1.21, -1.03, -0.66, -0.46,
                                -0.26, -0.15, -0.06, -0.02, -0.01, 0.00
                            ],
                            pointWidth: 11,
                            color: "#6a5a41"
                        },
                        {
                            name: 'Mujeres 1993',
                            data: [
                                4.95, 4.84, 4.96, 5.07, 5.68,
                                5.65, 5.18, 4.11, 3.09, 2.27,
                                1.90, 1.42, 1.26, 0.84, 0.62,
                                0.39, 0.24, 0.11, 0.04, 0.01, 0.00
                            ],
                            pointWidth: 11,
                            color: "#faaf35"
                        }
                    ]
                }}
            />
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Pirámide de distribución por edad y sexo de Bogotá censo 2005 ',
                        align: 'center'
                    },
                    accessibility: {
                        point: {
                            valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                        }
                    },
                    xAxis: [{
                        categories: categories,
                        reversed: false,
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
                            description: 'Edad (Mujeres'
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
                        }
                    },


                    plotOptions: {
                        series: {
                            stacking: 'normal',
                        }
                    },

                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                        }
                    },

                    series: [
                        {
                            name: 'Hombres 2005',
                            data: [
                                -4.26, -4.69, -4.54, -4.23, -4.58,
                                -4.34, -3.80, -3.64, -3.44, -2.85,
                                -2.21, -1.71, -1.25, -0.87, -0.62,
                                -0.44, -0.22, -0.11, -0.03, -0.01, 0.00],
                            pointWidth: 11,
                            color: "#6a5a41"
                        },
                        {
                            name: 'Mujeres 2005',
                            data: [
                                4.08, 4.53, 4.43, 4.39, 4.98,
                                4.72, 4.15, 4.09, 3.96, 3.37,
                                2.65, 2.05, 1.51, 1.15, 0.86,
                                0.64, 0.36, 0.17, 0.06, 0.02, 0.00],
                            pointWidth: 11,
                            color: "#faaf35"
                        }
                    ]
                }}
            />
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Pirámide de distribución por edad y sexo de Bogotá censo 2018 ',
                        align: 'center'
                    },
                    accessibility: {
                        point: {
                            valueDescriptionFormat: '{index}. Edad {xDescription}, {value}%.'
                        }
                    },
                    xAxis: [{
                        categories: categories,
                        reversed: false,
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
                            description: 'Edad (Mujeres'
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
                        }
                    },


                    plotOptions: {
                        series: {
                            stacking: 'normal',
                        }
                    },

                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + ', Grupo edad ' + this.point.category + '</b><br/>' +
                                'Población: ' + Highcharts.numberFormat(Math.abs(this.point.y), 2) + '%';
                        }
                    },

                    series: [
                        {
                            name: 'Hombres 2018',
                            data: [
                                -2.94, -3.18, -3.36, -3.90, -4.83,
                                -4.71, -4.19, -3.87, -3.11, -2.89,
                                -2.84, -2.47, -1.89, -1.36, -0.93,
                                -0.64, -0.39, -0.21, -0.06, -0.02, -0.01],
                            pointWidth: 11,
                            color: "#6a5a41"
                        },
                        {
                            name: 'Mujeres 2018',
                            data: [
                                2.80, 3.06, 3.24, 3.84, 4.87,
                                4.76, 4.28, 4.13, 3.56, 3.42,
                                3.46, 3.11, 2.44, 1.80, 1.28,
                                0.92, 0.64, 0.37, 0.16, 0.04, 0.02],
                            pointWidth: 11,
                            color: "#faaf35"
                        }
                    ]
                }}
            />
        </div>
    )
}