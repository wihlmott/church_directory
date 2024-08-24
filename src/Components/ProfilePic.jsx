import blankProfilePic from '../../images/blank_profilePic.png'

const ProfilePic = ({image=false}) => {
    return <div >
        <img style={{height:'90px', display:'block', margin:'auto', border:'1px solid grey', borderRadius:'50%', paddingTop:'1px'}} src={image?image:blankProfilePic} alt='profile image'></img>
    </div>
}

export default ProfilePic;