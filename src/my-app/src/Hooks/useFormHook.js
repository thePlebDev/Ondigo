import {useState,useEffect} from 'react';

const useFormHook=(validationFunc)=>{

  const [state,setState] = useState({username:"",password:""})
  const [errors,setErrors] = useState({})
  const [isSubmitting,setIsSubmitting] = useState(false)

  const handleChange=(e)=>{
    const {name,value} = e.target
    setState({...state,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setIsSubmitting(true)
    setErrors(validationFunc(state))

  }

useEffect(()=>{
  if(isSubmitting && Object.keys(errors).length ===0){
    console.log("THIS IS WHERE AXIOS NEEDS TO GO")
    console.log("API CALL WAS MADE")
    setIsSubmitting(false)
  }
},[errors,isSubmitting])

  return{
    state,
    handleChange,
    handleSubmit
  }

}

export default useFormHook
