// function getDate(birth, death){
//     if(!death){
//         const date = new Date();
//         let death = date.getFullYear();
//         console.log(currentYear);
//     }
//     return death - birth;
// }

// const findTheOldest = function(people) {
//   return people.reduce((oldestPerson, currentPerson) =>{
//     let getOldest = getDate(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
//     let getCurrent = getDate(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//     return getOldest < getCurrent ? currentPerson : oldestPerson;
//   });
// };

const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  
  const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };
  

// Do not edit below this line
module.exports = findTheOldest;
