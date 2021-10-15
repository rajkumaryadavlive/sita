import { Col ,Card} from "react-bootstrap";

const MainStrip=({bg,Title})=>{
    return(<>
          <Col md={4}>
                  <Card className="img-icon-service-box">
                  <Card.Img variant="top" src={bg}  width="100"/>
                  <Card.Title className="text-center">{Title}</Card.Title>
                 </Card>
           </Col>
         </>)
}
export default MainStrip;