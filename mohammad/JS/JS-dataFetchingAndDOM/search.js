function addSearchedDiv(myTitle, myBody, myAuthor) {
  const DIV = document.createElement("div");
  DIV.setAttribute(
    "style",
    `
  border: 1px solid #555;
  padding:2rem; margin:2rem;
  border-radius:5rem;
  `
  );

  const title = document.createElement("p");
  title.textContent = myTitle;

  const body = document.createElement("p");
  title.textContent = myBody;

  const author = document.createElement("p");
  title.textContent = myAuthor;

  DIV.appendChild(title);
  DIV.appendChild(body);
  DIV.appendChild(author);

  return DIV;
}

const url = "https://jsonplaceholder.typicode.com";
async function whoIsAuthor(userID) {
  const result = await fetch(`${url}/users/${userID}`).then((response) => {
    response.json();
  });
  return result["name"];
}

async function searchByAuthor(query) {
  const result = await fetch(`${url}/users?name=${query}`).then((response) => {
    response.json();
  });
  if (response["length"] != 0) {
    const authorID = response[0]["id"];

    const resultPost = await fetch(`${url}/posts?userId=${authorID}`).then(
      (response) => {
        response.json();
      }
    );

    return resultPost;
  }

  return [];
}

async function searchByTitle(query) {
  const result = await fetch(`${url}/posts?title=${query}`).then((response) => {
    response.json();
  });

  return result;
}

async function searchByBody(query) {
  const result = await fetch(`${url}/posts?body=${query}`).then((response) => {
    response.json();
  });

  return result;
}

async function apiSearch(query) {
  const responseDiv = document.getElementById("response");
  responseDiv.innerHTML = "";

  Promise.all([
    searchByAuthor(query),
    searchByTitle(query),
    searchByBody(query),
  ]).then((result) => {
    result.forEach((item) => {
      if (item["length"] != 0) {
        item.forEach(async function (element) {
          const authorName = await whoIsAuthor(element["userId"]);
          responseDiv.appendChild(
            addCard(element["title"], element["body"], authorName)
          );
        });
      }
    });
  });
}

//debounce function is something like a loop that call a function in a specific period
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

//the apiSearcch function have some argument therfore we can't use the following syntax
//because it gives us error:
//debounce(apiSearch(query), 1000)
const debounceSearch = debounce((query) => {
  apiSearch(query);
}, 1000);

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (event) => {
  debounceSearch(event.target.value);
});
