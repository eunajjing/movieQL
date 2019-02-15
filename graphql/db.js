
export const people = [
{ 
    id: 1,
    name: "name value1",
    age: 21,
    gender: "intersex"
    
},
{ 
    id: 2,
    name: "name value2",
    age: 22,
    gender: "intersex"
    
},
{ 
    id: 3,
    name: "name value3",
    age: 23,
    gender: "intersex"
    
},
{ 
    id: 4,
    name: "name value4",
    age: 24,
    gender: "intersex"
    
},
{ 
    id: 5,
    name: "name value5",
    age: 25,
    gender: "intersex"
    
}];

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);

    // 필터의 신텍스
    // arr.filter(callback(element[, index[, array]])[, thisArg])
    // 콜백할 값이 없으면 빈 값을 리턴
    return filteredPeople[0];
}