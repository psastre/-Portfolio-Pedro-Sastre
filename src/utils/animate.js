import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export function animate(){
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


