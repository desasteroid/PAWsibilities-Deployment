import React from 'react';
import './Content.css';
import Alert from 'react-bootstrap/Alert';
const ContentContainer = ()=>{
    return(
        <div className="main-container">
            <h1 className="heading">Pet Shops at Famous Places in Bangalore</h1>
            <div className="content-container">
                <h2 className="placename">Jayanagar</h2>
                <Alert variant = "primary">
                    <p className="locations ">Pet Choice<br/>No.321/A, 1st A Main, Jayanagar 7th Block, Bangalore - 560070, Near Yediyur Bus Stand<br/>Phone: +91-7947156069<br/>Website - http://www.petchoice.in</p>
                    <p className="locations">
                    MYPETBUDDY.IN - The Pet Store<br/>
                    #133, Pakshiraj, 33rd Cross, 4nd Block, JayaNagar East, Bengaluru, Karnataka 560011<br/>
                    Phone: +91-9480796767<br/>
                    Website - http://mypetbuddy.in
                    </p>
                    <p>
                    PUPS - Pet Care Store<br/>
                    620, 2nd Main Rd, Binnamangala, Stage 1, Indiranagar, Bengaluru, Karnataka 560038
                    <br/>
                    Phone: +91-7204321538<br/>
                    Website - http://www.petcarestore.in
                    <br/>
                    </p>
                </Alert>
            </div>

            <div className="content-container">
                <h2 className="placename">Kormangala</h2>
                <Alert variant = "success">
                    <p className="locations ">
                    Glenands Pet Stores<br/>
                    474, 1st Cross Rd, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka-560098
                    <br/>
                    Phone: +91-8040927524<br/> 
                    Website: http://www.glenandspetshop.com  
                    </p>
                    <p className="locations">
                    PET SMILE
                    <br/>
                    #537,1St MAIN, NEAR BETHANY SCHOOL koramangala 8th block, Bengaluru, Karnataka 560095
                    <br/>
                    Phone: +91-9886987277<br/>
                    Website: http://www.petsmileshop.com
                    </p>
                    <p>
                    Paw Paradise
                    <br/>
                    14/A, 1st Main Cross, Jakkasandra, 1st Block Koramangala, Koramangala, Bengaluru, Karnataka 560034
                    <br/>
                    Phone: +91-9632234008<br/>
                    Website: http://www.pawparadise.in
                    </p>
                </Alert>
            </div>

            <div className="content-container">
                <h2 className="placename">Bannerghatta</h2>
                <Alert variant = "danger">
                    <p className="locations ">
                    Pillus Pet Paradise
                    <br/>
                    Shop No 668, Shantiniketan Main Road, Btm 6th Stage, Arakere Bannerghatta Rd, Bengaluru, Karnataka 560076
                    <br/>
                    Phone: +91-9663858873<br/>
                    Website: http://www.pilluspetparadise.in
                    </p>
                    <p className="locations">
                    Usha Pet Shop
                    <br/>
                    #159/4, Next To Vijaya Bank, Bannerghatta Main Rd, Kempanayakanahalli, Bannerughatta, Bengaluru, Karnataka 560083
                    <br/>
                    Phone: +91-9036300271<br/>
                    Website: http://www.ushapetshop.in
                    </p>
                    <p>
                    Pet Universe
                    <br/>
                    Near, No-9, 8th Cross, Bannerghatta Main Road, Park Road, Bismillahnagar, Bengaluru, Karnataka 560029
                    <br/>
                    Phone: +91-9845396665<br/>
                    Website: http://www.petuniverse.in
                    </p>
                </Alert>
            </div>
        </div>
    )
}
export default ContentContainer;