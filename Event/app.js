let btn = document.getElementById('btn');

btn.addEventListener('click', function warn(){
    alert("hello");
})

function welcome(){
    alert('Hello');
}

function highlight(obj){
    obj.style.background = "yellow";
}

function none_highlight(obj){
    obj.style.background = "white";
}

function getMenu(){
    const menu = document.getElementById('menu');
    const play = document.getElementById('display');
    console.log(menu.value);
}

