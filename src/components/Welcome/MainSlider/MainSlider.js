import Slider from "react-slick";
import Slide from "./Slide";
import bg from '../../../assets/images/doctor.webp'
import corona from '../../../assets/images/corona-banner.svg'
import banner1 from '../../../assets/images/banners/banner1.png';
import banner2 from '../../../assets/images/banners/slider-01.png'

import banner3 from '../../../assets/images/banners/slider-02.png'
import banner4 from '../../../assets/images/banners/slider-05.png'
import banner5 from '../../../assets/images/banners/slider-03.png'
import banner6 from '../../../assets/images/banners/slider-04.png'

const MainSlider=()=>{
    const settings = {
        focusOnSelect: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "300px",
        slidesToShow:1,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                centerPadding: "35px",
                slidesToShow: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerPadding: "1px",
                slidesToShow: 1,
              }
            }
          ]
      };
    return(<>
             <Slider {...settings}>
              <Slide banner={banner1} />
               <Slide banner={banner4}/>
               <Slide banner={banner6}/>
               <Slide banner={banner1} />
               <Slide banner={banner5} />
               <Slide banner={banner2}/>
               <Slide banner={banner3}/>
             </Slider>
         </>);
}
export  default MainSlider;