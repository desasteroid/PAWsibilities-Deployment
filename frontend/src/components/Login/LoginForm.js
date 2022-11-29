import React,{useState,useContext} from 'react';
import UserContext from "../../context/UserContext";
import {useHistory} from "react-router-dom";
import './LoginForm.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Axios from "axios";
import ErrorNotice from '../../ErrorNotice';
import {baseUrl} from '../../config';
function LoginDetails (){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError]=useState();

    const { setUserData } =useContext(UserContext);
    const history=useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
        const loginUser = {
            username,
            password,
        };
        const loginRes = await Axios.post(`${baseUrl}/users/login`,loginUser);
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user
        });
        localStorage.setItem("auth-token",loginRes.data.token);
        localStorage.setItem("logged-in-username",loginRes.data.user["username"]);
        history.push("/dashboard")
    } catch (err){
        if(err)
            err.response.data.msg && setError(err.response.data.msg);
    }
    };

        return(
            <div>
                <h1 id="header">Login</h1>
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
                        onChange={e => setUsername(e.target.value)}
                        aria-describedby="inputGroupPrepend"
                        required
                        />
                    </InputGroup>
                </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword" className="form-field">
                        <Form.Label className="Label">
                        Password
                        </Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
                    </Form.Group>
                    <div id="button">
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </div>
        )
}
export default LoginDetails;
