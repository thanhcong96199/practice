import instance from "./apiConfig";

//call Api search article

async function callAPISearchArticle(q, type, market, limit, offset) {
    const resole = await instance.get(`search?q=${q}&type=${type}&market=${market}&limit=${limit}&offset=${offset}`)
    // console.log('result', resole);
    return resole;
}
export default callAPISearchArticle