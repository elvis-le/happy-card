import logo from "../assets/logo.png";
import './Navigation.scss'

const Navigation = () => {
    return (
        <div className="nav-wrapper">
            <div className="nav-logo-wrap">
                <div className="nav-logo">
                    <img src={logo} alt="logo-web"/>
                </div>
                <div className="nav-name">
                    <span>Happy Card</span>
                </div>
            </div>
        </div>
    )
}

export default Navigation;