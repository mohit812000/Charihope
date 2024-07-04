import { NavLink, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, NavDropdown } from "react-bootstrap";
import { useState } from "react";

function Appbar() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const onclickHandeler = () => {
    navigate("/sign-in");
  };
  const logOutHandeler = () => {
    localStorage.clear();
    navigate("/sign-in");
  };

  const homePage = ()=>{
    navigate("/")
  }
  return (
    <Navbar expand="lg" className="bg-white sticky-top navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://demo.ovatheme.com/charihope/wp-content/uploads/2019/05/Logo.svg"
            alt=""
            style={{ height: "65px" }}
          onClick={homePage}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="nav-link" to="/">
              HOME
            </NavLink>
            <NavLink className="nav-link" to="/about">
              ABOUT
            </NavLink>
            <NavLink className="nav-link" to="/compaign">
              COMPAIGN
            </NavLink>
            <NavLink className="nav-link" to="/news">
              NEWS
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              CONTACT US
            </NavLink>

            <Button onClick={onclickHandeler}>Login</Button>

            {/* <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Button onClick={logOutHandeler}>Logout</Button>
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Button onClick={logOutHandeler}>LogOut</Button> */}

            {/* <p>{userData ? userData?.name: " "}</p> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
