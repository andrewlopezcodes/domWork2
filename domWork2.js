var selectTheInputField = document.querySelector("input");
var selectTheButton = document.querySelector("button");
var selectTheUnorderedList = document.querySelector("ul");
var idNumber;
let collectionOfListItems;
var listDepth;
var childNumber;
var listDepthIndex;

let randomNumberGenerator = function(){
  let randomNumber = Math.random();
  let madeToString = randomNumber.toString();
  idNumber = madeToString.slice(3, 9);
  console.log("The new list item has an ID# of " + idNumber);
};

let addIdNumber = function(){
  if(childNumber === listDepth - 1){

  };
};

let addToUnorderedList = function(){
  randomNumberGenerator();
  let createListItem = document.createElement("li");
  createListItem.appendChild(document.createTextNode(selectTheInputField.value));
  console.log("The new list item has an input value of: " + selectTheInputField.value);
  selectTheUnorderedList.appendChild(createListItem);
  selectTheInputField.value = "";
  collectionOfListItems = document.querySelectorAll("li");
  listDepth = collectionOfListItems.length;
  console.log("There is a list length of " + listDepth);
  listDepthIndex = listDepth - 1;
  console.log("The new list item has an index of " + listDepthIndex);
};

selectTheButton.addEventListener("click", addToUnorderedList);


