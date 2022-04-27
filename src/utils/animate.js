import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function animate(){
    var textImg = document.querySelector('.about__me-image-text p');
    textImg.innerHTML = textImg.innerText.split("").map((char, i)=> `<span style="transform:rotate(${i*11}deg)">${char}</span>`).join("");
      
  
    const aboutCards = document.querySelector(".about__cards");
    gsap.to(aboutCards, {
        ease:"none",
        duration: 0.5,
        opacity:1,
        scrollTrigger:{
            trigger:"#about",
            start:"top 20%",
            
            }
    })
    gsap.to(".about__content p", {
        ease:"none",
        duration: 0.8,
        opacity:1,
        y:0,
        scrollTrigger:{
            trigger:"#about",
            start:"top 30%",
            
            }
    })
    gsap.to("#about h2", {
        duration: 2.5,
        height:"50px",
        ease: "power4",
        y:0,
        scrollTrigger:{
            trigger:"#about",
            start:"top 65%",
            
            }
        
      });
    gsap.to("#projects h2", {
        duration: 1.5,
        height:"50px",
        ease: "power4",
        y:0,
        scrollTrigger:{
            trigger:"#projects",
            start:"top 65%",
            
            }
        
      });
    gsap.to(".projects__item", {
        duration: 2.5,
        opacity:1,
        ease: "power4",
        y:0,
        scrollTrigger:{
            trigger:"#projects",
            start:"top 45%",
            
            }
        
      });
    gsap.to(".contact__container", {
        duration: 2.5,
        opacity:1,
        ease: "power4",
        y:0,
        scrollTrigger:{
            trigger:"#contact",
            start:"top 45%",
            
            }
        
      });
    gsap.to("#contact h2", {
        duration: 1.5,
        height:"50px",
        ease: "power4",
        y:0,
        scrollTrigger:{
            trigger:"#contact",
            start:"top 65%",
            
            }
        
      });
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
        })
    



gsap.from(".header__socials", {opacity: 0, y: 100, duration: 0.5,delay:0.5});
gsap.from(".scroll__down", {opacity: 0, y: 100, duration: 0.5});
gsap.from(".header__title", {opacity: 0, x: -100, duration: 0.5});
gsap.from(".header__title h5", {opacity: 0, x: -100, duration: 1});
gsap.from(".cta", {opacity: 0, x: -100, duration: 1, delay:0.5});
gsap.from("nav", {opacity: 0, y: 100, duration: 1, delay:0.5});




}



