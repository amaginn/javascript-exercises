const findTheOldest = function(people) {
    let oldest = people.filter (person => {
        if (person.hasOwnProperty('yearOfDeath') === false && (new Date().getFullYear() - person.yearOfBirth) > 100) {
            return true
        } 
        else if ((person.yearOfDeath - person.yearOfBirth) > 48) { 
            return true
        }
    });
    return oldest[0];
   
    

    // const oldest = people.sort(function(a, b){
    //     const lastGuy = a.yearOfDeath - a.yearOfBirth;
    //     const nextGuy = b.yearOfDeath - b.yearOfBirth;
    //     lastGuy < nextGuy ? -1 : 1;
    //   })
    //   console.table(oldest);
};

// Do not edit below this line
module.exports = findTheOldest;
