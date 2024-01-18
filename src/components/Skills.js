import React from 'react'


function Skills() {
//     const skillsContent = document.getElementsByClassName("skills__content"),
//   skillsHeader = document.querySelectorAll(".skills__header");

// function toggleSkills() {
//   let itemClass = this.parentNode.className;

//   for (let i = 0; i < skillsContent.length; i++) {
//     skillsContent[i].className = "skills__content skills__close";
//   } 
//   if (itemClass === "skills__content skills__close") {
//     this.parentNode.className = "skills__content skills__open";
//   }
// }

// skillsHeader.forEach((el) => {
//   el.addEventListener("click", toggleSkills);
// });


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
                       <i src={""} className="skills-i" />
                       C
                     </div>
                     <div className="skills-item">
                       <i src={""} className="skills-i" />
                       Cpp
                     </div>
                     <div className="skills-item">
                       <i src={""} className="skills-i" />
                       Java
                     </div>
                     <div className="skills-item">
                       <i src={""} className="skills-i" />
                       Python
                     </div>
                     <div className="skills-item">
                       <i src={""} className="skills-i" />
                       R
                     </div>
                     {/* <div className="skills-item">
           <i src="js.png" className="skills-i"/>
           Javascript
         </div> */}
                   </div>
                 </div>

                 {/* <!-- Box 2 --> */}
                 <div className="skills">
                   <h1 className="skills-title">Frontend Development</h1>
                   <div className="skills-list">
                     <div className="skills-item">
                       <i src={""} className="skills-i" />
                       HTML
                     </div>
                     <div className="skills-item">
                       <i src={""} className="skills-i" />
                       CSS
                     </div>

                     <div className="skills-item">
                       <i src={""} className="skills-i" />
                       React Js
                     </div>
                     <div className="skills-item">
                       <i src={""} className="skills-i" />
                       Next Js
                     </div>
                     <div className="skills-item">
                       <i src={""} className="skills-i" />
                       Bootstrap
                     </div>
                   </div>
                 </div>

                 {/* <!-- Box 3 --> */}
                 <div className="skills">
                   <h1 className="skills-title">Backend Development</h1>
                   <div className="skills-list">
                     <div className="skills-item">
                       <i src={""} className="skills-i" />
                       MySQL
                     </div>
                     <div className="skills-item">
                       <i src={""} className="skills-i" />
                       MongoDB
                     </div>
                     {/* <div className="skills-item">
                       <i src={express} className="skills-i" />
                       Express Js
                     </div> */}
                   </div>
                 </div>

                 {/* <!-- Box 4 --> */}
                 <div className="skills">
                   <h1 className="skills-title">Additional skills</h1>
                   <div className="skills-list">
                     <div className="skills-item">
                       <i src={""} className="skills-i" />
                       Git
                     </div>
                     <div className="skills-item">
                       <i src={""} className="skills-i" />
                       Github
                     </div>
                     <div className="skills-item">
                       <i src={""} className="skills-i" />
                       Postman
                     </div>
                     <div className="skills-item">
                       <i src={""} className="skills-i" />
                       Kaggle
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