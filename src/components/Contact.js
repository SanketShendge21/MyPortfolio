import React from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function sendEmail(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.querySelector('[name="name"]').value;
  const email = document.querySelector('[name="email"]').value;
  const subject_from = document.querySelector('[name="subject"]').value;
  const message_from = document.querySelector('[name="message"]').value;

  emailjs.send("service_86s9yho", "template_02mwdvd", {
    from_name: name,
    to_name: "Sanket Shendge",
    reply_to: email,
    subject: subject_from,
    message: message_from,
  },"V2ZAQlGgPD7oaKWPN").then(function(response) {
    showMailAlert();
  }, function(error) {
    alert("Error sending email. Please try again later.");
  });
}

function showMailAlert() {
  Swal.fire({
    icon: 'success',
    title: 'Sent',
    text: 'E-mail Sent Successfully',
    confirmButtonText: 'Thanks for contacting'
  });

  var form = document.querySelector('.contact__form');
  form.reset();
}

function Contact() {
  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>

        <div className="contact__container bd-grid">
          <form method="post" className="contact__form" onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="name" className="contact__input" required />
            <span id="nameError" className="error"></span>

            <input type="email" placeholder="Email" name="email" className="contact__input" required />
            <span id="emailError" className="error"></span>

            <input type="text" placeholder="Subject" name="subject" className="contact__input" required />
            <span id="subjectError" className="error"></span>

            <textarea name="message" placeholder="Message" cols="30" rows="10" className="contact__input" required></textarea>
            <span id="messageError" className="error"></span>

            <input type="submit" value="Send" className="contact__button button" />
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact;
