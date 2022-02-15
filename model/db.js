const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.agzd1.mongodb.net/mycurd?retryWrites=true&w=majority`)
        console.log("database connect successfull")
    }
    catch(error){
        console.log(error)
    }
}

module.exports = connectDb;