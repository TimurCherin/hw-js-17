                                                        // ex 1
const person = {
    name: "Nelli",
    surname: "Laroy",
    age: 25,
};

function personInfo (person) {
    const {name, surname, age} = person;
    const info = `Мене звати ${name} ${surname} і мені ${age} років`
    return info
}
console.log(personInfo(person));
                                                        // ex 2
const student = {
    name: "Bruse",
    surname: "Lee",
    grandes: [4, 5, 3],
};
function calculateAverageGrande (student) {
    const {name, surname, grandes, grandes: [grade1, grade2, grade3]} = student;
    const averageGrande = (grade1 + grade2 + grade3) / grandes.length;
    return `Середня оцінка учня ${name} ${surname} = ${averageGrande}`;
};
console.log(calculateAverageGrande(student));
                                                        // ex 3
const person2 = {
    name: "John",
    emails: ["john@gmail.com", "john@example.com", "john123@yahoo.com"],
};
function getFirstEmail (person2) {
    const {name, emails: [email1, email2, email3]} = person2;
    const firstEmail = email1;
    return firstEmail;
};
console.log(getFirstEmail(person2));
                                                        // ex 4
const data = {
    users: [
        {name: "John", age: 25},
        {name: "Jane", age: 17},
        {name: "Bob", age: 30},
        {name: "Alice", age: 20},
    ]
};
function getAdultUsers (data) {
    const {users} = data;
    const adultUsers = [];
    for (const obj of users){
        const {name, age} = obj;
        if (age >= 18){
            adultUsers.push(name)
        }
    }
    return adultUsers
}
console.log(getAdultUsers(data));
                                                        // ex 5
const musicLibrary = {
    count: 2,
    artists: [
        {
            name: "The Beatles",
            albums: [
                {
                    title: "Sgt. Pepper`s Lonely Hearts Club Band",
                    year: 1967,
                    tracks: [
                        { title: "Lucy in the Sky with Diamonds",
                        duration: "3:28",
                    },
                    {title: "A Day in the Life", duration: "5:33"}
                    ]
                },
                {
                    title: "Abbey Road",
                    year: 1969,
                    tracks: [
                        {title: "Come Together", duration: "4:19"},
                        {title: "Somethink", duration: "3:01"},
                        {title: "Here Comes the Sun", duration: "3:06"},
                    ]
                }
            ]
        },
        {
            name: "Pink Floyd",
            albums: [
                {
                    title: "The Wall",
                    year: 1979,
                    tracks: [
                        {title: "Another Brick in the Wall, Part 2", duration: "3:59"},
                        {title: "Comfortably Numb", duration: "6:23"},
                        {title: "Hey You", duraton: "4:40"},
                    ]
                },
                {
                    title: "Dark Side of the Moon",
                    year: 1973,
                    tracks: [
                        {title: "Speak to Me Breathe", duration: "3:58"},
                        {title: "Time", duration: "7:06"},
                        {title: "Money, Part 2", duration: "6:22"},
                    ]
                }
            ]
        }
    ]
}
const {count, artists: [{name, albums: [{title: title1, year: year1, tracks: [{title: title2, duration: duration1}, {title: title3, duration: duration2}]}, {title, year: year2, tracks: [{title: title4, duration: duration3}, {title: title5, duration: duration4}, {title: title6, duration: duration5}]}]}, {name: name1, albums: [{title: title7, year: year3, tracks: [{title: title8, duration: duration6}, {title: title9, duration: duration7}, {title: title10, duration: duration8}]},{title: title11, year: year4, tracks: [{title: title12, duration: duration9}, {title: title13, duration: duration10}, {title: title14, duration: duration11}]}]}]} = musicLibrary;