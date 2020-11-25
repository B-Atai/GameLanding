const langbtn = document.getElementById("langItems");
const dropitem = document.getElementById("dropItem");
function drop() {
    langbtn.addEventListener('click', function (){
        dropitem.classList.toggle('is-on')
    });
    langbtn.addEventListener('click', function (){
        dropitem.classList.toggle('is-off')
    });
    
};
drop();

const accordeon = () => {
    const accordeonBtn = document.querySelectorAll(".accordeon__items");
    const accordeonItem = document.querySelectorAll(".accordeon__description");
    const accordeonPoint = document.querySelectorAll(".accordeon__title");
    accordeonBtn.forEach((item,i) =>{
        item.addEventListener('click', function (){
            accordeonPoint[i].classList.toggle('is-active')
            accordeonItem[i].classList.toggle('is-active')
        }); 
    })
}
accordeon();