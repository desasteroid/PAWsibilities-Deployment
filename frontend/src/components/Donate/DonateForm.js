import React,{useState} from 'react';
import {useHistory} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Axios from "axios";
import ErrorNotice from '../../ErrorNotice';
import "./DonateForm.css";
import {baseUrl} from '../../config';

function DonationDetails(){

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [address, setAddress] = useState("");
    const [petname, setPetName] = useState("");
    const [category, setCategory] = useState("");
    const [age, setAge] = useState("");
    const [description, setDescription] = useState("");
    const [kind, setKind] = useState("");
    
    const [error,setError]=useState();
    const history=useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
        const u=localStorage.getItem("logged-in-username");
        if(u===username){ 
        const newDonate = {
            username,
            name,
            phone_number,
            address,
            petname,
            category,
            age,
            description,
            kind
            
        };
         await Axios.post(
            `${baseUrl}/users/donate`,
            newDonate
        );
        history.push("/dashboard");
         }else {alert("Please Enter Your Username");}
    } catch (err){
        err.response.data.msg && setError(err.response.data.msg);
    }
    };

    return(
        <div>
            <h1 id="header">Donation Request Form</h1>
            {error && (<ErrorNotice message={error} clearError={ ()=> setError(undefined)}/>)}

            <Form validate="true" id="Form" onSubmit={submit}>
                    <Form.Group as={Row} md="4" controlId="validationCustomUsername" className="form-field">
                        <Form.Label className="Label">Username</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            aria-describedby="inputGroupPrepend"
                            required
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalName" className="form-field">
                            <Form.Label className="Label">
                            Name
                            </Form.Label>
                            <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalAddress" className="form-field">
                            <Form.Label className="Label">
                            Address
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Residential Address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                    </Form.Group>

                    <Form.Row>

                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label className="Label">Pet Name</Form.Label>
                        <Form.Control value={petname} placeholder="ex: ozzy" onChange={(e) => setPetName(e.target.value)} required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label className="Label">Pet Age</Form.Label>
                        <Form.Control value={age} placeholder="ex: 4" onChange={(e) => setAge(e.target.value)} required/>
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label className="Label">Phone No.</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
                            </InputGroup.Prepend>
                        <Form.Control type="tel" pattern="[6-9]{1}[0-9]{9}" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} required/>
                        </InputGroup>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group as={Row} controlId="formHorizontalName" className="form-field">
                            <Form.Label className="Label">
                            Category
                            </Form.Label>
                            <Form.Control type="text" placeholder="ex: Dog" value={category} onChange={(e) => setCategory(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalAddress" className="form-field">
                            <Form.Label className="Label">
                            Description
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Description Of Your Pet" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalAddress" className="form-field">
                            <Form.Label className="Label">
                            Kind of owner you want
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Describe What Kind Of Owner You Want" value={kind} onChange={(e) => setKind(e.target.value)} required/>
                    </Form.Group>

                    <div id="button">
                            <Button type="submit">Submit</Button>
                        </div>
                    </Form>
                </div>
        );
}
export default DonationDetails;











