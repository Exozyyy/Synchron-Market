import Navigation from "../../../widgets/Navigation/Navigation.tsx"
import LoginForm from "../../../features/AuthForms/LoginForm/LoginForm.tsx"
import BackgroundDecoration from "../../../shared/BackgroundDecoration/BackgroundDecoration.tsx"
import "./LoginPage.css"
import Header from "../../../widgets/Header/Header.tsx";


export default function LoginPage() {
    return (
        <div className="login-page">
            <Header/>
            <Navigation/>
            <div className="main-content">
                <BackgroundDecoration/>
                <LoginForm/>
            </div>
        </div>
    )
}

