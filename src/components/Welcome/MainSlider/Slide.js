import { Card ,Row,Col} from "react-bootstrap";
const Slide=({banner})=>{
    return(<>
    
            <Card className="custom-card">

              <Row>
                <Col md="4">
                <span className="jss55 ">hello there!</span>
                <p className="slide-text "> Always caring about your health, we are here to help you!</p>
                
                <Card className="card-text"> <Card.Body>Book Appointment</Card.Body> </Card>
                <Card className="card-text"> <Card.Body>Book Lab Test</Card.Body> </Card>

                </Col>
                <Col md="8">
                <Card.Img variant="top" src={banner} style={{height:'27rem'}} className="main-slider-image"/>
                </Col>
              </Row>
                
           </Card>
  
  </>);
}
export default Slide;