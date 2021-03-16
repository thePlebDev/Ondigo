import React from 'react';

import useFormHook from '../../Hooks/useFormHook.js'
import formValidation from '../../Utils/formValidation'

const Form =()=>{

const {state,handleChange,handleSubmit} = useFormHook(formValidation.validate)

  return(
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div>
        <label htmlFor="user">Username</label>
        <input type="text" id="username" name="username" value={state.username} onChange={(e)=>{handleChange(e)}}/>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={state.password} onChange={(e)=>{handleChange(e)}}/>
      </div>
      <button type="Submit">Submit</button>

    </form>
  )
}

export default Form
