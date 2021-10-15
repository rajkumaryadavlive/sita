import { Container,Row} from "react-bootstrap";
import Feature from "./Feature/Feature";
import MainSlider from "./MainSlider/MainSlider";
import MainStrip from "./MainStrip/MainStrip";
import find from "../../assets/images/doctor.png"
import consult from "../../assets/images/flask.png"
import Testimonial from "../Testimonial";
import Speciality from "./speciality";
import LabTest from "./LabTest/LabTest";
const WelcomeContainer=()=>{
    return(<>
             <Container fluid>
               <Row className="slide-row">
                 <MainSlider />
              </Row>
             </Container>
             <Container className="pt-3">
               <Row>
               <MainStrip bg={find} Title={"Consult Online"} />
                
               <MainStrip bg={consult} Title={"Book Lab Test"}/>
               <MainStrip bg={find} Title={"Consult Online"} />

               </Row>
             </Container>
             <Container>
                <h1>Feature</h1>
               <Row>
                 <Feature />
                 

               </Row>
             </Container>
         
        <Container>
          <h1>Top Speciality</h1>
          <Row>
            <Speciality />
          </Row>
        </Container>

         
        <Container>
          <h1>Lab Tests</h1>
          <Row>
            <LabTest />
          </Row>
        </Container>

         
          <Container>
          <h1>What Our Patients Say</h1>

            <Row>
            <Testimonial />
            </Row>
            
          </Container>

           </>);
}
export default WelcomeContainer