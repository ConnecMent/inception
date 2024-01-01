function createPostElement() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      const firstTenPosts = posts.slice(0, 10);

      const postsContainer = document.getElementById("posts-container");

      firstTenPosts.forEach((post) => {
        const postContainer = document.createElement("div");
        postContainer.classList.add("post-container");

        const title = document.createElement("h2");
        title.classList.add("post-title");
        title.textContent = post.title;

        const body = document.createElement("p");
        body.classList.add("post-body");
        body.textContent = post.body;

        const author = document.createElement("p");
        author.classList.add("post-author");
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          .then((response) => response.json())
          .then((user) => {
            author.textContent = `Author: ${user.name}`;
          })
          .catch((error) => {
            console.error(error);
            author.textContent = "Author: Unknown";
          });

        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.addEventListener("click", () => {
          console.log(`Update post with ID ${post.id}`);

          const updatedTitle = prompt("Enter the updated title:", post.title);
          const updatedBody = prompt("Enter the updated body:", post.body);
          const updatedAuthorName = prompt(
            "Enter the updated author's name:",
            post.userId
          );

          if (
            updatedTitle !== null &&
            updatedBody !== null &&
            updatedAuthorName !== null
          ) {
            body.textContent = updatedBody;
            title.textContent = updatedTitle;
            author.textContent = `Author: ${updatedAuthorName}`;

            const updatedPost = {
              id: post.id,
              title: updatedTitle,
              body: updatedBody,
              userId: updatedAuthorName,
            };

            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
              method: "PATCH",
              body: JSON.stringify(updatedPost),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => response.json())
              .then((updatedPost) => {
                title.textContent = updatedPost.title;
                body.textContent = updatedPost.body;
                author.textContent = `Author: ${updatedPost.userId}`;
              })
              .catch((error) => {
                console.error(error);
                body.textContent = "Error updating post";
              });
          }
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
          const confirmed = confirm(
            "Are you sure you want to delete this post?"
          );

          if (confirmed) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
              method: "DELETE",
            })
              .then(() => {
                postContainer.remove();
              })
              .catch((error) => {
                console.error(error);
                body.textContent = "Error deleting post";
              });
          }
        });

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("post-buttons");
        buttonContainer.appendChild(updateButton);
        buttonContainer.appendChild(deleteButton);

        postContainer.appendChild(title);
        postContainer.appendChild(body);
        postContainer.appendChild(author);
        postContainer.appendChild(buttonContainer);

        postsContainer.appendChild(postContainer);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}


function redirectToNewPostPage() {
  window.location.href = "new-post.html";
}

const submitPost = () => {
  const post = {
    title: document.getElementById("postTitleInput").value,
    body: document.getElementById("postBodyInput").value,
    userId: document.getElementById("postUserIdInput").value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = "index.html";
      } else {
        throw new Error("Post submission failed");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const performSearch = () => {
  const searchInput = document.getElementById("searchInput").value.trim();
  if (!searchInput) {
    getAllPosts();
    return;
  }

  fetch(`https://jsonplaceholder.typicode.com/posts?title=${searchInput}`)
    .then((response) => response.json())
    .then((data) => {
      const postsContainer = document.getElementById("posts-container");
      postsContainer.innerHTML = "";

      if (data.length === 0) {
        postsContainer.innerHTML = "No matching posts found.";
        return;
      }

      data.forEach((post) => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getAllPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      const postsContainer = document.getElementById("posts-container");
      postsContainer.innerHTML = "";

      data.forEach((post) => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

getAllPosts();
