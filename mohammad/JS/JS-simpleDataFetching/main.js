const titleArr = new Array();
const bodyArr = new Array();
for (let i = 1; i <= 10; i++) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
    .then((response) => response.json())
    .then((post) => {
      titleArr.push(post["title"]);
      bodyArr.push(post["body"]);
      if (i == 10) console.table([titleArr, bodyArr]);
    });
}
