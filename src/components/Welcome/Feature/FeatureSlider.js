import Slider from "react-slick";
import FeatureSlide from "./FeatureSlide";
import banner from '../../../assets/images/Feature/f2.png'
import f3 from '../../../assets/images/Feature/f3.png'
import f4 from '../../../assets/images/Feature/f4.png'

const FeatureSlider=()=>{
    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow:3,
        slidesToScroll:3,
        initialSlide: 0,
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
              slidesToShow:1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
    return(<>
         <Slider {...settings}>
           <FeatureSlide banner={banner} />
           <FeatureSlide banner={f3} />
           <FeatureSlide banner={f4}  />

         </Slider>
       </>);
}
export default FeatureSlider;