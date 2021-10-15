import { Card, Col, Image, Row } from "react-bootstrap";

const LabTestSlide=({banner})=>{
    return(<>
            <Card className="speciality-card">
                <Row className="spaciality-card-row">
                    <Col md={4}>
                    <Image src={banner} roundedCircle className="speciality-image"/>
                    </Col>
                    <Col md={8} className="speciality-text">
    
                    <Card.Title>Dermatology</Card.Title>
                    <Card.Text>
                        Spacialist for skin and hair treatment
                     </Card.Text>

                    </Col>
                </Row>
                
            </Card>
           </>
            );
}
export default LabTestSlide;