const formValidation =(function(){
  return{
    validate(state){
      let errors ={}
      if(!state.username){
        errors.username="Please enter username"
      }
      if(!state.password){
        errors.password ="Please enter a password"
      }
      return errors
    }

  }
}())

export default formValidation
