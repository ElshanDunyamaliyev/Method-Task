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
    createPost();
    setTimeout(() => {
      alert("Post Created Succesfully");
    }, 3000);
  } catch (error) {
    alert(error.message);
  }
  form.reset();
});

async function createPost() {
  const response = await fetch(`${baseURL}/posts`, {
    method: "POST",
    body: JSON.stringify({
      userId: +inputName.value,
      title: inputSurname,
      body: inputEmail.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await response.json();
  console.log(data);
  return data.id;
}
