import React from 'react';
import axios from 'axios';

const url = 'http://localhost:3300';
const initialUser = {
    username: '',
    password: '',
}

export default class Register extends React.Component {
    constructor(props){
        super(props);
            this.state={
                user: {...initialUser},
                message: '',
            }
    }

    inputHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ user: {...this.state.user, [name]:value }})
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3300/api/register`, this.state.user)
        .then(res => {
            if (res.status === 201) {
                this.setState({
                    message: 'Registration Successful',
                    user: {...initialUser },
                })
            } else {
                throw new Error();
            }
        })
        .catch(err => {
            this.setState({
                message: 'Registration Failed',
                user: {...initialUser },
            })
        });
    }

    render() {
        return(
            <form classname='register-form' onSubmit={this.submitHandler}>
            <label htmlFor='Username'>Username</label>
            <input 
                type="text"
                placeholder='Type your new username' 
                id="username" 
                name="username" 
                value={this.state.user.username} 
                onChange={this.inputHandler}
            />
            <label htmlFor='Password'>Password</label>
            <input  
                type='text'
                placeholder='Type your new password'
                id='password'
                name='password'
                value={this.state.user.password}
                onChange={this.inputHandler}
            />

            <button type='submit'>Submit</button>
            </form>
        )}
}