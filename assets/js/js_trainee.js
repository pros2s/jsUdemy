"use strict";

const numberOfFilms = +prompt('How many movies have you seen?', '');

//Данные в объекте
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

if (personalMovieDB.count < 10) {
  console.log('too few movies watched');
} else if (personalMovieDB.count < 30) {
  console.log('you are classic viewer');
} else if (personalMovieDB.count >= 30) {
  console.log('you are really movie fan');
} else {
  console.log('error');
}

//Данные в promt
for (let i = 0; i < 2; i++) {
  let a = prompt('One of the movies you watched?', ''),
      b = +prompt('How would you rate it?', '');

  if (a != '' && a.length < 50 && a != null && b != null && b != '') {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

console.log(personalMovieDB);