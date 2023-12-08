function addCard(titleIn, textIn, authorIn) {
  const master = document.createElement("div");
  master.setAttribute(
    "style",
    `
    border: 1px solid #555;
    padding:2rem; margin:2rem;
    border-radius:5rem;
    `
  );

  const title = document.createElement("p");
  title.textContent = titleIn;

  const text = document.createElement("p");
  text.textContent = textIn;

  const author = document.createElement("p");
  author.textContent = authorIn;

  master.appendChild(title);
  master.appendChild(text);
  master.appendChild(author);

  return master;
}

const apiUrl = "https://jsonplaceholder.typicode.com/";

async function getAuthorPostByID(userID) {
  const response = await fetch(apiUrl + `users/${userID}`);
  const final = await response.json();

  return final["name"];
}

async function searchAuthor(query) {
  const response = await fetch(apiUrl + `users?name=${query}`);
  const final = await response.json();

  if (final["length"] != 0) {
    const authorID = final[0]["id"];

    const responsePost = await fetch(apiUrl + `posts?userId=${authorID}`);
    const finalPost = await responsePost.json();

    return finalPost;
  }

  return [];
}

async function searchTitle(query) {
  const response = await fetch(apiUrl + `posts?title=${query}`);
  const final = await response.json();

  return final;
}

async function searchBody(query) {
  const response = await fetch(apiUrl + `posts?body=${query}`);
  const final = await response.json();

  return final;
}

async function apiSearch(query) {
  const responseDiv = document.getElementById("response");
  responseDiv.innerHTML = "";

  Promise.all([
    searchAuthor(query),
    searchTitle(query),
    searchBody(query),
  ]).then((final) => {
    final.forEach((item) => {
      if (item["length"] != 0) {
        item.forEach(async function (element) {
          const nameAuthor = await getAuthorPostByID(element["userId"]);
          responseDiv.appendChild(
            addCard(element["title"], element["body"], nameAuthor)
          );
        });
      }
    });
  });
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const debounceSearch = debounce((query) => {
  apiSearch(query);
}, 300);

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (event) => {
  debounceSearch(event.target.value);
});
