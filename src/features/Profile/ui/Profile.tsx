import "./Profile.css"
import type {RootState} from "../../../app/providers/store/store.ts";
import {useSelector} from "react-redux";


export const Profile = () => {
    const profile = useSelector((state: RootState) => state.user.userProfile);
    const loading = useSelector((state: RootState) => state.user.isLoading);
    const error = useSelector((state: RootState) => state.user.error);
    if (loading) return <p>Загрузка профиля...</p>;
    if (error) return <p>Ошибка: {error}</p>;
    if (!profile) return <p>Профиль не найден</p>;
    return (
        <main className="profile-wrapper">
            <div className="profile-header">
                <h1>Личный кабинет</h1>

                <a href="#" className="profile-link">
                    Список моих заявок
                    <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                </a>
            </div>

            <div className="profile-grid">
                <div className="profile-avatar">
                    <div className="avatar-wrapper">
                        <img src="/placeholder.svg?height=192&width=192" alt="Profile" className="avatar-img"/>
                        <button className="upload-button">
                            <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M9 2C7.89 2 7 2.89 7 4V6H5C3.89 6 3 6.89 3 8V20C3 21.11 3.89 22 5 22H19C20.11 22 21 21.11 21 20V8C21 6.89 20.11 6 19 6H17V4C17 2.89 16.11 2 15 2H9M9 4H15V6H9V4M12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9Z"/>
                            </svg>
                            Загрузить фото
                        </button>
                    </div>
                </div>

                <div className="profile-info">
                    <div className="info-columns">
                        <div className="info-block">
                            <InfoItem label="Название компании" value={profile.companyName}/>
                            <InfoItem label="ИНН" value={profile.inn}/>
                            <InfoItem label="Фамилия" value={profile.firstName}/>
                            <InfoItem label="Имя" value={profile.name}/>
                            <InfoItem label="Отчество" value={profile.patronymic}/>
                        </div>

                        <div className="info-block">
                            <InfoItem label="E-mail" value={profile.email}/>
                            <InfoItem label="Телефон" value={profile.phone}/>

                            <div className="subscription info-item">
                                <div className="label">Список активных подписок</div>
                                <div className="green">Старт</div>
                                <div className="subtext">Активна до 16.10.2025</div>
                                <a href="#" className="sub-link">
                                    Подписки →
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="status-footer">
                        <div>
                            <div className="label">Статус</div>
                            <div className="badges">
                                <span className="badge">Активный подрядчик</span>
                                <span className="badge">Активный заказчик</span>
                            </div>
                        </div>

                        <div className="actions">
                            <a href="#">Редактировать профиль</a>
                            <a href="#">
                                Выйти
                                <svg className="icon-small" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

const InfoItem = ({label, value}: { label: string; value: string }) => (
    <div className="info-item">
        <div className="label">{label}</div>
        <div className="value">{value}</div>
    </div>
)
