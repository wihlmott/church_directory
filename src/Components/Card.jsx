/*takes in:
width, height
heading,
subheading,
profilePic,
list items,
center,
transparency
*/
import { useState } from "react";
import ProfilePic from "./ProfilePic";
import ListItem from "./ListItem";

const Card = ({
    width=false, height=false,
    profilePic=false,
    heading=false,
    subheading=false,
    listItems=false,
    center=false,
    transparency=1
}) => {
    const [heightState,setHeightState] = useState(height);
    const [listItemOpen, setListItemOpen] = useState(false);

        const styles = {
            cardStyles:{
                boxShadow:' 1px 1px 4px 0px rgba(0,0,0,0.75)',
                border:'1px solid transparent',
                borderRadius:'20px',
                width:width?width:'350px',
                height:heightState?heightState:'250px',
                overflowY:'scroll',
                padding:'5px',
                boxSizing:'border-box',
                marginRight:center?'auto':'5px',
                marginLeft:center?'auto':'5px',
                marginTop:center?'5px':'5px',
                display:center?'block':'inline-block',
                backgroundColor:`rgba(255,255,255,${transparency})`,
                transition:'all 0.3s'
            },
        heading:{textAlign:'center',
            position:'relative',
            top:'-10px',
            textTransform:'uppercase',
            textShadow: '1px 1.5px rgba(0,0,0,0.2)',
            borderBottom:'1px solid rgba(0,0,0,0.2)'
            },
        subheading: {
            textTransform:'capitalize',
            margin:'-15px 0px 5px 5px',
            fontSize:'0.75rem',
            color:'rgba(0,0,0,0.6)',
        },
    }

    const maxHeightHandler = () => {
        if(heightState!='90vh')setHeightState('90vh')
        else setHeightState(height)
    }
    const listItemOpenHandler = () => setListItemOpen(!listItemOpen)

    const handleClick = () => {
        listItemOpenHandler();
        maxHeightHandler();
    }

    return <div style={styles.cardStyles} onClick={handleClick}>
        {profilePic && <ProfilePic/>}
        {heading && <h3 style={styles.heading}>{heading}</h3>}
        {subheading && <h4 style={styles.subheading}>{subheading}:</h4>}
        {listItems && listItems.map((item)=><ListItem key={item.name} item={item} listItemOpen={listItemOpen}/>)}
    </div>
}

export default Card;