// what is the path to the JSON file?
const apiURL = "./hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    for (i = 0; i < myList.length; i++) {
      
      let mySectionTag = document.createElement("section");
      mySectionTag.className = "hotelCard";


      // Figure with img and figcaption
      let myImageTag = document.createElement("img");
      myImageTag.src = myList[i].photo;
      
      let myCaptionTag = document.createElement("figcaption");
      myCaptionTag.textContent = myList[i].name;
  
      let myFigureTag = document.createElement("figure");
      myFigureTag.className = "hotelFigure";


      // Div containing hotel address and phone information
      let myInfoTag = document.createElement("div");
      myInfoTag.className = "hotelInfo";

    
      // Span with address information
      let myAddressTag = document.createElement("span");
      myAddressTag.className = "hotelAddress";

      let addressIcon = document.createElement("i");
      addressIcon.innerHTML = `<ion-icon name="car"></ion-icon>`;

      let addressInfo = document.createElement("p");
      addressInfo.innerHTML = myList[i].address;


      // Span with hotel phone information
      let myPhoneTag = document.createElement("span");
      myPhoneTag.className = "hotelPhone";

      let phoneIcon = document.createElement("i");
      phoneIcon.innerHTML = `<ion-icon name="call"></ion-icon>`;

      let phoneInfo = document.createElement("p");
      phoneInfo.innerHTML = myList[i].phone;

      
      

      document.getElementById("myCards").appendChild(mySectionTag);
      
      mySectionTag.appendChild(myFigureTag);
      mySectionTag.appendChild(myInfoTag);

      myFigureTag.appendChild(myImageTag);
      myFigureTag.appendChild(myCaptionTag);

      myInfoTag.appendChild(myAddressTag);
      myInfoTag.appendChild(myPhoneTag);

      myAddressTag.appendChild(addressIcon);
      myAddressTag.appendChild(addressInfo);

      myPhoneTag.appendChild(phoneIcon);
      myPhoneTag.appendChild(phoneInfo);

    }
    
    
}); //end of "then" fat arrow function