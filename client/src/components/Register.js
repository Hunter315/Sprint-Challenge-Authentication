import React from 'react';


export default class Register extends React.Component {
    constructor(props){
        super(props);
            this.state={
                user: {...initialUser},
                message: '',
            }
    }

    render() {
        return(
            <form classname='register-form'>
            <label htmlFor='Username'>Username</label>
            <input 
                type="text"
                placeholder='Type your new username' 
                id="username" 
                name="username" 
                value={this.state.user.username} 
                onChange={this.inputHandler}
            />





            </form>
        )}
}