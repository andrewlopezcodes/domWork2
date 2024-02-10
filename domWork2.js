var selectTheInputField = document.querySelector("input");
var selectTheButton = document.querySelector("button");
var selectTheUnorderedList = document.querySelector("ul");




let addToUnorderedList = function(){
  let createListItem = document.createElement("li");
  createListItem.appendChild(document.createTextNode(selectTheInputField.value));
  console.log("This is the value of input: "+ selectTheInputField.value);
  selectTheUnorderedList.appendChild(createListItem);
  selectTheInputField.value = "";
};

selectTheButton.addEventListener("click", addToUnorderedList);

