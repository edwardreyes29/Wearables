
//   // Call back
// var return_data;
// function callback(response, func) {
//   return_data = response;
//   console.log(func, return_data);
//   //use return_first variable here
// }
// var gsr;
// var return_data;
// var callback = function(response, func) {
//     return_data = response;
//     console.log(func, return_data);
//     //use return_first variable here
//     console.log(return_data.data);
// }
//
//




// (3) wearables-api.js
// function _getDataByLatest(func, player, cb)
// Need to watch tutorial on this!!!!!!!
// Something is up with this function..... I need to understand how to return the data from getPlayers.php.
var responseData;
function _getDataByLatest(func, player) {
    var mainData;
    var url = "/~efr11427/wearable_web/php/getLatestData.php?func=" + func + "&player=" + player;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    // xhr.responseType = "json";
    xhr.onreadystatechange = function() {
        // if(xhr.readyState < 4) {
        //     showLoading();
        // }
        if (xhr.readyState == 4 && xhr.status == 200) {
            // console.log(xhr);
            // console.log(xhr.response);
            // console.log(xhr.response);
            var json = JSON.parse(xhr.response);
            // console.log(json);
            // console.log(json.data);
            // console.log(json.time);
            // callback(json, func);
            // outputData(json);
           responseData = json;
        }
    }
    xhr.send();
}

// function outputData(data) {
//     console.log(data.data);
// }

function showLoading() {
    console.log("loading....");
}


// for (var i = 0; i < 100; i++) {
//     console.log(i);
//     _getDataByLatest("gsr", 1);
// }

    // _getDataByLatest("gsr", 1);
    // _getDataByLatest("hr", 1);
    // _getDataByLatest("skintemp", 1);
    // _getDataByLatest("ac", 1);
    // _getDataByLatest("ba", 1);
function getGSR() {
    _getDataByLatest("gsr", 1);
    return responseData;
}
gsr = getGSR();
console.log(gsr);
console.log(gsr.data);

// _getDataByLatest("gsr", 1);
// _getDataByLatest("hr", 1);
// _getDataByLatest("skintemp", 1);
// _getDataByLatest("ac", 1);
// _getDataByLatest("ba", 1);



