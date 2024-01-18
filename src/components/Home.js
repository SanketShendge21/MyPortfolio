import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
function Home() {

    const [text] = useTypewriter({
        words: ['Full Stack Developer','Software Engineer','Graphic Designer'],
        loop:{}
    })

  return (
    <>
    <section className="home bd-grid" id="home">
            <div className="home__data">
                <h1 className="home__title">Hi,<br />I'm <span className="home__title-color">Sanket</span><br />{text}
                 <span>
                    <Cursor />    
                    </span></h1>

                <a href="assets/Sanket_Shendge.pdf" className="button" target="_blank" rel="noopener noreferrer">Check Resume</a>
            </div>

            <div className="home__social">
                <a href="https://www.linkedin.com/in/sanket-shendge/" className="home__social-icon" target='_blank' rel='noopener noreferrer'><i className='bx bxl-linkedin'></i></a>
                <a href="https://github.com/SanketShendge21" className="home__social-icon" target='_blank' rel='noopener noreferrer'><i className='bx bxl-github' ></i></a>
                <a href="https://twitter.com/SanketShendge21" className="home__social-icon" target='_blank' rel='noopener noreferrer'><i className="bx bxl-twitter"></i></a>
                <a href="https://www.instagram.com/sanket.shendge21/" className="home__social-icon" target='_blank' rel='noopener noreferrer'><i className="bx bxl-instagram"></i></a>
            </div>

            <div className="home__img">
            <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <mask id="mask0" mask-type="alpha">
                    <circle cx="239.5" cy="233.5" r="190" fill="white" />
                </mask>
                <g mask="url(#mask0)">
                    <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                    <image className="home__blob-img" x="50" y="60" xlinkHref="assets/img/sticker.png"/>
                </g>
            </svg>

            </div>

        </section>
    </>
  )
}

export default Home