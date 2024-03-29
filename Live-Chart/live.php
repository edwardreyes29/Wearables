<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
    <title>Wearables - Live D3 Visualizations</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/skeleton.css">
    <link rel="stylesheet" href="css/charts.css">

    <script src="scripts/jquery.js"></script>
    <script src="https://d3js.org/d3.v4.min.js"></script>
    <script src="scripts/wearables-api.js"></script>
    <script src="scripts/multi-user-chart.js"></script>
    <script src="scripts/multi-signal-chart.js"></script>
    <script src="scripts/liveGraph1.js"></script>
</head>

<body>
    <div id="nav">
        <button id="home" class="button-primary"><a href="/index.php">Home</a></button>
    </div>

    <div class="container">
        <div id="live-buttons">
            <button id="start"class="button">Start</button>
            <button id="stop"class="button" style="display:none">Stop</button>
        </div>
    </div>
  
    <div id="chart-container">
    
    </div>
</body>

</html>