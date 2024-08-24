const styles = {
    memberNames: {
        textShadow: '1px 1px rgba(0,0,0,0.2)',
        },
    listItemsOpened:{
        textTransform:'capitalize',
        marginTop:'2px',
        marginLeft:'5px',
        display:'block',
        border: '1px solid rgba(0,0,0,0.1)',
        borderRadius:'8px',
        padding:'2px',
        boxShadow: '1px 1px 3px 0px rgba(0,0,0,0.5)',
        height:'80px',
        backgroundColor:`rgba(255,255,255,0.4)`,
        transition:'all 0.3s'},
    listItemsClosed:{
        textTransform:'capitalize',
        marginTop:'2px',
        marginLeft:'5px',
        display:'block',
        transition:'all 0.2s'},
    memberDOBTitle:{
        marginTop:'5px',
        fontSize:'0.8rem',
        display:'inline',
        color:'rgba(0,0,0,0.1)',
        textShadow: '1px 1px rgba(0,0,0,0.85)',},
    memberDOBText:{
        margin:'5px 15px 0 0',
        fontSize:'0.8rem',
        display:'inline',
        float:'right',},
}

const ListItem = ({item, listItemOpen=false}) => {
    return <div style={listItemOpen?styles.listItemsOpened:styles.listItemsClosed}>
    <div style={styles.memberNames}>                    
        {item.name}
    </div>
    {listItemOpen && 
    <>
    <div style={styles.memberDOBTitle}>date of birth:</div>
    <div style={styles.memberDOBText}>{item.dob}</div>
    </>
    }
</div>
}

export default ListItem;