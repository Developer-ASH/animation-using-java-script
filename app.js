// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items
const title = document.querySelector('.title');
const AMD = document.querySelector('.AMD img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const cores = document.querySelector('.cores');

//Moving Animation Event
card.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    //Popout
    title.style.transform = "translateZ(150px)";
    AMD.style.transform = "translateZ(200px)";
    description.style.transform = "translateZ(125px)";
    cores.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});

//Animate Out
container.addEventListener('mouseleave', e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //PopBack
    title.style.transform = "translateZ(0px)";
    AMD.style.transform = "translateZ(0px) rotateX(0deg)";
    description.style.transform = "translateZ(0px)";
    cores.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
})
