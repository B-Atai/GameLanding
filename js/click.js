const langbtn = document.getElementById("langItems");
const dropitem = document.getElementById("dropItem")
function drop() {
    langbtn.addEventListener('click', function (){
        dropitem.classList.toggle('is-on')
    });
    langbtn.addEventListener('click', function (){
        dropitem.classList.toggle('is-off')
    });
    
};
drop()