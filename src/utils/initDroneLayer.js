import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap'; 

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NoToneMapping } from 'three';

gsap.registerPlugin(ScrollTrigger);
let camera, scene, renderer;


const loader = new GLTFLoader();




export function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1;
    camera.position.y = 0;
    camera.rotation.z = 0;

    scene = new THREE.Scene();

    const light = new THREE.DirectionalLight(0xffffff, 4, 70); 
    light.position.set(0.3, 1, 0.3)
    scene.add(light);
    const light2 = new THREE.DirectionalLight(0xffffff, 1, 10); 
    light2.position.set(-0.3, -2, 0.3)
    scene.add(light2);

	var mx = 300;
        var my = 500; 
        function saveMouse(event){
            mx = event.clientX;
            my = event.clientY;
        }
        document.onmousemove = saveMouse;
        var model;
        var boton = document.querySelector(".btn");
        var hero = document.querySelector(".hero");
        var plans = document.querySelector(".plans");

    loader.load("/models/starwar/scene.gltf", (gltf)=>{
        model = gltf.scene;
        model.scale.set(1.35, 1.35, 1.35);
        model.position.set( 2.55, 0.15, .0);
        
        

      
        
        
       

        gsap.to(model.position,{
                  
            x:2.56
            })
            

        /* MEDIA QUERIE MODEL POSITION*/
        var mquerie = window.matchMedia("(max-width: 600px)")
        function mediaQuerieFunction(mquerie) {
            if (mquerie.matches) { 
               
                gsap.to(model.position,{
                    delay:1,
                    position:1,
                    duration:3,
                    x:0,
                })
                gsap.to(model.scale,{
                    delay:1,
                    duration:1,
                    x:2,
                    y:2,
                    z:2})
              
                gsap.fromTo(model.scale,{
                        delay:1,
                        duration:1,
                        
                        x:2,
                        y:2,
                        z:2},{
                        delay:1,
                        duration:1,
                            
                        x:0.85,
                        y:0.85,
                        z:0.85,
                        scrollTrigger:{
                            trigger:"#about",
                            start:"top 80%",
                            end:"top 20%",
                            scrub:"true",
                        
                        }
                        }
                    ) 
                    gsap.fromTo(camera.position,{
                        delay:1,
                        duration:1,
                        y:0,
                    },{
                        delay:1,
                        duration:1,
                        y:-1,
                        
                        scrollTrigger:{
                            trigger:"#about",
                            start:"top 10%",
                            end:"top -85%",
                            scrub:"true"
                            
                          
                        }
                        }
                    )

                    
            } else {
                
                gsap.fromTo(model.position,{
                    x:2
                },{
                  
                    delay:1,
                    position:1,
                    duration:3,
                    x:0.56,
                    }
                )
                gsap.fromTo(model.position,{
                    delay:1,
                    position:1,
                    duration:3,
                    x:0.5,},{
                    delay:1,
                    position:1,
                    duration:3,
                    x:-0.7,
                    scrollTrigger:{
                        trigger:"#about",
                        start:"top 80%",
                        end:"top 20%",
                        scrub:"true",
                      
                    }
                    }
                )
                gsap.fromTo(model.scale,{
                    delay:1,
                    duration:1,
                    
                    x:1.55,
                    y:1.55,
                    z:1.55},{
                    delay:1,
                    duration:1,
                        
                    x:0.75,
                    y:0.75,
                    z:0.75,
                    scrollTrigger:{
                        trigger:"#about",
                        start:"top 80%",
                        end:"top 20%",
                        scrub:"true",
                      
                    }
                    }
                )
                gsap.fromTo(camera.position,{
                    delay:1,
                    duration:1,
                    y:0,
                },{
                    delay:1,
                    duration:1,
                    y:-1,
                    
                    scrollTrigger:{
                        trigger:"#projects",
                        start:"top 115%",
                        end:"top 5%",
                        scrub:"true"
                      
                    }
                    }
                )
            }
          }
          
          var mquerie = window.matchMedia("(max-width: 700px)")
          mediaQuerieFunction(mquerie) // Call listener function at run time
          mquerie.addListener(mediaQuerieFunction)

            /*==========*/
        /*gsap.to(model.position,{
            delay:1,
            position:1,
            duration:3,
            x:0.55,
            y:0.15
        })*/
        gsap.timeline({repeat:-1})
        .from(model.position,{
            duration:0.35,
            y:0.14})
        .to(model.position,{
            duration:0.35,
            y:0.15})
            .to(model.position,{
                duration:0.25,
                y:0.14})
        
        
        boton.onclick = function(){
            gsap.to(model.position,{
                delay:0.2,
                position:1,
                x:.0,
                y:0.45   
            });
            gsap.to(model.scale,{
                delay:0,
                duration:1,
                
                x:.25,
                y:.25,
                z:.25
            });
            gsap.to(hero,{
                delay:0,
                duration:0.5,
                opacity:0,
                yPercent: -10
                
                 
            })
            gsap.to(hero,{
                delay:1,
                display:"none"   
            })
            gsap.to(plans,{
                delay:0.5,
                duration:1,
                opacity:1,
                yPercent: 10,
                display:"flex"
                
                 
            })
            
             
        }
        scene.add(model);
        
        
    })
    function myClick() {
        setTimeout(
          function() {
            model.rotation.y = mx/500-1000; 
            model.rotation.x = my/1000-0.0;
          }, 1100);
      }
     


	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animation );
    renderer.setClearColor(0x1C1A1C,1);
	document.body.appendChild( renderer.domElement );

    window.addEventListener('resize', ()=>{
        camera.aspect= window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    function droneMoveMouse() {};

    function droneMoveMouse() {
      setTimeout(
        function() {model.position.x = mx/2000;}, 1100);
        console.log(my)
    }
    
    function animation( time ) {
        myClick();
        
    
        renderer.render( scene, camera );
    
    }
    boton.onclick = function animation( time ) {
        myClick();
        droneMoveMouse()
    
        renderer.render( scene, camera );
    
    }
}

