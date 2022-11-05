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
                    <h2>RUSocial</h2>
                    <p>Discord bot that keeps track of getINVOLVED events</p>
                </div>
            </div>
            <div className="project">
                <img src={scarletnavImg} alt="scarletnav"/>
                <div className="info">
                    <h2>Weighted Calculator</h2>
                    <p>Plan your course grade ahead of time</p>
                </div>
            </div>
        </div>
    </div>
}