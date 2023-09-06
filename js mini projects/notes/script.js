//  <div id="main">
// <div class="note">
//     <div class="bar">
//         <i class="fa-solid fa-floppy-disk"></i>
//         <i class="fa-solid fa-trash"></i>
//     </div>
//     <textarea></textarea>
// </div>
// </div>

const newnotebtn = document.querySelector(".new button");
const main = document.querySelector(".main");
const datasaver = () => {
    let notes = document.querySelectorAll(".note textarea")
    console.log(notes.length)
    const dataitems = [];
         notes.forEach((data)=>{
        dataitems.push(data.value)
     })
     if(dataitems.length == 0){
        localStorage.removeItem("items");
     }else{

         localStorage.setItem("items",JSON.stringify(dataitems));
     }
}  
const addnote=(text="")=>{
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
  <div class="bar">
      <i class="save fa-solid fa-floppy-disk"></i>
      <i class="del fa-solid fa-trash"></i>
  </div>
  <textarea>${text}</textarea>
    `;
    note.querySelector(".del").addEventListener(
        "click",
        function () {
            note.remove()
            datasaver();
        })
    note.querySelector(".save").addEventListener(
        "click",
        function () {
            datasaver();
        })
    note.querySelector("textarea").addEventListener(
        "focusout",
        function () {
            datasaver();
        })
        main.appendChild(note)
        datasaver();
} 

newnotebtn.addEventListener("click", function () {
   addnote();
});

(
    function(){
        let lsitems = JSON.parse(localStorage.getItem("items"));
        if(lsitems == null){   
            addnote();    
        }else{
            lsitems.forEach((lsitem)=>{
                addnote(lsitem);
            })

        }
    }
)();