export const returnBirthdays = (array, month) => {
    const birthdaysForCurrentMonth = [];
    array.map((family)=>family.members.map(member=>member.dob?.slice(3,5)==month.number && birthdaysForCurrentMonth.push(member)))
    
    birthdaysForCurrentMonth.sort((a, b)=>a.dob.slice(0,2)-b.dob.slice(0,2));
    return birthdaysForCurrentMonth;
  }

export function camelCase(str) {
    // Using replace method with regEx
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}