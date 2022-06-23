const mongoose = require("mongoose");
const yargs = require("yargs");
const TV = require("./tvModels");

//add tv show
exports.addTV = async(tvObj) =>{
    try{
        await TV.create(tvObj)
    } catch(error){
        console.log(error)
    }
} 

//read all entries 
exports.listTV = async(yargs) =>{
    try{
        return await TV.find({})
    }catch(error){
        console.log(error)
    }
};

//deletes a data entry
exports.deleteTV = async (tvObj) => {
    try {
        const response = await TV.deleteOne(tvObj);
        console.log(response.deletedCount > 0);
    } catch (error) {
        console.log(error)
    }
};
