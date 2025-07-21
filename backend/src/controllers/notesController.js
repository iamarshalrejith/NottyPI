export const  getAllNotes = async(req,res)=>{
    res.status(200).send("You got 20 notes")
}

export const createNote = async(req,res)=>{
    res.status(201).json({message:"Note creeated successfully"})
}

export const updateNote = async(req,res)=>{
    res.status(200).json({message:"Note updated successfully"})
}

export const deleteNote = async(req,res)=>{
    res.send(200).json({message:"Note deleted successfully"})
}
