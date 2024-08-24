export const returnBirthdays = (array, month) => {
    const birthdaysForCurrentMonth = [];
    array.map((family)=>family.members.map(member=>member.dob?.slice(3,5)==month.number && birthdaysForCurrentMonth.push(member)))
    
    birthdaysForCurrentMonth.sort((a, b)=>a.dob.slice(0,2)-b.dob.slice(0,2));
    return birthdaysForCurrentMonth;
  }
