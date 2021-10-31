import React,{useState,useEffect} from 'react'
import SigninForm from "./SigninForm";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../actions';
const axios = require('axios');
const Signin=({show,handleClose})=>{
 
  const[mobile,setMobile]=useState(false);
  const[error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState(false);
  const [otp, setOtp] = useState('');
 

  const dispatch = useDispatch();
   
    useEffect(()=>{

    })
   function handleMobile(e){
        let mobile=e.target.value;
        setMobile(mobile);
        }
    function handleOtp(e){
      let otp=e.target.value;
      setOtp(otp);
    }    
    function handleLogin(){
        
      axios.post('http://localhost/clinic/api/authenticate',{mobile:mobile})
      .then(function (response) {
        console.log(response);
        setNext(true);
        })
        .catch(function (error) {
          console.log(error);
          setError(error);
        });

        
        
    } 
    function handleSubmit(){
        
         axios.post('http://localhost/clinic/api/verify-otp',{mobile:mobile,otp:otp})
         .then(function (response) {
           console.log(response);
                if(response.data.status==200){
                   localStorage.setItem('is_first_login',response.data.user.is_first_login);
                   localStorage.setItem('user_id',response.data.user.id);
                   localStorage.setItem('mobile',response.data.user.mobile);


                   localStorage.setItem('token',response.data.token);

                   dispatch(loginSuccess());
                   handleClose();
                }else
                  {
                    setError('wrong otp');
                  }
           })
           .catch(function (error) {
             console.log(error);
             setError(error);
           });
         
    }   
    return(<>

      {loading?"":<SigninForm next={next} error={error} handleOtp={handleOtp} handleSubmit={handleSubmit} handleLogin={handleLogin} show={show} handleClose={handleClose} handleMobile={handleMobile} />
}
         </>);
}
export default Signin;