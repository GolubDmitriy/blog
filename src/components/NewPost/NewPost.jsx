import React from 'react';
import { connect } from 'react-redux';

class NewPost extends React.Component {
    
    state = {
        valueTitle: '',
        valueBody: '' 
    }

    sendNewPost = event => {
        event.preventDefault();
        console.log(this.state.valueBody, this.state.valueTitle)
    }

    changeValueTitle = event => {
        this.setState({
            valueTitle: event.target.value
        })
    }

    changeValueBody = event => {
        this.setState({
            valueBody: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={ this.sendNewPost }>
                    <input 
                        type="text" 
                        placeholder="title" 
                        value={ this.state.valueTitle }
                        onChange={ this.changeValueTitle } />
                    <input 
                        type="text" 
                        placeholder="body" 
                        value={ this.state.valueBody }
                        onChange={ this.changeValueBody } />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect()(NewPost);
