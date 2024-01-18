import React from 'react'

function Footer() {
  return (
    <>
    <footer className="footer">
        <p className="footer__title">Sanket</p>
        <div className="footer__social">
            {/* <!-- <a href="#" className="footer__icon"><i className='bx bxl-facebook' ></i></a> --> */}
            <a href="https://www.instagram.com/sanket.shendge21/" className="footer__icon" target='_blank' rel='noopener noreferrer'><i className='bx bxl-instagram' ></i></a>
            <a href="https://twitter.com/SanketShendge21" className="footer__icon" target='_blank' rel='noopener noreferrer'><i className='bx bxl-twitter' ></i></a>
        </div>
        <p className="footer__copy">Made By Sanket Shendge </p>
    </footer>
    </>
  )
}

export default Footer