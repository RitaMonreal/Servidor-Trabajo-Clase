const { response, request} = require("express");

let characterList = [
  {
    "id":1,
    "name": "Birdperson",
    "image": "https://rickandmortyapi.com/api/character/avatar/47.jpeg",  
  },
  {
    "id":2,
    "name": "Cop Rick",
    "image": "https://rickandmortyapi.com/api/character/avatar/74.jpeg",
  },
  {
    "id":3,
    "name": "Jackie",
    "image": "https://rickandmortyapi.com/api/character/avatar/168.jpeg",
  },
  {
    "id":4,
    "name": "Johnny Depp",
    "image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
  },
  {
    "id":5,
    "name": "Rick Sanchez",
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    "id":6,
    "name": "Gotron Pilot",
    "image": "https://rickandmortyapi.com/api/character/avatar/777.jpeg",
  }
];

const getAllCharacters = (req = request, res = response) =>{

    //estruturar parametros que van a llegar en la busqueda lo estamos sacando del req.query
    //es opcional
    const {searchTerm, sortDesc} = req.query;
  

    let response = characterList

    if(searchTerm){
      response = response.filter(character => 
        character.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    }

    if (sortDesc === 'true') {
      response.sort((a, b) => b.id - a.id); 
    }else {
      response.sort((a, b) => a.id - b.id); 
    }

    
    res.status(200).json({
        characterList: response
    });
}

const getCharactersById = (req = request, res = response) => {
  const id = req.params.id;

  const character = characterList.find(character => character.id == id);

  res.status(200).json({
    character
  });
}

module.exports = {
    getAllCharacters,
    getCharactersById
}