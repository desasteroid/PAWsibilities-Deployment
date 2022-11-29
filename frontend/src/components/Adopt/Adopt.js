import React,{Component} from 'react';
import Navbar from './Nav';
import FooterComponent from '../Home/Footer';
import Axios from 'axios';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck';
import "./Adopt.css";
import {baseUrl} from '../../config';
class AdoptPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             details: []
        }
    }
    componentDidMount() {
        console.log("Triggered");
        Axios.get(`${baseUrl}/users/adopt`)
        .then((response) => {
            this.setState({details: response.data});
        })
        .catch(() =>{
              alert("Internal Server Error");

        })
    }

   
    render() {
        const { details } = this.state
        return(
                <div>
                <Navbar/>
                <CardDeck>
                <div className="adopt-card-container">
                    {
                        details.length ?
                        details.map((detail,index) => 
                            <div key={index} className="c1">
                                <Card style={{ width: '15rem' }} className="mb-2" >
                                <Card.Body>
                                <Card.Title>{detail.petname}</Card.Title>
                                <Card.Text>
                                Category: {detail.category}
                                </Card.Text>
                                <Card.Text>
                                Age: {detail.age}
                                </Card.Text>
                                <Card.Text>
                                Description: {detail.description}
                                </Card.Text>
                                <Card.Text>
                                Requirements: {detail.kind}
                                </Card.Text>
                                <Card.Text>
                                Address: {detail.address}
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">{detail.name}    :  </small>
                                <small className="text-muted">{detail.phone_number}</small>
                                </Card.Footer>
                            </Card>
                            </div>
                        ) : null
                    }
                    
                </div>
                </CardDeck>
                <FooterComponent/>
                </div>
                
        )
        }
}
export default AdoptPage;
