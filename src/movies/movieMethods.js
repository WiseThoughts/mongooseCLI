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

// //updates the data
// exports.updateMovie = async (movieObj, yargsObj) => {
//     try {
//         if (yargsObj.titleChange){
//         const modded = await Movie.findOneAndUpdate({title: movieObj.title}, 
//             {$set: {title: movieObj.newTitle,}});
//         console.log(modded.modifiedCount > 0);
//         }else if (yargsObj.yearChange){
//             const modded = await Movie.findOneAndUpdate({year: movieObj.year}, 
//                 {$set: {year: movieObj.newYear,}})
//                 console.log(modded.modifiedCount > 0);
//         }else if (yargsObj.actor){
//             const modded = await Movie.findOneAndUpdate({actor: movieObj.actor}, 
//                 {$set: {actor: movieObj.newActor,}});
//             console.log(modded.modifiedCount > 0);
//         }else if (yargsObj.watched){
//             const modded = await Movie.findOneAndUpdate({watched: movieObj.watched}, 
//                 {$set: {watched: movieObj.newWatched,}});
//             console.log(modded.modifiedCount > 0);
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }


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