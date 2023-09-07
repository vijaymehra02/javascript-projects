// popuals movies API 
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.querySelector(".main");
const input = document.querySelector("input")

const getmovies = async (api) => {
    const responce = await fetch(api);
    const dataobj = await responce.json()
    const dataarray = Array.from(dataobj)
    main.innerHTML="";
    dataobj.results.forEach((element) => {
        console.log(element)
        const container = document.createElement("div");
        container.classList= ("container b")
        container.innerHTML = `
      <div class="img b">
                  <img src="${IMGPATH + element.poster_path }" alt="img">
              </div>
              <div class="pop b">
                  <div class="tital b">
                      <h2 class="b">${element.title}</h2>
                      <span class="b">${element.vote_average}</span>
                  </div>
                  <p class="b">${element.overview}</p>
              </div>
      `;

      main.appendChild(container)
    });
}
input.addEventListener("keyup",function(event){
    if(event.target.value != ""){
        console.log(event.target.value)
        getmovies(SEARCHAPI+event.target.value)
    }else{
        getmovies(APIURL);
    }
})
getmovies(APIURL);