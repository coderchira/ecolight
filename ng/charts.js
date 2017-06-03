var w = 700;
var h = 500;
padding = 25;
margins = { top: 20, right: 20, bottom: 20, left: 30 };
d3.json("linechart.json", linechart);
function linechart(error, data) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(data);
        var ds = data.data;
        var svg = d3.select("body").append("svg").attr("width", w + padding + margins.right).attr("height", h + padding + margins.bottom);
        xscale = d3.scaleLinear().domain([1, 24]).range([margins.left, (w - margins.right)]);
        yscale = d3.scaleLinear().domain([0, 100]).range([(h - margins.top), margins.bottom]);

        xAxis = d3.axisBottom().scale(xscale).ticks(24);
        yAxis = d3.axisLeft().scale(yscale).tickSize(5);
        d3.select("svg").append("g").attr("transform", "translate(0," + (h - margins.bottom) + ")").attr("id", "xAxisG").call(xAxis);
        d3.select("svg").append("g").attr("transform", "translate(" + (margins.left) + ",0)").attr("id", "yAxisG").call(yAxis);

        //lumline
        var lumline = d3.line().curve(d3.curveLinear).x(function (d) {return xscale(d.timestamp); }).y(function (d) { return yscale(d.luminosity); });
        svg.append("path").attr("d", lumline(ds)).attr("fill", "none").attr("stroke", "red").attr("stroke-width", 2);

        //labels
        svg.selectAll(".datalabel").data(ds).enter().append("text").attr("class", "datalabel").attr("font-size", "10px").attr("font-family", "sans-serif").attr("fill", function (d) { if (d.luminosity <= 40) { return "#b72121"; } else if (d.luminosity >= 75) { return "#28b785" } else { return "none"; }}).attr("text-anchor", "start").attr("dx", 5)
        .attr("dy", ".15em").attr("x", function (d) { return xscale(d.timestamp); }).attr("y", function (d) { return yscale(d.luminosity) -1; }).text(function (d) { return d.luminosity; });

        //humline
        var humline = d3.line().curve(d3.curveLinear).x(function (d) { return xscale(d.timestamp); }).y(function (d) { return yscale(d.humidity) })
        svg.append("path").attr("d", humline(ds)).attr("fill", "none").attr("stroke", "blue").attr("stroke-width", 2);

        //labels
        svg.selectAll(".humdatalabel").data(ds).enter().append("text").attr("class", "humdatalabel").attr("text-anchor", "start").attr("dx", 5).attr("font-family", "sans-serif").attr("font-size", "10px").attr("fill", function (d) { if (d.humidity <= 40) { return "#b72121"; } else if (d.humidity >= 90) { return "#28b785";} else { return "none"; } }).attr("x", function (d) { return xscale(d.timestamp); }).attr("y", function (d) { return yscale(d.humidity); }).text(function (d) { return d.humidity; });
        svg.selectAll(".textlabel").data(ds).enter().append("text").attr("class", "textlabel").text("humidity").attr("font-color", "#b72121").attr("dx", 5).attr("dy", "2.5em").attr("x", (w + 5)).attr("y", function (d) { return (h - d.humidity); }).attr("font-family", "sans-serif").attr("font-size", "10px").attr("transform", "translate(" + (w + 3) + "," + yscale(h - 30) + ")");

        //luminosity
        //d3.select("svg").selectAll("circle.luminosity")
        //.data(data.data)
        //.enter()
        //.append("circle")
        //    .attr("r", 5)
        //.attr("cx", function (d) {
        //    return xscale(d.timestamp);
        //})
        //.attr("cy", function (d) {
        //    return yscale(d.luminosity);
        //})
        //.attr("fill", "red");

        ////humidity
        //d3.select("svg").selectAll("circle.humidity")
        //.data(data.data)
        //.enter()
        //.append("circle")
        //.attr("r", 5)
        //.attr("cx", function (d) {
        //    return xscale(d.timestamp);
        //})
        //.attr("cy", function (d) {
        //    return yscale(d.humidity);
        //})
        //.attr("fill", "blue");
    }


}






//var w = 400;
//var h = 300;
//var dataset = [5, 10, 20, 35, 40];
//var ds;
//var x = d3.scaleLog().domain([15, 500000]).range([0, 300]);
//var y = d3.scaleLinear().domain([0, 500]).range([300, 0]);
//var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
//svg.append("circle").attr("r", 10).attr("cx", x(7700)).attr("cy", y(100)).attr("fill","red");
//d3.select("button.btn.btn-default").text("Hello from button!");
//d3.json("data.json", function (error, data) {
//    if (error) {
//        console.log(error);
//    }
//    else {
//        console.log(data);
//        ds = data.data;
//    }
//    var svg = d3.select("body")
//.append("svg")
//.attr("width", w)
//.attr("height", h);
//    svg.selectAll("rect")
//    .data(ds)
//       .enter()
//    .append("rect")
//      .attr("x", function (d, i) {
//          return (d.month);
//      })
//    .attr("y", function (d) {
//        return (h - (d.intake * 4));
//    })
//    .attr("width", function (d) {
//        return (d.month);
//    })
//    .attr("height", function (d) {
//        return d * 4;
//    })
//    .style("fill", "brown");
//    svg.selectAll("text")
//    .data(ds)
//    .enter()
//    .append("text")
//    .text(function (d) { return d; })
//    .attr("text-anchor", "middle")
//    .attr("x", function (d, i) { return d.month; })
//    .attr("y", function (d) { return h - (d.intake * 4) + 20 })
//    .attr("font-size", 15)
//    .attr("font-family", "sans-serif")
//    .attr("fill", "white");
//});
