import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Navbar,Container,Nav, NavDropdown } from "react-bootstrap";
import logo from "../../../assets/images/logo.webp"
const Navigation=({handleShow})=>{
  const logged = useSelector((state) => state.loggedIn);

    return(<>
         <Navbar  variant="dark">
            <Container fluid>
            <Navbar.Brand>
              <Link to="/"> 
              <img
              src={logo}
              width="80"
              height="55"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Link>
           
            </Navbar.Brand>
            
            <Nav className="justify-content-center navbar-center-manu">
            <Nav><Link to="/doctors" className="nav-link">DOCTORS</Link></Nav>
            <Nav.Link href="#features">PHARMACY</Nav.Link>
            <Nav.Link href="#features">LAB TESTS</Nav.Link>
            <Nav.Link href="#pricing">COVID-19</Nav.Link>
            </Nav>
            <Nav className="justify-content-end nav-login">
              <Nav.Link href="#">
              <div class="jss23 ">
                <div class="jss13 jss16 ">
                  {logged?<div id="loginPopup" onClick={handleShow} class="jss17 jss18" title="Login/SignUp">
                    <span class="icon-ic_account"></span>
                  </div>:<div id="loginPopup" onClick={handleShow} class="jss17 jss18" title="Login/SignUp">
                    <span class="icon-ic_account"></span>
                  </div>}
                  </div>
               </div>
              </Nav.Link>
            </Nav>
            </Container>
         </Navbar>
        </>);
}
export default Navigation;