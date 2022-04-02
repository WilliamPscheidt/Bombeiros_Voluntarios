google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Prova', 'Pontos'],
    ['1',  50],
    ['2',  60],
    ['3',  75],
    ['4',  10],
    ['5',  0],
    ['6',  0],
    ['7',  99],
    ['8',  15],
    ['9',  35],
    ['10',  40]
  ]);

  var options = {
    title: 'Gráfico de Acertos',
    hAxis: {title: 'Prova',  titleTextStyle: {color: '#000'}},
    vAxis: {minValue: 0},
    backgroundColor: '#F8F9FA'
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

window.onresize = function(){
  var data = google.visualization.arrayToDataTable([
    ['Prova', 'Pontos'],
    ['1',  50],
    ['2',  60],
    ['3',  75],
    ['4',  10],
    ['5',  0],
    ['6',  0],
    ['7',  99],
    ['8',  15],
    ['9',  35],
    ['10',  40]
  ]);

  var options = {
    title: 'Gráfico de Acertos',
    hAxis: {title: 'Prova',  titleTextStyle: {color: '#000'}},
    vAxis: {minValue: 0},
    backgroundColor: '#F8F9FA'
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
  chart.draw(data, options);

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