import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const StartPage = ({ loadingPosts, posts }) => {
    
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Добро пожаловать!</h4>
                <h6 className="card-subtitle mb-2 text-muted">
                    Тематический блог. { loadingPosts ? null : `Сейчас в блоге ${ posts.length } постов`  }
                </h6>
                <p className="card-text">
                Вы можете просматривать посты других пользоватлей, так и писать свои,
                оценивать их и оставлять свои комментарии.
                </p>
                <Link to="/posts/" className="card-link text-info">Читать посты</Link>
                <Link to="/new-post" className="card-link text-info">Создать свой пост</Link>
            </div>
        </div>
    )
}

const mapStateToProps = ({ loadingPosts, posts }) => {
    return { loadingPosts, posts }
}

export default connect(mapStateToProps)(StartPage);
