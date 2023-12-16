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

function addCard(titleIn, textIn, authorIn, ID) {
  const master = document.createElement("div");
  master.setAttribute("class", "card");
  master.setAttribute("id", ID);

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

  return master;
}

function deleteCard(masterID) {
  if (window.confirm("Do you really want to Delete?")) {
    const masterDIV = document.getElementById(masterID);
    document.body.removeChild(masterDIV);
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${masterID}`, {
      method: "DELETE",
    }).then(() => window.alert("Deleted!!!"));
  }
}

function updateCard(masterID) {
  const masterDIV = document.getElementById(masterID);
  const title = masterDIV.getElementsByTagName("p")[0].innerHTML;
  const body = masterDIV.getElementsByTagName("p")[1].innerHTML;

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
        masterDIV.getElementsByTagName("p")[1].innerHTML = json["body"];
        window.alert("Updated!");
      });
  }
}

for (let i = 1; i < 100; i += 10) {
  getPost(i).then((x) => {
    document.body.appendChild(addCard(x["title"], x["body"], x["name"], i));
  });
}
