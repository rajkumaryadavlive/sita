import{React,useState} from 'react';
import UserCard from '../../auth/profile/UserCard';
import Signin from "../../auth/signin";
import Navigation from "./Navigation";
import { useSelector } from 'react-redux';
import AddPatient from '../../patients/AddPatient';
import { patient } from '../../../middleware/patient';
const Header=()=>{
    const logged = useSelector((state) => state.loggedIn);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(patient());
    
    return(<>
          <Navigation handleShow={handleShow}  />   
          {logged?"":<Signin show={show} handleClose={handleClose} />
           }

           {logged&&!patient()?<UserCard show={show} handleClose={handleClose} />
            :""}

           {logged&&patient()?<AddPatient show={show} handleShow={handleShow} handleClose={handleClose} /> :""}
          </>)
}
export default Header;