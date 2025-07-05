import "./Navigation.css"
import {Link} from "react-router-dom";


const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation-container">
                <div className="logo">
                    <span className="logo-sync">Синхрон.</span>
                    <span className="logo-market">Маркет</span>
                </div>
                <nav className="nav-menu">
                    <Link to="/#" className="nav-link">
                        О проекте
                    </Link>
                    <Link to="/#" className="nav-link">
                        Главная
                    </Link>
                    <Link to="/#" className="nav-link">
                        Заявки
                    </Link>
                    <Link to="/#" className="nav-link">
                        Техподдержка
                    </Link>
                    <Link className="login-button" to='/login'>
                        Войти
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Navigation
