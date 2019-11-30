 //---------------------------------------------
 var responseData;
 function _getDataByLatest(func, player) {
     var mainData;
     var url = "/~efr11427/wearable_web/php/getLatestData.php?func=" + func + "&player=" + player;

     var xhr = new XMLHttpRequest();
     xhr.open("GET", url, false);
 
     xhr.onreadystatechange = function() {
         
         if (xhr.readyState == 4 && xhr.status == 200) {
          
             var json = JSON.parse(xhr.response);
          
         responseData = json;
         }
     }
     xhr.send();
 }


 function showLoading() {
     console.log("loading....");
 }

 // _getDataByLatest("gsr", 1);
 // _getDataByLatest("hr", 1);
 // _getDataByLatest("skintemp", 1);
 // _getDataByLatest("ac", 1);
 // _getDataByLatest("ba", 1);

 function getGSR() {
     _getDataByLatest("gsr", 1);
     return responseData;
 }
 
 function getHR() {
     _getDataByLatest("hr", 1);
     return responseData;
 }

 function getSkin() {
     _getDataByLatest("skintemp", 1);
     return responseData;
 }

 function getAC() {
     _getDataByLatest("ac", 1);
     return responseData;
 }
 
 //---------------------------------------------


 // DUPLICATE ------------------------------------------------------

$(function () {
    var live, display, start, end;

    // listen for start/stop button to get start and end times
    $("#live-buttons").find("#start").on('click', function () {
        // start = new Date(); // keep for later
        live = true;
        $('#stop').show();
        // // convert it to unix time stamp in milliseconds
        // var filteredTime = convertTime(start, end);
        // start = filteredTime.start;

        // // Build live charts
        // buildLiveMultiUserChart();
        // // buildLiveMultiSignalChart();
        var lineArr = [];
        var MAX_LENGTH = 100;
        var duration = 500;
        var chart = buildLiveMultiUserChart();
       
        function randomNumberBounds(min, max) {
        return Math.floor(Math.random() * max) + min;
        }
        // x: randomNumberBounds(0, 5),
        function seedData() {
        var now = new Date();
            for (var i = 0; i < MAX_LENGTH; ++i) {
                // console.log(hr.data);
                lineArr.push({
                time: new Date(now.getTime() - ((MAX_LENGTH - i) * duration)),
                gsr: 1, // kOHM ->Megaohms
                hr: 1,
                skin: 1,
                ac: 1,
                });
            }
        }
        //x: randomNumberBounds(0, 5)
        function updateData() {
       
        var gsr = getGSR(); 
        var hr = getHR(); // Works Baby!! 
        var skin = getSkin();
        var ac = getAC();
       
        var acTotal = Math.sqrt((ac.dataY*ac.dataY)+(ac.dataX*ac.dataX)+(ac.dataZ*ac.dataZ));
        
        // console.log(hr.data);
        var now = new Date();
        // hr: randomNumberBounds(0, 2.5),
        //     skin: randomNumberBounds(0, 10),
        //     ac: randomNumberBounds(0, 7)
        var lineData = {
            time: now,
            gsr: gsr.data / 1000, // kOHM ->Megaohms
            hr: hr.data,
            skin: skin.data,
            ac: acTotal.toFixed(3),
        };
        lineArr.push(lineData);
       
        if (lineArr.length > 30) {
            lineArr.shift();
        }
        d3.select("#chart-container").datum(lineArr).call(chart);
        }
       
        function resize() {
        if (d3.select("#chart-container svg").empty()) {
            return;
        }
        chart.width(+d3.select("#chart-container").style("width").replace(/(px)/g, ""));
        d3.select("#chart-container").call(chart);
        }
       
        document.addEventListener("DOMContentLoaded", function() {
        seedData();
        window.setInterval(updateData, 500);
        d3.select("#chart-container").datum(lineArr).call(chart);
        d3.select(window).on('resize', resize);
        });





    }); // end start
    
    $("#live-buttons").find("#stop").on('click', function () {
        end = new Date();
        live = false;

        // // convert it to unix time stamp in milliseconds
        // var filteredTime = convertTime(start, end);
        // end = filteredTime.end;
        // display = "breathAmp";
        
        // // regenerate charts with non-live values
        // getAllDataByTime(display, start, end, buildMultiUserChart);
        // // getAllDataByTime(display, start, end, buildMultiSignalChart);

        // console.log("start: " + start + " end:" + end);
    });
});