var modal1 = document.getElementById('simpleModal1');
var modal2 = document.getElementById('simpleModal2');
var modal3 = document.getElementById('simpleModal3');
var modal4 = document.getElementById('simpleModal4');
var modal5 = document.getElementById('simpleModal5');
var modal6 = document.getElementById('simpleModal6');

// var modal = document.querySelectorAll('.simpleModal');
console.log(modal1)
var btn1 = document.getElementById('modalBtn1');
var btn2 = document.getElementById('modalBtn2');
var btn3 = document.getElementById('modalBtn3');
var btn4 = document.getElementById('modalBtn4');
var btn5 = document.getElementById('modalBtn5');
var btn6 = document.getElementById('modalBtn6');
var span1 = document.getElementsByClassName('closeBtn')[0];
var span2 = document.getElementsByClassName('closeBtn')[1];
var span3 = document.getElementsByClassName('closeBtn')[2];
var span4 = document.getElementsByClassName('closeBtn')[3];
var span5 = document.getElementsByClassName('closeBtn')[4];
var span6 = document.getElementsByClassName('closeBtn')[5];

btn1.addEventListener('click', openModal);
span1.addEventListener('click', closeModal);
btn2.addEventListener('click', openModal2);
span2.addEventListener('click', closeModal2);
btn3.addEventListener('click', openModal3);
span3.addEventListener('click', closeModal3);
btn4.addEventListener('click', openModal4);
span4.addEventListener('click', closeModal4);
btn5.addEventListener('click', openModal5);
span5.addEventListener('click', closeModal5);
btn6.addEventListener('click', openModal6);
span6.addEventListener('click', closeModal6);
window.addEventListener('click', clickOutside);


function openModal(){
    console.log(modal1);
    modal1.style.display='block';
}

function closeModal(){
    modal1.style.display='none';
}


function openModal2(){
    console.log(modal2);
    modal2.style.display='block';
}

function closeModal2(){
    modal2.style.display='none';
}

function clickOutside(e){
    if(e.target ==  modal2){
        modal2.style.display='none';
    }
    if(e.target ==  modal3){
        modal3.style.display='none';
    }
    if(e.target ==  modal1){
        modal1.style.display='none';
    }
}

function openModal3(){
    console.log(modal3);
    modal3.style.display='block';
}

function closeModal3(){
    modal3.style.display='none';
}

function openModal4(){
    console.log(modal4);
    modal4.style.display='block';
}

function closeModal4(){
    modal4.style.display='none';
}


function openModal5(){
    console.log(modal5);
    modal5.style.display='block';
}

function closeModal5(){
    modal5.style.display='none';
}

function openModal6(){
    console.log(modal6);
    modal6.style.display='block';
}

function closeModal6(){
    modal6.style.display='none';
}


function gotowhatsapp() {
    
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/14692316355?text=" 
    + "Hey, This is " + name + ". I need help with: "
     + subject  + "%0a"
    +  message; 

    window.open(url, '_blank').focus();
}

function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

  $('#myForm').on('submit', function(e){
    $('#myModal').modal('show');
    e.preventDefault();
  });


  function toggleTheme() {
    const body = document.body;

    // Toggle the 'dark-theme' class on the body
    body.classList.toggle('dark-theme');

    // Check if the 'dark-theme' class is present
    const isDarkMode = body.classList.contains('dark-theme');

    // Set the theme preference in local storage
    localStorage.setItem('darkMode', isDarkMode);
}

// Check the theme preference from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Set the initial theme based on the user's preference
    document.body.classList.toggle('dark-theme', isDarkMode);
});