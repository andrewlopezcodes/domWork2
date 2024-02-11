var selectTheInputField = document.querySelector("input");
var selectTheSubmitButton = document.getElementById("submit");
var selectTheUnorderedList = document.querySelector("ul");
var selectListItems = document.querySelectorAll("li");


let addToUnorderedList = function(){
  let createButton;
  let idNumber;
  let createListItem = document.createElement("li");
  
  let addDeleteButton = function(){
    createButton = document.createElement("button");
    createButton.setAttribute("class", "delete");
    createButton.innerText = "Delete";
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
  randomNumberGenerator();
  createListItem.setAttribute("id", idNumber);
  createListItem.insertAdjacentElement('afterbegin', createButton);
  //delete button functionality
  createButton.addEventListener("click", function(){
    createListItem.parentNode.removeChild(createListItem);
  });

  selectTheInputField.value = "";
}


selectTheSubmitButton.addEventListener("click", addToUnorderedList);
