import React from 'react'

function About() {
  return (
    <>
    <section className="about section " id="about">
            <h2 className="section-title">About</h2>

            <div className="about__container bd-grid">
                <div className="about__img">
                    <img src="assets/img/about1.jpeg" alt="" />
                </div>
                
                <div>
                    <h2 className="about__subtitle">I'm Sanket</h2>
                    <p className="about__text">I am a professional Web Designer and Software Developer. <br />As a software developer, I've had the privilege of projecting on a diverse range of projects, from developing robust web applications to optimizing database performance.<br /> My expertise lies in:<br />
                        - Full-stack web development using technologies like HTML/CSS, JavaScript, and React.<br />
                        - Database design and optimization with SQL and MongoDB.<br />
                        - Version control systems (Git) and collaborative development projectflows.</p>  

                </div>                                   
            </div>
        </section>

    </>
  )
}

export default About