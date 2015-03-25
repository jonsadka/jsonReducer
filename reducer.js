// set the global variable
var reducedData;

// setup the jQuery function to fetch the local json file
function modifyData(){
  $.getJSON('data.json', function(json){
    var result;

    // modify data.json file and modify result;
    result = json

    // set the result to reduced data before leaving the callback
    // write yourself a message indicating that the script is finished
    console.log('All done making your data smaller and prettier!');
    reducedData = result;
    document.getElementById('convertedJSON').value = JSON.stringify(reducedData, null, 2)
    document.getElementById('operation-result').innerHTML = 'All done!'
  });
};
