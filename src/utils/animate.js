import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export function animate(){
    var textImg = document.querySelector('.about__me-image-text p');
    textImg.innerHTML = textImg.innerText.split("").map((char, i)=> `<span style="transform:rotate(${i*11}deg)">${char}</span>`).join("");
      
  
    console.log(3)
    const aboutImg = document.querySelector(".about__me")
    gsap.to(aboutImg,{
        
        ease:"none",
        
        opacity:1,
        scrollTrigger:{
            trigger:"#about",
            start:"top 20%",
            end:"top 0%",
            scrub:"true",
           
          
        }
        }
    )

}

gsap.from(".header__socials", {opacity: 0, y: 100, duration: 0.5,delay:0.5});
gsap.from(".scroll__down", {opacity: 0, y: 100, duration: 0.5});
gsap.from(".header__title", {opacity: 0, x: -100, duration: 0.5});
gsap.from(".header__title h5", {opacity: 0, x: -100, duration: 1});
gsap.from(".cta", {opacity: 0, x: -100, duration: 1, delay:0.5});
gsap.from("nav", {opacity: 0, y: 100, duration: 1, delay:0.5});


/*gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        start:"top 80%",
        
        markers:true
    }
    })
    .from(".about__cards",{
        opacity: 0, y: 100, duration: 1, delay:0.5,})
*/


/*gsap.to(".",{
        
    ease:"none",
    
    opacity:1,
    scrollTrigger:{
        trigger:"#about",
        start:"top 20%",
        end:"top 0%",
        scrub:"true",
       
      
    }
    }
)
*/
;;;;;

/*gsap.fromTo(".header__title",{
    x:-100,
    opacity:0, 
    display:"none",
    
} , {
    x:0,
    opacity:1,
    display:"block",
    duration:1.5})


gsap.to(".cta",{
    x:250,
    duration:1,
    scrollTrigger:{
        trigger:".scroll__down",
        start:"top 30%",
        end: "top 10%",
       
    }
})*/


