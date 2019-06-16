import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Добро пожаловать!</h4>
                <h6 className="card-subtitle mb-2 text-muted">Тематический блог</h6>
                <p className="card-text">
                Вы можете просматривать посты других пользоватлей, так и писать свои,
                оценивать их и оставлять свои комментарии.
                </p>
                <Link to="/posts/" className="card-link">Читать посты</Link>
                <Link to="/new-post" className="card-link">Создать свой пост</Link>
            </div>
        </div>
    )
}

export default StartPage;
