// Define the API URL
const apiUrl = "https://jsonplaceholder.typicode.com/";

async function getAuthorPost(userID) {
  const response = await fetch(apiUrl + `users/${userID}`);
  const final = await response.json();

  return final["name"];
}

async function getPost(id) {
  const response = await fetch(apiUrl + `posts/${id}`);
  const final = await response.json();

  const author = await getAuthorPost(final["userId"]);
  final["name"] = author;

  return final;
}

allDivs = {};

function addCard(titleIn, textIn, authorIn, ID) {
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
  deleteButton.setAttribute("onClick", `deleteCard(${ID})`);
  deleteButton.textContent = "Delete";

  const updateButton = document.createElement("button");
  updateButton.setAttribute("class", "update");
  updateButton.setAttribute("onClick", `updateCard(${ID})`);
  updateButton.textContent = "Update";

  master.appendChild(title);
  master.appendChild(text);
  master.appendChild(author);
  master.appendChild(deleteButton);
  master.appendChild(updateButton);

  allDivs[ID] = master;

  return master;
}

function deleteCard(masterID) {
  if (window.confirm("Do you really want to Delete?")) {
    document.body.removeChild(allDivs[masterID]);
    delete allDivs[masterID];
  }
}

function updateCard(masterID) {
  const title = allDivs[masterID].getElementsByTagName("p")[0].innerHTML;
  const body = allDivs[masterID].getElementsByTagName("p")[1].innerHTML;

  const newBody = window.prompt(`Editing: ${title}`, body);

  if (newBody != null) {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        id: masterID,
        title: title,
        body: newBody,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        allDivs[masterID].getElementsByTagName("p")[1].innerHTML = json["body"];
        window.alert("Updated!");
      });
  }
}

for (let i = 1; i < 100; i += 10) {
  getPost(i).then((x) => {
    document.body.appendChild(addCard(x["title"], x["body"], x["name"], i));
  });
}
