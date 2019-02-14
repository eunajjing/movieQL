
const exPerson = {
    name: "name value",
    age: 25,
    gender: "intersex"
}


const resolvers = {
    Query: {
        person: () => exPerson
    }
}


export default resolvers;