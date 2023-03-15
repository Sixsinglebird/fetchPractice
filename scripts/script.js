// i want to make a website to practice handling data
function loadAPT(){
    let xmr = new XMLHttpRequest();
    let output = ""
    xmr.open("GET","https://reqres.in/api/users")
    xmr.onload = function(){
        if (xmr.status === 200){
            let data = JSON.parse(xmr.responseText).data;
            let profiles = document.createElement("ul");
            data.forEach(function(user){
                let li = document.createElement("li");
                let profile = `<img src=${user.avatar}>`;
                li.innerHTML = profile
                profiles.appendChild(li);
                
            });
            output += profiles;
            document.querySelector("#profiles").innerHtml = output;
        } else {
            alert("error code received");
        };
        
    };
xmr.send()
};

loadAPT();