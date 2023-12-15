const titleArr = new Array();
const bodyArr = new Array();
const promises = new Array();
for (let i = 1; i <= 10; i++) {
  promises.push(
    fetch(`https://jsonplaceholder.typicode.com/posts/${i}`).then((response) =>
      response.json()
    )
  );
}
const myPromise = Promise.all(promises);
myPromise
  .then((posts) => {
    posts.forEach((post) => {
      titleArr.push(post["title"]);
      bodyArr.push(post["body"]);
    });

    console.table([titleArr, bodyArr]);
  })
  .catch((error) => console.error("Error fetching posts:", error));
