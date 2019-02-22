import {getMovies} from "./db";
// view와 비슷

const resolvers = {
    Query: {
        movies: (_, {targetDt}) => getMovies(targetDt)
    }
}


export default resolvers;