export const Auth =()=>{
    
    if (localStorage.getItem('auth')){
        return true;
    }else{
        return false;

    } 

}
  