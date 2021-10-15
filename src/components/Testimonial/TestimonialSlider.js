import { useEffect, useState } from "react";
import Slider from "react-slick";
import SlideFirst from "./SlideFirst";
import SlideSecond from "./SlideSecond";

const TestimonialSlider=({})=>{
    const[nav1,setNav1]=useState();
    const [nav2,setNav2]=useState();
    useEffect(()=>{
         
    });
    
    const settings = {
     
      slidesToShow: 3,
      slidesToScroll:1,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
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
          <Slider  asNavFor={nav2}
          ref={slider =>setNav1(slider)}>
            
            <SlideFirst />

            <SlideFirst />

            <SlideFirst />

            <SlideFirst />

            <SlideFirst />

            <SlideFirst />
          </Slider>

          <Slider  asNavFor={nav1}
          ref={slider =>setNav2(slider)}
          {...settings}>
             
             <SlideSecond />
             <SlideSecond />
             <SlideSecond />
             <SlideSecond />
             <SlideSecond />
             <SlideSecond />
          </Slider>

         </>);

}
export default TestimonialSlider;
