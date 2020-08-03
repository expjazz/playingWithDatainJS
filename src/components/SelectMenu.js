import * as d3 from 'd3'

const populateSelect = async () => {
  const select = document.getElementById('line');
  const data = await d3.csv('./src/dados.csv')
  const listLideres = data.map((arr) => {
    return arr.profile
  });
  const first = listLideres[0];
  let temp = false;
  select.innerHTML = listLideres.map((lider, index) => {
    if (lider === first && index > 2) temp = true;
    if (temp === true) return '';
    return (
      `
      <option value="${lider}">${lider}</option>

      `
    )
  }).join("")

}

export default { populateSelect }