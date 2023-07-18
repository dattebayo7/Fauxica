var img = document.getElementById('img');

var slides = ['fr2.jpg','fr3.jpg','fr4.jpg', 'fr5.jpg', 'fr6.jpg',
'fr1.jpg'];

var Start=0;
function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img class =slider-img src=/images/items/"+slides[Start-1]+">";
   
}
setInterval(slider,2000);
const productcontainers=[...document.querySelectorAll('.product-container')];
const nxtBtn=[...document.querySelectorAll('.nxt-btn')];
const preBtn=[...document.querySelectorAll('.pre-btn')];

productcontainers.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;
    nxtBtn[i].addEventListener('click', ()=>{
        item.scrollLeft+=containerWidth;
    })
    preBtn[i].addEventListener('click', ()=>{
        item.scrollLeft-=containerWidth;
    })

})
