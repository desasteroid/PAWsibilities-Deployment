import React from 'react';
import FooterComponent from '../Home/Footer';
import Navbar from '../NavBar';
import "./Dashboard.css";
import DonateCards from './DonatedCards';
import ReviewPage from './Review';
function DashboardPage () {

    const u = localStorage.getItem("logged-in-username");

        return(
            <div className="Dashboard-main-container">
                <Navbar/>
                <div className="welcome-message">
                    <h1 id="message">Welcome <span id="username">{u}</span></h1>
                </div>
                <h3 id="donate-text-header">Your Pets for Donation</h3>
                <DonateCards/>
                <ReviewPage/>
                <FooterComponent/>
            </div>
        );

}
export default DashboardPage;
