import { FaAddressBook } from "react-icons/fa";
import { IoCalendarNumberSharp } from "react-icons/io5";

export const icons = [{name:'phonebook', element:<FaAddressBook/>}, {name:'calendar', element:<IoCalendarNumberSharp/>}];

export const pages = ['phonebook', 'calendar'];

export const colors = {iconsColor: (opacity)=>`rgba(133,11,108,${opacity})`}