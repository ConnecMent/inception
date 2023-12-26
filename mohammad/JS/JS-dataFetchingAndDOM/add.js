const url = "https://jsonplaceholder.typicode.com";

function submit() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const author = document.getElementById("author").value;
  const authorID = parseInt(document.getElementById("authorID").value);

  fetch(`${url}/posts`, {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
      userId: authorID,
    }),
    headers: {
      "Content-type": "application/json;; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      const postID = json["id"];
      window.alert(`The post by ${postID} post id was added successfully.`);
      // this method is used for redirect from one page to another
      window.location.href = "./";
    });
}
