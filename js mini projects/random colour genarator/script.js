const btn = document.getElementById("btn")

const random_colour =()=>{

    let randomno = Math.floor( Math.random()*16777215 );   
    let random_colour = "#"+ randomno.toString(16);  // 16 stands for hexa desimal code

    document.body.style.backgroundColor = random_colour
    document.getElementById("color-code").innerText=random_colour;

    navigator.clipboard.writeText(random_colour)
}

btn.addEventListener("click",random_colour)

random_colour();