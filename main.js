const menuIcon=document.querySelector('.menu-icon');
const navBar=document.querySelector('.navbar');
menuIcon.onclick=function(){
    navBar.classList.toggle('active');
    menuIcon.classList.toggle('close');
}