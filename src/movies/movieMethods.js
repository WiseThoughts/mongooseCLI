const mongoose = require("mongoose");
const Movie = require("./movieModels");

//add movie
exports.addMovie = async(movieObj) =>{
    try{
        await Movie.create(movieObj)
    } catch(error){
        console.log(error)
    }
} 

//read all entries 
exports.listMovies = async() =>{
    try{
        return await Movie.find({})
    }catch(error){
        console.log(error)
    }
};