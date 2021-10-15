import { Col ,Card} from "react-bootstrap";

const FeatureSlide=({banner})=>{
    return(<>
               
                  <Card className="spread-item">
                  <Card.Img src={banner} alt="Card image" className="feature-image" />
                  <Card.ImgOverlay>
                  <Card.Title></Card.Title>
                  <Card.Text>
                       
                  </Card.Text>
                  <Card.Text></Card.Text>
                  </Card.ImgOverlay>
                 </Card>
           
         
           </>);
}
export default FeatureSlide;