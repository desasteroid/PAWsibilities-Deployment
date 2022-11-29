import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck';
import './DonatedCards.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Axios from "axios";
import { Button } from '@material-ui/core';
import {baseUrl} from '../../config';
class DonateCards extends React.Component
{
    constructor(props) {
        super(props)
    
        this.state = {
             details: [],
             id:""
        }
    }
    componentDidMount() {
        const uname = localStorage.getItem("logged-in-username");
        const dashbody = {
            uname
        }
        Axios.post(`${baseUrl}/users/dashboard`,dashbody)
        .then((response) => {
            this.setState({details: response.data});
        })
        .catch(() =>{
              alert("Internal Server Error");

        })
    }

    render()
    { const { details } = this.state
        return(
            <CardDeck>  
            <div className="dashboard-container">
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
                                </Card.Body>
                                <Card.Footer>
                                <Button onClick={()=>{
                                    const _id = detail._id
                                    let deletebody={
                                        _id
                                    }
                                     Axios.post(`${baseUrl}/users/delete`,deletebody)
                                     .then((response) => {
                                        console.log(response);
                                        document.location.reload();

                                    })
                                    .catch(() =>{
                                          alert("Internal Server Error");
                            
                                    })

                                }}
                                
                                className="Deleterow"><span className="icon"><DeleteIcon/></span></Button>
                                </Card.Footer>
                            </Card>
                    </div> ) : null
                }
            </div>
            </CardDeck>
        )
    }
}
export default DonateCards;
