import React, { Component } from 'react'
import '../App.css'
import logo  from '../logo.svg'
import { LoadingBar } from 'react-redux-loading'

class NotFound extends Component {
    render() {

        return (
            <div className='login-box'>
                <LoadingBar />
                <div className='login-box-header'>
                    <h2>404 Page not found</h2>
                </div>
                <div className='login-body'> 
                        <img src={logo} alt='login-logo' className='login-logo'/>
                    <h3>Page not Found, please check the URL and make sure it's a valid one.</h3>
                </div>
            </div>
        )
    }
}


export default NotFound