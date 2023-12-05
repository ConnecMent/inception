genID = 0;
allDivs = {};

function addCard(titleIn, textIn, authorIn) {
  const master = document.createElement("div");
  master.setAttribute("class", "card");

  const title = document.createElement("p");
  title.textContent = titleIn;

  const text = document.createElement("p");
  text.textContent = textIn;

  const author = document.createElement("p");
  author.textContent = authorIn;

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete");
  deleteButton.setAttribute("onClick", `deleteCard(${genID})`);
  deleteButton.textContent = "Delete";

  const updateButton = document.createElement("button");
  updateButton.setAttribute("class", "update");
  updateButton.textContent = "Update";

  master.appendChild(title);
  master.appendChild(text);
  master.appendChild(author);
  master.appendChild(deleteButton);
  master.appendChild(updateButton);

  allDivs[genID++] = master;

  return master;
}

function deleteCard(masterID) {
  if (window.confirm("Do you really want to Delete?")) {
    document.body.removeChild(allDivs[masterID]);
    delete allDivs[masterID];
  }
}

for (let i = 0; i < 10; i++) {
  document.body.appendChild(addCard("test", "test2", "test3"));
}
