import * as d3 from 'd3'

const populateSelect = async (id = null) => {
  if (id) {
    select.document.getElementById('line' + id)
  }
  const selects = document.querySelectorAll('.line');
  let count = 0;
  const data = await d3.csv('./src/dados.csv')
  const listLideres = data.map((arr) => {
    return arr.profile
  });
  const first = listLideres[0];
  let temp = false;
  selects.forEach((selecta) => { 
    count += 1;
    temp  = false;
    if (count > 1) selecta.id  = 'select2';
    selecta.innerHTML = listLideres.map((lider, index) => {
    if (lider === first && index > 2) temp = true;
    if (temp === true) return '';
    return (
      `
      <option value="${lider}">${lider}</option>

      `
    )
  }).join("")})

}

export default { populateSelect }