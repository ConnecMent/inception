function submit() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const author = document.getElementById("author").value;
  const authorID = parseInt(document.getElementById("authorID").value);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
      userId: authorID,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const post_id = json["id"];
      window.alert(`Post Created! post Id: ${post_id}`);

      window.location.href = './';
    });
}
