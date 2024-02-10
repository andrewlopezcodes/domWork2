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

let findChildNumber = function(){
  if(listDepth > 0){
    childNumber = listDepth -1; 
  } else {
    childNumber = 0;
  };
};

let addIdNumber = function(){
  if(childNumber === listDepth - 1){

  };
};

let addToUnorderedList = function(){
  randomNumberGenerator();
  let createListItem = document.createElement("li");
  createListItem.appendChild(document.createTextNode(selectTheInputField.value));
  console.log("The new list item value of input is: "+ selectTheInputField.value);
  selectTheUnorderedList.appendChild(createListItem);
  selectTheInputField.value = "";
  findChildNumber();
  collectionOfListItems = document.querySelectorAll("li");
  listDepth = collectionOfListItems.length;
  console.log("The new list item " + listDepth + " list item.");
  findChildNumber();
  listDepthIndex = listDepth - 1;
  console.log("The new list item has an index of " + listDepthIndex);
};

selectTheButton.addEventListener("click", addToUnorderedList);


