import "./Header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-left">
                    <div className="location-icon">📍</div>
                    <span>г. Екатеринбург, Свердловская обл.</span>
                </div>
                <div className="header-right">
                    <div className="contact-item">💬</div>
                    <div className="telegram-icon">t</div>
                    <span>(343)789-123</span>
                    <span>пн-вс 8:00 – 21:00</span>
                    <span className="order-call">Заказать звонок</span>
                </div>
            </div>
        </div>
    )
}

