import {people, getById } from "./db";
// view와 비슷

const resolvers = {
    Query: {
        people: () => people,
        // person: (_, args) => {
        //     console.log(args);
        //     // 이 경우
        //     // {id: 1}
        //     // 이 찍히는데, 쿼리에서 파라미터로 id:1을 썼기 때문
        // }

        person: (_, {id}) => getById(id)
        // 이 코드는
        // person : (_, {id}) => {
        //     getById(id);
        // }
        // 와 같다
    }
}


export default resolvers;