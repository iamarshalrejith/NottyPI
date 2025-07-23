import mongoose from "mongoose";

//1 - Create a schema
//2 - model based off of that scehma

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content: {
        type: String,
        required: true,
    }
},
   {timestamps: true}
)

/*
1.A model is what you use to create, read, update, and delete documents in a MongoDB collection.
2.It's a JavaScript representation of your MongoDB collection. */

const Note = mongoose.model("Note",noteSchema) // Mongoose automatically looks for a MongoDB collection named notes (plural, lowercased) and binds the model to it.

//You can now use that model to perform all CRUD operations on the collection easily.

export default Note