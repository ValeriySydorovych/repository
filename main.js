document.write("<table border='3'><tr><td>Карточка пользователя </td></tr>");
let userCard={
    name: 'Valeriy',
    surname: 'Sydorovych',
    DateOfBirth: {
        day: 7,
        month: 'June',
        year: 1979
    },
    ProgrammingSkills: 'HTML, CSS, PHP, JS',
    nameFrends: {
        frends: 'Andrey',
        frendsProgrammingSkills: ['HTML', 'CSS', 'JS']
    }
};
for (let key in userCard) {
      if ( typeof userCard[key]=='object' ) {
        for (let key1 in userCard[key]) {
            document.write("<tr><td>" + key1 + "</td><td>" + userCard[key][key1] + "</td></tr>");
        }
    } else {
            document.write("<tr><td>" + key + "</td><td>" + userCard[key] + "</td></tr>");
    }
};

console.log(userCard);
console.log(userCard.DateOfBirth);
console.log(userCard.ProgrammingSkills);
//console.log(userCard.frends.name);
