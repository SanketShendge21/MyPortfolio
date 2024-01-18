import React,{useState} from 'react'

function Qualification() {
//     const tabs = document.querySelectorAll("[data-target]"),
//   tabContents = document.querySelectorAll("[data-content]");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     const target = document.querySelector(tab.dataset.target);

//     tabContents.forEach((tabContent) => {
//       tabContent.classList.remove("qualification__active");
//     });
//     target.classList.add("qualification__active");

//     tabs.forEach((tab) => {
//       tab.classList.remove("qualification__active");
//     });
//     tab.classList.add("qualification__active");
//   });
// });
const [activeTab, setActiveTab] = useState('education');

const handleTabClick = (target) => {
  setActiveTab(target);
};
  return (
    <>
    <section className="qualification__section">
        <h2 className="section-title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
            <div
              className={`qualification__button button--flex ${
                activeTab === 'education' ? 'qualification__active' : ''
              }`}
              data-target="#education"
              onClick={() => handleTabClick('education')}
            >
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div
              className={`qualification__button button--flex ${
                activeTab === 'work' ? 'qualification__active' : ''
              }`}
              data-target="#work"
              onClick={() => handleTabClick('work')}
            >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Work
                </div>
                <div
              className={`qualification__button button--flex ${
                activeTab === 'certifications' ? 'qualification__active' : ''
              }`}
              data-target="#certifications"
              onClick={() => handleTabClick('certifications')}
            >
                    <i className="uil uil-envelope qualification__icon"></i>
                    Certifications
                </div>
            </div>

            <div className="qualification__sections">
        {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
        <div
              className={`qualification__content ${
                activeTab === 'education' ? 'qualification__active' : ''
              }`}
              data-content
              id="education"
            >
         {/* <!--==================== QUALIFICATION 1 ====================-->  */}
         <div className="qualification__data">
             <div>
                 <h3 className="qualification__title">S.S.C </h3>
                 <span className="qualification__subtitle">S.S.P.M Day School</span>
                 <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2008 - 2018
                 </div>
             </div>

             <div>
                 <span className="qualification__rounder"></span>
                 <span className="qualification__line"></span>
             </div>
         </div>
         
         {/* <!--==================== QUALIFICATION 2 ====================-->  */}
         <div className="qualification__data">
            <div></div>
            <div>
               <span className="qualification__rounder"></span>
               <span className="qualification__line"></span>
            </div>

            <div>
                <h3 className="qualification__title">Diploma In Computer Engineering</h3>
                <span className="qualification__subtitle">Cusrow Wadia Institute of Technology</span>
                <div className="qualification__calendar">
                   <i className="uil uil-calendar-alt"></i>
                   2018 - 2021
                </div>
            </div>
        </div> 

        {/* <!--==================== QUALIFICATION 3 ====================-->  */}
        <div className="qualification__data">
            <div>
                <h3 className="qualification__title">B.E in Computer Engineering</h3>
                <span className="qualification__subtitle">A.I.S.S.M.S College of Engineering</span>
                <div className="qualification__calendar">
                   <i className="uil uil-calendar-alt"></i>
                   2021 - 2024
                </div>
            </div>

            <div>
                <span className="qualification__rounder"></span>
            </div>
        </div> 

            
        </div>
        </div>
        
        {/* <!--==================== QUALIFICATION CONTENT 2 ====================--> */}
        <div
              className={`qualification__content ${
                activeTab === 'work' ? 'qualification__active' : ''
              }`}
              data-content
              id="work"
            >
            {/* <!--==================== QUALIFICATION 1 ====================-->  */}
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">Code Clause Internship (Remote)</h3>
                    <span className="qualification__subtitle">Web Developer</span>
                    <div className="qualification__calendar">
                       <i className="uil uil-calendar-alt"></i>
                       Feb 2023 - May 2023
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    {/* <!-- <span className="qualification__line"></span> --> */}
                </div>
            </div>
            
            {/* <!--==================== QUALIFICATION 2 ====================-->  */}
            {/* <!-- <div className="qualification__data">
               <div></div>
               <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
               </div>

               <div>
                   <h3 className="qualification__title">Banking Assistant</h3>
                   <span className="qualification__subtitle">DFCC Head Office - Colombo</span>
                   <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2019 - 2020
                   </div>
               </div>
           </div>  --> */}

           {/* <!--==================== QUALIFICATION 3 ====================-->  */}
           {/* <!-- <div className="qualification__data">
               <div>
                   <h3 className="qualification__title">Data Analyst - Digital banking</h3>
                   <span className="qualification__subtitle">DFCC Head Office - Colombo</span>
                   <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2020 - Present
                   </div>
               </div>

               <div>
                   <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span> 
               </div>
           </div>  --> */}
      
           </div> 
         
           </div>
           {/* <!--==================== QUALIFICATION CONTENT 3 ====================--> */}
           <div
              className={`qualification__content ${
                activeTab === 'certifications' ? 'qualification__active' : ''
              }`}
              data-content
              id="certifications"
            >
            {/* <!--==================== QUALIFICATION 1 ====================-->  */}
            <div className="qualification__data">
                <div style={{marginLeft: "auto"}}>
                    <a href="https://learndigital.withgoogle.com/digitalunlocked/validate-certificate-code" target="_blank" rel="noopener noreferrer">
                        <h3 className="qualification__title">Google</h3>
                    <span className="qualification__subtitle">Digital Marketing</span><br />
                    <span className="qualification__subtitle">Credential ID QGZ HN6 H45</span> </a>
                    <div className="qualification__calendar">
                       <i className="uil uil-calendar-alt"></i>
                       Feb 2023
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
            </div>
            <div className="qualification__data">
                <div></div>
                <div>
                   <span className="qualification__rounder"></span>
                   <span className="qualification__line"></span>
                </div>

                <div>
                    <a href="https://drive.google.com/file/d/1IKEERHrAdjYLNEFUAoPT-a0YA4_37dCq/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <h3 className="qualification__title">1stop.ai</h3>
                    <span className="qualification__subtitle">Web Development Training And Internship</span></a>
                    <div className="qualification__calendar">
                       <i className="uil uil-calendar-alt"></i>
                       Nov 2022
                    </div>
                </div>
            </div> 
            <div className="qualification__data">
                <div style={{marginLeft:"auto"}}>
                    <a href="https://www.udemy.com/certificate/UC-82d06c6f-f465-4258-9927-62251e63ae89/" target="_blank" rel="noopener noreferrer">
                    <h3 className="qualification__title">Udemy</h3>
                    <span className="qualification__subtitle">Java Programming: Complete <br />Beginner to Advanced</span>
                    </a>
                    <div className="qualification__calendar">
                       <i className="uil uil-calendar-alt"></i>
                       Aug 2022
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
            </div>
            <div className="qualification__data">
                <div></div>
                <div>
                   <span className="qualification__rounder"></span>
                   <span className="qualification__line"></span>
                </div>

                <div>
                    <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata%20Consultancy%20Services/N8Muuhk6XsXgMTeu2_Tata%20Consultancy%20Services_r55gbvJ5otsYRtXGE_1679501579851_completion_certificate.pdf" target="_blank" rel="noopener noreferrer">
                    <h3 className="qualification__title">KPMG Forage</h3>
                    <span className="qualification__subtitle">ESG Virtual Experience Program
                        TATA CONSULTANCY
                        SERVICES</span></a>
                    <div className="qualification__calendar">
                       <i className="uil uil-calendar-alt"></i>
                       Mar 2023
                    </div>
                </div>
            </div>
            <div className="qualification__data">
                <div style={{marginLeft:"auto"}}>
                    <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/KPMG%20AU/m7W4GMqeT3bh9Nb2c_KPMG%20AU_r55gbvJ5otsYRtXGE_1677425693021_completion_certificate.pdf" target="_blank" rel="noopener noreferrer">
                    <h3 className="qualification__title" target="_blank">KPMG Forage</h3>
                    <span className="qualification__subtitle">Data Analytics Consulting <br />Virtual Internship</span>
                    </a>
                    <div className="qualification__calendar">
                       <i className="uil uil-calendar-alt"></i>
                       Feb 2023
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    {/* <!-- <span className="qualification__line"></span> --> */}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Qualification