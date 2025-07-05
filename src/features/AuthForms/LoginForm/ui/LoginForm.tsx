import "./LoginForm.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import type {AppDispatch, RootState} from "../../../../app/providers/store/store.ts";
import {clearError, loginUser} from "../model/loginSlice.ts";
import {useState} from "react";

export default function LoginForm() {
    const dispatch = useDispatch<AppDispatch>();
    // const navigate = useNavigate();

    const {isLoading, error} = useSelector(
        (state: RootState) => state.login
    );

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if (name === 'login') setLogin(value);
        if (name === 'password') setPassword(value);
        if (error) dispatch(clearError());
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);

        const result = await dispatch(loginUser({login, password}));
        if (loginUser.fulfilled.match(result)) {
            alert('вошли')
        }
    };

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         navigate("/profile");
    //     }
    // }, [isAuthenticated]);

    return (
        <div className="login-form-container">
            <form onSubmit={onSubmit} className="auth-form">
                <h1>Вход</h1>

                <label htmlFor="login">ИНН / E-mail / Телефон</label>
                <br/>
                <input
                    id="login"
                    type="text"
                    name="login"
                    value={login}
                    onChange={onChange}
                />

                <label htmlFor="password">Пароль</label>
                <br/>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                />

                <button type="submit" id="login-button" disabled={isLoading}>
                    {isLoading ? "Входим..." : "Войти"}
                </button>

                {submitted && error && <p className="error-message">{error}</p>}

                <p>Еще нет аккаунта? <Link to="/register">Пройдите регистрацию</Link></p>
            </form>
        </div>
    );
}
