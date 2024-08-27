import { FiLogIn } from "react-icons/fi";
import { colors } from "../config";

const Footer = ({icons=false, setPage}) => {    
    return <div style={styles.footerStyle}>
        <div style={styles.footerDiv}>
            {icons && icons.map((icon)=>
                <div key={icon.name} style={styles.icons} onClick={()=>setPage(icon.name)}>
                 {icon.element}   
                </div>
            )}
        <FiLogIn style={{...styles.icons, ...styles.signin}} onClick={()=>setPage('signin')}/>
        </div>
    </div>
}
const styles = {
        footerStyle:
            {position:'fixed', zIndex:'10', bottom:'0', left:'0', width:'100vw', height:'50px', backgroundColor:'white', borderTop:'1px solid rgba(0,0,0,0.2)'},
        footerDiv:
            {margin:'auto', marginTop:'5px', width:'auto', textAlign:'center', },
        icons:
            {fontSize:'40px', color:colors.iconsColor(1), margin:'0 2px 0 2px', display:'inline'},
        signin:{float:'right', margin:'0 5px 0 -50px'},
    }

export default Footer;