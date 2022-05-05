import "./projects.css"

const Projects = ({img, link, title, desc1, desc2}) => {
  return (
    <div className="pmain">
    <div className='p'>
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="" className="p-img"></img>
        </a>
    </div>
    <div className="desc">
        <h1>{title}</h1>
        <p>{desc1}</p>
        <p><b>Technologies used: </b>{desc2}</p>
        <button><a href={link}>Website</a></button>
        <button><a href={link}>GitHub</a></button>
    </div>
    </div>
  )
}

export default Projects