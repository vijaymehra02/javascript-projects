
const object = [
    {
        'que': 'Which of the following property is used to add or subtract space between the letters that make up a word?',
        'a': 'color ',
        'b': 'direction ',
        'c': 'letter-spacing ',
        'd': 'word-spacing ',
        'currect': 'c'
    },
    {
        'que': 'Which of the following is correct about CSS?',
        'a': 'CSS is used to control the style of a web document in a simple and easy way. ',
        'b': `CSS is the acronym for "Cascading Style Sheet".`,
        'c': 'You can write CSS once and then reuse same sheet in multiple HTML pages.',
        'd': 'All of the above.',
        'currect': 'd'
    },
    {
        'que': ' Which of the following selector matches a element based on its id?',
        'a': 'The Id Selector ',
        'b': ' The Universal Selector',
        'c': ' The Descendant Selector ',
        'd': 'The Class Selector',
        'currect': 'a'
    }
]

const submit = document.getElementById("btn")
const options = document.querySelectorAll(".option input")
const question = document.getElementById("question");
let index = 0;

const load = () => {

    if (object.length <= index) {
        document.getElementsByClassName("box")[0].innerHTML =
            ` <div class="result">
         <h1 class="text-center">thanks for play</h1>
         <p class="text-center"> ${r} / ${object.length} are currect answers </p>
         </div>
        `
        return;
    }
    console.log(object.length)
    console.log(index)

    let obj = object[index]
    document.getElementsByTagName("h2")[0].innerText = `${index + 1}.)  ${obj.que} `;
    document.getElementsByTagName("label")[0].innerText = obj.a;
    document.getElementsByTagName("label")[1].innerText = obj.b;
    document.getElementsByTagName("label")[2].innerText = obj.c;
    document.getElementsByTagName("label")[3].innerText = obj.d;

}
load();

// function return which option user selected
const show = () => {
    let ans;
    options.forEach((input) => {
        if (input.checked) {
            ans = input.value
        }
    })
    return ans;
}

let r = 0
const currect = () => {
    let ans = show();
    if (ans == object[index].currect) {
        console.log("right")
        r++;
    } else {
        console.log("wrong")
    }
    options.forEach((input) => {
        input.checked = false

    })
    index++;
    load();
}


submit.addEventListener('click', currect);