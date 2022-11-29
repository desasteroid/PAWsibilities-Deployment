import React from 'react';
import Navbar from './Nav';
import SignUpDetails from './SignUpForm';
import FooterComponent from '../Home/Footer';
class SignUpPage extends React.Component{
    render()
    {
        return(
            <>
                <Navbar/>
                <SignUpDetails/>
                <FooterComponent/>
            </>
        )
    }
}
export default SignUpPage;