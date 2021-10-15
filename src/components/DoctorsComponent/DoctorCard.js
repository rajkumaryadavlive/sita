import { Card, Col, Container, Form, Row } from "react-bootstrap";
import banner from '../../assets/images/doctors/d1.webp';
const DoctorCard=()=>{
    return(<>
            <Col sm={4}>
                       <Card className="doctor-card">
                            <Card.Header className="doctor-card-header">
                            <Card.Text>
                               <div className="available-time">
                                   availavle in 7 days
                               </div>
                            </Card.Text>
                            </Card.Header>

                            <Card.Body>
                                <Row>
                                    <Col md={4}>
                                        <div className="doctor-image-outline">
                                         <Card.Img src={banner} className="docotr-image" />
                                        </div>
                                        <div class="jss640">
                                            <span>
                                            <img src="https://newassets.apollo247.com/images/ic-video.svg" alt="Online Consult"/><br />Online</span>
                                            <span>
                                            <img src="https://newassets.apollo247.com/images/fa-solid-hospital.svg" alt="Clinic Visit"/><br />In-Person</span>
                                        </div>
                                    </Col>
                                    <Col md={8}>
                                    <Card.Text>
                                        <h3>Raj Kumar</h3>
                                         <p>Dermatologist |4YRS EXP.</p>
                                        
                                        <div className="doctor-fees">
                                           
                                          <span className="you-pay">You Pay Rs 500</span>
                                         |
                                         <span>CASHBACK UPTO 10%</span>
                                        </div>

                                        <div class="jss633" title="Location">
                                            <p className="mb-0">MBBS, MD (DVL), DNB, Fellow (Dermatosurgery &amp; Lasers)</p>
                                            <p className="mb-0">Apollo Hospitals Secunderabad, Hyderabad</p>
                                        </div>
                                     </Card.Text>
                                    </Col>
                                </Row>

                            </Card.Body>

                            <Card.Footer className="doctor-card-footer">
                               <span>Book Appointment</span>
                            </Card.Footer>
                       </Card>
                    </Col>

                    </>);
}
export default DoctorCard;