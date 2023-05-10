// home page properties
let  home_page_icon=document.getElementById('img-home')
home_page_icon.addEventListener('click',function(){
 window.location.assign("/easylearnvikashwebsite home page/index.html");
})
let home_page=document.getElementById('website-name')
home_page.addEventListener('click',function(){
 window.location.assign("/easylearnvikashwebsite home page/index.html");
})
let home_page_text=document.getElementById('home-page-text')
home_page_text.addEventListener('click',function(){
 window.location.assign("/easylearnvikashwebsite home page/index.html");
})
//
 
// login button properties
let login = document.getElementById('login-button');
login.addEventListener('click', function () {
    let url = "/easylearn website login page/index.html";
    window.location.assign(url);
})
// dark mode properties
let darkmode = document.getElementById('dark-id');
darkmode.addEventListener('click', function () {
    let element = document.body;
    element.classList.toggle("dark-theme");
}
)
//first link properties
let start = document.getElementById('java-script-id-start-button');
start.addEventListener('click', function () {
    let url = "https://www.youtube.com/watch?v=MLqWr84UDYw"
    window.location.assign(url);
})
// auto type speed properties line
let typed = new Typed('.auto-type', {
    strings: ["Machine learning", "Python", "React js", "Java", "Html", "Css", "Js", "C", "C++", "Php", "Artificial intelligence", "Internet of things",],
     typedSpeed: 1000,
     backSpeed: 70,
     backDelay: 1100,
  loop: true
 })
//free course button speed properties line end

let second_page = document.getElementById('free-course-button');
second_page.addEventListener('click', function () {
    let url1 = "/easylearn website second page/index.html";
    window.location.assign(url1);
})