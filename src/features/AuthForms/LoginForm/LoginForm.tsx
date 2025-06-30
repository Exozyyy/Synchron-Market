import {type ChangeEvent, type FormEvent, useState} from "react";
import "./LoginForm.css";

type FormData = {
    login: string;
    password: string;
};

export default function LoginForm() {

    const [formData, setFormData] = useState<FormData>({
        login: "",
        password: "",
    });


    function onChange(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name as keyof FormData]: value,
        }));
    }

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("Form data submitted:", formData);
    }

    return (
        <div className="login-form-container">
            <form onSubmit={onSubmit} className="auth-form">
                <h1>Вход</h1>
                <label htmlFor="login" id="htmlpassword">ИНН/ E-mail/ Телефон</label>
                <br/>
                <input
                    id="login"
                    type="text"
                    name="login"
                    value={formData.login}
                    onChange={onChange}
                />

                <label htmlFor="password" id="htmlpassword">Пароль</label>
                <br/>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={onChange}
                />

                <button type="submit" id="login-button">Войти</button>


                <p>Еще нет аккаунта? <a href="/register">Пройдите регистрацию</a></p>
            </form>
        </div>
    );
}


