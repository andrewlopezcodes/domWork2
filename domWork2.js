var selectTheInputField = document.querySelector("input");
var selectTheSubmitButton = document.getElementById("submit");
var selectTheUnorderedList = document.querySelector("ul");
var selectListItems = document.querySelectorAll("li");


let addToUnorderedList = function(){
  let createDeleteButton;
  let createDoneButton;
  let idNumber;
  let createListItem = document.createElement("li");
  
  let addDeleteButton = function(){
    createDeleteButton = document.createElement("button");
    createDeleteButton.setAttribute("class", "delete");
    createDeleteButton.innerText = "Delete";
  };

  let addDoneButton = function(){
    createDoneButton = document.createElement("button");
    createDoneButton.innerText = "Done";
  };

  let randomNumberGenerator = function(){
    let randomNumber = Math.random();
    let madeToString = randomNumber.toString();
    idNumber = madeToString.slice(3, 9);
    console.log("The new list item has an ID# of " + idNumber);
  };
  


  createListItem.appendChild(document.createTextNode(selectTheInputField.value + "    "));
  console.log("The new list item has an input value of: " + selectTheInputField.value);
  selectTheUnorderedList.appendChild(createListItem);
  addDeleteButton();
  addDoneButton();
  randomNumberGenerator();
  createListItem.setAttribute("id", idNumber);
  createListItem.setAttribute("class", "");
  createListItem.insertAdjacentElement('afterbegin', createDeleteButton);
  createListItem.insertAdjacentElement('afterbegin', createDoneButton);
  
  //delete button functionality
  createDeleteButton.addEventListener("click", function(){
    createListItem.parentNode.removeChild(createListItem);
  });

  //done button functionality
  createDoneButton.addEventListener("click", function(){
    createListItem.setAttribute("class","done");
    createDoneButton.innerText = "2click to Un-Done";
  });
  createDoneButton.addEventListener("dblclick", function(){
    createListItem.removeAttribute("class");
    createDoneButton.innerText = "Done";

  });
  selectTheInputField.value = "";
}


selectTheSubmitButton.addEventListener("click", addToUnorderedList);


// written by @andrewlopezcodes