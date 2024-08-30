import { useState } from "react";
import Button from "./Button";
import FormInput from "./FormInput";
import { camelCase } from "../Helpers/helperFunctions";

const FormComp = ( {formQuestions} ) => {
    const [formState, setFormState] = useState({email:'', password:''});
    const [newUserFormState, setNewUserFormState] = useState({
        name:'', surname:'',
        gender:'', neeSurname:'',
        email:'', address:'', cellNumber:'',
        dateOfBirth:''})
        
    const [showSignUpInputs, setShowSignUpInputs] = useState(false);

    const handleEmailChange = (e) => setFormState({email:e.target.value, password:formState.password});
    const handlePasswordChange = (e) => setFormState({email:formState.email, password:e.target.value});
    const handleChange = (e, type) => setNewUserFormState((prev)=>{
            return {...prev, [camelCase(type)]:e.target.value}
        });
    
    const clearForm = () => {
        if(!showSignUpInputs) setFormState({email:'', password:''});
        if(showSignUpInputs) setNewUserFormState({
            name:'', surname:'',
            gender:'', neeSurname:'',
            email:'', address:'', cellNumber:'',
            dateOfBirth:''})
        
        setShowSignUpInputs(false);
    }

    const formSubmitHandler = () => {
        if(!showSignUpInputs)console.log(formState);
        if(showSignUpInputs)console.log(newUserFormState)
        clearForm();
    }

    const openSignUp = () => setShowSignUpInputs(!showSignUpInputs)

    return <form style={{textAlign:'center', marginTop:'-10px'}}>

        <FormInput title={'Email'} changeHandler={!showSignUpInputs?handleChange:handleEmailChange} value={formState.email}/>
        {!showSignUpInputs && <FormInput title={'Password'} type={'password'} changeHandler={handlePasswordChange} value={formState.password}/>}

        {showSignUpInputs && formQuestions.map((title)=>{
            return <FormInput key={title} title={title} value={newUserFormState[camelCase(title)]} changeHandler={e=>handleChange(e,title)}/>
        })}
            
    <Button text={!showSignUpInputs?'sign in':'sign up'} clickHandler={formSubmitHandler}/>
    <Button text={!showSignUpInputs?'sign up':'back'} clickHandler={openSignUp}/>
  </form>
}

export default FormComp;

//make it so that on submit a request is sent to my email. I respond with username and password