const langbtn = document.getElementById("langItems");
const dropitem = document.getElementById("dropItem")
function drop() {
    langbtn.addEventListener('click', function (){
        langbtn.classList.toggle('is-on')
        function on(){
            dropitem.style.display = ('block')
        }
        on()
    });
};
drop()