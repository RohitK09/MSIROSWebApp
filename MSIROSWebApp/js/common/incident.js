var x = document.getElementById("longitude");
var y = document.getElementById("latitude");
var date = new Date();
/*var dtstring = dt.getFullYear()
    + '-' + pad2(dt.getMonth()+1)
    + '-' + pad2(dt.getDate())
    + ' ' + pad2(dt.getHours())
    + ':' + pad2(dt.getMinutes())
    + ':' + pad2(dt.getSeconds());*/
//DD-MM-YYYY hh:mi:ss
$("#dateTxt").val( date.getUTCDate() + '-' +
('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
('00' + date.getUTCFullYear()).slice(-2) + ' ' +
('00' + date.getUTCHours()).slice(-2) + ':' +
('00' + date.getUTCMinutes()).slice(-2) + ':' +
('00' + date.getUTCSeconds()).slice(-2) );


function getLocation(event) {
   // event.preventDefault();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        var postFormat = $('#longitude').val();

      //  $.post( "http://localhost:8080/MSIROSRestWebServices/incident/new", { name: "John", time: "2pm" } )

    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
        y.innerHTML = "Geolocation is not supported by this browser.";
    }
    //event.preventDefault();
}

function showPosition(position) {
    $('#longitude').val (position.coords.latitude);
    $('#latitude').val(position.coords.longitude);
    //var d = new Date();


}

function showError(error) {

    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}