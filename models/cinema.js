const Cinema = function (films) {
  this.films = films;
  this.titleList = [];
};

Cinema.prototype.titleLists = function () {
  const result = this.films.map((film) => {
    return film.title
  })
  return result;
  
  // const titles = [];
  // for (let film of this.films) {
  //   titles.push(film.title);
  // }
  // return titles;
};

Cinema.prototype.chosenByTitle = function (title) {
  const result = this.films.filter((film) => {
    return film.title === title
  })
  return result[0];
}

Cinema.prototype.chosenByGenre = function (genre) {
  const result = this.films.filter((film) => {
    return film.genre === genre;
  })
  return result;
}

Cinema.prototype.chosenByYear  = function (year) {
  const result = this.films.some((film) => {
    return film.year === year;
  })
  return result;
}

Cinema.prototype.voidYear = function (year) {
  const result = this.films.every((film) => {
    return film.year === year;
  })
  return result;
}

Cinema.prototype.checkAllLength = function (length) {
  const result = this.films.every((film) => {
    return film.length > length;
  })
  return result;
}

Cinema.prototype.totalRunningTime = function () {
  const result = (this.films).reduce((runningTotal, film) => {
    return runningTotal + film.length
  }, 0)
  return result;
}

Cinema.prototype.filmsByProperty = function (property, yOg) {
  const result = this.films.filter((film) => {
    return film[property] === yOg;
  
  
    // if (property === 'year' && film.year === yOg) {
    //   return film;
    // }else if(property === 'genre' && film.genre === yOg){
    //   return film;
    // } else {
    //   return;
    // }
  })
  return result;
}

module.exports = Cinema;
