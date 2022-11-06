import scarletnavImg from './images/scarletnav.png'
import githubIcon from './icons/github.svg'

export default function Projects() {
    return <div className="projectsRoot">
        <h1>Projects</h1>
        <div className="projects">
            <div className="project">
                <div className="info">
                    <h2>ScarletNav</h2>
                </div>
                <img src={scarletnavImg} alt="scarletnav"/>
            </div>
            <div className="project">
                <div className="info">
                    <h2>Weighted</h2>
                </div>
                <img src={scarletnavImg} alt="scarletnav"/>
            </div>
            <div className="project">
                <div className="info">
                    <h2>RUEvents</h2>
                </div>
                <img src={scarletnavImg} alt="scarletnav"/>
            </div>
        </div>
    </div>
}