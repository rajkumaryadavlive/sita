import Slider from "react-slick";
import Slide from "./Slide";
import banner from '../../../assets/images/speciality/d.jpg';
import heart from '../../../assets/images/speciality/heart.png';
import dental from '../../../assets/images/speciality/dental.png';
import urology from '../../../assets/images/speciality/neurology.png';
import stomach from '../../../assets/images/speciality/stomach.png';
import opthalmology from '../../../assets/images/speciality/opthalmology.png';
const SpecialitySlider=()=>{

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
                <Slide banner={banner} />
                <Slide banner={heart} />
                <Slide banner={dental} />
                <Slide banner={urology} />
                <Slide banner={stomach} />
                <Slide banner={opthalmology} />

                <Slide banner={banner} />
                <Slide banner={heart} />
                <Slide banner={dental} />
                <Slide banner={urology} />
                <Slide banner={stomach} />
                <Slide banner={opthalmology} />
                
            </Slider>
          
          </>)
}
export default SpecialitySlider;