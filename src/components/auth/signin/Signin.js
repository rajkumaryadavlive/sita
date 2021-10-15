import React,{useState,useEffect} from 'react'
import SigninForm from "./SigninForm";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../actions';
const Signin=({show,handleClose})=>{
 
  const[mobile,setMobile]=useState(false);
  const[err, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
   

   function handleMobile(e){
        let mobile=e.target.value;
        setMobile(mobile);
        }
    function handleLogin(){
        
        setError("Login Successfully!");
        setLoading(true);
        dispatch(loginSuccess());
        handleClose();
    }    
    return(<>

      {loading?"":<SigninForm handleLogin={handleLogin} show={show} handleClose={handleClose} handleMobile={handleMobile} />
}
         </>);
}
export default Signin;