import logo from "../assets/logo.svg";
import "../styles/NewsCard.scss"
function CreateNews() {
    return (
        <div className="news-card">
            <img src={logo} alt="Avatar"/>
                <div className="container">
                    <h4><b>Article Title</b></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet corporis, cumque doloribus ea earum error, excepturi exercitationem harum nemo nostrum obcaecati officia perspiciatis quisquam, quod soluta temporibus veritatis voluptatum.</p>
                </div>
        </div>
    )
}

export default CreateNews