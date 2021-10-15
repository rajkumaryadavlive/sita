import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import logo from "../../../assets/images/logo.webp"

const Footer=()=>{
    return(<>
        
        <Container fluid>
             <Row>
              <Col md={3}>
                <Card className="footer-about-card">
                  <Card.Header className="footer-about-header">
                    <Image src={logo} width="100" height="60"/>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text className="text-justify">
                    Our goal is to deliver quality of care in a courteous, respectful, and 
                    compassionate manner. We hope you will allow us to care for you and 
                    strive to be the first and best choice for your family healthcare.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
              <h2 className="footer-item-heading">Top Specialities</h2>

              <ListGroup variant="flush"className="footer-item-list">
                <ListGroup.Item className="footer-Item">Neurology</ListGroup.Item>
                <ListGroup.Item className="footer-Item">Cardiology</ListGroup.Item>
                <ListGroup.Item className="footer-Item">Gastrology</ListGroup.Item>
                <ListGroup.Item className="footer-Item">Pediatric</ListGroup.Item>
             </ListGroup>
              </Col>
              <Col md={3}>
                <h2 className="footer-item-heading"> About</h2>
                <ListGroup variant="flush"className="footer-item-list">
                <ListGroup.Item className="footer-Item">Blog</ListGroup.Item>
                <ListGroup.Item className="footer-Item">Doctors</ListGroup.Item>
                <ListGroup.Item className="footer-Item">Lab Tests</ListGroup.Item>
                <ListGroup.Item className="footer-Item">Career</ListGroup.Item>
              </ListGroup>
              </Col>

              <Col md={3}>
                 <Card>
                   <Card.Body>
                     <Card.Title>
                       Quick Contact
                     </Card.Title>
                     <Card.Text>
                       If you have any questions or need help, 
                       feel free to contact with our team.
                     </Card.Text>
                     <Card.Title className="phone-text">+917999169022</Card.Title>
                      <Card.Text>
                      2307 Beverley Rd Brooklyn, New York 11226 United States.
                      </Card.Text>
                      <Card.Text>
                        Get Direction
                      </Card.Text>
                   </Card.Body>
                 </Card>
              </Col>

             </Row>
         </Container>
         <Container fluid className="footer-strip-container text-center">
             <h3 className="footer-strip-text">All Rights Reserved@2021</h3>
         </Container>
        
    </>)
}
export default Footer;