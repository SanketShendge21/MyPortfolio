import React from 'react'
// import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

function Projects() {
    function showIntAlert(event) {
        event.preventDefault();
        Swal.fire({
          icon: 'info',
          title: 'Oops!',
          text: 'Sorry, this project is not available for viewing at the moment.',
          confirmButtonText: 'Got it'
        });
      }
  return (
    <>
    {/* <!--===== Project =====--> */}
    <section className="project section" id="project">
            <h2 className="section-title">Projects</h2>

            <div className="project__container bd-grid project__img__wrap">
                <div className="project-image-container">
                <a href="https://github.com/SanketShendge21/Virya-E-Learning" className="project__img" target="_blank" rel="noopener noreferrer">
                    <img src="assets/img/Virya_logo.png" alt="Unable to Load" />
                    <p className="project__img__description"><b>Virya E-learning Platform</b><br /><br />The physical classroom learning nowadays is no longer applicable for the current younger generations due to COVID-19 Crisis. Internet and distance learning which is generally known as online education plays a vital roles in the country’s education system.
                    </p>

                </a>
                </div>
            
                <div className="project-image-container">
                    <a href="https://github.com/SanketShendge21/Canteen-Management-System" className="project__img" target="_blank" rel="noopener noreferrer">
                        <img src="assets/img/canteen.jpg" alt="Unable to Load" />
                        
                        <p className="project__img__description"><b>Canteen Management System</b> <br /><br />This project, Canteen Ordering System, facilitates the end-users to register online, read and pick the food from the e-menu card, and order food online by just choosing the food that the user wants to have using the website.</p>
                    </a>
                </div>
                <div className="project-image-container">
                    <a href='/' className="project__img" target="_self" onClick={(event) => showIntAlert(event)} rel="noopener noreferrer">
                        <img src="assets/img/url_shortner.jpeg" alt="Unable to Load" />
                        <p className="project__img__description"><b>URL Shortening Website (Internship)</b> <br /><br />Implemented custom URL shortening logic, enabling users tocreate concise and shareable links. Designed a responsive interface for users togenerate, manage, and track shortened URLs.</p>
                    </a>
                </div>
                {/* <!-- <a href="" className="project__img">
                    <img src="assets/img/project4.jpg" alt="">
                </a>
                <a href="" className="project__img">
                    <img src="assets/img/project5.jpg" alt="">
                </a>
                <a href="" className="project__img">
                    <img src="assets/img/project6.jpg" alt="">
                </a> --> */}
            </div>
        </section>
    </>
  )
}

export default Projects