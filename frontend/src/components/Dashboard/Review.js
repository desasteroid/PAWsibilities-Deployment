import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ErrorNotice from '../../ErrorNotice';
import SuccessNotice from '../../SuccessNotice';
import Axios from "axios";
import './Review.css';
import {baseUrl} from '../../config';
function ReviewPage (){

    const [firstname, setFirst] = useState("");
    const [lastname, setLast] = useState("");
    const [think, setThink] = useState("");
    const [improve, setImprove] = useState("");
    const [suggestion, setSuggestion] = useState("");

    const [error,setError]=useState();
    const [succ,setSucc]=useState();

    const submit = async (e) => {
        e.preventDefault();
        try {
        const newReview = {
            firstname,
            lastname,
            think,
            improve,
            suggestion,
            
        };
         await Axios.post(
            `${baseUrl}/users/review`,
            newReview
        );
        setSucc("Thank you for the review !")
        setFirst("");
        setLast("");
        setThink("");
        setImprove("");
        setSuggestion("");
    } catch (err){
        err.response.data.msg && setError(err.response.data.msg);
    }
    };
    
        return(
            <div className="main-container">
            <h2 id="review-header">Review Form</h2>
                <h4 id="request-header">Satisfaction of our customers is our utmost priority.Please fill the review form below and share your experience.</h4>
                {error && (<ErrorNotice message={error} clearError={ ()=> setError(undefined)}/>)}
                {succ && (<SuccessNotice message={succ} clearNotice={ ()=> setSucc(undefined)}/>)}
                <div className= "form-container">
                    <form validate="true" onSubmit={submit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label className="Label">First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" value={firstname} onChange={(e) => setFirst(e.target.value)} required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label className="Label">Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" value={lastname} onChange={(e) => setLast(e.target.value)}required/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group as={Row} controlId="formGridReviewText">
                        <Form.Label className="Label">What do you think about us ?</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Enter Review" value={think} onChange={(e) => setThink(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formGridImprovementsText">
                        <Form.Label className="Label">How can we improve ?</Form.Label>
                        <Form.Control as="textarea" rows={3} value={improve} placeholder="Enter the improvements we can make to enhance the user experience" onChange={(e) => setImprove(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formGridSuggestionsText">
                        <Form.Label className="Label">Suggestions/Additional Comments</Form.Label>
                        <Form.Control as="textarea" rows={3} value={suggestion} placeholder="Please enter any suggestions or comments you have for us" onChange={(e) => setSuggestion(e.target.value)} required/>
                    </Form.Group>
                    <div id="button">
                            <Button type="submit">Submit Feedback</Button>
                    </div>
                    </form>
                </div>
            </div>
        )

}
export default ReviewPage;
