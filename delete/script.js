const params = new URLSearchParams(location.search);
const id = params.get("id");
console.log(id);
// const baseURL = "https://jsonplaceholder.typicode.com";
const inputName = document.querySelector("#exampleInputName");
const inputSurname = document.querySelector("#exampleInputSurname");
const inputEmail = document.querySelector("#exampleInputEmail");

const submit = document.querySelector(".btn");
const form = document.querySelector("form");
const baseURL = "https://jsonplaceholder.typicode.com";

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputName.value === "" ||
    inputSurname.value === "" ||
    inputEmail.value === ""
  ) {
    return alert("Please fill all fields");
  }
  try {
    deletePost(id);
    setTimeout(() => {
      alert("Post Deleted Succesfully");
    }, 3000);
  } catch (error) {
    alert(error.message);
  }
  form.reset();
});

async function deletePost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "DELETE",
    }
  );

  const body = await response.json();

  return body;
}
