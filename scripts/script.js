// i want to make a website to practice handling data
function loadAPT(){
  let url = "https://api.github.com/users";
  let response = fetch(url).then(
   (response) => response.json()
 ).then(
   (users) => {
    users.forEach((user => {
      console.log(user)
      var output = `<figure><h3 id="login">${user.login}</h3><img src= "${user.avatar_url}"></figure>`;
      document.querySelector("#profiles").innerHTML += output+"<br>";
    }))
  });
};

function chuckNorrisJoke(){
   let url = "https://api.chucknorris.io/jokes/random";
   fetch(url).then(
    (response) => response.json()
  ).then(
    (joke) => {
        console.log(joke.value+"<br>");
    });
};

//  chuck norris joke
let chuck = document.querySelector("#chuckNorris");
chuck.addEventListener("click",chuckNorrisJoke);

window.onload = () => {
  loadAPT();
}
