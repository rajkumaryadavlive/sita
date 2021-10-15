import Slider from "react-slick";
import banner from '../../../assets/images/speciality/d.jpg';
import LabTestSlide from "./LabTestSlide";
const LabTestSlider=()=>{

    let settings = {
        
        infinite: true,
        slidesToShow:3,
        speed: 500,
        rows: 1,
        slidesPerRow:2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                slidesPerRow:1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                slidesPerRow:1,
              }
            }
          ]
      };

    return(<>
            <Slider {...settings}>
                
                <LabTestSlide  banner={banner} />

                <LabTestSlide  banner={banner} />

                <LabTestSlide  banner={banner} />

                <LabTestSlide  banner={banner} />

                <LabTestSlide  banner={banner} />

                <LabTestSlide  banner={banner} />
            </Slider>
          
          </>)
}
export default LabTestSlider;