import "./Header.css"
import {FaTelegram, FaWhatsapp} from "react-icons/fa";
import {BsGeoAltFill} from "react-icons/bs";

export default function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-left">
                    <BsGeoAltFill size={20} color="#fff"/>
                    <span>г. Екатеринбург, Свердловская обл.</span>
                </div>
                <div className="header-right">
                    <FaWhatsapp size={20} color="#fff"/>
                    <FaTelegram size={20} color="#fff"/>
                    <span>(343)789-123</span>
                    <span>пн-вс 8:00 – 21:00</span>
                    <span className="order-call">Заказать звонок</span>
                </div>
            </div>
        </div>
    )
}

