import Card from "./Card"

import useWindowDimentions from '../Hooks/useWindowDimensions'

const FamilyCard = ({familyDetails}) => {
    const {width} = useWindowDimentions()

    return <Card
    width={width<500?'90%':false}
    center={width<500?true:false}
    transparency={0.75}
    heading={familyDetails.surname}
    profilePic
    subheading='members'
    listItems={familyDetails.members}
    />
}

export default FamilyCard; 