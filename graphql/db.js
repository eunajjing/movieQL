import fetch from "node-fetch"
const API_URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=d5f6948fe11311d73df6fefe617a4757&targetDt="

export const getMovies = (targetDt) => {
    let REQUEST_URL = API_URL;
    REQUEST_URL += `${targetDt}`;
    return fetch(REQUEST_URL)
    .then(res =>  res.json())
    .then(json => json.boxOfficeResult.dailyBoxOfficeList);
};