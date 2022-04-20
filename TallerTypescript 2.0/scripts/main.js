import { series } from './dataSerie.js';
var seriesTbody = document.getElementById('series');
renderSeriesInTable(series);
renderAverageSeasonsInTable(series);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td class=\"text-primary\">").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function renderAverageSeasonsInTable(series) {
    console.log('Sacando el promedio de las temporadas');
    var avrg = 0;
    series.forEach(function (serie) {
        avrg += serie.seasons;
    });
    avrg = avrg / series.length;
    var avrgElement = document.createElement("tr");
    avrgElement.innerHTML = "<td>Average Seasons: ".concat(avrg, "</td>");
    seriesTbody.appendChild(avrgElement);
}
