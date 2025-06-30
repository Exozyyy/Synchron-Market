"use client"

import type React from "react"
import "./Navigation.css"

type NavigationProps = {}

const Navigation: React.FC<NavigationProps> = () => {
    const handleLogin = () => {
        console.log("Login clicked")
    }

    return (
        <div className="navigation">
            <div className="navigation-container">
                <div className="logo">
                    <span className="logo-sync">Синхрон.</span>
                    <span className="logo-market">Маркет</span>
                </div>
                <nav className="nav-menu">
                    <a href="#" className="nav-link">
                        О проекте
                    </a>
                    <a href="#" className="nav-link">
                        Главная
                    </a>
                    <a href="#" className="nav-link">
                        Заявки
                    </a>
                    <a href="#" className="nav-link">
                        Техподдержка
                    </a>
                    <button className="login-button" onClick={handleLogin}>
                        Войти
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default Navigation
