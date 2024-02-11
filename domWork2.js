var selectTheInputField = document.querySelector("input");
var selectTheSubmitButton = document.getElementById("submit");
var selectTheUnorderedList = document.querySelector("ul");
var selectListItems = document.querySelectorAll("li");






let addToUnorderedList = function(){
  let createButton;
  let createListItem = document.createElement("li");
  
  let addDeleteButton = function(){
    createButton = document.createElement("button");
    createButton.setAttribute("class", "delete");
    createButton.innerText = "Delete";
  };
    
  createListItem.appendChild(document.createTextNode(selectTheInputField.value + "    "));
  console.log("The new list item has an input value of: " + selectTheInputField.value);
  selectTheUnorderedList.appendChild(createListItem);
  addDeleteButton();
  createListItem.insertAdjacentElement('beforeend', createButton);
  //delete button functionality
  createButton.addEventListener("click", function(){
    createListItem.parentNode.removeChild(createListItem);
  });
  
  selectTheInputField.value = "";
}


selectTheSubmitButton.addEventListener("click", addToUnorderedList);











