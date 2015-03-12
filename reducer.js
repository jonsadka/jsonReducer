// set the global variable
var reducedData;

// setup the jQuery function to fetch the local json file
var modifyData = function(){
  $.getJSON('data.json', function(json){
    var result;

    // modify data.json file and modify result;

    // set the result to reduced data before leaving the callback
    // write yourself a message indicating that the script is finished
    console.log('All done making your data smaller and prettier!');
    reducedData = result;
  });
};

var logData = function() {
  if (!reducedData){
    console.log('You need to Modify the data first');
    return;
  }
  console.log(JSON.stringify(reducedData, null, 2));
}
