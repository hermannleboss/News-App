import logo from "../assets/logo.svg";
import "../styles/NewsCard.scss"
function CreateNews() {
    return (
        <div className="xl:w-1/4 md:w-1/2 p-4 ">
            <div className="p-6 rounded-lg border-2 border-white rounded-lg">
                <img className="h-40 rounded w-full object-full object-center mb-6"
                     src={logo} alt="content"/>
                <h2 className="text-lg font-medium title-font mb-4">Chichen Itza</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit
                    waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            </div>
        </div>
    )
}

export default CreateNews