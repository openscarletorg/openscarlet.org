import scarletnavImg from './images/scarletnav.png'

export default function Projects() {
    return <div className="projectsRoot">
        <h1>Projects</h1>
        <div className="projects">
            <div className="project">
                <img src={scarletnavImg} alt="scarletnav"/>
                <div className="info">
                    <h2>Scarlet Navigator</h2>
                    <p>A course planner for Rutgers University</p>
                </div>
            </div>
            <div className="project">
                <img src={scarletnavImg} alt="scarletnav"/>
                <div className="info">
                    <h2>Scarlet Navigator</h2>
                    <p>A course planner for Rutgers University</p>
                </div>
            </div>
            <div className="project">
                <img src={scarletnavImg} alt="scarletnav"/>
                <div className="info">
                    <h2>Scarlet Navigator</h2>
                    <p>A course planner for Rutgers University</p>
                </div>
            </div>
        </div>
    </div>
}