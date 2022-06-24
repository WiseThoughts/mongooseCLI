const mongoose = require("mongoose");
const yargs = require("yargs");
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

//deletes a data entry
exports.deleteMovie = async (movieObj) => {
    try {
        const response = await Movie.deleteOne(movieObj);
        console.log(response.deletedCount > 0);
    } catch (error) {
        console.log(error)
    }
};



// Update movie function
exports.updateMovie = async (movieObj) => {
    try {
        const response = await Movie.findOneAndUpdate({
            title: movieObj.title}, 
            {$set: {title: movieObj.newTitle,}},{new:true}
        );
        console.log(response.modifiedCount > 0);
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovieActor = async (movieObj) => {
    try {
        const response = await Movie.findOneAndUpdate({
            title: movieObj.title}, 
            {$set: {actor: movieObj.newActor,}},{new:true}
        );
        console.log(response.modifiedCount > 0);
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovieYear = async (movieObj) => {
    try {
        const response = await Movie.findOneAndUpdate({
            title: movieObj.title}, 
            {$set: {year: movieObj.newYear,}},{new:true}
        );
        console.log(response.modifiedCount > 0);
    } catch (error) {
        console.log(error)
    }
}