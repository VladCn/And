let numberOfFilms = 0

numberOfFilms = prompt("сколько фильмов вы посмотрели?" )
console.log(numberOfFilms)

let firstFilm =''
let firstReit =''

firstFilm = prompt("Последний просмотренный фиильм?")
firstReit = prompt("оцените его")
secondFilm = prompt("Последний просмотренный фиильм?")
secondReit = prompt("оцените его")

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
}
personalMovieDB.movies[firstFilm] = firstReit
personalMovieDB.movies[secondFilm] = secondReit
console.log(personalMovieDB)