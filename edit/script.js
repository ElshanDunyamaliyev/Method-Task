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
    updatePost(id);
    setTimeout(() => {
      alert("Post Updated Succesfully");
    }, 3000);
  } catch (error) {
    alert(error.message);
  }
  form.reset();
});

async function updatePost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        title: `${inputSurname.value}`,
        body: `${inputEmail.value}`,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  const body = await response.json();
  return body;
}
