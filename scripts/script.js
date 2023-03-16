// i want to make a website to practice handling data
function loadAPT() {
  let url = "https://api.github.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        let output = `<div  class="profile"><img src= "${user.avatar_url}"><h3 id="login">${user.login}</h3><br><ul id="details"><li>id: ${user.id}</li><li>page: <a href="${user.html_url}">${user.html_url}</a></li></ul></div>`;
        document.querySelector("#profiles").innerHTML += output;
      });
    });
}

function idSearch(value) {
  let url = "https://api.github.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user)=>{
        if (value == user.id) {
          let output = `<div  class="profile"><img src= "${user.avatar_url}"><h3 id="login">${user.login}</h3><br><ul id="details"><li>id: ${user.id}</li><li>page: <a href="${user.html_url}">${user.html_url}</a></li></ul></div>`;
          document.querySelector("#searched").innerHTML += output;
        };  
      });
    });
  };

async function awaitComment() {
  let comment = await fetch(`https://jsonplaceholder.typicode.com/comments`)
}

///////////////////////////////////////////////////
window.onload = () => {
  loadAPT();
};

// search button
const searchBttn = document.querySelector("#search");
searchBttn.addEventListener("click", () => {
  idSearch(document.querySelector("#id").value);
  document.querySelector("#id").value = "";
});
