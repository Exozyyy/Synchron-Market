import './RegisterForm.css';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerUser, setRegistrationData} from "../model/registerSlice";
import type {AppDispatch} from "../../../../app/providers/store/store";
import type {RegistrationModel} from "../model/registerModel";
import {useRegister} from "../lib/hooks/useRegister";
import React, {useState} from "react";

export default function RegisterForm() {
    const {registrationData} = useRegister();
    const dispatch = useDispatch<AppDispatch>();

    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {id, value, type} = e.target as HTMLInputElement;
        const checked = (e.target as HTMLInputElement).checked;
        const fieldValue = type === 'checkbox' ? checked : value;
        dispatch(setRegistrationData({field: id as keyof RegistrationModel, value: fieldValue}));

        if (id === 'repeatPassword') {
            setRepeatPassword(value);
        } else {
            dispatch(setRegistrationData({field: id as keyof RegistrationModel, value: fieldValue}));
        }

        if (id === 'password' || id === 'repeatPassword') {
            setPasswordError(false);
        }

    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (registrationData.password !== repeatPassword) {
            setPasswordError(true);
            return;
        }

        dispatch(registerUser(registrationData));
    };

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

                    <form onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-column">
                                <div className="form-field">
                                    <label htmlFor="companyName" className="form-label">Название компании</label>
                                    <input id="companyName" type="text" className="form-input"
                                           value={registrationData.companyName} onChange={handleChange}/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="inn" className="form-label">ИНН</label>
                                    <input id="inn" type="text" className="form-input" value={registrationData.inn}
                                           onChange={handleChange}/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="name" className="form-label">Фамилия</label>
                                    <input id="name" type="text" className="form-input" value={registrationData.name}
                                           onChange={handleChange}/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="firstName" className="form-label">Имя</label>
                                    <input id="firstName" type="text" className="form-input"
                                           value={registrationData.firstName} onChange={handleChange}/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="patronymic" className="form-label">Отчество (если имеется)</label>
                                    <input id="patronymic" type="text" className="form-input"
                                           value={registrationData.patronymic} onChange={handleChange}/>
                                </div>
                            </div>

                            <div className="form-column">
                                <div className="form-field">
                                    <label htmlFor="email" className="form-label">E-mail</label>
                                    <input id="email" type="email" className="form-input" value={registrationData.email}
                                           onChange={handleChange}/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="phone" className="form-label">Телефон</label>
                                    <input id="phone" type="tel" className="form-input" value={registrationData.phone}
                                           onChange={handleChange}/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="password" className="form-label">Пароль</label>
                                    <input
                                        id="password"
                                        type="password"
                                        className="form-input"
                                        value={registrationData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="repeatPassword" className="form-label">Повторите пароль</label>
                                    <input
                                        id="repeatPassword"
                                        type="password"
                                        className={`form-input ${passwordError ? 'error' : ''}`}
                                        value={repeatPassword}
                                        onChange={handleChange}
                                    />
                                    {passwordError && <span className="error-message">Пароли не совпадают</span>}
                                </div>

                                <div className="checkbox-group">
                                    <div className="checkbox-item">
                                        <input type="checkbox" id="personalDataConsent" className="checkbox-input"
                                               checked={registrationData.personalDataConsent} onChange={handleChange}/>
                                        <label htmlFor="personalDataConsent" className="checkbox-label">
                                            Согласие на обработку <span className="link">персональных данных</span>
                                        </label>
                                    </div>
                                    <div className="checkbox-item">
                                        <input type="checkbox" id="infoAdConsent" className="checkbox-input"
                                               checked={registrationData.infoAdConsent} onChange={handleChange}/>
                                        <label htmlFor="infoAdConsent" className="checkbox-label">
                                            Согласие на получение информационно-рекламных материалов
                                        </label>
                                    </div>
                                </div>

                                <div className="form-actions">
                                    <Link to="/login" className="back-button">назад</Link>
                                    <button type="submit" className="submit-button">Перейти к подпискам</button>
                                </div>
                                <p className="footer-text">
                                    Нажимая «Перейти к подписям», вы принимаете условия <span className="link">Публичной оферты</span>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
