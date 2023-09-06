const APIURL = "https://api.github.com/users/";
const username = document.getElementById("input")

const getuser = async (userinput) => {
    const responce = await fetch(APIURL + userinput);
    console.log(APIURL + userinput)
    const data = await responce.json();
    console.log(data)
    const card = document.createElement("div")
    card.innerHTML = `  <div class="card">
   <div class="img b"><img src="${data.avatar_url}" alt="image"></div>
   <div class="info b">
       <div class="b name bc"> ${data.name} </div>
       <div class="bio b bc">${data.bio}</div>
       <span class="followers b span2 bc">${data.followers }followers</span>
       <span class="followering b span2 bc">${data.following } followering</span>
       <span class="Repo b bc span1">${data.public_repos} Repo</span>
       <div class="repos b">
       </div>
   </div>
   </div>`;

   document.body.appendChild(card)

   repo(userinput);

}

async function repo(userinput){
    const repos= document.querySelector(".repos") 
    const responce = await fetch(APIURL + userinput + "/repos")
    const data = await responce.json();
    console.log(data);
    data.forEach((item)=>{
        const a = document.createElement("a")
        a.classList='repo bc';
        a.href=item.html_url;
        console.log(a.href)
        console.log(item.html_url)
        a.target=`_blank`;
        a.innerText=`
              ${item.name}
        `;
        repos.appendChild(a)
    })

}

username.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        // console.log(username.value)
        getuser(username.value);
    }
})
