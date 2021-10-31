import { Modal,Button, Form, } from "react-bootstrap";
import { patient } from '../../middleware/patient';

const AddPatient=({show,handleShow,handleClose})=>{

  function handleChange(){

     }

  function handleSubmit(){


  }   

  if(patient()){
    handleShow();
    }
    return(<>
       <Modal show={show} onHide={handleClose} className="login-container"  backdrop="static"
        keyboard={false} centered>
        <Modal.Header closeButton className="login-form-header">
          <Modal.Title>Hi,</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>

             <Form.Text className="text-muted">
                We'll never share your email with anyone else.
               </Form.Text>
             <Form.Group>
              
               <Form.Label>First Name</Form.Label>

                <Form.Control type="text" onChange={handleChange} placeholder="Please Enter First Name" />
             
               </Form.Group>

               <Form.Group>
              
              <Form.Label>Last Name</Form.Label>

               <Form.Control type="text" onChange={handleChange} placeholder="Please Last Name" />
            
              </Form.Group>
              <Form.Group>
               <Form.Label>Date Of Birth</Form.Label>

                <Form.Control type="text" onChange={handleChange} placeholder="dd/mm/yyyy" />

              </Form.Group>

              <Form.Group>
               <Form.Label>Gender</Form.Label>
                <div inline-radio >
                <Form.Check inline label="Male" name="gender" value="Male" type="radio" id="inline-radio-Male"/>
                <Form.Check inline label="Female" name="gender" value="Female" type="radio" id="inline-radio-Female"/>
                <Form.Check inline label="Other" name="gender" value="Other" type="radio" id="inline-radio-Other"/>

               </div>
              </Form.Group>


              <Form.Group>
               <Form.Label>Email(Optional)</Form.Label>

                <Form.Control type="text" onChange={handleChange} placeholder="Please Enter Email" />

              </Form.Group>

         </Form>        
        </Modal.Body>
        <Modal.Footer className="login-form-footer">
          <Button variant="outline-primary"onClick={handleSubmit}>Next</Button>{' '}

        </Modal.Footer>
      </Modal>
      
           </>);
}
export default AddPatient;