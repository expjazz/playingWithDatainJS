import * as d3 from 'd3'
import Chart from 'chart.js';
import populateSelect from './components/SelectMenu'

const makeChart = (lideres) => {
  populateSelect.populateSelect();
  const listLideres = lideres.map((arr) => {
    return arr.profile
  })
  const month = lideres.map((arr) => {
    return arr.month
  })
  const fbSeguidores = lideres.map(arr => arr.fb_number_likes)
  // console.log(fbSeguidores)
  // console.log(month)
  // console.log(listLideres);
  let tempLider = [];
  let tempMes = [];
  let tempFbSeguidores = [];
  let a = [];
  let b = [];
  let c = [];
  listLideres.forEach((lider, index) => {
    if (lider === "Jair Bolsonaro") {
      tempLider.push(lider);
      tempMes.push(month[index]);
      tempFbSeguidores.push(fbSeguidores[index]);
    } else if (lider === "Donald Trump") {
      a.push(lider);
      b.push(month[index]);
      c.push(fbSeguidores[index]);
    }
  })

  const chart = new Chart('chart', {
    type: 'line',

    data: {
      labels: tempMes,
      datasets: [{
        label: 'Bolsonaro',
        data: tempFbSeguidores,
        borderColor: "#3e95cd"
      }, 
      {label: 'Trumb',
      data: c,
      borderColor: '#555',
    }
    ]
    },
    options: {showLines: true}
  })
}

d3.csv('./src/dados.csv').then(makeChart)


// new Chart(document.getElementById("line-chart"), {
//   type: 'line',
//   data: {
//     labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
//     datasets: [{ 
//         data: [86,114,106,106,107,111,133,221,783,2478],
//         label: "Africa",
//         borderColor: "#3e95cd",
//         fill: false
//       }, { 
//         data: [282,350,411,502,635,809,947,1402,3700,5267],
//         label: "Asia",
//         borderColor: "#8e5ea2",
//         fill: false
//       }, { 
//         data: [168,170,178,190,203,276,408,547,675,734],
//         label: "Europe",
//         borderColor: "#3cba9f",
//         fill: false
//       }, { 
//         data: [40,20,10,16,24,38,74,167,508,784],
//         label: "Latin America",
//         borderColor: "#e8c3b9",
//         fill: false
//       }, { 
//         data: [6,3,2,2,7,26,82,172,312,433],
//         label: "North America",
//         borderColor: "#c45850",
//         fill: false
//       }
//     ]
//   },
//   options: {
//     title: {
//       display: true,
//       text: 'World population per region (in millions)'
//     }
//   }
// });