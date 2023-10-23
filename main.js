var modal = document.getElementsByClassName('modal')[0];
console.log(modal)
var modalBtn = document.getElementsByClassName('button')[0];
var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

function openModal(){
    console.log(modal);
    modal.style.display='block';
}

function closeModal(){
    modal.style.display='none';
}

function clickOutside(e){
    if(e.target ==  modal){
        modal.style.display='none';
    }
}