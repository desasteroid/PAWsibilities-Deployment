import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Footer.css';
const FooterComponent = ()=>{
    return(
        <div id="FooterContainer">
        <div id="Contact-Container">
            <img src="/logo.svg" alt="logo"/>
            <span className="content">
                <h6>Address</h6>
                <p>Pet Hub<br/>
                    Delhi, India</p>
            </span>
            <span className="content nopadding">
                <h6>Connect</h6>
                <p>
                    <a href = "mailto:PAWsibilities@gmail.com">PAWsibilities@gmail.com</a>
                    <br/><LinkedInIcon className='SocialIcons'/>
                    <GitHubIcon className='SocialIcons'/>
                    <FacebookIcon className="SocialIcons"/>
                </p>
            </span>
        </div>
        <div id="Copyright">
            <h6 id="CopyNotice">Copyright &copy; 2022. All rights reserved.</h6>
        </div>
        </div>
    )
}
export default FooterComponent;