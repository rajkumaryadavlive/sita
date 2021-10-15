import { Card, Col, Container, Form, Row,DropdownButton,ButtonGroup,Dropdown } from "react-bootstrap";
import DoctorCard from "./DoctorCard";
const DoctorsPage=()=>{
    return(<>
            <Container  className="doctor-search-container">
                <Row>
                    <Col md={12}>
                    <Card>
                        <Form>
                        <Row>
                           <Col md={4}>
                            <Form.Group>
                            <Form.Select size="lg">
                                <option> Select Speciality</option>
                            </Form.Select>
                            </Form.Group>
                          </Col>
                        
                        <Col md={8} className="doctor-search">
                            <Form.Group>
                            <Form.Control size="lg" type="text" placeholder="Search Here" />
                            </Form.Group>
                        </Col>
                       </Row>
                    </Form>
                    </Card>
                </Col>
                </Row>
            </Container>
            

            <Container className="filter-container">
               <Card className="filter-card">
               <Row className="text-center">
                 <Col sm={4}>
                     <Row className="filter-row text-start">
                      <p>sort by:<DropdownButton
                        as={ButtonGroup}
                        align={{ lg: 'end' }}
                        title="Availability"
                        id=""className="filter-btn"
                        >
                        <Dropdown.Item eventKey="1">Availability</Dropdown.Item>
                        </DropdownButton>
                    </p></Row>
                 </Col> 
                 
                 <Col sm={3}>
                  
                 <Row className="filter-row"><p>
                 <Form.Check
                    inline
                    label="Online Consults"
                    name="group1"
                    type={'checkbox'}
                    id={``}/>
                    </p></Row>

                 </Col>

                 <Col sm={3}>
                 <Row className="filter-row"><p>
                 <Form.Check
                    inline
                    label="In Person"
                    name="group1"
                    type={'checkbox'}
                    id={``}/></p></Row>

                 </Col>
                  
                 <Col sm={2}>
                 <Row className="filter-row"><p>Filter</p></Row>


                 </Col>  
                </Row>
               </Card>
            </Container>


            <Container className="doctors-container">
                <Row></Row>
                <Row>
                   
                   <DoctorCard />

                   <DoctorCard />

                   <DoctorCard />

                   <DoctorCard />

                    <DoctorCard />

                    <DoctorCard />

                </Row>
            </Container>
          </>
          )
}
export default DoctorsPage;