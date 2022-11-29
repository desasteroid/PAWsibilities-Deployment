import React,{useState,useContext} from 'react';
import UserContext from "../../context/UserContext";
import {useHistory} from "react-router-dom";
import './SignUpForm.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Axios from "axios";
import ErrorNotice from '../../ErrorNotice';
import {baseUrl} from '../../config';
function SignUpDetails(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [error,setError]=useState();

    const { setUserData } =useContext(UserContext);
    const history=useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
        const newUser = {
            username,
            password,
            name,
            email,
            address,
            city,
            phone_number
        };
         await Axios.post(
            `${baseUrl}/users/signup`,
            newUser
        );
        const loginRes = await Axios.post(`${baseUrl}/users/login`,{
            username,
            password
        });
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user
        });
        localStorage.setItem("auth-token",loginRes.data.token);
        localStorage.setItem("logged-in-username",loginRes.data.user["username"]);
        history.push("/dashboard");
    } catch (err){
        err.response.data.msg && setError(err.response.data.msg);
    }
    };
    
        return(
                <div>
                    <h1 id="header">Sign Up</h1>
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
    
                        <Form.Group as={Row} controlId="formHorizontalPassword" className="form-field">
                            <Form.Label className="Label">
                            Password
                            </Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalName" className="form-field">
                            <Form.Label className="Label">
                            Name
                            </Form.Label>
                            <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalEmail" className="form-field">
                            <Form.Label className="Label">
                            E-mail Address 
                            </Form.Label>
                            <Form.Control type="email" placeholder="E-mail Address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalAddress" className="form-field">
                            <Form.Label className="Label">
                            Address
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Residential Address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                        </Form.Group>
                        <Form.Row>

                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label className="Label">City</Form.Label>
                        <Form.Control value={city} onChange={(e) => setCity(e.target.value)} required/>
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
                    <Form.Group as={Row} controlId="formHorizontalCheck" id="termscond">
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check className="Label" label="I agree to the Terms and Conditions." required/>
                        </Col>
                    </Form.Group>

                        <div id="button">
                            <Button type="submit">Register</Button>
                        </div>
                    </Form>
                </div>
        )
}
export default SignUpDetails;
