const userinput = document.querySelector(".userinput input")
const todoul = document.querySelector(".todoul")
const todolitext = [];


function locpop(){
    let b = JSON.parse(localStorage.getItem("todolist"));
    localStorage.removeItem("todolist");
    console.log("r")
    const afterpop = [];
    b.pop();
    if (b != null) {
        if (b.length != 0) {
            b.forEach((element) => {
                afterpop.push(element);
                localStorage.setItem("todolist", JSON.stringify(afterpop));
            });
        }
    }
    else {
        console.log("fal")
        todolitext.push("");
        localStorage.setItem("todolist", JSON.stringify(todolitext));
    }
}

function licreat(show) {
    const li = document.createElement("li");
    li.innerHTML = `
     <div class="litext">
     ${show} 
     </div>
     <i class="fa-solid fa-xmark"></i>
     `;
    todoul.appendChild(li)
    const litext = li.querySelector(".litext");
    litext.addEventListener("click", function () {
        litext.classList.toggle("don")
    })
    const icon = li.querySelector("i")
    icon.addEventListener("click", function () {
        li.remove();
        locpop();
    })

}

function initialadd() {
    let a = JSON.parse(localStorage.getItem("todolist"));
    console.log(a)
    if (a != null) {
        if (a.length != 0) {
            a.forEach(element => {
                if(element!=""){
                    licreat(element);
                    todolitext.push(element)
                    localStorage.setItem("todolist", JSON.stringify(todolitext));
                }
            });
        }
    }
    else {
        todolitext.push("");
        localStorage.setItem("todolist", JSON.stringify(todolitext));
    }
}
initialadd();


function add() {
    todolitext.push(userinput.value)
    localStorage.setItem("todolist", JSON.stringify(todolitext));
}

userinput.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        let user = userinput.value;
        licreat(user);
        add();
        userinput.value = "";
    }
})

