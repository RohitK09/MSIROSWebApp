
$.ajax({
    url: "http://localhost:8080/MSIROSRestWebServices/Victim/getAllTypesOfVictims"
}).success(function(data) {
var w = 400;
var h = 400;
var r = h/2;
var color = d3.scale.category20c();
        var data = jQuery.parseJSON(data);
alert(data);
/*var data = [{"label":"Category A", "value":20},
    {"label":"Category B", "value":50},
    {"label":"Category C", "value":30}];
*/

        var aspect = 960 / 500, chart = $(".chart2");
        $(window).on("resize", function() {
            var targetWidth = chart.parent().width();
            chart.attr("width", targetWidth);
            chart.attr("height", targetWidth / aspect);
        });
var vis = d3.select('.chart').append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")").attr("viewBox","0 0 960 500").attr("preserveAspectRatio","xMidYMid");
var pie = d3.layout.pie().value(function(d){return d.count;});

// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);

// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
arcs.append("svg:path")
    .attr("fill", function(d, i){
        return color(i);
    })
    .attr("d", function (d) {
        // log the result of the arc generator to show how cool it is :)
        console.log(arc(d));
        return arc(d);
    });

// add the text
arcs.append("svg:text").attr("transform", function(d){
    d.innerRadius = 0;
    d.outerRadius = r;
    return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text( function(d, i) {
        return data[i].statusDesc+ " " +data[i].count}
);}

);