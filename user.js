const listContainer = document.querySelector(".displayedProducts");
const generatedIdContainer = document.querySelector(".displayedID");

/////////////////get stored data//////////////////
const productLists = [
  ...new Set(JSON.parse(localStorage.getItem("productsArr"))),
];
const generatedIdArray = [
  ...new Set(JSON.parse(localStorage.getItem("generatedIdArray"))),
];
//////////////////////////////////////////////////////
if (productLists.length > 0) {
  productLists.forEach((e) => {
    const li = document.createElement("li");
    li.classList.add("listProducts");
    li.innerHTML = `<span>${e}</span><button data-item-name="${e}">Request</button>`;
    listContainer.append(li);
  });
} else {
  const li = document.createElement("li");
  li.innerText = "No Products Found";
  listContainer.append(li);
}

////////////////////////////event listener//////////////
const usersRequestArray = [];
listContainer.addEventListener("click", (e) => {
  if (e.target.dataset.itemName) {
    usersRequestArray.push(e.target.dataset.itemName);
    localStorage.setItem(
      "usersRequestArray",
      JSON.stringify(usersRequestArray)
    );
    e.target.innerText = "requested";
  }
});

//////////////////////////displaying Received ID///////////////////
if (generatedIdArray.length > 0) {
  generatedIdArray.forEach((e) => {
    const li = document.createElement("li");
    li.classList.add("listProducts");
    li.innerHTML = `<span>${e.name}</span><span>ID- ${e.ID}</span>`;
    generatedIdContainer.append(li);
  });
} else {
  const li = document.createElement("li");

  li.innerText = "No ID found";
  generatedIdContainer.append(li);
}
