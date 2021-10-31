export const patient =()=>{
    
    if (localStorage.getItem('is_first_login')==0){
        return true;
    }else{
        return false;

    } 

}
  