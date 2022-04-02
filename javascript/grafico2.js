google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
    ['Dificuldade', 'Pontos'],
    ['Fácil', 90],
    ['Moderador', 50],
    ['Dificil', 40]
    ]);

    var options = {
    title: 'Pontos por Dificuldade',
    backgroundColor: '#F8F9FA'
    };

    var chart2 = new google.visualization.PieChart(document.getElementById('piechart'));

    chart2.draw(data, options);
}