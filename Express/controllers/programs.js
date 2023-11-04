const { response, request} = require("express");


let programList = [
  {
    "id":1,
    "title":"The Simpsons",
    "image":"https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
  },
  {
    "id":2,
    "title":"Gravity Falls",
    "image":"https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_SY1000_CR0,0,641,1000_AL_.jpg"
  },
  {
    "id":3,
    "title":"Bojack Horseman",
    "image":"https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  },
  {
    "id":4,
    "title":"Adventure Time",
    "image":"https://m.media-amazon.com/images/M/MV5BMjE2MzE1MDI2M15BMl5BanBnXkFtZTgwNzUyODQxMDE@._V1_SY1000_CR0,0,731,1000_AL_.jpg",
  },
  {
    "id":5,
    "title":"My little Pony",
    "image":"https://m.media-amazon.com/images/M/MV5BMTk4NTgxMjItZTU5ZS00NGE3LWJlODQtMTMzOTJlZmU5ODk1XkEyXkFqcGdeQXVyNjUzMDIyNzE@._V1_.jpg",
  },
  {
    "id":6,
    "title":"Ed, Edd n Eddy",
    "image":"https://m.media-amazon.com/images/M/MV5BMGFiZGI4Y2ItMzkzOC00OTE5LThlZDgtNzE1YTdmNTA5ZTZkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTEwMTkwOTI@._V1_.jpg"
  },
];
const getAllPrograms = (req = request, res = response) =>{
    res.status(200).json({
       programList
    });
}

const getProgramById = (req = request, res = response)=>{
  const id = req.params.id;

  const program = programList.find(program => program.id == id);
  res.status(200).json({
    program
 });
}

module.exports = {
    getAllPrograms,
    getProgramById
}