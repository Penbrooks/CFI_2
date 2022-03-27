import React, { useContext, useEffect, useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import AuthService from '../authService';
import { AuthContext } from '../authContext';
import { useHistory } from 'react-router-dom';


function FacebookLoginComponent() {
    const authContext = useContext(AuthContext);
    let history = useHistory()
    const responseFacebook = (res) => {
        const user = {
            username: res.username,
            email: res.email
        }
        AuthService.loginFacebook(user).then(data => {
            const { isAuthenticated, user, message } = data;
            if (message.msgError) {
                localStorage.setItem('facebookusername', JSON.stringify(res.name))
                localStorage.setItem('facebookemail', JSON.stringify(res.email))
                history.push('/signup')
            }
            else if (isAuthenticated) {
                localStorage.setItem('facebookusername', JSON.stringify(res.name))
                localStorage.setItem('facebookemail', JSON.stringify(res.email))
                authContext.setUser({ ...authContext.user, ...user });
                authContext.setIsAuthenticated(isAuthenticated);
                history.push('/edit');
            }
        });
    }
    return (
        <div>
            <FacebookLogin
                appId="663122864621413"
                autoLoad={false}
                fields="name,email"
                icon='fa fa-facebook'
                textButton='&nbsp; Login with Facebook '
                cssClass='facebook btn rounded py-2'
                scope={'public_profile'}
                callback={responseFacebook} />

        </div>
    )
}

export default FacebookLoginComponent
