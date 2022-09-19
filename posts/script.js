const params = new URLSearchParams(location.search);
const id = params.get("id");
const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
const url2 = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

const getPosts = async function () {
  const res = await fetch(url);
  const data = await res.json();
  const ul = document.querySelector(".ul-1");
  const li0 = document.createElement("li");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  const li5 = document.createElement("li");
  li1.classList.add("li1");
  li2.classList.add("li1");
  li3.classList.add("li1");
  li4.classList.add("li1");
  li0.innerHTML = "{\n";
  li5.innerHTML = "}";
  li1.innerHTML = "userId: " + data.userId;
  li2.innerHTML = "id: " + data.id;
  li3.innerHTML = "title: " + data.title;
  li4.innerHTML = "body:" + data.body;
  ul.appendChild(li0);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
};
getPosts();

const getComments = async function () {
  const res = await fetch(url2);
  const data = await res.json();
  data.forEach((i) => {
    const ul = document.querySelector(".ul-2");
    const li0 = document.createElement("li");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const li4 = document.createElement("li");
    const li5 = document.createElement("li");
    li1.classList.add("li1");
    li2.classList.add("li1");
    li3.classList.add("li1");
    li4.classList.add("li1");
    li0.innerHTML = "{\n";
    li5.innerHTML = "}";
    li1.innerHTML = "postId: " + i.postId;
    li2.innerHTML = "id: " + i.id;
    li3.innerHTML = "name: " + i.name;
    li4.innerHTML = "body:" + i.body;
    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
  });
};
getComments();

const editBtn = document.querySelector(".btnEdit");
const delBtn = document.querySelector(".btnDelete");

const a = document.querySelector(".a1");
a.setAttribute("href", `/edit/?id=${id}`);

const a2 = document.querySelector(".a2");
a2.setAttribute("href", `/delete/?id=${id}`);
