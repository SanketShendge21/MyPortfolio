import React from 'react'
import { BiLogoCPlusPlus,BiLogoHtml5,BiLogoGit,BiLogoGithub,BiLogoPhp,BiLogoNodejs,BiLogoJava,BiLogoCss3  } from "react-icons/bi";
import { SiExpress,SiMongodb,SiMysql,SiPython,SiTailwindcss,SiAdobephotoshop,SiAdobepremierepro     } from "react-icons/si";
import { RiJavascriptFill,RiReactjsFill,RiBootstrapFill   } from "react-icons/ri";
import { TbBrandNextjs,TbBrandCoinbase } from "react-icons/tb";
function Skills() {


  return (
    <>
    <section className="skill" id="skills">
     
     {/* <Particle></Particle> */}
     <div className="container-skills">
     
   
       <div className="row">
         <div className="col-12">
           <div className="skill-bx wow zoomIn">
             <h2>Skills</h2>

             <section>
            
               <div className="wrapper">
                 {/* <!-- Box 1 --> */}
                 <div className="skills">
                   <h1 className="skills-title">Programming Languages</h1>
                   <div className="skills-list">
                     <div className="skills-item">
                       <TbBrandCoinbase className="skills-i" />
                       C
                     </div>
                     <div className="skills-item">
                      <BiLogoCPlusPlus className="skills-i" />
                       C++
                     </div>
                     <div className="skills-item">
                       <BiLogoJava className="skills-i" />
                       Java
                     </div>
                     <div className="skills-item">
                       <SiPython className="skills-i" />
                       Python
                     </div>
                     <div className="skills-item">
                      <RiJavascriptFill src="js.png" className="skills-i"/>
                      JavaScript
                    </div>
                   </div>
                 </div>

                 {/* <!-- Box 2 --> */}
                 <div className="skills">
                   <h1 className="skills-title">Frontend Development</h1>
                   <div className="skills-list">
                     <div className="skills-item">
                       <BiLogoHtml5 className="skills-i" />
                       HTML
                     </div>
                     <div className="skills-item">
                       <BiLogoCss3  className="skills-i" />
                       CSS
                     </div>
                     
                     <div className="skills-item">
                       <RiBootstrapFill  className="skills-i" />
                       Bootstrap
                     </div>
                     <div className="skills-item">
                       <SiTailwindcss  className="skills-i" />
                       Tailwind
                     </div>
                   </div>
                 </div>

                 {/* <!-- Box 3 --> */}
                 <div className="skills">
                   <h1 className="skills-title">Backend Development</h1>
                   <div className="skills-list">
                     <div className="skills-item">
                       <SiMysql  className="skills-i" />
                       MySQL
                     </div>
                     <div className="skills-item">
                       <BiLogoPhp  className="skills-i" />
                       PHP
                     </div>
                     <div className="skills-item">
                       <SiMongodb  className="skills-i" />
                       MongoDB
                     </div>
                     <div className="skills-item">
                       <SiExpress className="skills-i" />
                       Express
                     </div>
                     <div className="skills-item">
                       <RiReactjsFill  className="skills-i" />
                       React
                     </div>
                     <div className="skills-item">
                       <BiLogoNodejs className="skills-i" />
                       NodeJS
                     </div>
                     <div className="skills-item">
                       <TbBrandNextjs className="skills-i" />
                       Next Js
                     </div>
                   </div>
                 </div>

                 {/* <!-- Box 4 --> */}
                 <div className="skills">
                   <h1 className="skills-title">Additional skills</h1>
                   <div className="skills-list">
                     <div className="skills-item">
                       <BiLogoGit className="skills-i" />
                       Git
                     </div>
                     <div className="skills-item">
                       <BiLogoGithub className="skills-i" />
                       Github
                     </div>
                     <div className="skills-item">
                       <SiAdobephotoshop  className="skills-i" />
                       Adobe Photoshop
                     </div>
                     <div className="skills-item">
                       <SiAdobepremierepro  className="skills-i" />
                       Adobe Premiere Pro 
                     </div>
                   </div>
                 </div>

               </div>
               {/* </div> */}
               
             </section>
      
           </div>
         </div>
         
       </div>
       
       
     </div>
     
    
     {/* <i className="background-image-left" src={colorSharp} alt="pic" /> */}
   </section>
    </>
  )
}

export default Skills