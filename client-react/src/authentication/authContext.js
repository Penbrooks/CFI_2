import React, { createContext, useState, useEffect } from 'react';
import AuthService from './authService';

export const AuthContext = createContext();

export default ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [email, setEmail] = useState('')

    useEffect(() => {
        AuthService.isAuthenticated().then(data => {
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    }, []);
    return (
        <div>
            {!isLoaded ? '' :
                <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, email, setEmail }}>
                    {children}
                </AuthContext.Provider>
            }
        </div>
    )
}