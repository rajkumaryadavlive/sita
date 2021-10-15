import { Card, Col, Container, Row } from "react-bootstrap";

const SlideFirst=()=>{
    return(<>
           
           <Container>
              <Row>
                  <Col md={8} className="m-auto">
                  <Card>
                    <blockquote className="lead text-white-70 text-lh-lg">
                    I followed a link for a job on Front and uploaded my resume. About two hours later, I received an email from an employer looking for someone with my skills. In a week's time and four interviews later I have a fantastic new job! Thanks Front!
                    </blockquote>
                   </Card>
                  </Col>
              </Row>
           </Container>
    
          </>)
}
export default SlideFirst;