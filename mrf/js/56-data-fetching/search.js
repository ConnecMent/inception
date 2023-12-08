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

async function getAuthorPost(userID) {
  const response = await fetch(apiUrl + `users/${userID}`);
  const final = await response.json();

  return final["name"];
}

async function apiSearch(query) {
  const responseDiv = document.getElementById("response");
  responseDiv.innerHTML = "";

  const response = await fetch(apiUrl + `posts?userId=${query}`);
  const final = await response.json();

  console.log(final);

  final.forEach(async function (element) {
    const nameAuthor = await getAuthorPost(element["userId"]);
    responseDiv.appendChild(
      addCard(element["title"], element["body"], nameAuthor)
    );
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
