const items = document.getElementById("items");
const requestContainer = document.querySelector(".receivedReq");

const productsArr = [];
const requestsArray = [
  ...new Set(JSON.parse(localStorage.getItem("usersRequestArray"))),
];
if (requestsArray.length > 0) {
  requestsArray.forEach((elem) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${elem}</span><button name="${elem}">Generate_ID</button>`;
    requestContainer.append(li);
  });
} else {
  const li = document.createElement("li");
  li.innerHTML = `No Request received yet`;
  requestContainer.append(li);
}
////////////////////////listeners//////////////
items.addEventListener("click", (e) => {
  if (e.target.classList.contains("choose")) {
    productsArr.push(e.target.name);
    e.target.textContent = "selected";

    localStorage.setItem("productsArr", JSON.stringify(productsArr));
  }
});

/////////////////listeners for generating ID//////////
const generatedIdArray = [];

requestContainer.addEventListener("click", (e) => {
  if (e.target.getAttribute("name")) {
    const id = new Date().toISOString().slice(-10);
    const obj = {
      name: e.target.getAttribute("name"),
      ID: id,
    };
    generatedIdArray.push(obj);
    e.target.textContent = "Generated";
  }

  localStorage.setItem("generatedIdArray", JSON.stringify(generatedIdArray));
});
