const slider = document.querySelectorAll(".slide-img")
const previous = document.querySelector(".previous")
const next = document.querySelector(".next")

let length = 0;

slider.forEach((img, index) => {
    img.style.left = `${index * 100}%`
})

next.addEventListener("click", function () {
    if (length < slider.length - 1) {
        length++;
        sliedwork();
    }
})
previous.addEventListener("click", function () {
    if (length > 0) {
        length--;
        sliedwork();
    }
})

const sliedwork = () => {
    slider.forEach((img) => {
        console.log(img)
        img.style.transform = `translateX(-${length * 100}%`;
        console.log(length)
        console.log(`-${length * 100}%`)
        console.log(img)
    }
    )
}