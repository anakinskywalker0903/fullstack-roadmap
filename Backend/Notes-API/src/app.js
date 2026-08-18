//server ko create krna

const express = require("express")

const app = express()
app.use(express.json())

const notes = []

/* title , descrption */
/* POST Notes */
app.post('/notes',(req,res) => {

    notes.push(req.body)

    res.status(201).json({
        message: "note creted successfully"
    })
    
})

/* GET /notes */
app.get('/notes',(req,res) => {
    res.status(200).json({
        message : "notes fetched successfully",
        notes : notes
    })
})


/* Delete /notes/:index */
app.delete('/notes/:index',(req,res) => {

    const index = req.params.index 
    
    delete notes [  index ] 

    res.status(200).json({
        message : "note deleted successfully"
    })

})

app.patch("/notes/:index",(req,res) => {
    
    const index = req.params.index

    const descrption = req.body.descrption

    notes [index].descrption = descrption

    res.status(200).json({
        message:"note updated successfully"
    })

})

module.exports = app