const upperset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerset = 'abcdefghijklmnopqrstuvwxyz'
const numberset = '0123456789'
const symbolset = '~!@#$%^&*()_+<>?'

const pass_container = document.getElementsByTagName("h1")[0]
const pass_len = document.querySelector('#length')
const upper_case = document.querySelector('#uppercase')
const lower_case = document.querySelector('#lowercase')
const numbers = document.querySelector('#number')
const symboles = document.querySelector('#symbol')


const randompass=(dataset)=>{
     let random = Math.floor(Math.random()*dataset.length);
     let passval = dataset[random]
    return passval;
}

randompass(upperset)

const generater=(passward="")=>{
    if(upper_case.checked){
       passward += randompass(upperset) ; 
    }
    if(lower_case.checked){
        passward += randompass(lowerset) ; 
    }
    if(numbers.checked){
        passward += randompass(numberset) ; 
    }
    if(symboles.checked){
        passward += randompass(symbolset) ; 
    }
    if(passward.length < pass_len.value){
        return generater(passward);
    }
    // console.log(passward)
    let rendom_password = trim(passward , pass_len.value  )
    pass_container.innerHTML = `<div> ${rendom_password} <div>`
}
function trim(str , num){
    if(str.length>num){
        let substr = str.slice(0,str.length)
        return substr;
    }else{
        return str;
    }
}
const btn = document.getElementById("btn")
function reset(){
    if(upper_case.checked || lower_case.checked || symboles.checked || numbers.checked){
        
        generater()
    }else{
        
        pass_container.innerText = "check any one"
    }
}
btn.addEventListener('click',reset)

