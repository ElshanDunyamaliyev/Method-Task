const url = "https://jsonplaceholder.typicode.com/posts";
const postsContainer = document.querySelector(".postsContainer");
const addPostBtn = document.querySelector(".btn");

const getPosts = async function () {
  const res = await fetch(url);
  const data = await res.json();
  return data.forEach((i) => {
    const a = document.createElement("a");
    a.setAttribute("href", `/posts/?id=${i.id}`);
    a.textContent = `${i.id}: ${i.title}`;
    const h1 = document.createElement("h1");
    h1.appendChild(a);
    postsContainer.appendChild(h1);
  });
};
getPosts();

const a = document.querySelector(".a");
a.setAttribute("href", `/newpost/`);
