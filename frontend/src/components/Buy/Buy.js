import React from 'react';
import FooterComponent from '../Home/Footer';
import ContentContainer from './Content';
import Navbar from './Nav';
class BuyPets extends React.Component{
    render()
    {
        return(
            <div className="Buy-Container">
                <Navbar/>
                <ContentContainer/>
                <FooterComponent/>
            </div>
        )
    }
}
export default BuyPets;