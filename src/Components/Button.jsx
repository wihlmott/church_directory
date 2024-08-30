import { colors } from "../config";

const Button = ({text, clickHandler}) => {
    return <div style={styles.submitBtn} onClick={clickHandler}>{text}</div>
}

const styles = {
    submitBtn:{
        margin:'10px 2px 0 2px',
        display:'inline-block',
        borderRadius:'8px',
        boxShadow:'1px 2px 4px 1px rgba(0,0,0,0.4)',
        padding:'7px',
        cursor:'pointer',
        backgroundColor: colors.iconsColor(0.8),
        textTransform:'uppercase',
        color:'white',
        textShadow:'1px 1.2px rgba(0,0,0,0.4)'},
    };

export default Button;