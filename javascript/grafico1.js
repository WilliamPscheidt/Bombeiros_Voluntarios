google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

var cssClassNames = {
    'headerRow': 'teste',
    'tableRow': '',
    'oddTableRow': 'beige-background',
    'selectedTableRow': 'orange-background large-font',
    'hoverTableRow': '',
    'headerCell': 'gold-border',
    'tableCell': 'teste '};

function drawTable() {
var data = new google.visualization.DataTable();
data.addColumn('string', 'Nome');
data.addColumn('number', 'Pontos');
data.addRows([
    ['William',  {v: 2890, f: '2890 Pontos'}],
    ['José',   {v:2780,   f: '2780 Pontos'}],
    ['João', {v: 2400, f: '2400 Pontos'}],
    ['José',   {v:2780,   f: '2780 Pontos'}],
    ['João', {v: 2400, f: '2400 Pontos'}],
    ['José',   {v:2780,   f: '2780 Pontos'}],
    ['José',   {v:2780,   f: '2780 Pontos'}],
    ['José',   {v:2780,   f: '2780 Pontos'}]
]);

var table = new google.visualization.Table(document.getElementById('table_div'));

table.draw(data, {showRowNumber: true, width: '600px', height: '90%', 'cssClassNames': cssClassNames});
}