document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.body.classList.add("ready");
    }, 4000); // După 2 secunde
});
let cookiebox = document.querySelector(".corner")
document.getElementById("understood").addEventListener('click',()=>{
    cookiebox.style.transform = "translateY(45px)"
let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo');
})
const logoSpan = document.querySelectorAll('.logo span');
window.addEventListener('DOMContentLoaded',()=> {
    setTimeout(()=> {
        logoSpan.forEach((span,idx)=> {
            setTimeout(()=>{
                span.classList.add('active');
            },(idx+1)*400)
        });
const logoSpan = document.querySelectorAll('.logo span');
        setTimeout(()=>{
            logoSpan.forEach((span,idx)=>{
                setTimeout(()=> {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx+1)*50)
            })
        },2000)
    })
})

function carousel(id){
    const carouselSlide = document.querySelector(id + ' .carousel-slide');
    const carouselImages = document.querySelectorAll(id + ' .carousel-slide img')
    
    const prevBtn = document.querySelector(id + ' #prevBtn');
    const nextBtn = document.querySelector(id + ' #nextBtn');
    
    let counter = 1;
    let size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    
    nextBtn.addEventListener('click', () =>{
        let size = carouselImages[0].clientWidth;
        if(counter<0) return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
        nextBtn.disabled=true;
        setTimeout(function(){
            nextBtn.disabled=false;
        },400)
    });
    
    prevBtn.addEventListener('click', () =>{
        let size = carouselImages[0].clientWidth;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
        prevBtn.disabled=true;
        setTimeout(function(){
            prevBtn.disabled=false;
        },400)
    });
    
    carouselSlide.addEventListener('transitionend', () =>{
        let size = carouselImages[0].clientWidth;
        if(carouselImages[counter].id === 'lastclone'){
            carouselSlide.style.transition = "none";
            counter = carouselImages.length-2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if(carouselImages[counter].id === 'firstclone'){
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });
    
    window.addEventListener('resize', function(event) {
        let size = carouselImages[0].clientWidth;
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }, true);
}

carouselA = carousel('#voucher1');
carouselB = carousel('#voucher2');
carouselC = carousel('#voucher3');
carouselD = carousel('#voucher4');
carouselE = carousel('#voucher5');
carouselF = carousel('#voucher6');