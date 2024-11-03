const slider = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

slider.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});
let counter = 0

nextBtn.addEventListener("click", function(){
    counter++;
    carousal();
})
prevBtn.addEventListener("click", function(){
    counter--;
    carousal();
})

function carousal() {
    
    // if (counter === slider.length) {
    //     counter = 0;
    // }
    // if (counter < 0) {
    //     counter = slider.length - 1;
    // }

    // working with buttons
    if(counter < slider.length - 1){
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if(counter > 0){
        prevBtn.style.display = "block";
    } else{
        prevBtn.style.display = "none"
    }
    slider.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}
prevBtn.style.display = "block";