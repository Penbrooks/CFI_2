import React, { useContext, useState, useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import AuthService from '../authService';
import { AuthContext } from '../authContext';
import { useHistory } from 'react-router-dom';
function GoogleLoginComponent() {
    const authContext = useContext(AuthContext);
    let history = useHistory()
    const responseGoogle = (response) => {
        const user = { username: response.profileObj.name, email: response.profileObj.email }

        AuthService.loginGoogle(user).then(data => {
            const { isAuthenticated, user, message } = data;
            if (message.msgError) {
                localStorage.setItem('googleusername', JSON.stringify(response.profileObj.name))
                localStorage.setItem('googleemail', JSON.stringify(response.profileObj.email))
                history.push('/signup')
            }
            else if (isAuthenticated) {
                localStorage.setItem('googleusername', JSON.stringify(response.profileObj.name))
                localStorage.setItem('googleemail', JSON.stringify(response.profileObj.email))
                authContext.setUser({ ...authContext.user, ...user });
                authContext.setIsAuthenticated(isAuthenticated);
                history.push('/edit');
            }
        });
    }
    const responseFailureGoogle = (res) => {
        console.log(res)
    }

    return (
        <>
            <GoogleLogin
                clientId="68679119571-t7cdi4n146r0cangrqba4aksh7561daf.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                className={'mb-3 mt-1 google-login rounded'}
                onFailure={responseFailureGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </>
    )
}

export default GoogleLoginComponent
