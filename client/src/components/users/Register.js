import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUser } from '../../actions/users';

class Register extends Component {
    onHandleRegistration = (event) => {
        event.preventDefault();

        let name = event.target.name.value;
        let email = event.target.email.value;
        let password = event.target.password.value;

        const data = {
            name,
            email,
            password
        };

        this.props.dispatch(registerUser(data));
    }

    render() {
        let message, isSuccess;
        // if (this.props.response.register.hasOwnProperty('response')) {
        //     isSuccess = this.props.response.register.response.success;
        //     message = this.props.response.register.response.message;
        // }

        return (
            <div>
                <h3>RegisterPage</h3>
                {!isSuccess ? <div>{message}</div> : <Redirect to='login' />}
                <form onSubmit={this.onHandleRegistration}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div>
                        <button>Register</button>
                    </div>
                </form>
                Already have account? <Link to='login'>Login here</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, 'final');
    return { response: state.response }
}

export default connect(mapStateToProps, null)(Register);
