import userConstants from "../constants";
const init = false;
const authReducer = (state = init, action) =>{
    switch(action.type) 
     {
      case userConstants.LOGIN_START:
        return {
            loading: true
          };

      case userConstants.LOGIN_SUCCESS:
        return true; 
       
      case userConstants.LOGIN_FAIL:
        return false;    
     
      case userConstants.LOGOUT_START:
        return {
          loading: true
        };
      case userConstants.LOGOUT_SUCCESS:
        return false;
      case userConstants.LOGOUT_FAILED:
         return true; 

      default: 
        return state;
     }
      
  }

export default authReducer;