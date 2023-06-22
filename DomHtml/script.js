let get = document.getElementById('demo');
let selector = document.querySelector('#demo');
let mode = document.querySelector('.light');
let menu = document.getElementById('menu');
let count = 1;

console.log(get);
console.log(selector);
function LightMode(){
    mode.setAttribute('class','light');
}

function DarkMode(){
    mode.setAttribute('class','dark');
}

function addElement(){
    const item = document.createElement('li');
    item.innerText = "Item " + (count++);
    menu.appendChild(item);
}

function deleteElement(){
    const item = document.getElementById('item');
    menu.removeChild(item);
}

function toggleStyle(){
    mode.classList.toggle('dark');
}