import { useState } from "react";
import { colors } from "../config";

const FormComp = () => {
    const [formState, setFormState] = useState({email:'', password:''});
    
    const handleEmailChange = (e) => setFormState({email:e.target.value, password:formState.password})
    const handlePasswordChange = (e) => setFormState({email:formState.email, password:e.target.value})
    const clearForm = () => setFormState({email:'', password:''})

    const formSubmitHandler = () => {
        console.log(formState)
        clearForm();
    }

    return <form style={{textAlign:'center', marginTop:'-10px'}}>

        <p style={styles.labels}>Email: </p>
        <input style={styles.inputs} type='text' onChange={handleEmailChange} value={formState.email}></input>
        <br/>

        <p style={styles.labels}>Password: </p>
        <input style={styles.inputs} type='password' onChange={handlePasswordChange} value={formState.password}></input>
        <br/>
    
    <div style={styles.submitBtn} onClick={formSubmitHandler}>submit</div>
  </form>
}

const  styles = {
    labels:{marginBottom:'0', textShadow:'1px 1.2px rgba(0,0,0,0.2)'},
    inputs:{borderRadius:'8px', padding:'3px', boxShadow:'1px 1.25px rgba(0,0,0,0.3) inset',},
    submitBtn:{
        marginTop:'10px',
        display:'inline-block',
        borderRadius:'8px',
        boxShadow:'1px 2px 4px 1px rgba(0,0,0,0.4)',
        padding:'7px',
        cursor:'pointer',
        backgroundColor: colors.iconsColor(0.8),
        textTransform:'uppercase',
        color:'white',
        textShadow:'1px 1.2px rgba(0,0,0,0.4)'
    },

}

export default FormComp;