//Get element
let hours   = document.querySelector('#hours');
let min     = document.querySelector('#min');
let sec     = document.querySelector('#sec');
let time    = document.querySelector('#time');
let day    = document.querySelector('#day');
let month    = document.querySelector('#month');
let year    = document.querySelector('#year');
//Week name 
let sun    = document.querySelector('#sun');
let mon    = document.querySelector('#mon');
let tus    = document.querySelector('#tus');
let wed    = document.querySelector('#wed');
let thu    = document.querySelector('#thu');
let fri    = document.querySelector('#fri');
let sat    = document.querySelector('#sat');
//Color progress bar
let color   = document.querySelector("#color");
let footerColor   = document.querySelector("#footerColor");
let leftColor   = document.querySelector("#leftColor");
let rightColor   = document.querySelector("#rightColor");



//Clock function
let seconds = 0;
setInterval(function(){

   let date = new Date();
   let h    = date.getHours(); 
   let m    = date.getMinutes(); 
   let s    = date.getSeconds(); 
   let d    = date.getDay(); 



   //Date print 
   min.innerHTML=m;
   sec.innerHTML=s;

   if(h > 12){
    hours.innerHTML=h-12;
    time.innerHTML="PM";
   }else {
    hours.innerHTML=h;
    time.innerHTML="AM";
   }

   day.innerHTML=date.getDate();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   month.innerHTML=months[date.getMonth()];
   year.innerHTML=date.getFullYear();
  


   //Week print
   if(d == 1){
    mon.style.color="#fff";
   }else if(d == 2) {
    tus.style.color="#fff";
   }else if(d == 3) {
    wed.style.color="#fff";
   }else if(d == 4) {
    thu.style.color="#fff";
   }else if(d == 5) {
    fri.style.color="#fff";
   }else if(d == 6) {
    sat.style.color="#fff";
   }else if(d == 7) {
    sun.style.color="#fff";
   }


   color.style.width = s*1.66666666667 + "%";
   footerColor.style.width = s*1.66666666667 + "%";
   leftColor.style.height = s*1.66666666667 + "%";
   rightColor.style.height = s*1.66666666667 + "%";


}, 1000);

