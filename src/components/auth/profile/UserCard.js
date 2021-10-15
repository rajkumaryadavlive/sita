import React,{useEffect} from 'react'
import { Card ,ListGroup} from "react-bootstrap";

const UserCard=({show,handleClose})=>{
  useEffect(()=>{
     document.addEventListener("mousedown",()=>{
      handleClose();
     });
  });
    return(<>

          {show? <Card className="user-menu-container">
           <ListGroup variant="flush">
            <ListGroup.Item>Raj Kumar Yadav</ListGroup.Item>
            <ListGroup.Item>UHID:aps55555</ListGroup.Item>
            <ListGroup.Item><span>Male</span>|<span>28</span>
              <span className="ml-2">7749937594</span>
            </ListGroup.Item>
            <ListGroup.Item>Manage Profile</ListGroup.Item>
            <ListGroup.Item>My Orders</ListGroup.Item>
            <ListGroup.Item>My Payments</ListGroup.Item>
            <ListGroup.Item>Health Records</ListGroup.Item>
            <ListGroup.Item>Logout</ListGroup.Item>
            </ListGroup>
           </Card> :""}

        </>);
}
export default UserCard;