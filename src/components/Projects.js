import ProjectContainer from '../components/ProjectContainer'
import './Project.css'

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Threads Unveiled',
      description:
        'Threads Unveiled is a sophisticated e-commerce platform developed with Next.js and MongoDB.The use of MongoDB ensures efficient database management, providing customers with a diverse and visually appealing selection of high-quality fashion products.',
      stack: ['NextJS', 'MongoDB',],
      img:"/assets/img/threadsunveiled.png",
      sourceCode: 'https://github.com/SanketShendge21/ThreadsUnveiled',
      livePreview: 'https://threadsunveiled.vercel.app/',
    },
    {
      name: 'TextUtils',
      description:
        'TextUtils is a versatile text converter application designed for efficiency. Whether converting case formats,copy to clipboard, speak, TextUtils streamlines text manipulation tasks. Its user-friendly interface and robust functionalities make it an indispensable tool for anyone seeking quick and effective text transformations.',
      stack: ['ReactJS', 'npm'],
      img:"/assets/img/TextUtils.png",
      sourceCode: 'https://github.com/SanketShendge21/TextUtils-React',
      livePreview:'https://sanketshendge21.github.io/TextUtils-React/',
    },
    {
      name: 'iNotebook',
      description:
        'iNotebook is an intuitive note-taking application designed for seamless organization and accessibility. With a user-friendly interface, it allows users to effortlessly jot down ideas, create to-do lists, and capture thoughts on the go',
      stack: ['ReactJS','Node','Express','MongoDB'],
      img:"/assets/img/inotebook.png",
      sourceCode: 'https://github.com/SanketShendge21/iNotebook_MERN',
    },
    {
      name: 'Virya',
      description:
        'Virya, born during the COVID-19 pandemic, stands as an essential E-learning platform. Crafted to adapt to the changing educational landscape, it ensures uninterrupted learning experiences.',
      stack: ['HTML','CSS','JavaScript', 'MySQL', 'PHP'],
      img:"/assets/img/virya.png",
      sourceCode: 'https://github.com/SanketShendge21/Virya-E-Learning',
    },
  ]
const Projects = () => {


  return (
    <section id='projects' className='section projects'>
      <h1 className='section-title'>Projects</h1>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer  project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects