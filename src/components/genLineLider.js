const genLiderLine = (list, lider, month, fbSeguidores ) => {

  const { tempLider, tempMes, tempFbSeguidores } = arrGenSearch(list, lider,  month, fbSeguidores );

  const chart = new Chart('chart', {
    type: 'line',
  
    data: {
      labels: tempMes,
      datasets: [{
        label: list[0],
        data: tempFbSeguidores,
        borderColor: "#3e95cd"
      }, 
  
    ]
    },
    options: {showLines: true}
  })
  return chart;
}

const arrGenBase = (lideres, socialMedia) => {
  const listLideres = lideres.map((arr) => {
    return arr.profile
  })
  const month = lideres.map((arr) => {
    return arr.month
  })
  const fbSeguidores = lideres.map(arr => arr.fb_number_likes);
  return {
    listLideres: listLideres,
    month: month,
    fbSeguidores: fbSeguidores
  }
}

const arrGenSearch = (list, queryLider, month, fbSeguidores ) => {
  console.log(list)
  const obj = {
    tempLider: [],
    tempMes: [],
    tempFbSeguidores: []
  };
  list.forEach((lider, index) => {
    if (lider === queryLider) {
      obj.tempLider.push(lider);
      obj.tempMes.push(month[index]);
      obj.tempFbSeguidores.push(fbSeguidores[index]);
    } 
  })
  return obj
}

export default { genLiderLine, arrGenSearch, arrGenBase }
