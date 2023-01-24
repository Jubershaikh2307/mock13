const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    name:String,
    position:String,
    contract:Number,
    location:String
})

const jobModal = mongoose.model("job",jobSchema)

module.exports={
    jobModal
}