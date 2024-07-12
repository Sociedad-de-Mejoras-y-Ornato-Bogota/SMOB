import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
var categories = [
  '0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-40', '40-45',
  '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89',
  '90-94', '95-99', '100 +'
];

export default function GraficasDistribucion() {
  return (
    <div className='grafica-middle' style={{backgroundColor:"#F4F1EE"}}>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'bar'
          },
          title: {
            text: 'Pirámide de distribución por edad y sexo de Colombia censo 1938 ',
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
                -9.00, -6.97, -5.92, -5.11, -4.36,
                -3.75, -3.27, -2.86, -2.35, -1.83,
                -1.35, -0.98, -0.74, -0.53, -0.31,
                -0.15, -0.05, -0.01, 0.00, 0.00, 0.00
              ],
              pointWidth: 11,
              color: "#934729"
            },
            {
              name: 'Mujeres 1938',
              data: [
                8.87, 6.92, 5.89, 5.07, 4.32,
                3.72, 3.26, 2.85, 2.29, 1.84,
                1.55, 1.26, 1.02, 0.76, 0.48,
                0.24, 0.09, 0.02, 0.00, 0.00, 0.00
              ],
              pointWidth: 11,
              color: "#e57c32"
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
            text: 'Pirámide de distribución por edad y sexo de Colombia censo 1951',
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
                -8.98, -7.13, -5.89, -5.19, -4.49,
                -3.72, -3.05, -2.66, -2.15, -1.74,
                -1.33, -1.04, -0.84, -0.60, -0.39,
                -0.26, -0.13, -0.04, -0.01, 0.00, 0.00
              ],
              pointWidth: 11,
              color: "#934729"
            },
            {
              name: 'Mujeres 1951',
              data: [
                8.87, 7.08, 5.88, 5.19, 4.51,
                3.74, 3.06, 2.68, 2.17, 1.76,
                1.49, 1.20, 0.97, 0.71, 0.47,
                0.32, 0.19, 0.06, 0.01, 0.00, 0.00
              ],
              pointWidth: 11,
              color: "#e57c32"
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
            text: 'Pirámide de distribución por edad y sexo de Colombia censo 1964 ',
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
                -9.59, -7.92, -6.41, -5.04, -4.02,
                -3.26, -2.82, -2.37, -1.94, -1.62,
                -1.40, -1.06, -0.80, -0.54, -0.36,
                -0.21, -0.11, -0.04, -0.01, 0.00, 0.00
              ],
              pointWidth: 11,
              color: "#934729"
            },
            {
              name: 'Mujeres 1964',
              data: [
                9.35, 7.82, 6.39, 5.06, 4.11,
                3.39, 2.96, 2.50, 2.04, 1.70,
                1.48, 1.11, 0.90, 0.69, 0.47,
                0.29, 0.13, 0.05, 0.02, 0.00, 0.00
              ],
              pointWidth: 11,
              color: "#e57c32"
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
            text: 'Pirámide de distribución por edad y sexo de Colombia censo 1973',
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
                -7.83, -7.79, -6.97, -5.67, -4.44,
                -3.38, -2.72, -2.33, -2.01, -1.67,
                -1.33, -1.09, -0.87, -0.61, -0.39,
                -0.22, -0.11, -0.05, -0.01, 0.00, 0.00
              ],
              pointWidth: 11,
              color: "#934729"
            },
            {
              name: 'Mujeres 1973',
              data: [
                7.62, 7.61, 6.92, 5.72, 4.50,
                3.50, 2.89, 2.49, 2.15, 1.78,
                1.44, 1.19, 0.97, 0.70, 0.50,
                0.31, 0.16, 0.07, 0.02, 0.00, 0.00
              ],
              pointWidth: 11,
              color: "#e57c32"
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
            text: 'Pirámide de distribución por edad y sexo de Colombia censo 1985 ',
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
                -6.89, -6.41, -5.75, -5.67, -5.22,
                -4.18, -3.45, -2.68, -2.06, -1.75,
                -1.49, -1.22, -0.93, -0.69, -0.50,
                -0.29, -0.15, -0.06, -0.02, 0.00, 0.00
              ],
              pointWidth: 11,
              color: "#934729"
            },
            {
              name: 'Mujeres 1985',
              data: [
                6.62, 6.22, 5.69, 5.64, 5.25,
                4.39, 3.64, 2.84, 2.25, 1.91,
                1.65, 1.35, 1.05, 0.79, 0.60,
                0.38, 0.20, 0.09, 0.03, 0.01, 0.00
              ],
              pointWidth: 11,
              color: "#e57c32"
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
            text: 'Pirámide de distribución por edad y sexo de Colombia censo 1993 ',
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
                -6.34, -5.95, -5.62, -5.04, -4.58,
                -4.43, -3.80, -3.06, -2.57, -1.95,
                -1.54, -1.29, -1.05, -0.79, -0.54,
                -0.35, -0.20, -0.08, -0.03, -0.01, 0.00
              ],
              pointWidth: 11,
              color: "#934729"
            },
            {
              name: 'Mujeres 1993',
              data: [
                6.08, 5.72, 5.47, 5.08, 4.74,
                4.57, 4.04, 3.36, 2.78, 2.13,
                1.72, 1.46, 1.20, 0.92, 0.66,
                0.44, 0.27, 0.11, 0.04, 0.01, 0.00
              ],
              pointWidth: 11,
              color: "#e57c32"
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
            text: 'Pirámide de distribución por edad y sexo de Colombia censo 2005 ',
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
                -5.04, -5.19, -5.26, -4.88, -4.51,
                -4.04, -3.49, -3.39, -3.13, -2.50,
                -2.11, -1.63, -1.21, -0.95, -0.72,
                -0.48, -0.27, -0.11, -0.04, -0.01, 0.00
              ],
              pointWidth: 11,
              color: "#934729"
            },
            {
              name: 'Mujeres 2005',
              data: [
                4.82, 4.97, 5.04, 4.72, 4.49,
                4.22, 3.85, 3.72, 3.43, 2.85,
                2.40, 1.83, 1.40, 1.11, 0.88,
                0.62, 0.37, 0.17, 0.07, 0.02, 0.00
              ],
              pointWidth: 11,
              color: "#e57c32"
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
            text: 'Pirámide de distribución por edad y sexo de Colombia censo 2018 ',
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
                -3.84, -3.84, -4.11, -4.43, -4.50,
                -4.33, -3.92, -3.57, -3.11, -2.81,
                -2.72, -2.31, -1.81, -1.43, -0.97,
                -0.64, -0.41, -0.21, -0.08, -0.02, 0.00
              ],
              pointWidth: 11,
              color: "#934729"
            },
            {
              name: 'Mujeres 2018',
              data: [
                3.67, 3.67, 3.94, 4.25, 4.37,
                4.25, 3.94, 3.72, 3.43, 3.18,
                3.03, 2.64, 2.13, 1.68, 1.18,
                0.83, 0.56, 0.31, 0.13, 0.04, 0.00
              ],
              pointWidth: 11,
              color: "#e57c32"
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
            text: 'Pirámide de distribución por edad y sexo de Colombia proyección 2024 ',
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
              name: 'Hombres 2024',
              data: [
                -3.53, -3.82, -3.85, -3.88, -4.07,
                -4.25, -4.02, -3.60, -3.30, -2.85,
                -2.56, -2.43, -2.12, -1.66, -1.20,
                -0.80, -0.47, -0.40
              ],
              pointWidth: 11,
              color: "#934729"
            },
            {
              name: 'Mujeres 2024',
              data: [
                3.37, 3.66, 3.69, 3.73, 3.99,
                4.23, 4.08, 3.74, 3.52, 3.13,
                2.91, 2.83, 2.52, 2.03, 1.50,
                1.04, 0.64, 0.58
              ],
              pointWidth: 11,
              color: "#e57c32"
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
            text: 'Pirámide de distribución por edad y sexo de Colombia proyección 2035 ',
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
              name: 'Hombres 2035',
              data: [
                -2.89, -3.08, -3.27, -3.57, -3.60,
                -3.60, -3.73, -3.91, -3.76, -3.35,
                -3.03, -2.61, -2.23, -2.03, -1.69,
                -1.20, -0.73, -0.51
              ],
              pointWidth: 11,
              color: "#934729"
            },
            {
              name: 'Mujeres 2035',
              data: [
                2.76, 2.93, 3.12, 3.43, 3.47,
                3.50, 3.69, 3.94, 3.85, 3.52,
                3.27, 2.92, 2.60, 2.47, 2.15,
                1.63, 1.06, 0.88
              ],
              pointWidth: 11,
              color: "#e57c32"
            }
          ]
        }}
      />
    </div>
  )
}