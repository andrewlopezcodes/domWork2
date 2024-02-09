var selectTheInputField = document.querySelector("input");
var selectTheButton = document.querySelector("button");
var selectTheUnorderedList = document.querySelector("ul");
var createListItem = document.createElement("li");
var inputValue = selectTheInputField.value;


let addToUnorderedList = function(){
  console.log("This is the value of input: "+ selectTheInputField.value);
  selectTheUnorderedList.appendChild(createListItem);
  // return selectTheInputField.value;s
};

selectTheButton.addEventListener("click", addToUnorderedList);