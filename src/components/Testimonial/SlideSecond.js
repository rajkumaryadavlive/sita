import { Card, Row,Col ,Image} from "react-bootstrap";
import imgIcon from '../../assets/images/testimonial/img2.jpg'
const SlideSecond=()=>{
    return(<>
        
           <Card className="rounded-pill m-2 p-2">
               <Row className="testimonial-row">
                   <Col md={4}>
                       <Image src={imgIcon} roundedCircle className="testimonial-image" />
                   </Col>
                   <Col md={6}>
                      <h4> Rajkumar </h4>
                      <p>Software Engineer</p>
                   </Col>
               </Row>
           </Card>
          
           </>
          )
}
export default SlideSecond;