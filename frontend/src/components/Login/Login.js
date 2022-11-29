import React from 'react';
import LoginDetails from './LoginForm';
import Navbar from './Nav';
import FooterComponent from '../Home/Footer';
class LoginPage extends React.Component{
    render()
    {
        return(
            <>
                <Navbar/>
                <LoginDetails/>
                <FooterComponent/>
            </>
        )
    }
}
export default LoginPage;