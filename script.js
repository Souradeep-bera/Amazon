// Image Slider-
console.log("Amazon Clone")

const imgs = document.querySelectorAll(".header-slider ul img")
const prev_btn = document.querySelector(".control-prev")
const next_btn = document.querySelector(".control-next")

let n = 0;

function ChangeSlide(){
    // Combine Images-
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none"; // Remove All The Images
    }
    imgs[n].style.display = 'block'; // First Images Extract
}
ChangeSlide();

prev_btn.addEventListener('click', (e)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    ChangeSlide()
})


next_btn.addEventListener('click', (e)=>{
    if(n < imgs.length - 1){
        n ++;
    }else{
        n = 0;
    }
    ChangeSlide();
})

// Product Slider-
const scrollContainer = document.querySelectorAll('.products')
for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault(); // Remove Default Features
        item.scrollLeft += evt.deltaY;
    })
}