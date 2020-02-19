// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


 data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);

    });
  });
 var filterButton = d3.select("#filter-btn");
filterButton.on("click", function() {
    var dateTime = d3.select("#datetime");
    var dateTimeValue = dateTime.property("value");

    if (dateTimeValue){
        filterData = data.filter(reports => reports.datetime === dateTimeValue);
    }
    console.log(filterData);

    
  d3.select("tbody").selectAll("tr").remove();
  filterData.foreach(function(ufoReport) {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
   console.log(key,value);
   var cell = row.append("td");
   cell.text(value);
    });
});


});


