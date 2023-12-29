const url = "https://jsonplaceholder.typicode.com";

async function whoIsAuthor(userID) {
  const result = await fetch(`${url}/users/${userID}`).then((response) => {
    return response.json();
  });
  return result["name"];
}

async function getOnePost(ID) {
  const result = await fetch(`${url}/posts/${ID}`).then((response) => {
    return response.json();
  });
  const author = await whoIsAuthor(result["userId"]);
  result["name"] = author;

  return result;
}

function addPostDiv(myTitle, myBody, myAuthor, ID) {
  const DIV = document.createElement("div");

  DIV.setAttribute("class", "card");
  DIV.setAttribute("id", ID);

  const title = document.createElement("p");
  title.textContent = myTitle;

  const body = document.createElement("p");
  body.textContent = myBody;

  const author = document.createElement("p");
  author.textContent = myAuthor;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("class", "delete");
  deleteButton.addEventListener("click", () => {
    deletePostDiv(ID);
  });

  const updateButton = document.createElement("button");
  updateButton.textContent = "Update";
  updateButton.setAttribute("class", "update");
  updateButton.addEventListener("click", () => {
    updatePostDiv(ID);
  });

  DIV.appendChild(title);
  DIV.appendChild(body);
  DIV.appendChild(author);
  DIV.appendChild(deleteButton);
  DIV.appendChild(updateButton);

  return DIV;
}

function deletePostDiv(divID) {
  if (window.confirm("Are you sure to delete this post?")) {
    const desiredDiv = document.getElementById(divID);
    fetch(`${url}/posts/${divID}`, {
      method: "DELETE",
    }).then((response) => {
      document.body.removeChild(desiredDiv);
      window.alert("The selected post deleted!");
    });
  }
}

function updatePostDiv(divID) {
  const desiredDiv = document.getElementById(divID);
  const body = desiredDiv.getElementsByTagName("p")[1].innerHTML;

  const newBody = window.prompt("", body);

  if (newBody != null) {
    fetch(`${url}/posts/${divID}`, {
      method: "PUT",
      body: JSON.stringify({
        id: divID,
        body: newBody,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        desiredDiv.getElementsByTagName("p")[1].innerHTML = json["body"];
        window.alert("The body of selected post updated successfully.");
      });
  }
}

//the step is 10 because the author of first 10 post are same
for (let i = 1; i < 100; i += 10) {
  getOnePost(i).then((res) => {
    document.body.appendChild(
      addPostDiv(res["title"], res["body"], res["name"], i)
    );
  });
}
