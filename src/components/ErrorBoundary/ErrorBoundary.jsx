import React from 'react';

class ErrorBoundary extends React.Component {
    
    state = {
        hasError: false
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="alert alert-warning" role="alert">
                    <strong>Упс...</strong> Что-то пошло не так, обновите страницу или зайдите позже.
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
