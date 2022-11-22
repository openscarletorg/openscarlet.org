import kevinImg from './images/kevin.jpg'
import andrewImg from './images/andrew.jpg'

export default function Members() {
    return <div className="membersRoot">
        <h1>Members</h1>
        <div className="members">
            <div className="member">
                <img src={kevinImg} alt="kevin"/>
                <div className="name">
                    <h2>Kevin M</h2>
                </div>
            </div>
            <div className="member">
                <img src={andrewImg} alt="andrew"/>
                <div className="name">
                    <h2>Andrew H</h2>
                </div>
            </div>
        </div>
    </div>
}