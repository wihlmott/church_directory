import backgroundImg from '../images/background_whiteIMG.jpg'
import Card from './Components/Card';

import FamilyCard from "./Components/FamilyCard"
import Footer from "./Components/Footer";
import FormComp from './Components/FormComp';
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
  {surname:'Wicomb', members:[
      {name:'Eugene', dob:'12/02/1967'},
      {name:'Celeste',dob:'30/03/1969'},
      {name:"Bianca", dob:'17/05/1987'}, 
      {name:"Robin", dob:'18/09/1991'}, 
      {name:"Simone", dob:'28/05/1996'}]},
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
  divMax:{height:'calc(100vh - 55px)', overflow:'scroll', paddingBottom:'55px'},
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
        {allFamilies.sort((a,b)=>a.surname>b.surname?1:-1).map((family)=><FamilyCard key={family.surname+family.members[0]} familyDetails={family}/>)}
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

      {page == 'signin' && <Card center transparency={0.85} heading={'sign in'} children={<FormComp/>}/>}

      <Footer icons={icons} setPage={setPage}/>
    </>
  )
}

export default App
