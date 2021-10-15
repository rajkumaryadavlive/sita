import {React,useState,useEffect} from 'react'
export const AuthController=()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return {show,setShow,handleClose,handleShow}
}
