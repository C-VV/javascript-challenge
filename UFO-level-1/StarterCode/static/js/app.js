// from data.js
var tableData = data;

// YOUR CODE HERE!
//Get a reference to the table body
var tbody = d3.select("tbody");

//Loop Through `data` and console.log each Ufo Report object
data.forEach((ufoReport) => {
  console.log(ufoReport);
  var row = tbody.append("tr");

//Use `Object.entries` to console.log each Ufo Report value
  Object.entries(ufoReport).forEach(([key, value])=> {
    console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Create a Search button function
var searchButton = d3.select("#filter-btn");
// Create a function to search to filter through the Data.JS and match up with the date provided
searchButton.on("click", function() {
  
//D3 to select the Date/time of the sighting 
    var dateTime = d3.select("#datetime");
    var dateTimeValue = dateTime.property("value");
    var filterData = tableData;
    console.log(dateTimeValue)
      if (dateTimeValue){
        filterData= filterData.filter(reports => reports.datetime === dateTimeValue);
      }
    console.log(filterData);

// Use D3.select to remove past info 
d3.select("tbody").selectAll("tr").remove();

// Function to loop through the new filtered data, based on criteria search and display on webpage.
filterData.forEach((ufoReport) =>{
console.log(ufoReport)
var row = tbody.append('tr')

//Use `Object.entries` to console.log each Ufo Report value
Object.entries(ufoReport).forEach(([key, value])=> {
  console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});

});
