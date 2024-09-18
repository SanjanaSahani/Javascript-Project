const reviews = [
    {
        id:1,
        name : "SHIRLEY HARRIS",
        job: "WEB DEVELOPER",
        img : "image1.webp",
        info : " 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rem ab nemo ducimus. Excepturi quasi officia maiores odio quos! Amet veritatis tempora quia eos explicabo?"

    },
    {
        id:2,
        name : "BEVERLY CLARK",
        job: "IOS DEVELOPER",
        img : "image2.webp",
        info : " 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rem ab nemo ducimus. Excepturi quasi officia maiores odio quos! Amet veritatis tempora quia eos explicabo?"

    },
    {
        id:3,
        name : "CRYSTAL BROOKS",
        job: "CEO",
        img : "image.jpg",
        info : "3  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rem ab nemo ducimus. Excepturi quasi officia maiores odio quos! Amet veritatis tempora quia eos explicabo?"

    },
    {
        id:4,
        name : "AMANDA WATKINS",
        job: "MANGER",
        img : "image4.webp",
        info : " 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rem ab nemo ducimus. Excepturi quasi officia maiores odio quos! Amet veritatis tempora quia eos explicabo?"

    }
]

const image = document.getElementById('img');
const name = document.getElementById('name');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevbtn = document.querySelector('.prevbtn');
const nextbtn = document.querySelector('.nextbtn');
const randombtn = document.querySelector('.randombtn')

let currentItem = 0 ;

window.addEventListener('DOMContentLoaded', function(){
   showPerson(currentItem)
})

function showPerson(){
    let item = reviews[currentItem];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}

prevbtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0 ){
        currentItem = reviews.length - 1
    }
   
    showPerson()
})
nextbtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length){
        currentItem = 0;
    }
    showPerson()
})

randombtn.addEventListener('click', function(){
        currentItem = Math.floor(Math.random() * reviews.length)
        showPerson()
})






