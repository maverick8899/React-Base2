import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import config from "../../config";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(config.routes.login);
  };
  //
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to={config.routes.main} className="navbar-brand ">
          Bootstrap
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={config.routes.home} className="nav-link">
              Home
            </NavLink>
            <NavLink to={config.routes.user} className="nav-link">
              User
            </NavLink>
            <NavLink to={config.routes.admin} className="nav-link">
              Admin
            </NavLink>
          </Nav>
          <Nav>
            <button className="btn-login" onClick={handleLogin}>
              Log in
            </button>
            <button className="btn-signup">Sign up</button>
            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item>Login</NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
