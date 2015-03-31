/**
 * Created by Rohit Katyal on 1/21/2015.
 */
$("#noOfBedContainer").hide();
$('#checkHospitalId').click(function( event ) {

    var hospitalId = $('#HospitalId').val();
    alert(hospitalId);
    $.ajax({
        url: "http://localhost:8080/MSIROSRestWebServices/Hospital/"+hospitalId
    }).success(function(data) {
        alert(data);
        $("#noOfBedContainer").show();
        //$('.greeting-content').append(data.content);
    });
    event.preventDefault();
});

