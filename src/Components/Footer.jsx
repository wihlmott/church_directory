const Footer = ({icons=false, setPage}) => {    
    return <div style={styles.footerStyle}>
        <div style={styles.footerDiv}>
            {icons && icons.map((icon)=>
                <div key={icon.name} style={styles.icons} onClick={()=>{setPage(icon.name)}}>
                 {icon.element}   
                </div>
            )}
        </div>
    </div>
}
const styles = {
        footerStyle:
            {position:'fixed', zIndex:'10', bottom:'0', left:'0', width:'100vw', height:'50px', backgroundColor:'white', borderTop:'1px solid rgba(0,0,0,0.2)'},
        footerDiv:
            {margin:'auto', marginTop:'5px', width:'auto', textAlign:'center', },
        icons:
            {fontSize:'40px', color:'rgba(133,11,108,1)', margin:'0 2px 0 2px', display:'inline'},
    }

export default Footer;