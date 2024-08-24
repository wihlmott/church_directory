import backgroundImg from '../images/background_whiteIMG.jpg'

import FamilyCard from "./Components/FamilyCard"
import Footer from "./Components/Footer";
import ListItem from './Components/ListItem';

import { icons, pages } from "./config";
import { returnBirthdays } from './Helpers/helperFunctions';

import { useState } from "react";

const allFamilies = [
  {surname:'Valentine', members:[
    {name:'Wihlmott', dob:'31/03/1991'},
    {name:'Simone', dob:'28/05/1996'},
    {name:'Ezra',dob:'01/01/2021'},
    {name: 'Ezekiel', dob:'13/02/2022'}]},
  {surname:'George', members:[
    {name:'Jayson', dob:'17/02/1996'},
    {name:'Courtney',},
    {name: 'Isaac', dob:'29/03/2022'}]},
  {surname:'Van schalkwyk', members:[
    {name:'Wade', dob:'10/10/1990'},
    {name:'Alanza',dob:'18/06/1993'},
    {name:"Violet", dob:''}]},
]

const currentMonth = {number:(new Date()).getMonth(),long:(new Date()).toLocaleString('default', {month:'long'})};
const dummyMonth = {number:'02', long:'February'}

function App() {
  const [page, setPage] = useState(pages[0]);

const styles = {
  backgroundImg: {
    backgroundImage:`url(${backgroundImg})`,
    backgroundSize:'contain',
    backgroundFilter:'blur',
    height:`100vh`, width:'100%',
    position:'absolute', top:'0', left:'0',
    zIndex:'-1',
    opacity:'0.8',},
  divMax:{height:'100vh', overflow:'scroll'},
  calendarHeading:{textAlign:'center',
    borderBottom:'1px solid rgba(0,0,0,0.3)',
    marginTop:'5px',
    textShadow:'1px 2px 1px rgba(0,0,0,0.2)'},
}

  return (
    <>
      <div style={styles.backgroundImg}>
      </div>

      {page=='phonebook' && <div style={styles.divMax}>
        {allFamilies.map((family)=><FamilyCard key={family.surname+family.members[0]} familyDetails={family}/>)}
      </div>}

      {page == 'calendar' && <div style={styles.divMax}>
          <h3 style={styles.calendarHeading}>
            {dummyMonth.long}
          </h3>
          {/* {returnBirthdays(allFamilies,currentMonth).map((item)=>
          <ListItem key={item.name} item={item} listItemOpen={true}/>)} */}
          {returnBirthdays(allFamilies,dummyMonth).map((item)=>
          <ListItem key={item.name} item={item} listItemOpen={true}/>)}
        </div>}

      <Footer icons={icons} setPage={setPage}/>
    </>
  )
}

export default App
