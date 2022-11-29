import React,{useContext} from "react";
import { NavLink } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import UserContext from "../context/UserContext";
import {useHistory} from "react-router-dom"; 
import "./NavBar.css";

function NavBar() {

    const {userData,setUserData} = useContext(UserContext);
    const history=useHistory();

    const logout = () =>{
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token","");
        history.push("/");
    }
    const show = () =>{
        history.push("/login");
    }
      
    if(userData.user)
            return(
            <Navbar bg="dark" variant="dark" id="Navigation">
            <Navbar.Brand href="/dashboard">
                <img
                alt=""
                src= "/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                PAWsibilities
            </Navbar.Brand>
            <Nav className="router-links container-fluid">
                <NavLink href="/adopt" className="link">Adopt</NavLink>
                <NavLink href="/donate" className="link">Donate</NavLink>
                <NavLink href="/buy" className="link">Buy</NavLink>
                <NavLink className="ml-auto link" onClick={logout}>Log out</NavLink>
            </Nav>
            </Navbar>
        );
    else
             return(
                <Navbar bg="dark" variant="dark" id="Navigation">
                <Navbar.Brand href="/">
                    <img
                    alt=""
                    src= "/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    PAWsibilities
                </Navbar.Brand>
                <Nav className="router-links container-fluid">
                    <NavLink onClick={show} className="link">Adopt</NavLink>
                    <NavLink onClick={show} className="link">Donate</NavLink>
                    <NavLink href="/buy" className="link">Buy</NavLink>
                    <NavLink href="/login" className="ml-auto link">Login</NavLink>
                    <NavLink href="/signup" className="link">Sign Up</NavLink>
                </Nav>
                </Navbar>
      );

}

export default NavBar;