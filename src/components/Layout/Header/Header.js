import{React,useState} from 'react';
import UserCard from '../../auth/profile/UserCard';
import Signin from "../../auth/signin";
import Navigation from "./Navigation";
import { useSelector } from 'react-redux';
import AddPatient from '../../patients/AddPatient';
const Header=(req,res)=>{
    const logged = useSelector((state) => state.loggedIn);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return(<>
          <Navigation handleShow={handleShow}  />   
          {logged?"":<Signin show={show} handleClose={handleClose} />
           }

           {logged?<UserCard show={show} handleClose={handleClose} />
            :""}

           {logged?<AddPatient show={show} handleClose={handleClose} /> :""}
          </>)
}
export default Header;