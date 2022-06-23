require("./database/connection");
const mongoose = require("mongoose")
const yargs =require("yargs")
const {addMovie, listMovies, deleteMovie, updateMovie} = require("./movies/movieMethods");
const { addTV, listTV, deleteTV } = require("./tv/tvMthods");

const app = async (yargsObj)=>{
    try{
        //adds new data/"movie"
        if(yargsObj.add){
            await addMovie({title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year})
            console.log(await listMovies())
        }else if (yargsObj.addTV){
            await addTV({title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year})
            console.log(await listTV())
        

        //lists all the data
        } else if (yargsObj.list){
            console.log(await listMovies())
        } else if (yargsObj.listTV){
            console.log(await listTV())
        

        //deletes the stated movie
        } else if (yargsObj.delete) {
            await deleteMovie({title: yargsObj.title});
        } else if (yargsObj.deleteTV) {
            await deleteTV({title: yargsObj.title});
        

        //updates the stated title
        } else if (yargsObj.update){
            await updateMovie({title: yargsObj.title, newTitle: yargsObj.newTitle});
            console.log(newTitle)
        }


        else{
            console.log("Command not recognised")
        }
    await mongoose.disconnect()
    }catch(error){
        console.log(error);
    }
}

app(yargs.argv)

// COMMANDS - MOVIE
// Add movie: node src/app.js --add --title=""
// List movies: node src/app.js --list
// Delete Movie: node src/app.js --delete --title=""
// Update movie: node src/app.js --update --title="" --newTitle=""

// COMMANDS - TV
// Add TV: node src/app.js --addTV --title=""
// List TV shows: node src/app.js --listTV
// Delete TV: node src/app.js --deleteTV --title=""