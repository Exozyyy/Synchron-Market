import './RegisterForm.css'
import {Link} from "react-router-dom";


export default function RegisterForm() {
    return (
        <div className="registration-page">
            <div className="registration-container">
                <div className="decorative-elements">
                    <div className="decorative-line-1"></div>
                    <div className="decorative-line-2"></div>
                    <div className="decorative-dot-1"></div>
                    <div className="decorative-line-3"></div>
                </div>

                <div className="header">
                    <h1>
                        <span className="brand-synchro">Синхрон.</span>
                        <span className="brand-market">Маркет</span>
                    </h1>
                </div>
                <div className="form-container">
                    <h2 className="form-title">Регистрация</h2>
                    <div className="user-type-tabs">
                        <button className="tab-button active">Заказчик</button>
                        <button className="tab-button inactive">Подрядчик</button>
                    </div>

                    <div className="form-grid">
                        <div className="form-column">
                            <div className="form-field">
                                <label htmlFor="company" className="form-label">
                                    Название компании
                                </label>
                                <input id="company" type="text" className="form-input"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="inn" className="form-label">
                                    ИНН
                                </label>
                                <input id="inn" type="text" className="form-input"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="direction" className="form-label">
                                    Направление деятельности
                                </label>
                                <select id="direction" className="form-select">
                                    <option value="">Выберите направление</option>
                                    <option value="variant1">Вариант 1</option>
                                    <option value="variant2">Вариант 2</option>
                                    <option value="variant3">Вариант 3</option>
                                </select>
                            </div>
                            <div className="form-field">
                                <label htmlFor="lastname" className="form-label">
                                    Фамилия
                                </label>
                                <input id="lastname" type="text" className="form-input"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="firstname" className="form-label">
                                    Имя
                                </label>
                                <input id="firstname" type="text" className="form-input"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="middlename" className="form-label">
                                    Отчество (если имеется)
                                </label>
                                <input id="middlename" type="text" className="form-input"/>
                            </div>
                        </div>
                        <div className="form-column">
                            <div className="form-field">
                                <label htmlFor="email" className="form-label">
                                    E-mail
                                </label>
                                <input id="email" type="email" className="form-input"/>
                            </div>

                            <div className="form-field">
                                <label htmlFor="phone" className="form-label">
                                    Телефон
                                </label>
                                <input id="phone" type="tel" className="form-input"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="password" className="form-label">
                                    Пароль
                                </label>
                                <input id="password" type="password" className="form-input"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="repeatPassword" className="form-label">
                                    Повторите пароль
                                </label>
                                <input id="repeatPassword" type="password" className="form-input error"/>
                                <span className="error-message">Неверно указано</span>
                            </div>
                            <div className="checkbox-group">
                                <div className="checkbox-item">
                                    <input type="checkbox" id="personalData" className="checkbox-input" defaultChecked/>
                                    <label htmlFor="personalData" className="checkbox-label">
                                        Согласие на обработку <span className="link">персональных данных</span>
                                    </label>
                                </div>
                                <div className="checkbox-item">
                                    <input type="checkbox" id="marketing" className="checkbox-input"/>
                                    <label htmlFor="marketing" className="checkbox-label">
                                        Согласие на получение информационно-рекламных материалов
                                    </label>
                                </div>
                            </div>
                            <div className="form-actions">
                                <Link to="/login" className="back-button">
                                    назад
                                </Link>
                                <button type="submit" className="submit-button">
                                    Перейти к подписям
                                </button>
                            </div>
                            <p className="footer-text">
                                Нажимая «Перейти к подписям», вы принимаете условия <span
                                className="link">Публичной оферты</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
