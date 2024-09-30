var hogwartsStudentProfile = {
    name: "Draco",
    surname: "Malfoy",
    age: "15",
    dateOfBith: "June 5, 1980",
    house: "Slytherin",
    bloodStatus: "Pureblood",
    wand: "hawthorn wood with a unicorn hair core"
}

function getStudentProfile (){
    for (let key in hogwartsStudentProfile){
        console.log(key + ': ' + hogwartsStudentProfile[key])
    }
}

hogwartsStudentProfile.patronus = " cannot cast";


getStudentProfile();
