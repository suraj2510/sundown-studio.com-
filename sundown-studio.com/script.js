// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

const elemC=document.querySelector("#elem-container");
const fixedImage= document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
     fixedImage.style.display="block"
})
elemC.addEventListener("mouseleave",function(){
    fixedImage.style.display="none"
})




const elem=document.querySelectorAll(".elem")
elem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image= e.getAttribute("data-image")
        fixedImage.style.backgroundImage=`url(${image})`
    })
})

// const elem1=  document.querySelector("#elem1")
// elem1.addEventListener("mouseenter",function(){
//      var img=  elem1.getAttribute("data-image")
//      console.log(img);
// })

// const data= document.querySelector("data-image")
// data.addEventListener("mouseenter",function(){
//     data.getAttribute("data-images")
// })

