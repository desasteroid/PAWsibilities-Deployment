import React from 'react';
import Navbar from './Nav';
import DonationDetails from './DonateForm';
import FooterComponent from '../Home/Footer';
class DonatePage extends React.Component{
    render()
    {
        return(
            <>
                <Navbar/>
                <DonationDetails/>
                <FooterComponent/>
            </>
        )
    }
}
export default DonatePage;