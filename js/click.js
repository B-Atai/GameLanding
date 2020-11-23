let langBtn = document.getElementsByClassName('languages__main');
let langArray = Array.from(langBtn);
console.log(langArray)
function drop(){
    sortArray.forEach((item) => {
        item.classList.toggle('is-active');
        const toggle = document.querySelectorAll('.is-active');
        toggle.forEach(i) => () {
            item[i].style.display = 'block';
        }
    });
}