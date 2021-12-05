
/**
 * 
 * @param {*} films 
 * @returns tab director/films
 */
const directors = (films) => films.reduce((a, { director, title }) => {
    if (!a[director]) a[director] = [];
    a[director].push(title);
    return a;
}, []);


const format = (directorsFilms) => Object.entries(directorsFilms).map(([director, films]) => {
    return {
        name: director,
        films: films.map((film) => {
            return { title: film }
        })
    }
})

module.exports = {
    directors,
    format
}