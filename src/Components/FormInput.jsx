const FormInput = ({title, type='text', changeHandler, value}) => {
    return <>
        <p style={styles.labels}>{title}: </p>
        <input style={styles.inputs} type={type} onChange={changeHandler} value={value}></input>
        <br/>
    </>
}

const styles = {
    labels:{
        marginBottom:'0', textShadow:'1px 1.2px rgba(0,0,0,0.2)',
        textTransform:'capitalize',
    },
    inputs:{
        borderRadius:'8px',
        padding:'3px',
        boxShadow:'1px 1px 4px rgba(0,0,0,0.4) inset',
        border:'none',},
    }

export default FormInput;