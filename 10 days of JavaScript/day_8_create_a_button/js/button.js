let click = 0
let btn = document.getElementById('btn')

btn.addEventListener("click", function() {
    console.log('click')
    click++ 
    btn.innerHTML = click
});