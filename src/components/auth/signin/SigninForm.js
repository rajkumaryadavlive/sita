import { Modal,Button, Form, } from "react-bootstrap";
const SigninForm=({next,error,handleOtp,handleSubmit,handleLogin,show,handleClose,handleMobile})=>{
  
    return(<>
       <Modal show={show} onHide={handleClose} className="login-container"  backdrop="static"
        keyboard={false} centered>
        <Modal.Header closeButton className="login-form-header">
          <Modal.Title>Hi,</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
            {next? <Form.Group>
               <Form.Text className="text-muted">
                 {error?error:' Please enter your otp.'}
               </Form.Text>

               <Form.Control type="text" onChange={handleOtp} placeholder="Please Enter Otp" />
             </Form.Group>:
              <Form.Group>
              <Form.Text className="text-muted">
               We'll never share your mobile with anyone else.
              </Form.Text>

              <Form.Control type="text" onChange={handleMobile} placeholder="Please Enter Mobile" />
            </Form.Group>}
         </Form>        
        </Modal.Body>
        <Modal.Footer className="login-form-footer">
          {next?<Button variant="outline-primary"onClick={handleSubmit}>Verify</Button>:
          <Button variant="outline-primary"onClick={handleLogin}>Next</Button>} {' '}

        </Modal.Footer>
      </Modal>
      </>);
}
export default SigninForm;