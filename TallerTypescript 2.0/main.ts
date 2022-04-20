
import { serie } from './serie.js';

import { series } from './dataSerie.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;



renderSeriesInTable(series);
renderAverageSeasonsInTable(series);


function renderSeriesInTable(series: serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td class="text-primary">${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function renderAverageSeasonsInTable(series: serie[]): void {
  console.log('Sacando el promedio de las temporadas')
  let avrg = 0;
  series.forEach((serie) => {
    avrg += serie.seasons;
  });
  avrg = avrg/series.length;
  let avrgElement = document.createElement("tr");
  avrgElement.innerHTML = `<td>Average Seasons: ${avrg}</td>`;
  seriesTbody.appendChild(avrgElement);
}
