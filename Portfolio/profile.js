const btn = document.querySelector(".mobile-navbar-btn");
const aboutSection = document.querySelector(".about");


const toggleBar = ()=> {
    aboutSection.classList.toggle('phone');
}

btn.addEventListener('click', ()=> toggleBar() );


// ==== select section element =====>>
const myAbout = document.querySelector('#about');
const education = document.querySelector('#education');
const experience = document.querySelector('#experience');
const projects = document.querySelector('#projects');
const volunteer = document.querySelector('#volunteer');
const skills = document.querySelector('#skills');

document.querySelector('#aboutLink').addEventListener('click',()=>{
    myAbout.scrollIntoView({behavior: "smooth"})
})
document.querySelector('#eduLink').addEventListener('click',()=>{
    education.scrollIntoView({behavior: "smooth"})
})
document.querySelector('#expLink').addEventListener('click',()=>{
    experience.scrollIntoView({behavior: "smooth"})
})
document.querySelector('#proLink').addEventListener('click',()=>{
    projects.scrollIntoView({behavior: "smooth"})
})
document.querySelector('#volLink').addEventListener('click',()=>{
    volunteer.scrollIntoView({behavior: "smooth"})
})

document.querySelector('#skiLink').addEventListener('click',()=>{
    skills.scrollIntoView({behavior: "smooth"})
})