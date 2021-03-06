import * as d3 from 'd3'
import Chart from 'chart.js';
import populateSelect from './components/SelectMenu';
import lineGraph from './components/genLineLider';
import selectData from './data/selectData'
const makeChart = (lideres) => {


  const { genLiderLine, arrGenSearch, arrGenBase} = lineGraph;
  populateSelect.populateSelect();
  const selects = document.querySelector('.line');
  const {listLideres, month, fbSeguidores} = arrGenBase(lideres, null);
  const chart = genLiderLine(listLideres, listLideres[0], month, fbSeguidores );
  let count = 0;
  const colors = ['red', 'green', 'blue', 'purple', 'yellow', 'orange']

    selects.addEventListener('change', (e) => {
      const random = Math.floor(Math.random() * colors.length);
      const color = colors[random];
      const selectResult = e.target.value;
      const obj = selectData.selectData();
      if (obj.selectTwo.includes(selectResult)) return '';
  
      obj.selectTwo.push(selectResult);
      const { tempLider, tempMes, tempFbSeguidores } = arrGenSearch(listLideres, selectResult ,  month, fbSeguidores );
  
  
      chart.data.datasets.push({
        label: selectResult,
        data: tempFbSeguidores,
        borderColor: color
      }, )
      chart.update();
    })








  
  const { addPresidentSelect } = addSelect;
  const presidenteBtn = document.getElementById('addPresident');
  presidenteBtn.addEventListener('click', addPresidentSelect )
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

