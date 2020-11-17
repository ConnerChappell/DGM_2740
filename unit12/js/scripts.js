// what is the path to the JSON file?
const apiURL = ""

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);
    
    
    
    
    
    
    
    
    
}); //end of "then" fat arrow function