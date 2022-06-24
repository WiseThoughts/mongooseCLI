require("./database/connection");
const mongoose = require("mongoose")
const yargs =require("yargs")
const {addMovie, listMovies, deleteMovie, updateMovie, updateMovieActor, updateMovieYear, } = require("./movies/movieMethods");
const { addTV, listTV, deleteTV, updateTV, updateTVSeasons } = require("./tv/tvMthods");

const app = async (yargsObj)=>{
    try{
        //adds new data/"movie"
        if(yargsObj.add){
            await addMovie({title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year})
            console.log(await listMovies())
        }else if (yargsObj.addTV){
            await addTV({title: yargsObj.title, seasons: yargsObj.seasons, watched: yargsObj.watched})
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
            console.log(await listMovies())
        } else if (yargsObj.updateActor){
            await updateMovieActor({title: yargsObj.title, newActor: yargsObj.newActor});
            console.log(await listMovies())
        } else if (yargsObj.updateYear){
            await updateMovieYear({title: yargsObj.title, newYear: yargsObj.newYear});
            console.log(await listMovies())

        //TV updates
        } else if (yargsObj.updateTVTitle){
            await updateTV({title: yargsObj.title, newTitle: yargsObj.newTitle});
            console.log(await listTV())
        } else if (yargsObj.updateTVSeasons){
            await updateTVSeasons({title: yargsObj.title, newSeasons: yargsObj.newSeasons});
            console.log(await listTV())


        }else{
            console.log("Command not recognised")
        }
    await mongoose.disconnect()
    }catch(error){
        console.log(error);
    }
}

app(yargs.argv)

// COMMANDS - MOVIE
// Add Movie: node src/app.js --add --title="" --actor="" --year=""
// List Movies: node src/app.js --list
// Delete Movie: node src/app.js --delete --title=""
// Update Movie: node src/app.js --update --title="" --newTitle=""
// Update Movie: node src/app.js --updateActor --title="" --newActor=""
// Update Movie: node src/app.js --updateYear --title="" --newYear=""

// COMMANDS - TV
// Add TV: node src/app.js --addTV --title="" --seasons="" --watched=true/false
// List TV shows: node src/app.js --listTV
// Delete TV: node src/app.js --deleteTV --title=""
// Update TV: node src/app.js --updateTVTitle --title="" --newTitle=""
// Update TV: node src/app.js --updateTVSeasons --title="" --newSeasons=""