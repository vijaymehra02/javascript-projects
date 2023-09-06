// let time = document.querySelector(`.user input[type="time"]`)
// let date = document.querySelector(`.user input[type="date"]`)
// let date_ampm = document.querySelector(`#date`)
// let stard_btn = document.querySelector(`#stardbtn button`)

// const find=()=>{
//   console.log(time.value)
//   console.log(date.value)
//   console.log(date_ampm.value)
// }

// stard_btn.addEventListener("click",find)

const input = document.querySelectorAll("input")

function updates(){
    // let endt="2 september 2023 00:41 AM"
    let endt="2023-september-1 22:35 AM"

let endtime = document.getElementsByClassName("end-time")[0].innerText = endt;


let user = new Date(endt)
let current = new Date()
let diff = (Math.floor((user - current)/1000))
console.log(diff)

if(diff >= 0){

let days = Math.floor(diff / 3600 / 24)
let hours = Math.floor(diff / 3600 % 24)
let min = Math.floor(diff / 60 % 60)
let sec = Math.floor(diff % 60)

input[2].value = days;
input[3].value = hours;
input[4].value = min;
input[5].value = sec;
}else{
clearInterval(t)
}
}

let t = setInterval(()=>{
    updates()
},1000)

