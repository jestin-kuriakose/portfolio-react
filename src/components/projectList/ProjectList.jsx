import './projectList.css'
import {products} from "../../data"
import Projects from '../projects/Projects'

const ProjectList = () => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>Projects</h1>
            <p className='pl-desc'>This is a creative portfolio that shows my web development work projects</p>
        </div>
        <div className='pl-list'>
            {products.map((item)=> (
                <Projects key={item.id} img={item.img} link={item.link} title={item.title} desc1={item.desc1} desc2={item.desc2}/>
            ))}
            
         
        </div>
    </div>
  )
}

export default ProjectList